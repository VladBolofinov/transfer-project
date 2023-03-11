class CinemaService {
    _apiKey = 'fcac0b75-f997-41ac-9108-a4f5dd76c462';
    _apiBase = 'https://kinopoiskapiunofficial.tech/api/';
    getResource = async (url) => {
        let result = fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': this._apiKey,
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            //.then(json => console.log(json))  так и не понял для чего это (с этой строкой не работает)
            .catch(err => console.log(err));

        return result;
    }

    getAllPremiers = async () => {
            const res = await this.getResource(`${this._apiBase}v2.2/films/premieres?year=2023&month=FEBRUARY`);
            return res.items.map(this._transformItem);
        }

    getAllPremiers2023 = async () =>{
        const res = await this.getResource(`${this._apiBase}v2.2/films/premieres?year=2023&month=FEBRUARY`);
        return res.items.filter(item => item.year === 2023).map(this._transformItem);
    }

    _transformItem = (item) => {
        return {
            id: item.kinopoiskId,
            name: item.nameRu.length >= 15 ? `${item.nameRu.slice(0, 18)}...` : item.nameRu,
            img: item.posterUrl,
            year: item.year,
            poster: item.posterUrl,
            duration: item.duration
        }
    }
}

export default CinemaService;