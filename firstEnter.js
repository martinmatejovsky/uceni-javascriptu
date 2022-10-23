
console.log('Martin zkouší blbosti');

//moje údaje
let vek = 37;
let jmeno = "Martin";

//definice proměnných
let ukol, probihaKontrolaVeku, tvujVek, rozdil;
ukol = ("Zadej svuj vek");
probihaKontrolaVeku = true;
alert("Jmenuji se " + jmeno + " a je mi " + vek + " let");

//cyklus s podmínkou pro kontrolu věku, který bude probíhat dokud nebude zadán věk >= proměnné vek
while (probihaKontrolaVeku){
    tvujVek = prompt(ukol);
    tvujVek = Number(tvujVek); //Number vezme input a prevede ho na cislo. pokud to neni mozne, tak vraci hodnotu NaN
    rozdil = vek - tvujVek;

    if (rozdil === 1){  //kontrola hodnoty i datoveho typu
        alert("Jsem starsi o " + rozdil + " rok. Vypadni!!!");
    }
    else if (!tvujVek){  //vykricnik prevadi na boolean a udela z nej opacnou hodnotu
        alert("Zadej svuj vek jako číslo");
    }
    else if (vek > tvujVek){
        alert("Jsem starsi o " + rozdil + " let. Vypadni!!!");
    }
    else {
        alert("Je ti " + tvujVek + " let. Vítej na těchto stránkách");
        probihaKontrolaVeku = false;
    }
    
}





/* komentář pro více řádků
if (vek > tvujVek){
    alert("Jsem starsi o " + rozdil + " let. Vypadni!!!");

} else {
    alert("Je ti " + tvujVek + " let. Vítej na těchto stránkách");
}
*/
