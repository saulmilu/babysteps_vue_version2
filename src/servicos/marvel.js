import axios from 'axios'

function getMarvel(entity){
    return axios.get(`https://gateway.marvel.com/v1/public/${entity}`,{
        params:{
            apikey:"6b7f4e37f0f614de58a2f6d367f34946"
        }
    })
}


export function getComics(){
    return getMarvel('comics')
        .then(res => {
            console.log('resposta sucesso : ');
            console.log(res.data.data);
            return res.data.data
        })
        .catch(res => console.log( res))
}


export function getCharacters(){
    return getMarvel('characters')
        .then(res => {
            console.log('resposta sucesso : ');
            console.log(res.data.data);
            return res.data.data.results
        })
        .catch(res => console.log( res))
}