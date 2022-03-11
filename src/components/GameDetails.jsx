import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GameDetails() {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:3001/games/${id}`)
      .then((r) => r.json())
      .then((game) => setGame(game));
  }, [id]);

  if (!game) return <h2>Loading game data...</h2>;

  const { title, genre, release_date, summary, image, platform, price } = game;

  return (
    <div id="container1">
      <div class="product-details">
        <h1>{title}</h1>
        <p>{platform}</p>
        <p class="information">Release Date: {release_date}</p>
        <p>{genre}</p>
        <div class="control">
          <button class="btn">
            <span class="price">${price}</span>
            <span class="shopping-cart"><i aria-hidden="true"></i></span>
            <span class="buy">Preorder</span>
          </button>
        </div>
      </div>
      <div class="product-image">
        <img src={image} alt="" />
        <div class="info">
          <h2> {summary}</h2>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;