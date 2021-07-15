import constants from '../constants';
import owidCo2Data from '../data/owid-co2-data.json';

const co2DataReducer = () => {




    TODO: Move this to a memoized function in worldmap.js
     and just return the raw data here






    return Object.keys(owidCo2Data).map(country => {
        const countryData = owidCo2Data[country];
        const transformedCountryData =  {
            name: country,
            iso_code: countryData.iso_code,
        }
        countryData.data && countryData.data.forEach(yearlyData => {
            const year = yearlyData.year
            if (year >= constants.startYear && year <= constants.endYear) {
                transformedCountryData[year] = yearlyData.co2;
            }
        })
        return transformedCountryData;
    })
}

export default co2DataReducer