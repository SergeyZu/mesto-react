function ImagePopup() {
    return (
        <section className="popup popup_type_image">
            <div className="popup__container popup__container_type_image">
                <button className="popup__close-button" type="button"></button>
                <img className="popup__image" src="#" alt="#" />
                <h2 className="popup__title popup__title_type_image"></h2>
            </div>
        </section>
    );
}

export default ImagePopup;
