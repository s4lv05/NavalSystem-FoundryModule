Hooks.once("init", () => {
    console.log("⚓ Naval System | init");

    //spazio per registrare settings, documenti, ecc.
});

Hooks.once("ready", () => {
    console.log("⚓ Naval System | ready");

    ui.notification.info("Naval System caricato!");
});

Hooks.on("preCreateActor", (actor, data, options, userId) => {
  if (data.type === "nave") return;
});

Hooks.on("renderActorDirectory", (app, html, data) => {
  const button = $(`
    <button class="create-nave">
      + Nave
    </button>
  `);

  html.find(".directory-header").append(button);

  button.click(async () => {
    await Actor.create({
      name: "Nuova Nave",
      type: "character", // base
      flags: {
        naval: {
          isShip: true
        }
      }
    });
  });
});

Actor.prototype.isShip = function () {
  return this.getFlag("naval", "isShip") === true;
};

Hooks.once("init", () => {
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("naval", NavalShipSheet, {
    types: ["character"],
    makeDefault: false
  });
});