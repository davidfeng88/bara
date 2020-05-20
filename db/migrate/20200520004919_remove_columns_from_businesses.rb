class RemoveColumnsFromBusinesses < ActiveRecord::Migration[6.0]
  def change
    remove_column :businesses, :image_file_name, :string
    remove_column :businesses, :image_content_type, :string
    remove_column :businesses, :image_file_size, :string
    remove_column :businesses, :image_updated_at, :string
  end
end
