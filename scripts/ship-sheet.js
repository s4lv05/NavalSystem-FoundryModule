export class NavalShipSheet extends foundry.application.api.ApplicationV2 {

    static DEFAULT_OPTION = {
        id: "naval-ship-sheet",
        classes: ["naval-sheet"],
        window: {
            title: "Naval Ship",
            resizible: true
        }
    };

    constructor(document, option =  {}) {
        super(option);
        this.document = document; //actor
    }

    async _prepareContext() {
        return {
            actore: this.document
        };
    }

    onRender(context, options) {
        const html = this.elements;

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