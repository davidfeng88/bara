# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: :true

  has_attached_file :avatar, default_url: 'capy.jpg'
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_many :businesses,
           primary_key: :id,
           foreign_key: :author_id,
           class_name: :Business,
           dependent: :destroy

  has_many :reviews,
           primary_key: :id,
           foreign_key: :author_id,
           class_name: :Review,
           dependent: :destroy

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
    BCrypt::Password.new(password_digest).is_password?(arg)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    ensure_session_token_uniqueness
    save!
    session_token
  end

  private

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
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
