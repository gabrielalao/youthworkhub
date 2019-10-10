class Api::SessionsController < ApplicationController
  def create
    @user = User.check_cred(session_params[:username],
                            session_params[:password])
    if @user
      login!(@user)
      render "api/users/show"
    else
      @worker = Worker.check_cred(session_params[:username],
                                  session_params[:password])
      if @worker
        login!(@worker)
        render "api/workers/show"
      else
        render json: ["Invalid username or password"], status: 401
      end
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render "api/users/show"
    else
      @worker = current_worker
      if @worker
        logout!
        render "api/workers/show"
      else
        render json: ["Not logged in. Logout failed!"], status: 404
      end
    end
  end

  def session_params
    params.require(:cred).permit(:username, :password)
  end
end
