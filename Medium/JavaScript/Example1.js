// Take input as first name , last name and you have a submit button. task is, you have to print Output , whatever you take as in the input , should be display

const display = () => {
  const text = document.getElementById("input").value;
  const output = text;
  document.getElementById("display").textContent = output;
};

// What is the use of textContent?
// The textContent is the DOM property that is used to set text content for the HTML element or 
// get the text content written inside that element. If you set the text using textContent for an element, 
// then the other child elements will be removed and only this text will be added in that element.