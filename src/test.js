import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';


/**
 * Step one, get data
step two, set up web page for pagination
Step three, sort and filter data for web page

jared*/



const dataInput = () =>{
   

}

function Test(){

const [data, setData] = useState([]);

    useEffect(() =>
    {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
            setData(response.data);
           
        })
    
    },[]);

    function filterId(){
        var newArray = [];
        newArray = data.filter(function(e,pos){
            console.log('index:'+data.indexOf(e))
            console.log('position:'+pos)
            return data.indexOf(e.userId) === pos;
            
          });
          setData(newArray);
          console.log(newArray);
    }
    function sortThisThing(){
        var newArray = [];
        newArray = data.sort((a, b) => a.userId - b.userId);
        
    console.log(newArray);
        setData(newArray);
    }

    return (
        <div className="App">
        <button onClick={sortThisThing}>Button</button>
        {data.map(user => (
          <div key={user.id} style={{ margin: '30px' }}>
            <div>{`Id: ${user.userId}`}</div>
            <div>{`title: ${user.title}`}</div>
            <div>{`status: ${user.completed}`}</div>
          </div>
        ))}
      </div>
        );
      
    
}
export default Test;

