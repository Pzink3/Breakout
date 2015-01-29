game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
           { name: "tiles", type:"image", src: "data/img/tiles.png" },
           { name: "paddle", type:"image", src: "data/img/paddle.png" },
           { name: "ball", type:"image", src: "data/img/ball.png" },
           { name: "brick", type:"image", src: "data/img/brick.png" },
           { name: "meta-tiles", type:"image", src: "data/img/meta-tiles.png" },
        // *** App Academy ***
        // Add two graphics files, tiles and paddle, as a resource to use
        

	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
        { name: "level1", type: "tmx", src: "data/map/level1.tmx" },
        // *** App Academy ***
        // Add the level as a resource to use within the program


	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/", channel : 1},
	 */	

        	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/", channel : 2}
	 */
         { name: "paddle-sfx", type: "audio", src: "data/sfx/", channel : 1 }
       
];
