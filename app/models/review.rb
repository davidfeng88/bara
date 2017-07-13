# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  rating      :integer          not null
#  body        :text
#  author_id   :integer          not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ActiveRecord:: Base
  validates :author, :business, :rating, presence: true

  validates :business, uniqueness: { scope: :author,
    message: "one user can only have one review for one business" }

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :business,
    primary_key: :id,
    foreign_key: :business_id,
    class_name: :Business


end
