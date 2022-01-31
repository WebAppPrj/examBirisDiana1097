const ReferenceItem = (props) => {
    return(
        <li>
            <p>{props.articleID}</p>
            <p>{props.title}</p>
            <p>{props.publishDate}</p>
            <p>{props.authorNames}</p>
        </li>
    )
}

export default ReferenceItem