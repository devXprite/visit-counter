/* eslint-disable no-useless-escape */
const { initializeApp, deleteApp } = require("firebase/app");
const dotenv = require("dotenv");

const {
    getDatabase,
    ref,
    runTransaction,
} = require("firebase/database");

dotenv.config();

const { FIREBASE_DATABASE } = process.env;

const firebaseConfig = {
    databaseURL: FIREBASE_DATABASE,
};

const counter = async (id) => {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    // const key = id.replace(/[^a-zA-Z/@%]/g, "");
    const key = id.replace(/[\/\.#$\[\]]/g, "");
    let count = 0;

    return new Promise((resolve) => {
        runTransaction(
            ref(db, `counter/${key}/counts`),
            (totalHits) => {
                count = totalHits + 1;
                return count;
            },
        ).catch((error) => {
            console.log(error);
        }).then(() => {
            deleteApp(app);
            resolve(count);
        });
    });
};

module.exports = counter;
