require 'rails_helper'

RSpec.describe Api::V1::DiariesController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #search" do
    xit "returns http success" do
      get :search
      expect(response).to have_http_status(:not_found)
    end
  end

end
