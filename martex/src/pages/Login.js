import "bootstrap/dist/css/bootstrap.css";
import loginImg from "../pages/Images/lumiére.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 lg-6 sm-3">
            <img src={loginImg} className="img-fluid" alt=""></img>;
          </div>
          <div className="col-6 lg-6 sm-3">
            <form className="form" action="">
              <h1 className="account"> Login to your account</h1>
              <div class="  mb-3 row">
                <label for="staticEmail" className="  col-sm-2 col-form-label">
                  Email
                </label>
                <div className=" col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id=""
                    placeholder="email"
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">
                  Password
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id=""
                    placeholder="password"
                  />
                </div>
              </div>
              <button className="btn btn-info">
                Login <FontAwesomeIcon icon={faUserLock} />
              </button>

              <p className="p"> Create new account</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
