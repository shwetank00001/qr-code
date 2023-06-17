import QRCode from "react-qr-code";
import React from 'react';


function App() {


  const [data, setData] = React.useState('')
  const [text, setText] = React.useState('')



  function handleSubmit(e){
    e.preventDefault()
    console.log({data})
    setText(data)

  }


  return (
    <div className="App">
      <QRCode value={text}/>
      <form onSubmit={handleSubmit}>
        <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
        <button >Generate</button>
      </form>
    </div>
  );
}

export default App;
