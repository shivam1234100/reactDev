/*

    <div id = "parent">
        <div id = "child">
            <h1>I am h1 tag</h1>
            <h2>I am h2  tag</h2>
        </div>
        <div id = "child2">
            <h1>I am h1 tag</h1>
            <h2>I am h2  tag</h2>
        </div>
    </div>
    

    ReactElement(object) => HTML(Browser Understands )
*/

const parent = React.createElement("div",{id: "parent"},[
    React.createElement("div",{id: "child"}, [
    React.createElement("h1", {}, "I am h1 tag"), 
    React.createElement("h2", {}, "I am h2  tag")
 ]),
    React.createElement("div",{id: "child2"}, [
    React.createElement("h1", {}, "I am h1 tag"), 
    React.createElement("h2", {}, "I am h2  tag")
 ])
]); 

const heading = React.createElement(
 "h1",
 {id: "heading"},
 "Hello World from React!"
 ); //creating h1 element inside react

 console.log(parent); // object 

const root = ReactDOM.createRoot(document.getElementById("root")); // created a root for react libary 

root.render(parent); // rending the parent inside the root tag