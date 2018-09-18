class Api::V1::SectionsController < ApplicationController
  def index
    @sections = Diary.find(params[:diary_id])&.sections
    render json: @sections
  end
end
