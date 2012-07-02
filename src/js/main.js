forge.logging.info("Add JavaScript to js/main.js!");

Pouch('idb://test', function(err, db) {
    // Use db to call further functions
    forge.logging.info("Horay");
})

$(document).ready(function(){
    new GMaps({
      div: '#map',
      lat: -12.043333,
      lng: -77.028333,
      height: '200px'
    });
});
