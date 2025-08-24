import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUsers } from 'react-icons/fa'; 
import { LuHandHeart, LuHeartHandshake } from "react-icons/lu";


function ClientMissionVision() {
  return (
    <div>


      {/* About Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          {/* Left column - Text */}
          <div className="col-lg-6">
            <h2 style={{ fontWeight: 'bold', fontSize: '2.7rem', marginBottom: '2rem' }}>
               ABOUT <span style={{ color: '#513351' }}>TALIKALA INC.</span>
            </h2>

            {/* Mission */}
            <div className="mb-4 d-flex">
              <div
                style={{
                    width: '60px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#513351',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px',
                }}
                >
                <LuHeartHandshake color="white" size={20} />
            </div>

              <div>
                <h5 style={{ fontWeight: 'bold' }}>Our Mission</h5>
                <p>
                  Amet id in tristique bibendum justo netus augue id. 
                  Nunc tristique quis leo duis gravida volutpat vitae quam quam.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="mb-4 d-flex">
              <div
                style={{
                    width: '50px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#513351',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px',
                }}
              >
                <FaUsers color="white" size={18} />
              </div>
              <div>
                <h5 style={{ fontWeight: 'bold' }}>Our Vision</h5>
                <p>
                  Ultrices urna nec massa commodo id sit diam amet et. 
                  Libero dictum ut purus ut vel sit egestas.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mb-4 d-flex">
              <div
                style={{
                    width: '50px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#513351',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '15px',
                }}
              >
                <LuHandHeart color="white" size={18}/>
              </div>
              <div>
                <h5 style={{ fontWeight: 'bold' }}>Our Values</h5>
                <p>
                  Ut ac mattis senectus ac suspendisse vitae vel nulla eleifend. 
                  Est eros facilisi aenean nisl a.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Images */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="d-flex flex-row gap-3">
                <img
                src="https://i.pinimg.com/1200x/4d/bd/33/4dbd3353069fd64d4d2a4673780e9ed2.jpg"
                alt="Mission"
                className="img-fluid rounded"
                style={{ width: '300px', height: '450px', objectFit: 'cover', borderRadius: '20px' }}
                />
                <img
                src="https://i.pinimg.com/1200x/c9/1e/87/c91e879b5ccb293724ef736cadfe398d.jpg"
                alt="Vision"
                className="img-fluid rounded"
                style={{ width: '300px', height: '450px', objectFit: 'cover', borderRadius: '20px' }}
                />

            </div>
            </div>

        </div>
      </section>
    </div>
  );
}

export default ClientMissionVision;
