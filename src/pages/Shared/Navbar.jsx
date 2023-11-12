import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {

    const { user, userLogOut } = useContext(AuthContext);

    const handleUserSignOut = () => {
        userLogOut()
            .then()
            .catch()
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/addJobs'>Add Jobs</Link></li>
        <li><Link to='/postedJob'>My Posted Jobs</Link></li>
        <li><Link to='/myBids'>My Bids</Link></li>
        <li><Link to='/bidRequest'>Bid Requests</Link></li>
        <li><Link to='/register'>Register</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-200 rounded-xl mb-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className="md:flex items-center"><img className="rounded-xl" src={logo} alt="" />
                    <header className="text-3xl ml-2 font-bold"><span className="text-pink-600">Career</span> Center</header>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleUserSignOut}>
                                <p className="text-red-600"> <span className="font-bold">Logged In:</span> {user?.email}</p>
                                <span className="btn btn-sm btn-outline">Logout</span>
                            </button>
                            : <Link to='/login'>
                                <button className="btn btn-sm btn-outline"> Login </button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;