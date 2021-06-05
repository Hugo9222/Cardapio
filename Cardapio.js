let area = document.getElementById('res')  
let valores = [] 
function Pedir(){
     
    let escolha = document.getElementsByName('escolha')
    let selecionado = document.getElementById('Sle')
    

   if(escolha[0].checked){

         valores.push(Number(18.99))
         let item = document.createElement('option')
         item.text = `Bife a cavalo`
         selecionado.appendChild(item)
      }

   if(escolha[1].checked){
         valores.push(Number(18.99))
         let item = document.createElement('option')
         item.text = `Filé de frango a parmegiana`
         selecionado.appendChild(item)
      }
      
   if(escolha[2].checked){
         valores.push(Number(16.99))
         let item = document.createElement('option')
         item.text = `Calabresa acebolada`
         selecionado.appendChild(item)
     } 

   if(escolha[3].checked){
         valores.push(Number(18.99))
         let item = document.createElement('option')
         item.text = `Strogonoff `
         selecionado.appendChild(item)
      }

   if(escolha[4].checked){
         valores.push(Number(22.99))
         let item = document.createElement('option')
         item.text = `Feijoada`
         selecionado.appendChild(item)
      }

   if(escolha[5].checked){
         valores.push(Number(5))
         let item = document.createElement('option')
         item.text = `Refrigerante `
         selecionado.appendChild(item)
      } 

   if(escolha[6].checked){
         valores.push(Number(5))
         let item = document.createElement('option')
         item.text = `Suco `
         selecionado.appendChild(item)
     }

   if(escolha[7].checked){
         valores.push(Number(3.50))
         let item = document.createElement('option')
         item.text = `Água `
         selecionado.appendChild(item)
    }

   if(escolha[8].checked){
         valores.push(Number(5))
         let item = document.createElement('option')
         item.text = `Cerveja`
         selecionado.appendChild(item)
    } 

   if(escolha[9].checked){
         valores.push(Number(6))
         let item = document.createElement('option')
         item.text = `Pudim `
         selecionado.appendChild(item)
    }

   if(escolha[10].checked){
         valores.push(Number(6))
         let item = document.createElement('option')
         item.text = `Bolo `
         selecionado.appendChild(item)
    }

   if(escolha[11].checked){
         valores.push(Number(4.50))
         let item = document.createElement('option')
         item.text = `Gelatina `
         selecionado.appendChild(item)
    } 
    

}

function total(){
  let total = 0
  for(let va in valores){
    total += valores[va]
  }

  area.innerHTML += `Total a pagar: ${total.toFixed(2)} R$` // toFixed para formatar a quantidade de casas
}