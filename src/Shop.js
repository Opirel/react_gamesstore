import { Outlet, Link } from "react-router-dom";

import React from 'react'

const shop = () => {
  return (
    <div>shop
       {/* <Link to='/shop/item1'>item1</Link>{" "}
       <Link to='/shop/item2'>item2</Link>{" "}
        <Link to='/shop/item3'>item3</Link>{" "}
        <Link to='/shop/item4'>item4</Link>{" "} */}
        <Link to='/shop/allctas/1'>assassin's creed</Link>{" "}
        <Link to='/shop/allctas/2'>horizon</Link>{" "}
        <Link to='/shop/allctas/3'>other</Link>{" "}
        <Link to='/shop/allctas/4'>call of duty</Link>{" "}
        
        <Outlet></Outlet>
    </div>
  )
}

export default shop