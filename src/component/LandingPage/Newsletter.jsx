import React from 'react'
import FormInput from './formInput'

function Newsletter() {
    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return (
        <>
            <section className="newsletter-section">
                <div className="newsletter-main-container">
                    <div className="newsletter-heading">
                        <h1>Sign Up for Our Newsletter</h1>
                        <p>Blah blah blah in your mail about fiiiiiii in Ondo</p>
                    </div>
                    <form className='newsletter-form' onSubmit={handleSubmit}>
                        <FormInput />
                        <button>Sign up for newsletter</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Newsletter
