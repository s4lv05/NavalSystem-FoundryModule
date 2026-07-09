import { ShipData } from "./data/ship-data.js";
import { ShipSheet } from "../templates/ship-stato.hbs";

Hooks.on("init", function() {
    console.log("⚓ Naval System Module | init ok 🟢");

    CONFIG.Actor.dataModels["NavalSystem-FoundryModule.ship"] = ShipData;

    foundry.documents.collections.Actors.registerSheet(
        "NavalSystem-FoundryModule", ShipSheet,
        { types: ["NavalSystem-FoundryModule.ship"], makeDefault: true, label: "Scheda Nave" }
    );
});

Hooks.on("ready", function() {
    console.log("⚓ Naval System Module | ready ok 🟢");
});