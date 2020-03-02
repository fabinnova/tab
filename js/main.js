// parcel build public/* --out-dir public_f
var firebaseConfig = {
apiKey: "AIzaSyCZky8lzCTdXM6qBauiRfQ41zrZ3EPNiaQ",
authDomain: "embaweb-c4ec8.firebaseapp.com",
databaseURL: "https://embaweb-c4ec8.firebaseio.com",
projectId: "embaweb-c4ec8",
storageBucket: "embaweb-c4ec8.appspot.com",
messagingSenderId: "342536773221",
appId: "1:342536773221:web:eb12ff5ec0b664d425308c"
};
firebase.initializeApp(firebaseConfig);

var ondu = firebase.database().ref('Ondu/Ondu1');
ondu.on('value', function(snapshot) {
    var data = snapshot.val();
    handleOndu(data);
});

var vV = document.getElementById('vV');
var vmV = document.getElementById('vmV');
var prodV = document.getElementById('prodV');
var fermoV = document.getElementById('fermoV');
var dateT = document.getElementById('dateT');
var speedLevels = [210, 230, 250, 270, 300];

function handleOndu(data) {
    if(data!=undefined && data.speed!=undefined
        && data.avgSpeed != undefined && data.stop!=undefined
         && data.meters != undefined) {
        vV.innerHTML = data.speed;
        if( data.avgSpeed >= speedLevels[4] ) {
        vmV.classList.add('rainbow');
        } else if(data.avgSpeed >= speedLevels[3]) {
        vmV.classList.remove('rainbow');
        vmV.style.color = '#0000FF';
        } else if(data.avgSpeed >= speedLevels[2]) {
        vmV.classList.remove('rainbow');
        vmV.style.color = '#00FFFF';
        } else if(data.avgSpeed >= speedLevels[1]) {
        vmV.classList.remove('rainbow');
        vmV.style.color = '#00FF00';
        } else if(data.avgSpeed >= speedLevels[0]) {
        vmV.classList.remove('rainbow');
        vmV.style.color = '#FFFF00';
        } else {
        vmV.classList.remove('rainbow');
        vmV.style.color = '#FF0000';
        }
        vmV.innerHTML = data.avgSpeed;
        fermoV.innerHTML = data.stop;
        prodV.innerHTML = data.prodV;
        var MyDate = new Date();
        var MyDateString;
        MyDate.setDate(MyDate.getDate());
        MyDateString = ('0' + MyDate.getDate()).slice(-2) + '/'
                    + ('0' + (MyDate.getMonth()+1)).slice(-2) + '/'
                    + MyDate.getFullYear();
        data.dateT = (MyDateString + " " + MyDate.toTimeString().substr(0,5) ); 
        dateT.innerHTML = data.dateT;
    }
}

var el = document.getElementById("bod");
function toggleFullScreen() {
  if (!document.mozFullScreen && !document.webkitFullScreen) {
    if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else {
      el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else {
      document.webkitCancelFullScreen();
    }
  }
}

butt.addEventListener("click", function(e) {
    toggleFullScreen();
}, false);
