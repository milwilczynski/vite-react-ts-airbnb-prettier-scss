import React, { ReactHTMLElement, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import styles from '~/app.module.scss';

function App() {
  const [count, setCount] = useState(0);
  const [pokemon, setPokemon] = useState<unknown>();

  useEffect(() => {
    void (async () => {
      const poke = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      if (poke.status === 200) {
        const body = (await poke.json()) as unknown;
        setPokemon(body);
      }
    })();
  }, []);

  return (
    <div className={styles.react}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Typescript + Airbnb + Prettier</h1>
      <div className={styles.card}>
        <div>
          {(() => {
            const dittos: Array<ReactHTMLElement<HTMLImageElement>> = [];
            for (let i = 0; i < count; i += 1) {
              dittos.push(
                (
                  <img
                    key={i}
                    src={pokemon && pokemon.sprites.front_shiny}
                    alt="ditto"
                  />
                ) as ReactHTMLElement<HTMLImageElement>,
              );
            }
            return dittos;
          })()}
        </div>
        <button
          onClick={() => setCount((counts: number) => counts + 1)}
          type="button"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
