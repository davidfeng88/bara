# == Schema Information
#
# Table name: businesses
#
#  id                 :integer          not null, primary key
#  author_id          :integer          not null
#  name               :string           not null
#  address            :string           not null
#  city               :string           not null
#  state              :string           not null
#  zipcode            :integer          not null
#  price              :integer          not null
#  phone              :string
#  url                :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  lat                :float
#  lng                :float
#

class Business < ActiveRecord::Base
  validates :author,
            :name,
            :address,
            :city,
            :state,
            :zipcode,
            :price,
            presence: true

  validates :price, inclusion: { in: 1..4,
                                 message: 'should be an integer between 1 and 4' }

  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User

  has_many :reviews,
          -> { order(updated_at: :desc) },
          dependent: :destroy

  has_many :taggings, dependent: :destroy, inverse_of: :business
  has_many :tags, through: :taggings

  has_attached_file :image, default_url: 'business-default.jpg'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  def average_rating
    reviews.average(:rating)
  end
end
