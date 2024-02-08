const freeLancers = {
    name: 'Alice',
    occupation: 'Writer',
    startingPrice: 30,

    name: 'Bob',
    occupation: 'Teacher',
    startingPrice: 50,

    name: 'Carol',
    occupation: 'Programmer',
    startingPrice: 70

}

const addFreeLancerInterval = setInterval(addFreeLancer, 2000)

function render() {
const freelancer = document.querySelector("#freelancer");

}

function addFreeLancer() {
    const freeLance = freeLancers[Math.floor(Math.random() * freeLancers.length)];
    freeLance.push({name: 'Alice', occupation: 'Writer', startingPrice: "$30"})
    
}

render();