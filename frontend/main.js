window.addEventListener('DOMContentLoaded',(event) => {
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterfinal.azurewebsites.net/api/GetResumeCounter?code=Fb2DLDjIfkcclhYimcq7QaS0yJkIse7YVg4pAxgzqK4KAzFuXCGQuw==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Wensite called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;

    }).catch(function(error){
        console.log(error);
    })
    return count;
}


