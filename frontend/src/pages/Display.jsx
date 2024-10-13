import { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:3000/employee";

    try {
      const response = await axios.get(api);
      setMydata(response.data);
      console.log(response);
    } catch (error) {
      console.log("server not Found");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = mydata.map((key) => {
    return (
      
        <tr>
        <td>{key.empno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.salary}</td>
      </tr>
    
    );
  });

  return (
    <>
  
      <table border={2}>
          <tr>
            <th>empno</th>
            <th>name</th>
            <th>city</th>
            <th>salary</th>
          </tr>
        {ans}
      </table>
    
    </>
  );
};

export default Display;
