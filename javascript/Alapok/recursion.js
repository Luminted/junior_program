function rec(a){
    a+=1;
    console.log(a);
    return rec(a);
}

rec(1);