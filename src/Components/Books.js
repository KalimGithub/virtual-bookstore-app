import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Books = () => {

    useEffect(() => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes")
            .then(data => {
                setBookData(data.data.items)
                console.log(data.data.items);
            }
            )
            .catch(error => console.log(error))
    }, [])

    const [bookData, setBookData] = useState([]);
    const [book, setBook] = useState(false)

    const handleClick = () => {
        setBook(true);

    }

    return (
        <div className='books'
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)'
            }}>
            {
                bookData &&
                bookData.map((value, index) => (
                    <div key={index}>
                        <img onClick={handleClick} src={value.volumeInfo.imageLinks.thumbnail} alt='img' />
                    </div>
                ))
            }
        </div>
    )
}

export default Books