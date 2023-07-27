window.onload = function () {
    const wrapper = document.getElementById("index-wrapper");
    const KeyBtn = wrapper.querySelectorAll('[class*=key-]'); //抓取className包含"key-"的元素

    wrapper.addEventListener('click', (event) => { 
        const isButton = event.target.nodeName === 'KEYBTN'; //添加事件監聽器
        if (!isButton) {
            return;
        }else{
            if(event.target.classList.contains("m3-icon")){
                event.target.parentElement.classList.add("active");
                document.getElementById("mainFrame").src = `./page/${event.target.parentElement.id}.html`;
            }else{
                event.target.classList.add("active");
                document.getElementById("mainFrame").src = `./page/${event.target.id}.html`;
            }
            for(i=0;i<KeyBtn.length;i++){
                if(event.target.classList.contains("m3-icon")){ //檢查元素是否屬於父元素(否)
                    if(KeyBtn[i].id != event.target.parentElement.id){
                        KeyBtn[i].classList.remove("active");  //移除除被點擊元素以外的元素的classList中"active"的className
                    }
                }else{ //檢查元素是否屬於父元素(是)
                    if(KeyBtn[i].id != event.target.id){ 
                        KeyBtn[i].classList.remove("active"); //移除除被點擊元素以外的元素的classList中"active"的className
                    }
                }
            }
        }
    })
}