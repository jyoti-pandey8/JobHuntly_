// Cardo.jsx

// import React from 'react';
// import Button from '@/components/atoms/Button';

// const Card = ({ title, description, buttonLabel, onButtonClick }) => {
//   return (
//     <div className="border p-4 rounded shadow-md bg-white max-w-sm">
//       <h2 className="text-lg font-semibold mb-2">{title}</h2>
//       <p className="text-gray-600 mb-4">{description}</p>
//       <Button label={buttonLabel} onClick={onButtonClick} />
//     </div>
//   );
// };

// export default Card;
// ************************************

// button.jsx

// import React from 'react';

// const Button = ({ label, onClick, className }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${className}`}
//     >
//       {label}
//     </button>
//   );
// };

// export default Button;
// ************************************
// page.jsx


// 'use client';

// import React from 'react';
// import Card from '@/components/molecules/Card';

// const cardsData = [
//   {
//     title: 'Card One',
//     description: 'This is the first card.',
//     buttonLabel: 'Click 1',
//   },
//   {
//     title: 'Card Two',
//     description: 'This is the second card.',
//     buttonLabel: 'Click 2',
//   },
//   {
//     title: 'Card Three',
//     description: 'This is the third card.',
//     buttonLabel: 'Click 3',
//   },
// ];

// const HomePage = () => {
//   const handleClick = (label) => {
//     alert(`Button in ${label} clicked!`);
//   };

//   return (
//     <main className="flex flex-wrap gap-4 p-8 bg-gray-100 min-h-screen">
//       {cardsData.map((card, index) => (
//         <Card
//           key={index}
//           title={card.title}
//           description={card.description}
//           buttonLabel={card.buttonLabel}
//           onButtonClick={() => handleClick(card.title)}
//         />
//       ))}
//     </main>
//   );
// };

// export default HomePage;
