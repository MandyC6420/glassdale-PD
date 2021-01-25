import { getCriminals, useCriminals } from './criminals/CriminalProvider.js'

export const CriminalList = () => {
    getCriminals().then(() => {
        let criminals = useCriminals();
        // Now that you have the data, what component should be rendered?
    })
}