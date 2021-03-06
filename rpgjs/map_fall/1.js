var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 1, ev = 'game.ev['+map+']['+id+']', name = '寶珠姐';
game.ev[map][id] = new game.Ev({
	id: id,
	is_ready_to_next_semester: function(){
		if ( game.hp >= 20 ) return RPGJS.Variables.data[0] = '還有 '+game.player.hp+' 點體力，確定要進入下一個學期？';
		RPGJS.Variables.data[0] = 1;
	},
	map: map,
	name: name,
	opening_read: 0,
}, [
	s(ev+'.stop()'),
	s('v0('+ev+'.opening_read)'),
	'IF: "0 == variable[0]"',
		s(ev+'.opening_read = 1'),
		t('歡迎來到「甸跡世界」，這世界是個充滿知識的神秘空間，每個在這個世界中的物品、生物都圍繞著各自獨特的「知識能量」，整個世界構築於知識的基礎上，「知識就是一切」，你必須找出在這個世界中的「知識之門」，並蒐集散落在各地區的知識寶石，才能將知識之門打開，回到你原本的世界。'),
	'ENDIF',
	'CHOICES: ["重看開場介紹","操作說明","進入下一個學期","沒事，找錯人了"]',
	'CHOICE_0',
		t('歡迎來到「甸跡世界」，這世界是個充滿知識的神秘空間，每個在這個世界中的物品、生物都圍繞著各自獨特的「知識能量」，整個世界構築於知識的基礎上，「知識就是一切」，你必須找出在這個世界中的「知識之門」，並蒐集散落在各地區的知識寶石，才能將知識之門打開，回到你原本的世界。'),
	'CHOICE_1',
		t('［Ｅｓｃ］鍵可以查看目前狀態'),
	'CHOICE_2',
		s(ev+'.is_ready_to_next_semester()'),
		'IF: "1 == variable[0]"',
			'TRANSFER_PLAYER: {"position-type": "constant", "appointement": {"x":1,"y":1,"id":2}}',
		'ELSE',
			t('%V[0]'),
			'CHOICES: ["是","否"]',
			'CHOICE_0',
				'TRANSFER_PLAYER: {"position-type": "constant", "appointement": {"x":1,"y":1,"id":2}}',
			'CHOICE_1',
			'ENDCHOICES',
		'ENDIF',
	'CHOICE_3',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
