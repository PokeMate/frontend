import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Avatar } from "react95";
import StartMenu from "./StartMenu";

export default function ApplicationBar() {
  return (
    <AppBar>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <StartMenu />
        <Toolbar>
          <Link to="/profile">
            <Avatar src="https://sphoto.nasza-klasa.pl/33278012/1/square/2658174fbd.jpeg?v=1" />
          </Link>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
}
