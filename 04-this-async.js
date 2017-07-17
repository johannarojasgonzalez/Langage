//'use strict'

const contact = {
  prenom: 'Johanna'
};

const helloPasDansContact = function (prenom) {
  return 'Bonjour ' + prenom + ' je m\'apelle ' + this.prenom;
}

console.log(helloPasDansContact()); // Bonjour Eric je m'apelle undefined

// Appel d'une fonction sur un objet .. Ci-dessous trois façon de faire l'appel
console.log(helloPasDansContact.call(contact));// Bonjour Eric je m'apelle Johanna
console.log(helloPasDansContact.apply(contact, ['Eric']));// Bonjour Eric je m'apelle Johanna

const helloSurContact = helloPasDansContact.bind(contact);
console.log(helloSurContact('Eric')); // Bonjour Eric je m'apelle Johanna

const contactAvecAsync = {
  prenom: 'Johanna',
  helloAsync: function (prenom) {
    setTimeout(function () {
      console.log('Bonjour2 ' + prenom + ' je m\'apelle ' + this.prenom);
    }, 1000);
  }
};

contactAvecAsync.helloAsync('Eric'); // Bonjour2 Eric je m'apelle undefined... Le this dans le callback n'est pas johanna
                                     // car la fonction est appelée ailleur

const contactAvecAsyncThat = {
  prenom: 'Johanna',
  helloAsync: function (prenom) {
    var that = this;
    setTimeout(function () {
      console.log('Bonjour3 ' + prenom + ' je m\'apelle ' + that.prenom);
    }, 1000);
  }
};

contactAvecAsyncThat.helloAsync('Eric'); // Bonjour3 Eric je m'apelle Johanna


const contactAvecAsyncFlechee = {
  prenom: 'Johanna',
  helloAsync: function (prenom) {
    setTimeout(() => { // la fonction flechée ne crée pas de valeur pour this
      console.log('Bonjour4 ' + prenom + ' je m\'apelle ' + this.prenom); // Bonjour4 Eric je m'apelle Johanna
    }, 1000);
  }
};

contactAvecAsyncFlechee.helloAsync('Eric');