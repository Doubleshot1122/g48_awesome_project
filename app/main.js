'use strict'

console.log("main.js is linked")

// As a user, I want to be able to have "promotional images" show to me in a carousel format. If I choose to move forward or back on an image, I should be able to do so as well.
//
// __Acceptance Criteria:__
// * At least three images are rotated at regular intervals on the main page
// * A forward and back button allows the user to move forward or backwards an image
// * If you move forward on the last image, it should go the first; if you move backwards on the first image, you should go to the last
// * If you move forward on an image, the timer should reset (i.e. if the timer is set to rotate every five seconds and a user clicks on the fourth second, the image should change and wait another five seconds)

//defined a scope limited object with methods for manipulating the carousel picture
const carousel = (function(document){
  const carousel = {}
  carousel.imagesArray = []

  //this function is incomplete
  function populateImageArray(){
    const pictureOne = "./assets/carousel1.jpg"
    const pictureTwo = "./assets/carousel2.jpg"
    const pictureThree = "./assets/carousel3.jpg"

    //
    // const pictureOne = document.getElementById('carousel1')
    // const pictureTwo = document.getElementById('carousel2')
    // const pictureThree = document.getElementById('carousel3')

    return carousel.imagesArray.concat(pictureOne,pictureTwo,pictureThree)
  }

  populateImageArray()
  carousel.currentImage = carousel.imagesArray[0]

  carousel.switchImageRight = function(){
    console.log(carousel.imagesArray)
    if(carousel.currentImage === carousel.imagesArray[0]){
      return displayImage(carousel.imagesArray[1])
    }
    else if(carousel.currentImage === carousel.imagesArray[1]){
      return displayImage(carousel.imagesArray[2])
    }
    else{
      return displayImage(carousel.imagesArray[0])
    }
  }

  carousel.switchImageLeft = function(){
    if(carousel.currentImage === carousel.imagesArray[0]){
      return displayImage(carousel.imagesArray[2])
    }
    else if(carousel.currentImage === carousel.imagesArray[1]){
      return displayImage(carousel.imagesArray[0])
    }
    else{
      return displayImage(carousel.imagesArray[1])
    }
  }

  function displayImage(picture){
    const imageContainer = document.getElementById("image-container")
    carousel.currentImage = picture
    console.log('we\'re displaying images!')
    console.log(picture)
    return imageContainer.src=`${picture}`
  }

  return carousel
})(document)

//switches image in carousel every 5 seconds
window.setInterval(carousel.switchImageRight(),5000)

//moves image to right or left
$(document).ready(function(){
  $('#leftButton').on('click',function(){
    carousel.switchImageRight()
  })

  $('#rightButton').on('click',function(){
    carousel.switchImageLeft()
  })
})
