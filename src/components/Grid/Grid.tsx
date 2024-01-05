import { PokemonI } from "../../redux/pokemonSlice";
import GridStyle from "./Grid.module.css";

export function Grid({ items }: { items: PokemonI[] }) {
  return (
    <div className={GridStyle.gridWrapper}>
      {items.length > 0 &&
        items.map((item, index) => <GridItem key={index} item={item} />)}
    </div>
  );
}

function GridItem<T>({ item }: { item: PokemonI }) {
  return <div className={GridStyle.gridItem}>{item.name}</div>;
}
