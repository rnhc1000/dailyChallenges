interface calcy {
    mul(n:number): any;
}

class d implements calcy {
    x: number = 0;

    mul(n:number): any {
        this.x=n*n;
    }
    mul(n:string): any {
        this.x=n+n;
    }

    }

    let arr = new d;
    arr.x=3;
    arr.mul(9);
    
