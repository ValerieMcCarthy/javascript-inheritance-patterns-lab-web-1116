

function Point(x, y){
	this.x = x
	this.y = y
}

Point.prototype.toString = function(){
	return `(${this.x}, ${this.y})`
}

function Side (length){
	this.length = length
}

function Shape(){

}

Shape.prototype.addToPlane = function(x,y){
	this.position = new Point(x,y)
}

Shape.prototype.move = function(x,y){
	this.position = new Point(x,y)
}

function Circle (radius){
	Shape.call(this);
	this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function(){
	return(this.radius*2)
}

Circle.prototype.area = function(){
	return(Math.PI * this.radius^2)
	//return(Math.PI*Math.pow(this.radius,2))
	//return(Math.PI*this.radius*this.radius)
}

Circle.prototype.circumference = function(){
	return(Math.PI*this.radius*2)
}

function Polygon (sides){
	Shape.call(this)
	this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon
Polygon.prototype.perimeter = function(){
	var p = 0
	this.sides.forEach(side =>{
		p +=side.length
	})
	return(p)
}

Polygon.prototype.numberOfSides = function(){
	return(this.sides.length)
}

function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength){
	Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength), new Side(sideFourLength)])
	// I thought call takes list, not array! ??
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle(sideOneLength, sideTwoLength, sideThreeLength){
	Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

function Rectangle(width, height){
	Quadrilateral.call(this, width, height, width, height)
	this.width = width
	this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function(){
	return(this.width*this.height)
}

function Square (side){
	Rectangle.call(this, side, side)
	this.side = side
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.listProperties = function(){
	var properties_list = ""
	for (var property in this){
		if (this.hasOwnProperty(property)){
			properties_list += "this." + property + "=" + this[property]
		}
	
	}
	return(properties_list)

}











// function Rectangle(sides, width, height) {
//   this.sides = sides;
//   this.width = width;
//   this.height = height;
//   this.area = function() {
//     return this.width * this.height;
//   }
//   this.perimeter = function() {
//     return (this.width + this.height) * 2;
//   }
// }

