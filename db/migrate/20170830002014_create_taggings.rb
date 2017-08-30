class CreateTaggings < ActiveRecord::Migration[5.1]
  def change
    create_table :taggings do |t|
      t.integer :business_id, null: false
      t.integer :tag_id, null: false

      t.timestamps null: false
    end

    add_index :taggings, :business_id
    add_index :taggings, [:business_id, :tag_id], unique: true
  end
end
