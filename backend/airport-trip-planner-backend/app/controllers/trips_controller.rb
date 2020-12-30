class TripsController < ApplicationController

    def index
        @trips = User.find(params[:user_id]).trips
        if @trips
            render json: {trips: @trips}
        else
            render json: {status: 500, errors: ['no trips found']}
        end
    end

    def show
        @trip = Trip.find(params[:id])
        if @trip
            render json: {trip: @trip}
        else
            render json: {status: 500, errors: ['trip not found']}
        end
    end

    def create
        @trip = Trip.new(trip_params)
        @trip.user_id = User.find(params[:user_id]).id
        if @trip.save
            render json: {status: 'created', trip: @trip}
        else 
            render json: {status: 500, errors: @trip.errors.full_messages}
        end
    end

    def update
        @trip = Trip.find(params[:id])
        @trip.update(trip_params)
        if @trip.valid?
            render json: {status: 'updated', trip: @trip}
        else
            render json: {status: 500, errors: @trip.errors.full_messages}
        end
    end

    def destroy
        @trip = Trip.find(params[:id])
        if @trip
            @trip.destroy
            render json: {status: 'deleted'}
        else
            render json: {status: 500, errors: @trip.errors.full_messages}
        end
    end

    private

    def trip_params
        params.require(:trip).permit(
            :jid,
            :nickname,
            :departureDate,
            :flightNumber,
            :address,
            :city,
            :state,
            :zip
        )
    end

end
