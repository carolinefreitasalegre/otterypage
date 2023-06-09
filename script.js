function sortear() {
  let min = Math.ceil(document.getElementById("final").value);
  let max = Math.floor(document.getElementById("inicio").value);

  if (!min && !max) {
    alert("lknsc");
  } else {
    const result = Math.floor(Math.random() * (max - min) + min);

    alert(result);
  }
}
