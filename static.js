class Vehicle {
    constructor(VehicleName, VehiclemodelNo, PrefferencedColour, speedofTheCar=0){
        this.VehicleName=VehicleName;
        this.VehiclemodelNo=VehiclemodelNo;
        this.PrefferencedColour=PrefferencedColour;       
        this.speedofTheCar=speedofTheCar;
    }
    velocamoro(speedMentioned){
            this.speedofTheCar+=speedMentioned;
            return this.speedofTheCar;
    }
    braking(brakingPower){
            this.speedofTheCar-=brakingPower;
            if(this.speedofTheCar==0){
                Vehicle.lightsoffplease();
            }
            return this.speedofTheCar;
    }
    static lightsoffplease(){
        console.log("Lights were offed!");
    }
  }
  let royMustang = new Vehicle("camoro","Chevrolet","red",120);
  console.log(royMustang.velocamoro(40));
  royMustang.braking(160);
  console.log(royMustang.speedofTheCar); 
