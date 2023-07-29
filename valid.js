export function validateCardHolder(input) {
    console.log("Card Holder Input:", input);
  
    const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const isValid = regex.test(input);
    console.log("Card Holder Validation Result:", isValid);
  
    return isValid;
  }
  
  /*
  export function validateCardNumber(input) {
    console.log("Card Number Input:", input);
  
    const regex = /^[0-9]+$/; 
    const isValidFormat = regex.test(input);
  
 
    const numericInput = input.replace(/[- ]/g, '');
    const isValidLength = numericInput.length === 16;
    
    const isValid = isValidFormat && isValidLength;
    console.log("Card Number Validation Result:", isValid);
  
    return isValid;
  }*/
  

  export function validateCardNumber(input) {
    console.log("Card Number Input:", input);
  
   
    const numericInput = input.replace(/[^0-9-]/g, '');
  
  
    const isValidFormat = /^\d{16}$/.test(numericInput);
  
    const isValid = isValidFormat;
    console.log("Card Number Validation Result:", isValid);
  
    return isValid;
  }
  
  
  export function validateCardDate(input) {
    console.log("Card Date Input:", input);
  
    const regex = /^\d{2}\/\d{2}$/;
    const isValid = regex.test(input);
    console.log("Card Date Validation Result:", isValid);
  
    return isValid;
  }
  
  export function validateCVV(input) {
    console.log("CVV Input:", input);
  
    const regex = /^\d{3,4}$/;
    const isValid = regex.test(input);
    console.log("CVV Validation Result:", isValid);
  
    return isValid;
  }