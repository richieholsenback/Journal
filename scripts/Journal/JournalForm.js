import { getEntries, useEntries, saveEntry } from './JournalDataProvider.js'
import { getMoods, useMoods } from './MoodProvider.js'

const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitEntry") {
        const dateTarget = document.querySelector("#noteDate")
        const conceptTarget = document.querySelector("#noteConcept")
        const entryTarget = document.querySelector("#noteEntry")
        const moodTarget = document.querySelector("#noteMood")

        const newNote = {
            date: dateTarget.value,
            concept: conceptTarget.value,
            entry: entryTarget.value,
            moodId: parseInt(moodTarget.value)
        }
        
        saveEntry(newNote)
    } 
})

export const JournalForm = (allMoods) => {
    const contentTarget = document.querySelector(".journal-entry-form")
    contentTarget.innerHTML = `
    <h2>Daily Journal</h2>
    <form action="">
        <fieldset>
            <label for="journalDate" >Date of entry</label>
            <input type="date" name="journalDate" id="noteDate" class="journalEntryInput">
        </fieldset>    
        <fieldset>
            <label for="concepts" >Concepts covered</label>
            <input type="text" name="concepts" id="noteConcept" class="journalEntryInput">
        </fieldset>
        <fieldset>
            <label for="journalEntry" >Journal Entry</label>
            <textarea class="journalEntryInput" id="noteEntry"></textarea>
        </fieldset>
        <fieldset>
            <label for="mood">Mood for the day</label>
            <select class="dropdown" id="noteMood">
                ${
                    allMoods.map(mood => {
                            return `<option id="mood--${ mood.id }" value="${ mood.id }">${ mood.label }</option>`
                        }).join("")
                }
            </select>    
        </fieldset>
        <button type="button" id="submitEntry">Record Journal Entry</button> 
    </form>
`
}

export const EntryForm = () => {
    getMoods()
        .then(() =>{
        const allMoods = useMoods()
        JournalForm(allMoods)
    })
}