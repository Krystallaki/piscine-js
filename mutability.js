const clone1 = { ...person }
const clone2 = Object.assign({}, person)
const samePerson = person

person.age++
person.country = 'FR'
