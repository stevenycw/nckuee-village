var s = game.Ev.prototype.cmd.script, t = game.Ev.prototype.cmd.text, v0 = game.Ev.prototype.cmd.v0;
var map = 1, id = 4, ev = 'game.ev['+map+']['+id+']', name = '計算機概論（一）';
game.ev[map][id] = new game.Ev({
	hp_cost: function() { return 20; },
	id: id,
	map: map,
	name: name,
}, [
	s(ev+'.stop()'),
	t('電腦科學，不同以往國、高中的一般科目，此課程是你在大一課程中接觸到最靠近專業電機領域的科目。我們將會教你目前比較多人使用的兩種程式語言，Ｃ語言以及ＪＡＶＡ，第一次碰程式難免陌生，多加練習會有幫助的。'),
	t('你要修 '+name+' 嗎？'),
	'CHOICES: ["是","否"]',
	'CHOICE_0',
		s(ev+'.is_took()'),
		'IF: "0 == variable[0]"',
			s(ev+'.can_take()'),
			'IF: "1 == variable[0]"',
				t('請問下列程式碼的輸出為何？\nint a=1,b=2; a+=3; b++; printf("%d %d",a,b)'),
				'CHOICES: ["4, 3","3, 4","4, 4"]',
				'CHOICE_0',
					s(ev+'.take()'),
				'CHOICE_1',
					s(ev+'.fail("好課值得一修再修")'),
				'CHOICE_2',
					s(ev+'.fail("好課值得一修再修")'),
				'ENDCHOICES',
			'ENDIF',
		'ENDIF',
		t('%V[0]'),
	'CHOICE_1',
	'ENDCHOICES',
	s(ev+'.start()'),
]);

// vi:nowrap:sw=4:ts=4
