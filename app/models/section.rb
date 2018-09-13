class Section
  include Mongoid::Document
  searchkick

  field :name, type: String
  field :number, type: String

  embedded_in :diary
  embeds_many :departments

  def search_data
    as_json only: [:name]
  end
end
