import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

 ReactDOM.render(<App/>, document.getElementById('root'));

// ----------------Section 2 Examples on js classes and inheretence------------------
class animal{
 
	constructor(name,age){
		this.name = name;
		this.age = age;
	}

	speak(){
		console.log("I am", this.name, "my age is", this.age, "year old")
	}
}

const animal1 = new animal('Simba', 8)

animal1.speak();


class lion extends animal{
	constructor(name,age, furColor, speed){
		super(name,age);
		this.furColor = furColor;
		this.speed = speed;
	}

	roar(){
	   console.log("I am", this.name,"my fur is ", this.furColor, " and speed is", this.speed, "mph :)")
	}
}

const lion1 = new lion('Mufasa', 40, "brown","fasssst");
lion1.roar();
lion1.speak();
console.log(lion1)

