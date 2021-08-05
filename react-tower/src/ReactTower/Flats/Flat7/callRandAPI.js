const callRandAPI = async () => {
    const response = await fetch("http://localhost:8080/getCar/1");
    return await response.json();
}

export default callRandAPI;
