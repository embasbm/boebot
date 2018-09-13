class Department
  include Mongoid::Document

  field :name, type: String

  belongs_to :section
  has_many :items
  has_many :epigraphs
end
