const btnsearch = document.getElementById("search-btn");

const Country = async () => {
    try{
        const input = document.getElementById("country-input").value.toLowerCase();
        const url = `https://restcountries.com/v3.1/name/${input}`;
        const response = await fetch(url);
    }
    catch{

    }
    finally{

    }
}