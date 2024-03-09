import React from "react";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <p>HomePage</p>
    </div>
  );
};

export default HomePage;
