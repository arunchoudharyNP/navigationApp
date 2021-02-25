import { StackActions } from "@react-navigation/native";
import React from "react";
import { SAVE_DETAILS, LOGOUT } from "../Actions/UserActions";

class product {
  constructor(name, lastName, password) {
    this.name = name;
    this.lastName = lastName;
    this.password = password;
  }
}

const initialState = {
  user: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DETAILS:
      //   const oldUser = state.product;
      //   const data = {
      //     name: action.name,
      //     lastName: action.lastName,
      //     password: action.password,
      //   };

      const data = new product(action.name, action.lastName, action.password);
      // const prod = new product("book","book",25);

      // oldUser.push(data);
      console.log("Entered in Reducers ");

      return {
        ...state,
        user: [...state.user, data],
      };

    default:
      return state;
  }
};
