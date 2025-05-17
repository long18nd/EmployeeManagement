import {useEffect, useState} from "react";
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const DashBoard = () => {
    const navigate = useNavigate();

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchListEmployees = async () => {
            try {
                const res = await fetch("http://localhost:8080/api/employees", {
                    method : "GET",
                })

                const data = await res.json();

                setEmployees(data);
            } catch (e) {
                console.log(e)
            }
        }
        fetchListEmployees();
    }, []);

    const handleDeleteEmployee = async (id) => {
        try {
            const res = await fetch(`http://localhost:8080/api/employee/${id}`, {
                method : "DELETE"
            });

            if (res.ok) {
                setEmployees((preEmployees) => preEmployees.filter(
                    (employee) => employee.id !== id
                ))
            }
        }catch (e) {
            console.log(e)
        }
    }

    return <>
        <Container>
            <Row>
                <Col>
                    <div className="d-flex flex-row justify-content-between mt-4 mb-4">
                        <h1>Employees</h1>
                        <Button>
                           Create new employee
                        </Button>
                    </div>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Department</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                        {employees.map((child) => {
                            return <>
                                <tr key={child.id}>
                                    <td>{child.name}</td>
                                    <td>{child.email}</td>
                                    <td>{child.phone}</td>
                                    <td>{child.department}</td>
                                    <td>
                                        <Button variant="outline-secondary"
                                                onClick={() => navigate(`/update-employee/${child.id}`)}
                                                className="">Update</Button>
                                        <Button variant="outline-danger"
                                                onClick={() => handleDeleteEmployee(child.id)}
                                                className="">Delete</Button>
                                    </td>
                                </tr>
                            </>
                        })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    </>
}

export default DashBoard;