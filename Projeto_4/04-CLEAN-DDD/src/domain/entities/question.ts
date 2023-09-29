import { randomUUID } from "crypto"
import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"


interface QuestionProps {
    title: string
    content: string
    slug: string
    authorId: string
  }
  export class Question extends Entity<QuestionProps> {
}