class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :current_worker

  def current_user
    return nil unless session[:token]
    @current_user ||= User.find_by(session_token: session[:token])
  end

  def current_worker
    return nil unless session[:token]
    @current_user ||= Worker.find_by(session_token: session[:token])
  end

  def login!(user)
    session[:token] = user.reset_token!
    @current_user = user
  end

  def logout!
    current_user.reset_token!
    session[:token] = nil
    @current_user = nil
  end
end
