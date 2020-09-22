import { useEntries, getEntries } from "./JournalDataProvider.js"
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