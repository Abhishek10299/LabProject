import React, { useState } from "react";

function Footer() {
  const [data, setData] = useState(0);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  return (
    <div className="Footer-contanier">
      <tbody>
        <tr>
          <td>first</td>
          <td>
            <input
              type="text"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              placeholder="Enter value"
            />
          </td>
        </tr>
        <tr>
          <td>second</td>
          <td>
            <input
              type="text"
              onChange={(e) => setSecond(e.target.value)}
              placeholder="Enter value"
              value={second}
            />
          </td>
        </tr>
        <tr>
          <button onClick={() => setData(parseInt(second) + parseInt(first))}>
            Add
          </button>
        </tr>
        <tr>
          <td>Result</td>
          <td>
            <input type="text" value={data} />
          </td>
        </tr>
      </tbody>

      <div className="Footer-container">
        <span className="Footer-text">This is Footer</span>
        <a href="https://srmup.in">Go to srm</a>
        {/* <button style={{margin:"10px",}} onClick={()=>setData(data+1)}>ADD</button> */}
      </div>
    </div>
  );
}

export default Footer;
