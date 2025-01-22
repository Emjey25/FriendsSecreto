let friends = [];
const Button = document.querySelector("#draw-button");
const Input = document.querySelector("#friends-input");
const Reset = document.querySelector("#reset-button");
const Result = document.querySelector("#result");

// Create Function
function SortedFriends() {
  friends = Input.value.split(","); //
  // toma la cadena de texto y la separa por coma
  // esto lo hice con el fin de ahorrar el push
  if (friends.length < 2 || friends.length == 0) {
    alert("Ingresa al menos dos amigos para crear un amigo secreto");
    return;
    // el retun en este caso es para que no se ejecute el
    // resto del codigo
  }

  let RandomNumber = Math.floor(Math.random() * friends.length); //  entre 0 y el largo de la lista
  let friendSecret = friends[RandomNumber];
  Result.innerHTML = `Tu amigo secreto es 😁: ${friendSecret}`;
  Result.classList.add("result-background"); // Agrega la clase para cambiar el color
}

function ResetValues() {
  Input.value = "";
  friends = [];
  Result.innerHTML = "Tu amigo secreto es: [  ]";
  Result.classList.remove("result-background"); // Remueve la clase al resetear
}

Button.addEventListener("click", SortedFriends);
Reset.addEventListener("click", ResetValues);
