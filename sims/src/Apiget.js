import React, { useEffect, useState } from "react";

const Apiget = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch("https://dummy-json.mock.beeceptor.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        setUserData(data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err, "error");
        setloading(false);
      });
  },[]);
  if (loading) return <>loading....</>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>S.No.</td>
            <td>User Id</td>
            <td>Title</td>
            <td>Comment Count</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.userId}</td>
              <td>{data.title}</td>
              <td>{data.comment_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Apiget;
