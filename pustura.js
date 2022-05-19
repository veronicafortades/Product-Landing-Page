const burger = document.getElementById('burger');
const nav = document.getElementById('nav-bar');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.add('active');
    }) 
}


;(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const email = searchParams.get('email') //name parameter from index
    console.log(email)
    const domName = document.querySelector('[data-name]')
    console.log(domName)
  
    if(domName) {
      domName.textContent = 'Thank you for subscribing to our Newsletter ' + '' + email + '!'
    }
  
  })()



