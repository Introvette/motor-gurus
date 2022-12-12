import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';

import TechnicianForm from './Services/TechnicianForm';
import AppointmentList from './Services/AppointmentList';
import AppointmentForm from './Services/AppointmentForm';
import ServiceHistory from './Services/ServiceHistory';

import ManufacturerList from './Inventory/ManufacturerList';
import ManufacturerForm from './Inventory/ManufacturerForm';
import ModelList from './Inventory/ModelList';



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technician">
            <Route path="" element={<TechnicianForm />} />
          </Route>
          <Route path="appointment">
            <Route path="" element={<AppointmentList />} />
            <Route path="new" element={<AppointmentForm />} />
            <Route path="history" element={<ServiceHistory />} />
          </Route>
          <Route path="manufacturers">
            <Route path="" element={<ManufacturerList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="">
            <Route path="" element={<ServiceHistory />} />
          </Route>
          <Route path="models">
            <Route path="" element={<ModelList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
