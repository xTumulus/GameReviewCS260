export class Article {
    public url: string;
    public type: string;
    public image: string;
    public gameTitle: string;
    public title: string;
    public rating: string;
    public author: string;
    public description: string;
    public content: string;
    public comments: string;

    constructor(url: string, type: string, image: string, gameTitle: string,
        title: string, rating: string, author: string, description: string, content: string) {
        this.url = url;
        this.type = type;
        this.image = image;
        this.gameTitle = gameTitle;
        this.title = title;
        this.rating = rating;
        this.author = author;
        this.description = description,
        this.content = content;
        this.comments = '';
    }
}
