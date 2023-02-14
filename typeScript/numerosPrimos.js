function sumPrimes(num) {
        let inicio = 2
        let primes=[]
        let divisores;
        let contaPrimos= 0
      
        for(var count=inicio ; count<=num ; count++){
            divisores=0;
            for(var aux=1 ; aux<=count ; aux++)
                if(count % aux === 0)
                    divisores++;
      
            if(divisores===2){
                primes[contaPrimos] = count;
                contaPrimos++;
            }

        }
    
        return primes.reduce((acc,value) => acc+=value);

    }

  
  console.log(sumPrimes(977));