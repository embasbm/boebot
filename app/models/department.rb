class Department
  include Mongoid::Document

  field :name, type: String

  belongs_to :section
  has_many :items, dependent: :destroy
  has_many :epigraphs, dependent: :destroy
end
