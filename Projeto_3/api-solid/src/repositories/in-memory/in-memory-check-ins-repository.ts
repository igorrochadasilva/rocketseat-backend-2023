import { randomUUID } from 'node:crypto'
import { CheckInsRepository } from '@/repositories/check-ins-repository.ts'
import { CheckIn, Prisma } from '@prisma/client'

export class InMemoryCheckInsRepository implements CheckInsRepository {
  public items: CheckIn[] = []

  async create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn = {
      id: randomUUID(),
      created_at: new Date(),
      is_validated: data.is_validated ? new Date(data.is_validated) : null,
      user_id: data.user_id,
      gym_id: data.gym_id,
    }

    this.items.push(checkIn)

    return checkIn
  }
}
