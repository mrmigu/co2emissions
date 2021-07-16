import constants from '../constants';
import owidCo2Data from '../data/owid-co2-data.json';

const co2DataReducer = (existingCo2Data = null, action) => {
    if (action.type === "INIT_CO2_DATA" && !existingCo2Data) {
        const co2Data = Object.keys(owidCo2Data).map(country => {
            const countryData = owidCo2Data[country];
            const transformedCountryData =  {
                name: country,
                iso_code: countryData.iso_code,
            }
            countryData.data && countryData.data.forEach(yearlyData => {
                const year = yearlyData.year
                if (year >= constants.START_YEAR && year <= constants.END_YEAR) {
                    transformedCountryData[year] = yearlyData.co2;
                }
            })
            return transformedCountryData;
        })
        return co2Data;
    } else {
        return existingCo2Data;
    }

}

export default co2DataReducer