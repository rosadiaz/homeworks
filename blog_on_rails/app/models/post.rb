class Post < ApplicationRecord
  has_many :comments, dependent: :destroy
  
  validates :title, presence:true, uniqueness: { message: 'That title already exists'}
  validates :body, presence:true, length: { minimum: 50 }
end
