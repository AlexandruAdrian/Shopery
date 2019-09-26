import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { AuthContext, Auth } from "../../contexts/authContext";
import interceptResponse from "../../util/response-interceptor";
import { User } from "./interfaces";

const useGetUser = () => {
  const [user, setUser] = useState<User>({
    email: "",
    firstName: "",
    lastName: "",
    _id: ""
  });
  const [error, setError] = useState<string>("");
  const { setLoggedIn } = useContext<Auth>(AuthContext);

  useEffect(() => {
    let subscribed = true;
    const fetchUser = async () => {
      let token = localStorage.getItem("token") as string;
      const url = "http://localhost:8000/api/v1.0/users/me";
      if (setLoggedIn) interceptResponse(setLoggedIn);
      if (token) token = JSON.parse(token);
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (subscribed) setUser(res.data.user);
      } catch (err) {
        if (subscribed) setError(err);
      }
    };

    fetchUser();

    return () => {
      subscribed = false;
    };
  }, [setLoggedIn]);

  return {
    user,
    error
  };
};

export default useGetUser;
