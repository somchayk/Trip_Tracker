class Api::ReviewsController < ApplicationController
  before_action :set_trip

  def index
    render json: @trip.reviews
  end

  def create
    @review = @trip.reviews.new(reviews_params)
    if @review.save
      render json: @review
    else
      render json: { errors: @review.errors }, status: :unprocessable_entity
    end
  end

  def update
    @review = @trip.reviews.find(params[:id])
    if @review.update(reviews_params)
      render json: @review
    else
      render json: { errors: @review.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @trip.reviews.find(params[:id]).destroy
    render json: { message: 'Review Deleted'}
  end


  private

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end

  def reviews_params
    params.require(:review).permit(:stars, :subject, :body, :author, :trip_id)
  end 

end
