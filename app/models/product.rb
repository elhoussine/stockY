# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  style        :string
#  color        :string           not null
#  price        :float            not null
#  brand        :string           not null
#  image        :string           not null
#  description  :text
#  release_date :date             not null
#  seller_id    :integer          not null
#  category_id  :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Product < ApplicationRecord
  validates :name, :color, :price, :brand, :release_date, :seller_id, :category_id, presence: true

  validate :ensure_product_photo

  has_one_attached :photo

  def ensure_product_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end

  belongs_to :seller,
    foreign_key: :seller_id,
    class_name: :User

  belongs_to :category,
    foreign_key: :category_id,
    class_name: :Category

end
