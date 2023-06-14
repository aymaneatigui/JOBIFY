import { useAuthContext } from "./useAuthContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logOut = () => {
    localStorage.removeItem("user");
  };
  // dispatch logOut
  dispatch({ type: "LOGOUT" });
  return logOut;
};
