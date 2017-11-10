export function decksToArray(data) {
    let parsedData = JSON.parse(data);
    
    let decks = Object.keys(parsedData).map((item)=> {
      return { ...parsedData[item], key:item}
    })
    return decks
}