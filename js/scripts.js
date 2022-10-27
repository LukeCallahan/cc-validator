//convert string to an array of strings
function ccInputToArray (number){
  let stringArray = number.split("");
  for (let i=0; i < stringArray.length; i += 1){
    stringArray[i] = parseInt(stringArray[i]);
  };
  for (let j=1; j <stringArray.length; j +=2){
      stringArray[j] = stringArray[j] * 2;
  };
  for (let i = 0; i < stringArray.length; i +=1) {
    if (stringArray[i] > 9){
      //convert it to a string,
      stringArray[i] = stringArray[i].toString();
      stringArray[i] = parseInt(stringArray[i].charAt(0)) + parseInt(stringArray[i].charAt(1));
    }
  };
  return stringArray;
}
window.addEventListener("load", function(){

  let form = document.querySelector("form");
  let result = document.getElementById("results");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const number = document.getElementById("text-input1").value;
    let test = ccInputToArray(number);
    console.log(test);
    let p = document.createElement("p");
    let div = document.querySelector("div");
    div.append(test);
    // p.append(test);    
  });
});
