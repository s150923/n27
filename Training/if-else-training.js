/**
 * Hier können sie IF und ELSE trainieren.
 * Am besten dazu den nodemon starten:
 * 
 * .\node_modules\.bin\nodemon Training\if-else-training.js
 * 
 * und die Ausgabe im Terminal beobachten.
 */

 
 // Die Zahl 1 wird zugewiesen an eine Variable namens x
 let x = undefined
 let y = 100

if("GW12B".includes("11") && "GW11B".startsWith("G")){
    console.log("Die Prüfung ist WAHR. Es werden die Anweisungen im Rumpf von if ausgeführt.")
}else{
    console.log("Die Prüfung ist FALSCH. Es werden die Anweisungen im Rumpf von else ausgeführt.")
}

// 20. if("GW12B".includes("11"))   Die Prüfung ist falsch. Die Methode "includes" prüft, ob ein String einem anderem enthält.

// 19. if("GW11B".endsWith("B"))    Die Prüfung ist wahr. Die Methode "endsWith" prüft, ob ein String mit einem anderem String endet.

// 18. if("GW11B".startsWith("GW")) Die Prüfung ist wahr. Die Methode "startsWith" prüft, ob ein String mit einem anderem String beginnt.

// 17. if("halamadrid".length)  Die Prüfung ist wahr. Der Wert von ("halamadrid".length) ist 10.

// 16. if(undefinded)   Die Prüfung ist falsch. Wenn ein Objekt nicht existiert ist es undefinded. 

// 15. if(0 > x || x < 11) Logisches "oder". Die Prüfung ist wahr, wenn die Rechte oder die Linke oder beide Prüfungen wahr sind.

// 14. if(0 < x && x < 11) Logisches "und". Die Prüfung ist wahr, wenn beide Prüfungen wahr sind.

// 13. if("")       Die Prüfung ist falsch.

// 12. if("#10#")   Die Prüfung ist wahr. Alle nicht leeren Zeichenketten (Strings) sind wahr.

// 11. if(8)        Die Prüfung ist wahr. Alle Zahlen außer 0 sind wahr.

// 10. if(0)        Die Prüfung ist falsch. 

// 9. if(false)     Die Prüfung ist wahr. Der Rumpf von "if" ist ein unerreichbarer Code.

// 8. if(true)      Die Prüfung ist wahr. Der Rumpf von "else" ist ein unerreichbarer Code.

// 7. if(1 === "1") Prüfung auf "Gleichheit des Wertes und Gleichheit des Typs". Die Prüfung ist falsch.

// 6. if(0 != 1)    Prüfung aug "Ungleichheit". Die Prüfung ist wahr.

// 5. if(0 <= 1)    Prüfung auf "kleiner gleich". Die Prüfung ist wahr.

// 4. if(0 >= 1)    Prüfung auf "größer gleich". Die Prüfung ist falsch.

// 3. if(0 < 1)     Prüfung auf "kleiner als". Die Prüfung ist wahr.

// 2. if(0 > 1)     Prüfung auf "Größer als". Die Prüfung ist falsch.

// 1. if(1 == 1)    Prüfung auf Gleichheit des Wertes. Die Prüfung ist wahr.