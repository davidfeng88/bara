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
require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def setup
    @business = Business.new(
      name: 'sample_biz',
      address: '123 Main St.',
      city: 'Huge Town',
      state: 'XY',
      zipcode: 12345,
      price: 1,
    )
  end

  test "should be valid" do
    assert @business.valid?
  end

  test "name should be present" do
    @business.name = ""
    assert_not @business.valid?
  end

  test "address should be present" do
    @business.address = ""
    assert_not @business.valid?
  end

  test "city should be present" do
    @business.city = ""
    assert_not @business.valid?
  end

  test "state should be present" do
    @business.state = ""
    assert_not @business.valid?
  end

  test "zipcode should be present" do
    @business.zipcode = nil
    assert_not @business.valid?
  end

  test "price should be present" do
    @business.price = nil
    assert_not @business.valid?
  end

  test "price should be between 1 and 4 (inclusive)" do
    @business.price = 5
    assert_not @business.valid?
  end

  test "associated reviews should be destroyed" do
    @business.save
    foo_user = users(:foo_user)
    foo_user.reviews.create!(rating: 4, business: @business)
    assert_difference 'Review.count', -1 do
      @business.destroy
    end
  end

  test "associated taggings should be destroyed" do
    @business.save
    foo_tag = tags(:foo_tag)
    @business.tags = [foo_tag]
    assert_difference 'Tagging.count', -1 do
      @business.destroy
    end
  end

  test "associated tags should not be destroyed" do
    @business.save
    foo_tag = tags(:foo_tag)
    @business.tags = [foo_tag]
    assert_no_difference 'Tag.count' do
      @business.destroy
    end
  end
end
