export class CommentModel {
    name: string
    comment: string

    constructor(commentObj: any) {
        this.name = commentObj.name
        this.comment = commentObj.comment
    } 
}