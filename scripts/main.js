import { NavalShipSheet } from "./ship-sheet.js";

Hooks.on("init", function() {
    console.log("⚓ Naval System Module | init ok 🟢");

    Actors.registerSheet("naval", NavalShipSheet, {
        types: ["vehicle"],
        makeDefault: false
    });
});

Hooks.on("ready", function() {
    console.log("⚓ Naval System Module | ready ok 🟢");
});