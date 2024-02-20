import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/Authentication";
import useAxiosPublic from "../Hooks/useAxiosPublic.jsx";

const Login = () => {
  const axiosPublic = useAxiosPublic();

  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <>
      <div className="h-[80vh] font-DM">
        <div className="w-full relative">
          <img
            className="w-full h-[120vh]"
            src="https://i.ibb.co/mq326q3/cool-background.png"
            alt="matthew-henry-T-G9-PVLOf-OY-unsplash"
            border="0"
          ></img>
        </div>
        <section className="absolute top-10 left-80 w-3/5 mt-40">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 text-black">
            <div className="w-full bg-transparent border border-white backdrop-blur-sm rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-[#E3E3E3]">
                <h1 className="text-3xl text-center font-bold leading-tight tracking-tight text-black">
                  Login to your account
                </h1>

                <div className="flex justify-center">
                  <button
                    onClick={handleGoogleLogin}
                    type="button"
                    className="flex hover:text-white hover:bg-slate-700 bg-white text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 19"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Login with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
