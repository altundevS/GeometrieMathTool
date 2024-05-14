function showCircle() {
    document.getElementById("startseite").style.display = "none";
    document.getElementById("circle").style.display = "block";
    document.getElementById("triangle").style.display = "none";
    document.getElementById("rechtwinkligesdreieck").style.display = "none";
    document.getElementById("quadrat").style.display = "none";
    document.getElementById("rechteck").style.display = "none";
    document.getElementById("parallelogramm").style.display = "none";
    document.getElementById("funfeck").style.display = "none";
    document.getElementById("hexagon").style.display = "none";
   
}

function showTriangle() {
    document.getElementById("startseite").style.display = "none";
    document.getElementById("circle").style.display = "none";
    document.getElementById("triangle").style.display = "block";
    document.getElementById("rechtwinkligesdreieck").style.display = "none";
    document.getElementById("quadrat").style.display = "none";
    document.getElementById("rechteck").style.display = "none";
    document.getElementById("parallelogramm").style.display = "none";
    document.getElementById("funfeck").style.display = "none";
    document.getElementById("hexagon").style.display = "none";
    
}

function showQuadrat() {
    document.getElementById("startseite").style.display = "none";
    document.getElementById("circle").style.display = "none";
    document.getElementById("triangle").style.display = "none";
    document.getElementById("rechtwinkligesdreieck").style.display = "none";
    document.getElementById("quadrat").style.display = "block";
    document.getElementById("rechteck").style.display = "none";
    document.getElementById("parallelogramm").style.display = "none";
    document.getElementById("funfeck").style.display = "none";
    document.getElementById("hexagon").style.display = "none";
    
}

function showRechteck() {
    document.getElementById("startseite").style.display = "none";
    document.getElementById("circle").style.display = "none";
    document.getElementById("triangle").style.display = "none";
    document.getElementById("rechtwinkligesdreieck").style.display = "none";
    document.getElementById("quadrat").style.display = "none";
    document.getElementById("rechteck").style.display = "block";
    document.getElementById("parallelogramm").style.display = "none";
    document.getElementById("funfeck").style.display = "none";
    document.getElementById("hexagon").style.display = "none";
}

function showParallelogramm() {
    document.getElementById("startseite").style.display = "none";
    document.getElementById("circle").style.display = "none";
    document.getElementById("triangle").style.display = "none";
    document.getElementById("rechtwinkligesdreieck").style.display = "none";
    document.getElementById("quadrat").style.display = "none";
    document.getElementById("rechteck").style.display = "none";
    document.getElementById("parallelogramm").style.display = "block";
    document.getElementById("hexagon").style.display = "none";
    document.getElementById("funfeck").style.display = "none";
}

function showRechtwinkligesDreieck() {
    document.getElementById("startseite").style.display = "none";
    document.getElementById("circle").style.display = "none";
    document.getElementById("triangle").style.display = "none";
    document.getElementById("rechtwinkligesdreieck").style.display = "block";
    document.getElementById("quadrat").style.display = "none";
    document.getElementById("rechteck").style.display = "none";
    document.getElementById("parallelogramm").style.display = "none";
    document.getElementById("hexagon").style.display = "none";
    document.getElementById("funfeck").style.display = "none";
}

function showStartseite(){
    document.getElementById("startseite").style.display = "block";
    document.getElementById("circle").style.display = "none";
    document.getElementById("triangle").style.display = "none";
    document.getElementById("rechtwinkligesdreieck").style.display = "none";
    document.getElementById("quadrat").style.display = "none";
    document.getElementById("rechteck").style.display = "none";
    document.getElementById("parallelogramm").style.display = "none";
    document.getElementById("hexagon").style.display = "none";
    document.getElementById("funfeck").style.display = "none";
}

