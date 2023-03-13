const groesse = document.getElementById("groesse")
const alter = document.getElementById("alter")
const gewicht = document.getElementById("gewicht")
const mann = document.getElementById("mann")
const frau = document.getElementById("frau")
const aktivität = document.getElementById("list")
const ergebnis1 = document.getElementById("ergebnis1")
const ergebnis2 = document.getElementById("ergebnis2")
const ergebnis3 = document.getElementById("ergebnis3")
const ergebnis4 = document.getElementById("ergebnis4")

// const mannUmsatz = 664.7 + (13.7 * gewicht.value) + (5 * groesse.value) - (6.8 * alter.value)
// const frauUmsatz = 665.1 + (9.6 * gewicht.value) + (1.8 * groesse.value) - (4.7 * alter.value)

function berechnen() {
    const mannUmsatz = 664.7 + (13.7 * gewicht.value) + (5 * groesse.value) - (6.8 * alter.value)
    const frauUmsatz = 665.1 + (9.6 * gewicht.value) + (1.8 * groesse.value) - (4.7 * alter.value)
    if (mann.checked && aktivität.value == 0) {
        ergebnis1.innerHTML = "<h2>Gesamtumsatz kcal</h2>" + (mannUmsatz * 0.95).toFixed(3)
        ergebnis2.innerHTML = "<h3>Gesamtumsatz kJ</h2>" + (mannUmsatz * 0.95 * 4.1868).toFixed(3)
        ergebnis3.innerHTML = "<h4>Grundumsatz kcal</h4>" + mannUmsatz.toFixed(3)
        ergebnis4.innerHTML = "<h5>Grundumsatz kJ</h5>" + (mannUmsatz * 4.1868).toFixed(3)
    } else if (mann.checked && aktivität.value == 1) {
        ergebnis1.innerHTML = "<h2>Gesamtumsatz kcal</h2>" + (mannUmsatz * 1.2).toFixed(3)
        ergebnis2.innerHTML = "<h3>Gesamtumsatz kJ</h2>" + (mannUmsatz * 1.2 * 4.1868).toFixed(3)
        ergebnis3.innerHTML = "<h4>Grundumsatz kcal</h4>" + mannUmsatz.toFixed(3)
        ergebnis4.innerHTML = "<h5>Grundumsatz kJ</h5>" + (mannUmsatz * 4.1868).toFixed(3)
    } else if (mann.checked && aktivität.value == 2) {
        ergebnis1.innerHTML = "<h2>Gesamtumsatz kcal</h2>" + (mannUmsatz * 1.5).toFixed(3)
        ergebnis2.innerHTML = "<h3>Gesamtumsatz kJ</h2>" + (mannUmsatz * 1.5 * 4.1868).toFixed(3)
        ergebnis3.innerHTML = "<h4>Grundumsatz kcal</h4>" + mannUmsatz.toFixed(3)
        ergebnis4.innerHTML = "<h5>Grundumsatz kJ</h5>" + (mannUmsatz * 4.1868).toFixed(3)
    } else if (mann.checked && aktivität.value == 3) {
        ergebnis1.innerHTML = "<h2>Gesamtumsatz kcal</h2>" + (mannUmsatz * 1.7).toFixed(3)
        ergebnis2.innerHTML = "<h3>Gesamtumsatz kJ</h2>" + (mannUmsatz * 1.7 * 4.1868).toFixed(3)
        ergebnis3.innerHTML = "<h4>Grundumsatz kcal</h4>" + mannUmsatz.toFixed(3)
        ergebnis4.innerHTML = "<h5>Grundumsatz kJ</h5>" + (mannUmsatz * 4.1868).toFixed(3)
    } else if (mann.checked && aktivität.value == 4) {
        ergebnis1.innerHTML = "<h2>Gesamtumsatz kcal</h2>" + (mannUmsatz * 1.9).toFixed(3)
        ergebnis2.innerHTML = "<h3>Gesamtumsatz kJ</h2>" + (mannUmsatz * 1.9 * 4.1868).toFixed(3)
        ergebnis3.innerHTML = "<h4>Grundumsatz kcal</h4>" + mannUmsatz.toFixed(3)
        ergebnis4.innerHTML = "<h5>Grundumsatz kJ</h5>" + (mannUmsatz * 4.1868).toFixed(3)
    } else if (mann.checked && aktivität.value == 5) {
        ergebnis1.innerHTML = "<h2>Gesamtumsatz kcal</h2>" + (mannUmsatz * 2.2).toFixed(3)
        ergebnis2.innerHTML = "<h3>Gesamtumsatz kJ</h2>" + (mannUmsatz * 2.2 * 4.1868).toFixed(3)
        ergebnis3.innerHTML = "<h4>Grundumsatz kcal</h4>" + mannUmsatz.toFixed(3)
        ergebnis4.innerHTML = "<h5>Grundumsatz kJ</h5>" + (mannUmsatz * 4.1868).toFixed(3)
    } else if (frau.checked && aktivität.value == 0) {
        ergebnis1.innerHTML = "<h2>Gesamtumsatz kcal</h2>" + (frauUmsatz * 0.95).toFixed(3)
        ergebnis2.innerHTML = "<h3>Gesamtumsatz kJ</h3>" + (frauUmsatz * 0.95 * 4.1868).toFixed(3)
        ergebnis3.innerHTML = "<h4>Grundumsatz kcal</h4>" + frauUmsatz.toFixed(3)
        ergebnis4.innerHTML = "<h5>Grundumsatz kJ</h5>" + (frauUmsatz * 4.1868).toFixed(3)
    } else if (frau.checked && aktivität.value == 1) {
        ergebnis1.innerHTML = "<h2>Gesamtumsatz kcal</h2>" + (frauUmsatz * 1.2).toFixed(3)
        ergebnis2.innerHTML = "<h3>Gesamtumsatz kJ</h3>" + (frauUmsatz * 1.2 * 4.1868).toFixed(3)
        ergebnis3.innerHTML = "<h4>Grundumsatz kcal</h4>" + frauUmsatz.toFixed(3)
        ergebnis4.innerHTML = "<h5>Grundumsatz kJ</h5>" + (frauUmsatz * 4.1868).toFixed(3)
    } else if (frau.checked && aktivität.value == 2) {
        ergebnis1.innerHTML = "<h2>Gesamtumsatz kcal</h2>" + (frauUmsatz * 1.5).toFixed(3)
        ergebnis2.innerHTML = "<h3>Gesamtumsatz kJ</h3>" + (frauUmsatz * 1.5 * 4.1868).toFixed(3)
        ergebnis3.innerHTML = "<h4>Grundumsatz kcal</h4>" + frauUmsatz.toFixed(3)
        ergebnis4.innerHTML = "<h5>Grundumsatz kJ</h5>" + (frauUmsatz * 4.1868).toFixed(3)
    } else if (frau.checked && aktivität.value == 3) {
        ergebnis1.innerHTML = "<h2>Gesamtumsatz kcal</h2>" + (frauUmsatz * 1.7).toFixed(3)
        ergebnis2.innerHTML = "<h3>Gesamtumsatz kJ</h3>" + (frauUmsatz * 1.7 * 4.1868).toFixed(3)
        ergebnis3.innerHTML = "<h4>Grundumsatz kcal</h4>" + frauUmsatz.toFixed(3)
        ergebnis4.innerHTML = "<h5>Grundumsatz kJ</h5>" + (frauUmsatz * 4.1868).toFixed(3)
    } else if (frau.checked && aktivität.value == 4) {
        ergebnis1.innerHTML = "<h2>Gesamtumsatz kcal</h2>" + (frauUmsatz * 1.9).toFixed(3)
        ergebnis2.innerHTML = "<h3>Gesamtumsatz kJ</h3>" + (frauUmsatz * 1.9 * 4.1868).toFixed(3)
        ergebnis3.innerHTML = "<h4>Grundumsatz kcal</h4>" + frauUmsatz.toFixed(3)
        ergebnis4.innerHTML = "<h5>Grundumsatz kJ</h5>" + (frauUmsatz * 4.1868).toFixed(3)
    } else if (frau.checked && aktivität.value == 5) {
        ergebnis1.innerHTML = "<h2>Gesamtumsatz kcal</h2>" + (frauUmsatz * 2.2).toFixed(3)
        ergebnis2.innerHTML = "<h3>Gesamtumsatz kJ</h3>" + (frauUmsatz * 2.2 * 4.1868).toFixed(3)
        ergebnis3.innerHTML = "<h4>Grundumsatz kcal</h4>" + frauUmsatz.toFixed(3)
        ergebnis4.innerHTML = "<h5>Grundumsatz kJ</h5>" + (frauUmsatz * 4.1868).toFixed(3)
    }
}