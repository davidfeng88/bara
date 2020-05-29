class Api::BusinessesController < ApplicationController
  before_action :require_logged_in, only: %i[create update destroy]

  def feature
    @businesses = Business.all.sample(3)
    # N + 1 queries. However, in this case N = 3, not that bad. Do not
    # need to join big tables.

    # @businesses = Business.all.includes(:reviews, :tags).sample(3)

    # For big database, the table JOINs can be expensive
    render 'api/businesses/feature'
  end

  def index
    businesses = Business.all.includes(:reviews, :tags)

    if params[:tag] && Tag.find_by(label: params[:tag].split.map(&:capitalize).join(' '))
      businesses = Tag.find_by(label: params[:tag].split.map(&:capitalize).join(' ')).businesses
    end

    if params[:name] && params[:name] != ''
      businesses =
        businesses.where('lower(name) LIKE ?', "%#{params[:name].downcase}%")
    end

    if params[:location] && params[:location] != ''
      businesses =
        businesses.where('lower(address) LIKE ?', "%#{params[:location].downcase}%")
                  .or(businesses.where('lower(city) LIKE ?', "%#{params[:location].downcase}%"))
                  .or(businesses.where('lower(state) LIKE ?', "%#{params[:location].downcase}%"))
                  .or(businesses.where('zipcode = ?', params[:location].to_i))
    end

    if params[:prices] && params[:prices] != ''
      prices_numbers = params[:prices].map(&:to_i)
      businesses = businesses.where(price: prices_numbers)
    end

    @businesses = businesses
    render 'api/businesses/index'
  end

  def show
    @business = Business.includes(reviews: [:user]).find(params[:id])
    render 'api/businesses/show'
  rescue ActiveRecord::RecordNotFound
    render json: ["Couldn't find business with 'id'=#{params[:id]}"], status: 404
  end

  def create
    @business = Business.new(business_params)
    @business.author = current_user
    if @business.save
      render 'api/businesses/show'
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def update
    @business = Business.find(params[:id])
    if @business.update(business_params)
      render 'api/businesses/show'
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def destroy
    @business = Business.find(params[:id])
    @business.destroy
    render 'api/businesses/show'
  end

  private

  def business_params
    params.require(:business)
          .permit(
            :name,
            :address,
            :city,
            :state,
            :zipcode,
            :phone,
            :url,
            :price,
            :image,
            :lat,
            :lng,
            tag_ids: []
          )
  end
end
