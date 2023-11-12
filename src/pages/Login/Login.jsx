import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const { googleLogin, loginUser } = useContext(AuthContext)
    const [error, setError] = useState("");
    const location = useLocation();
    console.log('locate to', location);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/")

                const googleUser = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL,
                    userCreated: result.user?.metadata?.creationTime,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime
                };

                fetch('https://a11-career-center-server.vercel.app/googleUser', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(googleUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success',
                                text: 'Welcome, Login success!',
                                icon: 'success',
                                confirmButtonText: 'Done'
                            })
                        }
                    })
                    .catch(error => {
                        setError(error.message);
                    });
            })
            .catch(error => {
                setError(error.message)
            });
    };

    const handleLoginUser = e => {
        e.preventDefault();

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                setError("")
                navigate(location?.state ? location.state : "/")

                const user = {
                    email,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime
                }

                fetch('https://a11-career-center-server.vercel.app/user', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("Data from server:", data);
                        if (data.acknowledged === true) {
                            Swal.fire({
                                title: 'Success',
                                text: 'Welcome, Login success!',
                                icon: 'success',
                                confirmButtonText: 'Done'
                            })
                            setEmail('');
                            setPassword('');
                        } else {
                            setError("Email or password doesn't match.")
                        }
                    })
                    .catch(error => {
                        console.error(error)
                        setError("An error occurred. Please try again");
                    });

            })
            .catch(error => {
                console.error("Authentication error:", error)
                setError("Email or password doesn't match.")
            });
    };


    return (
        <div className="text-center md:min-h-screen">
            <h1 className="text-4xl font-bold">Please Login!</h1>

            <div className="rounded-xl flex flex-col p-4 gap-5 md:flex-row-reverse">

                <div className="w-full p-3 md:w-1/2">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginUser} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <p className="text-red-600">{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary normal-case">Login</button>
                            </div>
                        </form>
                        <p className="text-center">Do not have an account? <Link to='/register' className="font-bold">Register</Link></p>
                        <div className="py-5 mx-auto">
                            <button onClick={handleGoogleLogin} className="btn btn-outline normal-case"> <FaGoogle className="text-blue-600" />Login with <span className="text-xl font-bold text-pink-600">Google</span> </button>
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