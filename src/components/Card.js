function Card({card, id, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="place" key={id}>
            <img className="place__image" src={card.link} alt={card.name} onClick={handleClick}/>
            <div className="place__description">
                <h2 className="place__title">
                    {card.name}
                </h2>
                <div className="place__like-container">
                    <button className="place__like-btn" type="button"></button>
                    <p className="place__like-count">{card.likes.length}</p>
                </div>
            </div>
            <button className="place__delete-btn" type="button"></button>
        </li>
    );
}

export default Card;