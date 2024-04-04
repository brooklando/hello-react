import './App.css';
import imgkey from './images/key.jpg'

/**define game and properties**/
const game = {
  title: 'Red Dead Redemption 2',
  author: 'Rockstar Games',
  published: '2018',
  image: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg',
  width: '264',
  height: '378'
};

/**declare array of games**/
const gamelist = [
  { id: 1, title: 'Last of Us Part 2', theme: 'action', onPC: false, onPS: true },
  { id: 2, title: 'Persona 5', theme: 'rpg', onPC: true, onPS: true },
  { id: 3, title: 'Skyrim', theme: 'adventure', onPC: true, onPS: true},
  { id: 4, title: 'Rimworld', theme: 'rpg', onPC: true, onPS: false },
  { id: 5, title: 'Uncharted 3', theme: 'action', onPC: false, onPS: true },
  { id: 6, title: 'Bloodborne', theme: 'rpg', onPC: false, onPS: true },
  { id: 7, title: 'Legend of Zelda BOTW', theme: 'rpg', onPC: false, onPS: false },
  { id: 8, title: 'Elden Ring', theme: 'rpg', onPC: true, onPS: true },
  { id: 9, title: 'League of Legends', theme: 'action', onPC: true, onPS: false },
  { id: 10, title: 'Omori', theme: 'action', onPC: true, onPS: true },
];

/**displaying top pick game component**/
function GameDisplay() {
  return (
    <div>
      <h2>{game.title} ({game.published})</h2>
      <p>{game.author}</p>
      {game.image &&
      <img
        className="gameCover"
        src={game.image}
        alt={game.title + ' cover'}
        style={{
          width: game.width,
          height: game.height
        }}
      />
      }
    </div>
  );
}

/**gamerack component for determining if on ps or pc**/
function GameRack() {
  const listGames = gamelist.map(videogame =>
    <li
      key={videogame.id}
      style={{
        textDecoration: videogame.onPC ? 'underline' : 'none',
        color: videogame.onPS ? 'blue' : 'white'
      }}
    >
      {videogame.title}
    </li>
  );
  return (
    <ul>{listGames}</ul>
  )
}

/**app function**/
function App() {
  return (
    <div>
      <h1>Random Games</h1>
      <img src={imgkey} alt="Blue = PS Underline = PC" height={150} width={200}></img>
      <GameRack/>
      <h1>My Pick</h1>
      <GameDisplay/>
    </div>
  );
}

// The export default keywords specifiy the main component in the file
export default App;