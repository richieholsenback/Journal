const contentTarget = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        Put some input fields and prompts here

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}