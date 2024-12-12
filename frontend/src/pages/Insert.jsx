import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Insert = () => {
    const [input, setInput] = useState({});

   
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((values) => ({ ...values, [name]: value }));
        console.log(input);
    };

   
    const handleSubmit = (e) => {
        e.preventDefault();  
        const api = "http://localhost:3000/employee"; 

        axios.post(api, input)
            .then((res) => {
                console.log(res);
                toast.success("Data successfully saved!");  
            })
            .catch((error) => {
                console.error("There was an error saving the data!", error);
                toast.error("Failed to save data");
            });
    };

    return (
        <div className="container">
            <h1>Insert Employee Details</h1>

            <Form>  
                <Form.Group className="mb-3" controlId="formEmpNo">
                    <Form.Label>Employee No.</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Employee No."
                        name="empno"
                        onChange={handleInput}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        onChange={handleInput}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Your City"
                        name="city"
                        onChange={handleInput}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSalary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Salary"
                        name="salary"
                        onChange={handleInput}
                    />
                </Form.Group>

                <button onClick={handleSubmit}>Save</button>
                <ToastContainer />
            </Form>
        </div>
    );
};

export default Insert;
