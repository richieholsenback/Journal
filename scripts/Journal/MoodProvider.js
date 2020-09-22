let moodArray = []

export const getMoods = () => {
    return fetch("http://localhost:8088/moods") 
    .then(response => response.json())
    .then(
        parsedMoods => {
        moodArray = parsedMoods
        })
}

export const useMoods = () => {
    return moodArray.slice();
}