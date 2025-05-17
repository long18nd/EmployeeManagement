import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";

const CreateEmployeePage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8080/api/employee", {
                method: "POST",
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
            buttonLabel="CREATE EMPLOYEE"
        />
    );
};

export default CreateEmployeePage;
