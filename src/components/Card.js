function Card(props) {
    const {card, id, name, link, likes, onCardClick} = props;

    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="place" key={id}>
            <img className="place__image" src={link} alt={name} onClick={handleClick}/>
            <div className="place__description">
                <h2 className="place__title">
                    {name}
                </h2>
                <div className="place__like-container">
                    <button className="place__like-btn" type="button"></button>
                    <p className="place__like-count">{likes}</p>
                </div>
            </div>
            <button className="place__delete-btn" type="button"></button>
        </li>
    );
}

export default Card;