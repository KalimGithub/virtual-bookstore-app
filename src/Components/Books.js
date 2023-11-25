import React, { useEffect,useState } from 'react'
import axios from 'axios';

const Books = () => {



    useEffect(() => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes")
            .then(data => {setBooks(data.data.items)
            console.log(data.data.items);}
            )
            .catch(error => console.log(error))
    }, [])

    const [books, setBooks] = useState([]);
  return (
    <div className='books'>
        {
          books.map((value,index) => {
            console.log(value.id);
            <div key={index}>
                <h1>{value.id}</h1>
                {/* <h1>hello</h1> */}
            </div>
          })
        }
    </div>
  )
}

export default Books



// {
//     searchResults&& (
//         searchResults.map((value, index)=>(
//             <div key={index}>

//                 <img src={value.urls.thumb} alt={value.alt_description} />
//                 <p>{value.description}</p>
            
//             </div>
//         ))
//     )
// }