export const GET_FOODBANK = 'GET_FOODBANK'

export function gettingFoodBank(foodbank) {
  return {
    type: GET_FOODBANK,
    foodbank
  }
}
