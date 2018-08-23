var DocumentClient = require('documentdb').DocumentClient;

var host = "https://dennis-bot-o365db.documents.azure.com:443/";                     // Add your endpoint
var masterKey = "p9UCnTHUnw81AvSBZ7yVd5I1RlAzmSyOyhhXKESHO3xRKhMD8IvnTC4ZYPUibbPDECoYRj8lvlKJkYDPnU1ENQ==";  // Add the masterkey of the endpoint
var client = new DocumentClient(host, {masterKey: masterKey});

var databaseDefinition = { id: "sample database" };
var collectionDefinition = { id: "sample collection" };
var documentDefinition = { id: "hello world doc", content: "Hello World!" };

// client.createDatabase(databaseDefinition, function(err, database) {
//     console.log(database);
//     if(err) return console.log(err);
//     console.log('created db');

//     client.createCollection(database._self, collectionDefinition, function(err, collection) {
//         console.log(collection);
//         if(err) return console.log(err);
//         console.log('created collection');

//         client.createDocument(collection._self, documentDefinition, function(err, document) {
//             if(err) return console.log(err);
//             console.log('Created Document with content: ', document.content);
//             cleanup(client, database);
//         });
//     });
// });

// function cleanup(client, database) {
//     client.deleteDatabase(database._self, function(err) {
//         if(err) console.log(err);
//     })
// }

//insert('dbs/hzwPAA==/colls/hzwPANSzBwA=/');
//del('dbs/hzwPAA==/colls/hzwPANSzBwA=/docs/hzwPANSzBwA9AAAAAAAAAA==/');
var par = 'dbs/hzwPAA==/colls/hzwPANSzBwA=/';
var sql = 'SELECT * FROM root c WHERE c.user_id = "Hello World!"'//where c.user_id = "Hello World"' ;
// let querySpec = {
//     query: 'SELECT * FROM root c WHERE c.user_id = "Hello World!"',
//     parameters: [{ name: 'dennis175168', value: '95cd7683-c916-4537-a84e-882164f58166' }]
//     };

function call(err , items){
    if (err) {
        console.log(err);
    }
    //console.log('code:' + JSON.stringify(items[0].code));
    //console.log('user_id:' + JSON.stringify(items[0].user_id));
    items.forEach(id => {
        console.log(id);
    });
    // console.log('id:' + JSON.stringify(items[0].id));
    // console.log('_self:' + JSON.stringify(items[0]._self));
}

que(par,sql,call)

function insert(collection_self){
    client.createDocument(collection_self, documentDefinition, function(err, document) {
        if(err) return console.log(err);
        console.log('Created Document with content: ', document.content);
    });
}


function del(doc_self) {  
    client.deleteDocument(doc_self, function(err , document){
        if(err) return console.log(err);
    })
}

function que(col_self , sql, callback) {
    client.queryDocuments(col_self ,sql ).toArray((err, results)=>{
        if (err) {
            console.log(err);
            callback(err);
        } else {
            //console.log(results);
            //callback(null,(results));
            console.log(JSON.stringify(results[0]));
        }
    })
}

function update(doc_self , new_doc ){
    client.replaceDocument(doc_self , new_doc , function(err , res){
        if(err) {
            return console.log(err);
        }
        console.log(res);
    })
}


