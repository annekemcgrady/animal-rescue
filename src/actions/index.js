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

export const updateIsLoading = () => {
  return ({
    type: 'UPDATE_ISLOADING'
  })
}

export const addDonations = (donations) => {
  return ({
    type: 'ADD_DONATIONS',
    donations
  })
}

export const addNewDonation = (newDonation) => {
  return ({
    type: 'ADD_NEW_DONATION',
    newDonation
  })
}

