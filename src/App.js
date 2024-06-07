import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p> first  react test case</p>
      <p>  test case</p>

     <input type="text" id="userid" name="shubh" placeholder="enter your name" />


       <img style={{width:"50%"}} title='sunset' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEHVBxUKt5OZvCgElQ2vSeIaoS_lAGIXC9T05KzvZc7A&s' />
    </div>
  );
}

export default App;



// ---------test onchange event with input box------




// import { useState } from 'react';
// import './App.css';
// import User from './User';
// import Sum from './Multiple';

// function App() {
//   const [data, setData] = useState('')

//   return (
//     <div className='App'>
//       {/* <User /> */}
//       {/* <Sum/> */}
//       <h1> test onchange evet with input text </h1>
//       <input type='text' value={data} onChange={(e) => setData(e.target.value + "test")} />
// {/* 
//        <button onClick={() => setData("updata data")}>update data</button>
//       <h1>{data}</h1>  */}

//     </div>
//   )
// }
// export default App



// import React, { useState } from 'react';

// function App() {
//   const [value, setValue] = useState('');

//   const handleChange = (event) => {
//     setValue(event.target.value + 'test');
//   };

//   return (
//     <input
//       type="text"
//       role="textbox"
//       value={value}
//       onChange={handleChange}
//     />
//   );
// }

// export default App;
