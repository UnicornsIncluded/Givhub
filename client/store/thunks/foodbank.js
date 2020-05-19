import {gettingFoodBank} from '../actions/foodbank'
import axios from 'axios'
import Geocode from 'react-geocode'
const googleAPIKey = 'AIzaSyDC7k8_twTAov9zk3XoHNVM9ztBKTshVhU'
Geocode.setApiKey(googleAPIKey)
Geocode.setLanguage('en')

export const getFoodBank = donorAddress => {
  return async dispatch => {
    try {
      const res = await axios.get('/api/foodbanks')
      const closestFoodbank = await foodBankHelper(donorAddress, res.data)
      dispatch(gettingFoodBank(closestFoodbank))
    } catch (error) {
      console.error(error)
    }
  }
}

const foodBankHelper = async (donorAddress, foodBanks) => {
  let donorCoords = await Geocode.fromAddress(donorAddress)
  let donorCoordsResult = donorCoords.results[0].geometry.location

  let closetFoodBank = ''
  let shortestDistance = Infinity
  for (let i = 0; i < foodBanks.length; i++) {
    let distance = Math.sqrt(
      Math.pow(donorCoordsResult.lat - foodBanks[i].latitude, 2) +
        Math.pow(donorCoordsResult.lng - foodBanks[i].longitude, 2)
    )
    if (distance < shortestDistance) {
      closetFoodBank = foodBanks[i]
      shortestDistance = distance
    }
  }
  return closetFoodBank
}
