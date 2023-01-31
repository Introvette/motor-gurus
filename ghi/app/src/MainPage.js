import { NavLink } from 'react-router-dom';
import "./MainPage.css"

function MainPage() {
  return (
    <body>
    <div className="px-4 py-5 my-5 text-center">
      <div className="col-lg-6 mx-auto">
      <img
          src={"./logo.gif"}
          style={{ width: 450, height: 450 }}
        ></img>

<h1 style={{ color: "white" }} className="display-5 fw-bold">

        </h1>

      </div>
    </div>
    </body>
  );
}

export default MainPage;
