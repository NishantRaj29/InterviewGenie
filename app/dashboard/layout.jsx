import React from 'react';
import Header from './_components/Header';

function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      <div className='mx-0 md:mx-0 lg:mx-0'>
        <div 
          style={{
            backgroundImage: 'url("background.jpg")',
            backgroundSize: 'cover',  // Ensures the image covers the whole div
            backgroundPosition: 'center',  // Centers the image
            backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
            width: '100%',
            minHeight: '100vh'
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
