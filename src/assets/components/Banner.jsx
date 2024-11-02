import userPNG from "../images/user.png"
const Banner = () => {
    return (
        <div className="h-[80vh] my-10 flex items-center justify-between ">
            <div className="flex flex-col gap-10 justify-center items-start">

                <h1 className="text-7xl font-extrabold">One Step<br />Closer To Your<br /><span className="bg-all bg-clip-text text-transparent ">Dream Job</span></h1>
                <p className="text-allP">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                <button className="text-white font-bold text-lg rounded-xl bg-all py-5 px-8 btn btn-ghost">
                   Get Start
                </button>

            </div>

            <div className="w-full h-full">
                <img src={userPNG} alt="" className="w-full h-full" />
            </div>

        </div>
    );
};

export default Banner;