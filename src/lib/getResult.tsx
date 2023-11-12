



const getResult = async (searchTerm: string) => {
    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        orgin: '*',
    })
    const reponse = await fetch('https://en.wikipedia.org/w/api.php?' +
        searchParams)
    return reponse.json()
};

export default getResult;