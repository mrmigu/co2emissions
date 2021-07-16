import constants from '../constants';
import owidCo2Data from '../data/owid-co2-data.json';

const maxCo2Reducer = (existingMaxCo2 = null) => {
    if (existingMaxCo2 !== null) {
        return existingMaxCo2;
    }
console.log("maxCo2Reducer", existingMaxCo2)    
    let maxCo2 = 0;
    Object.keys(owidCo2Data).forEach(country => {
        const countryData = owidCo2Data[country];
        if (countryData.iso_code && countryData.iso_code !== constants.WORLD_ISO) { //only use country data, exclue continent data
            countryData.data && countryData.data.forEach(yearlyData => {
                const year = yearlyData.year
                if (year >= constants.START_YEAR && year <= constants.END_YEAR) {
                    if (yearlyData.co2) {
                        maxCo2 = Math.max(maxCo2 , yearlyData.co2);
                    }
                }
            })
        }
    })
    return maxCo2;
}

export default maxCo2Reducer