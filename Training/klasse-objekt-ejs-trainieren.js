const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', 'Training')

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Wenn localhost:3000/klasse-objekt-ejs-trainieren aufgerufen wird ...



// Eine Klasse ist  Bauplan.
// Ein Objekt ist die konkrete Umsetzung auf der Grundlage des Bauplans.
// Alle Objekte eines Bauplans haben dieselben Eigenschaften.
// möglicherweise unterschiedliche Eigenschaftswerte.

// Klassendefinition 

class Rechteck {
    constructor(){
        this.laenge
        this.breite
    }
}

class Schueler {
    constructor(){
        this.geschlecht
        this.vorname
        this.alter
    }
}

class Spieler {
    constructor(){
        this.spielername
        this.trikotnummer
        this.verein
        this.position
        this.nationalitaet
    }
}

// Deklaration eines Rechteck-Objekts vom Typ Rechteck
// Deklaration = Bekanntmachung, dass es ein Objekt 

// let rechteck = ...

// Instanziierung erkennt man am reservierten Wort "new"
// Instanziierung reserviert Speicherzellen für das soeben deklarierte Objekt.

// ... = new Rechteck()

// Initialisierung belegt die reservierten Speicherzellen mit konkreten
// Eigenschaftswerten.

// rechteck.breite = 3

let rechteck = new Rechteck()
rechteck.breite = 3
rechteck.laenge = 2

console.log("Breite : " + rechteck.breite)
console.log("Laenge : " + rechteck.laenge)
console.group(rechteck)

let schueler = new Schueler()
schueler.geschlecht = "w"
schueler.vorname = "Petra"
schueler.alter = 16

let spieler = new Spieler()
spieler.spielername = "Dzeko"
spieler.trikotnummer = 9
spieler.verein = "AS Rom"
spieler.position = "Stuermer"
spieler.nationalitaet = "Bosnien"




app.get('/klasse-objekt-ejs-trainieren',(req, res, next) => {   

    // ... wird klasse-objekt-ejs-trainieren.ejs gerendert:

    res.render('klasse-objekt-ejs-trainieren', {  
        breite : rechteck.breite,
        laenge : rechteck.laenge,
        geschlecht : schueler.geschlecht,
        vorname : schueler.vorname,
        alter : schueler.alter,  
        spielername : spieler.spielername,
        trikotnummer : spieler.trikotnummer,
        verein : spieler.verein,
        position : spieler.position,
        nationalitaet : spieler. nationalitaet  
    })
})