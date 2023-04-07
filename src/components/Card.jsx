import React from 'react';

function Card({ card }) {
    return (
        <li key={card._id} class="card">
            <img
                class="card__image"
                src={card.link}
                // style={{ backgroundImage: `url(${card.link})` }}
                alt={card.name}
            />
            <button class="card__trash" type="button"></button>
            <div class="card__bottom">
                <h2 class="card__title">{card.name}</h2>
                <div class="card__like-block">
                    <button
                        class="card__like card__liked"
                        type="button"
                    ></button>
                    <div class="card__likes-qty">{card.likes.length}</div>
                </div>
            </div>
        </li>
    );
}

export default Card;
