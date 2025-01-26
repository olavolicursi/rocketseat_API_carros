import { v4 as uiddV4 } from "uuid"

class Category {
    id?: string
    name: string
    description: string
    created_at: Date

    constructor() {
        if(!this.id){
            this.id = uiddV4()
        }
    }
}

export { Category }