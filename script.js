function convertTemperature() {
  const temperatureInput = document.getElementById("temperature");
  const resultDiv = document.getElementById("result");
  const fahrenheitRadio = document.getElementById("fahrenheit");
  const celsiusRadio = document.getElementById("celsius");

  // Get temperature value from input
  const temperature = Number(temperatureInput.value);

  // Check which radio button is checked
  if (fahrenheitRadio.checked) {
    // Convert Fahrenheit to Celsius
    const celsius = ((temperature - 32) * 5) / 9;
    resultDiv.textContent = `${temperature}°F is ${celsius.toFixed(1)}°C`;
  } else {
    // Convert Celsius to Fahrenheit
    const fahrenheit = (temperature * 9) / 5 + 32;
    resultDiv.textContent = `${temperature}°C is ${fahrenheit.toFixed(1)}°F`;
  }
}
