# == Schema Information
#
# Table name: taggings
#
#  id          :bigint           not null, primary key
#  business_id :integer          not null
#  tag_id      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Tagging < ActiveRecord::Base
  validates :business, :tag, presence: true
  validates :tag_id, uniqueness: { scope: :business_id }

  belongs_to :business
  belongs_to :tag
end
