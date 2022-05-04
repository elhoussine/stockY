import React from "react"

class AddToCart extends React.Component {

   constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
         quantity: 1,
         cartAddButtonTitle: "Add to Cart",
      };
   };

   handleSubmit(e) {
      e.preventDefault();
      console.log(this.props);
      this.setState({ cartAddButtonTitle: "Added to Cart ✔" })
      const {addCartItem, price } = this.props;
      let itemAttr = {
         quantity: this.state.quantity,
         price: price,
         //buyerId: this.props.currentUser.id
      };
      let product = Object.assign({}, this.props.product, itemAttr);
      addCartItem(product, parseInt(this.state.quantity));
   };

   updateQuantity(value) {
      if (this.state.quantity <= 1 && value < 1) return
      this.setState({ quantity: (parseInt(this.state.quantity) + parseInt(value)) })
   };

   update(field) {
      return e => {
         this.setState({ [field]: e.currentTarget.value })
      }
   };


   render() {
      return (
         <form className="add-to-cart-form" onSubmit={this.handleSubmit}>
            <a className="quantity-add minus" onClick={() => this.updateQuantity(-1)}></a>
            <input type="text"
               className="input-box quantity-product"
               value={this.state.quantity}
               pattern="(500|([1-4][0-9][0-9])|([1-9][0-9])|[1-9])"
               title="Quantity should contain only positive numerical values and be less than 500"
               onChange={this.update("quantity")}
            />
            <a className="quantity-add" onClick={() => this.updateQuantity(1)}></a>
            <button className="add-cart-button">{this.state.cartAddButtonTitle}</button>
         </form>
      )
   }
};

export default AddToCart;
