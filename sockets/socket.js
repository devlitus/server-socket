const{ io} = require('../index');

io.on('connection', client => {
  console.log('client connection');

  client.on('disconnect', () => {
    console.warn('client disconnect');
  })
});
