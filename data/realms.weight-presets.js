var g_regions = {
	us: 'www.wowarmory.com',
	eu: 'eu.wowarmory.com'
};

var g_realms = {
	1: {name:'Eldre\'Thalas',battlegroup:'Reckoning',region:'us'},
	2: {name:'Shadowsong',battlegroup:'Reckoning',region:'us'},
	3: {name:'Skywall',battlegroup:'Reckoning',region:'us'},
	4: {name:'Silvermoon',battlegroup:'Reckoning',region:'us'},
	5: {name:'Terenas',battlegroup:'Reckoning',region:'us'},
	6: {name:'Windrunner',battlegroup:'Reckoning',region:'us'},
	7: {name:'Arathor',battlegroup:'Reckoning',region:'us'},
	8: {name:'Frostmane',battlegroup:'Reckoning',region:'us'},
	9: {name:'Firetree',battlegroup:'Reckoning',region:'us'},
	10: {name:'Gurubashi',battlegroup:'Reckoning',region:'us'},
	11: {name:'Smolderthorn',battlegroup:'Reckoning',region:'us'},
	12: {name:'Bonechewer',battlegroup:'Reckoning',region:'us'},
	13: {name:'Dragonmaw',battlegroup:'Reckoning',region:'us'},
	14: {name:'Nathrezim',battlegroup:'Reckoning',region:'us'},
	15: {name:'Spirestone',battlegroup:'Reckoning',region:'us'},
	16: {name:'Scarlet Crusade',battlegroup:'Reckoning',region:'us'},
	17: {name:'Shadow Council',battlegroup:'Reckoning',region:'us'},
	18: {name:'Suramar',battlegroup:'Cyclone',region:'us'},
	19: {name:'Perenolde',battlegroup:'Cyclone',region:'us'},
	20: {name:'Bronzebeard',battlegroup:'Cyclone',region:'us'},
	21: {name:'Azjol-Nerub',battlegroup:'Cyclone',region:'us'},
	22: {name:'Draenor',battlegroup:'Cyclone',region:'us'},
	23: {name:'Dragonblight',battlegroup:'Cyclone',region:'us'},
	24: {name:'Uldum',battlegroup:'Cyclone',region:'us'},
	25: {name:'Dunemaul',battlegroup:'Cyclone',region:'us'},
	26: {name:'Bloodscalp',battlegroup:'Cyclone',region:'us'},
	27: {name:'Crushridge',battlegroup:'Cyclone',region:'us'},
	28: {name:'Daggerspine',battlegroup:'Cyclone',region:'us'},
	29: {name:'Stormscale',battlegroup:'Cyclone',region:'us'},
	30: {name:'Boulderfist',battlegroup:'Cyclone',region:'us'},
	31: {name:'Stonemaul',battlegroup:'Cyclone',region:'us'},
	32: {name:'Darkspear',battlegroup:'Cyclone',region:'us'},
	33: {name:'Feathermoon',battlegroup:'Cyclone',region:'us'},
	34: {name:'Lothar',battlegroup:'Ruin',region:'us'},
	35: {name:'Elune',battlegroup:'Ruin',region:'us'},
	36: {name:'Trollbane',battlegroup:'Ruin',region:'us'},
	37: {name:'Zul\'jin',battlegroup:'Ruin',region:'us'},
	38: {name:'Stormrage',battlegroup:'Ruin',region:'us'},
	39: {name:'Medivh',battlegroup:'Ruin',region:'us'},
	40: {name:'Durotan',battlegroup:'Ruin',region:'us'},
	41: {name:'Bloodhoof',battlegroup:'Ruin',region:'us'},
	42: {name:'Madoran',battlegroup:'Ruin',region:'us'},
	43: {name:'Shattered Hand',battlegroup:'Ruin',region:'us'},
	44: {name:'Bleeding Hollow',battlegroup:'Ruin',region:'us'},
	45: {name:'Skullcrusher',battlegroup:'Ruin',region:'us'},
	46: {name:'Mannoroth',battlegroup:'Ruin',region:'us'},
	47: {name:'Azgalor',battlegroup:'Ruin',region:'us'},
	48: {name:'Magtheridon',battlegroup:'Ruin',region:'us'},
	49: {name:'Arthas',battlegroup:'Ruin',region:'us'},
	50: {name:'Warsong',battlegroup:'Ruin',region:'us'},
	51: {name:'Argent Dawn',battlegroup:'Ruin',region:'us'},
	52: {name:'Quel\'Thalas',battlegroup:'Vindication',region:'us'},
	53: {name:'Gilneas',battlegroup:'Vindication',region:'us'},
	54: {name:'Eonar',battlegroup:'Vindication',region:'us'},
	55: {name:'Kargath',battlegroup:'Vindication',region:'us'},
	56: {name:'Llane',battlegroup:'Vindication',region:'us'},
	57: {name:'Malygos',battlegroup:'Vindication',region:'us'},
	58: {name:'Thunderhorn',battlegroup:'Vindication',region:'us'},
	59: {name:'Aggramar',battlegroup:'Vindication',region:'us'},
	60: {name:'Thunderlord',battlegroup:'Vindication',region:'us'},
	61: {name:'Gorefiend',battlegroup:'Vindication',region:'us'},
	62: {name:'Eredar',battlegroup:'Vindication',region:'us'},
	63: {name:'Lightning\'s Blade',battlegroup:'Vindication',region:'us'},
	64: {name:'Laughing Skull',battlegroup:'Vindication',region:'us'},
	65: {name:'Burning Legion',battlegroup:'Vindication',region:'us'},
	66: {name:'Shadowmoon',battlegroup:'Vindication',region:'us'},
	67: {name:'Drakkari',battlegroup:'Vindication',region:'us'},
	68: {name:'Ragnaros',battlegroup:'Vindication',region:'us'},
	69: {name:'Burning Blade',battlegroup:'Vindication',region:'us'},
	70: {name:'Earthen Ring',battlegroup:'Vindication',region:'us'},
	71: {name:'Nagrand',battlegroup:'Bloodlust',region:'us'},
	72: {name:'Dath\'Remar',battlegroup:'Bloodlust',region:'us'},
	73: {name:'Khaz\'goroth',battlegroup:'Bloodlust',region:'us'},
	74: {name:'Aman\'Thul',battlegroup:'Bloodlust',region:'us'},
	75: {name:'Caelestrasz',battlegroup:'Bloodlust',region:'us'},
	76: {name:'Proudmoore',battlegroup:'Bloodlust',region:'us'},
	77: {name:'Vek\'nilash',battlegroup:'Bloodlust',region:'us'},
	78: {name:'Sen\'jin',battlegroup:'Bloodlust',region:'us'},
	79: {name:'Kilrogg',battlegroup:'Bloodlust',region:'us'},
	80: {name:'Blackrock',battlegroup:'Bloodlust',region:'us'},
	81: {name:'Thaurissan',battlegroup:'Bloodlust',region:'us'},
	82: {name:'Frostmourne',battlegroup:'Bloodlust',region:'us'},
	83: {name:'Barthilas',battlegroup:'Bloodlust',region:'us'},
	84: {name:'Dreadmaul',battlegroup:'Bloodlust',region:'us'},
	85: {name:'Tichondrius',battlegroup:'Bloodlust',region:'us'},
	86: {name:'Ner\'zhul',battlegroup:'Bloodlust',region:'us'},
	87: {name:'Kil\'jaeden',battlegroup:'Bloodlust',region:'us'},
	88: {name:'Frostwolf',battlegroup:'Bloodlust',region:'us'},
	89: {name:'Silver Hand',battlegroup:'Bloodlust',region:'us'},
	90: {name:'Khaz Modan',battlegroup:'Vengeance',region:'us'},
	91: {name:'Kul Tiras',battlegroup:'Vengeance',region:'us'},
	92: {name:'Draka',battlegroup:'Vengeance',region:'us'},
	93: {name:'Runetotem',battlegroup:'Vengeance',region:'us'},
	94: {name:'Muradin',battlegroup:'Vengeance',region:'us'},
	95: {name:'Eitrigg',battlegroup:'Vengeance',region:'us'},
	96: {name:'Rexxar',battlegroup:'Vengeance',region:'us'},
	97: {name:'Saurfang',battlegroup:'Vengeance',region:'us'},
	98: {name:'Korgath',battlegroup:'Vengeance',region:'us'},
	99: {name:'Gundrak',battlegroup:'Vengeance',region:'us'},
	100: {name:'Aegwynn',battlegroup:'Vengeance',region:'us'},
	101: {name:'Akama',battlegroup:'Vengeance',region:'us'},
	102: {name:'Drak\'thul',battlegroup:'Vengeance',region:'us'},
	103: {name:'Garithos',battlegroup:'Vengeance',region:'us'},
	104: {name:'Hakkar',battlegroup:'Vengeance',region:'us'},
	105: {name:'Mug\'thol',battlegroup:'Vengeance',region:'us'},
	106: {name:'Malorne',battlegroup:'Vengeance',region:'us'},
	107: {name:'Jubei\'Thos',battlegroup:'Vengeance',region:'us'},
	108: {name:'Chromaggus',battlegroup:'Vengeance',region:'us'},
	109: {name:'Thorium Brotherhood',battlegroup:'Vengeance',region:'us'},
	110: {name:'Kael\'thas',battlegroup:'Rampage',region:'us'},
	111: {name:'Alexstrasza',battlegroup:'Rampage',region:'us'},
	112: {name:'Alleria',battlegroup:'Rampage',region:'us'},
	113: {name:'Garona',battlegroup:'Rampage',region:'us'},
	114: {name:'Hellscream',battlegroup:'Rampage',region:'us'},
	115: {name:'Ravencrest',battlegroup:'Rampage',region:'us'},
	116: {name:'Blackhand',battlegroup:'Rampage',region:'us'},
	117: {name:'Whisperwind',battlegroup:'Rampage',region:'us'},
	118: {name:'Stormreaver',battlegroup:'Rampage',region:'us'},
	119: {name:'Destromath',battlegroup:'Rampage',region:'us'},
	120: {name:'Gorgonnash',battlegroup:'Rampage',region:'us'},
	121: {name:'Dethecus',battlegroup:'Rampage',region:'us'},
	122: {name:'Spinebreaker',battlegroup:'Rampage',region:'us'},
	123: {name:'Illidan',battlegroup:'Rampage',region:'us'},
	124: {name:'Cho\'gall',battlegroup:'Rampage',region:'us'},
	125: {name:'Gul\'dan',battlegroup:'Rampage',region:'us'},
	126: {name:'Balnazzar',battlegroup:'Rampage',region:'us'},
	127: {name:'Kirin Tor',battlegroup:'Rampage',region:'us'},
	128: {name:'Staghelm',battlegroup:'Shadowburn',region:'us'},
	129: {name:'Baelgun',battlegroup:'Shadowburn',region:'us'},
	130: {name:'Malfurion',battlegroup:'Shadowburn',region:'us'},
	131: {name:'Moonrunner',battlegroup:'Shadowburn',region:'us'},
	132: {name:'Greymane',battlegroup:'Shadowburn',region:'us'},
	133: {name:'Detheroc',battlegroup:'Shadowburn',region:'us'},
	134: {name:'Azshara',battlegroup:'Shadowburn',region:'us'},
	135: {name:'Agamaggan',battlegroup:'Shadowburn',region:'us'},
	136: {name:'Nazjatar',battlegroup:'Shadowburn',region:'us'},
	137: {name:'Sargeras',battlegroup:'Shadowburn',region:'us'},
	138: {name:'Kalecgos',battlegroup:'Shadowburn',region:'us'},
	139: {name:'Ursin',battlegroup:'Shadowburn',region:'us'},
	140: {name:'Dark Iron',battlegroup:'Shadowburn',region:'us'},
	141: {name:'Wildhammer',battlegroup:'Shadowburn',region:'us'},
	142: {name:'Emerald Dream',battlegroup:'Shadowburn',region:'us'},
	143: {name:'Maelstrom',battlegroup:'Shadowburn',region:'us'},
	144: {name:'Twisting Nether',battlegroup:'Shadowburn',region:'us'},
	145: {name:'Lightninghoof',battlegroup:'Shadowburn',region:'us'},
	146: {name:'Duskwood',battlegroup:'Stormstrike',region:'us'},
	147: {name:'Turalyon',battlegroup:'Stormstrike',region:'us'},
	148: {name:'Ysera',battlegroup:'Stormstrike',region:'us'},
	149: {name:'Norgannon',battlegroup:'Stormstrike',region:'us'},
	150: {name:'Thrall',battlegroup:'Stormstrike',region:'us'},
	151: {name:'Dalaran',battlegroup:'Stormstrike',region:'us'},
	152: {name:'Khadgar',battlegroup:'Stormstrike',region:'us'},
	153: {name:'Dentarg',battlegroup:'Stormstrike',region:'us'},
	154: {name:'Archimonde',battlegroup:'Stormstrike',region:'us'},
	155: {name:'Haomarush',battlegroup:'Stormstrike',region:'us'},
	156: {name:'Ysondre',battlegroup:'Stormstrike',region:'us'},
	157: {name:'Andorhal',battlegroup:'Stormstrike',region:'us'},
	158: {name:'Executus',battlegroup:'Stormstrike',region:'us'},
	159: {name:'Black Dragonflight',battlegroup:'Stormstrike',region:'us'},
	160: {name:'Dalvengyr',battlegroup:'Stormstrike',region:'us'},
	161: {name:'Zuluhed',battlegroup:'Stormstrike',region:'us'},
	162: {name:'Anetheron',battlegroup:'Stormstrike',region:'us'},
	163: {name:'Scilla',battlegroup:'Stormstrike',region:'us'},
	164: {name:'Mal\'Ganis',battlegroup:'Stormstrike',region:'us'},
	165: {name:'Steamwheedle Cartel',battlegroup:'Stormstrike',region:'us'},
	166: {name:'Arygos',battlegroup:'Nightfall',region:'us'},
	167: {name:'Uldaman',battlegroup:'Nightfall',region:'us'},
	168: {name:'Aerie Peak',battlegroup:'Nightfall',region:'us'},
	169: {name:'Gnomeregan',battlegroup:'Nightfall',region:'us'},
	170: {name:'Tanaris',battlegroup:'Nightfall',region:'us'},
	171: {name:'Undermine',battlegroup:'Nightfall',region:'us'},
	172: {name:'Anvilmar',battlegroup:'Nightfall',region:'us'},
	173: {name:'Doomhammer',battlegroup:'Nightfall',region:'us'},
	174: {name:'Icecrown',battlegroup:'Nightfall',region:'us'},
	175: {name:'Kel\'Thuzad',battlegroup:'Nightfall',region:'us'},
	176: {name:'Demon Soul',battlegroup:'Nightfall',region:'us'},
	177: {name:'Lethon',battlegroup:'Nightfall',region:'us'},
	178: {name:'Blackwing Lair',battlegroup:'Nightfall',region:'us'},
	179: {name:'Altar of Storms',battlegroup:'Nightfall',region:'us'},
	180: {name:'Onyxia',battlegroup:'Nightfall',region:'us'},
	181: {name:'Jaedenar',battlegroup:'Nightfall',region:'us'},
	182: {name:'Alterac Mountains',battlegroup:'Nightfall',region:'us'},
	183: {name:'Deathwing',battlegroup:'Nightfall',region:'us'},
	184: {name:'Sentinels',battlegroup:'Nightfall',region:'us'},
	185: {name:'The Venture Co',battlegroup:'Nightfall',region:'us'},
	186: {name:'Hyjal',battlegroup:'Whirlwind',region:'us'},
	187: {name:'Bladefist',battlegroup:'Whirlwind',region:'us'},
	188: {name:'Misha',battlegroup:'Whirlwind',region:'us'},
	189: {name:'Lightbringer',battlegroup:'Whirlwind',region:'us'},
	190: {name:'Uther',battlegroup:'Whirlwind',region:'us'},
	191: {name:'Cenarius',battlegroup:'Whirlwind',region:'us'},
	192: {name:'Winterhoof',battlegroup:'Whirlwind',region:'us'},
	193: {name:'Echo Isles',battlegroup:'Whirlwind',region:'us'},
	194: {name:'Fenris',battlegroup:'Whirlwind',region:'us'},
	195: {name:'Korialstrasz',battlegroup:'Whirlwind',region:'us'},
	196: {name:'Shu\'halo',battlegroup:'Whirlwind',region:'us'},
	197: {name:'Maiev',battlegroup:'Whirlwind',region:'us'},
	198: {name:'The Forgotten Coast',battlegroup:'Whirlwind',region:'us'},
	199: {name:'Anub\'arak',battlegroup:'Whirlwind',region:'us'},
	200: {name:'Vashj',battlegroup:'Whirlwind',region:'us'},
	201: {name:'Darrowmere',battlegroup:'Whirlwind',region:'us'},
	202: {name:'Sisters of Elune',battlegroup:'Whirlwind',region:'us'},
	203: {name:'Cenarion Circle',battlegroup:'Whirlwind',region:'us'},
	204: {name:'Blackwater Raiders',battlegroup:'Whirlwind',region:'us'},
	205: {name:'Ravenholdt',battlegroup:'Whirlwind',region:'us'},
	206: {name:'Borean Tundra',battlegroup:'Emberstorm',region:'us'},
	207: {name:'Quel\'dorei',battlegroup:'Emberstorm',region:'us'},
	208: {name:'Garrosh',battlegroup:'Emberstorm',region:'us'},
	209: {name:'Mok\'Nathal',battlegroup:'Emberstorm',region:'us'},
	210: {name:'Drenden',battlegroup:'Emberstorm',region:'us'},
	211: {name:'Antonidas',battlegroup:'Emberstorm',region:'us'},
	212: {name:'Nordrassil',battlegroup:'Emberstorm',region:'us'},
	213: {name:'Cairne',battlegroup:'Emberstorm',region:'us'},
	214: {name:'Shandris',battlegroup:'Emberstorm',region:'us'},
	215: {name:'Nazgrel',battlegroup:'Emberstorm',region:'us'},
	216: {name:'Hydraxis',battlegroup:'Emberstorm',region:'us'},
	217: {name:'Rivendare',battlegroup:'Emberstorm',region:'us'},
	218: {name:'Drak\'Tharon',battlegroup:'Emberstorm',region:'us'},
	219: {name:'Tortheldrin',battlegroup:'Emberstorm',region:'us'},
	220: {name:'Moon Guard',battlegroup:'Emberstorm',region:'us'},
	221: {name:'Wyrmrest Accord',battlegroup:'Emberstorm',region:'us'},
	222: {name:'Farstriders',battlegroup:'Emberstorm',region:'us'},
	223: {name:'Grizzly Hills',battlegroup:'Retaliation',region:'us'},
	224: {name:'Galakrond',battlegroup:'Retaliation',region:'us'},
	225: {name:'Dawnbringer',battlegroup:'Retaliation',region:'us'},
	226: {name:'Velen',battlegroup:'Retaliation',region:'us'},
	227: {name:'Azuremyst',battlegroup:'Retaliation',region:'us'},
	228: {name:'Terokkar',battlegroup:'Retaliation',region:'us'},
	229: {name:'Blade\'s Edge',battlegroup:'Retaliation',region:'us'},
	230: {name:'Exodar',battlegroup:'Retaliation',region:'us'},
	231: {name:'Area 52',battlegroup:'Retaliation',region:'us'},
	232: {name:'Zangarmarsh',battlegroup:'Retaliation',region:'us'},
	233: {name:'Fizzcrank',battlegroup:'Retaliation',region:'us'},
	234: {name:'Ghostlands',battlegroup:'Retaliation',region:'us'},
	235: {name:'Auchindoun',battlegroup:'Retaliation',region:'us'},
	236: {name:'Coilfang',battlegroup:'Retaliation',region:'us'},
	237: {name:'Shattered Halls',battlegroup:'Retaliation',region:'us'},
	238: {name:'Blood Furnace',battlegroup:'Retaliation',region:'us'},
	239: {name:'The Underbog',battlegroup:'Retaliation',region:'us'},
	240: {name:'The Scryers',battlegroup:'Retaliation',region:'us'},
	241: {name:'Aszune',battlegroup:'Blackout',region:'eu'},
	242: {name:'Sunstrider',battlegroup:'Blackout',region:'eu'},
	243: {name:'Al\'Akir',battlegroup:'Blackout',region:'eu'},
	244: {name:'Bloodhoof',battlegroup:'Blackout',region:'eu'},
	246: {name:'Doomhammer',battlegroup:'Blackout',region:'eu'},
	247: {name:'Twilight\'s Hammer',battlegroup:'Blackout',region:'eu'},
	248: {name:'Emerald Dream',battlegroup:'Blackout',region:'eu'},
	249: {name:'Aggramar',battlegroup:'Blackout',region:'eu'},
	250: {name:'Arathor',battlegroup:'Blackout',region:'eu'},
	251: {name:'Azjol-Nerub',battlegroup:'Blackout',region:'eu'},
	252: {name:'Draenor',battlegroup:'Blackout',region:'eu'},
	253: {name:'Zenedar',battlegroup:'Blackout',region:'eu'},
	254: {name:'Agamaggan',battlegroup:'Blackout',region:'eu'},
	255: {name:'Bladefist',battlegroup:'Blackout',region:'eu'},
	256: {name:'Bloodscalp',battlegroup:'Blackout',region:'eu'},
	257: {name:'Burning Blade',battlegroup:'Blackout',region:'eu'},
	258: {name:'Dragonblight',battlegroup:'Blackout',region:'eu'},
	259: {name:'Deathwing',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	260: {name:'Burning Legion',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	261: {name:'Dunemaul',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	262: {name:'Argent Dawn',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	263: {name:'Crushridge',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	264: {name:'Dragonmaw',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	265: {name:'Daggerspine',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	266: {name:'Illidan',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	267: {name:'Kael\'thas',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	268: {name:'Sargeras',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	269: {name:'Cho\'gall',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	270: {name:'Dalaran',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	271: {name:'Archimonde',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	272: {name:'Elune',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	273: {name:'Sinstralis',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	274: {name:'Ner\'zhul',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	275: {name:'Hyjal',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	276: {name:'Kirin Tor',battlegroup:'Cataclysme / Cataclysm',region:'eu'},
	277: {name:'Stormreaver',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	278: {name:'Silvermoon',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	279: {name:'Stormrage',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	280: {name:'Terenas',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	281: {name:'Thunderhorn',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	282: {name:'Turalyon',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	283: {name:'Ravencrest',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	284: {name:'Shadowmoon',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	285: {name:'Shattered Hand',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	286: {name:'Spinebreaker',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	287: {name:'Stormscale',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	288: {name:'Earthen Ring',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	289: {name:'Runetotem',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	290: {name:'Shadowsong',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	291: {name:'Skullcrusher',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	292: {name:'Baelgun',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	293: {name:'Blackhand',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	294: {name:'Alleria',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	295: {name:'Antonidas',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	296: {name:'Alexstrasza',battlegroup:'Cyclone / Wirbelsturm',region:'eu'},
	297: {name:'Gul\'dan',battlegroup:'Blutdurst',region:'eu'},
	298: {name:'Aegwynn',battlegroup:'Blutdurst',region:'eu'},
	299: {name:'Kel\'Thuzad',battlegroup:'Blutdurst',region:'eu'},
	300: {name:'Die Silberne Hand',battlegroup:'Blutdurst',region:'eu'},
	301: {name:'Nathrezim',battlegroup:'Blutdurst',region:'eu'},
	302: {name:'Malfurion',battlegroup:'Blutdurst',region:'eu'},
	303: {name:'Destromath',battlegroup:'Blutdurst',region:'eu'},
	304: {name:'Eredar',battlegroup:'Blutdurst',region:'eu'},
	305: {name:'Frostwolf',battlegroup:'Blutdurst',region:'eu'},
	306: {name:'Kil\'jaeden',battlegroup:'Blutdurst',region:'eu'},
	307: {name:'Mal\'Ganis',battlegroup:'Blutdurst',region:'eu'},
	308: {name:'Zirkel des Cenarius',battlegroup:'Blutdurst',region:'eu'},
	309: {name:'Mannoroth',battlegroup:'Blutdurst',region:'eu'},
	310: {name:'Proudmoore',battlegroup:'Blutdurst',region:'eu'},
	311: {name:'Gorgonnash',battlegroup:'Blutdurst',region:'eu'},
	312: {name:'Madmortem',battlegroup:'Blutdurst',region:'eu'},
	313: {name:'Zuluhed',battlegroup:'Blutdurst',region:'eu'},
	314: {name:'Nozdormu',battlegroup:'Blutdurst',region:'eu'},
	315: {name:'Perenolde',battlegroup:'Blutdurst',region:'eu'},
	316: {name:'Frostmourne',battlegroup:'Blutdurst',region:'eu'},
	317: {name:'Hellscream',battlegroup:'Raserei / Frenzy',region:'eu'},
	318: {name:'Magtheridon',battlegroup:'Raserei / Frenzy',region:'eu'},
	319: {name:'Laughing Skull',battlegroup:'Raserei / Frenzy',region:'eu'},
	320: {name:'Nordrassil',battlegroup:'Raserei / Frenzy',region:'eu'},
	321: {name:'Genjuros',battlegroup:'Raserei / Frenzy',region:'eu'},
	322: {name:'Balnazzar',battlegroup:'Raserei / Frenzy',region:'eu'},
	323: {name:'Quel\'Thalas',battlegroup:'Raserei / Frenzy',region:'eu'},
	324: {name:'Sen\'jin',battlegroup:'Raserei / Frenzy',region:'eu'},
	325: {name:'Aman\'Thul',battlegroup:'Raserei / Frenzy',region:'eu'},
	326: {name:'Anub\'arak',battlegroup:'Raserei / Frenzy',region:'eu'},
	327: {name:'Nera\'thor',battlegroup:'Raserei / Frenzy',region:'eu'},
	328: {name:'Kult der Verdammten',battlegroup:'Raserei / Frenzy',region:'eu'},
	329: {name:'Der Rat von Dalaran',battlegroup:'Raserei / Frenzy',region:'eu'},
	330: {name:'Das Syndikat',battlegroup:'Raserei / Frenzy',region:'eu'},
	331: {name:'Terrordar',battlegroup:'Raserei / Frenzy',region:'eu'},
	332: {name:'Dun Morogh',battlegroup:'Raserei / Frenzy',region:'eu'},
	333: {name:'Theradras',battlegroup:'Raserei / Frenzy',region:'eu'},
	334: {name:'Wrathbringer',battlegroup:'Raserei / Frenzy',region:'eu'},
	335: {name:'Onyxia',battlegroup:'Raserei / Frenzy',region:'eu'},
	336: {name:'Krag\'jin',battlegroup:'Raserei / Frenzy',region:'eu'},
	337: {name:'Defias Brotherhood',battlegroup:'Rampage / Saccage',region:'eu'},
	338: {name:'Darksorrow',battlegroup:'Rampage / Saccage',region:'eu'},
	339: {name:'The Venture Co',battlegroup:'Rampage / Saccage',region:'eu'},
	340: {name:'Lightning\'s Blade',battlegroup:'Rampage / Saccage',region:'eu'},
	341: {name:'Haomarush',battlegroup:'Rampage / Saccage',region:'eu'},
	342: {name:'Vashj',battlegroup:'Rampage / Saccage',region:'eu'},
	343: {name:'Sylvanas',battlegroup:'Rampage / Saccage',region:'eu'},
	344: {name:'Neptulon',battlegroup:'Rampage / Saccage',region:'eu'},
	345: {name:'Twisting Nether',battlegroup:'Rampage / Saccage',region:'eu'},
	346: {name:'The Maelstrom',battlegroup:'Rampage / Saccage',region:'eu'},
	347: {name:'Bloodfeather',battlegroup:'Rampage / Saccage',region:'eu'},
	348: {name:'Frostwhisper',battlegroup:'Rampage / Saccage',region:'eu'},
	349: {name:'Ragnaros',battlegroup:'Rampage / Saccage',region:'eu'},
	350: {name:'Khaz Modan',battlegroup:'Rampage / Saccage',region:'eu'},
	351: {name:'Varimathras',battlegroup:'Rampage / Saccage',region:'eu'},
	352: {name:'Throk\'Feroth',battlegroup:'Rampage / Saccage',region:'eu'},
	353: {name:'Les Sentinelles',battlegroup:'Rampage / Saccage',region:'eu'},
	354: {name:'Drek\'Thar',battlegroup:'Rampage / Saccage',region:'eu'},
	355: {name:'Rashgarroth',battlegroup:'Rampage / Saccage',region:'eu'},
	356: {name:'Conseil des Ombres',battlegroup:'Rampage / Saccage',region:'eu'},
	357: {name:'Trollbane',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	358: {name:'Bronzebeard',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	359: {name:'Moonglade',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	360: {name:'Talnivarr',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	361: {name:'Kul Tiras',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	362: {name:'Emeriss',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	363: {name:'Drak\'thul',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	364: {name:'Ahn\'Qiraj',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	365: {name:'Khadgar',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	366: {name:'Chromaggus',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	367: {name:'Dentarg',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	368: {name:'Executus',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	369: {name:'Mazrigos',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	370: {name:'Rexxar',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	371: {name:'Lothar',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	372: {name:'Malygos',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	373: {name:'Kargath',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	374: {name:'Khaz\'goroth',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	375: {name:'Ysera',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	376: {name:'Gilneas',battlegroup:'Reckoning / Abrechnung',region:'eu'},
	377: {name:'Xavius',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	378: {name:'Hakkar',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	379: {name:'Azuremyst',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	380: {name:'Steamwheedle Cartel',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	381: {name:'Scarshield Legion',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	382: {name:'Blade\'s Edge',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	383: {name:'Terokkar',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	384: {name:'Blackrock',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	385: {name:'Durotan',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	386: {name:'Arthas',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	387: {name:'Azshara',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	388: {name:'Blackmoore',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	389: {name:'Die Arguswacht',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	390: {name:'Nefarian',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	391: {name:'Anetheron',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	392: {name:'Nazjatar',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	393: {name:'Tichondrius',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	394: {name:'Die ewige Wacht',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	395: {name:'Die Todeskrallen',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	396: {name:'Thrall',battlegroup:'Glutsturm / Emberstorm',region:'eu'},
	397: {name:'Aerie Peak',battlegroup:'Misery',region:'eu'},
	398: {name:'Tarren Mill',battlegroup:'Misery',region:'eu'},
	399: {name:'Grim Batol',battlegroup:'Misery',region:'eu'},
	400: {name:'Jaedenar',battlegroup:'Misery',region:'eu'},
	401: {name:'Kazzak',battlegroup:'Misery',region:'eu'},
	402: {name:'Outland',battlegroup:'Misery',region:'eu'},
	403: {name:'Boulderfist',battlegroup:'Misery',region:'eu'},
	404: {name:'Vek\'nilash',battlegroup:'Misery',region:'eu'},
	405: {name:'Frostmane',battlegroup:'Misery',region:'eu'},
	406: {name:'Chamber of Aspects',battlegroup:'Misery',region:'eu'},
	407: {name:'Ravenholdt',battlegroup:'Misery',region:'eu'},
	408: {name:'Fizzcrank',battlegroup:'Misery',region:'eu'},
	409: {name:'Eonar',battlegroup:'Misery',region:'eu'},
	410: {name:'Kilrogg',battlegroup:'Misery',region:'eu'},
	411: {name:'Wildhammer',battlegroup:'Misery',region:'eu'},
	412: {name:'Stonemaul',battlegroup:'Misery',region:'eu'},
	413: {name:'Ysondre',battlegroup:'Vengeance / Rache',region:'eu'},
	414: {name:'Eldre\'Thalas',battlegroup:'Vengeance / Rache',region:'eu'},
	415: {name:'Suramar',battlegroup:'Vengeance / Rache',region:'eu'},
	416: {name:'Arathi',battlegroup:'Vengeance / Rache',region:'eu'},
	417: {name:'Culte de la Rive noire',battlegroup:'Vengeance / Rache',region:'eu'},
	418: {name:'Krasus',battlegroup:'Vengeance / Rache',region:'eu'},
	419: {name:'Tirion',battlegroup:'Vengeance / Rache',region:'eu'},
	420: {name:'Die Nachtwache',battlegroup:'Vengeance / Rache',region:'eu'},
	421: {name:'Lordaeron',battlegroup:'Vengeance / Rache',region:'eu'},
	422: {name:'Vek\'lor',battlegroup:'Vengeance / Rache',region:'eu'},
	423: {name:'Mug\'thol',battlegroup:'Vengeance / Rache',region:'eu'},
	424: {name:'Taerar',battlegroup:'Vengeance / Rache',region:'eu'},
	425: {name:'Dalvengyr',battlegroup:'Vengeance / Rache',region:'eu'},
	426: {name:'Rajaxx',battlegroup:'Vengeance / Rache',region:'eu'},
	427: {name:'Malorne',battlegroup:'Vengeance / Rache',region:'eu'},
	428: {name:'Der abyssische Rat',battlegroup:'Vengeance / Rache',region:'eu'},
	429: {name:'Ambossar',battlegroup:'Vengeance / Rache',region:'eu'},
	430: {name:'Lightbringer',battlegroup:'Cruelty / Crueldad',region:'eu'},
	431: {name:'Darkspear',battlegroup:'Cruelty / Crueldad',region:'eu'},
	432: {name:'Burning Steppes',battlegroup:'Cruelty / Crueldad',region:'eu'},
	433: {name:'Bronze Dragonflight',battlegroup:'Cruelty / Crueldad',region:'eu'},
	434: {name:'Kor\'gall',battlegroup:'Cruelty / Crueldad',region:'eu'},
	436: {name:'Darkmoon Faire',battlegroup:'Cruelty / Crueldad',region:'eu'},
	437: {name:'Alonsus',battlegroup:'Cruelty / Crueldad',region:'eu'},
	438: {name:'Anachronos',battlegroup:'Cruelty / Crueldad',region:'eu'},
	439: {name:'Minahonda',battlegroup:'Cruelty / Crueldad',region:'eu'},
	440: {name:'Dun Modr',battlegroup:'Cruelty / Crueldad',region:'eu'},
	441: {name:'Zul\'jin',battlegroup:'Cruelty / Crueldad',region:'eu'},
	442: {name:'Uldum',battlegroup:'Cruelty / Crueldad',region:'eu'},
	443: {name:'C\'Thun',battlegroup:'Cruelty / Crueldad',region:'eu'},
	444: {name:'Shen\'dralar',battlegroup:'Cruelty / Crueldad',region:'eu'},
	445: {name:'Tyrande',battlegroup:'Cruelty / Crueldad',region:'eu'},
	446: {name:'Exodar',battlegroup:'Cruelty / Crueldad',region:'eu'},
	447: {name:'Los Errantes',battlegroup:'Cruelty / Crueldad',region:'eu'},
	448: {name:'Sanguino',battlegroup:'Cruelty / Crueldad',region:'eu'},
	449: {name:'Medivh',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	450: {name:'Eitrigg',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	451: {name:'Garona',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	452: {name:'La Croisade écarlate',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	453: {name:'Arak-arahm',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	454: {name:'Uldaman',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	455: {name:'Confrérie du Thorium',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	456: {name:'Vol\'jin',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	457: {name:'Dethecus',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	458: {name:'Un\'Goro',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	459: {name:'Garrosh',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	460: {name:'Todeswache',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	461: {name:'Arygos',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	462: {name:'Teldrassil',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	463: {name:'Norgannon',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	464: {name:'Der Mithrilorden',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	465: {name:'Area 52',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	466: {name:'Forscherliga',battlegroup:'Embuscade / Hinterhalt',region:'eu'},
	467: {name:'Гордунни',battlegroup:'Шквал',region:'eu'},
	468: {name:'Свежеватель Душ',battlegroup:'Шквал',region:'eu'},
	469: {name:'Страж Смерти',battlegroup:'Шквал',region:'eu'},
	470: {name:'Король-лич',battlegroup:'Шквал',region:'eu'},
	471: {name:'Пиратская бухта',battlegroup:'Шквал',region:'eu'},
	472: {name:'Ясеневый лес',battlegroup:'Шквал',region:'eu'},
	473: {name:'Азурегос',battlegroup:'Шквал',region:'eu'},
	474: {name:'Гром',battlegroup:'Шквал',region:'eu'},
	475: {name:'Термоштепсель',battlegroup:'Шквал',region:'eu'},
	476: {name:'Вечная Песня',battlegroup:'Шквал',region:'eu'},
	477: {name:'The Sha\'tar',battlegroup:'Vindication',region:'eu'},
	478: {name:'Nagrand',battlegroup:'Vindication',region:'eu'},
	479: {name:'Hellfire',battlegroup:'Vindication',region:'eu'},
	480: {name:'Karazhan',battlegroup:'Vindication',region:'eu'},
	481: {name:'Shattered Halls',battlegroup:'Vindication',region:'eu'},
	482: {name:'Ghostlands',battlegroup:'Vindication',region:'eu'},
	483: {name:'Auchindoun',battlegroup:'Vindication',region:'eu'},
	484: {name:'Sporeggar',battlegroup:'Vindication',region:'eu'},
	485: {name:'Echsenkessel',battlegroup:'Sturmangriff / Charge',region:'eu'},
	486: {name:'Blutkessel',battlegroup:'Sturmangriff / Charge',region:'eu'},
	487: {name:'Das Konsortium',battlegroup:'Sturmangriff / Charge',region:'eu'},
	488: {name:'Die Aldor',battlegroup:'Sturmangriff / Charge',region:'eu'},
	489: {name:'Festung der Stürme',battlegroup:'Sturmangriff / Charge',region:'eu'},
	490: {name:'Shattrath',battlegroup:'Sturmangriff / Charge',region:'eu'},
	491: {name:'Nethersturm',battlegroup:'Sturmangriff / Charge',region:'eu'},
	495: {name:'Разувий',battlegroup:'Вихрь',region:'eu'},
	496: {name:'Дракономор',battlegroup:'Вихрь',region:'eu'},
	497: {name:'Подземье',battlegroup:'Вихрь',region:'eu'},
	498: {name:'Седогрив',battlegroup:'Вихрь',region:'eu'},
	499: {name:'Chants éternels',battlegroup:'Sturmangriff / Charge',region:'eu'},
	500: {name:'Naxxramas',battlegroup:'Sturmangriff / Charge',region:'eu'},
	501: {name:'Temple noir',battlegroup:'Sturmangriff / Charge',region:'eu'},
	502: {name:'Les Clairvoyants',battlegroup:'Sturmangriff / Charge',region:'eu'},
	503: {name:'Marécage de Zangar',battlegroup:'Sturmangriff / Charge',region:'eu'},
	934: {name:'Nesingwary',battlegroup:'Emberstorm',region:'us'},
	935: {name:'Saurfang',battlegroup:'Misery',region:'eu'},
	936: {name:'Ulduar',battlegroup:'Vengeance / Rache',region:'eu'},
	937: {name:'Colinas Pardas',battlegroup:'Cruelty / Crueldad',region:'eu'},
	939: {name:'Борейская тундра',battlegroup:'Вихрь',region:'eu'},
	940: {name:'Warsong',battlegroup:'Blackout',region:'eu'},
	941: {name:'Molten Core',battlegroup:'Cruelty / Crueldad',region:'eu'},
	942: {name:'Галакронд',battlegroup:'Вихрь',region:'eu'},
	943: {name:'Ткач Смерти',battlegroup:'Вихрь',region:'eu'},
	945: {name:'Epitech',battlegroup:'Blackout',region:'eu'},
	946: {name:'Черный Шрам',battlegroup:'Шквал',region:'eu'},
	947: {name:'Ревущий фьорд',battlegroup:'Вихрь',region:'eu'},
	948: {name:'Голдринн',battlegroup:'Шквал',region:'eu'}
};
var wt_presets = {
	1: {
		pve: {
			arms: {__icon:'ability_warrior_savageblow',str:100,hitrtng:90,exprtng:85,critstrkrtng:80,mastrtng:70,hastertng:50},
			fury: {__icon:'ability_warrior_innerrage',str:100,exprtng:90,hitrtng:90,critstrkrtng:80,mastrtng:70,hastertng:50},
			prot: {__icon:'ability_warrior_defensivestance',sta:100,mastrtng:90,parryrtng:85,dodgertng:80,exprtng:70,hitrtng:65,str:60,critstrkrtng:50}
		}
	},
	2: {
		pve: {
			holy: {__icon:'spell_holy_holybolt',int:100,hastertng:80,spi:50,mastrtng:50,splpwr:50,critstrkrtng:25},
			prot: {__icon:'ability_paladin_shieldofthetemplar',sta:100,mastrtng:90,dodgertng:80,parryrtng:80,hitrtng:70,exprtng:60,str:50},
			retrib: {__icon:'spell_holy_auraoflight',str:100,mledps:100,atkpwr:45,hitrtng:35,exprtng:22,hastertng:18,critstrkrtng:16,mastrtng:9}
		}
	},
	3: {
		pve: {
			beast: {__icon:'ability_hunter_bestialdiscipline',agi:100,rgddps:100,hitrtng:80,critstrkrtng:60,mastrtng:40,hastertng:20},
			marks: {__icon:'ability_hunter_focusedaim',agi:100,rgddps:100,hitrtng:80,critstrkrtng:60,hastertng:60,mastrtng:40},
			surv: {__icon:'ability_hunter_camouflage',agi:100,rgddps:100,hitrtng:80,critstrkrtng:60,hastertng:40,mastrtng:20}
		}
	},
	4: {
		pve: {
			assas: {__icon:'ability_rogue_eviscerate',mledps:100,agi:100,hitrtng:67,mastrtng:50,hastertng:46,exprtng:42,critstrkrtng:35},
			combat: {__icon:'ability_backstab',mledps:100,agi:100,hitrtng:70,exprtng:59,hastertng:56,critstrkrtng:35,mastrtng:33},
			subtle: {__icon:'ability_stealth',mledps:100,agi:100,hitrtng:40,hastertng:37,exprtng:33,critstrkrtng:31,mastrtng:20}
		}
	},
	5: {
		pve: {
			disc: {__icon:'spell_holy_powerwordshield',int:100,spi:80,splpwr:19,critstrkrtng:11,hastertng:10,mastrtng:6},
			holy: {__icon:'spell_holy_guardianspirit',int:100,spi:95,hastertng:85,mastrtng:80,critstrkrtng:30},
			shadow: {__icon:'spell_shadow_shadowwordpain',int:100,splpwr:79,hastertng:50,critstrkrtng:40,mastrtng:38,spi:37,hitrtng:37}
		}
	},
	6: {
		pve: {
			blood: {__icon:'spell_deathknight_bloodpresence',mledps:500,mastrtng:100,sta:100,agi:69,dodgertng:50,parryrtng:43,exprtng:38,str:31,critstrkrtng:22,armor:18,hastertng:16,hitrtng:16,armorbonus:11},
			frostdps: {__icon:'spell_deathknight_frostpresence',str:100,mledps:100,hitrtng:43,exprtng:41,hastertng:37,mastrtng:35,atkpwr:32,critstrkrtng:26},
			unholy: {__icon:'spell_deathknight_unholypresence',str:100,mledps:100,hitrtng:25,hastertng:25,atkpwr:23,exprtng:21,critstrkrtng:20,mastrtng:8}
		}
	},
	7: {
		pve: {
			elem: {__icon:'spell_nature_lightning',hitrtng:100,splpwr:80,int:80,mastrtng:75,hastertng:75,critstrkrtng:40},
			enhance: {__icon:'spell_nature_lightningshield',mledps:124,agi:100,hitrtng:60,exprtng:48,mastrtng:44,str:42,atkpwr:40,int:36,splpwr:36,critstrkrtng:28,hastertng:16},
			resto: {__icon:'spell_nature_magicimmunity',int:100,splpwr:83,spi:75,hastertng:67,critstrkrtng:58,mastrtng:42,sta:8}
		}
	},
	8: {
		pve: {
			arcane: {__icon:'spell_holy_magicalsentry',splpwr:100,int:100,hitrtng:80,hastertng:50,critstrkrtng:45,mastrtng:40},
			fire: {__icon:'spell_fire_firebolt02',int:100,hitrtng:82,splpwr:68,critstrkrtng:52,mastrtng:37,hastertng:35},
			frost: {__icon:'spell_frost_frostbolt02',int:100,splpwr:100,hitrtng:80,mastrtng:70,hastertng:50,critstrkrtng:45}
		}
	},
	9: {
		pve: {
			afflic: {__icon:'spell_shadow_deathcoil',int:100,splpwr:81,hitrtng:52,hastertng:43,critstrkrtng:32,mastrtng:30,sta:1},
			demo: {__icon:'spell_shadow_metamorphosis',int:100,splpwr:79,hitrtng:63,hastertng:40,critstrkrtng:35,mastrtng:31,sta:1},
			destro: {__icon:'spell_shadow_rainoffire',int:100,splpwr:77,hitrtng:64,hastertng:36,critstrkrtng:34,mastrtng:29,sta:1}
		}
	},
	11: {
		pve: {
			balance: {__icon:'spell_nature_starfall',int:100,splpwr:100,spi:90,hastertng:90,hitrtng:90,mastrtng:80,critstrkrtng:70},
			feraldps: {__icon:'ability_racial_bearform',dps:151,agi:100,str:78,atkpwr:37,mastrtng:35,hastertng:32,exprtng:29,hitrtng:28,critstrkrtng:28},
			feraltank: {__icon:'ability_racial_bearform',sta:100,armor:75,agi:48,dodgertng:41,armorbonus:21,mastrtng:16,critstrkrtng:13,str:10,exprtng:10,health:7,atkpwr:5,hitrtng:5,hastertng:1},
			resto: {__icon:'spell_nature_healingtouch',int:100,splpwr:95,spi:90,mastrtng:80,hastertng:70,critstrkrtng:60}
		}
	}
};