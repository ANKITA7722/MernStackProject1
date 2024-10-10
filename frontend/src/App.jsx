import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Home from "./pages/Home";



const App=()=>{
//   const [mydata,setMydata]=useState([]);
//   const [input,setInput] =useState({}); 

//     const handleInput=(e)=>{
//       let name=e.target.name;
//       let value=e.target.value; 
  
  
//       setInput((values)=>({...values,[name]:value}));
//       console.log(input);
//     }
//     const handleSubmit=()=>{
//       console.log(input);
//     }
//     return(
//       <>
  
//       Enter name: <input type="text" name="empname" value={input.empnm} onChange={handleInput} />
//       <br/>
//       Enter city: <input type="text" name="city" value={input.city} onChange={handleInput} />
//       <br/>
//       Enter contact: <input type="text" name="contact" value={input.contact} onChange={handleInput} />
//       <br/>
//       <button onClick={handleSubmit}>data save</button>
//       </>
//     )
//   }

// // const loadData=()=>{
// //   let api= "http://localhost:3000/employee";
// //   axios.get(api).then((res)=>{
// //     setMydata(res.data);
// //     console.log(res.data);
// //   });
// // }
// // useEffect(()=>{
// //   loadData();
// // },[])
// // const ans=mydata.map((key)=>{
// //   return(
// //     <>
// //     <tr>
// //       <td>{key.rollno}</td>
// //       <td>{key.name}</td>
// //       <td>{key.city}</td>
// //       <td>{key.salary}</td>
// //     </tr>
// //     </>
// //   )
// // })
// // return(
// //   <>
// //     <table>
// //       <tr>
// //         <th>rollno</th>
// //         <th>name</th>
// //         <th>city</th>
// //         <th>fees</th>
// //       </tr>
// //       {ans}
// //     </table>
// //   </>
// // ) 
// // }


  return(
    <>
    <BrowserRouter>
         <Routes>
           <Route path="/" element={<Layout/>}>
             <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="insert" element={<Insert />} />
            <Route path="display" element={<Display />} />
             
           </Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}
export default App;