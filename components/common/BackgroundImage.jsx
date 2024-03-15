import React from 'react';

const BackgroundImage = ({ src, children }) => {
  return (
    <div className="h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${src})` }}>
      <div className="text-center">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
