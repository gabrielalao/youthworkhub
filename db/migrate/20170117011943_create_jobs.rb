class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.integer :user_id, null: false
      t.text :description, null: false
      t.string :job_type, null: false
      t.string :address
      t.integer :duration
      t.integer :wage, null: false
      t.datetime :start_time, null: false
      t.float :lat
      t.float :lng
      t.integer :cost, null: false
      t.string :status, default: 'pending'
      t.integer :worker_id

      t.timestamps
    end
  end
end
