export const donationsReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_DONATIONS':
      return action.donations
    default:
      return state
  }
}