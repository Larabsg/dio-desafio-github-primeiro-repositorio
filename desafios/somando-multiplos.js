var a = parseInt(gets());
var N = parseInt(gets());
var soma = 0;

for(var i = a; i<N; i++) {
    if(i%a==0) {
        soma+=i;
    }
}

print(soma);