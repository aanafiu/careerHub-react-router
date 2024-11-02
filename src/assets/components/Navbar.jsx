import { Link, NavLink } from "react-router-dom";

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

            
                <div className="">
                    <a className="btn btn-ghost" style={{backgroundColor:"linear-gradient(180deg, rgba(126,144,254,1) 0%, rgba(152,115,255,1) 100%)"}}>Star Applying</a>
                </div>
            </div>


            
        </div>
    );
};

export default Navbar;