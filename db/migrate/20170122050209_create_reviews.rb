class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :job_id, null: false, foreign_key: true
      t.integer :rating, null: false
      t.text :body, null: false

      t.timestamps null: false
    end
  end
end
