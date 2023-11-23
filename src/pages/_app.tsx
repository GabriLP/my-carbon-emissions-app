import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header/Header';
import theme from '../style/theme';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import type { AppProps } from 'next/app';
import OnboardingPage from '../components/OnboardingPage/OnboardingPage';

function App({ Component, pageProps }: AppProps) {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  useEffect(() => {
    const onboardingCompleted = localStorage.getItem('onboardingCompleted') === 'true';
    setIsOnboardingComplete(onboardingCompleted);
  }, []);

  const handleOnboardingComplete = () => {
    setIsOnboardingComplete(true);
    localStorage.setItem('onboardingCompleted', 'true');
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <CssBaseline /> 
        <Header />
        {!isOnboardingComplete ? (
          <OnboardingPage onComplete={handleOnboardingComplete} />
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </Provider>
  );
}

export default App;