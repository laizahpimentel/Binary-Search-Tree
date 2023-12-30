class Node {
        constructor(value){
            if (!value) {
                throw "Valor nao pode ser nulo!"
            } else {
                this.value = value 
            }
            }
}

const MyNode = new Node()
// const MyNode = new Node("Durand Neto")
console.log(MyNode)