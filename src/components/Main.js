import React from 'react';
import image1 from '../images/greek salad.jpg';
import image2 from '../images/restauranfood.jpg';
import image3 from '../images/restaurant.jpg';
import image4 from '../images/restaurant chef B.jpg';
import '../styles/Main.css';



function Main() {
  return (
    <main className='main'>
      <section className='section1'>
        <div className= 'box1'></div>
        <div className='container1'>
            <div className='section1div1'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button>Reserve a Table</button>
            </div>
            <div className='section1div1'>
                <img src={image2} alt="Greeksalad" />
            </div>
        </div>
      </section>

      <section className='section2'>
      <div className='container2'>
        <div className='section2div1'>
        <h1>This week specials!</h1>
        <button>Online Menu</button>
        </div>

        <div className='section2div2'>

            <article className='article1'>
                <img src={image1} alt="Greeksalad" />
                <div>
                    <h3>Greek salad</h3>
                    <h3>$12.99</h3>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <p>Order a delivery</p>
            </article>

            <article className='article2'>
                <img src={image1} alt="Greeksalad" width={265}/>
                <div>
                    <h3>Greek salad</h3>
                    <h3>$12.99</h3>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <p>Order a delivery</p>
            </article>

            <article className='article3'>
                <img src={image1} alt="Greeksalad" width={265}/>
                <div>
                    <h3>Greek salad</h3>
                    <h3>$12.99</h3>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <p>Order a delivery</p>
            </article>
            </div>
        </div>

      </section>

      <section className='section3'>
        <div className='container3'>
        <div className='section3div1'>
        <h2>Testimonials</h2>
        </div>
        <div className='section3div2'>
        <article>
            <p>Rating</p>
            <div>
                <img src={image1} alt="Greeksalad" width={60}/>
                <p>name</p>
            </div>
            <p>review</p>
        </article>
        <article>
            <p>Rating</p>
            <div>
                <img src={image1} alt="Greeksalad" width={60}/>
                <p>name</p>
            </div>
            <p>review</p>
        </article>
        <article>
            <p>Rating</p>
            <div>
                <img src={image1} alt="Greeksalad" width={60}/>
                <p>name</p>
            </div>
            <p>review</p>
        </article>
        <article>
            <p>Rating</p>
            <div>
                <img src={image1} alt="Greeksalad" width={60}/>
                <p>name</p>
            </div>
            <p>review</p>
        </article>
        </div>
        </div>
      </section>

      <section className='section4'>
        <div className='container4'>
            <div className='section4div1'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </div>
            <div className='section4div2'>
                <img className='top-right-image' src={image3} alt="Greeksalad" />
                <img className='bottom-left-image' src={image4} alt="Greeksalad" />
            </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
