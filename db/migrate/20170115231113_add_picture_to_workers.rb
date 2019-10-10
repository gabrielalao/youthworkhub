class AddPictureToWorkers < ActiveRecord::Migration
  def change
    add_column :workers, :picture_url, :string
  end
end
