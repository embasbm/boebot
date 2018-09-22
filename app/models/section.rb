class Section
  include Mongoid::Document

  field :name, type: String
  field :number, type: String

  belongs_to :diary
  has_many :departments, dependent: :destroy
end
