namespace :businesses do
  desc "migrate businesses image to active storage"
  task migrate_to_active_storage: :environment do
    Business.where.not(image_file_name: nil).find_each do |business|
      # This step helps us catch any attachments we might have uploaded that
      # don't have an explicit file extension in the filename
      image = business.image_file_name
      # this url pattern can be changed to reflect whatever service you use
      image_url = "https://s3.amazonaws.com/#{Rails.application.credentials[Rails.env.to_sym][:s3_bucket]}/businesses/images/000/000/#{business.id.to_s.rjust(3, "0")}/original/#{image}"
      business.image.attach(io: open(image_url),
                                    filename: business.image_file_name,
                                    content_type: business.image_content_type)
    end
  end
end
