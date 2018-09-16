class Api::V1::ItemsController < ApplicationController
  def index
    @items = Department.find(params[:department_id])&.items
    render json: @items
  end
end
