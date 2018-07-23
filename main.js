//////The Main Object

const financialAdvisor = Object.create({}, {
    company: {
        value: "Raymond James",
        writable: true,
        enumerable: true
    },
    specialty: {
        value: "Trade Stocks",
        writable: true,
        enumerable: true
    },
    name: {
        value: "John Doe",
        enumerable: true
    },
    portfolio: {
        value: []
    },
    worth: {
        value: function () {
            return this.portfolio.price 
        }
    },
    purchase: {
        value: function (stockTicker, quantity, price) {
            let newObject = {};
            newObject.stockTicker = stockTicker;
            newObject.quantity = quantity;
            newObject.price = price;
            this.portfolio.push(newObject)

        }
    },
    sell: {
        value: function (stockTicker, quantity, price) {
            let newObject = {};
            newObject.stockTicker = stockTicker;
            newObject.quantity = quantity;
            newObject.price = price;
            this.portfolio.unshift(newObject)
        }
    }
});


financialAdvisor.purchase("API", 4, 2000);
financialAdvisor.purchase("NSS", 7, 1500);
financialAdvisor.purchase("Nashville", 2, 5000);

console.log(financialAdvisor.portfolio)

///////Challenge Part 1 

const createDiv = document.createElement("div");
const companyName = financialAdvisor.company;
const person = financialAdvisor.name;
const specialty = financialAdvisor.specialty;



createDiv.innerHTML = `<h1>${companyName}</h1><h3>${person}</h3><p>${specialty}</p>`;

document.querySelector("#main-body").appendChild(createDiv);


////Challenge Part 2

const fragment = document.createDocumentFragment();
const getBody = document.querySelector("#main-body")

for (let i = 0; i < financialAdvisor.portfolio.length; i++) {
    const createNewDiv = document.createElement("div");
    createNewDiv.textContent = financialAdvisor.portfolio[i].stockTicker;
    fragment.appendChild(createNewDiv)
}

getBody.appendChild(fragment);


////Advanced Challenge 




