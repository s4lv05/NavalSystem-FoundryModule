const { HandlebarsApplicationMixin } = foundry.application.api;
const { ActorSheetV2 } = foundry.application.sheets;

export class ShipSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
    static DEFAULT_OPTION = {
        classes: ["NavalSystem-FoundryModule", "ship-sheet"],
        position: { width: 720, height: 640 }
    };

    static PARTS = {
        header: { template: "modules/NavalSystem-FoundryModule/templates/ship-header.hbs"},
        stato: { template: "modules/NavalSystem-FoundryModule/templates/ship-stato.hbs"},
        cannoni: { template: "modules/NavalSystem-Foundry/templates/ship-cannoni.hbs"}
    };

    async _prepareContext() {
        return {
            actor: this.actor,
            system: this.actor.system,
            cannoni: this.actor.items.filter(i => i.type === "NavalSystem-FoundryModule.cannon")
        }
    };
}