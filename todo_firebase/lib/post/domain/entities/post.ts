export interface Post {
    id: string;
    title: string;
    description: string;
    datePosted: Date;
    toJson(): Record<string, any>;
}

export class PostClass implements Post {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public datePosted: Date
    ) {}

    /// Empty Post state
    static initial(): Post {
        return new PostClass("", "", "", new Date());
    }

    /// From JSON to Post entity
    static fromJSON(json: Record<string, any>): PostClass {
        return new PostClass(
            json.id,
            json.title,
            json.description,
            new Date(json.datePosted)
        );
    }

    /// To JSON format
    toJson(): Record<string, any> {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            datePosted: this.datePosted.toISOString(),
        };
    }

    // Method to create a copy with updated properties
    copyWith({
                 id = this.id,
                 title = this.title,
                 description = this.description,
                 datePosted = this.datePosted,
             }: Partial<PostClass>): PostClass {
        return new PostClass(id, title, description, datePosted);
    }
}
