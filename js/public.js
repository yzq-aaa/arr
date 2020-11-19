(function(){
  $('.hr li').hover(function(){
        var index=$(this).index()
        $('.hr li' ).removeClass('cc')
        $(this).addClass('cc')
        $(this).on('click',function(){
         if(index==0){
             window.location.href='../首页/leader.html';
         }else if(index==1){
            window.location.href='../酷玩/kuwan-xin.html';
         }else if(index==2){
              window.location.href='../导购/zuixin.html';
         }else if(index==3){
              window.location.href='../免费试用/zhuangxiang.html';
         }else{
              window.location.href='../报告/report .html';
         }
        })
     },function(){
         $('.hr li' ).removeClass('cc')
     });
      $('.lc').on('click',function(){
           window.open('../免费试用/mfxq.html');
      })
     $('.my').on('click',function(){
          window.open('../报告/cooperation-free.html');
     })
     $('.sw').on('click',function(){
         window.open('../报告/cooperation.html');
    })   
     $('.h-btn').on('click',function(){
          window.open('../登录注册/regist.html');
     })
}())
    