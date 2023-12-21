import React , {useState , useEffect} from "react"
import NavBar from "./components/global/NavBar"
import Results from "./components/Results"
import Footer from "./components/global/Footer"
import { Route , Routes } from "react-router-dom"
import Contact from "./components/Contact"
import About from "./components/About"
function App() {
  const [input, setInput] = useState("")  
  const [click , setClick] = useState(false)
  const [data , setData] = useState({
    list: [],
    loading : false ,
    error : false
  })
  const handleText = (event)=>{
    setInput(event.target.value)
    }

useEffect(()=>{
  setData(
    {
      list: [],
      loading : true ,
      error : false
    }
  )
  const apiKey = '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';
  const apiUrl = 'https://api.openai.com/v1/images/generations';
  const requestBody = {
    "prompt": input,
    "n": 3,
    "size": '256x256'
  };
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(
      requestBody
      )
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if(data.error){
        setData({
          list: [],
          loading : false ,
          error : true
        })
      }else{
        setData({
          list: data.data,
          loading : false ,
          error : false
        })
      }
      
    }
    
    )
    .catch(error => {
      setData({
        list: [],
        loading : false ,
        error : true
      })
      console.error('Error:', error.message);
    });
  
},[click])

    const handelClick = (e)=>{
      
      setClick(!click)
    }

  return (

    <>
    <NavBar />
    <div className='InputContainer'>
    <h1 className="Logo">Youxo Bot <span className='badge'>V1</span></h1>
    <p>Imagine or Edit any Photo You want with me 🍉</p>
    <div className='Input'> 
    <input type='text' onChange={handleText} placeholder='What do you want to generate... ?' /> 
    <button onClick={handelClick}>Draw</button>
    </div>
    </div>

<Routes >
<Route path="/" element={<Results images={data} />} />
<Route path="/about" element={<About />} /> 
<Route path="/contact" element={<Contact />} /> 
</Routes>


    <Footer/>
    </>
  )
}

export default App
