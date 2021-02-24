

import { SAVE_DETAILS,LOGOUT } from "../Actions/UserActions";



const initialState= {
    user: []
}

export default (state= initialState , action ) =>{


   switch (action.type) {
       case SAVE_DETAILS:

       console.log("Entered in Reducers " );
       return {...state.user, user: {
           name: action.name,
           lastName: action.lastName,
           password: action.password
       }} 
           
   
       default:
           return state;
   }
  



}