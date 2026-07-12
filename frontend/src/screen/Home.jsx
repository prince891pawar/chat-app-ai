import React, { useContext } from 'react';
import { userContext } from './context/UserContext.jsx'; // path check kar lena

const Home = () => {
  const { user } = useContext(userContext);

  return (
    <div>
      {user ? (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      ) : (
        <h2>No User Logged In</h2>
      )}
    </div>
  );
};

export default Home;
