// import React from 'react'

// const CardLayout = ({ children, className = "h-full w-full" }) => {
//     return (
//         <div className={`${className} boxShodow hover:transition-all !duration-200 hover:scale-[1.01] ease-linear rounded-xl`}
//         // style={{
//         //     backgroundImage: `url(images/card-bg.jpg)`,
//         //     backgroundRepeat: 'no-repeat',
//         //     backgroundSize: 'inherit',
//         //     backgroundPosition: 'right',
//         //     width: '100%',
//         // }}
//         >
//             {children}
//         </div>
//     )
// }

// export default CardLayout

import React from 'react';

const CardLayout = ({ children, className = "h-full w-full" }) => {
  const cardStyles = {
    backgroundImage: `url(images/card-bg.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'right',
    width: '100%',
  };

  return (
    <div
      className={`relative ${className} shadow-md hover:transition-all duration-200 hover:scale-101 ease-linear rounded-xl`}
      style={cardStyles}
    >
      {children}
    </div>
  );
};

export default CardLayout;
