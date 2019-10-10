class CreateWorkers < ActiveRecord::Migration
  def change
    create_table :workers do |t|
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email, null: false
      t.string :username, null: false
      t.string :phone_number
      t.text :bio
      t.date :birth_date
      t.string :zip_code
      t.float :lat
      t.float :lng
      t.integer :min_wage

      t.timestamps null: false
    end
    add_index :workers, :username, unique: true
    add_index :workers, :session_token, unique: true
  end
end
