var snapshotVal;

$('#data').on('click',function(e){
  e.preventDefault();
  console.log('button fucking clicked and I updated');
  var ref = new Firebase('https://bike-map-fd305.firebaseio.com/');
  ref.on('value', function(snapshot) {
    snapshotVal = snapshot.val();
    console.log(snapshot.val());
    snapshotVal.data[1464579162191].stations.forEach(function(station){
      $('.data').append('<li>' + station.s + '</li>');
    });
  }, function (errorObject) {
    console.log('The read failed: ' + errorObject.code);
  });
});

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDGOKNzi3oLaVYw7OdtZ1AbjRmuQvJm4uA',
  authDomain: 'bike-map-fd305.firebaseapp.com',
  databaseURL: 'https://bike-map-fd305.firebaseio.com',
  storageBucket: 'bike-map-fd305.appspot.com',
};
firebase.initializeApp(config);