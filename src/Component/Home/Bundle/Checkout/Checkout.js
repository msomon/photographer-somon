
import { Button, Form } from 'react-bootstrap';
import './Checkout.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import './Checkout.css'



const Checkout = () => {
  const [user]=useAuthState(auth);
  const handleSubmit =(event)=>{
    
    event.preventDefault()
     toast('Submit Successfully')
  }
  return (
    <div className='container w-50 mx-auto checkout'>
    <h1 className='mt-1'>Checkout Now </h1>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicname">
  <Form.Label>Name</Form.Label>
  <Form.Control required name='name' type="text" placeholder="Name" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control value={user?.email} readOnly name='email' required type="email" placeholder="Enter email" />
</Form.Group>


<Form.Group className="mb-3" controlId="formBasicAddress">
  <Form.Label>Address</Form.Label>
  <Form.Control name='Address' required type="text" placeholder="Address" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicNumber">
  <Form.Label>Phone Number</Form.Label>
  <Form.Control name='Phonenumber' required type="text" placeholder="Phone Number" />
</Form.Group>

<Button variant="primary" type="submit">
  Submit
</Button>
</Form>
  </div>
  );
};

export default Checkout;