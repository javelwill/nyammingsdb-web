import React from 'react'
import Button from '../components/Button/Button'

const Home = () => {
  return (
    <>
      <section className='showcase'>
        <div className='container container--showcase'>
          <div className='showcase__section'>
            <h1 className='showcase__section-title'>
              Jamaica's Food Establishments API
            </h1>
            <p className='showcase__section-text'>
              Access data on food establishments located across Jamaica through
              an easy to use API for free. Build web apps, mobile apps or
              integrate into other applications.
            </p>
            <Button text="LEARN MORE" type="btn btn--outline" link="/"/>
          
          </div>
          <div className='showcase__form'>
            <h3>API Registration</h3>
            <p style={{marginBottom: "0.5rem"}}>Sign up to access our data with a free API key.</p>
            <Button text="Sign up" type="btn btn--full" link="/"/>
            <hr />
            <h3>Already a user? Log in</h3>
            <form>
              <div className='form-control'>
                <label htmlFor='username'>USERNAME OR EMAIL</label>
                <input type='text' name='username' required />
              </div>
              <div className='form-control' style={{marginBottom: "0.5rem"}}>
                <label htmlFor='password'>PASSWORD</label>
                <input type='password' name='password' required />
              </div>
              <Button text="Log in" type="btn" link="/"/>
            </form>
          </div>
        </div>
      </section>

      <section className='stats'>
      <div className='container container--stats'>
        
        <div className='stats__all'>
          <div className='stats__single'>
            <i className='stats__icon fas fa-paper-plane fa-3x'></i>
            <h3 className='stats__number'>15,000</h3>
            <p className='stats__title'>Requests Served</p>
          </div>
          <div className='stats__single'>
            <i className='stats__icon fas fa-user-friends fa-3x'></i>
            <h3 className='stats__number'>200</h3>
            <p className='stats__title'>Users</p>
          </div>
          <div className='stats__single'>
            <i className='stats__icon fas fa-utensils fa-3x'></i>
            <h3 className='stats__number'>100</h3>
            <p className='stats__title'>Food Establishments</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
