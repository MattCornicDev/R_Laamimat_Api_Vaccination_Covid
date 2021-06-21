//Récupérer le noeud correspondant à l'id result
var affichage = document .querySelector('#result');


//envoyer.addEventListener('click', getTemp);


//Déclaration et initialisation des variables utiles 
var covid; // données au format jason
var dose1 = "";//injection premiere dose 
var admise ="";//admise
var couv_comp ="";//guéri
var date="";//date
var dep="";//departement
var sexe="";
var age="";


//function getTemp(){
  

    

     url="https://public.opendatasoft.com/api/records/1.0/search/?dataset=covid-19-france-vaccinations-age-sexe-dep&q=Nord&lang=FR&rows=1&sort=date&facet=couv_dose1&facet=couv_complet&refine.dep_name=Nord";
    var req = fetch (url);
    
    req.then (function(response){response.text() .then(function (covid){
    
           
            var objCovid = JSON.parse(covid);

            date = objCovid.records[0].fields.date;
            dep = objCovid.records[0].fields.dep_name;
            pop = objCovid.records[0].fields.couv_dose1;
          //  dose1 = objCovid.records[2].couv_dose1;
            couv_comp = objCovid.records[0].fields.couv_complet;

            console.log(date);
                    
            affichage.innerHTML = date + "dans le " + dep + " , " + pop + "% de la poplulation a reçu une première dose de vaccin et " + couv_comp + "% à une couverture complémentaire" ;     
        });
    
    }).catch(error => alert("Erreur : " + error ));

//}

