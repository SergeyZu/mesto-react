import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
        React.useState(false);
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    };

    const [isEditProfilePopupOpen, setisEditProfilePopupOpen] =
        React.useState(false);
    const handleEditProfileClick = () => {
        setisEditProfilePopupOpen(true);
    };

    const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
    const handleAddPlaceClick = () => {
        setisAddPlacePopupOpen(true);
    };

    const [selectedCard, setSelectedCard] = React.useState({});
    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setisEditProfilePopupOpen(false);
        setisAddPlacePopupOpen(false);
        setSelectedCard(false);
    };

    return (
        <div className="page">
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
            />
            <Footer />

            <PopupWithForm
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                name="avatar"
                title="Обновить аватар"
                btnText="Сохранить"
            >
                <div className="popup__field">
                    <input
                        id="avatar-input"
                        className="popup__input popup__input_type_link"
                        name="avatar"
                        type="url"
                        placeholder="https://somewebsite.com/someimage.jpg"
                        required
                    />
                    <span className="popup__form-error avatar-input-error"></span>
                </div>
            </PopupWithForm>

            <PopupWithForm
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                name="profile"
                title="Редактировать профиль"
                btnText="Сохранить"
            >
                <div className="popup__field">
                    <input
                        placeholder="Имя"
                        id="name-input"
                        className="popup__input popup__input_type_name"
                        name="name"
                        type="text"
                        minLength="2"
                        maxLength="40"
                        required
                    />
                    <span className="popup__form-error name-input-error"></span>
                </div>
                <div className="popup__field">
                    <input
                        placeholder="Занятие"
                        id="about-input"
                        className="popup__input popup__input_type_about"
                        name="about"
                        type="text"
                        minLength="2"
                        maxLength="200"
                        required
                    />
                    <span className="popup__form-error about-input-error"></span>
                </div>
            </PopupWithForm>

            <PopupWithForm
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                name="card"
                title="Новое место"
                btnText="Создать"
            >
                <div className="popup__field">
                    <input
                        id="title-input"
                        className="popup__input popup__input_type_card-title"
                        name="name"
                        type="text"
                        placeholder="Название"
                        minLength="2"
                        maxLength="30"
                        required
                    />
                    <span className="popup__form-error title-input-error"></span>
                </div>
                <div className="popup__field">
                    <input
                        id="link-input"
                        className="popup__input popup__input_type_link"
                        name="link"
                        type="url"
                        placeholder="Ссылка на картинку"
                        required
                    />
                    <span className="popup__form-error link-input-error"></span>
                </div>
            </PopupWithForm>

            <PopupWithForm
                name="delete-card"
                title="Вы уверены?"
                btnText="Да"
            />

            <ImagePopup />

            {/* <template id="card-template">
                <li className="card">
                    <img className="card__image" src="value" alt="#" />
                    <button className="card__trash" type="button"></button>
                    <div className="card__bottom">
                        <h2 className="card__title"></h2>
                        <div className="card__like-block">
                            <button
                                className="card__like card__liked"
                                type="button"
                            ></button>
                            <div className="card__likes-qty">0</div>
                        </div>
                    </div>
                </li>
            </template> */}
        </div>
    );
}

export default App;
