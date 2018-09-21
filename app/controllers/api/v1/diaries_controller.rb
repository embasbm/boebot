class Api::V1::DiariesController < ApplicationController
  before_action :seed_data, only: [:index]

  def index
    @diaries = Diary.order_by(:fecha => 'desc')
    render json: @diaries
  end

  def search
    @search = Item.search params[:search]
    render json: {search: @search}
  end

  private
  def seed_data
    t=Time.now
    return if t.sunday? || t.saturday?
    if Diary.last.fecha.to_date != Date.today || Diary.all.empty?
      ImportData.new
      reindex_all_items
    end
  end

  def reindex_all_items
    %x[rake searchkick:reindex:all]
  end
end
