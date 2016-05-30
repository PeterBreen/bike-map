'use strict';

(function(module){
  function Station(data){
    for(var key in data){
      this[key] = data[key];
    }
  }

  Station.all = [];
  Station.timeStamp = '';

  Station.requestData = function(callback){
    $.getJSON('https://secure.prontocycleshare.com/data/stations.json')
    .done(function(data){
      console.log('Pronto API call data: ', data);
      console.log(typeof(data));
      return data;
    }).done(callback);
  };

  Station.initStation = function(data){
    Station.timeStamp = data.timestamp; //This timestamp value is in Epoch time format.
    Station.all = data.stations.map(function(ele) {
      return new Station(ele);
    });
  };

  module.Station = Station;
})(window);
