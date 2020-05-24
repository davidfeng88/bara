# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(
      username: "Example User",
      password: "foobar",
    )
  end

  test "should be valid" do
    assert @user.valid?
  end

  test "username should be present" do
    @user.username = ""
    assert_not @user.valid?
  end

  test "username should be unique" do
    duplicate_user = @user.dup
    @user.save
    assert_not duplicate_user.valid?
  end

  test "password should be present" do
    @user.password = ""
    assert_not @user.valid?
  end

  test "password should have a minimum length of 6" do
    @user.password = "a" * 5
    assert_not @user.valid?
  end

  test "session token should be generated" do
    @user.save
    assert_not_nil @user.session_token
  end

  test "associated reviews should be destroyed" do
    @user.save
    foo_biz = businesses(:foo_biz)
    @user.reviews.create!(rating: 4, business: foo_biz)
    assert_difference 'Review.count', -1 do
      @user.destroy
    end
  end
end