(function($,v){
	$.extend( true, game, { // global helper
		escape: function(s){ return s.replace(/"/g,'\\"') },
		is_defined: function(){
			for ( var i = 0, o = game; i < arguments.length; i++ ) {
				if ( !o.hasOwnProperty(arguments[i]) ) return false;
				o = o[arguments[i]];
			}
			return true;
		},
	});

	game.Ev = function( opt, cmds ){ // Ev class
		$.extend( true, this, opt );
		RPGJS.setEvent( map, id, [{
			id: this.id,
			x: this.x,
			y: this.y,
		},[{
			commands: cmds,
			frequence: this.frequence,
			graphic: this.graphic,
			speed: this.speed,
			trigger: this.trigger,
			type: this.type,
		}]]);
	};
	game.Ev.prototype = { // Ev helper and overridable
		// helper, you can override these but not suggested
		// command related helper is stored in cmd below
		move: function(){ global.game_map.getEvent(this.id).moveRandom() },
		stop: function(){ global.game_map.getEvent(this.id).removeTypeMove('random') },
		v0: function(v) { v[0] = v }, // useful for cmd.script()
		// overridable, override these only if necessary
		can_take: function(){
			if ( game.hp >= this.hp_cost() ) v[0] = 1;
			else v[0] = '你的體力不夠修這門課囉！';
		},
		frequence: 2,
		is_took: function(){ v[0] = this.took ? '你已經修過 '+this.name+' 了！' : 0 },
		speed: 1,
		take: function(){
			var hp_cost = this.hp_cost();
			if ( game.hp < hp_cost ) return v[0] = '你的體力不夠修這門課囉！';
			this.took = true;
			game.hp -= hp_cost;
			game.n_took++;
			v[0] = '習得了 '+this.name+' ！\n消耗 '+hp_cost+' 點體力，還剩 '+game.hp+' 點體力。';
		},
		took: false,
		trigger: 'action_button',
		type: 'fixed',
	};
	game.Ev.prototype.cmd = {
		// command related helper, don't override these
		script: function(s) { return 'SCRIPT: {"text": "'+game.escape(s)+'"}' },
		text: function(t,p) {
			t = -1 === t.search('\n')
			? t.replace(/(.{21})/g,'$1\\n') // without \n, auto wrap
			: t.replace(/\n/g,'\\n'); // with \n, make them \\n
			t = game.escape(t);
			if ( 'undefined' != typeof p ){
				return 'SHOW_TEXT: {"filename":"'+p.filename+'","id":"'+p.id+'","text": "'+t+'"}';
			} else {
				return 'SHOW_TEXT: {"text": "'+t+'"}';
			}
		},
		v0: function(v) { return game.Ev.script('RPGJS.Variables.data[0] = '+v) },
	};
})(jQuery,RPGJS.Variables.data);

// vi:nowrap:sw=4:ts=4