import SearchBar from './SearchBar';
import MovieRecomendation from './MovieRecomendation';
import { Netflix_background } from '../utils/constants';

const Search = () => {
  return (
    <div className='pt-[50%] bg-black md:pt-28' style={{backgroundImage: `url(${Netflix_background})` , backgroundPosition: 'center', minWidth: '100vh' ,width: '100vw' ,  backgroundSize: 'cover', backgroundPosition: 'center',  backgroundAttachment: 'fixed'}}>
      <SearchBar/>
      <MovieRecomendation/>
    </div>
  );
}

export default Search;
