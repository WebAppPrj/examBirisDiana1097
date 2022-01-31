import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StaticRouter } from 'react-router'
import { useEffect, useState } from 'react';
import DBstore from './components/Articles/DBstore'
import Reference from './components/Articles/Reference';
import AddReferenceForm from './AddReferenceForm'
import AllReferences from './components/AllReferences';

function App() {

  const [ids, setIds] = useState([])

  const [references, setReferences] = useState([])

  useEffect(() => {
    DBstore.getReferences();
    DBstore.emitter.addListener('GET_REFERENCES_SUCCESS', () => {
      setIds(DBstore.data)
    })
  }, [])


  const addReference = (reference) => {
    DBstore.addReference(reference)
}

  return (
    <>
      <h1>Web tech exam</h1>
      <a href = "/3">Press this</a>
      
        {/* <Routes>
          {ids.map((reference) => {
            let id = reference.ReferenceID
            return <Route path={"/" + id} element={<Reference key={reference.ReferenceID} member={reference} />} />
          })}
        </Routes> */}

        <Routes>
          <Route path="/" exact={true} element={AllReferences}/>
              
        </Routes>



        <h3>Add an article</h3>
        <AddReferenceForm onAdd={addReference} />

    </>
  );

}

export default App;
