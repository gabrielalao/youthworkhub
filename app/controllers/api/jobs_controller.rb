class Api::JobsController < ApplicationController

  def index
    if current_user
      @jobs = Job.all.where(user_id: current_user.id)
      render :index

    elsif current_worker
      @jobs = bounds ? Job.in_bounds(bounds) : Job.all
                  .where(status: 'pending')

      if job_types_filter
        @jobs = @jobs.where(job_type: job_types_filter)
      end

      if wage_filter
        @jobs = @jobs.where("wage >= ?", wage_filter)
      end

      my_jobs = Job.where(status: 'designated')
                        .where(worker_id: current_worker.id)

      @jobs += my_jobs
      render :index
    else
      render json: ["Log in to view jobs."]
    end
  end

  def create
    @job = Job.new(job_params)
    if @job.save
      render :show
    else
      render json: @job.errors.full_messages, status: 401
    end
  end

  def show
    @job = Job.find_by(id: params[:id])
    if @job
      render :show
    else
      render json: ["The job you seek has not been found."], status: 404
    end
  end

  def update
    if params[:type] == 'ACCEPT' && current_worker
      @job = Job.find_by(id: params[:id])
      if @job
        if @job.update_attributes(status: 'designated',
                                worker_id: current_worker.id)
          render json: ["Success! You are booked to do this job!"]
        else
          render json: @job.errors.full_messages, status: 422
        end
      else
        render json: ["No job record to modify"], status: 422
      end
    elsif current_user.nil? || current_user.id != job_params[:user_id].to_i
      render json: ["Permission denied"], status: 404
    else
      @job = Job.find_by(id: params[:id]);
      if @job
        if @job.status != 'pending'
          render json: ["A worker has already accepted this job!"], status: 404
        elsif @job.update_attributes(job_params)
          render json: ["success! This job posting has been updated."]
        else
          render json: @job.errors.full_messages, status: 401
        end
      else
        render json: ["No job record to modify"], status: 422
      end
    end
  end

  private

  def bounds
    return false if params[:bounds].blank?
    params[:bounds]
  end

  def job_types_filter
    return false if params[:jobTypes].blank?
    params[:jobTypes]
  end

  def wage_filter
    return false if params[:minWage].blank?
    params[:minWage]
  end

  def accept_job_params
    params.require(:acceptance).permit(:job_id, :worker_id)
  end

  def job_params
    params.require(:job).permit(:id,
                                :user_id,
                                :description,
                                :job_type,
                                :address,
                                :duration,
                                :wage,
                                :start_time,
                                :lat,
                                :lng,
                                :cost,
                                :status,
                                :worker_id,
                                :type)
  end
end
