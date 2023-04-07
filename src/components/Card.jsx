import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }
    return (
        <li className="card">
            <img
                className="card__image"
                src={props.card.link}
                alt={props.card.name}
                onClick={handleClick}
            />
            <button className="card__trash" type="button"></button>
            <div className="card__bottom">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__like-block">
                    <button
                        className="card__like card__liked"
                        type="button"
                    ></button>
                    <div className="card__likes-qty">
                        {props.card.likes.length}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Card;
