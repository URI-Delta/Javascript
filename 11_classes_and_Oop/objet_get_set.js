const user = {
    _email : 'h@hc.com',
    _password : 'h@hc',


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// let chai = new user ("chai@gmail.com",'abcd')

let tea = Object.create(user)

console.log(tea.email);
