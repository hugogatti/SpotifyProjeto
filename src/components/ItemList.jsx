import { Link } from "react-router-dom";
import SingleItem from "./SingleItem";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} Populares</h2>
        <Link to={path} className="item-list__link">
          Mostrar Tudo
        </Link>
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currObj, index) => {
            return (
              <SingleItem
                idPath={idPath}
                //método para consumir
                //id={currObj.id}
                //name={currObj.name}
                //image={currObj.image}
                //banner={currObj.banner}
                //método para consumir
                {...currObj}
                key={`${title}-${index}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ItemList;
