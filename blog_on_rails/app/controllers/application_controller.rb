class ApplicationController < ActionController::Base
  private
  def current_user
    @user ||= User.find_by_id(session[:user_id])
  end
  helper_method :current_user #only if views will use this method

end
