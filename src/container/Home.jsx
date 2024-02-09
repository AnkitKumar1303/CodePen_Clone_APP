import React, { useState } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { MdHome } from "react-icons/md"; // Import MdHome icon
import { FaSearchengin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Logo } from "../assets";
import { Link, Route, Routes } from "react-router-dom";
import { Projects, SignUp } from "../container";
import { useSelector } from "react-redux";
import { UserProfileDetails } from "../components";

const Home = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);
  const user = useSelector((state) => state.user?.user);
  return (
    <>
      <div
        className={`w-2 ${
          isSideMenu ? "w-2" : "flex-[.2] xl:flex-[.2]"
        } min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out`}
      >
        {/* Anchor Section */}

        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSideMenu(!isSideMenu)}
          className="w-8 h-8 bg-secondary rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer"
        >
          <HiChevronDoubleLeft className="text-white text-xl"></HiChevronDoubleLeft>
        </motion.div>

        {/* Logo Section And all */}
        <div className="overflow-hidden w-full flex flex-col gap-4">
          {/* logo */}
          <Link to={"/home"}>
            <img
              src={Logo}
              alt="Logo"
              className="obect-contain w-58 h-auto"
            />
          </Link>
          {/* start coding */}
          <Link to={"/newProject"}>
            <div className="px-6 py-3 flex items-center justify-center rounded-xl border-gray-400 cursor-pointer group-hover:border-gray-200 ">
              <p className="bg-secondary hover:bg-red-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Start Coding
              </p>
            </div>
          </Link>
          {user && (
            <Link to={"/home/projects"} className="text-primaryText text-xl flex items-center justify-center">
              <MdHome className="text-lg text-primaryText " /> {/* Home icon */}
              <p className="text-lg text-primaryText">Home</p>
            </Link>
          )}
        </div>
      </div>
      <div className="flex-1 min-h-screen max-h-screen overflow-scroll h-full flex flex-col items-start justify-start px-4 md:px-12 py-4 md:py-12">
        {/* Top Section */}
        <div className="w-full flex items-center justify-between gap-3">
          <div className="bg-secondary w-full px-4 py-3 rounded-md flex items-center justify-center gap-3">
            <FaSearchengin className="text-2xl text-primaryText" />
            <input
              type="text"
              className="flex-1 px-4 py-1 text-xl bg-transparent outline-none border-none text-primaryText placeholder:text-green-600"
              placeholder="Search here..."
            />
          </div>
          {/* profile section */}
          {!user && (
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center gap-3"
            >
              <Link
                to={"/home/auth"}
                className="bg-emerald-500 px-3 py-2 rounded-md text-white text-lg cursor-pointer hover:bg-emerald-700"
              >
                SignUp
              </Link>
            </motion.div>
          )}
          {user && <UserProfileDetails />}
        </div>
        <div className="flex items-center justify-center">
          <Routes>
            <Route path="/*" element={<Projects />} />
            <Route path="/auth" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
