import React from "react";
import bugSvg from "../img/types/bug.svg";
import darkSvg from "../img/types/dark.svg";
import dragonSvg from "../img/types/dragon.svg";
import electricSvg from "../img/types/electric.svg";
import fireSvg from "../img/types/fire.svg";
import fairySvg from "../img/types/fairy.svg";
import fightingSvg from "../img/types/fighting.svg";
import flyingSvg from "../img/types/flying.svg";
import ghostSvg from "../img/types/ghost.svg";
import grassSvg from "../img/types/grass.svg";
import groundSvg from "../img/types/ground.svg";
import iceSvg from "../img/types/ice.svg";
import normalSvg from "../img/types/normal.svg";
import poisonSvg from "../img/types/poison.svg";
import psychicSvg from "../img/types/psychic.svg";
import rockSvg from "../img/types/rock.svg";
import steelSvg from "../img/types/steel.svg";
import waterSvg from "../img/types/water.svg";

export default function TypeIcon({ type, small, medium, large }) {
  var IconSize = IconSizeSmall;
  if (medium) {
    IconSize = IconSizeMedium;
  } else if (large) {
    IconSize = IconSizeLarge;
  }

  switch (type) {
    case "bug":
      return (
        <div style={{ ...IconStyle, ...BugStyle, ...IconSize }}>
          <img style={ImageStyle} src={bugSvg} alt="bug-icon"></img>
        </div>
      );
    case "dark":
      return (
        <div style={{ ...IconStyle, ...DarkStyle, ...IconSize }}>
          <img style={ImageStyle} src={darkSvg} alt="dark-icon"></img>
        </div>
      );
    case "dragon":
      return (
        <div style={{ ...IconStyle, ...DragonStyle, ...IconSize }}>
          <img style={ImageStyle} src={dragonSvg} alt="dragon-icon"></img>
        </div>
      );

    case "electric":
      return (
        <div style={{ ...IconStyle, ...ElectricStyle, ...IconSize }}>
          <img style={ImageStyle} src={electricSvg} alt="electric-icon"></img>
        </div>
      );

    case "fire":
      return (
        <div style={{ ...IconStyle, ...FireStyle, ...IconSize }}>
          <img style={ImageStyle} src={fireSvg} alt="fire-icon"></img>
        </div>
      );

    case "fairy":
      return (
        <div style={{ ...IconStyle, ...FairyStyle, ...IconSize }}>
          <img style={ImageStyle} src={fairySvg} alt="fairy-icon"></img>
        </div>
      );

    case "fighting":
      return (
        <div style={{ ...IconStyle, ...FightingStyle, ...IconSize }}>
          <img style={ImageStyle} src={fightingSvg} alt="fighting-icon"></img>
        </div>
      );

    case "flying":
      return (
        <div style={{ ...IconStyle, ...FlyingStyle, ...IconSize }}>
          <img style={ImageStyle} src={flyingSvg} alt="flying-icon"></img>
        </div>
      );

    case "ghost":
      return (
        <div style={{ ...IconStyle, ...GhostStyle, ...IconSize }}>
          <img style={ImageStyle} src={ghostSvg} alt="ghost-icon"></img>
        </div>
      );

    case "grass":
      return (
        <div style={{ ...IconStyle, ...GrassStyle, ...IconSize }}>
          <img style={ImageStyle} src={grassSvg} alt="grass-icon"></img>
        </div>
      );

    case "ground":
      return (
        <div style={{ ...IconStyle, ...GroundStyle, ...IconSize }}>
          <img style={ImageStyle} src={groundSvg} alt="gournd-icon"></img>
        </div>
      );

    case "ice":
      return (
        <div style={{ ...IconStyle, ...IceStyle, ...IconSize }}>
          <img style={ImageStyle} src={iceSvg} alt="ice-icon"></img>
        </div>
      );

    case "poison":
      return (
        <div style={{ ...IconStyle, ...PoisonStyle, ...IconSize }}>
          <img style={ImageStyle} src={poisonSvg} alt="poison-icon"></img>
        </div>
      );

    case "psychic":
      return (
        <div style={{ ...IconStyle, ...PsychicStyle, ...IconSize }}>
          <img style={ImageStyle} src={psychicSvg} alt="psychic-icon"></img>
        </div>
      );

    case "rock":
      return (
        <div style={{ ...IconStyle, ...RockStyle, ...IconSize }}>
          <img style={ImageStyle} src={rockSvg} alt="rock-icon"></img>
        </div>
      );

    case "steel":
      return (
        <div style={{ ...IconStyle, ...SteelStyle, ...IconSize }}>
          <img style={ImageStyle} src={steelSvg} alt="steel-icon"></img>
        </div>
      );
    case "water":
      return (
        <div style={{ ...IconStyle, ...WaterStyle, ...IconSize }}>
          <img style={ImageStyle} src={waterSvg} alt="water-icon"></img>
        </div>
      );
    default:
      return (
        <div style={{ ...IconStyle, ...NormalStyle, ...IconSize }}>
          <img style={ImageStyle} src={normalSvg} alt="normal-icon"></img>
        </div>
      );
  }
}

const BugStyle = {
  background: "#92BC2C",
};

const DarkStyle = {
  background: "#595761",
};

const DragonStyle = {
  background: "#0C69C8",
};

const ElectricStyle = {
  background: "#F2D94E",
};

const FireStyle = {
  background: "#FBA54C",
};

const FairyStyle = {
  background: "#EE90E6",
};

const FightingStyle = {
  background: "#D3425F",
};

const FlyingStyle = {
  background: "#A1BBEC",
};

const GhostStyle = {
  background: "#5F6DBC",
};

const GrassStyle = {
  background: "#5FBD58",
};

const GroundStyle = {
  background: "#DA7C4D",
};

const IceStyle = {
  background: "#75D0C1",
};

const NormalStyle = {
  background: "#A0A29F",
};

const PoisonStyle = {
  background: "#B763CF",
};

const PsychicStyle = {
  background: "#FA8581",
};

const RockStyle = {
  background: "#C9BB8A",
};

const SteelStyle = {
  background: "#5695A3",
};

const WaterStyle = {
  background: "#539DDF",
};

const IconStyle = {
  borderRadius: "100px",
  // display: "inline-block",
  // marginRight: "10px",
  // marginLeft: "10px",
};

const IconSizeSmall = {
  height: "25px",
  width: "25px",
};

const IconSizeMedium = {
  height: "50px",
  width: "50px",
};

const IconSizeLarge = {
  height: "75px",
  width: "75px",
};

const ImageStyle = {
  height: "60%",
  width: "60%",
  margin: "20%",
};
