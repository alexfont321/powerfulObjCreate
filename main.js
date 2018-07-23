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
        value: ["Apple", "NSS", "Baseball"]
    },
    worth: {
        value: function () {

        }
    },
    purchase: {
        value: function (stockTicker, quantity, price) {

        }
    },
    sell: {
        value: function (stockTicker, quantity, price) {

        }
    }
});


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
    createNewDiv.textContent = financialAdvisor.portfolio[i];
    fragment.appendChild(createNewDiv)
}

getBody.appendChild(fragment);





// for(key in financialAdvisor){
// const createDiv = document.createElement("div");
// }

