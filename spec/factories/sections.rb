FactoryBot.define do
  factory :section do
    name { Faker::Lorem.word }
    number { Faker::Lorem.word }
    diary { Diary.first || FactoryBot.create(:diary) }
  end
end
