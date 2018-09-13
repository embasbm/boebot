class Item
  include Mongoid::Document

  field :item_id, type: String
  field :title, type: String
  field :pdf_url, type: String

  searchkick

  belongs_to :department, optional: true
  belongs_to :epigraph, optional: true
end
