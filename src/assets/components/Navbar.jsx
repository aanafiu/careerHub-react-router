import {  NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full">

            <div className="flex justify-between items-center py-5 bg-base-100">
                <div>
                <a className="text-4xl font-extrabold">CareerHub</a>
                </div>

                <div className="flex gap-4 justify-center items-center text-xl font-bold">
                    <NavLink to = "/">Statistics</NavLink>
                    <NavLink to = "/jobs">Applied Jobs</NavLink>
                    <NavLink to = "/footer">Blog</NavLink>
                </div>

            
                <button className="text-white font-bold text-lg rounded-xl bg-all py-5 px-8 btn btn-ghost">
                    Star Applying
                </button>
            </div>

        </div>
    );
};

export default Navbar;