//arrays, objetos

let meta = {
  value: "ler um livro por mes",
  address: 2,
  checked: false,
  log: (info) => {
    console.log(info)
  }
}

//manipulando
meta.value = "nao é mais para ler um livro"
meta.log(meta.value)

//como criar function/metodo //arrow function
//const criarMeta = () => {}

 // function criarMeta() {}