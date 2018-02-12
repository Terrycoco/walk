var n = require('actions/types').nav;

const INITIAL_STATE = {
  prevRoute: null,
  nextRoute: null,
  fromDir: null,
  currentRoute: null,
  flipped: false,
  menuOpen: true
};


export default function(state=INITIAL_STATE, action) {
  let newobj;
  switch(action.type) {
    case n.SET_FLIPPED:
     return {...state, flipped: action.payload};
    case n.CHANGE_ROUTE:
      return {...state, currentRoute: action.payload.route};
    case n.GO_BACK:
      return  {...state, nextRoute: action.prevRoute, fromDir: "left"};
    case n.REQUEST_ROUTE: 
      newobj = {prevRoute: state.nextRoute, nextRoute: action.payload.route, fromDir: action.payload.fromDir};
      if (action.payload.fromRoute != undefined) {
        newobj.prevRoute = action.payload.fromRoute;
      }
      return  {...state, ...newobj};
    case n.ROUTE_LOADED:
     return {...state, prevRoute: state.currentRoute, currentRoute: state.nextRoute}; //now next & current are same
  
    case n.TOGGLE_MENU:
     return Object.assign({}, state, {menuOpen: action.payload});

   }
  return state;
}

