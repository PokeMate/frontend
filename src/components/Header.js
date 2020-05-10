import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import withWidth from '@material-ui/core/withWidth';


const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: "30px"
  }
}));

function ScrollTop(props) {
  const {children, window} = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({behavior: "smooth", block: "center"});
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Header(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
      <CssBaseline/>
      <AppBar>
        <Toolbar>
          <Button
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => history.push("/")}
          >
            <span role="img" aria-label="home" className={classes.icon}>
              🏠
            </span>
          </Button>
          <Typography variant="h6" className={classes.title}>
            {
              props.width === 'xs' ? "" : "PokéMate"
            }

          </Typography>
          <Button color="inherit" onClick={() => history.push("/pokedex")}>
            <span role="img" aria-label="caterpillar" className={classes.icon}>
              🐛
            </span>
            {
              props.width === 'xs' ? "" : "Pokédex"
            }

          </Button>
          <Button color="inherit" onClick={() => history.push("/mate")}>
            <span role="img" aria-label="fire" className={classes.icon}>
              🔥
            </span>
            {
              props.width === 'xs' ? "" : "Mate"
            }
          </Button>
          <Button color="inherit" onClick={() => history.push("/incubator")}>
            <span role="img" aria-label="egg" className={classes.icon}>
              🥚
            </span>
            {
              props.width === 'xs' ? "" : "Incubator"
            }
          </Button>
          <Button color="inherit" onClick={() => history.push("/about")}>
            <span role="img" aria-label="developer" className={classes.icon}>
              👨‍💻
            </span>
            {
              props.width === 'xs' ? "" : "About"
            }
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor"/>
      <ScrollTop {...props}>
        <Fab color="secondary" size="all" aria-label="scroll back to top">
          <KeyboardArrowUpIcon/>
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

Header.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Header);