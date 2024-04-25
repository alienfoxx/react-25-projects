import { useEffect, useState } from "react";
import Suggestion from "./suggestions";
import "./style.css";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUser] = useState([]);
  const [error, setErorr] = useState(null);
  const [searchParam, setSarchParam] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [flitredUsers, setFiltredUsers] = useState([]);

  function handelChange(event) {
    const query = event.target.value.toLowerCase();
    setSarchParam(query);
    if (query.length > 1) {
      const filterData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFiltredUsers(filterData);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }
  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);
      if (data && data.users && data.length);
      setUser(data.users.map((userItem) => userItem.firstName));

      setLoading(false);
      setErorr(null);
    } catch (error) {
      setLoading(false);

      console.log(error);
      setLoading(false);
      setErorr(error);
    }
  }
  function handelCLickMethode(event) {
    setShowResults(false);
    setSarchParam(event.target.innerText);
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="container">
      <h1>This Is auto completer</h1>
      <div className="serach-container">
        {loading ? (
          <h1>pleas Wait is loading</h1>
        ) : (
          <input
            value={searchParam}
            type="text"
            name="search-user"
            placeholder="Search Users here..."
            onChange={handelChange}
          />
        )}

        {showResults && (
          <Suggestion handeClick={handelCLickMethode} data={flitredUsers} />
        )}
      </div>
    </div>
  );
}
