class AddDbLevelUniqueConstraintSoAUserCanReviewABizOnlyOnce < ActiveRecord::Migration[5.1]
  def change
    add_index :reviews, %i[business_id author_id], unique: true
  end
end
