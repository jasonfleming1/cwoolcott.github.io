// Helpful Node SQL CRUD (Create, Read, Update, Delete) functions

// Simple Create / Insert
function insertProduct() {
	var sql = "INSERT INTO products SET ?";
  	var query = connection.query(
    sql,
    {
      flavor: "Rocky Road",
      price: 3.0,
      quantity: 50
    },
    function(err, res) {
      console.log(res.affectedRows + " product inserted!\n");
    }
  );
}

// Simple Read / Select
function selectProducts() {
  var sql = "SELECT * FROM products";
  connection.query(sql, function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].flavor + " | " + res[i].price + " | " + res[i].quantity);
    }
    //console.log(res);
    connection.end();
  });
}

// Simple Update
function updateProduct() {
	var sql = "UPDATE products SET ? WHERE ?";
  	var query = connection.query(
    sql,
    [
      {
        quantity: 100
      },
      {
        flavor: "Rocky Road"
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
    }
  );
}

// Simple Delete
function deleteProduct() {
	var sql = "DELETE FROM products WHERE ?";
  	connection.query(
    sql,
    {
      flavor: "strawberry"
    },
    function(err, res) {
      //console.log(res.affectedRows + " products deleted!\n");
    }
  );
}




