import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';

import AddAuto from './Inventory/AddAuto';
import AddModel from './Inventory/AddModel';
import ListAutos from './Inventory/ListAutos';

import CreateCustomer from './Sales/CreateCustomer';
import CreateSalesPerson from './Sales/CreateSalesPerson';
import CreateSalesRecord from './Sales/CreateSale';
import SaleHistory from './Sales/SaleHistory';
import ListSales from './Sales/AutosList';



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="models">
            <Route path="new" element={<AddModel />} />
          </Route>
          <Route path="/automobiles">
            <Route path="" element={<ListAutos />} />
            <Route path="new" element={<AddAuto />} />
          </Route>
          <Route path="/customers">
            <Route path="new" element={<CreateCustomer />} />
          </Route>
          <Route path="/salespeople">
            <Route path="new" element={<CreateSalesPerson />} />
          </Route>
          <Route path="/autosales">
            <Route path="new" element={<CreateSalesRecord />} />
            <Route path="history" element={<SaleHistory/>} />
            <Route path="" element={<ListSales/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
