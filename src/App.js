import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import OnboardingPage from './components/OnboardingPage/OnboardingPage';
import AppRoutes from './AppRoutes';

function App() {
  // State to manage if the onboarding is complete
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  useEffect(() => {
    // Assuming you are storing the completion of onboarding in local storage
    const onboardingCompleted = localStorage.getItem('onboardingCompleted') === 'true';
    setIsOnboardingComplete(onboardingCompleted);
  }, []);

  // Call this function when onboarding is complete
  const handleOnboardingComplete = () => {
    setIsOnboardingComplete(true);
    localStorage.setItem('onboardingCompleted', 'true'); // Persist this state change
  };

  return (
      <div className="App">
        <Header />
        <Routes>
          {/* Conditional rendering based on the onboarding completion state */}
          <Route 
            path="*" 
            element={!isOnboardingComplete ? <OnboardingPage onComplete={handleOnboardingComplete} /> : <AppRoutes />}
          />
        </Routes>
      </div>
  );
}

export default App;