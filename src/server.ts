import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello there! How is it going?'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('listening on port:3333');
})