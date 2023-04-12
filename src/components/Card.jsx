import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like ${
    isLiked && "card__like_clicked"
  }`;

  console.log(isLiked);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleDeleteClick() {}

  return (
    <li className="card">
      <img
        className="card__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <button
        className={`card__trash ${!isOwn && "card__hide-trash"}`}
        type="button"
        onClick={handleDeleteClick}
      ></button>
      <div className="card__bottom">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-block">
          <button className={cardLikeButtonClassName} type="button"></button>
          <div className="card__likes-qty">{props.card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}

export default Card;
