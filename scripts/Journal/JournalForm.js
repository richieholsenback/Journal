import { getNotes, useNotes, saveNote } from './JournalDataProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entryLog")

eventHub.addEventListener('click', clickEvent => {
    if (clickEvent.target.id === 'saveNote') {
  
        const noteConcept = document.querySelector("#noteContent--concept")
        const noteContent = document.querySelector("#noteContent--content")
        const noteMood = document.querySelector("#noteContent--mood")
        const noteDate = document.querySelector("#noteContent--date")

        const newNote = {
            entry: noteContent.value,
            mood: noteMood.value,
            date: noteDate.value,
            concept: noteConcept.value
        }

        saveNote(newNote)
    } else {
        window.alert("Fill out all of the info you silly bitch!")
    }
})

const render = (entryArray) => {
    contentTarget.innerHTML = `
        <h3 class="entryHeadline" id="noteContent--date">Entry for ${entryArray.date}</h3>
            <p id="noteContent--concept">Concept covered: ${entryArray.concept}</p>
            <p id="noteContent--content">Entry: ${entryArray.entry}</p>
            <p id="noteContent--mood">How we're feeling: ${entryArray.mood}</p>
        <button id="saveNote">Save Note</button>
    `
}

export const JournalForm = () => {
    getNotes()
        .then(() => {
            render(useNotes())
        })
}