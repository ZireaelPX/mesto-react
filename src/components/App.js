import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import {useState} from "react";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen,setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen,setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen,setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard,setSelectedCard] = useState(false);

    function handleEditAvatarClick(){
        setIsEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick(){
        setIsEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick(){
        setIsAddPlacePopupOpen(true);
    }
    function handleCardClick(card){
        setSelectedCard(card);
    }
    function closeAllPopups(){
        setIsAddPlacePopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(false);
    }

    return (
        <>
            <div className="root__block">
                <Header/>
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />
                <Footer/>
            </div>
            <PopupWithForm
                name={"profile-edit"}
                title={"Редактировать профиль"}
                btnText={"Сохранить"}
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                children={(
                    <>
                        <input type="text" className="popup__input popup__input_value_name" name="name" id="name"
                               placeholder="Имя" required minLength="2" autoComplete="off"/>
                        <span className="popup__error" id="name-error"></span>
                        <input type="text" className="popup__input popup__input_value_hobby" name="hobby" id="hobby"
                               placeholder="Профессия" required minLength="2" autoComplete="off"/>
                        <span className="popup__error" id="hobby-error"></span>
                    </>
                )}
            />
            <PopupWithForm
                name={"card-add"}
                title={"Новое место"}
                btnText={"Создать"}
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                children={(
                    <>
                        <input type="text" className="popup__input popup__input_value_card-name" name="title" id="title"
                               placeholder="Название" required minLength="2" autoComplete="off"/>
                        <span className="popup__error" id="title-error"></span>
                        <input type="url" className="popup__input popup__input_value_card-link" name="link" id="link"
                               placeholder="Ссылка на изображение" required/>
                        <span className="popup__error" id="link-error"></span>
                    </>
                )}
            />
            <PopupWithForm
                name={"avatar-edit"}
                title={"Обновить аватарку"}
                btnText={"Сохранить"}
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                children={(
                    <>
                        <input type="url" className="popup__input popup__input_value_avatar-link" name="avatar"
                               id="avatar"
                               placeholder="Ссылка на изображение" required/>
                        <span className="popup__error" id="avatar-error"></span>
                    </>
                )}
            />

            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />
            <div className="popup popup_card-delete">
                <div className="popup__container">
                    <h2 className="popup__title">Вы уверены?</h2>
                    <form name="profile-form" action="#" className="popup__form">
                        <button className="popup__submit-btn popup__delete-btn" type="submit">Да</button>
                    </form>
                    <button className="popup__close-btn" type="button"></button>
                </div>
            </div>
        </>
    );
}

export default App;
