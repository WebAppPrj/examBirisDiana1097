// import { useState } from 'react'

// function AddArticleForm (props) {
//     const { onAdd } = props
//     //const [referenceID, setReferenceID] = useState('');
//     const [articleID, setArticleID] = useState('')
//     const [title, setTitle] = useState('');
//     const [publishDate, setPublishDate] = useState('');
//     const [authorNames, setAuthorNames] = useState('');

//     const add = (evt) => {
//         onAdd({
//             //referenceID,
//             articleID,
//             title,
//             publishDate,
//             authorNames
//         })
//         //setReferenceID('')
//         setArticleID('')
//         setTitle('')
//         setPublishDate('')
//         setAuthorNames('')
//     }

//     return (
//         <div>
//             <div>
//                 <input type='text' placeholder='articleID' value={articleID} onChange={(evt) => setArticleID(evt.target.value)} />
//             </div>
//             <div>
//                 <input type='text' placeholder='title' value={title} onChange={(evt) => setTitle(evt.target.value)} />
//             </div>
//             <div>
//                 <input type='text' placeholder='publishDate' value={publishDate} onChange={(evt) => setPublishDate(evt.target.value)} />
//             </div>
//             <div>
//                 <input type='text' placeholder='authorNames' value={authorNames} onChange={(evt) => setAuthorNames(evt.target.value)} />
//             </div>
//             <div>
//                 <input type='button' value='add me!' onClick={add} />
//             </div>
//         </div>
//     )
// }

// export default AddArticleForm