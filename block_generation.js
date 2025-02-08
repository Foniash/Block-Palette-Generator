let count = 0;

const blockImages = [
    "block-image-1",
    "block-image-2",
    "block-image-3",
    "block-image-4",
    "block-image-5"
]

const blockTextures = [
    "images/blocks/Acacia_Log.webp",
    "images/blocks/Acacia_Planks.webp",
    "images/blocks/Andesite.webp",
    "images/blocks/Bamboo_Mosaic.webp",
    "images/blocks/Bamboo_Planks.webp",
    "images/blocks/Barrel.webp",
    "images/blocks/Basalt.webp",
    "images/blocks/Bee_Nest.webp",
    "images/blocks/Beehive.webp",
    "images/blocks/Birch_log.webp",
    "images/blocks/Birch_Planks.webp",
    "images/blocks/Blackstone.webp",
    "images/blocks/Block_of_Copper.webp",
    "images/blocks/Block_of_Quartz.webp",
    "images/blocks/Block_of_Stripped_Bamboo.webp",
    "images/blocks/Bone_Block.webp",
    "images/blocks/Bricks.webp",
    "images/blocks/Brown_Mushroom_Block.webp",
    "images/blocks/Calcite.webp",
    "images/blocks/Cherry_Log.webp",
    "images/blocks/Cherry_Planks.webp",
    "images/blocks/Cobbled_Deepslate.webp",
    "images/blocks/Cobblestone.webp",
    "images/blocks/Crimson_Planks.webp",
    "images/blocks/Cut_Copper.webp",
    "images/blocks/Cut_Red_Sandstone.webp",
    "images/blocks/Cut_Sandstone.webp",
    "images/blocks/Dark_Oak_Log.webp",
    "images/blocks/Dark_Oak_Planks.webp",
    "images/blocks/Dark_Prismarine.webp",
    "images/blocks/Deepslate.webp",
    "images/blocks/Deepslate_Bricks.webp",
    "images/blocks/Deepslate_Tiles.webp",
    "images/blocks/Diorite.webp",
    "images/blocks/Dripstone_Block.webp",
    "images/blocks/End_Stone_Bricks.webp",
    "images/blocks/Exposed_Copper.webp",
    "images/blocks/Exposed_Cut_Copper.webp",
    "images/blocks/Granite.webp",
    "images/blocks/Hay_Bale.webp",
    "images/blocks/Honeycomb_Block.webp",
    "images/blocks/Jungle_Log.webp",
    "images/blocks/Jungle_Planks.webp",
    "images/blocks/Mangrove_Log.webp",
    "images/blocks/Mangrove_Planks.webp",
    "images/blocks/Melon.webp",
    "images/blocks/Moss_Block.webp",
    "images/blocks/Mud_Bricks.webp",
    "images/blocks/Mushroom_Stem.webp",
    "images/blocks/Nether_Bricks.webp",
    "images/blocks/Oak_Log.webp",
    "images/blocks/Oak_Planks.webp",
    "images/blocks/Oxidized_Copper.webp",
    "images/blocks/Oxidized_Cut_Copper.webp",
    "images/blocks/Packed_Mud.webp",
    "images/blocks/Polished_Andesite.webp",
    "images/blocks/Polished_Basalt.webp",
    "images/blocks/Polished_Blackstone.webp",
    "images/blocks/Polished_Blackstone_Bricks.webp",
    "images/blocks/Polished_Deepslate.webp",
    "images/blocks/Polished_Diorite.webp",
    "images/blocks/Polished_Granite.webp",
    "images/blocks/Prismarine_Bricks.webp",
    "images/blocks/Pumpkin.webp",
    "images/blocks/Purpur_Block.webp",
    "images/blocks/Purpur_Pillar.webp",
    "images/blocks/Quartz_Bricks.webp",
    "images/blocks/Quartz_Pillar.webp",
    "images/blocks/Red_Mushroom_Block.webp",
    "images/blocks/Red_Nether_Bricks.webp",
    "images/blocks/Red_Sandstone.webp",
    "images/blocks/Sandstone.webp",
    "images/blocks/Smooth_Basalt.webp",
    "images/blocks/Spruce_Log.webp",
    "images/blocks/Spruce_Planks.webp",
    "images/blocks/Stone.webp",
    "images/blocks/Stone_Bricks.webp",
    "images/blocks/Stripped_Acacia_Log.webp",
    "images/blocks/Stripped_Birch_Log.webp",
    "images/blocks/Stripped_Cherry_Log.webp",
    "images/blocks/Stripped_Crimson_Stem.webp",
    "images/blocks/Stripped_Dark_Oak_Log.webp",
    "images/blocks/Stripped_Jungle_Log.webp",
    "images/blocks/Stripped_Mangrove_Log.webp",
    "images/blocks/Stripped_Oak_Log.webp",
    "images/blocks/Stripped_Spruce_Log.webp",
    "images/blocks/Stripped_Warped_Stem.webp",
    "images/blocks/Tuff.webp",
    "images/blocks/Warped_Planks.webp",
    "images/blocks/Warped_Planks.webp",
    "images/blocks/Weathered_Copper.webp",
    "images/blocks/Weathered_Cut_Copper.webp",
]

let isLocked = [
    false,
    false,
    false,
    false,
    false
]


function randomInteger(rang) {
    return Math.floor(Math.random() * rang)
}

// утки хаммера сосааааааать
function generateBlocks() {

    let randomBlockIndex = 0
    let flagIsBlockIndexUsed = false

    for (let i = 0; i < 5; i++) {

        if (isLocked[i] == true) {
            continue
        }
        
        flagIsBlockIndexUsed = false
        randomBlockIndex = randomInteger(92)

        do {

            flagIsBlockIndexUsed = false

            for (let j = 0; j < 5; j++ ) {
                if ((document.getElementById(blockImages[j]).getAttribute("src") == blockTextures[randomBlockIndex]) && (j != i)) {
                    
                    randomBlockIndex = randomInteger(92)
                    flagIsBlockIndexUsed = true

                }
            }
        }
        while (flagIsBlockIndexUsed == true)

        document.getElementById(blockImages[i]).setAttribute("src", blockTextures[randomBlockIndex])

    }
};



function lockUnlock(index, buttonID) {
    isLocked[index] = !isLocked[index]
    if (isLocked[index] == true) {
        document.getElementById(buttonID).style.backgroundColor = "rgb(110, 110, 110)"
        document.getElementById(buttonID).style.color = "white"
        document.getElementById(buttonID).style.boxShadow = "inset 0px 5px 10px 0px rgba(0, 0, 0, 0.466)"
    }
    else {
        document.getElementById(buttonID).style.backgroundColor = "rgb(255, 255, 255)"
        document.getElementById(buttonID).style.color = "black"
        document.getElementById(buttonID).style.boxShadow = "0 5px 10px 0px rgba(0, 0, 0, 0.466)"
    }
}

function buttonCheck() {
    if (event.code == 'Space') {
        generateBlocks()
    }
}

window.addEventListener('keydown', (e) => {  
    if (e.keyCode === 32 && e.target === document.body) {  
      e.preventDefault();  
    }  
})

function smoothScroll(){
    document.querySelector("BPG_title").scrollIntoView({
        behavior: 'smooth'
    })
}