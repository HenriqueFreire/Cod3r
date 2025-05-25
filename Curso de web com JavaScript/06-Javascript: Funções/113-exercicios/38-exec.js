function imprimirImpares(inicio = 0, fim = 100) {
  if(inicio > fim){
    inicio = fim + inicio
    fim = inicio - fim
    inicio = inicio + fim 
  }

  for (let i = 0; i < array.length; i++) {
    if(i % 2 == 1){
      console.log(1)
    }    
  }
}

imprimirImpares(19, 3)