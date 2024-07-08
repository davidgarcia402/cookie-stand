'use strict';

const hours = [' ', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Location(locationName, minClientPerHour, maxClientPerHour, agvCookiePerSale, cookieEachHour, contactInfo, address) {
    this.locationName = locationName;
    this.minClientPerHour = minClientPerHour;
    this.maxClientPerHour = maxClientPerHour;
    this.agvCookiePerSale = agvCookiePerSale;    
    this.cookieEachHour = cookieEachHour;
    this.contactInfo = contactInfo;
    this.address = address;
}

const seattle = new Location('Seattle', 23, 65, 6.3, [], "123-456-7890", "2901 3rd Ave #300, Seattle, WA 98121",0,0);
const tokyo = new Location('Tokyo', 3, 24, 1.2, [], "222-222-2222", "1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634",0,0);
const dubai = new Location('Dubai', 11, 38, 3.7, [], "333-333-3333", "1 Sheik Mohammed bin Rashid Blvd - Dubai",0,0);
const paris = new Location('Paris', 20, 38, 2.3, [], "4444-444-4444", "Champ de Mars, 5 Avenue Anatole France, 75007 Paris",0,0);
const lima = new Location('Lima', 2, 16, 4.6, [], "555-555-5555", "Ca. Gral. Borgoña cuadra 8, Miraflores 15074",0,0);

//array de obejetos
const stores = [seattle, tokyo, dubai, paris, lima];
//  const stores = [seattle, tokyo];

//Manera de declarar una función de un objeto
Location.prototype.estimate = function () {
    this.cookieEachHour = estimateSale(this);
    return this.cookieEachHour;
};

Location.prototype.earningsPerDay = function () {
    console.log(this.avgCookiePerSale);
};

//Genera numero aleatorio
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function estimateSale(store) {
    const sale = [];//declaro array
    for (let i = 0; i < hours.length; i++) {//recorro array
        const numCustomers = random(store.minClientPerHour, store.maxClientPerHour);//genero cantidad aleatoria de clientes
        const hoursSale = Math.ceil(numCustomers * store.agvCookiePerSale);//La función Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
        hoursSale
        sale.push(hoursSale);
    }
    return sale;
}


function renderTr(){
    const tr = document.createElement("tr");
    return tr;
}

function renderTh(text){
    const th = document.createElement("th");
    th.textContent = text;
    return th;
}

function runAplication() {  
    
    //totaliza ventas por sucursal -> tfooter       
    const sectionGrid = document.getElementById("grid-stores-sales");
    
    //array que contiene matriz de ventas por sucursal
    let gridSalesStore = [];

    const table = document.createElement("table");    
    sectionGrid.appendChild(table);

    const thead = document.createElement("thead");
    table.appendChild(thead);
    let tr = renderTr(); 
    thead.appendChild(tr);    

    for(let i = 0; i < hours.length; i++){
        let th = renderTh(hours[i]);
        tr.appendChild(th);
    }

    let th1
    th1 = renderTh("Locations Total");
    tr.appendChild(th1);

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    //recorro las tiendas
    for(let j = 0; j < stores.length; j++){                

        let totalSaleHour = 0;
        let totalSaleStore = 0;

        let tr = renderTr();
        let th = renderTh(stores[j].locationName);
        tbody.appendChild(tr);
        tr.appendChild(th);        

        //grid
        gridSalesStore[j] = [];        
        

        //recorro los calculos x hora        
        for(let k = 0; k < hours.length - 1; k++){            
            const sales = stores[j].estimate();            
            th = renderTh(sales[k]);
            tr.appendChild(th);                                                
            gridSalesStore[j][k] = sales[k];
            totalSaleStore = totalSaleStore + sales[k];            
        }        
        th = renderTh(totalSaleStore);
        tr.appendChild(th);
        gridSalesStore[j].push(totalSaleStore);       

    }        

    const tfoot = document.createElement("tfoot");
    table.appendChild(tfoot);
    tr = renderTr();
    tfoot.appendChild(tr)    
    let th = document.createElement("th");
    th = renderTh("Hourly Totals for All Locations");
    tr.appendChild(th);
    
    for(let m = 0; m < hours.length; m++){
        let Sum = 0;        
        for(let n = 0; n < stores.length; n++){                                
            Sum = gridSalesStore[n][m] + Sum;                                    
        }            
        th = renderTh(Sum);
        tr.appendChild(th);                                 
    }    
}

runAplication();


/*
handleForm <- No KeyWord
e <- KeyWord
*/
function handleForm(e){

    e.preventDefault();

    const newLoca = e.target.location_name.value;
    console.log(newLoca);
    const minHour = e.target.min_hour.value;
    const maxHour = e.target.max_hour.value;
    const avgHour = e.target.avg_hour.value;    

    const newLocation = new Location(newLoca, minHour, maxHour, avgHour, [], "", "", "");
    stores.push(newLocation);
    console.log(newLocation);
}

const newstore = document.getElementById("new-store-form");
newstore.addEventListener("submit", handleForm);

const btnSend = document.getElementById("btn-sender");
btnSend.addEventListener("click", function () {
    
    //e.preventDefault();
    //handleForm(e);
});



