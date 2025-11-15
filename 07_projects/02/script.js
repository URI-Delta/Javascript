const form = document.querySelector('form')


form.addEventListener('submit', (e) => {
  e.preventDefault()

  let Height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let results = document.querySelector('#results');



if (Height ==='' || Height <0 || isNaN(Height)) {
  results.innerHTML = `Please enter Valid Height ${Height}`
}else if ( weight ==='' || weight <0 || isNaN(weight)) {
  results.innerHTML = `Please enter Valid weight ${weight}`
}else{
  let BMI = (weight / ((Height * Height) / 10000)).toFixed(2);
  results.innerHTML= `<span>${BMI}</span>`
}
} );