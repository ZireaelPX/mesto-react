function Main(props) {
    console.log(props)
    const {onEditProfile, onEditAvatar, onAddPlace} = props;
    return (
        <main className="main">
            <section className="profile">
                <button className="profile__avatar-btn" onClick={onEditAvatar}>
                    <img className="profile__avatar" src="<%=require('./images/avatar.jpg')%>" alt="Ваша аватарка"/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">Жак-ив Кусто</h1>
                    <button type="button" className="profile__edit-btn" onClick={onEditProfile}></button>
                    <p className="profile__subtitle">Hello</p>
                </div>
                <button type="button" className="profile__add-btn" onClick={onAddPlace}></button>
            </section>
            <section className="places">
                <ul className="places__block">
                </ul>
            </section>
        </main>
    );
}

export default Main;