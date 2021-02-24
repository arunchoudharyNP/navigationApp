export const SAVE_DETAILS = "SAVE_DETAILS";

export const LOGOUT = "LOGOUT";

export const saveDetails = (name, lastName, password) => {
  console.log("Entered in Action");
  return { type: SAVE_DETAILS, name, lastName, password };
};
