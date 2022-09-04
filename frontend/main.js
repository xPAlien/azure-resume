window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})
const functionApiUrl ='https://getresumecounter9.azurewebsites.net/api/GetResumeCounter?code=E7Ed0VBDyAN8Zo3B0GF50wNylIbrANOr3vAAnrIckweLAzFuEcO5YA=='; 
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}