import PopupWithForm from "./PopupWithForm";
import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
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
  );
}

export default EditAvatarPopup;
