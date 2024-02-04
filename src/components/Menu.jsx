import React, { useEffect, useState } from "react";

const Menu = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwRo0gLzSReAa221OCKQZwP1TsG-A28TDGYz8yRwsrBRZn-u1G35BdMickSNXkDY8-Y/exec"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  console.log("123", data);
  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
