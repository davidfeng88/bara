class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def create
    @review = Review.new(review_params)
    @review.author = current_user
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
    params.require(:review).permit(:rating, :body, :business_id)
  end

end
