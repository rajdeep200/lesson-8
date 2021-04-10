import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import { useDispatch } from "react-redux";
import { addItems } from "../../redux/cart/cartSlice";

import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  return(
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={() => dispatch(addItems(item))} inverted>ADD TO CART</CustomButton>
  </div>
)};

export default CollectionItem;
