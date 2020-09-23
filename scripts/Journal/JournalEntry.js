/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <h3>Entry for ${entry.date}</h3>
                <div class="entryContent">Concept: ${entry.concept}</div>
                <div class="entryContent">Entry: ${entry.entry}</div>
                <div class="entryContent">Mood: ${entry.mood.label}</div>
                <button id="deleteNote--${entry.id}">Delete</button>
        </section>
    `
}

