# == Schema Information
#
# Table name: businesses
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
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

  belongs_to :author,
		primary_key: :id,
		foreign_key: :author_id,
		class_name: :User


end
