const formButton = document.getElementById("form")! as HTMLButtonElement;

formButton.addEventListener("click", (it) => {
  it.stopPropagation();
  it.preventDefault();
});
