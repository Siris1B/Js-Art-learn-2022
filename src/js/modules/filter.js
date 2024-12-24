const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          no = document.querySelector('.portfolio-no'),
          markAll = wrapper.querySelectorAll('.all');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    function eventListener(btnSelector, marker) {
        document.querySelector(btnSelector).addEventListener('click', () => {
            try  {
                typeFilter(wrapper.querySelectorAll(marker));
            } 
            catch(e) {
                typeFilter();
            }
        });
    }

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });

    eventListener('.all', '.all');
    eventListener('.lovers', '.lovers');
    eventListener('.chef', '.chef');
    eventListener('.guy', '.guy');
    eventListener('.girl', '.girl');
    eventListener('.grandmother', '');
    eventListener('.granddad', '');
};

export default filter;