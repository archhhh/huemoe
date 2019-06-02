import React from "react";


const AboutUsLanding = () => {
    return (
        <div className="about-us-landing">
            <h1>About Us</h1>
            <div className="about-us-main">
                <div className="about-us-sidetext">
                    <h3>Хуяк хуяк</h3>
                    <p>И в продакшен. Начальный гайд. Как поднять свою жопу с нуля без регистрации и смс. Архитектура какая еще архитектура,
                        я сосал меня ебали
                    </p>
                    <button>ИДЕМ ВЫСТУПАТЬ</button>
                </div>
                <ul className="about-us-list">
                    <li>
                        <i class="fab fa-css3-alt"></i>
                        <h2>Web десигн</h2>
                        <p>Да ебись оно все в жопу</p>
                    </li>
                    <li>
                        <i class="fas fa-hand-holding-usd"></i>
                        <h2>Finance</h2>
                        <p>Закупаем, продаем, фиксируем прибыль</p>
                    </li>
                    <li>
                        <i class="fas fa-atom"></i>
                        <h2>Chemistry</h2>
                        <p>wanna cook?</p>
                    </li>
                    <li>
                        <i class="fas fa-headphones-alt"></i>
                        <h2>Audio Engineering</h2>
                        <p>Как стать рэппером на soundcloud с нуля</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};      

export default AboutUsLanding;