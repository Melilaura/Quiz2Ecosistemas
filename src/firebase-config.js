const firebaseConfig = {
    apiKey: "AIzaSyC_HMoUdRELDJ1r4Mx6piAUlR4Xx0SrQbo",
    authDomain: "quiz-f47b8.firebaseapp.com",
    projectId: "quiz-f47b8",
    storageBucket: "quiz-f47b8.appspot.com",
    messagingSenderId: "185475755475",
    appId: "1:185475755475:web:78608e476bbf3285f49326"
  };

  export function getFirebaseConfig(){
      if(!firebaseConfig || !firebaseConfig.apiKey){
          throw new Error("firebase configuration error");
      }else {
          return firebaseConfig;
      }
  }