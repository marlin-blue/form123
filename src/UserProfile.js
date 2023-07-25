// UserProfile.js
import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username}</h1>
          <p>Email: {user.attributes.email}</p>
          {/* Display other user information */}
        </div>
      ) : (
        <p>Please sign in to view your profile.</p>
      )}
    </div>
  );
};

export default UserProfile;
