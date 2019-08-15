class AddColumnsToCategory < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :goal, :decimal, precision:10, scale:2
    add_column :categories, :current_total, :decimal, precision:10, scale:2
  end
end
