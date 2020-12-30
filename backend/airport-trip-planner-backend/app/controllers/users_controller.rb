class UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
        if @user
            render json: {user: @user}
        else
            render json: {status: 500, errors: ['user not found']}
        end
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!  
            render json: {status: 'created', user: @user}
        else 
            render json: {status: 500, errors: @user.errors.full_messages}
        end
    end

    def update
        @user = User.find(params[:id])
        @user.update(user_params)
        if @user.valid?
            render json: {status: 'updated', user: @user}
        else
            render json: {status: 500, errors: @user.errors.full_messages}
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user
            logout!
            @user.destroy
            render json: {status: 'deleted'}
        else
            render json: {status: 500, errors: @user.errors.full_messages}
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end

end