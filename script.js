
document.querySelector('.btn').addEventListener('click',function(){
       fetch('https://apis.scrimba.com/bored/api/activity')
       .then(response => response.json())
       .then(data => {
              console.log(data)
              document.querySelector('.botTxt').classList.add('funText');
              document.querySelector('h1').textContent = '🦾FunnyBot🦿';
              document.querySelector('.botCntnr').classList.add('funBack');
              document.querySelector('.btn').classList.remove('btn-danger')
              document.querySelector('.btn').classList.add('funBtn')
              document.querySelector('.botTxt').textContent = data.activity;
       })
})