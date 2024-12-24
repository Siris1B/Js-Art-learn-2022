import { getResource } from "../services/requests";

const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {

        updateHtml('http://localhost:3000/size', sizeBlock);
        updateHtml('http://localhost:3000/material', materialBlock);
        updateHtml('http://localhost:3000/options', optionsBlock);

        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
    
        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else {
            checkPromo(promocodeBlock.value);
            resultBlock.textContent = sum;
        }
    };

    function updateHtml(url, object) {
        getResource(url)
            .then(res => {
                JSON.parse(res).forEach((item, i) => {
                    object.options[i + 1].value = item.value;
                });
            });
    }

    function checkPromo(promo) {
        getResource('http://localhost:3000/promo').then(res => {
            JSON.parse(res).forEach(item => {
                if (item.name == promo) {
                    resultBlock.textContent = Math.round(sum * +item.value);
                } 
            });
        });
    }


    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;