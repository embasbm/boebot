FactoryBot.define do
  factory :epigraph do
    name { Faker::Lorem.word }
    department { Department.first || FactoryBot.create(:department) }
  end
end
