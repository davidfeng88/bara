class AddIndexToTaggings < ActiveRecord::Migration[6.0]
  def change
    add_index :taggings, [:tag_id, :business_id], unique: true
  end
end
