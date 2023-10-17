import { Link, useNavigate } from "react-router-dom";
import animation from "../assets/Stuck at Home - To Do List.png";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate(null);
  const notifySuccess = () =>
    toast.success("Logged in Successful", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifyError = (error) =>
    toast.error(error, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    logIn(email, password)
      .then(() => {
        notifySuccess();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        notifyError(error.message);
      });
  };
  return (
    <div>
      <h1 className="text-5xl font-bold text-center md:my-10">Login now!</h1>
      <p className="py-6 text-center md: my-5">
        Welcome back! Log in to continue your journey and access your
        personalized experience.
      </p>
      <div className=" flex justify-center mx-auto mb-10">
        <div className="flex p-4 md:flex-row flex-col ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-red-200">Login</button>
              </div>
            </form>
            <button
              className="btn bg-red-200
             w-1/2 mx-auto"
            >
              Login By Google<FcGoogle className="text-2xl"></FcGoogle>
            </button>
            <p className="text-black text-center">
              Create a account here{" "}
              <Link
                to={"/register"}
                className="font-bold text-red-800 underline"
              >
                Register
              </Link>
            </p>
          </div>
          <div className="">
            <img className="w-[500px]" src={animation} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
