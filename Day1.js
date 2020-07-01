// http://latentflip.com/loupe

var technical = 
{
	dimensions : {
		length : 3500,
		width : 1600,
		height : 1490,
		wheelbase : 2360,
		trackWidth : {
			front : 1405,
			rear : 1400
		},
		minimumTurningRadius : 4.5,
		minimumGroundClearance : 170
    },
    capacities : {
    	seatingCapacity : 5,
    	fuelTankCapacity : 35
    },
    engine : {
    	type : "KB-Series",
    	numberOfCylinders : 3,
    	numberOfValves : 12,
    	capacity : 998,
    	boreXstroke : "73.0 x 79.5",
    	compressionRatio : "10:1",
    	maximumPower : "67 / 6200",
    	maximumTorque : "90 / 3500",
    	fuelDistribution : "Multipoint injection"
    },
	transmission : {
		type : "5-speed MT"
	},
	chassis : {
		steering : "Rack & Pinion,Power assisted",
		brakes : {
			front : "Ventilated discs",
			rear : "Drums"
		},
		suspension : {
			front : "MacPherson strut & coil spring",
			rear : "Isolated trailling & coil spring"
		},
		shockAbsorbers : "Gas filled",
		tyre : "155/80R13"
	},
	weights : {
		kerbWeight : "860-880",
		grossVehicleWeight : "1320"
	}
};

console.log(technical);
//////////////////////////////////////////////////////
var library = [
{
	title : "Javascript",
	price : 500,
	readers : [
		{
			name : "Person 1",
			count : 300
		},
		{
			name : "Person 2",
			count : 400
		}
	],
	authorDetails : {
		name : "Raj",
		age : 40,
		email : "email1@gmail.com"
	}
},
{
	title : "NodeJs",
	price : 600,
	readers : [],
	authorDetails : {
		name : "Raj",
		age : 40,
		email : "email2@gmail.com"
	}
}
];

library[0].readers[1].count = 600;
library[0].readers.push({name : "Person3",count : 500});
library.push({
	title : "SQL",
	price : 500,
	readers : [],
	authorDetails : {
		name : "Vivek",
		age : 45,
		email : "email3@gmail.com"
	}
});

console.log(library);
console.log(typeof(library[0].authorDetails.age));
///////////////////////////////////////////////////////////////////////

let func = (a,b) => a + b;
var a = Number(prompt("enter a variable",0));
let b = Math.floor(Math.random() * 11);
let result = func(a,b);
console.log(a);
console.log(b);
console.log(result);

///////////////////////////////////////////////////////////////////////

function countDown(fun){
	for(let i = 10 ; i >= 1 ; i--)
	console.log(i);
	fun("Happy Birthday");
}

countDown(function(message){
	console.log(message);
});
	
//////////////////////////////////////////////////////////////////
