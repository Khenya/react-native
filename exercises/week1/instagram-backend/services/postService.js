const db = require('../config/firebaseConfig');
const collectionName= 'post';
const addPost = async (post) => {
    const { id } = post; 
    try {
        await db.collection(collectionName).add(post);
        return `La publicación con ID ${id} fue agregada correctamente!`; 
    } catch (error) {
        console.error('Error adding document: ', error);
        throw new Error('¡Ups! Algo salió mal al agregar la publicación.');
    }
};

module.exports = {  addPost };