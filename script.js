var fileNames = [];
var imageList = [];
var captionTexts = ["Give me five!", "Good morning!", "Today is my off day.", "Friends Forever", "What a surprise!", "I hate cold...", "My favorite toy :)", "Did you like my hair?", "Trekking is fun...", "Yay! It's Friday!"];
var descTexts = 
["Give me five!", "Good morning!", "Today is my off day.", "Friends Forever", "What a surprise!", "I hate cold...", "My favorite toy :)", "Did you like my hair?", "Trekking is fun...", "Yay! It's Friday!"];
for (var i = 0; i < 10; i++) {
    fileNames.push("g" + (i+1));
    var photoId = "photo" + (i+1);
    var listItem = "<li id='" + photoId + "'>" +
                   "<img src='images/" + fileNames[i] + ".jpg' alt=''>" +
                   "<div class='caption'>" + captionTexts[i] + "</div>" +
                   "<div class='description'>" + descTexts[i] + "</div>" +
                   "</li>";
    imageList.push(listItem);
}

document.getElementById("album").innerHTML = imageList.join('');

document.addEventListener('DOMContentLoaded', function() {
    var infoBox = document.getElementById('infoBox');
    var infoTitle = document.getElementById('infoTitle');
    var infoText = document.getElementById('infoText');
    var infoClose = document.getElementById('infoClose');

    // Text information array
    var textInfo = ["Give me five!", "Good morning!", "Today is my off day.", "Friends Forever", "What a surprise!", "I hate cold...", "My favorite toy :)", "Did you like my hair?", "Trekking is fun...", "Yay! It's Friday!"];

    // Setup event listeners for each description
    document.querySelectorAll('.description').forEach(function(desc, index) {
        desc.addEventListener('click', function() {
            // Set the info box content
            infoTitle.innerHTML = this.previousElementSibling.innerHTML; // caption is right before the description
            infoText.innerHTML = textInfo[index % textInfo.length]; // Cycle through textInfo if there are more descriptions than infos
            infoBox.style.visibility = 'visible'; // Show the info box
        });
    });

    // Close info box
    infoClose.addEventListener('click', function(e) {
        e.preventDefault();
        infoBox.style.visibility = 'hidden';
    });
});
