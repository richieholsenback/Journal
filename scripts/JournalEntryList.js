import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

export const EntryListComponent = () => {
    const entryLog = document.querySelector(".entryLog")
    const entries = useJournalEntries()
    
    let entryHTMLRepresentation = ""
    for (const entry of entries) {
        entryHTMLRepresentation += JournalEntryComponent(entry)
        
        entryLog.innerHTML += `
        ${entryHTMLRepresentation}
        `
    }
}