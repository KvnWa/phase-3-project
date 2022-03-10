import React, { useState } from 'react';
import { Link, Image } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

function GameCard({ game, isWatchlist, handleButtonClick }) {
  const { id, title, releaseDate, image, platform, price } = game;

  const handleAddClick = (e) => {
    fetch('http://localhost:3001/watchlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        game_id: game.id,
      }),
    }).then((r) => r.json());
    e.stopPropagation();

    handleButtonClick(game.id);
  };

  const handleRemoveClick = () => {
    fetch(`http://localhost:3001/watchlist/${game.id}`, {
      method: 'DELETE',
    }).then((r) => r.json());

    handleButtonClick(game.id);
  };

  function handleImageClick() {
    <Link to={`/games/${id}`} />
    console.log("tgadasd")
  }

  return (
    <div >

      <div className="cards">
        <figure className="card">
          <div>
            <Link style={{ textDecoration: 'none', color: "black" }} to={`/games/${id}`}>
              <img src={image} alt={title} onClick={handleImageClick} />
            </Link>
            <figcaption className="title1">{title}</figcaption>
            <p>{releaseDate}</p>
            <p>{platform}</p>
            <p>Price: {price}</p>
            {/* <Button variant="outlined">View details</Button> */}
            <br></br>
            <br></br>
          </div>
          <div>
            {isWatchlist ? (
            <figcaption>  <Button variant="contained" className='btn1'style={{width: '.5px', backgroundColor: "#DC143C" }} onClick={handleRemoveClick}><RemoveOutlinedIcon /></Button> </figcaption>
            ) : (
              <figcaption> <Button variant="contained" className='btn1' onClick={handleAddClick}><AddCircleOutlineRoundedIcon /></Button></figcaption>
            )}
          </div>
        </figure>
      </div>
    </div >
  );
}

export default GameCard;