BlockEvents.rightClicked(event => {
    const { block, player, hand } = event;
    const heldItem = player.getHeldItem(hand);

    if (heldItem.id === 'create:super_glue') {
        let newBlockId = null;
        let facing = block.properties.facing;

        if (block.id === 'minecraft:piston') {
            newBlockId = 'minecraft:sticky_piston';
        } else if (block.id === 'create:mechanical_piston') {
            newBlockId = 'create:sticky_mechanical_piston';
        }

        if (newBlockId) {
            block.set(newBlockId, { facing: facing });
            player.damageHeldItem("main_hand", 1)
        }
    }
    
    if (heldItem.id === 'create:wrench'){
        let newBlockId = null
        
        if (block.id === 'waystones:waystone') {
            newBlockId = 'waystones:waystone'
        }
        
        if (newBlockId) {
            block.set(newBlockId)
        }
    }
});

ServerEvents.recipes(event => {
    event.shapeless('minecraft:sticky_piston', ['create:super_glue', 'minecraft:piston']).damageIngredient(Ingredient.of('create:super_glue'))
    event.shapeless('create:sticky_mechanical_piston', ['create:super_glue', 'create:mechanical_piston']).damageIngredient(Ingredient.of('create:super_glue'))
})