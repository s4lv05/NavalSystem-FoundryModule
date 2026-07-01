export class NavalShipSheet extends foundry.applications.api.ApplicationV2 {

    static DEFAULT_OPTIONS = {
        id: "naval-ship-sheet",
        classes: ["naval-sheet"],
        window: {
            title: "Naval Ship",
            resizable: true
        }
    };

    constructor(document, options =  {}) {
        super(option);
        this.document = document; //actor
    }

    async _prepareContext() {
        return {
            actor: this.document
        };
    }

    onRender(context, options) {
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