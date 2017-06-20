# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base

	attr_reader :password

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness


	def password=(arg)
    @password = arg
		self.password_digest = BCrypt::Password.create(arg)
	end

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
	end

	def is_password?(arg)
		BCrypt::Password.new(self.password_digest).is_password?(arg)
	end

	def reset_session_token!
		self.session_token = User.generate_session_token
		ensure_session_token_uniqueness
		self.save!
		self.session_token
	end

	private

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

	def ensure_session_token
		self.session_token ||= User.generate_session_token
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = User.generate_session_token
		end
	end

end
