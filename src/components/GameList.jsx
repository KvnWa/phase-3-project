import React, { useState, useEffect } from 'react';
import '../App.css';
import GameCard from './GameCard';
function GameList() {
  const [games, setGames] = useState([]);
  const fetchData = () => {
    fetch('http://localhost:3001/games')
      .then((r) => r.json())
      .then((data) => setGames(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleButtonClick = () => {
    fetchData();
  };
  return (
    <div className="container">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          isWatchlist={false}
          handleButtonClick={handleButtonClick}
        />
      ))}
    </div>
  );
}
export default GameList;







