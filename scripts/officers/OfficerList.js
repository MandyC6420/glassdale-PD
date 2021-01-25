import { getOfficers, useOfficers } from './OfficerDataProvider.js'
import { officer } from './Officer.js'

let officerContainer = document.querySelector(".officer-list")
export const OfficerList = () => {
    getOfficers().then(() => {
        
        let allTheOfficers = useOfficers();
        console.log(allTheOfficers)
        let officerListHTML= ""

        for(let i = 0; i < allTheOfficers.length; i++){
            officerListHTML += officer(allTheOfficers[i]);
        }

        officerContainer.innerHTML = officerListHTML

        console.log(officerListHTML);

        // Now that you have the data, what component should be rendered?
    })


}