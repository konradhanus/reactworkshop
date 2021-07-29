const callRandAPI = async () => {
    const response = await fetch("http://www.randomnumberapi.com/api/v1.0/random",);
    return await response.json();
}

export default callRandAPI;
