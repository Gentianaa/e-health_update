import React, {useEffect, useState} from 'react'
import '../App.css';

const Feed = () => {
    const [feedList, setFeedList] = useState([]);


    useEffect(() => {
        loadContents();
    }, []);

    const loadContents = () => {
        fetch(`http://localhost:8000/api/feed`)
            .then((response) => {
                return response.json()
            }).then((data) => {
                console.log(data)
            setFeedList(data);
        });
    }
  return (
    <div className='account'>
      <h1 className='text-center text-3xl font-bold py-8'>The latest news feed</h1>
        <ul>
            {feedList?.map((feed) => {
                return (
                    <li value={feed?.url}>
                        <div>
                            {feed?.title}
                        </div>
                        <div>
                            {feed?.content}
                        </div>
                        <div>
                            <small>{feed?.date}</small>
                        </div>

                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Feed
