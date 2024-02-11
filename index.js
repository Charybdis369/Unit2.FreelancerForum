const freelancersNotDisplayedYet = [
    {name: "Alice", price: "25", occupation: "Teacher"},
    {name: "Bob", price: "30", occupation: "Engineer"},
    {name: "Billy", price: "15", occupation: "Mechanic"},
    {name: "Teresa", price: "25", occupation: "Stewardess"},
    {name: "Rick", price: "99", occupation: "Scientist"},
]
    
const freelancersToDisplay = []

const addFreelancerInterval = setInterval(addFreeLancer, 2000)

function render() {
    const freelancerContainer = document.querySelector('#freelancers')

    const freelancerElements = freelancersToDisplay.map(freelancer => {
        const rowElement = document.createElement('tr')

        const nameTd = document.createElement('td')
        nameTd.innerText = freelancer.name
        const occupationTd = document.createElement('td')
        occupationTd.innerText = freelancer.occupation
        const priceTd = document.createElement('td')
        priceTd.innerText = freelancer.price
        rowElement.append(nameTd, occupationTd, priceTd)

        return rowElement
    })
    freelancerContainer.replaceChildren(...freelancerElements)
    
}

function addFreeLancer() {
const nextFreelancer = freelancersNotDisplayedYet.shift()
freelancersToDisplay.push(nextFreelancer)

render()
}