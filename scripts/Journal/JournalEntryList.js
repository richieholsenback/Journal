import { useEntries, getEntries, deleteEntry } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const eventHub = document.querySelector("#container")

eventHub.addEventListener("journalStateChanged", event => {
    entryList()
})

const render = arrayOfEntries => {
    const entryLog = document.querySelector(".entryLog")
    console.log(arrayOfEntries)
    let HTMLArray = arrayOfEntries.map(entry => JournalEntryComponent(entry))
    entryLog.innerHTML = HTMLArray.join("")
}

export const entryList = () => {
    getEntries()
    .then(()=> {
    render(useEntries())
    })
}

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = event.target.id.split("--")

        deleteEntry(id)
        .then(() => {
            const updatedNotes = useEntries()
            render(updatedNotes)
        })
    }
})