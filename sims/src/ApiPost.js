import React, { useState } from "react";

function ApiPost() {
  const [regno, setRegno] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const userData = {
    regno: regno,
    name: name,
    marks: marks,
  };

 const handleSubmit=async(e)=>{
    e.preventDefault();
    fetch("http://localhost:4000/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
 }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>regno</td>
            <td>
              <input
                value={regno}
                onChange={(e) => setRegno(e.target.value)}
                placeholder="Enter the regno"
              />
            </td>
          </tr>
          <tr>
            <td>name</td>
            <td>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter the name"
              />
            </td>
          </tr>
          <tr>
            <td>marks</td>
            <td>
              <input
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                placeholder="Enter the marks"
              />
            </td>
          </tr>
          <tr>
            <td>
                <button onClick={(e) => handleSubmit(e)}>submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ApiPost;
