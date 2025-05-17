import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";

const UpdateEmployeePage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const res = await fetch(`http://localhost:8080/api/employee/${id}`);
                const data = await res.json();
                setFormData(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchEmployee();
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const res = await fetch(`http://localhost:8080/api/employee/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            await res.json();
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <EmployeeForm
            formData={formData}
            onChange={handleInputChange}
            onSubmit={handleSubmitForm}
            buttonLabel="UPDATE EMPLOYEE"
        />
    );
};

export default UpdateEmployeePage;
