class Api::V1::DiariesController < ApplicationController
  def index
    @diaries = Diary.order_by(:fecha => 'desc')
    render json: @diaries
  end

  def search
    @search = Item.search params[:search]
    render json: {search: @search}
  end
end
