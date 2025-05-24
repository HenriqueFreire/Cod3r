// middleware pattern (chain of responsibility)

const passo1 = (context, next) => {
  context.value1 = 'mid 1';
  next();
};

const passo2 = (context, next) => {
  context.value2 = 'mid 2';
  next();
};

const passo3 = context => context.value3 = 'mid 3';

const exec = (context, ...middlewares) => {
  const execStep = index => {
    middlewares && index < middlewares.length && middlewares[index](context, () => execStep(index + 1));
  };

  execStep(0);
};

const context = {};
exec(context, passo1, passo2, passo3);
console.log(context); // { value1: 'mid 1', value2: 'mid 2', value3: 'mid 3' }