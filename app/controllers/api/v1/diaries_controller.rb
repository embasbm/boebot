class Api::V1::DiariesController < ApplicationController
  before_action :seed_data, only: [:index]

  def index
    @diaries = Diary.order_by(:fecha => 'desc')
    render json: @diaries
  end

  def search
    @search = Item.search params[:search]
    @search.collect do |s|
      if s.epigraph
        s.attributes.merge!({epigraph_name: s.epigraph.name})
      end
      if s.department
        s.attributes.merge!({department_name: s.department.name})
      end
    end
    render json: {search: @search}
  end

  private
  def seed_data
    t=Time.now
    if Diary.all.empty? || Diary.last.fecha.to_date != Date.today
      ImportData.new
      # reindex_all_items
    end
  end

  def reindex_all_items
    %x[rake searchkick:reindex:all]
  end
end
