class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :type
      t.integer :goal
      t.integer :current_total

      t.timestamps
    end
  end
end
