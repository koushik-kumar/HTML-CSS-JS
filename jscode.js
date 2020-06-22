class Computer {
    constructor(brand, memory, display, player, cost) {
        this.brand = brand;
        this._memory = memory;
        this.display = display;
        this.player = player;
        this.cost = cost;
    }
    get memory() {
        return this._memory;
    }
    basicSimple() {
        console.log("Purchase a basic computer");
    }
}
class upgradedComputer extends Computer {
    constructor(brand, memory, display, player, cost, bluetooth, gps, hdmi) {
        super(brand, memory, display, player, cost);
        this.bluetooth = bluetooth;
        this.gps = gps;
        this.hdmi = hdmi;
    }
    connectOther() {
        console.log("Connecting bluetooth devices");
    }
}
class mobileComputer extends upgradedComputer {
    constructor(brand, memory, display, player, cost, bluetooth, gps, hdmi, serviceNetwork, mobileInternetModule, dualcamera) {
        super(brand, memory, display, player, cost, bluetooth, gps, hdmi);
        this.serviceNetwork = serviceNetwork;
        this.mobileInternetModule = mobileInternetModule;
        this.dualcamera = dualcamera;
    }
    connectOther() {
        console.log("Connect through bluetooth, wifi, soundwaves, NFC");
    }
    videoConference() {
        console.log("Conferencing over videos");
    }
}
var alienware = new upgradedComputer("Dell", "1024GB", "1376", "yes", "900", "yes", "yes", "yes")
alienware.connectOther();
console.log(alienware.memory);
var ios = new mobileComputer("Apple", "128GB", "Retina", "yes", "1500", "yes", "yes", "yes", "yes", "yes");
ios.videoConference();
ios.connectOther();




// class Stylus {
//     constructor(name, manufacturer, cost, type, color, width) {
//         this.name = name;
//         this.manufacturer = manufacturer;
//         this.cost = cost;
//         this.type = type
//         this.color = color;
//         this.width = width;
//     }
//     changeColor(inkColor) {
//         this.color = inkColor;
//         return this.color;
//     }

//     paintNow(brushWidth) {
//         this.width = brushWidth;
//         return this.width;
//     }
// }

// class mobileStylus {
//     constructor(name, manufacturer, ) {
//         this.name = name;
//         this.manufacturer = manufacturer;
//     }
// }

// let surfaceStylus = new Stylus("SurfaceBookStylus", "Microsoft", "130$", "feather-touch", "white", "0.5mm");
// let noteNineStylus = new mobileStylus("Note9", "Samsung");
// let bothPurposeStylus = Object.assign({}, surfaceStylus, noteNineStylus);
// console.log(bothPurposeStylus);
// console.log(surfaceStylus.changeColor("Blue"));
// console.log(surfaceStylus.paintNow("4mm"));




// var text1 = '{"books":[' +
// '{"Name":"Fundamentals of Computer Architecture and Design","Author":"Ahmet Bindal", "Publisher" : "Springer International Publishing","ISBN" : "978-3-319-25811-9", "NoOfPages": "533"  },' +
// '{"Name":"Operating System Concepts","Author":"Abraham Silberschatz", "Publisher" : "Wiley","ISBN" : "978-1118129388", "NoOfPages" : "944"}]}';
// // var a={ 'a1':[{'hahr':23,'vin':3}], 'a2':35}
// // console.log(a.a1[0].vin)
// obj = JSON.parse(text1);
// console.log();









// var data = '{"books" : ['+
//     '{"Name" :"Fundamentals of Computer Architecture and Design", "Author" : "Ahmet Bindal", "Publisher" : "Springer International Publishing","ISBN" : "978-3-319-25811-9", "NoOfPages": 533 },'+
//     '{"Name" :"Operating System Concepts", "Author" : "Abraham Silberschatz", "Publisher" : "Wiley","ISBN" : "978-1118129388", "NoOfPages" : 944 }]}';

// var jsonObj = JSON.stringify(data);

// console.log(jsonObj.data);

// console.log(jsonObj.books[1]);
// console.log(jsonObj.books[2]);
// console.log(jsonObj.books[1]);


// var dates=["Eigth","15",31,"null"]
// var a=dates[0];
// var b=dates[1];
// var c=dates[2];
// var d=dates[3];

// console.log("First-value:"+a+"\t\tSecond-value:"+(b)+"\t\t\tThird-value:"+(c)+"\t\t\tFourth-value:"+(d));
// console.log("Type of First:"+typeof(a)+"\tType of Second:"+typeof(b)+"\tType of Third:"+typeof(c)+"\tType of Fourth:"+typeof(d));

// console.log("Type of b before conversion: "+b);
// console.log("Type of d before conversion: "+d);
// b = typeof(Number(b));
// d = typeof(Number(d));
// console.log("Type of b after conversion: "+b);
// console.log("Type of d after conversion: "+d);






// var leaseAmount = require('./defaultParams');
// rent = (leaseAmount.lease(5100,11))/77;
// var expenditure = (utilities = 150, rent=500) => (utilities+rent)*12;

// console.log("Total expenditure is "+expenditure(200,600)+" USD per annum");








// var Student={Course : ["273","240","220","180C","180A","180D", "257"], 
//              Class:["ENG189", "ENG337", "CLARK335", "CLARK225", "BOCARDO223", "BOCARDO230", "BOCARDO125"]}

// var Output1=[];
// var Output2=[];
// var Output3=[];
// for(var i=0;i<Student.Course.length;i++){
//     if((typeof Student.Class[i]!=null) && Student.Class[i].includes("ENG")){
//         Output1.push(Student.Course[i]);        
//     }
// }
// (Output1.length>0)? console.log("Classes in Engineering  Building are: "+Output1):console.log("No classes")
// for(var i=0;i<Student.Course.length;i++){
//     if((typeof Student.Class[i]!=null) && Student.Class[i].includes("CLARK")){
//         Output2.push(Student.Course[i]);        
//     }
// }
// (Output2.length>0)? console.log("Classes in Clark Hall are: "+Output2):console.log("No classes")
// for(var i=0;i<Student.Course.length;i++){
//     if((typeof Student.Class[i]!=null) && Student.Class[i].includes("BOCARDO")){
//         Output3.push(Student.Course[i]);        
//     }
// }
// (Output3.length>0)? console.log("Classes in Bocardo Building are: "+Output3):console.log("No classes")