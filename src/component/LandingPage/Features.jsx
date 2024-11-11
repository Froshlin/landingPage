import React from 'react'
import mobile from '../image/mobile.png'

function Features() {
  return (
    <>
    <section className="feature-section md-container">
        <div className="feature-heading">
            <h1>Core Features</h1>
        </div>
        <main className="feature-main-container">
            {/* First Core Feature */}
            <div className="feature-main-wrapper">
                <div className="feature-img-container">
                    <img src={mobile} alt="mobile-phone" />
                </div>
                <div className="feature-text-container">
                    <h1>Financial Crime Reporting</h1>
                    <div className="feature-paragraph">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                        <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                    <button>Make a Report</button>
                </div>
            </div>
            {/* Second Core Feature */}
            <div className="feature-main-wrapper">
                <div className="feature-img-container">
                    <img src={mobile} alt="mobile-phone" />
                </div>
                <div className="feature-text-container">
                    <h1>Transparency & Accountability</h1>
                    <div className="feature-paragraph">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                        <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                    <button>Make a Report</button>
                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Features
