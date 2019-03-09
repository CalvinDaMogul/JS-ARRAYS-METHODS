console.log("Hello World");

const strugglebus = [];

const addPassenger = (name, wallet, isStruggling, seat) => {
//Make a passenger object
//Add it on the bus
const passenger = {
    name: name,
    wallet: wallet,
    isStruggling: isStruggling
  };
  if(seat==='back') {
    strugglebus.push(passenger);
  }
  else if (seat==='front') {
      strugglebus.unshift(passenger);
  }
//   else if (seat === 'middle') {
//       strugglebus.splice(passenger);
//   }
};

const unloadPassenger = (bus, seat) => {
    //remove a passenger from the bus
    //return the passenger object
    if (seat === 'front') {
      return bus.shift();
    }
 else if (seat === 'back') {
    return bus.pop();
 }
        
};

const allAboard = (bus) => {
    //loop over the passengers
    //given the bus costs 5 bucks
    //if the passenger can afford it, charge them
    //if NOT kick them off the bus
    const busFare = 5;
    const validPassengers = [];

    bus.forEach((passenger) => {
        if(passenger.wallet >= busFare) {
            passenger.wallet -= busFare;
            validPassengers.push(passenger);
            
        };
    });
    return validPassengers;
};

const printDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = HTML = textToPrint;
};

const busBuilder = (bus) => {
    //build domString from the bus parameter
    let domString = '';
    for(let i = 0; i < bus.length; i++) {
    domString += `<div class="bus-seat">`;
    domString += `<h4>${bus[i].name}</h4>`;
    domString += `<p>${bus[i].wallet}</p>`;
    domString += `<p>${bus[i].isStruggling}</p>`;
    domString += `</div>`;
};
printDom('the-bus', domString);
};



const init = () => {
    addPassenger('Calvin', 3, true, 'back');
    addPassenger('Lakia', 6, false, 'front');
    addPassenger('David', 4, true, 'back');
    addPassenger('Sean', 1, true, 'front');
    addPassenger('Kenny', 5, true, 'back');
    addPassenger('21 Savage', 65, true, 'back');

    const firstPassenger = unloadPassenger(strugglebus, 'front');
    console.log(firstPassenger);

    const busPeople= allAboard(strugglebus);

    busBuilder(strugglebus);
    busBuilder(busPeople);
    console.log(strugglebus);

};

init();