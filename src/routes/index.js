import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import MapIcon from '@material-ui/icons/Map';
import MapTwoToneIcon from '@material-ui/icons/MapTwoTone';
import MapSharpIcon from '@material-ui/icons/MapSharp';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Map from '../pages/map';
import SceneView from '../pages/scene';
import AltSceneView from '../pages/scene-alt';
import Overview from '../pages/overview';
import Home from '../pages/home';
import WebMap from '../pages/web-map';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    marginTop: '56px'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0,
    marginTop: '49px'
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const history = createBrowserHistory();

  return (
    <div>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position='fixed'
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open
            })}
          >
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' noWrap>
                Esri Maps
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant='persistent'
            anchor='left'
            open={open}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button component={Link} to='/'>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItem>
              <ListItem button component={Link} to='/map'>
                <ListItemIcon>
                  <MapIcon />
                </ListItemIcon>
                <ListItemText primary='Map 1' />
              </ListItem>
              <ListItem button component={Link} to='/web-map'>
                <ListItemIcon>
                  <MapTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary='Web Map' />
              </ListItem>
              <ListItem button component={Link} to='/scene'>
                <ListItemIcon>
                  <MapSharpIcon />
                </ListItemIcon>
                <ListItemText primary='Scene View' />
              </ListItem>
              <ListItem button component={Link} to='/alt-scene'>
                <ListItemIcon>
                  <MapSharpIcon />
                </ListItemIcon>
                <ListItemText primary='Alt Scene View' />
              </ListItem>
            </List>
            {/*<Divider />
         <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open
            })}
          >
            {/* <Route exact path='/' component={Home} /> */}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/map' component={Map} />
              <Route path='/scene' component={SceneView} />
              <Route exact path='/alt-scene' component={AltSceneView} />
              <Route path='/overview' component={Overview} />
              <Route exact path='/web-map' component={WebMap} />
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}
