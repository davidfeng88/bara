namespace :users do
  desc "migrate users avatar to active storage"
  task migrate_to_active_storage: :environment do
    User.where.not(avatar_file_name: nil).find_each do |user|
      # This step helps us catch any attachments we might have uploaded that
      # don't have an explicit file extension in the filename
      image = user.avatar_file_name
      # this url pattern can be changed to reflect whatever service you use
      avatar_url = "https://s3.amazonaws.com/#{Rails.application.credentials[Rails.env.to_sym][:s3_bucket]}/users/avatars/000/000/#{user.id.to_s.rjust(3, "0")}/original/#{image}"
      user.avatar.attach(io: open(avatar_url),
                                    filename: user.avatar_file_name,
                                    content_type: user.avatar_content_type)
    end
  end
end
