 // pass by value 

function change(a){
    a = 1 ; 
}
var b = 2 ;
change(b);
console.log (b) ; 


// pass by reference 

function changeobj(d){
        d.prop1 = function() {};
        d.prop2 = {};
        
}

var c = {};
c.prop1 = {};
changeobj(c);
console.log(c);
