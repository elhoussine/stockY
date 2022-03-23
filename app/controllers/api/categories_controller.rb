class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      render :show
    else
      render json: @category.errors.full_messages, status: 401
    end
  end

  def update
    @category = Category.find(params[:id])
    if @category.update(category_params)
      render :show
    else
      render json: @category.errors.full_messages, status: 401
    end
  end

  def show
    @category = Category.find(params[:id])
  end

  def category_params
    params.require(:category).permit(:id, :name, :description)
  end
end
