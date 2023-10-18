import React, { useEffect } from 'react';

const Landing = () => {
  useEffect(() => {
    // Redirect to another website when the component is mounted
    window.location.href = '/landing';
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  // This component doesn't render anything because it redirects immediately
  return null;
};

export default Landing;
