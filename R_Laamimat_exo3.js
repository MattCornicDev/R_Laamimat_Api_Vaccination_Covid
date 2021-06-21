//Récupérer le noeud correspondant à l'id result
var affichage = document .querySelector('#result');


//envoyer.addEventListener('click', getTemp);


//Déclaration et initialisation des variables utiles 
var covid; // données au format jason
var host = "";//hospitalisé
var admise ="";//admise
var gueri ="";//guéri
var date="";//date
var dep="";//departement
var sexe="";
var age="";


//function getTemp(){
  

    

    let url="https://public.opendatasoft.com/api/records/1.0/search/?dataset=covid-19-france-vaccinations-age-sexe-dep&q=Nord&lang=FR&rows=1&sort=date&facet=couv_dose1&facet=couv_complet&refine.dep_name=Nord";

    var req = fetch (url);
    
    req.then (function(response){response.text() .then(function (covid){
    
           
            var objCovid = JSON.parse(covid);

            date = objCovid.parameters.facet[0].date;
            admise = objCovid.parameters.facet[0].dep_name;
            host = objCovid.parameters.facet[0].variable;
            dep = objCovid.parameters.facet[0].dep_area_code;
            console.log(date);
            
           
            affichage.innerHTML = "Résultat : " + date + " dans le " + dep + ", il y a " + host + " personnes hospitalisées, il y a eu " + admise + " nouvelles personnes admises en réanimation et " + gueri + " personnes ont guéri du COVID";
                
                 
        });
    
    }).catch(error => alert("Erreur : " + error ));

//}

