import React, { useState} from "react";
// import gameimage1 from '../public/image/gameimage1.png';

function GameCard() {

//   const [ watchlist, setWatchlist ] = useState(false)

  const gamesarray ={
    "games": [
      {
        "id": 1,
        "title": "Gran Turismo 7",
        "genre": "Sim Racing",
        "release_date": "March, 04, 2022",
        "summary": "Gran Turismo 7 is a 2022 sim racing video game developed by Polyphony Digital and published by Sony Interactive Entertainment. The game is the eighth mainline installment in the Gran Turismo series.",
        "image": "https://upload.wikimedia.org/wikipedia/en/1/14/Gran_Turismo_7_cover_art.jpg",
        "platform": "PS5",
        "price": 69.99
      }
    ]}

//   function handleClick() {
//     setStock(stock => !stock)
//   }


  return (
    <ul className="card">
      <img src={gamesarray.games[0].image} alt={gamesarray.games[0].title} />
      <h4>{gamesarray.games[0].title}</h4>
      <p>{gamesarray.games[0].genre}</p>
      <p>{gamesarray.games[0].release_date}</p>
      <p>{gamesarray.games[0].platform}</p>
      <p>Price: {gamesarray.games[0].price}</p>
        {/* <button className={stock ? "primary" : ""} onClick={handleClick}>{stock ? "In stock" : "Out of Stock"}</button> */}
    </ul>
  );
}

export default GameCard;