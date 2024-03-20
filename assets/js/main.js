



    window.addEventListener('keyup',(e)=>{
        if(e.keyCode == 13){
            let menu = document.querySelector('.terminal_promt');
            let prevele = document.getElementsByClassName('terminal_promt')
            let ele = prevele.length - 1
            prevele[ele].children[3].setAttribute('disabled','')
            let clonedMenu = menu.cloneNode(true);
            clonedMenu.children[3].removeAttribute('disabled')
            clonedMenu.children[3].value = ''
            document.getElementById('tbody').appendChild(clonedMenu);
            let input = document.getElementsByClassName('terminal_input')
            let lastIndex = input.length - 1
            input[lastIndex].focus()
        }
    })

    window.addEventListener('click',()=>{
        let ele = document.getElementsByClassName('terminal_input')
        let lastIndex = ele.length - 1
        ele[lastIndex].focus()
    })