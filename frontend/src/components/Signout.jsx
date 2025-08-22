import React, { useEffect } from 'react';

function Signout() {
  useEffect(() => {
    // Optionally clear tokens/localStorage, etc.
    // Redirect to Cognito signout endpoint if needed
    window.location.href = "https://ap-southeast-27sclhywav.auth.ap-southeast-2.amazoncognito.com/logout?client_id=2eg3s02qpctiaaso349t4c8t3l&logout_uri=https%3A%2F%2Flocalhost%3A3000%2F";
  }, []);

  return (
    <div className="container py-5">
      <h1>You have been signed out.</h1>
      <p>Thank you for visiting Talikala, Inc.</p>
    </div>
  );
}

export default Signout;