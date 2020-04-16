import React, { useContext } from "react";

import {
  Table,
  TableBody,
  TableHead,
  TableDataCell,
  TableRow,
  TableHeadCell,
  Button,
} from "react95";
import { SelectionContext } from "../../context/SelectionContext";
import TypeIcon from "../../components/TypeIcon";
import { WindowContext } from "../../context/WindowContext";

export default function PokemonTable({ pokemons }) {
  const [selectedPokemons, setSelectedPokemons] = useContext(SelectionContext);
  const [windowManagement, setWindowManagement] = useContext(WindowContext);

  const handleSelect = (pokemon) => {
    var newPokemons = selectedPokemons;
    newPokemons.push(pokemon);
    newPokemons = Array.from(new Set(newPokemons));
    setSelectedPokemons(newPokemons);
  };
  const handleClick = (pokemon) => {
    setWindowManagement({
      showPokemonDetailsView: true,
    });
  };

  return (
    <Table>
      <React.Fragment>
        <div style={{ maxHeight: "300px", overflowY: "scroll" }}>
          <TableHead>
            <TableRow head>
              <TableHeadCell>Id</TableHeadCell>
              <TableHeadCell>Image</TableHeadCell>

              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Types</TableHeadCell>
              <TableHeadCell>Attr.</TableHeadCell>
              <TableHeadCell>Fert.</TableHeadCell>
              <TableHeadCell>Fit.</TableHeadCell>
              <TableHeadCell>Preferred Types</TableHeadCell>
              <TableHeadCell>NoGo Types</TableHeadCell>

              <TableHeadCell>Actions</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemons.map((pokemon) => (
              <TableRow key={pokemon.id.counter}>
                <TableDataCell style={{ textAlign: "center" }}>
                  {pokemon.pokeDexId}
                </TableDataCell>

                {/* <TableDataCell style={{ textAlign: "center" }}>
                <img style={imageStyle} src={pokemon.url} alt="example" />
              </TableDataCell> */}

                <TableDataCell style={{ textAlign: "center" }}>
                  {pokemon.name}
                </TableDataCell>
                {/* 
              <TableDataCell style={{ textAlign: "center" }}>
                <div style={typesStyleCentered}>
                  {pokemon.types.map((type) => (
                    <TypeIcon type={type} small key={type} />
                  ))}
                </div>
              </TableDataCell>

              <TableDataCell style={{ textAlign: "center" }}>
                {pokemon.attractiveness * 100}%
              </TableDataCell>

              <TableDataCell style={{ textAlign: "center" }}>
                {pokemon.fertility * 100}%
              </TableDataCell>

              <TableDataCell style={{ textAlign: "center" }}>
                {pokemon.fitness * 100}%
              </TableDataCell>

              <TableDataCell style={{ textAlign: "center" }}>
                <div style={typesStyleCentered}>
                  {pokemon.no_go_types.map((type) => (
                    <TypeIcon type={type} small key={type} />
                  ))}
                </div>
              </TableDataCell>

              <TableDataCell style={{ textAlign: "center" }}>
                <div style={typesStyleCentered}>
                  {pokemon.preferred_types.map((type) => (
                    <TypeIcon type={type} small key={type} />
                  ))}
                </div>
              </TableDataCell> 

              <TableDataCell style={{ textAlign: "center" }}>
                <Button
                  variant="flat"
                  small
                  square
                  onClick={() => handleClick(pokemon)}
                >
                  <p>+</p>
                </Button>
                <Button
                  variant="flat"
                  small
                  square
                  onClick={() => handleClick(pokemon)}
                >
                  <p>?</p>
                </Button>
                <Button
                  variant="flat"
                  small
                  square
                  onClick={() => handleClick(pokemon)}
                >
                  <p>$</p>
                </Button>
              </TableDataCell>
              */}
              </TableRow>
            ))}
          </TableBody>
        </div>
      </React.Fragment>
    </Table>
  );
}

const typesStyleCentered = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "7px",
  position: "relative",
};

const imageStyle = {
  display: "block",
  width: "30px",
  height: "30px",
  top: "10px",
  position: "relative",
  marginLeft: "auto",
  marginRight: "auto",
};
