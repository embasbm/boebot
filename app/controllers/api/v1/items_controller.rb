class Api::V1::ItemsController < ApplicationController
  def index

    if params[:epigraph_id].present?
      @epigraph = Epigraph.find(params[:epigraph_id])
      @items = @epigraph&.items
      @epigraphs = [@epigraph]
    else
      @department = Department.find(params[:department_id])
      @items = @department&.items
      @epigraphs = @department&.epigraphs
    end
    render json: {items: @items, epigraphs: @epigraphs}
  end
end
