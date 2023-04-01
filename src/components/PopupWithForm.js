function PopupWithForm(props) {
    return (
        <section className={`popup popup_type_${props.name}`}>
            <div className="popup__container">
                <button className="popup__close-button" type="button"></button>
                <form className="popup__content popup__form" name={props.name}>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button className="popup__button" type="submit">
                        {props.btnText}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;
