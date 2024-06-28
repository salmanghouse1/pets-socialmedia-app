import React,{useState} from 'react';
import PostList from './Posts/PostList';
import 'bulma/css/bulma.min.css';
import './../App.css';



const Home = () => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('dog');
  const [imageURL, setImageURL] = useState('');
  const [paypalemail,setPaypalEmail]=useState('');
  const [image_data,setImage_data] =useState('');
const [image_hash,setImage_hash]= useState('');
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
      paypalemail
    });

    fetch('/api/v1/posts/send', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          text: petName,
          user: petType,
          image: imageURL,
          paypalUserid: paypalemail,
          image_data:image_data,
          image_hash:image_hash,

      })
  })
  .then(response => response.json())
  .then(data => {
      console.log(data);
  })
  .catch(error => {
      console.error('There was an error making the request:', error);
  });
  
  
  };


  return (
    <>
    <section className="section">
      <div className="container">
        <h1 className="title is-primary">Welcome to Pet Social Media</h1>
        <p className="subtitle">Connect with other pet lovers!</p>
      </div>
      <div>
          <div>
      <h1>Create a Post for Your Pet</h1>
      <div className="card custom-shadow">
      <form onSubmit={handleSubmit} className='card-content ispadding-medium'>
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
          onChange={(e) => setPaypalEmail(e.target.value)}
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

      

        {imageURL && (
          <div>
            <h2>Uploaded Image:</h2>
          
          </div>
        )}

        <br /><br />
        <button className="button is-dark" type="submit">Submit</button>
      </form>
        </div>
    </div>
      </div>
     <>
    
     </>
      <PostList></PostList>
    </section>
        </>
    
  );
};

export default Home;
