FactoryBot.define do
  factory :item do
    item_id { Faker::Lorem.word }
    title { Faker::Lorem.word }
    pdf_url { Faker::Lorem.word }
    epigraph { Epigraph.first || FactoryBot.create(:epigraph) }
    department { Department.first || FactoryBot.create(:department) }
  end
end
