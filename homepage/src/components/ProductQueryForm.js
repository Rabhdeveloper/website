import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ProductQueryForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // First, send the email to the agent and user
    emailjs
      .sendForm('service_id', 'template_id', e.target, 'user_id')
      .then(
        (result) => {
          setMessage('Thank you for your query! An agent will get in touch with you shortly.');
          setEmail('');
          setQuery(''); // Clear the input fields
        },
        (error) => {
          setMessage('Something went wrong, please try again.');
        }
      );
  };

  return (
    <div className="product-query-form">
      <h3>Have a Question About a Product?</h3>
      <p>Fill out the form below to submit your query and get connected with an agent.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="sr-only">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          aria-label="Email address"
        />
        
        <label htmlFor="query" className="sr-only">Product Query</label>
        <textarea
          id="query"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your query"
          required
          aria-label="Product query"
        />
        
        <button type="submit">Submit Query</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default ProductQueryForm;
