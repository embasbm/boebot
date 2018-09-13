class Item
  include Mongoid::Document
  searchkick

  field :item_id, type: String
  field :title, type: String
  field :pdf_url, type: String

  embedded_in :department
  embedded_in :epigraph

  def search_data
    as_json only: [:title]
  end
end
