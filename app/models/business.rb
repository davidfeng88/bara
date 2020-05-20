# == Schema Information
#
# Table name: businesses
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  address    :string           not null
#  city       :string           not null
#  state      :string           not null
#  zipcode    :integer          not null
#  price      :integer          not null
#  phone      :string
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  lat        :float
#  lng        :float
#

class Business < ActiveRecord::Base
  validates :name,
            :address,
            :city,
            :state,
            :zipcode,
            :price,
            presence: true

  validates :price, inclusion: { in: 1..4,
                                 message: 'should be an integer between 1 and 4' }

  has_many :reviews,
          -> { order(updated_at: :desc) },
          dependent: :destroy

  has_many :taggings, dependent: :destroy, inverse_of: :business
  has_many :tags, through: :taggings

  has_many_attached :images

  def average_rating
    reviews.average(:rating)
  end
end
