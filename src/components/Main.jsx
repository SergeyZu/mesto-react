import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.jsx';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserData(), api.getInitialCards()])
            .then((res) => {
                const [userData, cards] = res;
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <main className="content">
            <section className="profile page__profile">
                <div className="profile__content">
                    <div className="profile__avatar-container">
                        <img
                            className="profile__avatar"
                            src={userAvatar}
                            alt="Аватар"
                        />
                        <div className="profile__avatar-edit-button-container">
                            <button
                                className="profile__avatar-edit-button"
                                type="button"
                                onClick={onEditAvatar}
                            ></button>
                        </div>
                    </div>
                    <div className="profile__text-block">
                        <h1 className="profile__title">{userName}</h1>
                        <button
                            className="profile__edit-button"
                            type="button"
                            onClick={onEditProfile}
                        ></button>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                </div>

                <button
                    className="profile__add-button"
                    type="button"
                    onClick={onAddPlace}
                ></button>
            </section>
            <section className="page__cards">
                <ul className="cards">
                    {cards.map((card) => (
                        <Card
                            card={card}
                            key={card._id}
                            onCardClick={onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;
