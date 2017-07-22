import CT from '@src/constants'
export default  apiPostCall = function sendRequest(url, data, done) {
    return fetch(CT.SERVER_URL + url,{
                method: 'POST', 
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                } }).then(function(resp){
                    return resp.json();
                });
};
