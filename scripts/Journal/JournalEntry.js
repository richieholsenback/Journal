/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <h3>Journal Entries</h3>
                <div>Entry Date: ${entry.date}</div>
                <div>Concept: ${entry.concept}</div>
                <div>Entry: ${entry.entry}</div>
                <div>Mood: ${entry.mood}</div>
        </section>
    `
}