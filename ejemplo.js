function l(f){
  console.log(f)
}

function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    if (numero==0 || numero==1){
      return '0 y 1 no son considerados numeros primos'
    } 
    else
      i=1
      k=0
      for (i;i<numero;i++){
        a=numero%i
        if (a==0){
          k++
        }
      }
  if (k>1){
    return false
  } else return true
  }
  l(esPrimo(1));
  l(esPrimo(2));
  l(esPrimo(3));
  l(esPrimo(4));
  l(esPrimo(11));;