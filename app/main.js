'use strict'

console.log("main.js is linked")

//defined a scope limited object with methods for manipulating the carousel picture
const carousel = (function(document){
  const carousel = {}
  const imageContainer = document.getElementById("image-container")
  carousel.imagesArray = []

  function populateImageArray(){
    const pictureOne = new Image()
    pictureOne.src = "./assets/carousel1.jpg"
    const pictureTwo = new Image()
    pictureTwo.src = "./assets/carousel2.jpg"
    const pictureThree = new Image()
    pictureThree.src = "./assets/carousel3.jpg"

    return carousel.imagesArray.push(pictureOne,pictureTwo,pictureThree)
  }

  populateImageArray()
  carousel.currentImage = carousel.imagesArray[0]

  carousel.switchImageRight = function(){
    return switchImage('right')
  }

  carousel.switchImageLeft = function(){
    return switchImage('left')
  }

  //single general switch image function with generalizability to more than three pictures
  function switchImage(direction){
    const currentIndex = carousel.imagesArray.indexOf(carousel.currentImage)
    if(direction === 'left'){
      if(currentIndex !== 0){
        return displayImage(carousel.imagesArray[currentIndex - 1])
      }
      return displayImage(carousel.imagesArray[carousel.imagesArray.length - 1])
    }
      if(currentIndex !== carousel.imagesArray.length - 1){
        return displayImage(carousel.imagesArray[currentIndex + 1])
      }
      return displayImage(carousel.imagesArray[0])
  }

  function displayImage(picture){
    removePreviousImage(imageContainer,carousel.currentImage)

    carousel.currentImage = picture
    imageContainer.append(picture)
    return imageContainer
  }

  //this isnt working
  function removePreviousImage(parent,image){
    parent.innerHTML = ""
  }

  return carousel
})(document)

//switches image in carousel every 2.5 seconds
window.setInterval(carousel.switchImageRight,2500)

//Provides button click functionality for the page
document.getElementById('leftButton').addEventListener('click',carousel.switchImageLeft)
document.getElementById('rightButton').addEventListener('click',carousel.switchImageRight)
