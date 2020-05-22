# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  rating      :integer          not null
#  body        :text
#  user_id     :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ActiveRecord::Base
  validates :user, :business, :rating, presence: true

  validates :business_id, uniqueness: { scope: :user_id,
                                        message: 'can only be reviewed by a user once' }

  belongs_to :user
  belongs_to :business
end
