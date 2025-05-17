import './App.css';
import Header from "./pages/header/Header";
import {Route, Routes} from "react-router-dom";
import DashBoard from "./pages/dashboard/DashBoard";
import NoMatch from "./pages/noMatch/NoMatch";
import CreateEmployeePage from "./pages/employee/CreateEmployeePage";
import UpdateEmployeePage from "./pages/employee/UpdateEmployeePage";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path={'/'} element={<DashBoard/>}/>
        <Route path={'*'} element={<NoMatch/>}/>
        <Route path={'/create-employee'} element={<CreateEmployeePage/>}/>
        <Route path={'/update-employee/:id'} element={<UpdateEmployeePage />} />
      </Routes>
    </>
  );
}

export default App;
