import "./kitDesc.css";

const KitDesc = () => {
  return (
    <div className="kit-body">
      <div className="kit-title-category">
        <h1 className="kit-title mt-80">Z czego składa się nasz zestaw?</h1>
      </div>
      <div className="k-body">
        <div className="grid-kit">
          <div className="kit-item kit-box">
            <div className="item ">
              <img
                src="../img/zestaw_do_uprawy_jalapeno.png"
                alt=""
                className="kit-img-1"
              />
            </div>
          </div>
          <div className="bg-kit kit-border">
            <div className="kit-item mt-40 ">
              <div className="title-class">
                <h2 className="main-title">
                  <span className="color-primary">Gotowe zestawy</span> do
                  uprawy domowej
                </h2>
              </div>
              <div className="top-desc">
                <span className="color-warning">*</span>testujemy regularnie
                nasiona z naszych zestawów, w warunkach domowych jak również pod
                lampami.
              </div>
            </div>

            <div className="baner-mid">
              <img src="../img/bg-grow.png" alt="" className="kit-img-baner" />
            </div>
          </div>
          <div className="kit-item ">
            <div className="item ">
              <div className="desc">
                Zestaw do uprawy domowej, kompletny wystarczy dodać tylko wody.
                W zestawie znajduje się wszystko, czego potrzebujemy: doniczka
                13 cm, profesjonalne podłoże wzbogacone dodatkowym nawozem
                startowym i perlitem, nasiona do uprawy z profesjonalnej
                hodowli, pałeczki nawozowe na pełny cykl roczny. Hydrożel, który
                zapewni dostarczanie wody do rośliny w okresach naszych
                wyjazdów. Biała tabliczka do opisywania roślin (wodoodporna),
                instrukcja papierowa lub online (zawierająca zdjęcia i głębszy
                opis dla poszczególnych cyklów rozwoju rośliny)
              </div>
              <div className="box">
                <div className="main-desc-kit">Zawartość każdego zestawu</div>
                <hr className="hr-m-tb-20" />
                <div className="flex-text-center">
                  <div className="pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-1-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                    </svg>
                  </div>
                  <div className="sub-kit">Doniczka 13cm</div>
                </div>
                <div className="flex-text-center">
                  <div className="pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-2-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                    </svg>
                  </div>
                  <div className="sub-kit">1 x opakowanie nasion</div>
                </div>
                <div className="flex-text-center">
                  <div className="pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-3-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                    </svg>
                  </div>
                  <div className="sub-kit">Podłoże organiczne 1L</div>
                </div>
                <div className="flex-text-center">
                  <div className="pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-4-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.519 5.057c.22-.352.439-.703.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" />
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                    </svg>
                  </div>
                  <div className="sub-kit">
                    Perlit (zmieszany bezpośrednio z podłożem)
                  </div>
                </div>
                <div className="flex-text-center">
                  <div className="pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-5-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.994 12.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z" />
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                    </svg>
                  </div>
                  <div className="sub-kit">1 x opakowanie hydrożel</div>
                </div>
                <div className="flex-text-center">
                  <div className="pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-6-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.21 3.855c1.612 0 2.515.99 2.573 1.899H9.494c-.1-.358-.51-.815-1.312-.815-1.078 0-1.817 1.09-1.805 3.036h.082c.229-.545.855-1.155 1.98-1.155 1.254 0 2.508.88 2.508 2.555 0 1.77-1.218 2.783-2.847 2.783-.932 0-1.84-.328-2.409-1.254-.369-.603-.597-1.459-.597-2.642 0-3.012 1.248-4.407 3.117-4.407Zm-.099 4.008c-.92 0-1.564.65-1.564 1.576 0 1.032.703 1.635 1.558 1.635.868 0 1.553-.533 1.553-1.629 0-1.06-.744-1.582-1.547-1.582Z" />
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                    </svg>
                  </div>
                  <div className="sub-kit">1 x opakowanie keramzytu</div>
                </div>
                <div className="flex-text-center">
                  <div className="pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-7-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.37 5.11V4.001h5.308V5.15L7.42 12H6.025l3.317-6.82v-.07H5.369Z" />
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                    </svg>
                  </div>
                  <div className="sub-kit">
                    2 x Pałeczka nawozowa organiczna
                  </div>
                </div>
                <div className="flex-text-center">
                  <div className="pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-8-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.97 9.803c0 1.394-1.218 2.355-2.988 2.355-1.763 0-2.953-.955-2.953-2.344 0-1.271.95-1.851 1.647-2.003v-.065c-.621-.193-1.33-.738-1.33-1.781 0-1.225 1.09-2.121 2.66-2.121s2.654.896 2.654 2.12c0 1.061-.738 1.595-1.336 1.782v.065c.703.152 1.647.744 1.647 1.992Zm-4.347-3.71c0 .739.586 1.255 1.383 1.255s1.377-.516 1.377-1.254c0-.733-.58-1.23-1.377-1.23s-1.383.497-1.383 1.23Zm-.281 3.645c0 .838.72 1.412 1.664 1.412.943 0 1.658-.574 1.658-1.412 0-.843-.715-1.424-1.658-1.424-.944 0-1.664.58-1.664 1.424Z" />
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                    </svg>
                  </div>
                  <div className="sub-kit">Instrukcja papierowa i online</div>
                </div>
                <div className="flex-text-center">
                  <div className="pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-9-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.777 12.146c-1.593 0-2.425-.89-2.52-1.798h1.296c.1.357.539.72 1.248.72 1.36 0 1.88-1.353 1.834-3.023h-.076c-.235.627-.873 1.184-1.934 1.184-1.395 0-2.566-.961-2.566-2.666 0-1.711 1.242-2.731 2.87-2.731 1.512 0 2.971.867 2.971 4.014 0 2.836-1.02 4.3-3.123 4.3Zm.118-3.972c.808 0 1.535-.528 1.535-1.594s-.668-1.676-1.56-1.676c-.838 0-1.517.616-1.517 1.659 0 1.072.708 1.61 1.54 1.61Z" />
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                    </svg>
                  </div>
                  <div className="sub-kit ">
                    Tabliczka / Wskaźnik biały do opisywania
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="kit-item chili-item">
            <div className="item bg ">
              <img
                src="../img/uprawa_papryki.jpg"
                alt=""
                className="kit-img-2"
              />
            </div>
          </div>
          <div className="kit-item mt-20 chili-soil">
            <div className="item bg">
              <div className="img-400">
                <img
                  src="../img/kit/podloze_1.png"
                  alt=""
                  className="kit-img-full position"
                />
              </div>
            </div>
          </div>
          <div className="kit-item">
            <div className="item">
              <div className="main-desc-kit">Podłoże organiczne 1L</div>
              <div className="desc mt-20">
                W naszych zestawach używamy profesjonalnego podłoża
                organicznego, w skład którego wchodzi mieszanka oczyszczonej
                gleby, perlit, kompostu, worm humus oraz specjalną startową
                porcję składników odżywczych. Podłoże zawiera minimalnie 70%
                składników pochodzenia organicznego, nawóz w podłożu posiada
                bezpośrednie działanie wspomagające nadzwyczajny rozwój korzenia
                i silnych pędów, podczas gdy przyspieszony metabolizm w
                połączeniu z małym występowaniem chorób zapewnia podwyższona
                produkcję.
              </div>
            </div>
            <hr className="hr-text" />
            <div className="item perlit-item">
              <div className="main-desc-kit">Perlit</div>
              <div className="desc mt-20 desc-kit">
                Czyli skała wulkaniczna w kolorze białym, idealny do wysiewania
                nasion. Doskonale spulchnia i napowietrza ziemię oraz reguluje
                jej wilgotność stwarzając optymalne warunki do rozwoju systemu
                korzeniowego, co znacznie przyspiesza wzrost roślin.
              </div>
            </div>
          </div>

          <div className="kit-item">
            <div className="item">
              <div className="main-desc-kit">Nasiona</div>
              <div className="desc mt-20">
                W naszych zestawach używamy profesjonalnego podłoża
                organicznego, w skład którego wchodzi mieszanka oczyszczonej
                gleby, perlit, kompostu, worm humus oraz specjalną startową
                porcję składników odżywczych. Podłoże zawiera minimalnie 70%
                składników pochodzenia organicznego, nawóz w podłożu posiada
                bezpośrednie działanie wspomagające nadzwyczajny rozwój korzenia
                i silnych pędów, podczas gdy przyspieszony metabolizm w
                połączeniu z małym występowaniem chorób zapewnia podwyższona
                produkcję.
              </div>
            </div>
            <hr className="hr-text" />
            <div className="item">
              <div className="main-desc-kit ">Hydrożel / Agrożel</div>
              <div className="desc mt-20">
                Czyli skała wulkaniczna w kolorze białym, idealny do wysiewania
                nasion. Doskonale spulchnia i napowietrza ziemię oraz reguluje
                jej wilgotność stwarzając optymalne warunki do rozwoju systemu
                korzeniowego, co znacznie przyspiesza wzrost roślin.
              </div>
            </div>
          </div>

          <div className="kit-item kit-seed">
            <div className="item">
              <img
                src="../img/nasiona.jpg"
                alt=""
                className="kit-img-full positon-2 "
              />
              <img
                src="../img/kit/hydrozel_1.png"
                alt=""
                className="kit-img-full position-1 "
              />
            </div>
          </div>
          <div className="kit-item kit-fertilizer">
            <div className="item">
              <img
                src="../img/kit/paleczki_2.png"
                alt=""
                className="kit-img-full"
              />
            </div>
          </div>

          <div className="kit-item">
            <div className="item">
              <div className="main-desc-kit">Keramzyt</div>
              <div className="desc mt-20">
                Służy głównie do napowietrzania ziemi i pochłaniania nadmiaru
                wody w korzeniach (z tego powodu wsypujemy go na spód doniczki)
                jest przystowany do stosowania w ogrodnictwie, więc nie stwarza
                zagrożenia dla naszej rośliny. W zestawie znajduje się jedno
                opakowanie, dopasowane objętościowo dla naszej doniczki.
              </div>
            </div>
            <hr className="hr-text" />
            <div className="item">
              <div className="main-desc-kit">Pałeczki nawozowe</div>
              <div className="desc mt-20">
                W zestawie znajdują się pałeczki nawozowe przeznaczone na cały
                cykl roczny, dzięki czemu nie ma potrzeby dokupywania
                dodatkowych nawozów w celu dokończenia uprawy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitDesc;
