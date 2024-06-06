import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { like } from "../../context/slice/wishlistSlice";
import { add } from "../../context/slice/cartSlice";
import { MdDelete } from "react-icons/md";
import { useDeleteProductMutation } from "../../context/api/productApi";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);

  const [
    deleteProduct,
    { data: deletedData, error: deletedError, isLoading: deletedIsLoading },
  ] = useDeleteProductMutation();

  return (
    <div className="product__item">
      <img src={product.url} width={200} alt="" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div className="product__item__btns">
        <button onClick={() => dispatch(like(product))}>
          {wishlistData.some((el) => el.id === product.id) ? (
            <FaHeart color="crimson" />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button
          disabled={cartData?.some((el) => el.id === product.id)}
          onClick={() => dispatch(add(product))}
        >
          {cartData?.some((el) => el.id === product.id) ? (
            <span>Added</span>
          ) : (
            <span>Add to cart</span>
          )}
          <IoCartOutline />
        </button>

        <button
          className="product__item__delete"
          onClick={() => deleteProduct(product.id)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
