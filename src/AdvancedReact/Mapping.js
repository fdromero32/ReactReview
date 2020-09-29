// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const doubled = nums.map((num) => num *2)

// // console.log(doubled)

// // jokes data:
// const jokesData = [
//   {
//       id: 1,
//       punchLine: "It’s hard to explain puns to kleptomaniacs because they always take things literally."
//   },
//   {
//       id: 2,
//       question: "What's the best thing about Switzerland?",
//       punchLine: "I don't know, but the flag is a big plus!"
//   },
//   {
//       id: 3,
//       question: "Did you hear about the mathematician who's afraid of negative numbers?",
//       punchLine: "He'll stop at nothing to avoid them!"
//   },
//   {
//       id: 4,
//       question: "Hear about the new restaurant called Karma?",
//       punchLine: "There’s no menu: You get what you deserve."
//   },
//   {
//       id: 5,
//       question: "Did you hear about the actor who fell through the floorboards?",
//       punchLine: "He was just going through a stage."
//   },
//   {
//       id: 6,
//       question: "Did you hear about the claustrophobic astronaut?",
//       punchLine: "He just needed a little space."
//   }
// ]

// function App() {
//   const jokeComponents = jokesData.map(joke =>
//       <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

//   return (
//     <>
//       {jokeComponents}
//     </>
//   )
// }

// // Mapping Practice

// import React from "react"
// import productsData from "./vschoolProducts"
// import Product from './Product'

// function App() {
//     const productComponent = productsData.map((item) => {
//         <Product key={item.id} name={item.name} price={item.price} description={item.description} />
//     })
//   return (
//     <div>
//         {productComponent}
//     </div>
//   )
// }

// export default App

// ReactDOM.render(<App />, document.getElementById('root'))

// const products = [
//   {
//       id: "1",
//       name: "Pencil",
//       price: 1,
//       description: "Perfect for those who can't remember things! 5/5 Highly recommend."
//   },
//   {
//       id: "2",
//       name: "Housing",
//       price: 0,
//       description: "Housing provided for out-of-state students or those who can't commute"
//   },
//   {
//       id: "3",
//       name: "Computer Rental",
//       price: 300,
//       description: "Don't have a computer? No problem!"
//   },
//   {
//       id: "4",
//       name: "Coffee",
//       price: 2,
//       description: "Wake up!"
//   },
//   {
//       id: "5",
//       name: "Snacks",
//       price: 0,
//       description: "Free snacks!"
//   },
//   {
//       id: "6",
//       name: "Rubber Duckies",
//       price: 3.50,
//       description: "To help you solve your hardest coding problems."
//   },
//   {
//       id: "7",
//       name: "Fidget Spinner",
//       price: 21.99,
//       description: "Because we like to pretend we're in high school."
//   },
//   {
//       id: "8",
//       name: "Sticker Set",
//       price: 14.99,
//       description: "To prove to other devs you know a lot."
//   }
// ]

// export default products

// // Product

// import React from "react"

// import React from "react"

// function Product(props) {
//     return (
//         <div>
//             <h2>{props.name}</h2>
//             <p>${props.price}</p>
//             <h3>{props.description}</h3>
//         </div>
//     )
// }

// // export default Product
