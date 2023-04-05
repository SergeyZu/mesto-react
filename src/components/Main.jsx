function Main(props) {
    return (
        <main className="content">
            <section className="profile page__profile">
                <div className="profile__content">
                    <div className="profile__avatar-container">
                        <img
                            className="profile__avatar"
                            src="<%=require('./images/cousteau.jpg')%>"
                            alt="Аватар"
                        />
                        <div className="profile__avatar-edit-button-container">
                            <button
                                className="profile__avatar-edit-button"
                                type="button"
                                onClick={props.onEditAvatar}
                            ></button>
                        </div>
                    </div>
                    <div className="profile__text-block">
                        <h1 className="profile__title">Жак-Ив Кусто</h1>
                        <button
                            className="profile__edit-button"
                            type="button"
                            onClick={props.onEditProfile}
                        ></button>
                        <p className="profile__subtitle">
                            Исследователь океана
                        </p>
                    </div>
                </div>

                <button
                    className="profile__add-button"
                    type="button"
                    onClick={props.onAddPlace}
                ></button>
            </section>
            <section className="page__cards">
                <ul className="cards"></ul>
            </section>
        </main>
    );

    // function handleEditAvatarClick() {
    //     const popupAvatar = document.querySelector('.popup_type_avatar');
    //     popupAvatar.classList.add('popup_opened');
    // }

    // function handleEditProfileClick() {
    //     const popupProfile = document.querySelector('.popup_type_profile');
    //     popupProfile.classList.add('popup_opened');
    // }

    // function handleAddPlaceClick() {
    //     const popupCard = document.querySelector('.popup_type_card');
    //     popupCard.classList.add('popup_opened');
    // }
}

export default Main;
