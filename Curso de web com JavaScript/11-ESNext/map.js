const tecnologias = new Map();
tecnologias.set('js', { name: 'JavaScript', year: 1995 });
tecnologias.set('java', { name: 'Java', year: 1995 });
tecnologias.set('python', { name: 'Python', year: 1991 });
tecnologias.set('csharp', { name: 'C#', year: 2000 });
tecnologias.set('php', { name: 'PHP', year: 1995 });
tecnologias.set('go', { name: 'Go', year: 2009 });
tecnologias.set('rust', { name: 'Rust', year: 2010 });
tecnologias.set('swift', { name: 'Swift', year: 2014 });
tecnologias.set('kotlin', { name: 'Kotlin', year: 2011 });
tecnologias.set('typescript', { name: 'TypeScript', year: 2012 });
tecnologias.set('ruby', { name: 'Ruby', year: 1995 });

console.log(tecnologias.get('js')); // { name: 'JavaScript', year: 1995 }
console.log(tecnologias.get('Ruby')); // { name: 'Ruby', year: 1995 }

const chavesVariadas = new Map([
  ['js', { name: 'JavaScript', year: 1995 }],
  ['java', { name: 'Java', year: 1995 }],
  ['python', { name: 'Python', year: 1991 }],
  ['csharp', { name: 'C#', year: 2000 }],
]);

console.log(chavesVariadas.get('js')); // { name: 'JavaScript', year: 1995 }
console.log(chavesVariadas.get('java')); // { name: 'Java', year: 1995 }

chavesVariadas.forEach((value, key) => {
  console.log(key, value);
});

console.log(chavesVariadas.has('js')); // true
chavesVariadas.delete('csharp');
console.log(chavesVariadas.has('csharp')); // false
console.log(chavesVariadas.size); // 3