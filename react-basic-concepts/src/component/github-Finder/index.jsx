import { useEffect, useState } from "react";

export default function GithubProfileFinder() {
  const [username, setUserName] = useState("alienfoxx");
  const [userData, setUserData] = useState (null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchGithubData();
  }, []);
  if (loading) {
    return <h1>Loading data ! Please Wait</h1>;
  }

  function handelSubmit() {}

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
    </div>
  );
}
