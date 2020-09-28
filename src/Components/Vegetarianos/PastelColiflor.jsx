import React, { useState } from "react";
import {
  Container,
  Table,
  Row,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import pastelColiflor from "../../Assets/img/pasteldecoliflor.png";
import reloj from "../../Assets/img/Clock.png";
import tenedor from "../../Assets/img/Fork.png";
import vegetariano from "../../Assets/img/vegetariano.png";
import info from "../../Assets/img/Info.png";
import Menu from "../Principal/Menu";
import Carrusel from "../Principal/Carrusel";
import Footer from "../Principal/Footer";

const PastelColiflor = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <>
      <Menu />
      <Carrusel />
      <Container>
        <h3 className="text-center">Paste de Coliflor y Champiñón</h3>
        <div class="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={pastelColiflor} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Ingredientes</h5>
                <Table borderless>
                  <tbody>
                    <tr>
                      <td>Coliflor Bandeja</td>
                      <td>1 un.</td>
                    </tr>
                    <tr>
                      <td>Leche Natural Colún</td>
                      <td>200 ml.</td>
                    </tr>
                    <tr>
                      <td>Huevo grande blanco Unimarc</td>
                      <td>4 un.</td>
                    </tr>
                    <tr>
                      <td>Champiñón bandeja</td>
                      <td>200 gr.</td>
                    </tr>
                    <tr>
                      <td>Cebolla</td>
                      <td>1 un.</td>
                    </tr>
                    <tr>
                      <td>Pimienta y Sal</td>
                      <td>A Gusto</td>
                    </tr>
                  </tbody>
                </Table>
                <div>
                  <Row>
                    <div>
                      <img src={reloj} alt="reloj" /> <span>30 min</span>
                    </div>
                    <div>
                      <img src={tenedor} alt="tenedor" />{" "}
                      <span> 4 porciones </span>
                    </div>
                    <div>
                      <img src={vegetariano} alt="vegetariano" />
                      <span> Vegetariano </span>
                    </div>
                    <div>
                      <img
                        style={{ cursor: "pointer" }}
                        id="Popover1"
                        src={info}
                        alt="información nutricional"
                      />
                      <span>Información Nutricional</span>

                      <Popover
                        placement="bottom"
                        isOpen={popoverOpen}
                        target="Popover1"
                        toggle={toggle}
                      >
                        <PopoverHeader>
                          Calorías y Macronutrientes
                        </PopoverHeader>
                        <PopoverBody>
                          <Table borderless>
                            <tbody>
                              <tr>
                                <th scope="row">
                                  <i class="icofont-fire-burn"></i>
                                </th>
                                <td>Calorías</td>
                                <td>163</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i class="icofont-bread"></i>
                                </th>
                                <td>Carbohidratos</td>
                                <td>14 grs</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i class="icofont-chicken-fry"></i>
                                </th>
                                <td>Proteínas</td>
                                <td>12 grs</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i class="icofont-water-drop"></i>
                                </th>
                                <td>Lípidos</td>
                                <td>7 grs</td>
                              </tr>
                            </tbody>
                          </Table>
                        </PopoverBody>
                      </Popover>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <h4> Preparación</h4>
          <p className="text-sm-left ">
            <br />
            Comenzamos cortando la coliflor en trozos muy pequeños y la
            agregamos a una olla con aceite, añadimos leche, sal, pimienta y
            revolvemos. Dejamos cocinar por 20 a 25 minutos.
            <br />
            <br />
            Luego cortamos la cebolla en brunoise y la ponemos en un sartén con
            un poco de aceite, sal y pimienta. Cortamos los champiñones y los
            incorporamos junto a la cebolla para formar el sofrito. Revolvemos y
            dejamos cocinar por 5 minutos.
            <br />
            <br />
            Una vez lista la coliflor con la leche, la procesamos para formar
            una especie de puré y dejamos enfriar en un bowl. Cuando se enfrié
            agregamos el queso parmesano dejando reservado un poco para luego
            cubrir el pastel. Agregamos dos huevos a la mezcla y revolvemos.
            <br />
            <br />
            En pocillos de greda agregamos nuestro sofrito de champiñón,
            añadimos nuestra mezcla de coliflor y finalmente el queso parmesano
            restante. Llevamos al horno por unos 10 minutos para que dore.
            <br />
            <br />
            Para emplatar, una vez pasado el tiempo retiramos los pasteles del
            horno y montamos cada pocillo de greda sobre un plato.
          </p>
          <br />
          <p>A continuación puedes ver el video con la preparación </p>
        </section>
        <section>
          <iframe
            src="https://www.youtube.com/embed/BDz1yV3gXAU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="pastel coliflor"
          ></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default PastelColiflor;
