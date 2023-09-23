import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Kfc from './pages/Kfc';
import ViewAll from './pages/ViewAll';
import RedirectPage from './pages/RedirectPage';
import AllDeals from './pages/AllDeals';
import AllExplore from './pages/AllExplore';
import { useEffect } from 'react';
import axios from 'axios';
import { API } from './data/config';
import { useDispatch } from 'react-redux';
import { mealsAction } from './store/meals';
import Empty from './pages/Empty';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(API.EXPLORE_MENU).then((res) => { dispatch(mealsAction.replaceExploreData(res.data)) })
    axios.get(API.TOP_DEALS).then((res) => { dispatch(mealsAction.replaceDealsData(res.data)) })
  }, [])

  return (
    <div className='w-[1280px] m-auto'>
      <Routes>
        <Route path="/" element={<RedirectPage />}></Route>
        <Route path="/KFC" element={<Kfc />}>
          <Route path="Home" element={<Home />}></Route>
          <Route path="ViewAll" element={<ViewAll />}>
            <Route path="Deals" element={<AllDeals />}></Route>
            <Route path="Explore-menu" element={<AllExplore />}></Route>
            <Route path="Empty/:id" element={<Empty />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
