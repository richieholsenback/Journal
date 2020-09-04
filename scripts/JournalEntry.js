/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

const entryLog = document.querySelector(".entryLog")

export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            ${entry.entry}
        </section>
    `
}