
// - `awake` - should default to `false`

function Animal(name, age, kind) {
    this.name = name;
    this.age = age;
    this.kind = kind;
    this.awake = false;
}

Animal.prototype.oink = function(oink) {
    if(this.kind === "pig") {
        return "oink";
    } else {
        return "Sorry, I'm not a pig";
    }
    };

Animal.prototype.growUp = function(age) {
    if(this.kind === "growUp") {
        growUp = age + 1;
        return growUp;
    } else  {
        growUp = growUp;
    }
    };

Amimal.prototype.feed = function () {
    if(this.kind === "awake") {
        return "NOM NOM NOM";
    }
    };

Animal.prototype.wakeUP = function () {
    if(this.awake === "true") {
        DO SOMETHING;
    }
};

Animal.prototype.sleep = function () {
    if (this.kind === "false") {
        DO SOMETHING
    }
};

