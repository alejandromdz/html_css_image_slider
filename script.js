var lis = document.querySelectorAll('#carousel ul li');
    lis[0].setAttribute('data-index','1');
    lis[1].setAttribute('data-index','2');
    lis[2].setAttribute('data-index','3');


setInterval( function() {
    
            var ul=document.querySelector('#carousel ul');
            ul.animate([{ left: '0px' }, { left: '-500px' }],
                {duration: 1000,easing: 'ease',fill: 'forwards'})
            var lis = document.querySelectorAll('#carousel ul li')
            lis[0].parentElement.appendChild(lis[0]);
        },5000);