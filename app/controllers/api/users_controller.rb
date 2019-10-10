class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    if (current_user.nil? || current_user.id != user_params[:id].to_i)
      render json: ["Permission denied"], status: 404
    else
      @user = current_user;
      if @user.update_attributes(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 401
      end
    end
  end

  def destroy
  end

  def user_params
    params.require(:user).permit(:id,
                                  :username,
                                  :password,
                                  :email,
                                  :picture_url,
                                  :phone_number)
  end
end
