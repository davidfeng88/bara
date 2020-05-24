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
require 'test_helper'

class TaggingTest < ActiveSupport::TestCase
  def setup
    foo_biz = businesses(:foo_biz)
    foo_tag = tags(:foo_tag)
    foo_biz.tags = [foo_tag]
    @tagging = foo_biz.taggings[0]
  end

  test "should be valid" do
    assert @tagging.valid?
  end

  test "business association should be present" do
    @tagging.business = nil
    assert_not @tagging.valid?
  end

  test "tag association should be present" do
    @tagging.tag = nil
    assert_not @tagging.valid?
  end

  test "a business can only have a tag once" do
    duplicate_tagging = @tagging.dup
    @tagging.save
    assert_not duplicate_tagging.valid?
  end
end