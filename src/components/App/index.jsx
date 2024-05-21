import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const App = () => {
  const { t, i18n } = useTranslation(['translation', 'common']);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ua')}>Українська</button>
      <button onClick={() => changeLanguage('cz')}>Čeština</button>
    </div>
  );
};

export default App;
