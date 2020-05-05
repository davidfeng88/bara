require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Bara
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.paperclip_defaults = {
      :storage => :s3,
      :s3_protocol => :https,
      :s3_credentials => {
        :bucket => Rails.application.credentials[Rails.env.to_sym][:s3_bucket],
        :access_key_id => Rails.application.credentials.s3_access_key_id,
        :secret_access_key => Rails.application.credentials.s3_secret_access_key,
        :s3_region => Rails.application.credentials.s3_region,
      }
    }
    
  end
end
