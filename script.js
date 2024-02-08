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


document.addEventListener('DOMContentLoaded', function() {
    var contactOption = document.getElementById('contactOption');

    contactOption.addEventListener('change', function() {
        var selectedOption = this.value;
        var emailInput = document.getElementById('emailInput');
        var phoneInput = document.getElementById('phoneInput');

        // Hide all input fields initially
        emailInput.style.display = 'none';
        phoneInput.style.display = 'none';

        // Show the selected input field
        if (selectedOption === 'email') {
            emailInput.style.display = 'block';
        } else if (selectedOption === 'phone') {
            phoneInput.style.display = 'block';
        }
    });
});

$(document).ready(function(){
    $('#album li img').click(function(){
        // Open the lightbox
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        // Clear existing content in the box
        if ($('.box').find('img').length) {
            $('.box img').remove(); // Remove current image if exists
        }

        // Clone the clicked image and append to the box
        var img = $(this).clone();
        img.css('width', '100%'); // Ensure the image fits the box
        $('.box').append(img);
    });

    // Close the lightbox when clicking the close button or backdrop
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop, .box').css('display', 'none');
        });
        $('.box').fadeOut();
    });
});
