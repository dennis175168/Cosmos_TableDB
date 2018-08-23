var func = require('./functions');
var db_id = 'hzwPAA==/';
var collection_id = 'hzwPANSzBwA=/';
var id = 'dbs/'+db_id+'colls/'+collection_id ;
//var par = 'dbs/hzwPAA==/colls/hzwPANSzBwA=/';//collection_id
var sql = 'SELECT * FROM root c ';//where c.user_id = "Hello World"' ;
var data = {
    id:'qqqq'
};

func.que(par ,sql , call);

func.insert(id , data);

function call(err , items){
    if (err) {
        console.log(err);
    }
    items.forEach(id => {
        console.log(id);
    });
}
