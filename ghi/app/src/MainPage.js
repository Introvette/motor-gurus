import { NavLink } from 'react-router-dom';
import "./MainPage.css"

function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Motorized</h1>
      <div className="col-lg-6 mx-auto">
      <img
          src={"./logo.png"}
          style={{ width: 400, height: 400 }}
        ></img>

        <p className="lead mb-4">
          The optomized management system for your dealership needs
        </p>
      </div>
    </div>
  );
}

export default MainPage;
