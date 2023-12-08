import toast from "react-hot-toast";
import { auth } from "../api/index";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const signupUser =
  (authData, navigate, setProgress) => async (dispatch) => {
    try {
      setProgress(30);
      await createUserWithEmailAndPassword(
        auth,
        authData.email,
        authData.password
      );
      await signInWithEmailAndPassword(auth, authData.email, authData.password);
      await updateProfile(auth.currentUser, {
        displayName: authData.userName,
      });
      dispatch({
        type: "AUTH",
        payload: {
          uid: auth.currentUser.uid,
          userName: auth.currentUser.displayName,
          initials: auth.currentUser?.displayName?.charAt(0),
          email: auth.currentUser.email,
          photo: auth.currentUser?.photoURL,
          loaded: true,
        },
      })
      setProgress(70);
      toast.success("User created successfully");
      // navigate("/");
      setProgress(100);
    } catch (error) {
      toast.error(error);
      setProgress(100);
    } finally {
      setProgress(100);
    }
  };

export const loginUser =
  (authData, navigate, setProgress) => async (dispatch) => {
    try {
      setProgress(30);
      await signInWithEmailAndPassword(auth, authData.email, authData.password)
      .then((user) => {
        // dispatch({
        //   type: "AUTH",
        //   payload: {
        //     uid: user.uid,
        //     userName: user.displayName,
        //     initials: user?.displayName?.charAt(0),
        //     email: user.email,
        //     photo: user?.photoURL,
        //     loaded: true,
        //   },
        // });
        toast.success("User logged in successfully")
        navigate('/')
      })
      .catch((error) => {
        toast.error(error.message);
      });
      setProgress(70);
      setProgress(100);
      
      // navigate("/");
    } catch (error) {
      toast.error(error);
      console.log(error);
      setProgress(100);
    } finally {
      setProgress(100);
    }
  };

export const forgotPassword =
  (email, navigate, setProgress) => async (dispatch) => {
    try {
      setProgress(30);
      toast.success("Functionality not yet Created");
      navigate("/login");
      setProgress(100);
    } catch (error) {
      toast.error(error);
    } finally {
      setProgress(100);
    }
  };

export const resetPassword =
  (token, password, navigate, setProgress) => async (dispatch) => {
    try {
      setProgress(30);
      toast.success("Functionality not yet Created");
      setProgress(70);
      navigate("/login");
      setProgress(100);
    } catch (error) {
      toast.error(error);
    } finally {
      setProgress(100);
    }
  };

export const ValidateUser = () => async (dispatch) => {
  try {
    auth.onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        dispatch({
          type: "AUTH",
          payload: {
            uid: user.uid,
            userName: user.displayName,
            initials: user?.displayName?.charAt(0),
            email: user.email,
            photo: user?.photoURL,
            loaded: true,
          },
        });
      } else {
        dispatch({ type: "AUTH", payload: {
          uid: null,
          userName: null,
          initials: null,
          email: null,
          photo: null,
          loaded: true,
        } });

      }
    });
  } catch (error) {
    toast.error(error);
    console.log(error);
  }
};
