// closure : pour memoriser une valeur
// fonction qui renvoi une fonction imbriqué (la portée est sauvegarde)
const logClosure = (msg) => {
  msg = null; // pour nettoyer la memoire, tant que hello existe msg est sauvegarde
  return () => {
    console.log(msg);
  };
};

const hello = logClosure('Hello');

hello();
hello();
hello();

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// 3 3 3

for (var i = 0; i < 3; i++) {
  setTimeout(logClosure(i), 1000);
}

// 0 1 2
