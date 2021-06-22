
class User {
    _firstName = "";
    _lastName = "";
    _age = 0;
    _aboutMe = "";
    get firstname() {
        return this._firstName;
    }

    set firstname(value) {
        this._firstName = value;
    }
    get lastname() {
        return this._lastName;
    }

    set lastname(value) {
        this._lastName = value;
    }
    get age() {
        return this._age;
    }

    set age(value) {
        if (value <0) {
            return;
        }
        this._age = value;
    }
    get aboutMe() {
        return this.aboutMe;
    }

    set aboutMe(value) {
        this._aboutMe = value;
    }
}

let user = new User();

module.exports = user;