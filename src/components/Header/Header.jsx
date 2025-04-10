import style from './Header.module.scss';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <Link to="/home">
          <Logo className={style.header__logo} />
        </Link>

        <nav className={style.header__menu} role="navigation">
          <ul className={style.header__list}>
            <li className={style.header__item}>
              <Link
                to="/home"
                className={style.header__link}
                aria-label="Главная страница"
              >
                Главная страница
              </Link>
            </li>

            <li className={style.header__item}>
              <Link
                to="/myDictionary"
                className={style.header__link}
                aria-label="Мой словарь"
              >
                Мой словарь
              </Link>
            </li>
            <li className={style.header__item}>
              <Link
                to="/library"
                className={style.header__link}
                aria-label="Моя библиотека"
              >
                Моя библиотека
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
