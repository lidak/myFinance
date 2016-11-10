'use strict';
let mongojs = require('mongojs');
var expencesCollection;
let db;

let getExpencesForUser = function (userName, startDate, finishDate) {

};

let setExpenceForUser = function (userId, category, product, date, price) {
    var returnedPromise = new Promise(function (resolve, reject) {
        console.log('********',expencesCollection);
        db[expencesCollection].save({
            userId,
            category,
            product,
            date,
            price
        }, function (err, doc) {
        console.log('11111********');

            console.log('err', err, 'doc', doc);
            if (err) {
                reject({
                    result: 'ERROR',
                    response: err
                });
            } else {
                resolve({
                    result: 'SUCCESS',
                    response: doc
                });
            }
        });
    });

    return returnedPromise;
};

let clearExpences = () => {
    let clearPromise = new Promise ((resolve, reject)=>{
        db[expencesCollection].remove({}, (err, result)=> {
            if(err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });

    return clearPromise;
};

module.exports = function (expencesCollectionName) {
    expencesCollection = expencesCollectionName;
    db = mongojs('myFinance', [expencesCollection]);
    return {
        getExpencesForUser,
        setExpenceForUser,
        clearExpences
    };
};