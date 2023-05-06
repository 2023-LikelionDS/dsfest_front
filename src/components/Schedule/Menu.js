import '../../css/Schedule.css';
import { useEffect } from 'react';
import Take1 from './Take1';
import Take2 from './Take2';
import Take3 from './Take3';
function Menu() {
    useEffect(() => {
        const indicator = document.querySelector('.nav-indicator');
        const items = document.querySelectorAll('.nav-item');

        function handleIndicator(el) {
            items.forEach((item) => {
                item.classList.remove('is-active');
                item.removeAttribute('style');
            });

            indicator.style.width = `${el.offsetWidth}px`;
            indicator.style.left = `${el.offsetLeft}px`;
            indicator.style.backgroundColor =
                el.getAttribute('data-active-color');

            el.classList.add('is-active');
            el.style.color = el.getAttribute('data-active-color');
        }

        items.forEach((item) => {
            item.addEventListener('click', (e) => {
                handleIndicator(e.target);
            });
            item.classList.contains('is-active');
            handleIndicator(item);
        });
    }, []);
    return (
        <>
            <nav className="nav">
                <div className="nav-item" data-active-color="gold">
                    TAKE 1:
                </div>
                <div className="nav-item" data-active-color="plum">
                    TAKE 2:
                </div>
                <div className="nav-item" data-active-color="skyblue">
                    TAKE 3:
                </div>
                <span className="nav-indicator"></span>
            </nav>
            <Take1 />
            <Take3 />
        </>
    );
}

export default Menu;
