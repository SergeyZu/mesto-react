import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    api.getUserData().then((currentUser) => {
      console.log(currentUser);
      setCurrentUser(currentUser);
    });
  }, []);

  const [cards, setCards] = useState([]);
  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  const [selectedCard, setSelectedCard] = useState({});
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.setLike(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then((res) => {
        console.log("res =>", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
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

        <PopupWithForm name="delete-card" title="Вы уверены?" btnText="Да" />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
