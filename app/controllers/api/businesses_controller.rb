class Api::BusinessesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    businesses = Business.all

    if (params[:name] != "")
      businesses = businesses.where('lower(name) LIKE ?', "%#{params[:name].downcase}%")
    end

    if (params[:location] != "")
      businesses =
        businesses.where('lower(address) LIKE ?', "%#{params[:location].downcase}%")
        .or(businesses.where('lower(city) LIKE ?', "%#{params[:location].downcase}%"))
        .or(businesses.where('lower(state) LIKE ?', "%#{params[:location].downcase}%"))
        .or(businesses.where('zipcode = ?', params[:location].to_i))
    end

    if (params[:minPrice] && params[:maxPrice])
      businesses = businesses.where(price: price_range)
    end

    @businesses = businesses.includes(:reviews).order('reviews.updated_at')
    render "api/businesses/index"
  end

  def show
    @business = Business.find(params[:id])
    render "api/businesses/show"
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

  def price_range
    (params[:minPrice]..params[:maxPrice])
  end

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
