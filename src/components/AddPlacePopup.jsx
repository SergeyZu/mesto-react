import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
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
  );
}

export default AddPlacePopup;
