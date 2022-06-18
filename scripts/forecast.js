const key = 'IUFxDdtQExiICkEc5orPpZrqRBBgRVDd';

/**
 * Get weather information
 * @param locationKey the unique id of city
 * @returns {Promise<*>}
 */
const getWeather = async locationKey => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${locationKey}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

/**
 * Get city information
 * @param city name of the city
 * @returns {Promise<*>}
 */
const getCity = async city => {

    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseUrl + query);
    const data = await response.json();

    return data[0];

};
