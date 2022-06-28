
import './App.css';
import { useEffect, useState } from 'react';

const movies = [
  {
    id: 1,
    name: 'Matrix',
    country: 6,
    collection: 300, //in CRs
    releasedOn: 1999,
  },
  {
    id: 2,
    name: 'Tere Nam',
    country: 10,
    collection: 101,
    releasedOn: 2004,
  },
  {
    id: 3,
    name: 'Bahubali',
    country: 2,
    collection: 500,
    releasedOn: 1987,
  },
];

export const NumbersMain = () => {

  useEffect(() => {
   
    getNumbers();
  }, []);

const getNumbers = () =>
{
  // axios.get("https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&#8217")
  // .then((response)=>{
  //   if (response.status==200){
  //     console.log(response.data);
  //   }
  // });
  
  const numbers = [1,2,1,1,1,2,3,4,4,4,4,6,6,77,6,6,7,7,7,7,7,8,10,21,21,21,10,1,3,4,4,11,10,77,99];
  console.log(numbers);
  var newArray = [];
  newArray = numbers.filter(function(e,pos){
    console.log(e)
    console.log('index:'+numbers.indexOf(e))
            console.log('position:'+pos)
    return numbers.indexOf(e) === pos;
  });
  console.log(newArray);
}
}

function App() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    const sortArray = type => {
      const types = {
        country: 'country',
        collection: 'collection',
        releasedOn: 'releasedOn',
      };
      const sortProperty = types[type];
      const sorted = [...movies].sort((a, b) => a[sortProperty] - b[sortProperty]);
      setData(sorted);
    };
    sortArray(sortType);
  }, [sortType]);  
 return (
  <div className="App">
  <select onChange={(e) => setSortType(e.target.value)}> 
    <option value="country">Country</option>
    <option value="collection">Collection</option>
    <option value="releasedOn">Release Date</option>
  </select>
  {data.map(movie => (
    <div key={movie.id} style={{ margin: '30px' }}>
      <div>{`Movie: ${movie.name}`}</div>
      <div>{`Country: ${movie.country}`}</div>
      <div>{`Collection: ${movie.collection}`}</div>
      <div>{`Year of Release: ${movie.releasedOn}`}</div>
    </div>
  ))}
</div>
  );
}

export default NumbersMain;

  
  
