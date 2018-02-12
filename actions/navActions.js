const n = require('actions/types').nav;
import Router from 'next/router';

export function goBack() {
  return {
    type: n.GO_BACK
  };
}

export function requestRoute(route, dir, fromRoute) {
  console.log('route requested: ', route);
  return function(dispatch) {
    let payload = {route: route, fromDir: dir};
    if (fromRoute != undefined) {
      payload.fromRoute = fromRoute;
    }
    if (route[0] != '/') { route = '/' + route};
    Router.push(route);
    dispatch(setRoute(payload));
    dispatch(toggleMenu(false));
  }
}

export function routeLoaded() {
  return {
    type: n.ROUTE_LOADED
  };
}


function setRoute(payload) {
  return {
      type: n.REQUEST_ROUTE,
      payload: payload
  };
}

export function setFlipped(flip) {
  return {
    type: n.SET_FLIPPED,
    payload: flip
  };
}

export function toggleMenu(val) {
  return {
    type: n.TOGGLE_MENU,
    payload: val
  };
}



