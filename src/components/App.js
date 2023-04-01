import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
    return (
        <div className="page">
            <Header />
            <Main />
            <Footer />

            <section className="popup popup_type_avatar">
                <div className="popup__container popup__container_middle-form">
                    <button
                        className="popup__close-button"
                        type="button"
                    ></button>
                    <form
                        className="popup__content popup__avatar-content popup__form"
                        action="#"
                        name="user-avatar"
                        novalidate
                    >
                        <h2 className="popup__title">Обновить аватар</h2>
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
                        <button
                            className="popup__save-button popup__button popup__avatar-button"
                            type="submit"
                        >
                            Сохранить
                        </button>
                    </form>
                </div>
            </section>

            <section className="popup popup_type_profile">
                <div className="popup__container">
                    <button
                        className="popup__close-button"
                        type="button"
                    ></button>

                    <form
                        className="popup__content popup__profile-content popup__form"
                        action="#"
                        name="user-profile"
                        novalidate
                    >
                        <h2 className="popup__title">Редактировать профиль</h2>
                        <div className="popup__field">
                            <input
                                id="name-input"
                                className="popup__input popup__input_type_name"
                                name="name"
                                type="text"
                                minlength="2"
                                maxlength="40"
                                required
                            />
                            <span className="popup__form-error name-input-error"></span>
                        </div>
                        <div className="popup__field">
                            <input
                                id="about-input"
                                className="popup__input popup__input_type_about"
                                name="about"
                                type="text"
                                minlength="2"
                                maxlength="200"
                                required
                            />
                            <span className="popup__form-error about-input-error"></span>
                        </div>
                        <button
                            className="popup__save-button popup__button popup__profile-button"
                            type="submit"
                        >
                            Сохранить
                        </button>
                    </form>
                </div>
            </section>
            <section className="popup popup_type_card">
                <div className="popup__container">
                    <button
                        className="popup__close-button"
                        type="button"
                    ></button>
                    <form
                        className="popup__content popup__card-content popup__form"
                        action="#"
                        name="new-location"
                        novalidate
                    >
                        <h2 className="popup__title">Новое место</h2>
                        <div className="popup__field">
                            <input
                                id="title-input"
                                className="popup__input popup__input_type_card-title"
                                name="name"
                                type="text"
                                placeholder="Название"
                                minlength="2"
                                maxlength="30"
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
                        <button
                            className="popup__create-button popup__button"
                            type="submit"
                        >
                            Создать
                        </button>
                    </form>
                </div>
            </section>

            <section className="popup popup_type_delete-card">
                <div className="popup__container popup__container_low-form">
                    <button
                        className="popup__close-button"
                        type="button"
                    ></button>
                    <form
                        className="popup__content popup__delete-card-content popup__form"
                        name="delete-card"
                    >
                        <h2 className="popup__title popup__title_low-form">
                            Вы уверены?
                        </h2>
                        <button
                            className="popup__delete-button popup__button"
                            type="submit"
                        >
                            Да
                        </button>
                    </form>
                </div>
            </section>

            <section className="popup popup_type_image">
                <div className="popup__container popup__container_type_image">
                    <button
                        className="popup__close-button"
                        type="button"
                    ></button>
                    <img className="popup__image" src="#" alt="#" />
                    <h2 className="popup__title popup__title_type_image"></h2>
                </div>
            </section>

            <template id="card-template">
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
            </template>
        </div>
    );
}

export default App;
