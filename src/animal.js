function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};

Animal.prototype.growUp = function(){
  this.age ++;    //  based on comments to Brandon, should this be reworded?
};

Animal.prototype.feed = function(){
  if(this.awake === true){
    return "NOM NOM NOM";
  }
  else{
    return "I am asleep!";
  }
};

Animal.prototype.wakeUp = function(){
  if(this.awake === false){
    this.awake = true;
  }
};

Animal.prototype.sleep = function(){
  if(this.awake === true){
    this.awake = false;
  }
};

module.exports = Animal;