function showHexagon(){
    document.getElementById("startseite").style.display = "none";
    document.getElementById("circle").style.display = "none";
    document.getElementById("triangle").style.display = "none";
    document.getElementById("rechtwinkligesdreieck").style.display = "none";
    document.getElementById("quadrat").style.display = "none";
    document.getElementById("rechteck").style.display = "none";
    document.getElementById("parallelogramm").style.display = "none";
    document.getElementById("hexagon").style.display = "block";
    document.getElementById("funfeck").style.display = "none";
}

function showFunfeck(){
    document.getElementById("startseite").style.display = "none";
    document.getElementById("circle").style.display = "none";
    document.getElementById("triangle").style.display = "none";
    document.getElementById("rechtwinkligesdreieck").style.display = "none";
    document.getElementById("quadrat").style.display = "none";
    document.getElementById("rechteck").style.display = "none";
    document.getElementById("parallelogramm").style.display = "none";
    document.getElementById("hexagon").style.display = "none";
    document.getElementById("funfeck").style.display = "block";
}








function berechneKreis() {
    var myRadius = document.getElementById("radius");
    var myUmfang = document.getElementById("umfang");
    var myDurchmesser = document.getElementById("durchmesser");
    var myFlache = document.getElementById("flache");

    if(myRadius && myRadius.value){
        var radius = parseFloat(document.getElementById("radius").value);
        var flaeche = Math.PI * radius * radius;
        var umfang = 2 * Math.PI * radius;
        var durchmesser = 2 * radius;
        document.getElementById("kreisErgebnis").innerHTML = "Deine Eingabe Radius: " + radius + "<br>Fläche A: " + flaeche.toFixed(2) + "<br>Umfang U: " + umfang.toFixed(2) + "<br>Durchmesser d: " + durchmesser.toFixed(2);
    }

    else if(myDurchmesser && myDurchmesser.value){
        var durchmesser = parseFloat(document.getElementById("durchmesser").value);
        var radius = durchmesser/2;
        var flaeche = Math.PI * radius * radius;
        var umfang = 2 * Math.PI * radius;
        document.getElementById("kreisErgebnis").innerHTML = "Deine Eingabe Durchmesser: " + durchmesser + "<br>Fläche A: " + flaeche.toFixed(2) + "<br>Umfang U: " + umfang.toFixed(2) + "<br>Radius r: " + radius.toFixed(2);
    }

    else if(myUmfang && myUmfang.value){
        var umfang = parseFloat(document.getElementById("umfang").value);
        var radius = umfang / (2*Math.PI);
        var flaeche = Math.PI * radius * radius;
        var durchmesser = 2 * radius;
        document.getElementById("kreisErgebnis").innerHTML = "Deine Eingabe Umfang: " + umfang + "<br>Fläche A: " + flaeche.toFixed(2) + "<br>Durchmesser d: " + durchmesser.toFixed(2) + "<br>Radius r: " + radius.toFixed(2);
    }

    else if(myFlache && myFlache.value){
        var flaeche = parseFloat(document.getElementById("flache").value);
        var radiusDoppel = flaeche / Math.PI;
        var radius = Math.sqrt(radiusDoppel);
        var umfang = 2 * Math.PI * radius;
        var durchmesser = 2 * radius;
        document.getElementById("kreisErgebnis").innerHTML = "Deine Eingabe Fläche: " + flaeche + "<br>Umfang U: " + umfang.toFixed(2) + "<br>Durchmesser d: " + durchmesser.toFixed(2) + "<br>Radius r: " + radius.toFixed(2);
    }
}

