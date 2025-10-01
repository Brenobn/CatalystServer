import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { 
  validatorCompiler, 
  serializerCompiler,
  ZodTypeProvider, 
} from 'fastify-type-provider-zod'
import { z } from 'zod'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)

app.post('/subscriptions', {
  schema: {
    body: z.object({
      name: z.string(),
      email: z.string().email(),
    }),
  },
}, (request, reply) => {
  const { name } = request.body
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running')
})