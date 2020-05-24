# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  label      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class TagTest < ActiveSupport::TestCase
  def setup
    @tag = Tag.new(
      label: "foo",
    )
  end

  test "should be valid" do
    assert @tag.valid?
  end

  test "label should be present" do
    @tag.label = ""
    assert_not @tag.valid?
  end

  test "associated taggings should be destroyed" do
    @tag.save
    foo_biz = businesses(:foo_biz)
    foo_biz.tags = [@tag]
    assert_difference 'Tagging.count', -1 do
      @tag.destroy
    end
  end

  test "associated businesses should not be destroyed" do
    @tag.save
    foo_biz = businesses(:foo_biz)
    foo_biz.tags = [@tag]
    assert_no_difference 'Business.count' do
      @tag.destroy
    end
  end
end
