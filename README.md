<p align="center">
  <a href="https://stockxy.herokuapp.com/#/">
    <img width="100%" src="https://github.com/elhoussine/stockY/blob/main/readme_assets/logo_white.png"></img>
  </a>
</p>

Welcome to <a href="https://stockxy.herokuapp.com/#/">StockY</a>. This full-stack, single-page app is a clone of the popular e-commerce shoe and clothing marketplace <a href="https://www.stockx.com/" target="_blank" rel="noopener noreferrer">StockX</a> website. I intentionally chose to clone this site so I could connect relevant ecom server logic with a clean and seamless front end experience. 


<p align="center">
  <img width="100%" src="https://github.com/elhoussine/stockY/blob/main/readme_assets/index_page.png"></img>
</p>

<h2 id="table-of-contents">Table of Contents</h2>

- [Key Features](#features)
- [Technologies Used](#technologies-used)
- [Planned Features](#future-plans)


<h2 id="features">Key Features</h2>

### List Items for Sale
<p align="center">
  <img width="100%" src="https://github.com/elhoussine/stockY/blob/main/readme_assets/list_items.gif" alt="list items"></img>
</p>

### Add Items to the Cart
<p align="center">
  <img width="100%" src="https://github.com/elhoussine/stockY/blob/main/readme_assets/add_to_cart.gif" alt="add to cart"></img>
</p>

The cart is stored in both in the Redux state and in local storage to persist it across a page refresh. After a page refreshes, the cart will be loaded from local storage and then that info will be rendered on the page as if it never changed. Another notable cart feature is that both logged in and logged out users can add items to the cart, but when a user logs out it will clear the cart for privacy purposes.


### Searching for Products
<p align="center">
  <img width="100%" src="https://github.com/elhoussine/stockY/blob/main/readme_assets/search_product.png" alt="search product"></img>
</p>

Typing into the search bar calls a debounced function to request all products from the database that match the query string. Results are queried from the database based on the product names, categories, and ingredient lists. The API request is only sent after 600ms have elapsed since the last keypress to limit load on the database. Once the results are received back, they are dislayed in the search bar result dropdown and each result links to the individual product pages.

```Ruby
class Product < ApplicationRecord
  def self.match_search(query)
    Product.joins(:categories)
      .where(
        "products.product_name LIKE ? 
        OR categories.name LIKE ? 
        OR products.ingredients LIKE ?", 
        "%#{query}%", "%#{query}%", "%#{query}%"
      ).limit(15)
  end
```


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
  - The Faker gem was used to seed usernames and review content
  - Autoprefixer gem was used to automatically add vendor prefixes to CSS 
- __Hosting__: StockY is hosted on heroku.


<h2 id="future-plans">Planned Features</h2>

- Users can filter products by category
- Users/Buyers can bid on products
- Allow users to edit products that they have listed


### Credit
- Images are property of StockX
- StockX does not sell any products or merchandise and is intended for display purposes only
- Improved search functionality (trim whitespace and search for individual keywords)
