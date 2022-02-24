import {useContext, useEffect, useState} from "react";

import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const currentUser = useContext(CurrentUserContext)

    useEffect(()=> {
        if(isOpen){
            setName(currentUser.name);
            setDescription(currentUser.about);
        }
        // Проверка для исправления ошибки
        // A component is changing an uncontrolled input to be controlled.
        // This is likely caused by the value changing from undefined to a defined value, which should not happen.
    }, [isOpen, currentUser]);

    function editName(e){
        setName(e.target.value);
    }

    function editDescription(e){
        setDescription(e.target.value);
    }

    function handleSubmit(evt){
        evt.preventDefault();
        onUpdateUser({name, about: description});
    }

    return (
        <PopupWithForm
            name={"profile-edit"}
            title={"Редактировать профиль"}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input onChange={editName} value={name} type="text" className="popup__input popup__input_value_name" name="name" id="name"
                   placeholder="Имя" required minLength="2" autoComplete="off"/>
            <span className="popup__error" id="name-error"/>
            <input onChange={editDescription} value={description} type="text" className="popup__input popup__input_value_hobby" name="description" id="description"
                   placeholder="Профессия" required minLength="2" autoComplete="off"/>
            <span className="popup__error" id="hobby-error"/>
        </PopupWithForm>
    )
}

export default EditProfilePopup;