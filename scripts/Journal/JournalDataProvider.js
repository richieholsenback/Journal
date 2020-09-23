let journal = []

const eventHub = document.querySelector("#container")

const dispatchStateChangeEvent = () => {
    const journalStateChanged = (new CustomEvent("journalStateChanged"))

    eventHub.dispatchEvent(journalStateChanged)
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(entries => {
            // What should happen when we finally have the array?
            journal = entries
        })
}


export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
    
}

export const useEntries = () => journal.slice()


export const saveEntry = (newEntryObj) => {
    fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntryObj)
    })
    .then(dispatchStateChangeEvent)
}


export const deleteEntry = noteId => {
    return fetch(`http://localhost:8088/entries/${noteId}`, {
        method: "DELETE"
    })
        .then(getEntries)
}