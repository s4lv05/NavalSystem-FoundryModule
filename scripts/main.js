import { NavalShipSheet } from "./sheets/ship-sheet.js";

Hooks.on("init", function() {
    console.log("⚓ Naval System Module | init ok 🟢");

    CONFIG.Actor.dataModels["NavalSystem-FoundryModule.ship"] = NavalShipSheet;

    foundry.documents.collections.Actors.registerSheet(
        "NavalSystem-FoundryModule", NavalShipSheet,
        { types: ["NavalSystem-FoundryModule.ship"], makeDefault: true, label: "Scheda Nave" }
    );
});

Hooks.on("ready", function() {
    console.log("⚓ Naval System Module | ready ok 🟢");
});