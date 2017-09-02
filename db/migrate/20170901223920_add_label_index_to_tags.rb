class AddLabelIndexToTags < ActiveRecord::Migration[5.1]
  def change
    add_index :tags, :label, unique: true
  end
end
