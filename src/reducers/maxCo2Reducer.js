import constants from '../constants';
import owidCo2Data from '../data/owid-co2-data.json';

const maxCo2Reducer = () => {



    TODO: Move this to a memoized function in worldmap.js




    let maxCo2 = 0;
    Object.keys(owidCo2Data).forEach(country => {
        const countryData = owidCo2Data[country];
        if (countryData.iso_code) {
            countryData.data && countryData.data.forEach(yearlyData => {
                const year = yearlyData.year
                if (year >= constants.startYear && year <= constants.endYear) {
                    maxCo2 = Math.max(maxCo2 , yearlyData.co2);
                }
            })
        }

    })
console.log("maxCo??????", maxCo2);
    return maxCo2;
}

export default maxCo2Reducer