class Api::BusinessesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    businesses = Business.all.includes(:tags)

    if (params[:name] && params[:name] != "")
      businesses =
        businesses.where('lower(name) LIKE ?', "%#{params[:name].downcase}%")
        # .or(businesses.where(tags: ))
    end

    if (params[:location] && params[:location] != "")
      businesses =
        businesses.where('lower(address) LIKE ?', "%#{params[:location].downcase}%")
        .or(businesses.where('lower(city) LIKE ?', "%#{params[:location].downcase}%"))
        .or(businesses.where('lower(state) LIKE ?', "%#{params[:location].downcase}%"))
        .or(businesses.where('zipcode = ?', params[:location].to_i))
    end

    if (params[:prices] && params[:prices] != "")
      prices_numbers = params[:prices].map { |string| string.to_i }
      businesses = businesses.where(price: prices_numbers)
    end

    @businesses = businesses.includes(latest_reviews: [:author])
    render "api/businesses/index"
  end

  def show
    begin
      @business = Business.includes(reviews: [:author]).find(params[:id])
      render "api/businesses/show"
    rescue ActiveRecord::RecordNotFound
      render json: ["Couldn't find business with 'id'=#{params[:id]}"], status: 404
    end
  end

  def create
    @business = Business.new(business_params)
    @business.author = current_user
    if @business.save
      render "api/businesses/show"
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def update
    # @business = currentUser.businesses.find(params[:id])
    @business = Business.find(params[:id])

    if @business.update(business_params)
      render "api/businesses/show"
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def destroy
    # @business = currentUser.businesses.find(params[:id])
    @business = Business.find(params[:id])

    @business.destroy
    render "api/businesses/show"
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
        tag_ids: [],
      )
  end

end
