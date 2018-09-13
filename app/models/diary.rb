# Diary class
class Diary
  include Mongoid::Document
  field :date_pub, type: String
  field :nbo, type: String
  field :pdf_url, type: String
  field :fecha, type: String
  searchkick

  embeds_many :sections

  def search_data
    as_json only: [:pdf_url]
  end
end
