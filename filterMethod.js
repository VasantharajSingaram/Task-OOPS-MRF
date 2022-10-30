var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v2/all', true);
request.send();
request.onload = function(){
    // Get all the countries from the Asia continent /region using the Filter function

    var res = JSON.parse(request.response);
    var region = res.filter((element)=>{
        if(element.region=="Asia"){
            return element.name
        }
   
    })

   // Get all the countries with a population of less than 2 lakhs using Filter function

    var population = res.filter((element)=>{
        return element.population<200000;
        
    });

    // Print the following details name, capital, flag using forEach function

    res.forEach(element => {
        console.log( "Name: "+ element.name, "Capital: " + element.capital, "Flag: "+element.flag)
    });

    // Print the total population of countries using reduce function
    var FullPopulation=res.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    
    console.log(region);
    console.log(population);
    console.log("World Population: "+FullPopulation);
    
    
}

request.open('GET', 'https://restcountries.com/v2/all', true);
request.send();
request.onload = function(){
    

    var res = JSON.parse(request.response);
    var cur=[];
        for(i=0;i<res.length;i++){
            if(res[i].currencies[0].symbol=="$"){
                cur.push(res[i]);
                console.log("name:",res[i].name+" Currency: "+res[i].currencies[0].code)
                
            }                    
        }   
    }





    
