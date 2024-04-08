import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { multilanguage } from "../utils/multilanguage";
import { API_options } from "../utils/constants";
import { addSearchMovies } from "../utils/SearchSlice";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.miltilanguage.language);
  const searchText = useRef(null);

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_options
    );

    const jsonData = await data.json();
    return jsonData.results;
  };

  const handleSearch = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const tmdbmoviesResult = gptMovies.map((movie) => searchMovie(movie));
    const SearchmovieData = await Promise.all(tmdbmoviesResult);

    dispatch(
      addSearchMovies({
        moviename: gptMovies,
        movieResults: SearchmovieData,
      })
    );
  };

  return (
    <div className="flex justify-center">
      <form
        className="w-full m-2 md:w-3/4 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={multilanguage[language].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearch}
        >
          {multilanguage[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
