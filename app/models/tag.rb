# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  label      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ActiveRecord::Base
  validates :label, presence: true, uniqueness: true

  has_many :taggings, dependent: :destroy, inverse_of: :tag
  has_many :businesses, through: :taggings
end
