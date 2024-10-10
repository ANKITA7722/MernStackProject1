import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';  // Ensure axios is imported
import { toast } from 'react-toastify';  // Assuming react-toastify for notifications

const Insert = () => {
    const [input, setInput] = useState({});

    // Handles input changes for form fields
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
        console.log(input);
    };

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent default form submission
        let api = "http://localhost:3000/employee";  // API endpoint
        
        axios.post(api, input)
            .then((res) => {
                console.log(res);
                toast.success("Data Successfully saved!");
            })
            .catch((error) => {
                console.error("There was an error saving the data!", error);
                toast.error("Failed to save data.");
            });
    };

    return (
        <div className="container">
            <h1>Insert Employee Details</h1>

            <Form onSubmit={handleSubmit}> {/* Use onSubmit for form submission */}
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

                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </Form>
        </div>
    );
};

export default Insert;
