// import DBstore from './components/Articles/DBstore'
// import Reference from './components/Articles/Reference';
import {useSelector } from 'react-redux'
import ReferenceItem from './ReferenceItem';

function AllReferences(props) {
    const references = useSelector((state) => 
        state.references.references
    )
    return(
        <>
      <ul>
        {references.map((reference) => (
          <ReferenceItem
            key={reference.articleID}
            articleID={reference.articleID}
            title={reference.title}
            publishDate={reference.publishDate}
            authorName={reference.authorName}
          />
        ))}
      </ul>
   </>
    )
}

export default AllReferences;