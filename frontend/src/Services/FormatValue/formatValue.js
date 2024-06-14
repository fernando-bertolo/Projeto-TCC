function formatValue(input) {
  let value = input.value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
  let length = value.length;

  if (length <= 3) {
    input.value = value; // Apenas números
  } else if (length <= 6) {
    input.value = value.slice(0, length - 3) + "." + value.slice(length - 3); // Adiciona o ponto decimal após os 3 últimos dígitos
  } else {
    let formattedValue = "";
    let counter = 0;

    // Adiciona pontos a cada três dígitos
    for (let i = value.length - 1; i >= 0; i--) {
      if (counter === 3) {
        formattedValue = "." + formattedValue;
        counter = 0;
      }
      formattedValue = value[i] + formattedValue;
      counter++;
    }

    // Adiciona o ponto decimal
    formattedValue =
      formattedValue.slice(0, formattedValue.length - 3) +
      "." +
      formattedValue.slice(formattedValue.length - 3);
    input.value = formattedValue;
  }
}
