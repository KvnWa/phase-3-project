import React, { useState} from "react";

function GameCard({name, image, price, id}) {

  const [ stock, setStock ] = useState(true)

  const gamesarray ={
    "games": [
      {
        "id": 1,
        "title": "Gran Turismo 7",
        "genre": "Sim Racing",
        "release_date": "March, 04, 2022",
        "summary": "Gran Turismo 7 is a 2022 sim racing video game developed by Polyphony Digital and published by Sony Interactive Entertainment. The game is the eighth mainline installment in the Gran Turismo series.",
        "image": "../image/gameimage1.png",
        "platform": "PS5",
        "price": 69.99
      }
    ]}

  function handleClick() {
    setStock(stock => !stock)
  }



  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
        <button className={stock ? "primary" : ""} onClick={handleClick}>{stock ? "In stock" : "Out of Stock"}</button>
    </li>
  );
}

export default PlantCard;