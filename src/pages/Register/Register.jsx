import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateUser = async (e) => {
        e.preventDefault();
        console.log(name, photo, email, password);

        try {
            if (!/^(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/.test(password)) {
                setError("Minimum 6 characters, at least one uppercase & at least one special character");
            } else {
                setError('');

                if (email && password) {
                    const result = await createUser(email, password);
                    console.log(result.user);

                    const user = {
                        email,
                        name,
                        photo,
                        userCreated: result.user?.metadata?.creationTime,
                    };

                    const res = await axios.post('http://localhost:5000/user', user);

                    const data = res.data;

                    if (data.acknowledged === true) {

                        Swal.fire({
                            title: 'Success',
                            text: 'You successfully registered',
                            icon: 'success',
                            confirmButtonText: 'Done',
                        });

                        navigate('/');
                        setName('');
                        setPhoto('');
                        setEmail('');
                        setPassword('');
                    } else {
                        setError("Registration failed. Please try again.");
                    }
                    if (data.insertedId && result.user && result.user.currentUser) {
                        await result.user.currentUser.updateProfile({
                            displayName: name,
                            photoURL: photo,
                        });

                    }
                }
            }
        } catch (error) {
            console.error("Error:", error);
            setError(error.message);
        }
    };


    return (
        <div className="text-center md:min-h-screen">
            <h1 className="text-4xl font-bold">Registration Form</h1>

            <div className="rounded-xl flex flex-col p-2 gap-5 md:flex-row-reverse">

                <div className="w-full md:w-1/2">

                    <div className="flex-shrink-0 w-full rounded-2xl max-w-lg shadow-xl bg-base-100">
                        <form onSubmit={handleCreateUser} className="p-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="your full name"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    value={photo}
                                    onChange={(e) => setPhoto(e.target.value)}
                                    placeholder="your photo"
                                    className="input input-bordered"
                                    required />
                            </div>
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
                            <div className="form-control mt-3">
                                <button className="btn btn-secondary normal-case">Register</button>
                            </div>
                        </form>
                        <p className="text-center pb-5">Already have an account? <Link to='/login' className="font-bold">Login</Link></p>
                    </div>

                </div>
                <div className="w-full p-3 md:w-5/12 ">
                    <img className="rounded-xl" src="https://i.ibb.co/KLZx25r/4325363.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;