function berechneGleichWinkligesDreieck(){
    var mySchenkel = document.getElementById("schenkel").value;
    var myBasis = document.getElementById("basis").value;

    if(mySchenkel && myBasis){
        var schenkel = parseFloat(document.getElementById("schenkel").value);
        var basis = parseFloat(document.getElementById("basis").value); 

        var flaecheGD = 0.25 * basis * Math.sqrt(4*schenkel*schenkel - basis*basis); //Formel FLACHENINHALT
        var umfangGD = 2*schenkel+basis; // Formel Umfang
        var hoeheGD = 0.5 * Math.sqrt(4*schenkel*schenkel-basis*basis);
        document.getElementById("gleichSchenkligesDreieckErgebnis").innerHTML = "Deine Eingabe Schenkel: " + schenkel + " und Basis " + basis + "<br>Fläche A: " + flaecheGD.toFixed(2) + "<br>Umfang U: " + umfangGD.toFixed(2) + "<br>Höhe h: " + hoeheGD.toFixed(2);

    }else{
        document.getElementById("gleichSchenkligesDreieckErgebnis").innerHTML = "Fülle bitte beide Felder aus";
    }
}

function berechneQuadrat(){
    var mySeiteAQuadrat = document.getElementById("SeiteAquadrat");

    if(mySeiteAQuadrat && mySeiteAQuadrat.value){
        var seiteAquadrat = parseFloat(document.getElementById("SeiteAquadrat").value);

        var flaecheQuadrat = seiteAquadrat * seiteAquadrat;
        var umfangQuadrat = 4 * seiteAquadrat;
        document.getElementById("quadratErgebnis").innerHTML = "Deine Eingabe Seite a: " + seiteAquadrat + "<br>Fläche A: " + flaecheQuadrat + "<br>Umfang U: " + umfangQuadrat.toFixed(2);
    }
}

function berechneRechtwinkligesDreieck(){
    var myseiteArwd = document.getElementById("seiteArwd").value;
    var myseiteBrwd = document.getElementById("seiteBrwd").value;
    var myseiteCrwd = document.getElementById("seiteCrwd").value;

    if(myseiteArwd && myseiteBrwd && myseiteCrwd){
        var seiteArwd = parseFloat(document.getElementById("seiteArwd").value);
        var seiteBrwd = parseFloat(document.getElementById("seiteBrwd").value);
        var seiteCrwd = parseFloat(document.getElementById("seiteCrwd").value);

        var umfangrwd = seiteArwd + seiteBrwd + seiteCrwd;
        var flaecherwd = 0.5 * seiteArwd * seiteBrwd;
        document.getElementById("rechtwinkligesdreieckergebnis").innerHTML = "Deine Eingabe Seite a: " + seiteArwd + " ,Seite b: " + seiteBrwd +" ,Seite c: "+ seiteCrwd +"<br>Fläche A: " + flaecherwd.toFixed(2) + "<br>Umfang U: " + umfangrwd.toFixed(2);
    }

    if(myseiteArwd && myseiteBrwd){
        var seiteArwd = parseFloat(document.getElementById("seiteArwd").value);
        var seiteBrwd = parseFloat(document.getElementById("seiteBrwd").value);

        var seiteCrwd = Math.sqrt(seiteArwd*seiteArwd + seiteBrwd * seiteBrwd);

        var umfangrwd = seiteArwd + seiteBrwd + seiteCrwd;
        var flaecherwd = 0.5 * seiteArwd * seiteBrwd;
        document.getElementById("rechtwinkligesdreieckergebnis").innerHTML = "Deine Eingabe Seite a: " + seiteArwd + " ,Seite b: " + seiteBrwd  +"<br>Fläche A: " + flaecherwd.toFixed(2) + "<br>Umfang U: " + umfangrwd.toFixed(2) +"<br>Seite c: "+ seiteCrwd.toFixed(2);
    }

    if(myseiteArwd && myseiteCrwd){
        var seiteArwd = parseFloat(document.getElementById("seiteArwd").value);
        var seiteCrwd = parseFloat(document.getElementById("seiteCrwd").value);

        var seiteBrwd = Math.sqrt(seiteCrwd * seiteCrwd - seiteArwd * seiteArwd);

        var umfangrwd = seiteArwd + seiteBrwd + seiteCrwd;
        var flaecherwd = 0.5 * seiteArwd * seiteBrwd;
        document.getElementById("rechtwinkligesdreieckergebnis").innerHTML = "Deine Eingabe Seite a: " + seiteArwd + " ,Seite c: " + seiteCrwd  +"<br>Fläche A: " + flaecherwd.toFixed(2) + "<br>Umfang U: " + umfangrwd.toFixed(2) +"<br>Seite b: "+ seiteBrwd.toFixed(2);
    }

    if(myseiteBrwd && myseiteCrwd){
        var seiteBrwd = parseFloat(document.getElementById("seiteBrwd").value);
        var seiteCrwd = parseFloat(document.getElementById("seiteCrwd").value);

        var seiteArwd = Math.sqrt(seiteCrwd*seiteCrwd - seiteBrwd*seiteBrwd);

        var umfangrwd = seiteArwd + seiteBrwd + seiteCrwd;
        var flaecherwd = 0.5 * seiteArwd * seiteBrwd;
        document.getElementById("rechtwinkligesdreieckergebnis").innerHTML = "Deine Eingabe Seite b: " + seiteBrwd + " ,Seite c: " + seiteCrwd  +"<br>Fläche A: " + flaecherwd.toFixed(2) + "<br>Umfang U: " + umfangrwd.toFixed(2) +"<br>Seite a: "+ seiteArwd.toFixed(2);
    }
}

