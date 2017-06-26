class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all.includes(:reviews)
    render "api/businesses/index"
  end

  def show
    @business = Business.find(params[:id])
    render "api/businesses/show"
  end

  def create
    @business = Business.new(business_params)

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
        :author_id,
        :name,
        :address,
        :city,
        :state,
        :zipcode,
        :price,
        :image
      )
  end

end
