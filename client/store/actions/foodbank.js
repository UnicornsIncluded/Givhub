export const GET_FOODBANK = 'GET_FOODBANK'

export function getFoodBank(foodbank) {
  return {
    type: GET_FOODBANK,
    foodbank
  }
}
