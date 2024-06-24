import React from 'react';
import PostList from './PostList';
import React, { useState } from 'react';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget';


const [petName, setPetName] = useState('');
const [petType, setPetType] = useState('dog');
const [imageURL, setImageURL] = useState('');
const [paypalemail,setPaypalEmail]=useState('');

const Home = () => {

  const handleUploadSuccess = (result) => {
    setImageURL(result.info.secure_url);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log({
      petName,
      petType,
      imageURL,
    });

    axios.post('api/posts', { text:petName,user:petType,image:imageURL,paypalUserid:paypalUserid });

  };


  return (
    <>
    <section className="section">
      <div className="container">
        <h1 className="title">Welcome to Pet Social Media</h1>
        <p className="subtitle">Connect with other pet lovers!</p>
      </div>
      <div>
          <div>
      <h1>Create a Post for Your Pet</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pet-name">Pet's Name:</label>
        <input
          type="text"
          id="pet-name"
          name="petName"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          required
          /><br /><br />
<label htmlFor="pet-name">Paypal User id</label>
        <input
          type="text"
          id="pet-name"
          name="paypalUserEmail"
          value={paypalemail}
          onChange={(e) => setPetName(e.target.value)}
          required
          />
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

        <CloudinaryContext cloudName="your-cloudinary-cloud-name">
          <WidgetLoader />
          <Widget
            sources={['local', 'url']}
            resourceType={'image'}
            cloudName={'your-cloudinary-cloud-name'}
            uploadPreset={'your-upload-preset'}
            buttonText={'Upload Image'}
            style={{
              color: 'white',
              border: 'none',
              width: '120px',
              backgroundColor: '#1a73e8',
              borderRadius: '4px',
              height: '30px',
            }}
            folder={'pet-posts'}
            cropping={false}
            onSuccess={handleUploadSuccess}
            onFailure={(error) => console.log(error)}
            />
        </CloudinaryContext>

        {imageURL && (
          <div>
            <h2>Uploaded Image:</h2>
            <Image
              cloudName="your-cloudinary-cloud-name"
              publicId={imageURL}
              width="300"
              crop="scale"
              />
          </div>
        )}

        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
      </div>
      <PostList></PostList>
    </section>
        </>
    
  );
};

export default Home;
