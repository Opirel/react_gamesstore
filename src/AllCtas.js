import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const AllCtas = () => {
  let params = useParams();
  const MY_SERVER = 'http://localhost:4000/games'


  const [games, setgames]= useState([])
  const [title, settitle]= useState('')
  const [cat, setcat] = useState(0)



  useEffect(() => {
    axios.get(MY_SERVER +"?cat="+ params.id).then(res => setgames (res.data))
  }, [params.id])

  const add=()=> {axios.post(MY_SERVER, {title,cat}).then(res => console.log(res))}
// display
  return (
    <div>  
      {params.id}
      <h2> items count: {games.length}</h2>
      
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {games.map((game, ind) =>
          <div key={ind} className='col'><div className='card'>{game.title}, {game.id}
            <img className='card-img-top' alt='' src={`https://picsum.photos/200/10${ind}`}></img>
            <div className='card-body'>
              <h5 className='card-title'>game title </h5>
              <p className='card-text'>this is the desc </p>
              <button className='btn btn-success'>Buy</button>
            </div>
          </div>
          </div>)}
      </div>

         {/* add */}
      Add new game:
      title <input onChange={(e)=>settitle(e.target.value)}></input>
      cat <input onChange={(e)=>setcat(e.target.value)}></input>
      <button onClick={()=>add()}>add</button>
    </div>

  )


}
export default AllCtas