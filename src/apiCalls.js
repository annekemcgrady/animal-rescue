
export const fetchAnimals = async () => {

  try {
  const result = await fetch('http://localhost:3001/api/v1/rescue-animals')
  return result.json()

  } catch(error) {
    throw new Error('Error fetching animals')
  }

}