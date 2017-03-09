'use strict'

console.log("checkout.js is linked")

// As a user, I should be able to enter a credit card number and relevant information, have the card validated, and be able to "purchase" the products.
//
// _Note: Basic validation should happen as the user enters information into the fields. Additional validation should come from [stripe.js](https://stripe.com/docs/stripe.js)._
//
// __Acceptance Criteria:__
// * A clearly labeled credit card form with the following fields:
//   * credit card number (required, validates for at least 16 numbers)
//   * credit card month/year (required, validates for presence)
//   * CVC (required, validates for presence)
// * A "Purchase" button that, when clicked:
//   * Validates all fields on the page (Shipping, Billing, and Credit Card)
//   * If there are no obvious errors, sends credit card information to Stripe
//   * If Stripe returns a success response, clears all fields and shows some sort of success message.
//   * If Stripe returns an error response, the error is displayed on the page


$('form').on('submit', function(e) {
  e.preventDefault()
  console.log('form submitted!')

  $.ajax({
    url: 'https://api.stripe.com',
    method: 'GET'
  }).then(function(result){
    window.alert('Credit Card Accepted!')

  }).catch(function(error){
    console.error("ERROR:",error)
    window.alert(error)
  })

})


// $('first-name').focus()
//
// $('form').on('submit', function(e) {
//     e.preventDefault()
//     console.log('its alive!')
//
//     $.ajax({
//         url: 'https://galvanize-student-apis.herokuapp.com/gpersonnel/roles',
//         method: 'GET'
//     }).then(function(result) {
//         let i = -1
//         let selected = $('#roles')
//         // let selected = document.getElementById("#roles")
//         // let selectedType = selected.options[selected.selectedIndex].value
//
//         const sortedRoles = []
//         console.log(selected.innerHTML,result)
//
//         while (i++ < result.length) {
//             const roleType = result[i].title
//             $('#roles').append(`<option value="${roleType}">${roleType}</option>`)
//         }
//
//         selected.on('change',function(){
//           addPictures(result,)
//         })
//         addPictures(result,result.indexOf(selected.innerHTML))
//
//         // console.log(sortedRoles)
//         // return appendRoles(sortedRoles)
//
//     }).catch(function(error) {
//         console.error('Error:', error)
//     })
//
//     function addPictures(data,i){
//       return document.getElementsByClassName("role-preview")[0].src=`${data[i].img}`
//       // $(".role-preview").attr('src',`${data[i].img}`);
//       // $('.role-preview')
//     }
// })
