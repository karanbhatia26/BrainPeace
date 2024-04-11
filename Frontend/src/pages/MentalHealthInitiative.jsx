// // import React, { useEffect, useRef } from 'react';

// // const MentalHealthInitiative = ({ text, image, link, isTextOnLeft, backgroundColor }) => {
// //   const elementRef = useRef(null);

// //   const renderFormattedText = () => {
// //     const parts = text.split("[italic]");
// //     return (
// //       <>
// //         {parts.map((part, index) =>
// //           index % 2 === 0 ? (
// //             <span key={index}>{part}</span>
// //           ) : (
// //             <span key={index} style={{ fontWeight: 'bold', marginLeft: '-20px', marginBottom: '40px'}}>
// //               <a href={link} target="_blank" rel="noopener noreferrer">
// //                 {part} <span role="img" aria-label="link icon" style={{ fontSize: '20px' }}>🔗</span>
// //               </a>
// //             </span>
// //           )
// //         )}
// //       </>
// //     );
// //   };

// //   const textStyle = {
// //     fontSize: '18px',
// //     color: '#2a2450',
// //   };

// //   return (
// //     <div className={`grid-row`} style={{ backgroundColor, width: '100%' }}>
// //       <div className={`grid-text`} ref={elementRef} style={textStyle}>
// //         {renderFormattedText()}
// //       </div>
// //       <div className={`grid-image`} ref={elementRef} style={{ width: '100%' }}>
// //         <a href={link} target="_blank" rel="noopener noreferrer">
// //           <img src={image} alt="Initiative" />
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MentalHealthInitiative;
// import React, { useRef } from 'react';

// const MentalHealthInitiative = ({ text, image, link, isTextOnLeft, backgroundColor }) => {
//   const elementRef = useRef(null);

//   const renderFormattedText = () => {
//     const parts = text.split("[italic]");
//     return (
//       <>
//         {parts.map((part, index) =>
//           index % 2 === 0 ? (
//             <span key={index}>{part}</span>
//           ) : (
//             <span key={index} style={{ fontWeight: 'bold', marginLeft: '-20px', marginBottom: '40px' }}>
//               <a href={link} target="_blank" rel="noopener noreferrer">
//                 {part} <span role="img" aria-label="link icon" style={{ fontSize: '20px' }}>🔗</span>
//               </a>
//             </span>
//           )
//         )}
//       </>
//     );
//   };

//   const containerStyle = {
//     backgroundColor,
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: '10px',
//     padding: '20px',
//     // marginBottom: '20px',
//   };

//   const textContainerStyle = {
//     flex: 1,
//     order: isTextOnLeft ? 1 : 2, // Change the order based on isTextOnLeft
//     textAlign: isTextOnLeft ? 'left' : 'right',
//     marginRight: isTextOnLeft ? '20px' : '0',
//     marginLeft: isTextOnLeft ? '0' : '20px',
//   };

//   const imageContainerStyle = {
//     flex: 1,
//     order: isTextOnLeft ? 2 : 1, // Change the order based on isTextOnLeft
//     textAlign: isTextOnLeft ? 'right' : 'left',
//   };

//   const imageStyle = {
//     width: '500px',
//     // maxWidth: '200px',
//     borderRadius: '10px',
//   };

//   return (
//     <div className={`grid-row`} style={containerStyle}>
//       <div className={`grid-text`} ref={elementRef} style={textContainerStyle}>
//         {renderFormattedText()}
//       </div>
//       <div className={`grid-image`} ref={elementRef} style={imageContainerStyle}>
//         <a href={link} target="_blank" rel="noopener noreferrer">
//           <img src={image} alt="Initiative" style={imageStyle} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default MentalHealthInitiative;
import { useRef } from 'react';

const MentalHealthInitiative = ({ text, image, link, isTextOnLeft, backgroundColor }) => {
  const elementRef = useRef(null);

  const renderFormattedText = () => {
    const parts = text.split("[italic]");
    return (
      <>
        {parts.map((part, index) =>
          index % 2 === 0 ? (
            <span key={index}>{part}</span>
          ) : (
            <span key={index} style={{ fontWeight: 'bold' }}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {part} <span role="img" aria-label="link icon" style={{ fontSize: '20px' }}>🔗</span>
              </a>
            </span>
          )
        )}
      </>
    );
  };
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ccc',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
    padding: '10px',
    margintop: '50px',
    margin: '10px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    width: '300px',
  };
  
  const imageContainerStyle = {
    width: '100%',
  };
  
  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '10px',
  };

  return (
    <div className={`grid-row`} style={containerStyle}>
      {isTextOnLeft ? (
        <>
          <div className={`grid-image`} ref={elementRef} style={imageContainerStyle}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={image} alt="Initiative" style={imageStyle} />
            </a>
          </div>
          <div className={`grid-text`} ref={elementRef} style={textContainerStyle}>
            {renderFormattedText()}
          </div>
        </>
      ) : (
        <>
          <div className={`grid-image`} ref={elementRef} style={imageContainerStyle}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={image} alt="Initiative" style={imageStyle} />
            </a>
          </div>
          <div className={`grid-text`} ref={elementRef} style={textContainerStyle}>
            {renderFormattedText()}
          </div>
        </>
      )}
    </div>
  );
};

export default MentalHealthInitiative;
