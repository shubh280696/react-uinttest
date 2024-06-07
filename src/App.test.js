import { render, screen } from '@testing-library/react';
import App from './App';


test('first test react app case-2', () => {
  render(<App />);
  const text = screen.getByText(/first React test case/i)
  const text2 = screen.getByText("test case")
  const title = screen.getByTitle('sunset')
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(title).toBeInTheDocument();

})

test('the second test case', () => {
  render(<App />);
  let checkInput = screen.getByRole('textbox');
  let checkInputPlaceHolder = screen.getByPlaceholderText("enter your name")
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceHolder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "shubh")
  expect(checkInput).toHaveAttribute("id", "userid")
  expect(checkInput).toHaveAttribute("type", "text")


})

describe("UI test case group", () => {

  test(" api atest case 1", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name", "shubh")

  })
  test("api  test case 2", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name", "shubh")

  })

})



// // ------ test onchange evet with input text---------

// // import { fireEvent, render, screen } from '@testing-library/react';
// // import App from './App';

// //  beforeEach(()=>{
// //    console.log("*****before each hook")
// //   })
// // test("on change evet testing", () => {
// //   render(<App />)
// //   let input = screen.getByRole("textbox")
// //   fireEvent.change(input, { target: { value: 'shubh' } })
// //   expect(input.value).toBe('shubhtest')
// // })

// // describe("UI test case group", () => {


// //   test("on change evet testing 1", () => {
// //     render(<App />)
// //     let input = screen.getByRole("textbox")
// //     fireEvent.change(input, { target: { value: 'shubh' } })
// //     expect(input.value).toBe('shubhtest')
// //   })

// //   test("on change evet testing 2", () => {
// //     render(<App />)
// //     let input = screen.getByRole("textbox")
// //     fireEvent.change(input, { target: { value: 'shubh' } })
// //     expect(input.value).toBe('shubhtest')
// //   })

//   // test("on change evet testing 3", () => {
//   //   render(<App />)
//   //   let input = screen.getByRole("textbox")
//   //   fireEvent.change(input, { target: { value: 'shubh' } })
//   //   expect(input.value).toBe('shubhtest')
//   // })
 
// // })


// // test("button click event ",()=>{
// // render(<App/>);
// // const btn = screen.getByRole('button');
// // fireEvent.click(btn);
// //   expect(screen.getByText("updata data")).toBeInTheDocument()

// // })


// // --------------class componet test testing  -------

// import User from './User';
// import renderer from 'react-test-renderer'

// test(" class componete method  testing ",()=>{
//   const componentData= renderer.create(<User />).getInstance();  
//   expect (componentData.getUserList("shubh")).toMatch("shubh")
//   // console .log (componentData)

// })  


// //  ------functional  componet  method  testing



// import { fireEvent, render, screen } from '@testing-library/react';
// import App from './App';

// // Before each hook for all tests
// beforeEach(() => {
//   console.log("*****before each hook");
// });

// test("on change event testing", () => {
//   render(<App />);
//   let input = screen.getByRole("textbox");
//   fireEvent.change(input, { target: { value: 'shubh' } });
//   // Ensure the expected value matches what the App component logic sets
//   expect(input.value).toBe('shubhtest');
// // });
// import { render, screen ,fireEvent} from '@testing-library/react';
// import App from './App';

// describe("UI test case group", () => {
//   beforeEach(() => {
//     console.log("*****before each test in UI test case group");
//   });

//   test("on change event testing 1", () => {
//     render(<App />);
//     let input = screen.getByRole("textbox");
//     fireEvent.change(input, { target: { value: 'shubh' } });
//     expect(input.value).toBe('shubhtest');
//   });

//   test("on change event testing 2", () => {
//     render(<App />);
//     let input = screen.getByRole("textbox");
//     fireEvent.change(input, { target: { value: 'shubh' } });
//     expect(input.value).toBe('shubhtest');
//   });
// });

