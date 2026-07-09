var path = "../templates/ship-sheet.hbs";

export class NavalShipSheet extends foundry.applications.sheets.ActorSheetV2 {
    
    static DEFAULT_OPTIONS = {
        id: "naval-ship-sheet",
        classes: ["naval-sheet"],
        position: {
            width: 500,
            height: 400
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

    async _prepareContext() {
        return {
            actor: this.document,
            system: this.document.system
        };
    }

    _onRender(context, options) {
        const html = this.element;

        html.querySelector(".damage-scafo")?.addEventListener("click", async () => {
            const current = this.document.system.scafo.value ?? 0;
            await this.document.update( {
                "system.scafo.value": current - 10
            });
        });

        html.querySelector(".repair-scafo")?.addEventListener("click", async () => {
            const current = this.document.system.scafo.value ?? 0;
            await this.document.update({
                "system.scafo.value": current + 10
            });
        });
    }
}