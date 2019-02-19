export class Recipes {
    public name: String;
    public description: String;
    public imagePath: String;

    constructor(name: string, description: string, imagePath: String) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
}