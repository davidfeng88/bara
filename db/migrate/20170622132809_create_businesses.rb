class CreateBusinesses < ActiveRecord::Migration[5.1]
  def change
    create_table :businesses do |t|
      t.integer :author_id, null: false
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false
      t.integer :price, null: false
      t.string :phone
      t.string :url

      t.timestamps null: false
    end

    add_index :businesses, :author_id
    add_index :businesses, :name
    add_index :businesses, :address
    add_index :businesses, :city
    add_index :businesses, :state
    add_index :businesses, :zipcode
    add_index :businesses, :price

  end
end
