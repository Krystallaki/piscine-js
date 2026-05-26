const citiesOnly = (arr) => arr.map(({ city }) => city)

const upperCasingStates = (arr) =>
  arr.map(s => s.replace(/\b\w/g, c => c.toUpperCase()))

const fahrenheitToCelsius = (arr) =>
  arr.map(s => `${Math.floor((parseFloat(s) - 32) * 5 / 9)}°C`)

const trimTemp = (arr) =>
  arr.map(obj => ({ ...obj, temperature: obj.temperature.replace(/\s/g, '') }))

const tempForecasts = (arr) =>
  arr.map(({ city, temperature, state }) => {
    const c = Math.floor((parseFloat(temperature) - 32) * 5 / 9)
    const capitalState = upperCasingStates([state])[0]
    return `${c}°Celsius in ${city}, ${capitalState}`
  })
