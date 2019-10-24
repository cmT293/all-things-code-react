import React, { Component } from 'react';
//"COMPONENT" LEGO BRICKS OF THE APPLICATION - THE PIECES MAKE THE WHOLE


// ----------------Section 2 Examples on js classes and inheretence 

class regularClass{}

class extendsClass extends Component{}

const regularClassInstance = new regularClass();
const extendsClassInstance = new extendsClass();

console.log("reg", regularClassInstance);
console.log("extends", extendsClassInstance);




class App extends Component {

	constructor(){
		super()
		this.state={displayBio: true};

	}

render(){
	var test = "new"
	return test
}
	

		// render(){
		// const bio = this.state.displayBio ? ( 
		// 	<div>
  // 			<p style="margin-top:20px;"><strong>This is my bio</strong></p>
		// 	<p>I like things that tick</p>
		// 	<p>yep thats it</p>
		// 	</div>
		// 	) : null;

 	// 		return(
		// 	<div>
		// 	<h1>Cory Thomas</h1>
		// 	<p>This is a test account</p>
		// 	<p>nice.... ok i see</p>
		// 	<p> I have to get sublime colors working correctly</p>
		// 	{bio}
		// 	</div>
		// 	)
	 // }
}

export default App;