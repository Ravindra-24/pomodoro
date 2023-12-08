import React from "react";

const Avatar = ({ user }) => {
  return (
    <>
        <div className="flex items-center">
          <img className="w-8 h-8 rounded-full" src={user?.photo} alt="avatar" />
        </div>
    </>
  );
};

export default Avatar;

export const AvatarLetter = ({user}) => {
    return(
        <span className="bg-purple-500 rounded-full h-8 w-8 flex items-center justify-center">
            <span className="text-white font-medium">{user.initials}</span>
          </span>
    )
}