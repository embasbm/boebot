class Department
  include Mongoid::Document
  searchkick

  field :name, type: String

  embedded_in :section
  embeds_many :items
  embeds_many :epigraphs

  def search_data
    as_json only: [:name]
  end
end
