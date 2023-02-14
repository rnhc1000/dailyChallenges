const { Console } = require("console");

var reverse = function(x) {
    let limA =  2147483648;
    let limB = -2147483648;
    let negative=false;
    if (x < 0 ) {
        x=-x;
        negative=true;
    } 
    let ax=[];

    switch (x) {
        case x>999999:
            ax=[10,100,1000,10000,100000,1000000];
        break;
        case x>99999:
            ax=[10,100,1000,10000,100000];
        break;
        case x>9999:
            ax=[10,100,1000,10000];
        break;
        case x>999:
            ax=[10,100,1000];
        break;
        case x>99:
            ax=[10,100];
        break;
    }


    let a=[];
    console.log(ax);
    for (let i=0; i < ax.length; i++) {
        a[i]= Math.floor((x % ax[i]))
    }
    // a[i]=Math.floor((x % 10)); //unidade
    // let b = a[i];
    // i++;
    // a[i]=Math.floor((x%100)/10);//dezena
    // i++;
    // a[i]=Math.floor(x/100);   //centena
    // if (x >=1000) {
    //     a[i] = a[i]%10;
    //     i++;
    //     a[i] = Math.floor(x/1000) //milhar
    //     console.log(a)
    //  }  
    a = a.filter((el) => { return el !== 0 });

    let b = a.join("");
    
    if (negative) b=-b;
    console.log(b)
    }

        // console.log("Numero maior que o permitido");
     


reverse(123)
reverse(-123)
reverse(10000)
console.log(2147483650)