import Card from "../Components/Card/Card";
function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content">
      <div className="contentHeader">
        <h1>{searchValue ? `ищем ${searchValue} ` : "Выбирайте из тысячи товаров"}</h1>
        <div className="searchBlock">
          <img src="img/search.svg" alt="search" />

          <input
            value={searchValue}
            onChange={onChangeSearchInput}
            placeholder="Найти.."
          />
          {searchValue && (
            <img onClick={() => setSearchValue("")} src="img/btn-remove.svg" alt="close" />
          )}
        </div>
      </div>

      <div className="items">
        {items
          .filter((el) => el.name.toLowerCase().includes(searchValue))
          .map((el) => (
            <Card
              key={el.name}
              {...el}
              onClickPlus={(obj) => onAddToCart(el)}
              onClickFavorite={onAddToFavorite}
            />
          ))}
      </div>
    </div>
  );
}
export default Home;
