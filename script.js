//1 - Criar um loop que conte de 1 até 10 usando FOR

for (let i = 1; i<= 10; i++){
    console.log(i)
}


//2 - Criar um loop que conte de 10 até 1 usando WHILE

let cont= 10
while (cont >=1){
    console.log(cont)
    cont --

}


//3 - Criar um loop que conte todos os números ímpares de 1 até 100
let odd = [...Array(101).keys()].filter(x => x%2!==0).map(x => ""+x).join(',');

console.log(odd);

//ou
function odd() {
    for (let i = 0; i <= 100; i++) {
        if ((i % 2) !== 0) {
                        console.log(i);
        }
    }
}

odd();



//4- Criar um loop que conte todos os números pares de 0 a 100
let pair = [...Array(101).keys()].filter(x => x%2==0).map(x => ""+x).join(',');

console.log(pair);

//ou
function pair() {
    for (let i = 0; i <= 100; i++) {
        if ((i % 2) == 0) {
                        console.log(i);
        }
    }
}

pair();

