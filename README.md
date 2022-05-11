<p align="center">
  <a href="https://stockxy.herokuapp.com/#/">
    <img width="100%" src="https://github.com/elhoussine/stockY/blob/main/readme_assets/logo_white.png"></img>
  </a>
</p>

Welcome to <a href="https://stockxy.herokuapp.com/#/">StockY</a>,
<br>
This full-stack, single-page app is a functional clone of the popular e-commerce marketplace <a href="https://www.stockx.com/" target="_blank" rel="noopener noreferrer">StockX</a>, that allows users to sell and buy authentic sneakers, clothes, accessories, NFTs and more. I intentionally chose to clone this site so I could connect relevant ecom server logic with a clean and seamless Front End experience. 

<p align="center">
  <img width="100%" src="https://github.com/elhoussine/stockY/blob/main/readme_assets/index_page.png"></img>
</p>


<h2 id="features">Features</h2>

### * List Items for Sale

Logged in users can create and list new items for sale under their profile, items could be sneakers, clothes, accessories, NFTs plus more. 
Users will be then able to view or delete their listing products.
Shoppers can see listed products, see each product details and make a transaction.

<p align="center">
  <img width="100%" src="https://github.com/elhoussine/stockY/blob/main/readme_assets/list_items.gif" alt="list items"></img>
</p>

### * Add Items to the Cart

Users are able to add/remove products to the shopping cart, update items quantity and checkout.
The cart is stored in the Redux state and in local storage to persist it across a page refresh. After the website refresh, the cart data will be loaded from the client local storage.


<p align="center">
  <img width="100%" src="https://github.com/elhoussine/stockY/blob/main/readme_assets/add_to_cart.gif" alt="add to cart"></img>
</p>


### * Search for Products
<p align="center">
  <img width="100%" src="https://github.com/elhoussine/stockY/blob/main/readme_assets/search_product.png" alt="search product"></img>
</p>

The search bar will filter and render products based on the keywords that are typed into the search input.


<h2 id="technologies-used">Technologies used</h2>

- __Front End__: React.js, Redux
  - Supports front-end handling of cart, rendering of pages, and navigation
  - The frontend routes conditionally render components based on the url path and if a user is logged in
  - Persists cart to `localStorage` to maintain cart information through page refresh
- __Back End__: Ruby on Rails, Jbuilder, Active Storage, and PostgreSQL database
  - The back end was implemented using the Rails MVC framework along with Jbuilder to formulate JSON responses for the API endpoints
  - Active Storage blobs were use to create associations between products and images stored on S3
- __Other__: Amazon AWS S3, JavaScript
  - AWS S3 handles image hosting to allow for a more lightweight and modular implementation of the app.
  - Webpack was used for bundling and Babel.js for transpiling
- __Hosting__: StockY is hosted on heroku.


<h2 id="future-plans">Bonus Features</h2>

- Users can filter products by category
- Users/Buyers can bid on products
- Allow users to edit products that they have listed


### Credit
- Images are property of StockX
- StockX does not sell any products or merchandise and is intended for display purposes only
- Improved search functionality (trim whitespace and search for individual keywords)
