export const donationsReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_DONATIONS':
      return action.donations
    case 'ADD_NEW_DONATION':
      return [...state, action.newDonation]
    default:
      return state
  }
}