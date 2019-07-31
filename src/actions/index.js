export const addAnimals = (animals) => {
  return ({
    type: 'ADD_ANIMALS',
    animals
  })
}

export const addError = (errorMsg) => {
  return ({
    type: 'ADD_ERROR',
    errorMsg
  })
}