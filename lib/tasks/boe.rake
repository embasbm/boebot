namespace :boe do
  desc "import boe data for Today: #{Date.today}"
  task fetch_data: :environment do
    ImportData.new
    Diary.reindex
    Department.reindex
    Epigraph.reindex
    Section.reindex
    Item.reindex
  end
end
