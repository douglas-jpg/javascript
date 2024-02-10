// operadores aritimeticos, relacionais, logicos e ternario
let a = 5
let b = 10
// aritimeticos
a += 4  // a = a + 4
b -= 4  // b = b - 4
a++     // a = a + 1
b--     //b = b -1
5 + 2   // = 7 soma
5 - 2   // = 3 subtração
5 * 2   // = 10 multiplicação
5 / 2   // = 2.5 divisão
5 % 2   // = 1 resto
5 ** 2  // = 25 potencia

// operadores relacionais so retornam verdadeiro ou falso
a > b       // maior
a < b       // menor
a >= b      // maior ou igual
a <= b      // menor ou igual
a != b      // diferente
a == b      // igual
5 == '5'    // true 
5 === '5'   // analisa o valor e tipo false 

// operadores logicos 
! true          // negação
true && true    // conjução e
true || false   // disjunção ou

// operador ternario */
equação ? true : false        // se teste for verdade execulta algo se nao execulta outro
a > b ? 'é maior' : 'é menor'

/* ordem de precendencia:
()
**
/ % *
+ -
< > <= >= == != ===
!
&&
||
? :
*/