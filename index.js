exports.fibonacci = function factorial(n) {
    if(n==0 || n==1)
        return n;
    else if (n < 0)
        return undefined;
    return n * factorial(n-1)
}