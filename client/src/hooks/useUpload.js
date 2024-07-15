import { useState } from 'react';
import axios from 'axios';

const useUpload = () => {
  const [message, setMessage] = useState('');
  const [imageData, setImageData] = useState('');
  const [postId, setPostId] = useState('');
  const [post, setPost] = useState(null);

  const uploadFileAndCreatePost = async (file, title) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64data = reader.result;
      try {
        const res = await axios.post('http://localhost:5000/upload', {
          filename: file.name,
          data: base64data,
        });
        const imageId = res.data.imageId;
        const postRes = await axios.post('http://localhost:5000/posts', {
          title,
          imageId,
        });
        setMessage('File uploaded and post created successfully');
        setPostId(postRes.data.postId);
      } catch (err) {
        setMessage('File upload or post creation failed');
      }
    };
  };

  const getImage = async (filename) => {
    try {
      const res = await axios.get(`http://localhost:5000/images/${filename}`);
      setImageData(res.data.data);
    } catch (err) {
      setMessage('Failed to fetch image');
    }
  };

  const getPost = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/posts/${id}`);
      setPost(res.data.post);
    } catch (err) {
      setMessage('Failed to fetch post');
    }
  };

  return {
    message,
    imageData,
    postId,
    post,
    uploadFileAndCreatePost,
    getImage,
    getPost,
  };
};

export default useUpload;
