class SessionsController < ApplicationController
  def new
    @user = User.new
  end
  def create
    @user = User.find_by(email: user_params[:email])
    if @user && @user.authenticate(user_params[:password])
      session[:user_id] = @user.id
      redirect_to root_path
    else 
      @user ||= User.new
      render :new
    end
  end
  def user_params
    params
      .require(:user)
      .permit(:password, :email)
  end
end
