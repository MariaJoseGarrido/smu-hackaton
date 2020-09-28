import React, { useState } from "react";
import {
  Container,
  Table,
  Row,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import sopaipillasPasadas from "../../Assets/img/sopaipillasPasadas.png";
import reloj from "../../Assets/img/Clock.png";
import tenedor from "../../Assets/img/Fork.png";
import libreGluten from "../../Assets/img/GlutenFree.png";
import info from "../../Assets/img/Info.png";
import Menu from "../Principal/Menu";
import Carrusel from "../Principal/Carrusel";
import Footer from "../Principal/Footer";

const SopaipillasPasadas = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <>
      <Menu />
      <Carrusel />
      <Container>
        <h3 className="text-center">Sopaipillas Pasadas</h3>
        <div class="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={sopaipillasPasadas} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Ingredientes</h5>
                <Table hover>
                  <tbody>
                    <tr>
                      <td>Zapallo cubo congelado Frutos del Maipo</td>
                      <td>400 gr</td>
                    </tr>
                    <tr>
                      <td>Harina sin polvos de hornear</td>
                      <td>400 gr</td>
                    </tr>
                    <tr>
                      <td>Manteca</td>
                      <td>20 gr</td>
                    </tr>
                    <tr>
                      <td>Chancaca</td>
                      <td>150 gr</td>
                    </tr>
                    <tr>
                      <td>Polvos de Hornear</td>
                      <td>1 cdta.</td>
                    </tr>
                    <tr>
                      <td>Maicena</td>
                      <td>A Gusto</td>
                    </tr>
                    <tr>
                      <td>Bastón de Canela</td>
                      <td>A Gusto</td>
                    </tr>
                    <tr>
                      <td>Cáscara de Naranja</td>
                      <td>A Gusto</td>
                    </tr>
                    <tr>
                      <td>Aceite y Sal </td>
                      <td>A Gusto</td>
                    </tr>
                  </tbody>
                </Table>
                <div>
                  <Row>
                    <div>
                      <img src={reloj} alt="reloj" /> <span>50 min</span>
                    </div>
                    <div>
                      <img src={tenedor} alt="tenedor" />{" "}
                      <span> 4 porciones </span>
                    </div>
                    <div>
                      <img src={libreGluten} alt="libreGluten" />
                      <span> Libre de gluten </span>
                    </div>
                    <div>
                      <Button id="Popover1" type="button" color="white">
                        <img src={info} alt="información nutricional" />
                      </Button>
                      <span>información Nutricional</span>

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
                                <td>562</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i class="icofont-bread"></i>
                                </th>
                                <td>Carbohidratos</td>
                                <td>104 grs</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  <i class="icofont-chicken-fry"></i>
                                </th>
                                <td>Proteínas</td>
                                <td>21.7 grs</td>
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
          <h4> Preparacion</h4>
          <p className="text-sm-left ">
            {" "}
            <br />
            <br />
            Remover la corteza del zapallo y cortarlo en cubos pequeños. Dejar
            cocer por ocho minutos en una olla con agua hirviendo.
            <br />
            <br />
            En otra olla con agua caliente, agregar un pan de chancaca, bastones
            de canela a gusto y una cáscara de naranja limpia (sin las partes
            blancas). Una vez disuelta la chancaca, agregar maicena hasta
            obtener una consistencia viscosa.
            <br />
            <br />
            Una vez cocido el zapallo, moler y agregar a un envase con la
            harina, manteca y polvos de hornear. Mezclar y proceder al amasado.
            En caso que la masa necesite hidratarse más, usar el agua del
            zapallo.
            <br />
            <br />
            Amasar en forma envolvente y agregar una pizca de sal a la masa. Una
            vez terminado el proceso de amasado, estirar la masa de forma
            cilíndrica para cortar las porciones.
            <br />
            <br />
            Dar forma circular a las sopaipillas y hacer huequitos con el
            tenedor, para que la masa respire.
            <br />
            <br />
            Cuando las sopaipillas estén fritas y la chancaca esté viscosa,
            introducir las sopaipillas en la olla con chancaca para remojarlas.
            <br />
            <br />
            Aparte, cortar una cáscara de naranja en tiras muy finas y freírlas
            con un poco de azúcar
            <br />
            <br />
            Finalmente, servir las sopaipillas remojadas en chancaca y colocar
            las tiras de naranja frita arriba, realzando su sabor y decoración.
          </p>
          <br />
          <p>A continuación puedes ver el video con la preparación </p>
        </section>
        <section>
          <iframe
            width="1090"
            height="600"
            src="https://www.youtube.com/embed/MXBVni4nAqc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="sopaipillas pasadas"
          ></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default SopaipillasPasadas;
