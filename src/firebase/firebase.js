import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

export {firebase , database as default };


// database.ref('notes').once('value').then((snapshot)=>{
//     const notes = [];
// snapshot.forEach((childSnapshot)=>{
// notes.push({
//     id : childSnapshot.key,
//     ...childSnapshot.val()
// })
// });
// console.log(notes);
// });
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