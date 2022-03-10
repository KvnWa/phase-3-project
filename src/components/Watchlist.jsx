import React, { useState, useEffect } from 'react';
import '../App.css';
import GameCard from './GameCard';
const Watchlist = () => {
  const [games, setGames] = useState([]);
  const fetchData = () => {
    fetch('http://localhost:3001/watchlist')
      .then((r) => r.json())
      .then((data) => setGames(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleButtonClick = (gameId) => {
    fetchData();
  };
  return (
    <div className="container2">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          isWatchlist={true}
          handleButtonClick={handleButtonClick}
        />
      ))}
    </div>
  );
};
export default Watchlist;