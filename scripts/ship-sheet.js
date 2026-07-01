var path = "../templates/ship-sheet.hbs";

export class NavalShipSheet extends foundry.applications.sheets.ActorSheetV2 {
    
    static DEFAULT_OPTIONS = {
        id: "naval-ship-sheet",
        classes: ["naval-sheet"],
        position: {
            width: 500,
            heigth: 400
        },
        window: {
            title: "Naval Ship",
            resizable: true
        }
    };

    static PARTS = {
        body: {
            template: path
        }
    };

    constructor(document, options =  {}) {
        super(option);
        this.document = document; //actor
    }

    async _prepareContext() {
        return {
            actor: this.document,
            system: this.document.system
        };
    }

    _onRender(context, options) {
        const html = this.element;

        html.querySelector(".damage-hull")?.addEventListener("click", async () => {
            const current = this.document.system.hull ?? 0;
            await this.document.update( {
                "system.hull": current - 10
            });
        });

        html.querySelector(".repair-hull")?.addEventListener("click", async () => {
            const current = this.document.system.hull ?? 0;
            await this.document.update({
                "system.hull": current + 10
            });
        });
    }
}