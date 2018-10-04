import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBoyS-rM_NNiT6Qi23-ieGYC8KW3kt_-_I",
    authDomain: "nba-fullstk.firebaseapp.com",
    databaseURL: "https://nba-fullstk.firebaseio.com",
    projectId: "nba-fullstk",
    storageBucket: "nba-fullstk.appspot.com",
    messagingSenderId: "1037133079624"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  const firebaseLooper = (snapshot) => {
    
    const data = [];

    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    })
    return data;
  }


  export {
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseTeams, 
      firebaseVideos,
      firebaseLooper
  }