function PopupWithForm({ isOpen, name, title, btnText, children }) {
    return (
        <section
            className={`popup popup_type_${name} ${
                isOpen ? 'popup_opened' : ''
            }`}
        >
            <div className="popup__container">
                <button className="popup__close-button" type="button" />
                <form className="popup__content popup__form" name={name}>
                    <h2 className="popup__title">{title}</h2>
                    {children}
                    <button className="popup__button" type="submit">
                        {btnText}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;
