'use strict';
/*
const seattle = {
    name: 'Seattle',
    address: '2901 3rd avenue #300, Seattle',
    openHour: '6am',
    closingHour: '7pm',
    cookiesPerHour: [], //empty array
    maxCustomerPerHour: 50,
    estimate: function () {
        this.cookiesPerHour.push(generateRandomNumber(1, 1000))
    }
}
function generateRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

const seattle = {
    name: 'Seattle',
    address: '2901 3rd avenue #300, Seattle',
    // journey: ['0600'],['1900'],
    startHour: '6am',
    EndHour: '7pm',
    maxClientPerHour: 65,
    avgCookiePerSale: 6.3,
    minClientPerHour: 23,
    cookiePerHour: [],
    estimar: function(){
        return this.maxClientPerHour = estimateSale(this);
    }
}

function generateRandomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
const stores = [seattle, tokyo, dubai, paris, lima]

*/

const seattle={
    locationName:'seattle',
    minClientPerHour: 23,
    maxClientPerHour: 65,
    agvCookiePerSale: 6.3,
    cookieEachHour:[],
    estimate:function(){
        this.cookieEachHour=estimateSale(this);
    }
};

const tokyo={
    locationName:'tokyo',
    minClientPerHour: 3,
    maxClientPerHour: 24,
    agvCookiePerSale: 1.2,
    cookieEachHour:[],
    estimate:function(){
        this.cookieEachHour=estimateSale(this);
    }
};

const dubai={
    locationName:'dubai',
    minClientPerHour: 11,
    maxClientPerHour: 38,
    agvCookiePerSale: 3.7,
    cookieEachHour:[],
    estimate:function(){
        this.cookieEachHour=estimateSale(this);
    }
};

const paris={
    locationName:'paris',
    minClientPerHour: 20,
    maxClientPerHour: 38,
    agvCookiePerSale: 2.3,
    cookieEachHour:[],
    estimate:function(){
        this.cookieEachHour=estimateSale(this);
    }
};

const lima={
    locationName:'lima',
    minClientPerHour: 2,
    maxClientPerHour: 16,
    agvCookiePerSale: 4.6,
    cookieEachHour:[],
    estimate:function(){
        this.cookieEachHour=estimateSale(this);
    }
};

const hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
const stores = [seattle, tokyo, dubai, paris, lima];

//Genera numero aleatorio
function random(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}


function estimateSale(store){
    const sale=[];//declaro array
    for(let i=0; i < hours.length; i++){//recorro array
        const numCustomers = random(store.minClientPerHour,store.maxClientPerHour);//genero cantidad aleatoria de clientes
        const hoursSale = Math.ceil(numCustomers*store.agvCookiePerSale);//La función Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
        sale.push(hoursSale);
    }
    return sale;
}

function runAplication(){
    for(let i=0;i < stores.length; i++){//stores es array de tiendas
        stores[i].estimate();
        render(stores[i]);
    }
}

function render(store){
    let total=0;
    
    const root=document.getElementById('root');
    const location=document.createElement('section');
    location.classList.add('location');
    root.appendChild(location);
    const tittle=document.createElement('h2');
    tittle.textContent=store.locationName;
    location.appendChild(tittle);
    const list=document.createElement('ul');
    location.appendChild(list);
    
    for(let i=0;i<hours.length;i++){
        total += store.cookieEachHour[i];
        const listItem=document.createElement('li');
        listItem.textContent=hours[i]+': '+store.cookieEachHour[i]+' cookies';
        list.appendChild(listItem);
    }
    const totaItem=document.createElement('li');
    totaItem.textContent = 'total '+total+ ' cookies';
    list.appendChild(totaItem);    
                
}

runAplication();

// function estimateSale(){
//     const sale=[];
//     for(let i=0; stores.length;)
//     return 
// }