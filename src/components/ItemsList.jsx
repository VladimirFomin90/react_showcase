import { ItemCard } from "./ItemCard";

function ItemsList(props) {
    const { items = [] } = props;

    if (!items.length) {
        return <h5>ничего нет</h5>;
    }

    return (
        <div className="items">
            {items.map((item) => (
                <ItemCard key={item.id} {...item} />
            ))}
        </div>
    );
}

export { ItemsList };
