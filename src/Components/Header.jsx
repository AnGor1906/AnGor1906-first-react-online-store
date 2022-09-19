import {Link} from "react-router-dom";
function Header(props){
    return(
        <header>
          <Link to="/">
        <div className="headerLeft">
          <img
            width={100}
            height={100}
            src=""
            alt="logo"
          />
          <div className="headerInfo">
            {" "}
            <h3>REACT Shopping</h3>
            <p>Best shopping online</p>{" "}
          </div>
        </div>
        </Link>
        <div className="headerRight">
          <img
            width={18}
            height={18}
            src="img/cart.svg"
            alt="kart"
            onClick={props.onClickCart}
          />
          <div>1000 USD</div>
          <Link to="/favorites"><div><img src="img/heart.svg" alt="" /></div></Link>
          
          <img
            width={18}
            height={18}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprzsY2OqN3foto5YY4mq9EsNRq_WR3h_HYw&usqp=CAU"
            alt="user"
         />
        </div>
      </header>
    )
}
export default Header;