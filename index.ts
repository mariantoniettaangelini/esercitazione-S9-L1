// Interfaccia 
interface Smartphone {
    ricarica(ammontare:number):number;
    chiamata(minuti:number):number;
    chiama404():number;
    getNumeroChiamate():number;
    azzera():void;
}

// class USER
class User implements Smartphone {
    nome:string;
    cognome:string;
    private credito:number;
    private numeroChiamate:number

    constructor(nome:string, cognome:string){
        this.nome= nome;
        this.cognome= cognome;
        this.credito=0;
        this.numeroChiamate=0;
    }
    ricarica(ammontare: number): number {
        this.credito+=ammontare;
        console.log('Il nuovo credito è: ' + this.credito + '$')
        return this.credito;
        
    }
    chiamata(minuti: number): number {
        const costoAlMinuto= 0.2
        const costoChiamata = minuti*costoAlMinuto
        this.numeroChiamate+=minuti;
        this.credito -= costoChiamata  
        console.log('Il credito residuo è ' +this.credito+ '$')
        return this.credito;
    }
    chiama404(): number {
        console.log('Il credito disponibile è ' + this.credito + '$')
        return this.credito
    }
    getNumeroChiamate(): number {
        console.log('La telefonata è durata ' + this.numeroChiamate + 'minuti')
        return this.numeroChiamate;
    }
    azzera(): void {
        this.numeroChiamate=0;
        console.log('Minuti azzerati' + this.numeroChiamate)
    }
}

const user = new User('Mario', 'Rossi');
user.ricarica(10)
user.getNumeroChiamate()
user.chiamata(5)
user.chiama404()
user.azzera()


