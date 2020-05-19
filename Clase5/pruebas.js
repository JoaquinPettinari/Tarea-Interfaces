
/*function sayHello() {
    return function() {
       console.log("Hello!");
    }
 }


 const hola = sayHello();


 const functionsList = [() => console.log('Hello'), (a, b) => console.log(a + b)];

// running all of them
for (const fn of functionsList) {
  fn(1, 3);
}


function iniciar() {
    var nombre = "Unahur";  // La variable nombre es una variable local creada por iniciar.
    function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
      console.log(nombre);  // Usa una variable declarada en la función externa.
    }
    mostrarNombre();
}

iniciar();

//Version falopa
function creaFunc() {
    var nombre = "Unahur";
    function muestraNombre() {
      return nombre;
    }
    console.log(muestraNombre());
}

//Version mejorada
function creaFunc() {
    var nombre = "Unahur";
    function muestraNombre() {
      alert(nombre);
    }
    return muestraNombre;
}
  
creaFunc();


function cambiarDimensionFuente(size) {
      document.body.style.fontSize = size + 'px'
}


const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

console.log(...nums1);
console.log([...nums1, 4, 5, 6]);
// concatenar
nums2.concat(nums1);
console.log(nums2)

console.log([4, 5, 6, ...nums1]);
// magia
console.log(1, ...nums2, 2, 3);

console.log(sum(...nums1))



async function getProcessedData(url) {
  return await downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
}

*/