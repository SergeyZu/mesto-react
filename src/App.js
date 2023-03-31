import React from 'react';
import logo from './logo.svg';

function App() {
    return (
        <body class="page">
            <header class="header page__header">
                <img
                    class="header__logo"
                    src="<%=require('./images/logo.svg')%>"
                    alt="Логотип Mesto Russia"
                />
            </header>
            <main class="content">
                <section class="profile page__profile">
                    <div class="profile__content">
                        <div class="profile__avatar-container">
                            <img
                                class="profile__avatar"
                                src="<%=require('./images/cousteau.jpg')%>"
                                alt="Аватар"
                            />
                            <div class="profile__avatar-edit-button-container">
                                <button
                                    class="profile__avatar-edit-button"
                                    type="button"
                                ></button>
                            </div>
                        </div>
                        <div class="profile__text-block">
                            <h1 class="profile__title">Жак-Ив Кусто</h1>
                            <button
                                class="profile__edit-button"
                                type="button"
                            ></button>
                            <p class="profile__subtitle">
                                Исследователь океана
                            </p>
                        </div>
                    </div>

                    <button class="profile__add-button" type="button"></button>
                </section>
                <section class="page__cards">
                    <ul class="cards"></ul>
                </section>
            </main>
            <footer class="footer page__footer">
                <p class="footer__copyright">© 2022 Mesto Russia</p>
            </footer>

            <section class="popup popup_type_avatar">
                <div class="popup__container popup__container_middle-form">
                    <button class="popup__close-button" type="button"></button>
                    <form
                        class="popup__content popup__avatar-content popup__form"
                        action="#"
                        name="user-avatar"
                        novalidate
                    >
                        <h2 class="popup__title">Обновить аватар</h2>
                        <div class="popup__field">
                            <input
                                id="avatar-input"
                                class="popup__input popup__input_type_link"
                                name="avatar"
                                type="url"
                                placeholder="https://somewebsite.com/someimage.jpg"
                                required
                            />
                            <span class="popup__form-error avatar-input-error"></span>
                        </div>
                        <button
                            class="popup__save-button popup__button popup__avatar-button"
                            type="submit"
                        >
                            Сохранить
                        </button>
                    </form>
                </div>
            </section>

            <section class="popup popup_type_profile">
                <div class="popup__container">
                    <button class="popup__close-button" type="button"></button>

                    <form
                        class="popup__content popup__profile-content popup__form"
                        action="#"
                        name="user-profile"
                        novalidate
                    >
                        <h2 class="popup__title">Редактировать профиль</h2>
                        <div class="popup__field">
                            <input
                                id="name-input"
                                class="popup__input popup__input_type_name"
                                name="name"
                                type="text"
                                minlength="2"
                                maxlength="40"
                                required
                            />
                            <span class="popup__form-error name-input-error"></span>
                        </div>
                        <div class="popup__field">
                            <input
                                id="about-input"
                                class="popup__input popup__input_type_about"
                                name="about"
                                type="text"
                                minlength="2"
                                maxlength="200"
                                required
                            />
                            <span class="popup__form-error about-input-error"></span>
                        </div>
                        <button
                            class="popup__save-button popup__button popup__profile-button"
                            type="submit"
                        >
                            Сохранить
                        </button>
                    </form>
                </div>
            </section>
            <section class="popup popup_type_card">
                <div class="popup__container">
                    <button class="popup__close-button" type="button"></button>
                    <form
                        class="popup__content popup__card-content popup__form"
                        action="#"
                        name="new-location"
                        novalidate
                    >
                        <h2 class="popup__title">Новое место</h2>
                        <div class="popup__field">
                            <input
                                id="title-input"
                                class="popup__input popup__input_type_card-title"
                                name="name"
                                type="text"
                                placeholder="Название"
                                minlength="2"
                                maxlength="30"
                                required
                            />
                            <span class="popup__form-error title-input-error"></span>
                        </div>
                        <div class="popup__field">
                            <input
                                id="link-input"
                                class="popup__input popup__input_type_link"
                                name="link"
                                type="url"
                                placeholder="Ссылка на картинку"
                                required
                            />
                            <span class="popup__form-error link-input-error"></span>
                        </div>
                        <button
                            class="popup__create-button popup__button"
                            type="submit"
                        >
                            Создать
                        </button>
                    </form>
                </div>
            </section>

            <section class="popup popup_type_delete-card">
                <div class="popup__container popup__container_low-form">
                    <button class="popup__close-button" type="button"></button>
                    <form
                        class="popup__content popup__delete-card-content popup__form"
                        name="delete-card"
                    >
                        <h2 class="popup__title popup__title_low-form">
                            Вы уверены?
                        </h2>
                        <button
                            class="popup__delete-button popup__button"
                            type="submit"
                        >
                            Да
                        </button>
                    </form>
                </div>
            </section>

            <section class="popup popup_type_image">
                <div class="popup__container popup__container_type_image">
                    <button class="popup__close-button" type="button"></button>
                    <img class="popup__image" src="#" alt="#" />
                    <h2 class="popup__title popup__title_type_image"></h2>
                </div>
            </section>

            <template id="card-template">
                <li class="card">
                    <img class="card__image" src="value" alt="#" />
                    <button class="card__trash" type="button"></button>
                    <div class="card__bottom">
                        <h2 class="card__title"></h2>
                        <div class="card__like-block">
                            <button
                                class="card__like card__liked"
                                type="button"
                            ></button>
                            <div class="card__likes-qty">0</div>
                        </div>
                    </div>
                </li>
            </template>
        </body>
    );
}

export default App;
