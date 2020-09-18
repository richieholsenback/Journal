import {saveEntry} from './JournalDataProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".submit")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitEntry") {
        const dateTarget = document.querySelector("#noteDate")
        const conceptTarget = document.querySelector("#noteConcept")
        const entryTarget = document.querySelector("#noteEntry")
        const moodTarget = document.querySelector("#noteMood")


        if (dateTarget.value !== 0 && conceptTarget.value !== 0 && entryTarget.value !== 0 && moodTarget.value !== 0) {
            const newNote = {
                date: dateTarget.value,
                concept: conceptTarget.value,
                entry: entryTarget.value,
                mood: moodTarget.value
            }
            saveEntry(newNote)
        } else {
            window.alert("Fill out the form ya silly bitch!")
        }
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
                <option value="0">Please select a mood...</option>
                <option value="Happy">Happy</option>
                <option value="Ok">Ok</option>
                <option value="Sad">Sad</option>
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