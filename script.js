function drawChess() {
    let mainBlock = document.querySelector('.main-block');
    let block;
    let flag = true; //флаг для цвета ячейки
    
    
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j==0) flag = !flag; //сравниваем если строка новая то flag меняетцвет

            block = document.createElement('div');

            if (flag) block.className = 'block black'; // имя класса для раскраски темной клетки
            else block.className = 'block white'; // имя класса для раскраски светлой клетки
            
            

            // if (figure[i]!==undefined && figure[i][j]!==undefined){
            //    block.style.backgroundImage = 'url(сhess_symbols_set_.png)';
            //   block.style.backgroundPosition = figure[i][j];
            // }

            mainBlock.appendChild(block);
            flag = !flag;
        }
    }
}

drawChess();
