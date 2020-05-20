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
  validates :author, :business, :rating, presence: true

  validates :business_id, uniqueness: { scope: :author_id,
                                        message: 'can only be reviewed by a user once' }

  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User

  belongs_to :business,
             primary_key: :id,
             foreign_key: :business_id,
             class_name: :Business

  scope :latest, -> { order('updated_at DESC').limit(1) }
end
