import React from 'react';
import { Link } from 'react-router-dom';
const backgroundUrl = 'https://img.freepik.com/free-vector/flat-hand-drawn-people-shopping-sale-illustration_23-2148829747.jpg?t=st=1647931936~exp=1647932536~hmac=5549ddf7a5ff3fd1ee65d77e49698e595b8c186031763455a323f8506b4424ac&w=2000';
export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="splash-div">
        <img src={backgroundUrl} />
        <div id="splash-bg">

        </div>
        <ul>
          <li>
            Welcome!
          </li>
          <li>
            This app is a functional clone of popular shoe and clothing marketplace StockX.
          </li>
          <li>
            Users are able to trade a variety of limited edition sneakers and basketball shoes.
          </li>
          <li>
            Users are also able to search for items using a variety of factors such as name, brand, model, and colors.
          </li>
          <li>
            You will then be able to view your orders, and any listings you have placed in your profile.
          </li>
          <li>
            You may then browse for a product or search for one by name, model, brand, color, and more.
          </li>
          <li>
            After clicking on a product, you will then be able to see the item details or make a transaction.
          </li>
          <li>
            If there are any listing products available, you will be able to buy the item. It will be automatically added to your orders.
          </li>
          <li>
            If you list any products for sell, you will be able to sell the item.
          </li>
          <li>
            To begin, create an account, login, or use the guest account.
          </li>
        </ul>
      </div>
    )
  }
}