import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBZCL-_OZuBEz_hCo7L0xgp5-WOaNTkQt8",
    authDomain: "expensify-547f7.firebaseapp.com",
    databaseURL: "https://expensify-547f7.firebaseio.com",
    projectId: "expensify-547f7",
    storageBucket: "expensify-547f7.appspot.com",
    messagingSenderId: "409409934840"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('notes').once('value').then((snapshot)=>{
    const notes = [];
snapshot.forEach((childSnapshot)=>{
notes.push({
    id : childSnapshot.key,
    ...childSnapshot.val()
})
});
console.log(notes);
});
// database.ref('notes').push({
//     title :'First note',
//     body :'This is my note'
// });
    
// database.ref().set({
//         name: "Hamza Tanji Cherkaoui",
//         age: 24,
//         isSingle: false,
//         location: {
//             city: "Casablanca",
//             country: "morocco"
//         }

//     }).then(()=>{
//         console.log('Data is saved');
//     }).catch((e)=>{
//         console.log('This failed',e);
//     });
//    database.ref().update({
//        name :"Mike",
//        age : 29,
//        job :'Software developer'
//    });
// database.ref().remove().then(()=>{
//             console.log('Data was removed');
//         }).catch((e)=>{
//             console.log('This failed',e);
//         });

// database.ref().on('value', (snapshot)=>{
//     const val =snapshot.val();
//     console.log('data',val);
// }
// );

// setTimeout(()=>{
// database.ref('age').set(28);
// },3500)