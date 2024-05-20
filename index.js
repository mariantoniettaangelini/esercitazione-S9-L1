// class USER
var User = /** @class */ (function () {
    function User(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    User.prototype.ricarica = function (ammontare) {
        this.credito += ammontare;
        console.log('Il nuovo credito è: ' + this.credito + '$');
        return this.credito;
    };
    User.prototype.chiamata = function (minuti) {
        var costoAlMinuto = 0.2;
        var costoChiamata = minuti * costoAlMinuto;
        this.numeroChiamate += minuti;
        this.credito -= costoChiamata;
        console.log('Il credito residuo è ' + this.credito + '$');
        return this.credito;
    };
    User.prototype.chiama404 = function () {
        console.log('Il credito disponibile è ' + this.credito + '$');
        return this.credito;
    };
    User.prototype.getNumeroChiamate = function () {
        console.log('La telefonata è durata ' + this.numeroChiamate + 'minuti');
        return this.numeroChiamate;
    };
    User.prototype.azzera = function () {
        this.numeroChiamate = 0;
        console.log('Minuti azzerati' + this.numeroChiamate);
    };
    return User;
}());
var user = new User('Mario', 'Rossi');
user.ricarica(10);
user.getNumeroChiamate();
user.chiamata(5);
user.chiama404();
user.azzera();
