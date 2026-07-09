import { ShipData } from "./data/ship-data.js";
import { NavalShipSheet } from "./sheets/ship-sheet.js";

Hooks.once("init", function() {
  console.log("⚓ Naval System Module | init ok 🟢");

  CONFIG.Actor.dataModels["NavalSystem-FoundryModule.ship"] = ShipData;

  foundry.documents.collections.Actors.registerSheet(
    "NavalSystem-FoundryModule",
    NavalShipSheet,
    {
      types: ["NavalSystem-FoundryModule.ship"],
      makeDefault: true,
      label: "Scheda Nave"
    }
  );
});

Hooks.once("ready", function() {
  console.log("⚓ Naval System Module | ready ok 🟢");
});