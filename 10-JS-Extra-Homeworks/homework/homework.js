// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  a=[]
  for (let clave in objeto){
    a.push([clave,objeto[clave]])
  }
  return a
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  s=string.split('');
  a={}
  s.forEach(function(X){a[X]=0});
  s.forEach(function(X){
    a[X]=a[X]+1
  })
  return a

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  f=s.split('');
  a=[]
  b=[]
  c=[]
  f.forEach(function(X,i){
    if (X==X.toUpperCase()){
      a.push(i)
    } else b.push(i)
  })
  for (let clave in a){
    c.push(f[a[clave]])
  }
  for (let clave in b){
    c.push(f[b[clave]])
  }
  return c.join('')
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  s=str.split(' ');
  h=[]
  s.forEach(function(X,index){
    h[index]=X.split('').reverse().join('')
  })
  return h.join(' ')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero=numero+''
  s=numero.split('').reverse().join('')
  if (s==numero){
    return "Es capicua"
  } else return "No es capicua"
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  s=cadena.split('')
  a=[]
  b=[]
  s.forEach(function(X,index){
    if (X!='a' && X!='b' && X!='c'){
      a.push(index)
    }
  }) 
  for (let clave in a){
    b.push(s[a[clave]])
  }
  return b.join('')
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  a=[]
  b=[]
  c=[]
  d=[]
  arr.forEach(function(X,index){a.push([X.length,index]);b.push(X.length)})
  b.sort(function(a,b){return a-b})
  for (let clave in b){
    for (let clave2 in a){
      if (b[clave]==a[clave2][0]){
       c.push(a[clave2][1])
       a[clave2][0]=0
       break 
    }
    
  }
}
  for (let clave in c){
    d.push(arr[c[clave]])
  }
  return d
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  c=[]
  for (let clave in arreglo1){
    for (let clave2 in arreglo2){
      if (arreglo1[clave]==arreglo2[clave2]){
        c.push(arreglo1[clave])
      }
    }
  }
  return c
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

