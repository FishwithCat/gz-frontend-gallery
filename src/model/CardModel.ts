import { CommentModel } from "./CommentModel"

export class CardModel {
    id: string
    imgUrl: string
    avatarUrl: string
    comments: CommentModel[]

    constructor(cardObj: any) {
        this.id = cardObj.id
        this.imgUrl = cardObj.imgUrl
        this.avatarUrl = cardObj.avatarUrl
        this.comments = (cardObj.comments || []).map((commentObj: any) => new CommentModel(commentObj))
    }
}