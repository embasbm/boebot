class Epigraph
  include Mongoid::Document
  field :name, type: String

  belongs_to :department
  has_many :items
end
