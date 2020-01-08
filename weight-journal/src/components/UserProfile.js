import React from "react";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    age: "",
    height: "",
    weight: ""
  });

  return (
    <div>
      <h1>Your Stats:</h1>
      <p>Age: {age}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
    </div>
  );
};
