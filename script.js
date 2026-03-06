const btnsearch = document.getElementById("search-btn");

const Country = async () => {
    try{
        const input = document.getElementById("country-input").value.toLowerCase();
        const url = `https://restcountries.com/v3.1/name/${input}`;
        const response = await fetch(url);

        if (!response.ok){
            throw new Error("Country not found.")
        }

        const search = await response.json();

        console.log(search);

        document.getElementById('country-info').innerHTML = 
        `<section>
        <h2>${search[0].name.common}</h2> 
        <p><strong>Capital:</strong> ${search[0].capital[0]}</p>
        <p><strong>Population:</strong> ${search[0].population.toLocaleString()}</p>
        <p><strong>Region:</strong> ${search[0].region}</p>
        <img src="${search[0].flags.svg}" alt="${search[0].name.common} flag" width="150">
        </section>`;

        const borders = search[0].borders;

        for (let code of borders){
            const bordresp = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);

            if (!bordresp.ok){
            throw new Error("Country not found.")
            }

            const data = await bordresp.json();

            console.log(data);

            document.getElementById('bordering-countries').innerHTML += 
            `<p>${data[0].name.common}</p> 
            <img src="${data[0].flags.svg}" width = "100">`;
        }


    }
    catch{

    }
    finally{

    }
}

btnsearch.addEventListener("click",Country);