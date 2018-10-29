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
  rescue_from CanCan::AccessDenied do |exception|
    respond_to do |format|
      format.json { head :forbidden, content_type: 'text/html' }
      format.html { redirect_to main_app.root_url, notice: exception.message }
      format.js   { head :forbidden, content_type: 'text/html' }
    end
  end

end
