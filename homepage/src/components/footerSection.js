// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// function FooterSection() {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send email using EmailJS service
//     emailjs
//       .sendForm('service_id', 'template_id', e.target, 'user_id')
//       .then(
//         (result) => {
//           setMessage('Thank you for subscribing!');
//           setEmail(''); // Clear the email input
//         },
//         (error) => {
//           setMessage('Something went wrong, please try again.');
//         }
//       );
//   };

//   return (
//     <div className="footer-section3">
//       <h3>Subscribe to Our Newsletter</h3>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email" className="sr-only">Email Address</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//           required
//           aria-label="Email address"
//         />
//         <button type="submit">Subscribe</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default FooterSection;
