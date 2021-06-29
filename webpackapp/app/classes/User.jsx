import React from 'react';
//добавить state id
export default class User extends React.Component {
    _firstName = "";
    _lastName = "";
    _age = "";
    _email = "";
    _password = "";
    _dateOfBirth = "";
    _gender = "";
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

    get email() {
        return this._email;
    }
    set email(value){
        this._email = value;
    }
    get password() {
        return this._password;
    }
    set password(value){
        this._password = value;
    }
    get dateOfBirth() {
        return this._dateOfBirth;
    }
    set dateOfBirth(value){
        this._dateOfBirth = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value){
        this._gender = value;
    }

    get aboutme() {
        return this._aboutMe;
    }
    set aboutme(value) {
        this._aboutMe = value;
    }
}
