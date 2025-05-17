import { Form, Button } from "react-bootstrap";
import "./index.css";
const EmployeeForm = ({ formData, onChange, onSubmit, buttonLabel }) => {
    return (
        <div className="center-form">
            <h1>{buttonLabel === "CREATE EMPLOYEE" ? "CREATE NEW EMPLOYEE" : "UPDATE EMPLOYEE"}</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Control
                        name="name"
                        type="text"
                        placeholder="Please enter name ..."
                        value={formData.name}
                        onChange={onChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        name="email"
                        type="text"
                        placeholder="Please enter email ..."
                        value={formData.email}
                        onChange={onChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Control
                        name="phone"
                        type="text"
                        placeholder="Please enter phone ..."
                        value={formData.phone}
                        onChange={onChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicDepartment">
                    <Form.Control
                        name="department"
                        type="text"
                        placeholder="Please enter department ..."
                        value={formData.department}
                        onChange={onChange}
                    />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
                    {buttonLabel}
                </Button>
            </Form>
        </div>
    );
};

export default EmployeeForm;
