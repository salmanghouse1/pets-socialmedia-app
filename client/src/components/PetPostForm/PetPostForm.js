import React, { useState } from 'react';
import  from '';
import ImageUpload from './PetImageUpload';

const PetPostForm = () => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('dog');
  const [imageURL, setImageURL] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const postData = {
      petName,
      petType,
      imageURL,
    };

    try {
      const response = await .post('', postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Success:', response.data);
      // Optionally, reset the form or handle success actions here
    } catch (error) {
      console.error('Error:', error);
      // Handle error actions here
    }
  };

  return (
    <div>
      <h1>Create a Post for Your Pet</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pet-name">Pet's Name:</label>
        <input
          type="text"
          id="pet-name"
          name="pet-name"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="pet-type">Type of Pet:</label>
        <select
          id="pet-type"
          name="pet-type"
          value={petType}
          onChange={(e) => setPetType(e.target.value)}
          required
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="other">Other</option>
        </select><br /><br />

        <ImageUpload></ImageUpload>
        

        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PetPostForm;
