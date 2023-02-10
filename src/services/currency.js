export default class CurrencyApiCall {
  static async getExchangeRate(userCurrency) {
    try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${userCurrency}`);
      const jsonResponse = await response.json();
      if (!response.ok) {
        const errorMEssage = `${response.status} ${response.statusText} ${jsonResponse.message}`;
        throw new Error(errorMEssage);
      }
      return jsonResponse
    } catch(error) {
      return error;
    }
  }
}