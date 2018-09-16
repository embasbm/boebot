class Api::V1::DepartmentsController < ApplicationController
  def index
    @sections = Diary.find(params[:diary_id])&.sections
    @departments = @sections.collect {|x| x.departments}.flatten
    render json: @departments
  end
end
