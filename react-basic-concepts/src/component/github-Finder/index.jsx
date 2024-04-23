import { useEffect, useState } from "react";
import User from "./card";
import "./style.css";

export default function GithubProfileFinder() {
  const [username, setUserName] = useState("alienfoxx");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }
  useEffect(() => {
    fetchGithubData();
  }, []);
  if (loading) {
    return <h1>Loading data ! Please Wait</h1>;
  }

  function handelSubmit() {
    fetchGithubData();
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          placeholder="Search Github Username"
          type="text"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handelSubmit}>Find</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
