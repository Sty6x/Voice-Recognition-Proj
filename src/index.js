import './style.css'


const image = document.querySelector('img')
const main = document.querySelector('main')
const btn = document.createElement('button')
const search = document.createElement('input')
search.setAttribute('type', 'text')
btn.textContent = 'Get Image'
main.append(btn, search)

function getImg() {
  return fetch(`https://api.giphy.com/v1/gifs/translate?api_key=6C6Bv7RmIvF06uPUz6RVMaQgiWxSQiKd&s=${search.value}`, { mode: 'cors' })
    .then((response) => {
      console.log(response.blob())
      return response.json();
    }).then((response) => {
      image.src = response.data.images.original.url
    }).catch(() => {
      console.log("images doesn't exist")
      return fetch(`https://api.giphy.com/v1/gifs/translate?api_key=6C6Bv7RmIvF06uPUz6RVMaQgiWxSQiKd&s=nothing`, { mode: 'cors' })
        .then(errorImg => {
          return errorImg.json();
        }).then(errorImg => {
          image.src = errorImg.data.images.original.url
        }).catch(e => {
          console.log(e)
          console.log('default image doesnt exist')
        })
    })
}
function test() {
  return fetch(`https://api.giphy.com/v1/gifs/translate?api_key=6C6Bv7RmIvF06uPUz6RVMaQgiWxSQiKd&s=${search.value}`, { mode: 'cors' })
    .then((response) => {
      console.log(response.text())
      // return response.blob()
    })
}
test()
btn.addEventListener('click', getImg)
