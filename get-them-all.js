export const getArchitects = () => [
  [...document.querySelectorAll('a')],
  [...document.querySelectorAll('span')],
]

export const getClassical = () => [
  [...document.querySelectorAll('a.classical')],
  [...document.querySelectorAll('a:not(.classical)')],
]

export const getActive = () => [
  [...document.querySelectorAll('a.classical.active')],
  [...document.querySelectorAll('a.classical:not(.active)')],
]

export const getBonannoPisano = () => [
  document.getElementById('BonannoPisano'),
  [...document.querySelectorAll('a.classical.active')].filter(el => el.id !== 'BonannoPisano'),
]
