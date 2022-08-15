import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const ProfileCard = () => {
  return (
    <div className="profile-card bg-gradient-to-r from-rose-700 to-pink-600 w-full h-full">
      <div className="profile-header flex justify-between pt-8 items-center px-4">
        <h3 className="font-Nunito text-white font-bold">My Profile</h3>
        <div className="rounded-full bg-white w-10 h-10 justify-center items-center flex">
          <FaRegEdit className="text-rose-500 w-10" />
        </div>
      </div>
      <div className="profile-body flex flex-col items-center justify-center mt-8">
        <img
          src="https://img.freepik.com/premium-vector/beard-man-avatar_96853-399.jpg?w=826"
          alt="Profile Picture"
          className="w-20 rounded-full"
        />
        <p className="text-2xl font-Nunito font-semibold text-white dark:text-white mt-5">
          MD. Reyad Hasan
        </p>
        <span className="text-base text-gray-100 font-thin mt-2">
          Premium Member
        </span>

        <IoIosArrowDown className="text-white mt-2" />
      </div>
    </div>
  );
};

export default ProfileCard;
