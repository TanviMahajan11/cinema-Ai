# Netflix-GPT

- Create-react-app
- Configured Tailwind CSS
- Header CSS
    - Logo 
- Login Form
- Sign Up Form  - as soon as we signed up we should take tp browse page 
- Form validation
- useRef Hook
- Authentication 
- Deploy on Firebase 
- unsubssribe to the onAuthStateChnage 
- Maintaining a constants file 
- Using Movies API ( TMDB has Api's ) Movie database latestest movies 
- Register to TMDB and resgister app there 
- Browse Page - 
    - Calling NowPlayingMovies Api ( fetching the data )
    - Adding now playing movie data to redux store
    - We will do all the above steps using custom Hook (Fetching data from TMDB Api and update store)

- plan to structure of browse page 
    -- Divided in two parts 
        - First part shows a small part of movies playing ( movie background , movie title)
        - Second part is the movie recomendation ( movie list )

    MainContainer 
        - VideoBackground 
        - Movie Title
    SecondaryContainer 
        - MovieList * n
            - Card * n

 - GPT Feature ( GPT Movie Recomendation Search page) suppose you tyoe funny gpt 
    Intergrating GPT Api's (Open AI Ai)

    Open AI key -> 
    npm OpenAI -> This library provides convenient access to the OpenAI REST API from TypeScript or JavaScript.


- Building Multilanguage Pages 


# Features 
- Login/Sign Up screen 
    - Sign In/ Sign Up form 
    - Redirect to Browse Page 
- Browse (Logged IN user ( after authentication))
    - Header 
    - Main movie 
        - Trailer in background 
        - Title and description
        - Movie suggesion   
            MovieList * N ( vertically scrollable )
- NetflixGpt 
    - Search Bar 
    - Movie Suggession

