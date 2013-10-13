var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 5, ev = 'game.ev['+map+']['+id+']', name = '基礎國文';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 8; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('身為工程人員還是要有基本的文學素養！'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問出師表「出師未捷身先死」，指的是誰？'),
				'CHOICES: ["諸葛亮","項羽","劉備","趙雲"]',
				'CHOICE_0',
					s(ev+'.take()'),
					t('%V[0]',{id:id+"_4",filename:id+"_4.jpg"}),
				'CHOICE_1',
					t('＜項羽＞同學…不是我喔…',{id:id+"_1",filename:id+"_1.jpg"}),
				'CHOICE_2',
					t('＜劉備＞同學…不是我喔…',{id:id+"_2",filename:id+"_2.jpg"}),
				'CHOICE_3',
					t('＜趙雲＞同學…不是我喔…',{id:id+"_3",filename:id+"_3.jpg"}),
				'ENDCHOICES',
			'ELSE',
				t('%V[0]'),
			'ENDIF',
		"ELSE",
			t('%V[0]'),
		"ENDIF",
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
