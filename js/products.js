//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
    var productsArray = [];

    function showProductsList(array) {
    
        let htmlContentToAppend = "";
        
        for (let i = 0; i < array.length; i++) {
            
            let category = array[i];
    
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + category.imgSrc + `" alt="` + category.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ category.name + `</h4>
                        <p>`+ category.description + `</p>
                        </div>
                            <small class="text-muted">` + category.soldCount + ` artículos</small>
                            <small class="text-muted">` + category.cost +" " + category.currency + `</small>
                        </div>
                    </div>
                </div>
            </div>
            `
    
         document.getElementById("product_id").innerHTML = htmlContentToAppend;
        }
    }
    
    //Función que se ejecuta una vez que se haya lanzado el evento de
    //que el documento se encuentra cargado, es decir, se encuentran todos los
    //elementos HTML presentes.

    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCTS_URL).then(function (resultObj) {
            if (resultObj.status === "ok") {
                productsArray = resultObj.data;
                showProductsList(productsArray);
            }
        });
    });