function berechneRechteck(){
    var myseiteArechteck = document.getElementById("SeiteArechteck").value;
    var myseiteBrechteck = document.getElementById("SeiteBrechteck").value;

    if(myseiteArechteck && myseiteBrechteck){
        var seiteArechteck = parseFloat(document.getElementById("SeiteArechteck").value);
        var seiteBrechteck = parseFloat(document.getElementById("SeiteBrechteck").value);

        var flaecheRechteck = seiteArechteck * seiteBrechteck;
        var umfangRechteck = 2*seiteArechteck + 2*seiteBrechteck;
        document.getElementById("rechteckErgebnis").innerHTML = "Deine Eingabe  Seite a: " + seiteArechteck + " ,Seite b: " + seiteBrechteck  +"<br>Fläche A: " + flaecheRechteck.toFixed(2) + "<br>Umfang U: " + umfangRechteck.toFixed(2);
    }else{
        document.getElementById("rechteckErgebnis").innerHTML = "Fülle bitte beide Felder aus";
    }
}

function berechneParallelogramm(){
    var myseiteAparallelogramm = document.getElementById("SeiteAparallelogramm").value;
    var myseiteBparallelogramm = document.getElementById("SeiteBparallelogramm").value;
    var myhoeheparallelogramm = document.getElementById("Hoeheparallelogramm").value;

    if(myseiteAparallelogramm && myseiteBparallelogramm && myhoeheparallelogramm){
        var seiteAparallelogramm = parseFloat(document.getElementById("SeiteAparallelogramm").value);
        var seiteBparallelogramm = parseFloat(document.getElementById("SeiteBparallelogramm").value);
        var hoeheParallelogramm = parseFloat(document.getElementById("Hoeheparallelogramm").value);

        var flaecheParallelogramm = seiteAparallelogramm * hoeheParallelogramm;
        var umfangParallelogramm = 2 * (seiteAparallelogramm + seiteBparallelogramm);
        document.getElementById("parallelogrammergebnis").innerHTML = "Deine Eingabe  Seite (a): " + seiteAparallelogramm + " ,Seite b: " + seiteBparallelogramm + " ,Höhe (h): " + hoeheParallelogramm  +"<br>Fläche (A): " + flaecheParallelogramm.toFixed(2) + "<br>Umfang (U): " + umfangParallelogramm.toFixed(2);
    }
}

