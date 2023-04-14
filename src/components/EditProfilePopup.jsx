import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
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
  );
}

export default EditProfilePopup;
