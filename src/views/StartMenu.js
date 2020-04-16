import React from "react";

import { Link } from "react-router-dom";

import { Button, ListItem, List, Divider } from "react95";

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {open && (
        <List
          horizontalAlign="left"
          verticalAlign="bottom"
          open={open}
          onClick={handleClose}
        >
          <Link to="/">
            <ListItem>
              <span role="img" aria-label="house">
                🏠
              </span>
              Home
            </ListItem>
          </Link>
          <Link to="/pokedex">
            <ListItem>
              <span role="img" aria-label="caterpillar">
                🐛
              </span>{" "}
              PokeDex
            </ListItem>
          </Link>
          <Link to="/incubator">
            <ListItem>
              <span role="img" aria-label="egg">
                🥚
              </span>
              Incubator
            </ListItem>
          </Link>
          <Link to="/mate">
            <ListItem>
              <span role="img" aria-label="fire">
                🔥
              </span>
              Mate
            </ListItem>
          </Link>
          <Divider />
          <Link to="/about">
            <ListItem>
              <span role="img" aria-label="develper">
                👨‍💻
              </span>{" "}
              About us
            </ListItem>
          </Link>
          <Divider />

          <ListItem disabled>
            <span role="img" aria-label="back">
              🔙
            </span>
            Logout
          </ListItem>
        </List>
      )}
      <Button
        onClick={handleClick}
        active={open}
        style={{ fontWeight: "bold" }}
      >
        Start
      </Button>
    </div>
  );
}
