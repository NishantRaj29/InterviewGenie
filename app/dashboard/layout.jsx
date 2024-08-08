import React from 'react';
import Header from './_components/Header';

function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      <div className='mx-0 md:mx-0 lg:mx-0'>
        <div 
          style={{
            backgroundImage: 'radial-gradient(circle, #351048, #310e42, #2d0b3d, #2a0937, #260732, #280834, #290935, #2b0a37, #320e41, #39134b, #401755, #471c60)',
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
