

function outer(){
    let name = "Vinayak";
    function inner()
    {
        console.log(name);

    }
    return inner;
}
    let inner = outer();
    inner();