json.extract! product, :id, :name, :style, :color, :price, :brand, :description, :release_date, :seller_id, :category_id
json.category product.category.name
if product.photo.attached?
   json.image url_for(product.photo)
else
   json.image product.image
end