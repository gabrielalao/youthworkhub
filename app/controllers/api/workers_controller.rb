class Api::WorkersController < ApplicationController
  def create
    @worker = Worker.new(worker_params)
    if @worker.save
      login!(@worker)
      render :show
    else
      render json: @worker.errors.full_messages, status: 401
    end
  end

  def index
    @workers = Worker.all
    render :index
  end

  def show
    @worker = Worker.find_by(id: params[:id])
    if @worker
      render :show
    else
      render json: @worker.errors.full_messages
    end
  end

  def update
    if (current_worker.nil? || current_worker.id != worker_params[:id].to_i)
      render json: ["Permission denied"], status: 404
    else
      @worker = current_worker
      if @worker.update_attributes(worker_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 401
      end
    end
  end

  def destroy
  end

  def worker_params
    params.require(:worker).permit(:id,
                                    :zip_code,
                                    :lat,
                                    :lng,
                                    :phone_number,
                                    :bio,
                                    :birth_date,
                                    :lat,
                                    :lng,
                                    :min_wage,
                                    :username,
                                    :password,
                                    :email,
                                    :picture_url)
  end
end
