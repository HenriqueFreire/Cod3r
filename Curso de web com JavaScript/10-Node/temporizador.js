const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 19 * * 6', function(){
  console.log('Executando Tarefa 1!', new Date().getSeconds());
});

setTimeout(function(){
  tarefa1.cancel();
  console.log('Cancelando Tarefa 1!');
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 6)];
regra.hour = 19;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function(){
  console.log('Executando Tarefa 2!', new Date().getSeconds());
});