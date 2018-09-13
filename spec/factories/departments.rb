FactoryBot.define do
  factory :department do
    name { Faker::Lorem.word }
    section { Section.first || FactoryBot.create(:section) }
  end
end
