import React from 'react';
import ReactDOM from 'react-dom/client';
import Shop from './Shop';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';
import Item4 from './Item4';
import AllCtas from './AllCtas';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<h1> please select a componnent</h1>} />

          <Route path='/shop' element={<Shop />}>
            <Route path='/shop/item1' element={<Item1 />} />
            <Route path="/shop/item2" element={<Item2 />} />
            <Route path='/shop/item3' element={<Item3 />} />
            <Route path='/shop/item4' element={<Item4 />} />
            <Route path='/shop/allctas/:id' element={<AllCtas />} />
            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode >
);

