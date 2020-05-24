class RemoveIndexFromReviewsRedo < ActiveRecord::Migration[6.0]
  def change
    remove_index :reviews, [:business_id]
    remove_index :taggings, [:tag_id, :business_id]
    add_index :taggings, [:tag_id]
  end
end
