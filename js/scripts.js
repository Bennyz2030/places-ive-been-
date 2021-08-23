function DestinationLog() {
  this.destinations = {};
  this.currentId = 0;
}

DestinationLog.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
}

DestinationLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

DestinationLog.prototype.findDestination = function(id) {
  if (this.destinations[id] != undefined) {
    return this.destinations[id];
  }
  return false;
}

DestinationLog.prototype.deleteDestination = function(id) {
  if (this.destinations[id] === undefined) {
    return false;
  }
  delete this.destinations[id];
  return true;
}

// Business Logic for Destination

function Destination(location, travelDate, landmarks) {
  this.location = location;
  this.travelDate = travelDate;
  this.landmarks = landmarks;
}

Destination.prototype.displayInfo = function() {
  return this.location + " " + this.travelDate + " " + this.landmarks;
}

// UI Logic
let destinationLog = new DestinationLog();

$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
    event.preventDefault();
    const locationInput = $("input#new-location").val();
    const travelDateInput = $("input#new-travel-date").val();
    const landmarksInput = $("input#new-landmarks").val();
    let newDestination = new Destination(locationInput, travelDateInput, landmarksInput);
    destinationLog.addDestination(newDestination);
    console.log(destinationLog.destinations);

    $(".locations").text(destinationLog.destinations[1].location);
    $(".travel-date").text(destinationLog.destinations.travelDate);
    $(".landmarks").text(destinationLog.destinations.landmarks);

    $("#show-destination").show();
  });
});