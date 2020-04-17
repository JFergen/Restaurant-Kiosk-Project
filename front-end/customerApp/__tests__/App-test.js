// /**
//  * @format
//  */

// import 'react-native';
// import React from 'react';
// import App from '../App';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

const firebase = require("@firebase/testing");
// require( '@react-native-firebase/functions');
// require( '@react-native-firebase/auth');
// const firestore = require('@react-native-firebase/firestore');


//NOTE-------make sure to set ordersComplete to false when adding a table number-------NOTE
//this function will add a table to the database
//the functions parameter is a item object.
//for example:
/*let item = {
    available: false,
    ordersComplete: false,
    tableNumber: '1',
    waitstaff: 'Dak Prescott',
    }*/
//then pass item to the function i.e, addTables(item)
//NOTE-------make sure to set ordersComplete to false when adding a table number-------NOTE 
it("should add tables doc", async () => {
async function addTables(item) {
    let isSuccess;
    await firebase.firestore().collection('Tables').doc(item.tableNumber).set(item)
    .then(() => {
        console.log("Successfully added table to the table doc.");
        isSuccess = true;
    })
    .catch((error) => {
        alert("Error adding table to table doc: ", error);
        isSuccess = false;
    });
    return isSuccess;

    
}
let item = {
  available: false,
  ordersComplete: false,
  tableNumber: '1',
  waitstaff: 'Dak Prescott',
  }

addTables(item)
});


//this function is used delete a table from the database
//the functionsparamater is a string which is the table number i.e., deleteTables('1') will delete the table who's number is 1
it("should delete table", async () => {
async function deleteTables(tableNumber) {
    
    let isSuccess;

    await firebase.firestore().collection('Tables').doc(tableNumber).delete()
    .then(() => {
        isSuccess = true;
    })
    .catch((error) => {
        console.error("Error deleting Table from Table database table: ", error);
        isSuccess = false;
    });

    return isSuccess;
}
deleteTables('1')
});

//this function will get all of the tables in the Tables database
it("should get table", async () => {
async function getTables() {
    let tables = []
    
    await firebase.firestore().collection('Tables').where('available', '==', false).get()
    .then((snapshot) => {
        tables = snapshot.docs.map(doc => doc.data());
    })
    .catch ((error) => {
        alert('Failure getting tables.', error);
    });
    
    return tables;
}
getTables()
});

//this function is used to update table infromation to the database
//the functionsparameter is a item object.
//for example:
/*let item = {
    available: false,
    ordersComplete: true,
    tableNumber: '1',
    waitstaff: 'Tony Romo',
    }*/
//then pass item to the function i.e, updateTableInformation(item)
//this will update the table which is table number 1
//the available status will change to false,
//the ordersComplete status will change to true,
//table number will remain 1,
//waitstaff will be changed to Tony Romo
//updateTableInformation(item)
it("should update table", async () => {
async function updateTableInformation(item) {
    let isSuccess;
    await firebase.firestore().collection('Tables').doc(item.tableNumber).update(item)
    .then(() => {
        console.log('Successfully updated table.');
        isSuccess = true;
    })
    .catch((error) => {
      alert("Error updating Table in database table: ", error);
      isSuccess = false;
     
    });
    return isSuccess;
}
let item = {
  available: false,
  ordersComplete: false,
  tableNumber: '1',
  waitstaff: 'Dak Prescott',
  }

updateTableInformation(item)
});


//this function is used to mark a particular tables order status as true
//the function takes a number which is a string as it's parameter
//for example: markTableOrderStatusAsTrue('1')
//this will mark the ordersComplete status for table number as true
//markTableOrderStatusAdTrue(tableNum)
it("should mark table as true", async () => {
async function markTableOrderStatusAsTrue(tableNum) {
    let isSuccess;
    let table = {
        tableNumber: tableNum,
        orderComplete: true
    }
    
    await firebase.firestore().collection('Tables').doc(tableNumber).update(table)
    .then(() => {
        console.log('Successfully updated table.');
        isSuccess = true;
    })
    .catch((error) => {
      alert("Error updating Table in database table: ", error);
      isSuccess = false;
     
    });
    return isSuccess;
}
markTableOrderStatusAsTrue('1')
});

it("should get staff assigned to table", async () => {
async function getStaffAssignedToTable(tableNum) {
    let isSuccess;
    let staff;
    
    await firebase.firestore().collection('Tables').where('tableNumber', '==', tableNum).get()
    .then((snapshot) => {
        console.log('Successfully retrieved waitstaff id.');
        staff = tables = snapshot.docs.map(doc => doc.data());
    })
    .catch((error) => {
      alert("Error getting waitstaff id from table: ", error);
      isSuccess = false;
     
    });
    
    if (!isSuccess) {
        return false;
    }
    
    return staff[0];
}
getStaffAssignedToTable('1')
});


