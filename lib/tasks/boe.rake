namespace :boe do
  desc "import boe data for Today: #{Date.today}"
  task fetch_data: :environment do
    ImportData.new
  end

  Rake::Task[:fetch_data].enhance do
    Rake::Task['searchkick:reindex:all'].invoke
  end
end
