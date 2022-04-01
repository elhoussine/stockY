class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.string :status, null: false
      t.float :amount, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :carts, :user_id
  end
end
