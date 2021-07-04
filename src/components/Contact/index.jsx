import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src="https://www.google.com/maps/place/Masjid+Jammi+An-Nur/@-6.1516749,106.2307578,16z/data=!4m13!1m7!3m6!1s0x2e41f58d57fad557:0xed4ef0829722bede!2sKec.+Walantaka,+Kota+Serang,+Banten!3b1!8m2!3d-6.1494777!4d106.2227968!3m4!1s0x2e41f5f5e8119001:0x5ad9d6cbfb89017d!8m2!3d-6.1530323!4d106.2337733"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>HandPhone</h4>
      <p>088224934521</p>

      <h4>Email</h4>
      <p>3332180011@untirta.ac.id</p>

      <h4>Address</h4>
      <p>Walantaka city</p>
    </div>
  );
};

export default About;
