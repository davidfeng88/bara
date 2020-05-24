class RemoveIndexFromTaggings < ActiveRecord::Migration[6.0]
  def change
    remove_index :taggings, [:business_id]
    remove_index :taggings, [:tag_id]
  end
end
