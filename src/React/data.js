import axios from "axios";
import { useState } from "react";

function Base(){
    const [data,setData]=useState("");
    function transfer(){
        axios.post("http://localhost:3000/teacher",{data})
        .then((res)=>res.data)
        .catch((err)=>err.data)
    }
       return <div>
        <input value={data} onChange={(e)=>{setData(e.target.value)}}/><button onClick={transfer}>submit</button>
       </div>
}
export default Base;
"Teacher": [
  {
    "name": "Anandhi",
    "pass": "1986-07-12",
    "age": "37",
    "gender": "female",
    "experience": "15-yrs",
    "qualification": "B.ed-English",
    "major": "English",
    "phn": "9791737364",
    "email": "cranandhi@gmail.com",
    "address": "2nd street,Anna nagar,Chennai-28",
    "id": 1
  },
  {
    "name": "Pooja",
    "pass": "1992-05-27",
    "age": "31",
    "gender": "Female",
    "experience": "7-yrs",
    "qualification": "B.ed-Maths",
    "major": "Maths",
    "phn": "9787626378",
    "email": "crpooja@gmail.com",
    "address": "1st street,Saidapet,Chennai-30",
    "id": 2
  },
  {
    "name": "Suresh",
    "pass": "1983-02-11",
    "age": "40",
    "gender": "Male",
    "experience": "17-yrs",
    "qualification": "B.ed,M.ed-Physics",
    "major": "Physics,Science",
    "phn": "9917827384",
    "email": "crsuresh@gmail.com",
    "address": "3rd face street,Royapetta,Chhenai-32",
    "id": 3
  },
  {
    "name": "Deepa",
    "pass": "1994-09-24",
    "age": "29",
    "gender": "Female",
    "experience": "6-yrs",
    "qualification": "B.ed-Tamil",
    "major": "Tamil",
    "phn": "6369764573",
    "email": "crdeepa@gmail.com",
    "address": "4th street,Velachery,Chennai-25",
    "id": 4
  }
],