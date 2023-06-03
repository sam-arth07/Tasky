const taskContainer = document.querySelector(".task__container")
const globalStorage = []

const generateNewCard = (cardObj) =>{
    const newCard = `<div class="col-sm-12 col-md-6 col-lg-4" id ="${cardObj.id}">
        <div class="card">
            <div class="card-header d-flex justify-content-end gap-2">
                <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
                <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="card-body">
                <img src=${cardObj.img} class="card-img-top" alt="image">
                <h5 class="card-title mt-3 fw-bold text-danger">${cardObj.title}</h5>
                <p class="card-text">${cardObj.description}</p>
                <a href="#" class="btn btn-danger text-warning">${cardObj.type}</a>
            </div>
        </div>
    </div>`
    return newCard
}

const loadIntialCardData = () => {
    //get localstorage to access task card data
    const getData = localStorage.getItem("tasky") //getData is array of Objects
    
    //convert it to normal object
    const {cards} = JSON.parse(getData) //cards is object of Objects
    
    //loop over the accessed data to create a HTML card, then inject it to DOM
    cards.map((cardObj)=>{
        taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObj))
        //update globalStorage
        globalStorage.push(cardObj)
    })    
}

const savechanges = () => {
    const task = {
        id: `${Date.now()}`,
        img : document.getElementById("imageUrl").value,
        title : document.getElementById("taskTitle").value,
        type : document.getElementById("taskType").value,
        description : document.getElementById("taskDescription").value
    }
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(task))
    generateNewCard(task)
    globalStorage.push(task)
    localStorage.setItem("tasky",JSON.stringify({cards:globalStorage}))

}

