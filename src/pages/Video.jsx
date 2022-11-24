import {useEffect, useState} from 'react'
import '../App.css';
import ReactPlayer from 'react-player'


const Video = () => {
    const [contentList, setContentList] = useState([]);
    const [selectedContent, setSelectedContent] = useState([]);
    useEffect(() => {
        loadContents();
    }, []);

    const loadContents = () => {
        fetch(`http://localhost:8000/api/contents`)
            .then((response) => {
                return response.json()
            }).then((data) => {
            setContentList(data); 
            setSelectedContent(data[0])
        });
    }

    const handleVideoListClick = (e) => {
        console.log(e);
        setSelectedContent(e)
        console.log(selectedContent)
    }

    return (
        <div className='account'>
            <h1 className='text-center text-3xl font-bold py-8'>A list of YouTube video provided for Parkinson's diseas
                patient</h1>
            <div>
                <ReactPlayer url={selectedContent?.url} className="video"/>
            </div>
            <ul>
                {contentList?.map((content) => {
                    return (
                        <li value={content?.url} onClick={() => handleVideoListClick(content)}>{content?.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Video
