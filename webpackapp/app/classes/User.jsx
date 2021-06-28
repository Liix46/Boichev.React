import React from 'react';

export default class User extends React.Component {
    _firstName = "";
    _lastName = "";
    _age = '0';
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
        this._age = value;
    }

    get aboutme() {
        return this._aboutMe;
    }
    set aboutme(value) {
        this._aboutMe = value;
    }
}
