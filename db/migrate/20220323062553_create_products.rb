class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :style
      t.string :color, null: false
      t.float :price, null: false
      t.string :brand, null: false
      t.string :image, null: false
      t.text :description
      t.date :release_date, null: false
      t.integer :seller_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
    add_index :products, :seller_id
    add_index :products, :category_id
  end
end
