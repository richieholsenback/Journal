/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useNotes } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

export const entryList = () => {
    const contentElement = document.querySelector(".entryLog")

    const entries = useNotes()

    contentElement.innerHTML += `
    <article>
    ${entries.map(entry => JournalEntryComponent(entry))}
    </article>`
}