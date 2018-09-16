class Api::V1::DepartmentsController < ApplicationController
  def index
    @departments = Section.find(params[:section_id])&.departments
    render json: @departments
  end
end
