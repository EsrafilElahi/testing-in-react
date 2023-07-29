import React, { useState } from 'react';
import LoginForm from './LoginForm';
import WelcomeMessage from './WelcomeMessage';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <div>
      {!user ? <LoginForm onLogin={handleLogin} /> : <WelcomeMessage username={user} />}
    </div>
  );
};

export default App;
