import styles from './Card.module.css';
import React, { useState } from 'react';
function Card({ id, price, image, name, onClickFavorite, onClickPlus,favorited=false}) {
    const [isAdded, setIsAdded]=useState(false);
    const [isFavorite, setIsFavorite]=useState(favorited);
    const onHandlePlus=()=>{
      onClickPlus(price, name, image);
      setIsAdded(!isAdded);
    };
    const onHandleFavorite=()=>{
      onClickFavorite({id, name, price, image});
      setIsFavorite(!isFavorite);
    };
  return (
    <div className={styles.item}>
      <div className="favorite" onClick={onHandleFavorite}> 
      {isFavorite ?  <img  src="img/liked.svg" alt="liked" />: <img  src="img/heart.svg" alt="unliked" />}
        
      </div>
      <img
        width={150}
        height={120}
        src={image}
        alt="item image"
      />
      <div>{name}</div>
      <div className="priceBlock">
        <div className="lighter">ЦЕНА:</div>
        <div className="bold">{price} USD</div>
      </div>
      <button className="plusButton" onClick={onHandlePlus}>{isAdded ? "added": "+"}</button>
    </div>
  );
}
export default Card