game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;
                        
                me.levelDirector.loadLevel("level1");
             
                
                var ball = new game.BallEntity(50, 100, {});
                me.game.add(ball, 4);
                
                // *** App Academy ***
                // Load the level you created in the program Tiled

		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	}
});
