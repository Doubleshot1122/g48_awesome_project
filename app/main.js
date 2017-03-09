'use strict'

console.log("main.js is linked")

//defined a scope limited object with methods for manipulating the carousel picture
const carousel = (function(document){
  const carousel = {}
  const imageContainer = document.getElementById("image-container")
  const imagesArray = []
  let currentImage = imagesArray[0]


  function populateImageArray(){
    const pictureOne = new Image()
    pictureOne.src = "./assets/carousel1.jpg"
    const pictureTwo = new Image()
    pictureTwo.src = "./assets/carousel2.jpg"
    const pictureThree = new Image()
    pictureThree.src = "./assets/carousel3.jpg"

    return imagesArray.push(pictureOne,pictureTwo,pictureThree)
  }

  populateImageArray()

  carousel.switchImageRight = function(){
    return switchImage('right')
  }

  carousel.switchImageLeft = function(){
    return switchImage('left')
  }

  //single general switch image function with generalizability to more than three pictures
  function switchImage(direction){
    const currentIndex = imagesArray.indexOf(currentImage)
    if(direction === 'left'){
      if(currentIndex !== 0){
        return displayImage(imagesArray[currentIndex - 1])
      }
      return displayImage(imagesArray[imagesArray.length - 1])
    }
      if(currentIndex !== imagesArray.length - 1){
        return displayImage(imagesArray[currentIndex + 1])
      }
      return displayImage(imagesArray[0])
  }

  function displayImage(picture){
    removePreviousImage(imageContainer,currentImage)

    currentImage = picture
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
