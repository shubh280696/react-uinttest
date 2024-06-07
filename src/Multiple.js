

// import React from 'react'

// function Sum() {

//   return (
//     <>
//     <h1> RTL qurey getbytext and getallbytext</h1>
//     <button>login</button>
//     <p className='shubh'> p tag testing</p>
//     <h1> shubh here</h1>
//     <h1> shubh here</h1>
//     <h1> shubh here</h1>

//     </>
//   )
// }

// export default Sum

//  ----------- multiple input label  button  checkbox ------------
import React, { useState } from 'react'

function Sum() {
    const [data, setData] = useState("")

    // const handleData = () => {
    //     setData("shubh chaudhari")
    // }
    return (
        <>
            <h1>    multiple </h1>
            <button>click me 1</button>
            <button>click me 2</button>
            <label htmlFor='input1'>User Name</label>
            <input type='text' id='input1' />
            <label htmlFor='input2'>User Age</label>
            <input type='text' id='input2' />


            <label htmlFor='user-name1'>userName</label>
            <input type='text' id='user-name1' defaultValue={'shubh'} />
            <label htmlFor='user-name2'>userName</label>
            <input type='text' id='user-name2' defaultValue={'shubh'} />
            <label htmlFor='user-name3'>userName</label>
            <input type='text' id='user-name3' defaultValue={'shubh'} />
            <br />

            <label htmlFor='skill1'>skills</label>
            <input type='text' id='skill1' defaultChecked={true} />

            <label htmlFor='skill2'>skills</label>
            <input type='text' className='bg' id='skill2' defaultChecked={true} />

            <label htmlFor='skill3'>skills</label>
            <input type='text' id='skill3' defaultChecked={true} />
        </>
    )
}

export default Sum;
