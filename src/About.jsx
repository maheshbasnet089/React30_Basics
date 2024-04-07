// import { useState } from "react"
// import Button from "./Button"

// function About(){
// //     const state = useState("Manish")
// //    const firstItem = state[0]
// //     const secondItem = state[1]
// // var count = 0 
// // const state = useState(0)
// // const firstItem = state[0]
// // const secondItem = state[1]
//  const [number,setNumber] =  useState(0)


// const increaseCount = ()=>{
//    setNumber(number + 1)
// }
//     return ( 
//        <div>
//         <h1>{number}</h1>
//         <button onClick={increaseCount}>+</button>
//        </div>
//     )

// }

// export default About


import { useState } from "react"

const About = () => {

  const [number, setNumber]= useState([
    {
        name : "Manish Basnet",
        address : "Itahari"
      },
      {
        name : "Manish Basnet",
        address : "Itahari"
      }
  ])
  const increaseCount =()=>{
    setNumber(number+1)
  }
  const decreaseCount =()=>{
    setNumber(number-1)
  }
  // useState()
  return (
    <div>
        <h2>{number.name}</h2>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
    </div>
  )
}

export default About
