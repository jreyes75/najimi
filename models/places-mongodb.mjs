import {Place, AbstractPlacesStore} from './placesConstructor.mjs';
import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const db = await (async () => {
    let client = await MongoClient.connect('mongodb+srv://root:alpine@cluster0.gzfqi.mongodb.net/najimi?retryWrites=true&w=majority');

    //bring database called najimi
    return client.db('najimi');
})();

//access najstores collection
const places = db.collection('najstores');

class MongoDBPlacesStore extends AbstractPlacesStore {
    async create (key, img, name, category, address, description) {
    await places.insertOne( {
        key: key,
        img: img,
        name: name,
        category: category,
        address: address,
        description: description,
    });

        return new Place(key, img, name, category, address, description);
    }

    //edit database objects
    async update (key, img, name, category, address, description) {
        await places.updateOne({key: key}, {
        $set: {
            name: name,
            img: img,
            category: category,
            address: address,
            description: description
        }
    })

        return new Place(key, img, name, category, address, description);
    }

    //read database object
    async read (key) {
        let doc = await places.findOne({key: key});
        return new Place(doc.key, doc.img, doc.name, doc.category, doc.address, doc.description);
    }

    //delete database object
    async destroy (key) {
        let doc = await places.findOne({key: key});
        if (!doc) {
            throw new Error(`No place found for ${key}`);
        }

        return await places.findOneAndDelete({key: key});
    }

    async keyList() {
        return await places.find().map(place => place.key).toArray();
    }

    async count() {
        return await places.countDocuments();
    }
}

export {MongoDBPlacesStore}