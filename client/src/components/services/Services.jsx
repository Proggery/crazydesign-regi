import React from "react";
import "./services.css";
import Heading from "../heading/Heading";

export default function Services() {
  const services = {
    title_first: "...amibe már ",
    title_last: "belekóstóltam",
  };
  return (
    <section className="services" id="services">
      <Heading heading={services} />

      <div className="box-container">
        <div className="box">
          <i className="fas fa-code"></i>
          <h3>web dizájn</h3>
          <p>
            ...ha az időbeosztásom megengedi, olykor a web dizájn-nal is
            fejlesztem a tudásomat. Látványtervek készítek a figma nevű
            alkalmazással.
          </p>
        </div>

        <div className="box">
          <i className="fas fa-paint-brush"></i>
          <h3>Grafikus dizájn</h3>
          <p>
            Amikor szükség van rá, akkor a photoshop-ot is elő veszem, hiszen a
            fejlesztés során sokszor elengedhetetlen kellék!
          </p>
        </div>

        <div className="box">
          <i className="fas fa-mobile"></i>
          <h3>Reszponzív megoldások</h3>
          <p>
            Jelenleg a mobiltelefonok/tabletek használata nyer priorítást a
            mindennapi életben, így a reszponzív webapplikációk fejlesztése, a
            felhasználói élményt (UX) elősegítve , nagyon fontos számomra!
          </p>
        </div>

        <div className="box">
          <i className="fas fa-bullhorn"></i>
          <h3>digitális marketing</h3>
          <p>
            A népszerű szociális média platformokat kihasználva (facebook,
            instagram stb...) folyamatosan naprakész vagyok a folyamatos
            újításokra!
          </p>
        </div>

        <div className="box">
          <i className="fas fa-server"></i>
          <h3>NodeJs / Spring Boot / Adatbázis</h3>
          <p>
            Az iskolai tanáraimnak köszönhetően intenzív
            oktatásokban(segítségben) van részem a backend felőli megoldások
            kezelésében...
          </p>
        </div>

        <div className="box">
          <i className="fab fa-youtube"></i>
          <h3>Youtube videók</h3>
          <p>
            Minden napos videós tutorial-okból tanulva, minden időmet kitölti a
            foglalkozásom fejlesztése, így mindig napra kész lehetek az új
            megoldásokra!
          </p>
        </div>
      </div>
    </section>
  );
}
