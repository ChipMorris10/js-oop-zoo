var Animal = require("./animal");

function Zoo(name, location, status, animals){
  this.name = name;
  this.location = location;
  this.status = 'closed';
  this.animals = [];
}

Zoo.prototype.changeLocation = function(location){
  this.location = location;
};

Zoo.prototype.open = function(){
  // if(this.status === 'closed'){
    this.status = 'open';  // is this necessary? Yusef's code
  }
};

Zoo.prototype.close = function(){
  // if(this.status ==='open')
    this.status = 'closed';      // is this necessary? Yusef's code
};

Zoo.prototype.isOpen = function(){
  if(this.status === 'open')
    return "Open!";
};

Zoo.prototype.addAnimal = function(animal) {
  if (this.status === "open") {
    if (this.animals.indexOf(animal) === -1 && animal instanceof Animal) {  // we struggled with this. I think we copied someone's code
        this.animals.push(animal);
        return true;
    }
  }
  else {
    return false;
  }
};

Zoo.prototype.removeAnimal = function(animal){
  if(this.status === 'open' && this.animals.indexOf(animal) !== -1) {
    this.animals.splice(this.animals.indexOf(animal, 1));
    return true;
  }
  else {
    return false;
  }
};


module.exports = Zoo;