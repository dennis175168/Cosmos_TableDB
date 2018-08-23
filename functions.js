var DocumentClient = require('documentdb').DocumentClient;

var host = "https://dennis-bot-o365db.documents.azure.com:443/";                     // Add your endpoint
var masterKey = "p9UCnTHUnw81AvSBZ7yVd5I1RlAzmSyOyhhXKESHO3xRKhMD8IvnTC4ZYPUibbPDECoYRj8lvlKJkYDPnU1ENQ==";  // Add the masterkey of the endpoint
var client = new DocumentClient(host, {masterKey: masterKey});

var databaseDefinition = { id: "sample database" };
var collectionDefinition = { id: "sample collection" };
var documentDefinition = { id: "hello world doc", content: "Hello World!" };


// que(par,sql,call)

module.exports = {
    insert : function (collection_self , data){
        client.createDocument(collection_self, data, function(err, document) {
            if(err) return console.log(err);
            console.log('Created Document with content: ', document.content);
        });
    },

    delete: function (doc_self) {  
        client.deleteDocument(doc_self, function(err , document){
            if(err) return console.log(err);
        })
    },
    
    query : function (col_self , sql, callback) {
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
    },
    
    update : function (doc_self , new_doc ){
        client.replaceDocument(doc_self , new_doc , function(err , res){
            if(err) {
                return console.log(err);
            }
            console.log(res);
        })
    }

    
};







