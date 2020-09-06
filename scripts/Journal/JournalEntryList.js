/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

export const entryList = () => {
    const contentElement = document.querySelector(".entryLog")

    const entries = useJournalEntries()

    contentElement.innerHTML += `
    <article>
    ${entries.map(entry => JournalEntryComponent(entry))}
    </article>`
}