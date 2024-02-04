var fileNames = [];
var imageList = [];
var captionTexts = ["Give me five!", "Good morning!", "Today is my off day.", "Friends Forever", "What a surprise!", "I hate cold...", "My favorite toy :)", "Did you like my hair?", "Trekking is fun...", "Yay! It's Friday!"];
var descTexts = ["Give me five!", "Good morning!", "Today is my off day.", "Friends Forever", "What a surprise!", "I hate cold...", "My favorite toy :)", "Did you like my hair?", "Trekking is fun...", "Yay! It's Friday!"];

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
