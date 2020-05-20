class RenameColumnsInTables < ActiveRecord::Migration[6.0]
  def change
    remove_column :businesses, :author_id
    rename_column :reviews, :author_id, :user_id
    # Removing/renaming related index happen automatically

    add_index :taggings, :tag_id
  end
end
