import { useState } from 'react'

function Reference(props) {
    const { member } = props;
    const [referenceID, setReferenceID] = useState(member.ReferenceID);
    const [articleID, setMovieID] = useState(member.ArticleID)
    const [title, setTitle] = useState(member.Title);
    const [publishDate, setPublishDate] = useState(member.PublishDate);
    const [authorNames, setRole] = useState(member.AuthorNames);

    return (<>
        <h1>Reference</h1>
        <p>ID: {referenceID}</p>
        <p>ArticleID: {articleID}</p>
        <p>Title: {title}</p>
        <p>PublishDate: {publishDate}</p> 
        <p>AuthorName: {authorNames}</p>       
    </>)
}

export default Reference;