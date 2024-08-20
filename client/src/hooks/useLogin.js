import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export default function useLogin() {
  const [Error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  // disptch
  const { dispatch } = useAuthContext();
  const Login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/users/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setIsLoading(false);
    }
    if (response.ok) {
      // save the user to localstorage
      localStorage.setItem("user", JSON.stringify(json));
      // window.location.href="/"
      dispatch({
        type: "LOGIN",
        payload: json,
      });
      setIsLoading(false);
    }
  };
  return { Login, isLoading, Error };
}
