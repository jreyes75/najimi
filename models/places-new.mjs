class Place{
    #key;
    #img;
    #name;
    #category;
    #address;
    #description;

    constructor(key, img, name, category, address, description){
        this.#key = key;
        this.#img = img;
        this.#name = name;
        this.#category = category;
        this.#address = address;
        this.#description = description;
    }

    get key(){
        return this.#key;
    }
    get img(){
        return this.#img;
    }
    get name(){
        return this.#name;
    }
    get category(){
        return this.#category;
    }
    get address(){
        return this.#address;
    }
    get description(){
        return this.#description;
    }

    get JSON(){
        return this.JSON.stringify({
            key: this.#key,
            img: this.#img,
            name: this.#name,
            category: this.#category,
            address: this.#address,
            description: this.#description
        }, null, 1)
    }

    set JSON(json){
        const data = JSON.parse(json);

        if (typeof data !== 'object' ||
            !data.hasOwnProperty('key') ||
            !data.hasOwnProperty('img') ||
            !data.hasOwnProperty('name') ||
            !data.hasOwnProperty('category') ||
            !data.hasOwnProperty('address') ||
            !data.hasOwnProperty('description') ||
            typeof data.key !== 'string' ||
            typeof data.img !== 'string' ||
            typeof data.name !== 'string' ||
            typeof data.category !== 'string' ||
            typeof data.address !== 'string' ||
            typeof data.description !== 'string') {
                throw new Error(`Not a valid note: ${json}`);
    }

    return new Place(data.key, data.img, data.name, data.category, data.address, data.description);
    }

    toJSON(){
        return this.JSON;
    }
}
class AbstractPlaceStore{
    async create (key, img, name, category, address, description){}
    async update (key, img, name, category, address, description){}
    async read (key, img, name, category, address, description){}
    async destroy (key, img, name, category, address, description){}
    async keyList (){}
    async count (){}
}
export {Place, AbstractPlaceStore};