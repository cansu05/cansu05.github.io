import React from "react";
import "../../styles/project.scss";
import { Container, Col, Row } from "reactstrap";

const Projects = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Projelerim</h2>
            </Col>
          </Row>
          <Row className="project__wrapper">
            <Col lg="6" md="6">
              <div className="project__information">
                <h5>Coffee Web site</h5>
                <h6 className="mb-3">Proje Tanımı</h6>
                <ul>
                  <li>
                    <i class="ri-shining-2-fill"></i>Web sitesinin tasarımı,
                    minimal ve şık bir yaklaşımla oluşturuldu. Kullanıcı dostu
                    bir arayüz ve uyumlu renk seçimleri tercih edildi. Aynı
                    zamanda, site düzeninin farklı ekran boyutlarına uyum
                    sağlaması için medya sorguları ve flexbox kullanılarak
                    responsive bir yapı oluşturuldu.
                  </li>
                  <li>
                    <i class="ri-shining-2-fill"></i>HTML5 ve CSS3
                    teknolojilerini temel alarak web sitesinin statik yapısını
                    oluşturdum. jQuery kütüphanesini kullanarak sayfa içi
                    animasyonlar, geçiş efektleri ve etkileşimli öğeler ekledim.
                    Böylece, kullanıcılara daha çekici bir deneyim sunmayı
                    hedefledim.
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div class="swiper__wrapper wrap-effect-1">
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="project__wrapper">
            <Col lg="6" md="6">
              <div className="project__information">
                <h5>Hava Durumu Uygulaması</h5>
                <h6 className="mb-3">Proje Tanımı</h6>
                <ul>
                  <li>
                    <i class="ri-shining-2-fill"></i> Bu projenin amacı,
                    kullanıcının coğrafi konumuna dayalı olarak anlık hava
                    durumu bilgilerini göstermektir.
                  </li>
                  <li>
                    <i class="ri-shining-2-fill"></i>Proje geliştirmek için
                    React kütüphanesini tercih ettim. Böylece bileşen tabanlı
                    bir yapı kurarak kodu daha modüler ve yönetilebilir hale
                    getirdim. API çağrıları için Axios kütüphanesini kullandım
                    ve OpenWeatherMap API'sine HTTP istekleri yaparak güncel
                    hava durumu verilerini aldım.
                  </li>
                  <li>
                    <i class="ri-shining-2-fill"></i> Görsel tasarım için
                    Tailwind CSS tercih ettim. Kolay kullanılabilir sınıfları
                    sayesinde, basit ve şık bir arayüz oluşturmak çok daha kolay
                    oldu. Kullanıcı dostu bir tasarım yaparak hava durumu
                    bilgilerini anlaşılır bir şekilde sundum.
                  </li>
                  <li>
                    <i class="ri-shining-2-fill"></i>Projemde, kullanıcının
                    coğrafi konumunu almak için usePosition hookunu kullandım.
                    Bu sayede, kullanıcının enlem ve boylam değerlerine erişerek
                    hava durumu verilerini kullanıcının bulunduğu yere göre
                    güncelledim.
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div class="swiper__wrapper wrap-effect-2">
                <div class="item"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="project__wrapper">
            <Col lg="6" md="6">
              <div className="project__information">
                <h5>Yemek Tarifleri Web Site</h5>
                <h6 className="mb-3">Proje Tanımı</h6>
                <ul>
                  <li>
                    <i class="ri-shining-2-fill"></i> Bu proje, yemek sepeti web
                    sitesi için geliştirilen bir React uygulamasıdır. Temel
                    amacı, kullanıcıların yemekleri filtreleyebileceği ve arama
                    yapabileceği interaktif bir platform sağlamaktır. Proje,
                    JSON dosyasından alınan yemek verilerini dinamik bir şekilde
                    görselleştirerek kullanıcıların etkileşimde bulunmasını
                    sağlar.
                  </li>
                  <li>
                    <i class="ri-shining-2-fill"></i>Görsel tasarım için CSS
                    tercih ettim.
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div class="swiper__wrapper wrap-effect-3">
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="project__wrapper mb-5">
            <Col lg="6" md="6">
              <div className="project__information">
                <h5>Todo Uygulaması</h5>
                <h6 className="mb-3">Proje Tanımı</h6>
                <ul>
                  <li>
                    <i class="ri-shining-2-fill"></i> Bu proje, React
                    kütüphanesi ile geliştirilen, üye girişi yapılabilen bir
                    todo uygulamasıdır.
                  </li>
                  <li>
                    <i class="ri-shining-2-fill"></i>Proje, useContext API'sini
                    kullanarak global state yönetimi sağlar ve basicSchema ile
                    form verilerinin doğrulama işlemlerini gerçekleştirir.
                  </li>
                  <li>
                    <i class="ri-shining-2-fill"></i>Tasarım ve düzenlemeler
                    için CSS ve Sass kullandım.
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div class="swiper__wrapper wrap-effect-4">
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
