class transportbyCar {
    constructor(carname, vehiclemodelNo, vehiclepaintcolor, travellingbySpeed=0){
        this.carname=carname;
        this.vehiclemodelNo=vehiclemodelNo;
        this._vehiclepaintcolor=vehiclepaintcolor;       
        this.nowspeed=travellingbySpeed;
    }
    get vehiclepaintcolor(){
        return this._vehiclepaintcolor;
    }
    velocity(userspeed){
            this.nowspeed+=userspeed;
            return this.nowspeed;
    }
  }
  
  let kous = new transportbyCar("Camaro","Petrol","CamoroRed",120);
  console.log(kous.vehiclepaintcolor);
