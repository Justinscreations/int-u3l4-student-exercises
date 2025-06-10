// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.



// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('mouseover', function() {
    myName.innerHTML = "Justin"
    myHobby.innerHTML = "Play Tennis"
    myLocation.innerHTML = "Indianapolis"
});

contentButton.addEventListener('mouseleave', function() {
    myName.innerHTML = "My Name is..."
    myHobby.innerHTML = "I like to..."
    myLocation.innerHTML = "I live..."
});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener('mouseover', function(){
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9s7Zsas3Ee0grv_PPcI4yznWl4TduWjCe8w&s"
})

image1Button.addEventListener('mouseleave', function(){
    image.src = ""
})




// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener('mouseover', function(){
    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Indianapolis-1872528.jpg/960px-Indianapolis-1872528.jpg"
})

image2Button.addEventListener('mouseleave', function(){
    image.src = ""
})
// BONUS
// 7. Try using different event types for your buttons.
