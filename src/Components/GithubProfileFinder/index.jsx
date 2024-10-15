import { useState } from "react";

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (username) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      if (data) {
        setLoading(false);
        setUserData(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (error)
    return (
      <div className="error">
        <h1>{error}</h1>
      </div>
    );
  return (
    <div className="main">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search by username"
          name="search-by-username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <button onClick={() => fetchData(username)}>Search</button>
      </div>
      <div className="data-container">
        {loading ? (
          <div className="loading">
            <h1>Searching for {username}</h1>
          </div>
        ) : (
          <div className="profile">
            <div className="picture">
              <img src={userData?.avatar_url} alt="" />
            </div>
            <h2>{userData?.name}</h2>
            <h3>
              <span>Followers : {userData?.followers}</span>
              <span>Following : {userData?.following}</span>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default GithubProfileFinder;
