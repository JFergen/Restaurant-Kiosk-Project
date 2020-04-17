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
