import React from "react";
import { increaseAmount, decreaseAmount } from "../../context/slice/cartSlice";
import { useDispatch } from "react-redux";
import "./cart-wrapper.scss";

// const BOT_TOKEN = "7365750832:AAGWua3Cvi60SvZRxBHsgwfBXKMB3c3Qyps";
// const CHAT_ID = "-4106490351";
// const USER_ID = "813619470";

// // https://api.telegram.org/bot7365750832:AAGWua3Cvi60SvZRxBHsgwfBXKMB3c3Qyps/getUpdates

const CartWrapper = ({ data }) => {
  const dispatch = useDispatch();

  let handleSendMassege = (e) => {
    e.preventDefault();
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=qalesi`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };

  let cartItems = data?.map((el) => (
    <div className="cart-wrapper" key={el.id}>
      <img src={el.images[0]} alt={el.title} width={100} height={100} />
      <h3> {el.price} USD</h3>
      <h4> {el.price * el.amount} USD</h4>
      <button
        disabled={el.amount <= 1}
        onClick={() => dispatch(decreaseAmount(el))}
      >
        -
      </button>
      <span>{el.amount}</span>
      <button
        disabled={el.stock <= el.amount}
        onClick={() => dispatch(increaseAmount(el))}
      >
        +
      </button>
    </div>
  ));
  return (
    <div>
      <h2>Cart</h2>
      <div>{cartItems}</div>
      <form onSubmit={handleSendMassege} action="">
        <input type="text" />
        <input type="text" />
        <button type="submit">Add</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
};

export default CartWrapper;
