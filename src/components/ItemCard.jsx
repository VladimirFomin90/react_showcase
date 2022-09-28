function ItemCard(props) {
    const { id, name, description, price, full_background } = props;

    return (
        <div classNameName="card" id="id">
            <div classNameName="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div classNameName="card-content">
                <span classNameName="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn">Купить</button>
                <span className="right" style={{ fontSize: "1.5rem" }}>
                    {price} тг.
                </span>
            </div>
        </div>
    );
}

export { ItemCard };
