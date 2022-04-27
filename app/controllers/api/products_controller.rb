class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
  end

  def create
    @product = Product.new(product_params)
    @product.seller_id = current_user.id
    if @product.save
      render :show
    else
      render json: @product.errors.full_messages, status: 401
    end
  end

  def update
    @product = Product.find(params[:product][:id])
    if @product.update(product_params)
      render :show
    else
      render json: @product.errors.full_messages, status: 401
    end
  end

  def destroy
      @product = Product.find(params[:id])
      if @product.destroy
          render "api/products/show"
      else 
          render plain: "Something went wrong."
      end
  end

  def show
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:id, :name, :style, :color, :price, :brand, :description, :release_date, :seller_id, :category_id, :photo)
  end
end
