import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientNavbar from './ClientNavbar';

function ClientLandingPage() {
  return (
    <div>
      <ClientNavbar />
      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: '90vh',
          backgroundImage: 'url("https://i.pinimg.com/1200x/55/9f/58/559f580386669804c61dcf73fec3c968.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(81, 51, 81, 0.5)',
            zIndex: 1,
          }}
        />
               <div
          className="text-center text-white"
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <h1 style={{ fontWeight: 'bold', fontSize: '3.8rem', lineHeight: 1.3 }}>
            HELP <span style={{ color: '#513351' }}>HER</span> BREAK BARRIERS<br />
            WRITE A <span style={{ color: '#513351' }}>NEW CHAPTER</span>
          </h1>
          <p className="mt-4" style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 500 }}>
            “Your donation empowers girls to access education, gain confidence,<br />
            and build a brighter future—one chapter at a time.”
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '40px',
            transform: 'translateX(-50%)',
            zIndex: 2,
          }}
        >
          <span style={{ fontSize: '2rem', color: '#fff' }}>↓</span>
        </div>
      </section>  
     <section className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0 d-flex flex-column justify-content-center" style={{ paddingRight: '50px' }}>
            <h2 style={{ color: '#513351', fontWeight: 'bold', fontSize: '2.7rem', marginBottom: '1.5rem' }}>
              TALIKALA Inc.
            </h2>
            <div className="row">
              <div className="col-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus lorem sed nibh iaculis, a aliquet leo iaculis. Aenean tempor, turpis et dictum volutpat, eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus lorem sed nibh iaculis, a aliquet leo iaculis. Aenean tempor, turpis et dictum volutpat, eros.
                </p>
              </div>
              <div className="col-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus lorem sed nibh iaculis, a aliquet leo iaculis. Aenean tempor, turpis et dictum volutpat, eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus lorem sed nibh iaculis, a aliquet leo iaculis. Aenean tempor, turpis et dictum volutpat, eros.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ paddingLeft: '50px' }}>
            <img
              src="https://i.pinimg.com/736x/a7/c5/ff/a7c5fff4c06a8449d948aaf0b30b95f9.jpg"
              alt="Placeholder"
              className="img-fluid rounded"
              style={{ width: '100%', maxWidth: '600px', objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center mb-4 mb-lg-0" style={{ paddingRight: '50px' }}>
            <img
              src="https://www.billboard.com/wp-content/uploads/2022/12/03-RM-BTS-Indigo-2022-billboard-1548.jpg"
              alt="Placeholder"
              className="img-fluid rounded"
              style={{ width: '100%', maxWidth: '600px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center" style={{ paddingLeft: '40px' }}>
            <h2 style={{ color: '#513351', fontWeight: 'bold', fontSize: '2.7rem', marginBottom: '1.5rem' }}>
              Make a Difference,<br />Support Those in Need.
            </h2>
            <div className="row">
              <div className="col-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus lorem sed nibh iaculis, a aliquet leo iaculis. Aenean tempor, turpis et dictum volutpat, eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus lorem sed nibh iaculis, a aliquet leo iaculis. Aenean tempor, turpis et dictum volutpat, eros.
                </p>
              </div>
              <div className="col-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus lorem sed nibh iaculis, a aliquet leo iaculis. Aenean tempor, turpis et dictum volutpat, eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus lorem sed nibh iaculis, a aliquet leo iaculis. Aenean tempor, turpis et dictum volutpat, eros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientLandingPage;