class CreateConstructTwos < ActiveRecord::Migration
  def change
    create_table :construct_twos do |t|
      t.string :ttitle
      t.text :description

      t.timestamps
    end
  end
end
