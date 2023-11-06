import React from 'react';

// Define the type for the props expected by OnboardingPage
type OnboardingPageProps = {
  onComplete: () => void;
};

// Use the OnboardingPageProps type for the component's props
const OnboardingPage: React.FC<OnboardingPageProps> = ({ onComplete }) => {
  const handleCompleteOnboarding = () => {
    onComplete();
  };

  return (
    <div className="onboarding-page">
      <h2>Welcome to the Carbon Emissions App</h2>
      <p>Learn how to track and analyze carbon emissions for a greener world.</p>
      <button onClick={handleCompleteOnboarding}>Get Started</button>
    </div>
  );
};

export default OnboardingPage;