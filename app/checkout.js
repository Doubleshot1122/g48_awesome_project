'use strict'

console.log("checkout.js is linked")

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

// Create a Stripe client
var stripe = Stripe('pk_test_GypWDFrpgR7n5LaZiv1IFHUE');

// Create an instance of Elements
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
var style = {
  base: {
    color: '#32325d',
    lineHeight: '24px',
    fontFamily: 'Helvetica Neue',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

const checkbox = document.getElementById('checkbox')
checkbox.addEventListener('click',function(){

alert('Copy it over. What are you waiting for?')

  var $billName = $('#inputFirstNameS').val()
  $('#inputFirstNameB').val($billName)
  var $billLast = $('#inputLastNameS').val()
  $('#inputLastNameB').val($billLast)
  var $billWork = $('#inputCompanyS').val()
  $('#inputCompanyB').val($billWork)
  var $billAddr1 = $('#inputAddress1S').val()
  $('#inputAddress1B').val($billAddr1)
  var $billAddr2 = $('#inputAddress2S2').val()
  $('#inputAddress2B2').val($billAddr2)
  var $billCity = $('#inputCityS').val()
  $('#inputCityB').val($billCity)
  var $billState = $('#inputStateS').val()
  $('#inputStateB').val($billState)
  var $billZip5 = $('#inputZipS').val()
  $('#inputZipB').val($billZip5)
  var $billZip4 = $('#inputZipS2').val()
  $('#inputZipB2').val($billZip4)
})

// Create an instance of the card Element
var card = elements.create('card', {style: style});


// Add an instance of the card Element into the `card-element` <div>
card.mount('#card-element');

// Handle real-time validation errors from the card Element.
card.addEventListener('change', function(event) {
  const displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

// Handle form submission
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server
      stripeTokenHandler(result.token);
    }
  });
});
