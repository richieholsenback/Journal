export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            Display the entry's full text, and the date
            it was entered here.
        </section>
    `
}