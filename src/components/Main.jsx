function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
    return (
        <main className="content">
            <section className="profile page__profile">
                <div className="profile__content">
                    <div className="profile__avatar-container">
                        <img
                            className="profile__avatar"
                            src="<%=require('./images/cousteau.jpg')%>"
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
                        <h1 className="profile__title">Жак-Ив Кусто</h1>
                        <button
                            className="profile__edit-button"
                            type="button"
                            onClick={onEditProfile}
                        ></button>
                        <p className="profile__subtitle">
                            Исследователь океана
                        </p>
                    </div>
                </div>

                <button
                    className="profile__add-button"
                    type="button"
                    onClick={onAddPlace}
                ></button>
            </section>
            <section className="page__cards">
                <ul className="cards"></ul>
            </section>
        </main>
    );
}

export default Main;
