ServerEvents.recipes(event => {
    event.custom({
        type: "create:mixing",
        ingredients: [
            { count: 1, item: "minecraft:glow_berries" }
        ],
        results: [
            {
                fluid: "supplementaries:lumisene",
                amount: 100,
            },
        ],
    });
})