import { getConvictions, useConvictions } from './ConvictionsDataProvider.js'


export const ConvictionList = () => {
    getConvictions().then(() => {
        let convictionContainer = document.querySelector(".convictions-select-container")
        let allTheConvictions = useConvictions();
        
        let convictionListHTML= ""

        for(let i = 0; i < allTheConvictions.length; i++){
            convictionListHTML += conviction(allTheConvictions[i]);
        }

        convictionContainer.innerHTML = convictionListHTML

        console.log(convictionListHTML);

        // Now that you have the data, what component should be rendered?
    })


}