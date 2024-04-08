import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import { auth } from "../utils/firebase"; // Import 'auth' from firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth"; // Import 'createUserWithEmailAndPassword' from firebase.auth
import { Netflix_background } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const disptach = useDispatch();

  const [signInToggel, setsignInToggel] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const pass = useRef(null);
  const name = useRef(null);


  const handleFormValidation = () => {
    // validate our form
    const message = checkValidation(email.current.value, pass.current.value);
    seterrorMessage(message);

    if (!signInToggel) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth, // Pass 'auth' as the first argument
        email.current.value,
        pass.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e",
          })
            .then(() => {
              // Profile updated!
              
              const { uid, email, displayName, photoURL } = user;

              disptach(addUser({ uid: uid, email: email, displayName: displayName ,photoURL : photoURL }));
              
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorMessage);
          // ..
        });
    } else {
      // login
      signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorMessage);
        });
    }
  };

  const toggleSignUpForm = () => {
    setsignInToggel(!signInToggel);
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0">
        <img className="w-full h-full" src={Netflix_background} alt="netflix-signin-backgraound"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 rounded-md bg-opacity-80"
      >
        <h1 className="font-bold text-3xl text-white py-4">
          {signInToggel ? "Sign In" : "Sign Up"}{" "}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email or phone"
          className="p-2 my-2 w-full bg-transparent border border-white-0 text-white"
        />
        {
          // if it is not a sign in form then only show this full name text box
          !signInToggel && (
            <input
              ref = {name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 w-full bg-transparent border border-white-0 text-white"
            />
          )
        }
        <input
          ref={pass}
          type="password"
          placeholder="password"
          className="p-2 my-2 w-full bg-transparent border border-white-0 text-white"
        />
        <button
          className="p-4 my-4 bg-red-600 text-white w-full"
          onClick={handleFormValidation}
        >
          {signInToggel ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500 text-sm text-center py-2">{errorMessage}</p>
        <p
          className="text-white text-center cursor-pointer m-2"
          onClick={toggleSignUpForm}
        >
          {signInToggel
            ? "New to Netflix ? Sign Up Now"
            : "Already a registered user Login Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;
