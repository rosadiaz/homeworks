class ApplicationController < ActionController::Base
  private
  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end
  helper_method :current_user #only if views will use this method

  def authenticate_user!
    unless current_user
      flash[:alert] = "Please sign in"
      redirect_to new_session_path
    end
  end

end
