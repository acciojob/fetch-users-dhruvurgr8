import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  let userData;
  useEffect(() => {
    (async function () {
      const response = await axios({
        url: "https://reqres.in/api/users",
        method: "GET",
      });
      const dataObtained = response.data;
      userData = dataObtained.data;
      //   setData(dataObtained.data);
      console.log(data);
    })();
  }, []);
  const handleClick = () => {
    setData(userData);
  };
  return (
    <>
      <div className="btn-wrapper">
        <h1>Blue Whales</h1>
        <button onClick={handleClick}>Get User List</button>
      </div>
      
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avatar</th>
        </tr>
        {data.length == 0 && <p>No data found to Display.</p>}
        {data.length > 0 &&
          data.map((user) => {
            return (
              <>
                <tr>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    <img src={user.avatar} />
                  </td>
                </tr>
              </>
            );
          })}
      </table>
    </>
  );
};

export default App;
