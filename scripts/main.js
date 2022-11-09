let minZoom = 0.5;
let maxZoom = 25;

function setZoom(min, max) {
    Vars.renderer.minZoom = min;
    Vars.renderer.maxZoom = max;
}

Events.run(Trigger.update, () => {
    //TODO convert to linear scale
        setZoom(minZoom, maxZoom);
});

setZoom(minZoom, maxZoom);
