const journal = []

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(entries => {
            Entries = entries
            // What should happen when we finally have the array?
        })
    }

    export const saveEntry = (entryObj) => {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObj)
        })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
    }