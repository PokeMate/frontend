import React from "react";

import {
  Window,
  WindowHeader,
  WindowContent,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableRow,
  TableHeadCell,
} from "react95";

export default function Pokedex() {
  return (
    <div>
      <Window>
        <WindowHeader>Pokedex.exe</WindowHeader>
        <WindowContent>
          <Table>
            <TableHead>
              <TableRow head>
                <TableHeadCell>Type</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Lvl.</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ maxHeight: "100px", overflowY: "scroll" }}>
              <TableRow>
                <TableDataCell style={{ textAlign: "center" }}>F</TableDataCell>
                <TableDataCell>Bulbasaur</TableDataCell>
                <TableDataCell>64</TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell style={{ textAlign: "center" }}>T</TableDataCell>
                <TableDataCell>Charizard</TableDataCell>
                <TableDataCell>209</TableDataCell>
              </TableRow>
              <TableRow>
                <TableDataCell style={{ textAlign: "center" }}>B</TableDataCell>
                <TableDataCell>Pikachu</TableDataCell>
                <TableDataCell>82</TableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </WindowContent>
      </Window>
    </div>
  );
}
