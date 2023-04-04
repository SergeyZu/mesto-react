import logo from '../images/logo.svg';

function Header() {
    return (
        <>
            <header class="header page__header">
                <img
                    class="header__logo"
                    src={logo}
                    alt="Логотип Mesto Russia"
                />
            </header>
        </>
    );
}

export default Header;
