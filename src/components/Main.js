import {useState, useEffect} from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
    const {onEditProfile, onEditAvatar, onAddPlace, onCardClick} = props;

    const [userInfo, setUserInfo] = useState({});
    const [cards, setCards] = useState([]);

    useEffect((() => {
        Promise.all([api.getInitialCards(), api.getUserInfo()])
            .then(([card, userInfo]) => {
                setCards(card);
                setUserInfo(userInfo);
            })
            .catch((err) => {
                console.error("Что-то пошло не так: " + err);
            });
    }), []);

    const {name, about, avatar} = userInfo;

    return (
        <main className="main">
            <section className="profile">
                <button className="profile__avatar-btn" onClick={onEditAvatar}>
                    <img className="profile__avatar" src={avatar} alt="Ваша аватарка"/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{name}</h1>
                    <button type="button" className="profile__edit-btn" onClick={onEditProfile}></button>
                    <p className="profile__subtitle">{about}</p>
                </div>
                <button type="button" className="profile__add-btn" onClick={onAddPlace}></button>
            </section>
            <section className="places">
                <ul className="places__block">
                    {cards.map((card, id) => (
                        <Card
                            key={id}
                            card={card}
                            link={card.link}
                            name={card.name}
                            likes={card.likes.length}
                            onCardClick={onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;