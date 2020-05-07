export const ADD_PIZZA = "ADD_PIZZAs";
export const ADD_DRINK = "ADD_DRINKs";


const initialState = {
  pizzas: [], 
  drinks: []
};

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_PIZZA: {
      const newPizzas = action.payload;
      return{
        ...state,
        pizzas:newPizzas
      };
    }
    case ADD_DRINK: {
      const newDrinks = action.payload;
      return{
        ...state,
        drinks:newDrinks
      };
    }
    default:{
      console.warn(`Unknow action ${action.type}`);
      return{...state};
    }
  }
};

/*export const addPizza = (pizza) => dispatch => {
  dispatch({type: ADD_PIZZA, payload: pizza});
}
export const addDrink = (drink) => dispatch => {
  dispatch({type: ADD_DRINK, payload: drink});
}*/