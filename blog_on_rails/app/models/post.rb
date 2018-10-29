class Post < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :user
  
  validates :title, presence:true, uniqueness: { message: 'That title already exists'}
  validates :body, presence:true, length: { minimum: 50 }
end
