import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="text-center md:min-h-screen">
            <h1 className="text-4xl font-bold">Registration Form</h1>

            <div className="rounded-xl flex flex-col p-4 gap-5 md:flex-row-reverse">

                <div className="w-full p-3 md:w-1/2">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    // value={name}
                                    // onChange={() => setName(e.target.value)}
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
                                    // value={photo}
                                    // onChange={() => setName(e.target.value)}
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
                                <button className="btn btn-secondary normal-case">Register</button>
                            </div>
                        </form>
                        <p className="text-center pb-10">Already have an account? <Link to='/login' className="font-bold">Login</Link></p>
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