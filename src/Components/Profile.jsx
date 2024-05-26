import React from "react";
import UserDetails from "./userdetails";

const Profile = ({ gladusers }) => {
  return (
    <div className=" font-serif bg-red-950 rounded-xl max-w-3xl w-full h-2/5 p-10 grid items-center justify-center gap-2 text-amber-300 m-auto my-10 ">
      {" "}
      <h2 className="flex items-center justify-center text-2xl" > "FIVE NIGERIANS MAKING WAVE" </h2>{" "}
      <div>
        <div className=" grid grid-cols-5 items-center justify-center pb-2 pt-2 text-white gap-5 ">
          {gladusers.map((user) =>(
            <UserDetails user={user} key={user.name} />
          )) }
        </div>
      </div>{" "}
    </div>
  );
};

export default Profile;
