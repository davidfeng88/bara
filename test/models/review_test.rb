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
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  def setup
    foo_user = users(:foo_user)
    foo_biz = businesses(:foo_biz)
    @review = foo_user.reviews.build(
      rating: 4,
      business_id: foo_biz.id,
    )
  end

  test "should be valid" do
    assert @review.valid?
  end

  test "user association should be present" do
    @review.user = nil
    assert_not @review.valid?
  end

  test "business association should be present" do
    @review.business = nil
    assert_not @review.valid?
  end

  test "rating should be present" do
    @review.rating = nil
    assert_not @review.valid?
  end

  test "rating should be between 1 and 5 (inclusive)" do
    @review.rating = 6
    assert_not @review.valid?
  end

  test "a business can only be reviewed by a user once" do
    duplicate_review = @review.dup
    @review.save
    assert_not duplicate_review.valid?
  end
end
