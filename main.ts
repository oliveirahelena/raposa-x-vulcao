tiles.setCurrentTilemap(tilemap`level1`)
for (let value of tiles.getTilesByType(assets.tile`floor`)) {
    tiles.setTileAt(value, assets.image`myFloor`)
}
for (let value of tiles.getTilesByType(assets.tile`wall`)) {
    tiles.setTileAt(value, assets.image`myWall`)
}
