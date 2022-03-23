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
require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
