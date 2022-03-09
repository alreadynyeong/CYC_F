import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import Home from './component/home';
import Closet from './component/closet';
import ClosetList from './component/closetList';
import Cody from './component/cody';
import CodyList from './component/codyList';
import Color from './component/color';
import ColorList from './component/colorList';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='closet' element={<Closet />} />
          <Route path='closet/list' element={<ClosetList />} />
          <Route path='color' element={<Color />} />
          <Route path='color/list' element={<ColorList />} />
          <Route path='cody' element={<Cody />} />
          <Route path='cody/list' element={<CodyList />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
