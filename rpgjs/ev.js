game.ev.frequence = 2;
game.ev.speed = 1;
game.ev.type = 'fixed';

game.can_take = function(ev) {
	if ( ev.can_take && !ev.can_take() ) return;
	if ( game.hp >= ev.hp_cost() ) RPGJS.Variables.data[0] = 1;
	else RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
}

game.cmd_v0 = function(v) { console.log(v); return 'SCRIPT: {"text": "RPGJS.Variables.data[0] = \''+1+'\'"}'; }

game.defined = function() {
	for ( var i = 0, o = game; i < arguments.length; i++ ) {
		if ( !o.hasOwnProperty(arguments[i]) ) return false;
		o = o[arguments[i]];
	}
	return true;
}

game.is_took = function(ev) {
	if ( ev.took ) RPGJS.Variables.data[0] = '你已經修過 '+ev.name+' 了！';
	else RPGJS.Variables.data[0] = 0;
}

game.set_type_move = function(e,t) {
	switch(t){
		case 'random':
			e.moveRandom();	
			break;
		case 'approach':
			e.approachPlayer();
			break;
	}
}

game.remove_type_move = function(e,t) {
	e.removeTypeMove(t);	
}

game.script = function(s) {
	var args = Array.prototype.slice.call(arguments, 1).join(',');
	return 'SCRIPT: {"text": "game.'+s+'('+args+')"}';
}

game.show_text = function(t,p) {
	t = -1 === t.search('\n')
	? t.replace(/(.{21})/g,'$1\\n') // without \n, auto wrap
	: t.replace(/\n/g,'\\n'); // with \n, make them \\n
	t = t.replace(/"/g,'\\"');
	if(typeof p != 'undefined'){
		return 'SHOW_TEXT: {"filename":"'+p.filename+'","id":"'+p.id+'","text": "'+t+'"}';
	}else{
		return 'SHOW_TEXT: {"text": "'+t+'"}';
	}
}

game.take = function(ev) {
	if ( ev.take && !ev.take() ) return;
	var hp_cost = ev.hp_cost();
	if ( game.hp < hp_cost ) {
		RPGJS.Variables.data[0] = '你的體力不夠修這門課囉！';
		return;
	}
	ev.took = true;
	game.hp -= hp_cost;
	game.n_took++;
	RPGJS.Variables.data[0] = '習得了 '+ev.name+' ！\n消耗 '+hp_cost+' 點體力，還剩 '+game.hp+' 點體力。';
}

game.v0 = function(v) { RPGJS.Variables.data[0] = v; }

// vi:nowrap:sw=4:ts=4
