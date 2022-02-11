function PopupWithForm(props, {name, title, btnText="Сохранить", isOpen, onClose, children}){
    return(
        <div className={`popup popup_${name} ${isOpen ? ' popup_opened': ''}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <form name={name} action="#" className="popup__form popup__form_name_edit">
                    {children}
                    <button className="popup__submit-btn" type="submit">{btnText}</button>
                </form>
                <button className="popup__close-btn" type="button" onClick={onClose}></button>
            </div>
        </div>
    )
}

export default PopupWithForm;