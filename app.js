//Hello World from JS

const heading=document.createElement("h1");
heading.innerHTML="Hello World from Javascript";
const root=document.getElementById('root');
root.appendChild(heading);

// Hello World from REACT
const heading1=React.createElement("h1",{id:'heading'},"Hello World from REACT");

const root1=ReactDOM.createRoot(document.getElementById("root"));

 //root1.render(heading1);
// root1.render(heading)

/**
 *     <div id='parent'>
 *             <div id='child'>
 *                <h1></h1>
 *            </div>
 *    </div>
 */

const parent = React.createElement("div",{id:'parent'},
            React.createElement("div",{id:'child'},
                [React.createElement("h1",{id:'baby'},"Hii from h1"),heading1]));

root1.render(parent);
//console.log(parent,heading1)