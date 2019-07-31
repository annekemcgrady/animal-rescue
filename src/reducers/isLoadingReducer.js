export const isLoadingReducer = (state=true, action) => {
  switch(action.type) {
      case 'UPDATE_ISLOADING':
    return !state
      default:
    return state
  }
}