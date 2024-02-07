import React, { useState } from 'react';

const Survey = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: 'veryUnsatisfied',
    purchaseSatisfaction: 'veryUnsatisfied',
    serviceSatisfaction: 'veryUnsatisfied',
    companyOverall: 'veryUnsatisfied',
    buyAgain: 'veryUnlikely',
    recommendProduct: 'veryUnlikely',
    recommendCompany: 'veryUnlikely'
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with formData
    console.log(formData);
  }

  return (
    <div className="container">
      <h1>Survey Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name*</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <label htmlFor="experience">Your Experience</label>
        <select id="experience" name="experience" value={formData.experience} onChange={handleChange}>
          <option value="veryUnsatisfied">Very Unsatisfied</option>
          <option value="unsatisfied">Unsatisfied</option>
          <option value="neutral">Neutral</option>
          <option value="satisfied">Satisfied</option>
          <option value="verySatisfied">Very Satisfied</option>
        </select>

        {/* Repeat the following block for each survey question */}
        <label htmlFor="purchaseSatisfaction">How satisfied are you with Purchase?</label>
        <select id="purchaseSatisfaction" name="purchaseSatisfaction" value={formData.purchaseSatisfaction} onChange={handleChange}>
          <option value="veryUnsatisfied">Very Unsatisfied</option>
          <option value="unsatisfied">Unsatisfied</option>
          <option value="neutral">Neutral</option>
          <option value="satisfied">Satisfied</option>
          <option value="verySatisfied">Very Satisfied</option>
        </select>
        {/* End of repeat block */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Survey;
