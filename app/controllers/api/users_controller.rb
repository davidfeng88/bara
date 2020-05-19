class Api::UsersController < ApplicationController
  before_action :require_logged_out, only: %i[create update]
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render 'api/users/show'
  rescue ActiveRecord::RecordNotFound
    render json: ["Couldn't find user with 'id'=#{params[:id]}"], status: 404
  end

  # for user avatar/password update. To be implemented
  def update
    @user = User.find(params[:id])

    if @user.save
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
