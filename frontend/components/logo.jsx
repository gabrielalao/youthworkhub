import React from 'react';
import { hashHistory } from 'react-router';

const Logo = () => {
  const handleClick = () => { hashHistory.push('/'); };
  return (
    <img
      onClick={handleClick}
      alt="Logo"
      src="http://res.cloudinary.com/youth-work-hub/image/upload/v1484165257/lo-res-logo_hboqau.jpg"
    />
  );
};
export default Logo;
