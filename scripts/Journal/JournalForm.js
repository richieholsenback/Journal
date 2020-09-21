import {getEntries, useEntries, saveEntry} from './JournalDataProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".submit")

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
                mood: moodTarget.value
            }
            saveEntry(newNote)
}
})

export const JournalForm = () => {
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
            <select id="noteMood" class="journalEntryInput">
            <option value="confident">confident</option>
            <option value="prepared">prepared</option>
            <option value="excited">excited</option>
            <option value="stuck">stuck</option>
            <option value="confused">totally confused</option>
            </select>    
        </fieldset>
        <button type="button" id="submitEntry">Record Journal Entry</button> 
    </form>
`
}

// export const EntryForm = () => {
//     getEntries().then(() => {
//         render(useEntries())
//     })
// }