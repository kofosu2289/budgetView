class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.integer :category_id
      t.integer :amount
      t.string :name
      t.text :description
      t.datetime :date

      t.timestamps
    end
  end
end
