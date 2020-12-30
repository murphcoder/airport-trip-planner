class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.string :jid
      t.string :nickname
      t.string :departureDate
      t.string :flightNumber
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.belongs_to :user

      t.timestamps
    end
  end
end
