function ImagePopup(){
    return(
        <div className="popup popup_img-show">
            <figure className="popup__block">
                <img className="popup__image" src="<%=require('./images/dykhtau.jpg')%>"
                     alt="Путешествие по России"/>
                <figcaption className="popup__caption"></figcaption>
                <button className="popup__close-btn" type="button"></button>
            </figure>
        </div>
    );
}