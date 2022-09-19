function Drawer({onCloseCart, items = [], onRemove }) {
    return (
      <div className="overlay">
        <div className="drawer">
          <div className="higherCartPart">
            <h2>Корзина</h2>
            <button className="closeCart" onClick={onCloseCart}>
              Х
            </button>
          </div>
          {items.length>0 ? 
          <div className="cartItems">
            {items.map((obj) => (
              <div className="cartItem">
                <img width={70} height={70} src="" alt="tovar" />
                <div>
                  <p>{obj.name}</p>
                  <b>{obj.price}</b>
                </div>
                <img onClick={()=>onRemove(obj.id)} src="" alt="remove" />
              </div>
            ))}
          </div>
          :
          <div>
                  КОРЗИНА ПУСТА
                  <button onClick={onCloseCart}>вернуться назад</button>
                </div>
          }
          
  <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>ИТОГО:</span>
                  <div></div>
                  <b>1000 USD</b>
                </li>
                
              </ul>
              <button >Заказать</button>
            </div>
          
        </div>
      </div>
    );
  }
  export default Drawer;
  