class Api::ReviewsController < ApplicationController

  def index
    business = Business.find(params[:id])
    @reviews = business.reviews
    render "api/reviews/index"
  end

  def show
    @review = Review.find(params[:id])
    render "api/reviews/show"
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def update

    @review = Review.find(params[:id])

    if @review.update(review_params)
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def destroy
    @review = Review.find(params[:id])

    @review.destroy
    render "api/reviews/show"
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :author_id, :business_id)
  end

end
