import { randomUUID } from "crypto"
import { Slug } from "./value-objects/slug"


interface QuestionProps {
    title: string
    content: string
    slug: string
    authorId: string
  }

export class Question {
    public title: string
    public content: string
    public slug: string
    public id: string
    public authorId: string

    constructor(props: QuestionProps, id?: string) {
        this.title = props.title
        this.content = props.content
        this.slug = props.slug
        this.authorId = props.authorId
        this.id = id ?? randomUUID()
    }
}