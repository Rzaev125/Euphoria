import style from './Home.module.scss'

function Home() {
    return ( 
        <>
            <nav className='flex flex-cols justify-around p-4'>
                <div className='cursor-pointer' >
                    <img width='100px' height='100px' src={require('../../images/Logo.jpg')} alt='Logo' />
                </div>
                <ul className='flex'>
                    <li><a href='#'>Shop</a></li>
                    <li><a href='#'>Men</a></li>
                    <li><a href='#'>Women</a></li>
                    <li><a href='#'>Combos</a></li>
                    <li><a href='#'>Joggers</a></li>
                </ul>
                <div id={style.search} className='flex bg-gray-100 rounded-xl'>
                    <svg className='mt-3 ml-3' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6363 17.697C16.9292 17.9899 17.4041 17.9899 17.697 17.697C17.9899 17.4041 17.9899 16.9292 17.697 16.6363L16.6363 17.697ZM13.9167 8.83334C13.9167 11.6408 11.6408 13.9167 8.83334 13.9167V15.4167C12.4692 15.4167 15.4167 12.4692 15.4167 8.83334H13.9167ZM8.83334 13.9167C6.02589 13.9167 3.75 11.6408 3.75 8.83334H2.25C2.25 12.4692 5.19746 15.4167 8.83334 15.4167V13.9167ZM3.75 8.83334C3.75 6.02589 6.02589 3.75 8.83334 3.75V2.25C5.19746 2.25 2.25 5.19746 2.25 8.83334H3.75ZM8.83334 3.75C11.6408 3.75 13.9167 6.02589 13.9167 8.83334H15.4167C15.4167 5.19746 12.4692 2.25 8.83334 2.25V3.75ZM12.4697 13.5303L16.6363 17.697L17.697 16.6363L13.5303 12.4697L12.4697 13.5303Z" fill="#3C4242"/>
                    </svg>
                    <input className='bg-gray-100 ml-4' placeholder='Search...' />
                </div>

                <div id={style.activity} className='flex p-3'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.99486 4.93005C8.49535 3.18253 5.99481 2.71245 4.11602 4.31265C2.23723 5.91285 1.97273 8.58831 3.44815 10.4809C4.67486 12.0544 8.38733 15.3731 9.60407 16.4473C9.7402 16.5674 9.80827 16.6275 9.88766 16.6511C9.95695 16.6717 10.0328 16.6717 10.1021 16.6511C10.1815 16.6275 10.2495 16.5674 10.3857 16.4473C11.6024 15.3731 15.3149 12.0544 16.5416 10.4809C18.017 8.58831 17.7848 5.89602 15.8737 4.31265C13.9626 2.72929 11.4944 3.18253 9.99486 4.93005Z" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99992 11.6666C12.3011 11.6666 14.1666 9.8011 14.1666 7.49992C14.1666 5.19873 12.3011 3.33325 9.99992 3.33325C7.69873 3.33325 5.83325 5.19873 5.83325 7.49992C5.83325 9.8011 7.69873 11.6666 9.99992 11.6666ZM9.99992 11.6666C6.31802 11.6666 3.33325 13.9052 3.33325 16.6666M9.99992 11.6666C13.6818 11.6666 16.6666 13.9052 16.6666 16.6666" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 3.33325H3.00526C3.85578 3.33325 4.56986 3.97367 4.6621 4.81917L5.3379 11.014C5.43014 11.8595 6.14422 12.4999 6.99474 12.4999H14.205C14.9669 12.4999 15.6317 11.9833 15.82 11.2451L16.9699 6.73584C17.2387 5.68204 16.4425 4.65733 15.355 4.65733H5.5M5.52063 15.5207H6.14563M5.52063 16.1457H6.14563M14.6873 15.5207H15.3123M14.6873 16.1457H15.3123M6.66667 15.8333C6.66667 16.2935 6.29357 16.6666 5.83333 16.6666C5.3731 16.6666 5 16.2935 5 15.8333C5 15.373 5.3731 14.9999 5.83333 14.9999C6.29357 14.9999 6.66667 15.373 6.66667 15.8333ZM15.8333 15.8333C15.8333 16.2935 15.4602 16.6666 15 16.6666C14.5398 16.6666 14.1667 16.2935 14.1667 15.8333C14.1667 15.373 14.5398 14.9999 15 14.9999C15.4602 14.9999 15.8333 15.373 15.8333 15.8333Z" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </div>
            </nav>

            <main>
                <div id={style.slider} className='flex flex-cols'>
                    <div className='flex items-center'>
                        <button>
                            <svg width="100" height="100" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6668 5L7.25604 9.41074C6.9306 9.73618 6.9306 10.2638 7.25604 10.5893L11.6668 15" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                    <div id={style.mainText} className='text-white px-32 py-32 w-screen'>
                        <h3 className='mb-12'>T-shirt / Tops</h3>
                        <h1><b>Summer <br /> Value Pack</b></h1>
                        <h3 className='mt-12'>cool / colorful / comfy</h3>
                        <button className='mt-12 text-black rounded bg-white'><b>Shop Now</b></button>
                    </div>
                    <div className='flex items-center'>
                        <button>
                            <svg width="100" height="100" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.33325 5L12.744 9.41074C13.0694 9.73618 13.0694 10.2638 12.744 10.5893L8.33325 15" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div id={style.InfoBlock} className='flex justify-center text-white'>
                    <div id={style.firstBlock} className='w-2/5 mr-10 rounded-xl px-8 py-14'>
                        <h3 className='mb-12'><b>Low Price</b></h3>
                        <h1 className='mb-2'><b>High Coziness</b></h1>
                        <h3 className='mb-12'>UPTO 50% OFF</h3>
                        <h2><b>Explore Items</b></h2>
                        <hr className='mb-12' />
                    </div>
                    <div id={style.secondBlock} className='w-2/5 rounded-xl -mt-2 -mb-3 px-10 py-14'>
                        <h3 className='mb-8'><b>Beyoung Presents</b></h3>
                        <h1 className='mb-2'><b>Breezy Summer <br /> Style</b></h1>
                        <h3 className='mb-10'>UPTO 50% OFF</h3>
                        <h2><b>Explore Items</b></h2>
                        <hr className='mb-12' />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;