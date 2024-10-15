const Search = ({ search, handleSearch, setSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name..."
        name="search"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
