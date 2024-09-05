import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons/faTelegramPlane';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Create() {
  const [data, setData] = useState({
    title: "",
    author: "",
    body: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/blogs', data)
    .then(res=>{
      toast.success('Added successfully', {
      position: toast.POSITION.TOP_RIGHT, 
      autoClose: 3000}) 
    })
    .catch(err => {
        toast.error('An error occurred while adding the blog',{
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        })

      })

    }
  

  return (
    <div className='app'>
      <h2><FontAwesomeIcon icon={faUserCircle}/></h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            placeholder="Enter the title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Author:</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={data.author}
            onChange={handleChange}
            placeholder="Enter author name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBody">
          <Form.Label>Body:</Form.Label>
          <Form.Control
            as="textarea"
            name="body"
            value={data.body}
            onChange={handleChange}
            rows={3}
            placeholder="Enter body"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Button variant="primary" type="submit">Save Blog <FontAwesomeIcon icon={faTelegramPlane}/></Button>

        </Form.Group>
        <ToastContainer/> 
      </Form>
      <p>{data.title}</p>
      <p>{data.author}</p>
      <p>{data.body}</p>
    </div>
  );
}

export default Create;
