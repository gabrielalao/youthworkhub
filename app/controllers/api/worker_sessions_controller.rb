class Api::WorkerSessionsController < ApplicationController
  def create
    @worker = Worker.check_cred(session_params[:username],
                            session_params[:password])
    if @worker
      login!(@worker)
      render "api/workers/show"
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def destroy
    @worker = current_worker
    if @worker
      logout!
      render "api/workers/show"
    else
      render json: ["Not logged in. Logout failed!"], status: 404
    end
  end

  def session_params
    params.require(:cred).permit(:username, :password)
  end
end
