function openNav() {
    document.getElementById("sidebar").style.width = "250px"; // Spécifiez l'ID de l'élément
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0"; // Fermez le menu
    document.getElementById("main").style.marginLeft = "0"; // Réinitialisez la marge
}

// récupérer les valeurs sélectionnées et les sauvegarder dans le LocalStorage.
function saveSettings() {
    const amount = document.getElementById("amount").value;
    const difficulty = document.getElementById("difficulty").value;

    localStorage.setItem("quizAmount", amount);
    localStorage.setItem("quizDifficulty", difficulty);
}
//Récupérer les valeurs sur la page slide2.html :
window.onload = function() {
    const amount = localStorage.getItem("quizAmount");
    const difficulty = localStorage.getItem("quizDifficulty");

    console.log("Amount:", amount);
    console.log("Difficulty:", difficulty);

    // Utiliser ces valeurs pour configurer ton quiz
};
 const questions = {
            easy: [
                { question: "Qu'est-ce qu'une variable en JavaScript ?", options: [ "Une fonction", "Un conteneur pour stocker des données", "Un opérateur", "Un nombre"], answer: "Un conteneur pour stocker des données" },
                { question: "Quel mot-clé est utilisé pour déclarer une variable en JavaScript ?", options: [ "int", "string","var", "float"], answer: "var" },
                { question: "Quelle méthode est utilisée pour écrire dans la console du navigateur ?", options: [ "print()","console.log()", "echo()", "write()"], answer: "console.log()" },
                { question: "Comment créer une fonction en JavaScript ?", options: [ "def myFunction()", "create function myFunction()","function myFunction()", "function:MyFuNC"], answer: "function myFunction()" },
                { question: "Quel symbole est utilisé pour les commentaires sur une seule ligne en JavaScript ?", options: [ "/* */", "<!-- -->", "#","//"], answer: "//" },
                { question: "Comment ajouter un élément à la fin d'un tableau en JavaScript ?", options: [ "pop()", "shift()", "unshift()","push()"], answer: "push()" },
                { question: "Quel mot-clé est utilisé pour créer un objet en JavaScript ?", options: [ "class","new", "object", "create"], answer: "new" },
                { question: "Quelle méthode est utilisée pour supprimer le dernier élément d'un tableau en JavaScript ?", options: [ "shift()", "splice()","pop()", "slice()"], answer: "pop()" },
                { question: "Quel est le résultat de 2 + '2' en JavaScript ?", options: [ "4", "NaN", "22","Erreur"], answer: "22" },
                { question: "Quel mot-clé est utilisé pour créer une boucle en JavaScript ?", options: ["for", "loop", "repeat", "iterate"], answer: "for" },
                { question: "Quelle méthode est utilisée pour ajouter un élément au début d'un tableau en JavaScript ?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "unshift()" },
                { question: "Quel est le résultat de '5' + 2 en JavaScript ?", options: ["7", "5", "Erreur","52" ], answer: "52" },
                { question: "Comment définir une constante en JavaScript ?", options: ["const", "let", "var", "define"], answer: "const" },
                { question: "Quelle méthode est utilisée pour trier les éléments d'un tableau en JavaScript ?", options: [ "order()", "arrange()", "sort()","rank()"], answer: "sort()" },
                { question: "Quel est le résultat de 2 + '2' en JavaScript ?", options: [ "22","4", "NaN", "Erreur"], answer: "22" },
                { question: "Comment créer un objet vide en JavaScript ?", options: [ "new ObjectFor()","{}", "[]", "new Object()", ], answer: "{}" },
                { question: "Quelle méthode est utilisée pour extraire une portion d'une chaîne de caractères en JavaScript ?", options: ["substring()", "slice()", "substr()", "split()"], answer: "substring()" },
                { question: "Quel est le résultat de 'Hello' + ' World' en JavaScript ?", options: ["Hello World", "HelloWorld", "Hello+ World", "Erreur"], answer: "Hello World" },
                { question: "Comment vérifier si un élément existe dans un tableau en JavaScript ?", options: [ "contains()",  "indexOf()","exists()", "find()"], answer: "indexOf()" },
                { question: "Quelle méthode est utilisée pour joindre tous les éléments d'un tableau en une seule chaîne en JavaScript ?", options: [ "concat()", "merge()",  "join()","combine()"], answer: "join()" },
                { question: "Quel est le résultat de typeof 123 en JavaScript ?", options: [ "boolean","number", "string", "object", ], answer: "number" },
                { question: "Comment créer une fonction anonyme en JavaScript ?", options: [ "() => {}","function() {}", "function() ", "function() ={}"], answer: "() => {}" },
                { question: "Comment vérifier si un tableau est vide en JavaScript ?", options: ["array.length === 01", "array.isEmpty(0)", "array.length == 0", "array.isEmpty()"], answer: "array.length === 0" },
                { question: "Quel est le résultat de 3 == '3' en JavaScript ?", options: ["true", "false", "undefined", "NaN"], answer: "true" },
                { question: "Comment accéder à la première valeur d'un tableau en JavaScript ?", options: ["array[0]", "array.first()", "array[1]", "array.start()"], answer: "array[0]" },
                { question: "Quelle méthode est utilisée pour supprimer des éléments d'un tableau en JavaScript ?", options: [ "slice()","splice()", "pop()", "shift()"], answer: "splice()" },
                { question: "Quel est le résultat de 10 / 2 en JavaScript ?", options: [ "10", "2", "Erreur","5",], answer: "5" },
                { question: "Comment définir une fonction en JavaScript ?", options: ["function name() {}", "function name {}()", "def name() {}", "function: name() {}"], answer: "function name() {}" },
                { question: "Quel est le résultat de '2' * 3 en JavaScript ?", options: [ "23", "Erreur", "NaN","6",], answer: "6" },
                { question: "Quelle méthode est utilisée pour convertir une chaîne en nombre en JavaScript ?", options: [ "toNumber()", "convert()", "parseInt()","parse()"], answer: "parseInt()" },
                { question: "Comment vérifier le type d'une variable en JavaScript ?", options: ["typeof", "instanceof", "classof", "checktype"], answer: "typeof" },
                { question: "Comment créer un tableau en JavaScript ?", options: [ "{}", "[]", "new Array()", "array()"], answer: "[]" },
                { question: "Quelle méthode est utilisée pour ajouter un élément à un tableau en JavaScript ?", options: [ "append()", "add()","push()", "insert()"], answer: "push()" },
                { question: "Quel est le résultat de true + false en JavaScript ?", options: [ "0", "1","true", "false"], answer: "1" },
                { question: "Comment accéder à la dernière valeur d'un tableau en JavaScript ?", options: ["array[array.length - 1]", "array[array.length]", "array.last()", "array.end()"], answer: "array[array.length - 1]" },
                { question: "Quelle méthode est utilisée pour ajouter des éléments au début d'un tableau en JavaScript ?", options: ["push()","unshift()",  "add()", "prepend()"], answer: "unshift()" },
                { question: "Quel est le résultat de 'Hello'.length en JavaScript ?", options: ["5", "Hello", "Erreur", "undefined"], answer: "5" },
                { question: "Comment concaténer deux chaînes en JavaScript ?", options: ["'str1' + 'str2'", "'str1'.concat('str2')", "'str1'.append('str2')", "'str1'.join('str2')"], answer: "'str1' + 'str2'" },
                { question: "Comment faire une comparaison stricte en JavaScript ?", options: [ "<","===", "==", ">", ], answer: "===" },
                { question: "Quelle méthode est utilisée pour supprimer le premier élément d'un tableau en JavaScript ?", options: ["shift()", "pop()", "unshift()", "splice()"], answer: "shift()" },
                { question: "Quel est le résultat de 1 + '1' en JavaScript ?", options: ["2", "11", "Erreur", "NaN"], answer: "11" },
                { question: "Comment créer une chaîne de caractères en JavaScript ?", options: [ "\"string\"","'string'", "new String()", "string()"], answer: "'string'" },
                { question: "Quelle méthode est utilisée pour rechercher un élément dans un tableau en JavaScript ?", options: ["indexOf()", "search()", "find()", "lookup()"], answer: "indexOf()" },
                { question: "Quel est le résultat de false == 0 en JavaScript ?", options: ["true", "false", "NaN", "undefined"], answer: "true" },
                { question: "Comment convertir une chaîne en minuscule en JavaScript ?", options: ["toLowerCase()", "toLower()", "lowercase()", "convertToLower()"], answer: "toLowerCase()" },
                { question: "Quelle méthode est utilisée pour créer une sous-chaîne en JavaScript ?", options: ["substring()", "substr()", "slice()", "split()"], answer: "substring()" },
                { question: "Quel est le résultat de [1, 2] + [3, 4] en JavaScript ?", options: ["1,2,3,4","[1,2,3,4]", "NaN",  "Erreur"], answer: "1,2,3,4" },
                { question: "Comment définir un objet en JavaScript ?", options: ["{}", "[]", "new Object()", "object()"], answer: "{}" },
                { question: "Quel est le résultat de `'5' - 2` en JavaScript ?", options: [ "NaN","3", "52", "undefined"], answer: "3" },
                { question: "Quelle méthode est utilisée pour supprimer une propriété d'un objet en JavaScript ?", options: [ "remove", "discard", "delete","unset"], answer: "delete" },
            ],
            medium: [
                { question: "Quel est le résultat de 2 + '2' en JavaScript ?", options: [ "4", "NaN", "22","Erreur"], answer: "22" },
                { question: "Quelle méthode est utilisée pour supprimer le dernier élément d'un tableau en JavaScript ?", options: [ "shift()", "pop()","push()", "unshift()"], answer: "pop()" },
                { question: "Quel est le type de la valeur de l'expression `typeof 42` ?", options: ["boolean","number", "string",  "object"], answer: "number" },
                { question: "Comment déclare-t-on une fonction en JavaScript ?", options: ["define myFunction() {}","function myFunction() {}", "func myFunction() {}", "function:myFunction() {}" ], answer: "function myFunction() {}" },
                { question: "Quel mot-clé est utilisé pour déclarer une variable qui ne peut pas être modifiée en JavaScript ?", options: [ "var","const", "let", "static"], answer: "const" },
                { question: "Comment vérifier si une variable `x` est un nombre en JavaScript ?", options: ["typeof x === 'number'", "x instanceof Number", "Number.isInteger(x)", "x === 'number'"], answer: "typeof x === 'number'" },
                { question: "Quelle méthode est utilisée pour ajouter un élément à la fin d'un tableau en JavaScript ?", options: [ "pop()", "shift()", "push()","unshift()"], answer: "push()" },
                { question: "Quel est le résultat de `false + 1` en JavaScript ?", options: ["1", "false", "true", "NaN"], answer: "1" },
                { question: "Comment créer une classe en JavaScript ?", options: ["class MyClass {}", "create class MyClass {}", "function MyClass() {}", "var MyClass = {}"], answer: "class MyClass {}" },
                { question: "Quelle est la méthode pour transformer une chaîne de caractères en nombre en JavaScript ?", options: ["parseInt()", "toNumber()", "convert()", "parseFloat()"], answer: "parseInt()" },
                { question: "Quel est le résultat de `0 == '0'` en JavaScript ?", options: ["true", "false", "undefined", "NaN"], answer: "true" },
                { question: "Comment ajouter une propriété à un objet en JavaScript ?", options: ["obj.property = value", "obj.addProperty('property', value)", "obj.setProperty('property', value)", "obj['property'] = value"], answer: "obj.property = value" },
                { question: "Quel est le résultat de `[1, 2] == [1, 2]` en JavaScript ?", options: [ "false", "undefined","true", "NaN"], answer: "false" },
                { question: "Comment arrêter l'exécution d'une boucle en JavaScript ?", options: [ "stop", "halt","break", "exit"], answer: "break" },
                { question: "Quel est le résultat de `'5' - 2` en JavaScript ?", options: ["52", "NaN","3",  "undefined"], answer: "3" },
                { question: "Quelle méthode est utilisée pour supprimer une propriété d'un objet en JavaScript ?", options: [ "remove", "discard", "delete","unset"], answer: "delete" },
                { question: "Comment déclarer une variable globale en JavaScript ?", options: ["var", "let", "const", "global"], answer: "var" },
                { question: "Quel est le résultat de `5 == '5'` en JavaScript ?", options: ["true", "false", "undefined", "NaN"], answer: "true" },
                { question: "Comment écrire un commentaire sur une seule ligne en JavaScript ?", options: [ "/* commentaire */", "# commentaire","// commentaire", "-- commentaire"], answer: "// commentaire" },
                { question: "Comment vérifier si une variable `x` est définie en JavaScript ?", options: ["typeof x !== 'undefined'", "x !== undefined", "x === undefined", "isDefined(x)"], answer: "typeof x !== 'undefined'" },
                { question: "Quelle méthode est utilisée pour parcourir un tableau en JavaScript ?", options: ["forEach()", "map()", "filter()", "reduce()"], answer: "forEach()" },
                { question: "Quel est le résultat de `null == undefined` en JavaScript ?", options: [ "false", "undefined", "true","NaN"], answer: "true" },
                { question: "Comment convertir une chaîne de caractères en majuscules en JavaScript ?", options: [ "toUpper()", "uppercase()","toUpperCase()", "capitalize()"], answer: "toUpperCase()" },
                { question: "Quel est le résultat de `[] + []` en JavaScript ?", options: ["''", "[]", "NaN", "undefined"], answer: "''" },
                { question: "Quelle méthode est utilisée pour fusionner deux tableaux en JavaScript ?", options: [ "merge()", "combine()","concat()", "append()"], answer: "concat()" },
                { question: "Comment créer un tableau vide en JavaScript ?", options: ["[]", "{}", "new Array()", "new Array(0)"], answer: "[]" },
                { question: "Quel est le résultat de `3 === '3'` en JavaScript ?", options: [ "true","false", "undefined", "NaN"], answer: "false" },
                { question: "Comment tester une condition en JavaScript ?", options: ["if (condition) {}", "while (condition) {}", "for (condition) {}", "switch (condition) {}"], answer: "if (condition) {}" },
                { question: "Quel est le résultat de `typeof NaN` en JavaScript ?", options: [ "string", "boolean","number", "undefined"], answer: "number" },
                { question: "Comment créer une promesse en JavaScript ?", options: [ "createPromise()", "makePromise()", "Promise.create()","new Promise()"], answer: "new Promise()" },
                { question: "Quel est le résultat de `1 + true` en JavaScript ?", options: [ "1", "true", "NaN","2"], answer: "2" },
                { question: "Comment convertir une chaîne de caractères en nombre décimal en JavaScript ?", options: [ "parseInt()", "Number()","parseFloat()", "toDecimal()"], answer: "parseFloat()" },
                { question: "Comment comparer deux objets en JavaScript ?", options: ["Les objets ne peuvent pas être comparés", "Utiliser '=='", "Utiliser '==='", "Utiliser JSON.stringify()"], answer: "Les objets ne peuvent pas être comparés" },
                { question: "Quel est le résultat de `'Hello' + 1` en JavaScript ?", options: [ "1","'Hello1'", "'Hello'",  "NaN"], answer: "'Hello1'" },
                { question: "Comment vérifier si un élément est dans un tableau en JavaScript ?", options: ["includes()", "has()", "contains()", "in()"], answer: "includes()" },
                { question: "Quelle méthode est utilisée pour extraire une sous-chaîne d'une chaîne en JavaScript ?", options: ["substring()", "slice()", "substr()", "allOfAbove"], answer: "allOfAbove" },
                { question: "Comment accéder au premier élément d'un tableau en JavaScript ?", options: ["array[0]", "array.first()", "array.get(0)", "array.firstElement()"], answer: "array[0]" },
                { question: "Quel est le résultat de `3 * '3'` en JavaScript ?", options: [ "33", "NaN","9", "undefined"], answer: "9" },
                { question: "Comment supprimer le premier élément d'un tableau en JavaScript ?", options: ["shift()", "pop()", "remove()", "delete()"], answer: "shift()" },
                { question: "Quelle est la méthode pour définir un cookie en JavaScript ?", options: ["document.cookie", "setCookie()", "addCookie()", "defineCookie()"], answer: "document.cookie" },
                { question: "Quel est le résultat de `!!'false'` en JavaScript ?", options: ["true", "false", "undefined", "NaN"], answer: "true" },
                { question: "Comment créer un objet en JavaScript ?", options: ["{}", "new Object()", "object.create()", "createObject()"], answer: "{}" },
                { question: "Quel est le résultat de `'3' == 3` en JavaScript ?", options: ["true", "false", "undefined", "NaN"], answer: "true" },
                { question: "Comment ajouter une méthode à un objet en JavaScript ?", options: ["obj.method = function() {}", "obj.addMethod('method', function() {})", "obj.createMethod('method', function() {})", "obj['method'] = function() {}"], answer: "obj.method = function() {}" },
                { question: "Quel est le résultat de `'5' - 2` en JavaScript ?", options: ["3", "52", "NaN", "undefined"], answer: "3" },
                { question: "Quel est le résultat de 'true' == true en JavaScript ?", options: ["false", "true", "undefined", "NaN"], answer: "false" },
                { question: "Quelle méthode est utilisée pour retirer des éléments d'un tableau en JavaScript ?", options: [ "remove()","splice()", "delete()", "discard()"], answer: "splice()" },
                { question: "Comment accéder à une propriété d'un objet en JavaScript ?", options: ["object.property", "object['property']", "object.get('property')", "object.property()"], answer: "object.property" },
                { question: "Quel est le résultat de 5 + '5' en JavaScript ?", options: [ "10", "5","55", "Erreur"], answer: "55" },
                { question: "Comment vérifier si une chaîne contient un sous-ensemble en JavaScript ?", options: ["includes()", "contains()", "has()", "indexOf()"], answer: "includes()" },
                { question: "Quel est le résultat de null + 1 en JavaScript ?", options: [ "null", "0", "NaN","1",], answer: "1" },
                { question: "Comment ajouter un élément au tableau au début en JavaScript ?", options: [ "push()", "append()", "add()","unshift()"], answer: "unshift()" },
                { question: "Quel est le résultat de typeof null en JavaScript ?", options: [ "null","object", "undefined", "number"], answer: "object" },
                { question: "Quelle méthode est utilisée pour diviser une chaîne en un tableau de sous-chaînes en JavaScript ?", options: [ "divide()", "split()","substring()", "slice()"], answer: "split()" },
                { question: "Comment vérifier si une valeur est NaN en JavaScript ?", options: [ "isnaN()", "isNaN()","checkNaN()", "NaN()"], answer: "isNaN()" },
                { question: "Quel est le résultat de 4 % 2 en JavaScript ?", options: [ "2", "4","0", "NaN"], answer: "0" },
                
            ],
            difficult: [
        { question: "Quelle méthode est utilisée pour ajouter un élément à la fin d'un tableau ?", options: [ "shift()", "push()","pop()", "unshift()"], answer: "push()" },
        { question: "Quelle méthode est utilisée pour cloner un objet en JavaScript ?", options: [ "Object.clone()", "Object.copy()", "Object.assign()","Object.deepCopy()"], answer: "Object.assign()" },
        
        { question: "Comment créer une fonction génératrice en JavaScript ?", options: ["function* myFunction() {}", "function myFunction*() {}", "function* myfunction() {}", "myFunction*()"], answer: "function* myFunction() {}" },
        { question: "Quel est le résultat de `[] == ![]` en JavaScript ?", options: ["false", "true", "undefined", "NaN"], answer: "true" },
        { question: "Quelle méthode permet d'exécuter du code à la fin de la pile d'exécution en JavaScript ?", options: [ "setImmediate()","setTimeout()", "process.nextTick()", "queueMicrotask()"], answer: "queueMicrotask()" },
        { question: "Quelle est la portée d'une variable déclarée avec `let` en JavaScript ?", options: ["Fonction", "Globale", "Bloc", "Module"], answer: "Bloc" },
        { question: "Quel est le résultat de `([] == [])` en JavaScript ?", options: ["true","false",  "undefined", "NaN"], answer: "false" },
       
        { question: "Quelle méthode permet de créer un tableau avec une longueur spécifique en JavaScript ?", options: [ "new Array(length)","Array(length)", "Array.of(length)", "Array.from(length)"], answer: "new Array(length)" },
        
        { question: "Quel est le résultat de `typeof NaN` en JavaScript ?", options: ["string","number",  "boolean", "undefined"], answer: "number" },
        { question: "Quel est le résultat de `1 < 2 < 3` en JavaScript ?", options: [ "false", "true","undefined", "NaN"], answer: "true" },
        
        { question: "Quel est le résultat de `1 / 0` en JavaScript ?", options: [ "0", "-Infinity","Infinity", "NaN"], answer: "Infinity" },
        { question: "Quelle méthode est utilisée pour vérifier si un objet possède une propriété spécifique en JavaScript ?", options: ["in()", "contains()","hasOwnProperty()",  "exists()"], answer: "hasOwnProperty()" },
        { question: "Comment vérifier si une chaîne de caractères contient une sous-chaîne en JavaScript ?", options: [ "contains()", "indexOf()","includes()", "match()"], answer: "includes()" },
        { question: "Quel est le résultat de `[] + {}` en JavaScript ?", options: ["'[object Object]'", "NaN", "undefined", "{}"], answer: "'[object Object]'" },
        { question: "Quelle est la méthode pour ajouter un événement à un élément en JavaScript ?", options: ["onEvent()", "attachEvent()","addEventListener()",  "bindEvent()"], answer: "addEventListener()" },
        { question: "Quel est le résultat de `Boolean(null)` en JavaScript ?", options: [ "true", "undefined", "false","NaN"], answer: "false" },
        { question: "Comment transformer un objet en chaîne JSON en JavaScript ?", options: [ "JSON.parse()", "object.toJSON()", "JSON.stringify()","object.toString()"], answer: "JSON.stringify()" },
        { question: "Quel est le résultat de `'5' - '2'` en JavaScript ?", options: [ "52", "3","NaN", "undefined"], answer: "3" },
        { question: "Quelle méthode est utilisée pour créer un tableau à partir d'un objet itérable en JavaScript ?", options: ["Array.from()", "Array.of()", "Array.slice()", "Array.concat()"], answer: "Array.from()" },
        { question: "Quel est le résultat de `!!0` en JavaScript ?", options: [ "true", "undefined","false", "NaN"], answer: "false" },
        { question: "Comment déclarer une fonction anonyme en JavaScript ?", options: [ "function myFunction() {}","function() {}", "myFunction = function() {}", "function: myFunction() {}"], answer: "function() {}" },
        { question: "Quel est le résultat de `Object.keys({a: 1, b: 2})` en JavaScript ?", options: ["['a', 'b']", "['a', 1, 'b', 2]", "['a'] ['b']", "['a', 'b', '1', '2']"], answer: "['a', 'b']" },
        { question: "Quel est le résultat de `Array.isArray([])` en JavaScript ?", options: ["true", "false", "undefined", "NaN"], answer: "true" },
        { question: "Comment appeler une fonction dans le contexte d'un objet en JavaScript ?", options: ["obj.method()", "obj::method()", "method.call(obj)", "method.apply(obj)"], answer: "obj.method()" },
        { question: "Quel est le résultat de `1 + '1' - 1` en JavaScript ?", options: ["1", "10", "NaN", "0"], answer: "1" },
        { question: "Quelle est la méthode pour transformer une chaîne de caractères en nombre en JavaScript ?", options: [ "toNumber()", "convert()", "parseFloat()","parseInt()",], answer: "parseInt()" },
        { question: "Quel est le résultat de `0 == '0'` en JavaScript ?", options: ["true", "false",  "NaN","undefined",], answer: "true" },
        { question: "Comment ajouter une propriété à un objet en JavaScript ?", options: [ "obj.addProperty('property', value)", "obj.setProperty('property', value)", "obj['property'] = value","obj.property = value",], answer: "obj.property = value" },
        { question: "Quel est le résultat de `[1, 2] == [1, 2]` en JavaScript ?", options: ["true", "false", "undefined", "NaN"], answer: "false" },
        { question: "Comment arrêter l'exécution d'une boucle en JavaScript ?", options: [ "stop", "halt", "exit","break",], answer: "break" },
        { question: "Quel est le résultat de `'5' - 2` en JavaScript ?", options: [ "52", "NaN","3", "undefined"], answer: "3" },
        { question: "Quelle méthode est utilisée pour supprimer une propriété d'un objet en JavaScript ?", options: ["remove", "delete", "discard", "unset"], answer: "delete" },
        { question: "Comment déclarer une variable globale en JavaScript ?", options: [ "let", "const", "global","var",], answer: "var" },
        { question: "Quel est le résultat de `5 == '5'` en JavaScript ?", options: [ "false", "undefined", "NaN","true",], answer: "true" },
        { question: "Comment écrire un commentaire sur une seule ligne en JavaScript ?", options: ["// commentaire", "/* commentaire */", "# commentaire", "-- commentaire"], answer: "// commentaire" },
        { question: "Comment vérifier si une variable `x` est définie en JavaScript ?", options: ["typeof x !== 'undefined'", "x !== undefined", "x === undefined", "isDefined(x)"], answer: "typeof x !== 'undefined'" },
        { question: "Quelle méthode est utilisée pour parcourir un tableau en JavaScript ?", options: [ "map()", "filter()","forEach()", "reduce()"], answer: "forEach()" },
        { question: "Quel est le résultat de `null == undefined` en JavaScript ?", options: ["NaN","true", "false", "undefined", ], answer: "true" },
        { question: "Comment convertir une chaîne de caractères en majuscules en JavaScript ?", options: ["toUpperCase()", "toUpper()", "uppercase()", "capitalize()"], answer: "toUpperCase()" },
        { question: "Quel est le résultat de `[] + []` en JavaScript ?", options: ["''", "[]", "NaN", "undefined"], answer: "''" },
        { question: "Quelle méthode est utilisée pour fusionner deux tableaux en JavaScript ?", options: ["concat()", "merge()", "combine()", "append()"], answer: "concat()" },
        { question: "Comment créer un tableau vide en JavaScript ?", options: [ "{}", "new Array()", "new Array(0)","[]"], answer: "[]" },
        { question: "Quel est le résultat de `3 === '3'` en JavaScript ?", options: [ "true", "undefined","false", "NaN"], answer: "false" },
        { question: "Comment tester une condition en JavaScript ?", options: [ "while (condition) {}", "if (condition) {}","for (condition) {}", "switch (condition) {}"], answer: "if (condition) {}" },
        { question: "Quel est le résultat de `typeof NaN` en JavaScript ?", options: ["number", "string", "boolean", "undefined"], answer: "number" },
        { question: "Comment créer une promesse en JavaScript ?", options: ["new Promise()", "createPromise()", "makePromise()", "Promise.create()"], answer: "new Promise()" },
        { question: "Quel est le résultat de `1 + true` en JavaScript ?", options: ["2", "1", "true", "NaN"], answer: "2" },
        { question: "Comment convertir une chaîne de caractères en nombre décimal en JavaScript ?", options: ["parseFloat()", "parseInt()", "Number()", "toDecimal()"], answer: "parseFloat()" },
        { question: "Comment comparer deux objets en JavaScript ?", options: ["Les objets ne peuvent pas être comparés", "Utiliser '=='", "Utiliser '==='", "Utiliser JSON.stringify()"], answer: "Les objets ne peuvent pas être comparés" },
        { question: "Quel est le résultat de `'Hello' + 1` en JavaScript ?", options: ["1","'Hello1'", "'Hello'",  "NaN"], answer: "'Hello1'" },
        { question: "Comment vérifier si un élément est dans un tableau en JavaScript ?", options: [ "has()", "contains()", "in()","includes()",], answer: "includes()" },
        { question: "Quelle méthode est utilisée pour extraire une sous-chaîne d'une chaîne en JavaScript ?", options: ["substring()", "slice()", "substr()", "allOfAbove"], answer: "allOfAbove" },
        { question: "Comment accéder au premier élément d'un tableau en JavaScript ?", options: [ "array.first()", "array.get(0)", "array.firstElement()","array[0]",], answer: "array[0]" },
        { question: "Quel est le résultat de `3 * '3'` en JavaScript ?", options: [ "33", "NaN", "undefined","9",], answer: "9" },
                
            ],
        };
// Fonction pour charger les questions
function loadQuestions(amount, difficulty) {
    const questionContainer = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options');
    const scoreElement = document.getElementById('score');
    const nextButton = document.getElementById('next-button');
    const retryButton = document.getElementById('retry-button');
    const questionNumberElement = document.getElementById('question-number'); // Élément pour le numéro de la question

    // Obtenir les questions en fonction de la difficulté
    const selectedQuestions = questions[difficulty];

    // Mélanger les questions et sélectionner le nombre requis
    const shuffled = selectedQuestions.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, amount);

    // Initialiser le score et le numéro de la question
    let currentQuestionIndex = 0;
    let score = 0;
    let answered = false; // Pour vérifier si une réponse a été sélectionnée

    // Cacher le bouton Retry au début
    retryButton.style.display = 'none';

    function showQuestion() {
        const question = selected[currentQuestionIndex];
        questionContainer.innerHTML = question.question;

        optionsContainer.innerHTML = '';
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('btn');
            button.addEventListener('click', () => handleAnswer(option));
            optionsContainer.appendChild(button);
        });
        
    // Ajouter un gestionnaire d'événement pour le bouton "Next"
    nextButton.addEventListener('click', nextQuestion);

    // Ajouter un gestionnaire d'événement pour le bouton "Retry"
    retryButton.addEventListener('click', () => {
        location.reload(); // Recharge la page pour recommencer le quiz
    });



        // Mettre à jour le numéro de la question
        questionNumberElement.innerHTML = `Question ${currentQuestionIndex + 1} / ${selected.length}`;
        nextButton.style.display = 'none'; // Cacher le bouton "Next" jusqu'à ce qu'une réponse soit sélectionnée
    }

     
    function handleAnswer(selectedOption) {
        if (!answered) {
            const question = selected[currentQuestionIndex];
            const buttons = document.querySelectorAll('#options button');
            
            buttons.forEach(button => {
                if (button.innerText === question.answer) {
                    button.classList.add('correct');
                } else if (button.innerText === selectedOption) {
                    button.classList.add('incorrect');
                }
                button.disabled = true; // Désactiver les boutons après la sélection
            });
    
            if (selectedOption === question.answer) {
                score++;
                scoreElement.innerText = `Score: ${score}`;
            }
    
            answered = true; // Marquer comme répondu
            nextButton.style.display = 'block'; // Afficher le bouton "Next"
        }
    }
    
    function nextQuestion() {
        answered = false; // Réinitialiser le statut de réponse
        currentQuestionIndex++;
        if (currentQuestionIndex < selected.length) {
            showQuestion();
        } else {
            // Quiz terminé, montrer le score final
            
            questionContainer.innerHTML = `Quiz terminé! Votre score est ${score}/${selected.length}`;
            optionsContainer.innerHTML = '';
            nextButton.style.display = 'none';
            retryButton.style.display = 'block'; // Afficher le bouton Retry
        }
    }

    showQuestion();
}

// Appel de la fonction pour charger les questions selon les paramètres
window.onload = function() {
    const amount = localStorage.getItem("quizAmount") || 10; // Valeur par défaut
    const difficulty = localStorage.getItem("quizDifficulty") || 'easy'; // Valeur par défaut

    loadQuestions(parseInt(amount), difficulty);
};

