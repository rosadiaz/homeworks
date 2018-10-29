class ApplicationController < ActionController::Base
  private
  def current_user
    @user ||= User.find_by_id(session[:user_id])
  end
  helper_method :current_user #only if views will use this method

  def authenticate_user!
    unless current_user
      flash[:alert] = "Please sign in"
      redirect_to root_path
    end
  end

end
