const $input = document.getElementById('input');
const $list = document.getElementById('list');
const $allClick = document.getElementById('allClick');



$input.addEventListener('keydown',function(e){
  const keyCode = e.keyCode;
  const isEnter = keyCode === 13; 
  if( isEnter ){
    
    
    const $div = document.createElement('div'); 
    $div.className = 'list';
    if($input.value === ""){
      alert("다시입력해주세요.");
      return;
    }
    
    
    const $span = document.createElement('span'); 
    $span.textContent = $input.value;
    
    $input.value = '';
    
    $span.addEventListener('dblclick',function(){
      $span.contentEditable = 'true';
      $span.focus();
    });
    $span.addEventListener('focusout',function(){
      $span.contentEditable = 'false';
    })

    const $button = document.createElement('button');
    $button.className = 'none';
    $button.textContent = 'X';
    $button.addEventListener('click',function(){ 
      $div.remove();
    });

    const $checkboxButton = document.createElement('div');
    $checkboxButton.className = 'checkbox'; 
    $checkboxButton.addEventListener('click',function(){//
      $div.classList.toggle('complete');
    });

    $div.addEventListener('mouseover', function() {
      $button.classList.remove('none'); 
    })

    $div.addEventListener('mouseleave', function() {
      $button.classList.add('none'); 
    })

    $div.append($checkboxButton);
    $div.append($span);
    $div.append($button);

    $list.append($div);
  }
});


$allClick.addEventListener('click',function(){//addEventListener는 이벤트를 달때 사용되는것이고 $allclik에 이벤트를 걸어준것이다 클릭을하면 이벤트가실행된다.
  const $lis = document.querySelectorAll('.list');//변수를 생성해주었다 클래스list를 생성해준다.
  let allChecked = true; //변수를 생성해주었다 allchecked가 ture이다.
  for(let $li of $lis){// /*for of는 반복할수있는 객체를 순회할수 있도록 반복해준다.(정확히 잘 모르겠다.)*\
    if( !$li.classList.contains('complete') ){//copmplete라는 class가 있는것을 골라낸다.
      allChecked = false;//allchecked가 false가되어 ???모르겠다.
      break;//멈추게한다.
    }
  }

  for(let $li of $lis){
    if( allChecked ){
      $li.classList.remove('complete');
    }else{
      $li.classList.add('complete');
    }
  }

})

const $check = document.querySelector('#check'); 
const $notCheck = document.querySelector('#notCheck');
const $removeCheck = document.querySelector('#removeCheck');

$check.addEventListener('click', function() {
  const allList = [...document.querySelectorAll('.list')];
  allList.forEach(e =>{ 
    if(e.classList.contains('none')) {
      e.classList.remove('none');
    }else if(e.classList.contains('complete')) {
      e.classList.add('none'); 
    }
  })
})
$notCheck.addEventListener('click', function(){
  const allList = [...document.querySelectorAll('.list')];
  allList.forEach(e => { 
    if(e.classList.contains('none1')){
      e.classList.remove('none1');
    }
    else if(!e.classList.contains('complete')) {
      e.classList.add('none1');
      
    }
    

  })
})
$removeCheck.addEventListener('click', function(){
  const allList = [...document.querySelectorAll('.list')];
  allList.forEach(e => { 
    if(e.classList.contains('complete')) { 
      e.remove();
    }
  })
})


