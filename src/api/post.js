export default  apiPostCall = function sendRequest(url, data, done) {
    return fetch(url,{
                method: 'POST', 
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                } }).then(function(resp){
                    return resp.json();
                });
};