function berechneHexagon(){
    var myseiteAhexagon = document.getElementById("SeiteAsechseck");
    var myflacheHexagon = document.getElementById("FlaecheAsechseck");

    if(myseiteAhexagon && myseiteAhexagon.value){
        var seiteAhexagon = parseFloat(document.getElementById("SeiteAsechseck").value);

        var flaecheHexagon = 6*Math.sqrt(3)/4*seiteAhexagon*seiteAhexagon;
        var umfangHexagon = 6*seiteAhexagon;
        var d1Hexagon = 2 * seiteAhexagon;
        var d2Hexagon = Math.sqrt(3)*seiteAhexagon;
        var d3Hexagon = Math.sqrt(3)*seiteAhexagon;
        document.getElementById("hexagonergebnis").innerHTML = "Deine Eingabe  Seite (a): " + seiteAhexagon +"<br>Fläche (A): " + flaecheHexagon.toFixed(2) + "<br>Umfang (U): " + umfangHexagon.toFixed(2) + "<br>d1: " + d1Hexagon.toFixed(2) + "<br>d2: " + d2Hexagon.toFixed(2) + "<br>d3: " + d3Hexagon.toFixed(2);
    }

    if(myflacheHexagon && myflacheHexagon.value){
        var flaecheHexagon = parseFloat(document.getElementById("FlaecheAsechseck").value);

        var seiteAhexagon = Math.sqrt((2*flaecheHexagon) / (3* Math.sqrt(3)));//Fehlerhaft 
        var umfangHexagon = 6*seiteAhexagon;
        var d1Hexagon = 2 * seiteAhexagon;
        var d2Hexagon = Math.sqrt(3)*seiteAhexagon;
        var d3Hexagon = Math.sqrt(3)*seiteAhexagon;
        document.getElementById("hexagonergebnis").innerHTML = "Deine Eingabe  Flächeninhalt (A): " + flaecheHexagon  +"<br>Seitenlänge (a): "+seiteAhexagon.toFixed(2) + "<br>Umfang (U): " + umfangHexagon.toFixed(2) + "<br>d1: " + d1Hexagon.toFixed(2) + "<br>d2: " + d2Hexagon.toFixed(2) + "<br>d3: " + d3Hexagon.toFixed(2);
    }
}

