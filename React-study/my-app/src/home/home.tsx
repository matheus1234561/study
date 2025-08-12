
import { useState } from "react";
import { usePokemon } from "../hooks/usePokemon";
import "./home.css";

export const Home = () => {
  const [input, setInput] = useState("");
  const [term, setTerm] = useState<string | number | undefined>(undefined);

  const {
    data: pokemon,
    isFetching,
    error,
  } = usePokemon(term, { enabled: term !== undefined });

  const onClick = () => {
    const v = input.trim();
    setTerm(v === "" ? 1 : isNaN(Number(v)) ? v.toLowerCase() : Number(v));
  };

  return (
    <div className="page">
      Welcome to the Pokémon Search App
      <div className="page-content">
        <div className="page-search">
          <input
            className="input-button"
            placeholder="Search the Pokémon"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="button-to-search" onClick={onClick}>
            Search
          </button>
        </div>

        <div className="page-image">
          {isFetching && <p>Carregando…</p>}
          {pokemon?.props.artwork && (
            <img src={pokemon.props.artwork} alt={pokemon.displayName} />
          )}
          <div className="stats">
            {pokemon?.props.stats && (
              <>
                <div className="stat" data-stat="attack">
                  <span className="label">ATK</span>
                  <span className="stats-text value">
                    {pokemon?.props.stats.attack}
                  </span>
                </div>

                <div className="stat" data-stat="defense">
                  <span className="label">DEF</span>
                  <span className="stats-text value">
                    {pokemon?.props.stats.defense}
                  </span>
                </div>

                <div className="stat" data-stat="hp">
                  <span className="label">HP</span>
                  <span className="stats-text value">
                    {pokemon?.props.stats.hp}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
        <div>
          <>
            {pokemon?.props.abilities && (
              <span className="Abilities">Abilities</span>
            )}
            {pokemon?.props.abilities &&
              pokemon?.props.abilities.map((a) => (
                <li className="Abilities" key={a.name}>{a.name}</li>
              ))}
          </>
        </div>
      </div>
    </div>
  );
};
