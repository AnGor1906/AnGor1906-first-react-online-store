import { Link } from "react-router-dom";
import Card from "../Components/Card/Card";
function Favorites({ items, onAddToCart, onAddToFavorite }) {
  return (
    <div>
      <Link to="/favorites">
      <div className="items">
        {items.map((el) => (
          <Card
            key={el.name}
            onClickPlus={(obj) => onAddToCart(el)}
            onClickFavorite={onAddToFavorite}
            favorited={true}
            {...el}
          />
        ))}
       </div>
      </Link>{" "}
    </div>
  );
}
export default Favorites;
