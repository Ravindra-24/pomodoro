import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserProfile } from "../../redux/action/profile";

const GithubProfile = ({ setProgress }) => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUserProfile(inputValue, setData, setProgress));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="m-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="border border-gray-700 bg-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter Github username"
        />
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md mt-2"
        >
          Submit
        </button>
      </form>
      {data && (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 border-slate-900 ">
          <div className="flex justify-center w-full">
            <img
              className="rounded-md m-5"
              src={data.avatar_url}
              alt="Avatar"
              width={250}
              height={250}
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-white text-xl mb-2">
              {" "}
              {data.name}
            </div>
            <p className="text-white text-base">
              Username: {data.login}
              <br />
              No. of public repos: {data.public_repos}
              <br />
              No. of public gists: {data.public_gists}
              <br />
              Profile created at:{" "}
              {new Date(data.created_at).toLocaleString("en-CA", "en-CA")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GithubProfile;
