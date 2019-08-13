class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :categories, :type, :board_type
   
  end
end
