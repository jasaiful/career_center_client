import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="text-center md:min-h-screen">
            <h1 className="text-4xl font-bold">Please Login!</h1>

            <div className="rounded-xl flex flex-col p-4 gap-5 md:flex-row-reverse">

                <div className="w-full p-3 md:w-1/2">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    // value={email}
                                    // onChange={() => setName(e.target.value)}
                                    placeholder="your email address"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    // value={password}
                                    // onChange={() => setName(e.target.value)}
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-secondary normal-case">Login</button>
                            </div>
                        </form>
                        <p className="text-center">Do not have an account? <Link to='/register' className="font-bold">Register</Link></p>
                        <div className="py-5 mx-auto">
                            <button className="btn btn-outline normal-case"> <FaGoogle className="text-blue-600" />Login with <span className="text-xl font-bold text-pink-600">Google</span> </button>
                        </div>
                    </div>

                </div>
                <div className="w-full p-3 md:w-5/12">
                    <img className="rounded-xl" src="https://i.ibb.co/vBfqhB1/image.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;