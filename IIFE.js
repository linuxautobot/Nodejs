var firstname = 'John';

(function(lastname){
    var firstname = 'Johny';
    console.log(firstname + ' '  + lastname);
}('Bravo'));

console.log(firstname);
