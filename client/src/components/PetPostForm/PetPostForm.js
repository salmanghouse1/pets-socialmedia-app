import React, { useState } from 'react';
import axios from 'axios';

const PetPostForm = () => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('dog');
  const [imageURL, setImageURL] = useState('');

  const openWidget = () => {
    window.cloudinary.openUploadWidget(
      { 
        cloudName: 'your-cloudinary-cloud-name', 
        uploadPreset: 'your-upload-preset',
        sources: ['local', 'url'],
        folder: 'pet-posts'
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          setImageURL(result.info.secure_url);
        } else {
          console.error(error);
        }
      }
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postData = {
      petName,
      petType,
      imageURL,
    };

    try {
      const response = await axios.post('', postData, {
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

        <button type="button" onClick={openWidget}>Upload Image</button>

        {imageURL && (
          <div>
            <h2>Uploaded Image:</h2>
            <img src={imageURL} alt="Uploaded" width="300" />
          </div>
        )}

        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PetPostForm;
