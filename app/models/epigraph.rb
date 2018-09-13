class Epigraph
  include Mongoid::Document
  searchkick

  field :name, type: String

  embedded_in :department
  embeds_many :items

  def search_data
    as_json only: [:name]
  end
end