it("should set call server to true", async () => {
    async function callServer(tableNumber) {
        let isSuccess;
        let call = {
            tableNumber: tableNumber,
            callServer: true
        };
        
        await firebase.firestore().collection('CallServer').doc(call.tableNumber).update(call)
        .then(() => {
            isSuccess = true;
        })
        .catch((error) => {
            console.error("Error calling server.", error);
            isSuccess = false;
        });
    
        return isSuccess;
    }

    callServer('1');
});


it("should set call server to false", async () => {
    async function setToFalse(tableNumber) {
        let isSuccess;
        let call = {
            tableNumber: tableNumber,
            callServer: false
        };
        
        await firebase.firestore().collection('CallServer').doc(call.tableNumber).update(call)
        .then(() => {
            isSuccess = true;
        })
        .catch((error) => {
            console.error("Error updating CallServer table", error);
            isSuccess = false;
        });
    
        return isSuccess;
    }

    setToFalse('1');
});

it("should add customer to customer table", async () => {
    async function addCustomer(Customer) {
    
        let isSuccess;
        let validEmail = true;
        
        await firebase.firestore().collection('Customers').where('email', '==', Customer.email).get()
        .then((snapshot) => {
            if (snapshot.empty) {
                validEmail = false;
            } 
            
        })
        .catch (error => {
            console.log('error getting doc', error);
        });
        if(validEmail==true)
        {
            console.log('Email already exists');
            let emailExist = 'Email already exists'
            return emailExist
        }
        
        
        let autoID = firebase.firestore().collection('Customers').doc().id;
    
        Customer.id = autoID;
    
        await firebase.firestore().collection('Customers').doc(autoID).set(Customer)
        .then(() => {
            isSuccess = true;
            console.log("Customer added Successfully");
            isSuccess = true;
        })
        .catch((error) => {
            isSuccess = false;
            console.error("Error adding Customer to Customer table: ", error);
            isSuccess = false;
        });
        return isSuccess;
    }

    let Customer = {
            email:"johndoe@gmail.com",
            id: "l8qDPeaGzOC4egZMW5hW",
            name: "John Doe",
            orderID: ["v6J7iJmyHxW5CIdCosvK"],
            password: "password"
    };
    
    addCustomer(Customer);
});

it("should delete customer from customer table", async () => {
    async function deleteCustomer(CustomerID) {
    
        let isSuccess;
    
        await firebase.firestore().collection('Customers').doc(CustomerID).delete()
        .then(() => {
            isSuccess = true;
        })
        .catch((error) => {
            console.error("Error deleting customer from customer table: ", error);
            isSuccess = false;
        });
    
        return isSuccess;
    }

    deleteCustomer('l8qDPeaGzOC4egZMW5hW');
});

it("should login the customer", async () => {
    async function login(email, password) {
        let validEmail = true;
        let customer;
    
        await firebase.firestore().collection('Customers').where('email', '==', email).get()
        .then((snapshot) => {
            if (snapshot.empty) {
                validEmail = false;
            } 
            else {
                customer = snapshot.docs.map(doc => doc.data());
            }
        })
        .catch (error => {
            console.log('Error getting document', error);
        });
        
        if (validEmail) {
            if (password != customer[0].password) {
                return 'Invalid Email or Password';
            }
        }
        else {
            return 'Invalid Email or Password';
        }
        
        return customer;
    }

    login('aaronshehan28@gmail.com', 'password');
});

it("should retrieve all customers", async () => {
    async function getCustomers() {
        let query;
    
        await firebase.firestore().collection('Customers').get()
        .then((snapshot) => {
            query = snapshot.docs.map(doc => doc.data());
        })
        .catch ((error) => {
            console.log('Error getting document', error);
            query = null;
        });
        
        return query;
    }

    getCustomers();
});

it("should update customer information", async () => {
    async function updateCustomerInformation(item) {
        let isSuccess;
    
        await firebase.firestore().collection('Customers').doc(item.id).update(item)
        .then(() => {
            isSuccess = true;
        })
        .catch((error) => {
            console.error("Error updating Order in database table: ", error);
            isSuccess = false;
        });
    
        return isSuccess;
    
    }

    let Customer = {
        email:"johndoe@gmail.com",
        id: "l8qDPeaGzOC4egZMW5hW",
        name: "John Doe",
        orderID: ["v6J7iJmyHxW5CIdCosvK"],
        password: "password"
    };

    updateCustomerInformation(Customer);
});
