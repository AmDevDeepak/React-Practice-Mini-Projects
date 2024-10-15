import React, { useEffect, useState } from "react";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/users?limit=20`);
      const responseData = await response.json();
      if (responseData && responseData.users && responseData.users.length) {
        setUsers(responseData.users.map((user) => user.firstName));
        setError(null);
      }
    } catch (error) {
      console.error(error);
      setError(error || "Something went wrong while fetching the users");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const resultHandleOnClick = (ev) => {
    setInputVal(ev.target.innerText);
  };

  console.log(users, filteredResults);
  const handleChange = (ev) => {
    const query = ev.target.value.toLowerCase();
    setInputVal(query);

    if (query.length > 1) {
      const filteredUsers =
        users && users.length
          ? users.filter((user) => user.toLowerCase().includes(query))
          : [];
      setFilteredResults(filteredUsers);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  return (
    <div className="main">
      <input
        style={{
          padding: "10px",
          border: "1px solid red",
          fontSize: "30px",
          marginBottom: "10px",
        }}
        type="text"
        placeholder="Search user..."
        value={inputVal}
        onChange={handleChange}
      />

      <div className="suggestions">
        {showResults && (
          <ul>
            {filteredResults.map((user) => (
              <li
                onClick={resultHandleOnClick}
                style={{
                  padding: "10px",
                  border: "1px solid red",
                  fontSize: "30px",
                  backgroundClip: "green",
                  marginBottom: "5px",
                }}
                key={user}
              >
                {user}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Index;
