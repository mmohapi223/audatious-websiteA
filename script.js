const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {
Email.send({
   Host:"smtp.mailtrap.io", 
   Username:"ba31508f86cc3b",
   Password:"b15a73dc9c87a2",
   To:"obadia.mohapi94@gmail.com",
   From:inputs.elements["email"].value,
   Subject:"Contact Us Query By Customer",
   Body:inputs.elements["message"].value + "<br>"+inputs.elements["name"].value +"<br>"+inputs.elements["phone"],

}).then(msg=>alert("The email successfully sent"))

})