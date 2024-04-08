import React, { useRef } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, Sign_In_Logo } from "../utils/constants";
import { toggleSearchView } from "../utils/SearchSlice";
import { useSelector } from "react-redux";
import { Language_support } from "../utils/multilanguage";
import { changeLangauge } from "../utils/LangSlice";

const Header = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const toggleSearch = useSelector((store) => store.search.toggleSearch);

  const selectedLang = useRef();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // navigate to error page
      });
  };

  // only called once
  useEffect(() => {
    // checking auth every time the page loads
    // whenever auth status changes this keeps a track of it
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;

        disptach(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        disptach(removeUser());
        navigate("/");
      }
    });
    // unsubsribe the event here ( unsubscribe when compoenent unmounts )
    // this will be called
    return () => unsubscribe();
  }, []);

  const handleSearch = () => {
    disptach(toggleSearchView());
  };

  const handleLanguage = () => {
    const selectedLanguage = selectedLang.current.value;
    console.log(selectedLanguage);
    disptach(changeLangauge(selectedLanguage));
  };

  return (
<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col justify-between md:flex-row">
      <img
        className="h-20 w-44"
        src="https://static1.squarespace.com/static/6572a08003b23a432466fcc7/t/65b0440b13edf37d88ba4ffa/1706050571604/NEO+logo+magazine+demo+font.png?format=1500w"
        alt="logo"
        style={{ objectFit: "cover", objectPosition: "right 30%" }}
      ></img>
      {user && (
        <div className="p-3 flex">
          {toggleSearch && (
            <select
              onChange={handleLanguage}
              className="p-3 mr-3 text-black text-md border border-red-100 rounded-md"
              ref={selectedLang}
            >
              {Language_support.map((langauge) => (
                <option key={langauge.id} value={langauge.id}>
                  {langauge.value}
                </option>
              ))}
            </select>
          )}

          <button
            className="text-white text-xl p-3 border border-red-100 mr-4 rounded-md"
            onClick={handleSearch}
          >
            {toggleSearch ? "Back to Home Page " : "Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12"
            src={user?.photoURL}
            alt="userLogo"
          />
          <button onClick={handleSignout} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

//w-44 mx-auto md:mx-0
