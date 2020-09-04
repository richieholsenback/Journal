/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entryLog")

const render = (entryObj) => {
    const entry = useJournalEntries()
    contentTarget.innerHTML = entry.map((entryObj) => {
        return JournalEntryComponent(entryObj)
    }).join("")
}

export const entryList = () => {
    getEntries()
    .then(useJournalEntries)
    .then(render)
}

eventHub.addEventListener("journalStateChanged", (() => {
    const newEntry = useJournalEntries()
    render(newEntry)
}))