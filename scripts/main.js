import { NavalShipSheet } from "./ship-sheet.js";

Hooks.on("init", function() {
    console.log("⚓ Naval System Module | init ok 🟢");

    foundry.documents.collections.Actors.registerSheet(
        "naval",
        NavalShipSheet,
        {
            types: ["Vehicle"],
            makeDefault: true
        }
    );
});

Hooks.on("ready", function() {
    console.log("⚓ Naval System Module | ready ok 🟢");
});