// ciphers.js

/*
new cipher(
	"English Ordinal", // cipher name
	"English", // category
	120, 57, 36, // hue, saturation, lightness
	[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122], // lowercase characters
	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], // values
	true, // characters with diacritic marks have the same value as regular ones, default is "true"
	true // enabled state, default is "false"
	false // case sensitive cipher, default is "false"
)
*/

cipherList = [
	new cipher(
		"English Ordinal",
		"English",
		120, 65, 62,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		true,
		false
	),
	new cipher(
		"Reverse Ordinal",
		"English",
		146, 74, 50,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
		true,
		true,
		false
	),
	new cipher(
		"English Reduced",
		"English",
		216, 95, 73,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8],
		true,
		true,
		false
	),
	new cipher(
		"Reverse Reduced",
		"English",
		180, 60, 69,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1],
		true,
		true,
		false
	),
	new cipher(
		"English Standard",
		"English",
		50, 78, 63,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800],
		true,
		false,
		false
	),
	new cipher(
		"Agrippa Key",
		"English",
		256, 95, 76,
		[97,98,99,100,101,102,103,104,105,107,108,109,110,111,112,113,114,115,116,117,120,121,122,106,118,10680,119],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900],
		true,
		false,
		false
	),
	new cipher(
		"Case Sensitive",
		"English",
		190, 50, 60,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],
		true,
		false,
		true
	),
	new cipher(
		"Alt Case Sensitive",
		"English",
		127, 36, 62,
		[65,97,66,98,67,99,68,100,69,101,70,102,71,103,72,104,73,105,74,106,75,107,76,108,77,109,78,110,79,111,80,112,81,113,82,114,83,115,84,116,85,117,86,118,87,119,88,120,89,121,90,122],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],
		true,
		false,
		true
	),
	new cipher(
		"Elizabethan Simple",
		"Elizabethan",
		120, 65, 62,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,9,10,11,12,13,14,15,16,17,18,19,20,20,21,22,23,24],
		true,
		false,
		false
	),
	new cipher(
		"Elizabethan Reverse",
		"Elizabethan",
		146, 74, 50,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[24,23,22,21,20,19,18,17,16,16,15,14,13,12,11,10,9,8,7,6,5,5,4,3,2,1],
		true,
		false,
		false
	),
	new cipher(
		"Elizabethan Short",
		"Elizabethan",
		180, 60, 69,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[1,2,3,4,5,6,7,8,9,9,1,2,3,4,5,6,7,8,9,1,2,2,3,4,5,6],
		true,
		false,
		false
	),
	new cipher(
		"Elizabethan R Short",
		"Elizabethan",
		207, 77, 64,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[6,5,4,3,2,1,9,8,7,7,6,5,4,3,2,1,9,8,7,6,5,5,4,3,2,1],
		true,
		false,
		false
	),
	new cipher(
		"Kaye Cipher",
		"Elizabethan",
		0, 65, 66,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[27,28,29,30,31,32,33,34,35,35,10,11,12,13,14,15,16,17,18,19,20,20,21,22,23,24],
		true,
		false,
		false
	),
	new cipher(
		"Modern Kaye",
		"Elizabethan",
		352, 61, 78,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[27,28,29,30,31,32,33,34,35,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		false,
		false
	),
	new cipher(
		"Illuminati Novice",
		"Illuminati",
		33, 91, 58,
		[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122],
		[12,11,10,9,8,7,6,5,4,4,3,2,1,13,14,15,16,17,18,19,20,20,21,22,23,24],
		true,
		false,
		false
	),
		new cipher(
		"English Qaballa",
		"Thelemic",
		13, 68, 64,
		[97,108,119,104,115,100,111,122,107,118,103,114,99,110,121,106,117,102,113,98,109,120,105,116,101,112],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		false,
		false
	),
	new cipher(
		"Cipher X",
		"Thelemic",
		36, 94, 64,
		[107,102,119,114,109,100,121,116,97,118,113,104,99,120,111,106,101,108,103,98,115,110,105,122,117,112],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
		true,
		false,
		false
	),
	new cipher(
		"Trigrammaton Qabalah",
		"Thelemic",
		195, 68, 69,
		[105,108,99,104,112,97,120,106,119,116,111,103,102,101,114,115,113,107,121,122,98,109,118,100,110,117],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
		true,
		false,
		false
	),
	new cipher(
		"Mispar Siduri",
		"Hebrew",
		33, 91, 58,
		[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1499,1500,1502,1504,1505,1506,1508,1510,1511,1512,1513,1514,1498,1501,1503,1507,1509],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,11,13,14,17,18],
		true,
		false,
		false
	),
	new cipher(
		"Mispar Katan",
		"Hebrew",
		45, 95, 53,
		[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1499,1500,1502,1504,1505,1506,1508,1510,1511,1512,1513,1514,1498,1501,1503,1507,1509],
		[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,2,4,5,8,9],
		true,
		false,
		false
	),
	new cipher(
		"Mispar Hechrachi",
		"Hebrew",
		50, 78, 63,
		[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1499,1500,1502,1504,1505,1506,1508,1510,1511,1512,1513,1514,1498,1501,1503,1507,1509],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,20,40,50,80,90],
		true,
		false,
		false
	),
	new cipher(
		"Mispar Gadol",
		"Hebrew",
		44, 62, 73,
		[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1499,1500,1502,1504,1505,1506,1508,1510,1511,1512,1513,1514,1498,1501,1503,1507,1509],
		[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900],
		true,
		false,
		false
	),
	new cipher(
		"Greek Ordinal",
		"Greek",
		154, 70, 67,
		[945,946,947,948,949,989,987,950,951,952,953,954,955,956,957,958,959,960,985,961,963,962,964,965,966,967,968,969,993],
		[1,2,3,4,5,6,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20,21,22,23,24,25,26,27],
		true,
		false,
		false
	),
	new cipher(
		"Greek Reduced",
		"Greek",
		141, 53, 80,
		[945,946,947,948,949,989,987,950,951,952,953,954,955,956,957,958,959,960,985,961,963,962,964,965,966,967,968,969,993],
		[1,2,3,4,5,6,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,2,3,4,5,6,7,8,9],
		true,
		false,
		false
	),
	new cipher(
		"Greek Isopsephy",
		"Greek",
		191, 71, 71,
		[945,946,947,948,949,989,987,950,951,952,953,954,955,956,957,958,959,960,985,961,963,962,964,965,966,967,968,969,993],
		[1,2,3,4,5,6,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,200,300,400,500,600,700,800,900],
		true,
		false,
		false
	),
	new cipher(
		"Greek Ordinal 24",
		"Greek",
		218, 75, 81,
		[945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,963,962,964,965,966,967,968,969],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,18,19,20,21,22,23,24],
		true,
		false,
		false
	),
	new cipher(
		"Arabic Ordinal",
		"Arabic",
		25, 59, 64,
		[1575,1649,1650,1651,1653,1576,1580,1583,1607,1577,1608,1586,1581,1591,1610,1609,1603,1604,1605,1606,1587,1593,1601,1589,1602,1585,1588,1578,1579,1582,1584,1590,1592,1594],
		[1,1,1,1,1,2,3,4,5,5,6,7,8,9,10,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
		true,
		false,
		false
	),
	new cipher(
		"Arabic Reduced",
		"Arabic",
		25, 54, 69,
		[1575,1649,1650,1651,1653,1576,1580,1583,1607,1577,1608,1586,1581,1591,1610,1609,1603,1604,1605,1606,1587,1593,1601,1589,1602,1585,1588,1578,1579,1582,1584,1590,1592,1594],
		[1,1,1,1,1,2,3,4,5,5,6,7,8,9,1,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1],
		true,
		false,
		false
	),
	new cipher(
		"Arabic Standard",
		"Arabic",
		25, 64, 59,
		[1575,1649,1650,1651,1653,1576,1580,1583,1607,1577,1608,1586,1581,1591,1610,1609,1603,1604,1605,1606,1587,1593,1601,1589,1602,1585,1588,1578,1579,1582,1584,1590,1592,1594],
		[1,1,1,1,1,2,3,4,5,5,6,7,8,9,10,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000],
		true,
		false,
		false
	),
	new cipher(
		"Russian Ordinal",
		"Russian",
		120, 65, 62,
		[1072,1073,1074,1075,1076,1077,1105,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],
		false,
		false,
		false
	),
	new cipher(
		"Russian R Ordinal",
		"Russian",
		146, 74, 50,
		[1072,1073,1074,1075,1076,1077,1105,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],
		[33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
		false,
		false,
		false
	),
	new cipher(
		"Russian Reduced",
		"Russian",
		216, 95, 73,
		[1072,1073,1074,1075,1076,1077,1105,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],
		[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6],
		false,
		false,
		false
	),
	new cipher(
		"Russian R Reduced",
		"Russian",
		180, 60, 69,
		[1072,1073,1074,1075,1076,1077,1105,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],
		[6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1],
		false,
		false,
		false
	)
]