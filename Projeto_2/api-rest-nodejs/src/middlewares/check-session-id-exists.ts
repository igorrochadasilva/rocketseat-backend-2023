import { FastifyReply, FastifyRequest } from 'fastify'

// middleware if sessionId doesn't exist, return error
export async function checkSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return reply.status(401).send({
      error: 'Unauthorized.',
    })
  }
}
