import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export default function useSignup() {
  const [Error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  // disptch
  const { dispatch } = useAuthContext();
  const signup = async ( name, lname, age, diploma, email, password, address, phone, gender) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, lname, age, diploma, email, password, address, phone, gender }),
    });
    
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
  return { signup, isLoading, Error };
}
