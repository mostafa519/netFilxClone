import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/notfound/notfound';
import Userprofile from './pages/userProfiles/users';
import Home from './pages/Home/Home';
import Mainpagebfl from './pages/mainpagebeforeLogin/mainpgbfLogin';
import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';
import BrowsePage from './pages/BrowsePage/BrowsePage';
import MyList from './pages/mylist/mylist';
import NewPopular from './pages/new&popular/new&popular';
import Movies from './pages/movies/movies';
import TvShow from './pages/tvShow/tvShow';  
import React, { useEffect, useState } from 'react'; 
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './AxiosConfig/fireBase';

function App() { 
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <React.StrictMode> 
      <Router>
        <Routes> 
          {!user ? (
            <>
              <Route path="/" element={<Mainpagebfl />} />
              <Route path="/mainpage" element={<Mainpagebfl />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </>
          ) : (
            <>
              <Route path="/browse" element={<BrowsePage />} />
              <Route path="/mylist" element={<MyList />} />
              <Route path="/Newpop" element={<NewPopular />} />
              <Route path="/Movies" element={<Movies />} />
              <Route path="/tvShow" element={<TvShow />} />
              <Route path="/home" element={<Home />} />
              <Route path="/userprofile" element={<Userprofile />} />
              <Route path="*" element={<NotFound />} />
            </>
          )}
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