function berechnePentagon(){
    var myseiteApentagon = document.getElementById("SeiteAfunfeck");
    var myflachePentagon = document.getElementById("flachePentagon");
    var myhoehePentagon = document.getElementById("hoehePentagon");
    var myumfangPentagon = document.getElementById("umfangPentagon");

    if(myseiteApentagon && myseiteApentagon.value){
        var seiteApentagon = parseFloat(document.getElementById("SeiteAfunfeck").value);

        var flaechePentagon = 1/4 * Math.sqrt(25+10*Math.sqrt(5)) * seiteApentagon * seiteApentagon;
        var umfangPentagon = 5 * seiteApentagon;
        var umkreisRadiusPentagon  = seiteApentagon / 10 * Math.sqrt(10*Math.sqrt(5)+50);
        var innenkreisRadiusPentagon = seiteApentagon / 10 * Math.sqrt(10*Math.sqrt(5)+25);
        var hoehePentagon = seiteApentagon/2 * Math.sqrt(2*Math.sqrt(5)+5);
        var diagonalePentagon = seiteApentagon*(1+Math.sqrt(5))/2;
        document.getElementById("pentagonergebnis").innerHTML = "Deine Eingabe  Seite a: " + seiteApentagon +"<br>Fläche A: " + flaechePentagon.toFixed(2) + "<br>Umfang U: " + umfangPentagon.toFixed(2) + "<br>Umkreisradius R: " + umkreisRadiusPentagon.toFixed(2) + "<br>Innenkreisradius r: " + innenkreisRadiusPentagon.toFixed(2) + "<br>Höhe: " + hoehePentagon.toFixed(2)+"<br>Diagonale: " + diagonalePentagon.toFixed(2) ;
    }

    if(myflachePentagon && myflachePentagon.value){
        var flaechePentagon = parseFloat(document.getElementById("flachePentagon").value);
        var seiteApentagon = Math.sqrt(flaechePentagon*4/Math.sqrt(25+10*Math.sqrt(5)));
        var umfangPentagon = 5 * seiteApentagon;
        var umkreisRadiusPentagon  = seiteApentagon / 10 * Math.sqrt(10*Math.sqrt(5)+50);
        var innenkreisRadiusPentagon = seiteApentagon / 10 * Math.sqrt(10*Math.sqrt(5)+25);
        var hoehePentagon = seiteApentagon/2 * Math.sqrt(2*Math.sqrt(5)+5);
        var diagonalePentagon = seiteApentagon*(1+Math.sqrt(5))/2;
        document.getElementById("pentagonergebnis").innerHTML = "Deine Eingabe Flächeninhalt A: " + flaechePentagon +"<br>Seitenlänge a: " + seiteApentagon.toFixed(2) + "<br>Umfang U: " + umfangPentagon.toFixed(2) + "<br>Umkreisradius R: " + umkreisRadiusPentagon.toFixed(2) + "<br>Innenkreisradius r: " + innenkreisRadiusPentagon.toFixed(2) + "<br>Höhe: " + hoehePentagon.toFixed(2)+"<br>Diagonale: " + diagonalePentagon.toFixed(2) ;
    }

    if(myhoehePentagon && myhoehePentagon.value){
        var hoehePentagon = parseFloat(document.getElementById("hoehePentagon").value);
        var seiteApentagon = hoehePentagon*2/Math.sqrt(5+2*Math.sqrt(5));
        var umfangPentagon = 5 * seiteApentagon;
        var umkreisRadiusPentagon  = seiteApentagon / 10 * Math.sqrt(10*Math.sqrt(5)+50);
        var innenkreisRadiusPentagon = seiteApentagon / 10 * Math.sqrt(10*Math.sqrt(5)+25);
        var diagonalePentagon = seiteApentagon*(1+Math.sqrt(5))/2;
        var flaechePentagon = 1/4 * Math.sqrt(25+10*Math.sqrt(5)) * seiteApentagon * seiteApentagon;
        document.getElementById("pentagonergebnis").innerHTML = "Deine Eingabe Höhe h: " + hoehePentagon +"<br>Flächeninhalt A: " + flaechePentagon.toFixed(2) +"<br>Seitenlänge a: " + seiteApentagon.toFixed(2) + "<br>Umfang U: " + umfangPentagon.toFixed(2) + "<br>Umkreisradius R: " + umkreisRadiusPentagon.toFixed(2) + "<br>Innenkreisradius r: " + innenkreisRadiusPentagon.toFixed(2) +"<br>Diagonale: " + diagonalePentagon.toFixed(2);
    }

    if(myumfangPentagon && myumfangPentagon.value){
        var umfangPentagon = parseFloat(document.getElementById("umfangPentagon").value);
        var seiteApentagon = umfangPentagon/5;
        var umkreisRadiusPentagon  = seiteApentagon / 10 * Math.sqrt(10*Math.sqrt(5)+50);
        var innenkreisRadiusPentagon = seiteApentagon / 10 * Math.sqrt(10*Math.sqrt(5)+25);
        var diagonalePentagon = seiteApentagon*(1+Math.sqrt(5))/2;
        var flaechePentagon = 1/4 * Math.sqrt(25+10*Math.sqrt(5)) * seiteApentagon * seiteApentagon;
        document.getElementById("pentagonergebnis").innerHTML = "Deine Eingabe Umfang U: " + umfangPentagon +"<br>Flächeninhalt A: " + flaechePentagon.toFixed(2) +"<br>Seitenlänge a: " + seiteApentagon.toFixed(2)  + "<br>Umkreisradius R: " + umkreisRadiusPentagon.toFixed(2) + "<br>Innenkreisradius r: " + innenkreisRadiusPentagon.toFixed(2) +"<br>Diagonale: " + diagonalePentagon.toFixed(2);

    }

}





