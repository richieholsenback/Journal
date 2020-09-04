  
const journal = [
    {
        id: 1,
        date: "07/24/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "08/24/2020",
        concept: "JS",
        entry: "We began a group project to help us solidify our knowledge of automation.",
        mood: "Good"
    },
    {
        id: 3,
        date: "08/25/2020",
        concept: "JS",
        entry: "We worked on a group project and learned about array methods like .map, .join, .forEach.",
        mood: "Good, tired"
    },
]

export const useJournalEntries = () => {
    return journal.slice()
}