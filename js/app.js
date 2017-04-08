  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyB9qdqVJQOFC2U4MWDURq6qbTg2ARPp99c",
      authDomain: "firetest-2e037.firebaseapp.com",
      databaseURL: "https://firetest-2e037.firebaseio.com",
      projectId: "firetest-2e037",
      storageBucket: "firetest-2e037.appspot.com",
      messagingSenderId: "548369797463"
    };
    firebase.initializeApp(config);

    //GET ELEMENTS
    var etEmail   = document.getElementById("email");
    var etPass    = document.getElementById("pass");
    var btnLogin  = document.getElementById("btnLogin");
    var btnSignUp = document.getElementById("btnSignUp");
    var btnLogout = document.getElementById("btnLogout");

    btnLogin.addEventListener("click", function(e){
      var email   = etEmail.value;
      var pass    = etPass.value;
      var auth    = firebase.auth();
      //Sign in
      var promise = auth.signInWithEmailAndPassword(email,pass);
      promise.catch(function(e){
         console.log(e.message);
      });
    });

    //Sign Up
    btnSignUp.addEventListener("click", function(e){
      //TODO: CHECK FOR A REAL EMAIL
      var email   = etEmail.value;
      var pass    = etPass.value;
      var auth    = firebase.auth();
      var promise = auth.createUserWithEmailAndPassword(email,pass);
      promise.catch(function(e){
         alert(e.message);
      });
    });

    //Logout
    btnLogout.addEventListener("click", function(e){
      firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        console.log(user);
        btnLogout.classList.remove("hide");
      }else{
        console.log("Not logged in!");
        btnLogout.classList.add("hide");
      }
    });
