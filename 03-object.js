// fonction constructeur
// object literal
const coords = {
  x: 10,
  y: 20
};

const json = JSON.stringify(coords);

console.log(json); // {"x":10,"y":20}

const Contact = function (prenom) {
  this.prenom = prenom; // this.prenom est publique
};

Contact.prototype.hello = function () {
  return 'Bonjour je m\'apelle ' + this.prenom;
}

console.log(typeof  Contact);

const johanna = new Contact('Johanna'); // object

console.log(typeof johanna); // object
console.log(johanna.prenom); // johanna
console.log(Contact.prototype.hello()); // Bonjour je m'apelle undefined
console.log(johanna.hello()); // Bonjour je m'apelle Johanna