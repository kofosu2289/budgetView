class ChangeDateToBeDateInEntries < ActiveRecord::Migration[5.2]
  def change
    change_column :entries, :date, :date
  end
end
