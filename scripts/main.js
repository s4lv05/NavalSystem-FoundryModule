Hooks.once("init", () => {
    console.log("⚓ Naval System | init");

    //spazio per registrare settings, documenti, ecc.
});

Hooks.once("ready", () => {
    console.log("⚓ Naval System | ready");

    ui.notification.info("Naval System caricato!");
});