// import { fireEvent, render,screen } from "@testing-library/react";
// import Sum from "./Sum";





// test(" basic sum of function ",()=>{
// let a=10;
// let b=20;
// let output=30;
//     expect(Sum(a,b)).toBe(output);
// });
// test(" basic sum of function 2 ",()=>{
//     let a=10;
//     let b=20;
//     let output=30;
//         expect(Sum(a,b)).toBe(output);
//     });

// import { fireEvent, render,screen } from "@testing-library/react";
// import Sum from "./Sum";


//     test("functionl componenet testing ",()=>{  
//      render(<Sum />);
//      const btn=screen.getByTestId('btn1');
//      fireEvent.click(btn);
//      expect(screen.getByText("shubh chaudhari")).toBeInTheDocument();
//     })


// import React from 'react';
// import { render, fireEvent, screen } from '@testing-library/react';
// import Sum from './Sum'; // Assuming Sum is your functional component

// test("functional component testing", () => {
//   render(<Sum />);
  
//   // Simulate a click on a button with data-testid "btn1"
//   const btn = screen.getByTestId('btn1');
//   fireEvent.click(btn);
  
//   // Expect "shu" text to be in the rendered component after clicking the button
//   expect(screen.getByText("shu")).toBeInTheDocument();
// });




// test("get by role ",()=>{
//     render(<Sum/>)
//     const input=screen.getByRole('textbox')
//     const btn=screen.getByRole('button')
//     expect (input). toBeInTheDocument()
//     expect(btn).toBeInTheDocument()
// })

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Sum from './Sum'; // Assuming Sum is your functional component

// test("get by role and check value", () => {
//   render(<Sum />);
  
//   // Get the input textbox by role
//   const input = screen.getByRole('textbox');

//   // Get the button by role
//   const btn = screen.getByRole('button',{name:'click me'}); // multiple button use this 

//   // Check that the input element is present in the document
//   expect(input).toBeInTheDocument();

//   // Check that the input element has an initial value of 'hello'
//   expect(input).toHaveValue('hello');

//   // Check that the button is present in the document
//   expect(btn).toBeInTheDocument();
// });


// -----multiple Element with role----
 
import React from 'react';
import { render, screen } from '@testing-library/react';
import Sum from './Multiple';

test("multiple elements with role and name", () => {
  render(<Sum />);
  
  // Get elements by role and name
  const btn1 = screen.getByRole("button", { name: 'click me 1' });
  const btn2 = screen.getByRole("button", { name: 'click me 2' });
  const input1 = screen.getByRole('textbox', { name: 'User Name' });
  const input2 = screen.getByRole('textbox', { name: 'User Age' });

  // Check that each element is present in the document
  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();
  expect(input1).toBeInTheDocument();
  expect(input2).toBeInTheDocument();
});


// ------------------ multiple element  testing label------
test("multi element ",()=>{
  render(<Sum/>)
  const input=screen.getAllByLabelText("userName")

  for(let i=0; i>length;i++){

    expect (input[i]).toBeInTheDocument()
    expect (input[i]).toHaveValue("shubh")
  }
})
test("check box element ",()=>{
  render(<Sum/>)
  const checkbox=screen.getAllByLabelText("skills")
  // const checkbox2=screen.getAllByTestId("skill1")
  //  expect (checkbox2).toHaveClass('bg')
  for(let i=0; i>checkbox;i++){

    expect (checkbox[i]).toBeInTheDocument()
  }
})




