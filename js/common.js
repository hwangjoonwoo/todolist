const $input = document.querySelector("#main");
const $wrap = document.querySelector("#wrap");
const $all_sel =document.querySelector("#all_sel");
const $controll = document.querySelector('#controll');
const $ul = document.querySelector('#list');




$input.addEventListener('keydown' ,function(e){
  const keyCode = e.keyCode;
  const isEnter = keyCode === 13; 
  if( isEnter){
  
    
    if($input.value.trim() === ""){
      alert("다시입력해주세요.");
    }else{
      
      const $list = document.createElement('li'); 
      $list.classList.add('list');
      $list.innerHTML=`
      <div class="check"></div>
      <p class="text">${e.target.value}</p>
      <p class="close">X</p>
      
      `;
      $input.value = '';
      $ul.append($list);//appand가 어디사이에 끼워 넣어주는 역할을한다.
      $ul.append($controll)
      $controll.style.display = 'flex'

      const $check = $list.querySelector('.check');
      $check.addEventListener('click', function(){
        if($check.innerText === '✓'){
          $check.innerHTML = "";
          $list.classList.remove('li_ac');
        }else{
          $check.innerHTML='✓';
          $list.classList.add('li_ac');
        }
        
      });
      
      $all_sel.addEventListener('click', function(){
        const allcheck = [...document.querySelectorAll('.list')];
          allcheck.forEach(e =>{
            if(!e.classList.contains('li_ac')){
              $check.innerHTML='✓';
              $list.classList.add('li_ac');
            }else if(e.classList.contains('li_ac')){
              $check.innerHTML = "";
              $list.classList.remove('li_ac');
            }
            
          })

      })

    const $text = $list.querySelector('.text');
    $text.addEventListener('dblclick',function(){
      if(isEnter){
        $text.contentEditable = false;
      }
      $text.contentEditable = true;
      $list.classList.remove('hov')
      $text.focus();
      
    });

    $text.addEventListener('focusout',function(){
      $text.contentEditable = false;
    })

    $list.addEventListener('mouseover', function(){
      $list.classList.add('hov')
    })
    
    $list.addEventListener('mouseleave', function(){
      $list.classList.remove('hov')
    })

    const $close = $list.querySelector('.close');
    $close.addEventListener('click', function(){
      $list.remove()
      item();
    })

    const $all = document.querySelector('#all');
    const $act = document.querySelector('#act');
    const $com = document.querySelector('#com');
    const $cle = document.querySelector('#cle');

    $all.addEventListener('click', function(){
      $list.style.display = 'block'
      $all.classList.add('sp_ac')
      $act.classList.remove('sp_ac')
      $com.classList.remove('sp_ac')
      
    })

    $act.addEventListener('click', function(){
      if($list.classList.contains('li_ac')){
        $list.style.display='none';
      }else{
        $list.style.display = 'block'
      }
      $all.classList.remove('sp_ac')
      $act.classList.add('sp_ac')
      $com.classList.remove('sp_ac')
    })

    $com.addEventListener('click', function(){
      if($list.classList.contains('li_ac') === false){
        $list.style.display='none';
      }else{
        $list.style.display = 'block'
      }
      $all.classList.remove('sp_ac')
      $act.classList.remove('sp_ac')
      $com.classList.add('sp_ac')

    })
    $cle.addEventListener('click', function() {
      if($list.classList.contains('li_ac') === true){
        $list.remove();
        item();
      }
    })
    }
    
    function item(){
      const $item = document.querySelector('#item');
      const $items = $('.list').length;
      $item.innerHTML=$items+' items';
      if($items<1){
        $controll.style.display='none';
      }
    }
    item();

  }
  
})


