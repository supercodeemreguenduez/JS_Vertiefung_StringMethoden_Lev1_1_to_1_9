// Lev_1_1

// let nachName = 'Duck'; 4
// let vorName = 'Donald'; 6
// let name = nachName + vorName; 10

// console.log(nachName.length, vorName.length, name.length);

/////////////////////////////////////////////////////////
// Lev_1_2

// let txt = 'How inappropriate to call this planet Earth, when clearly it is Ocean.';

// console.log(txt.indexOf('h')); 27
// console.log(txt.indexOf('Earth')); 38
// console.log(txt.indexOf('Moon')); -1

/////////////////////////////////////////////////////////
// Lev_1_3

// let txt2 = 'Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.';

// console.log(txt2.search(';')); 34
// console.log(txt2.search('green')); 6
// console.log(txt2.search('blue')); -1

/////////////////////////////////////////////////////////
// Lev_1_4

// let A = 'Sam is going to coding school';

// let a = (A.slice(0, 3));
// document.write(a + "<br>");
// let b = (A.slice(4, 6));
// document.write(b + "<br>");
// let c = A.slice(1, 15) + A.slice(-7, (A.length))
// document.write(c + "<br>");
// let d = A.slice(4, 15) + A.slice(-7, (A.length));
// document.write(d + "<br>");
// let e = A.slice(-6, (A.length));
// document.write(e + "<br>");
// let f = A.slice(0, 6) + A.slice(-7, (A.length));
// document.write(f + "<br>");

/////////////////////////////////////////////////////////
// Lev_1_5

// let text = 'Sam is back from coding school';

// let a = text.substring(0, 3);
// document.write(a + "<br>");
// let b = text.substring(4, 6);
// document.write(b + "<br>");
// let c = text.substring(24, 30);
// document.write(c + "<br>");
// let d = text.substring(0, 4) + text.substring(4, 7) + text.substring(24, 30);
// document.write(d + "<br>");

/////////////////////////////////////////////////////////
// Lev_1_6

// let text = 'Sam is working at coding school';
// let outputA = document.getElementById('a');
// let outputB = document.getElementById('b');
// let outputC = document.getElementById('c');
// let outputD = document.getElementById('d');

// let a = text.substr(0, 3);
// outputA.innerHTML = a;
// let b = text.substr(4, 2);
// outputB.innerHTML = b;
// let c = text.substr(15, 2) + text.substr(24, 7);
// outputC.innerHTML = c;
// let d = text.substr(0, 4) + text.substr(7, 4) + text.substr(5, 1) + text.substr(14, 3) + text.substr(24, 7);
// outputD.innerHTML = d;

/////////////////////////////////////////////////////////
// Lev_1_7

// let text = 'Sam is good at coding school';

// let outputA = document.getElementById('a');
// let outputB = document.getElementById('b');
// let outputC = document.getElementById('c');

// let a = text.replace("good", "bad").replace("coding", "");
// outputA.innerHTML = a;
// let b = text.replace("Sam", "Tom").replace("coding", "");
// outputB.innerHTML = b;
// let c = text.replace("coding school", "tennis");
// outputC.innerHTML = c;

/////////////////////////////////////////////////////////
// Lev_1_8

// let text = 'Sam is going to coding school';

// let outputA = document.getElementById('a');
// let outputB = document.getElementById('b');
// let outputC = document.getElementById('c');
// let outputD = document.getElementById('d');
// let outputE = document.getElementById('e');

// let a = text.toUpperCase().replace('CODING', '');
// outputA.innerHTML = a;

// let b = text.toLowerCase().replace('to coding', 'at');
// outputB.innerHTML = b;

// let c = text.substring(0, 3).toUpperCase() + text.substring(3, 15) + text.substring(22, 29).toUpperCase();
// outputC.innerHTML = c;

// let d = text.substring(0, 3).toLowerCase() + text.substring(3, 16).toUpperCase() + text.substring(22, 29).toLowerCase();
// outputD.innerHTML = d;

// let e = text.substring(0, 3) + text.substring(3, 5).toUpperCase() + text.substring(5, 7) + text.substring(7, 8).toUpperCase() + text.substring(8, 13) + text.substring(13, 14).toUpperCase() + text.substring(14, 16) + text.substring(22, 24).toUpperCase() + text.substring(24, 30);
// outputE.innerHTML = e;