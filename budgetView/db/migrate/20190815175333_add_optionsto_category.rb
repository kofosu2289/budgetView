class AddOptionstoCategory < ActiveRecord::Migration[5.2]
  def change
    remove_column :categories, :goal
    remove_column :categories, :current_total
    
  end
end
