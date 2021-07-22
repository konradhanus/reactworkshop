const fetchNumber = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character",);
    const [number] = await response.json();
    return number;
}

export default fetchNumber;
