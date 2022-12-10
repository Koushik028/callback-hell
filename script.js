msgBox = document.getElementById("display-box");
setTimeout(()=>{
    msgBox.innerText = '10';
       setTimeout(()=>{
        msgBox.innerText = '9';
        setTimeout(()=>{
            msgBox.innerText = '8';
            setTimeout(()=>{
                msgBox.innerText = '7';
                setTimeout(()=>{
                    msgBox.innerText = '6';
                    setTimeout(()=>{
                        msgBox.innerText = '5';
                        setTimeout(()=>{
                            msgBox.innerText = '4';
                            setTimeout(()=>{
                                msgBox.innerText = '3';
                                setTimeout(()=>{
                                    msgBox.innerText = '2';
                                    setTimeout(()=>{
                                        msgBox.innerText = '1';
                                        setTimeout(()=>{
                                            msgBox.innerText = 'Happy Independence Day';
                                          },1000)
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);