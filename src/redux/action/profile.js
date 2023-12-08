import axios from "axios";
import toast from "react-hot-toast";

// API function to fetch user profile from GitHub
export const fetchUserProfile =
  (username, setData, setProgress) => async (dispatch) => {
    try {
      setProgress(10);
      const response = await axios.get(
        `${process.env.REACT_APP_GITHUB_URI}/${username}`
      );
      setProgress(50);
      setData(response.data);
      toast.success("User found");
      setProgress(90);
    } catch (error) {
        toast.error("User not found");
    } finally {
      setProgress(100);
    }
  };
