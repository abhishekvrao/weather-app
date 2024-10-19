const SearchWeather = ({ setQuey, handleSearchWeather }) => {
  return (
    <div>
      <input type="text" onChange={(e) => setQuey(e.target.value)} />
      <button onClick={handleSearchWeather}>Search</button>
    </div>
  );
};

export default SearchWeather;
