# FORMULACIÓN DE PROYECTOS 

BASES ADMINISTRATIVAS PARA LA PREPARACIÓN DE LA PROPUESTA 

Versión 1.0 Fecha Documento: 18-08-2026 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

## Bases Administrativas 

Bases para la preparación de la propuesta técnico-económica 

|Asignatura|TallerdeFormulacióndeProyectosInformáticos—ICI-5444|
|---|---|
|Unidadacadémica|EscueladeInformática,PontificiaUniversidadCatélicadeValparaiso|
|Profesor|AntonioMoyaVillegas—antonio.moya<br>O<br>pucv.cl|
|ra|Diseño,desarrollo,implementación,puestaenmarchayoperacióndeuna<br>plataformadigitaldemisióncrítica|
|Alcancedeldocumento|Comúnyobligatorioparalastreceindustriasdelllamado|
|Modalidad|LicitaciónPúblicaInternacional—etapaúnica,tressobres|
|Duracióndelcontrato|56meses:implementaciónendosetapasy36mesesdeoperación|
|Documentocomplementario|BasesTécnicasdelcasoasignadoacadaempresaproponente|
|Versión|1.0—agostode2026|



Este documento contiene las condiciones administrativas, contractuales y transversales que rigen la licitación para la totalidad de las empresas proponentes, cualquiera sea la industria del caso que se les haya asignado. Las condiciones funcionales y técnicas propias de cada industria se establecen en las Bases Técnicas correspondientes. 

Su lectura íntegra es obligatoria. La sola presentación de una oferta implica la aceptación incondicional de todo su contenido. 

### CONTENIDO 

|1-Disposicionesgenerales|i-%|i13|
|---|---|---|
|II-Objeto, alcanceyrequisitostransversalesobligatorios|35|14°-30°|
|Il-Requisitosycondicionesdeparticipación|6-8|31°-40°|
|IV-Procesodelicitación|9=12|41°-53°|
|V-Evaluaciónyadjudicación|13-17|54*—66%|
|VI-Contrataciónyejecucién|18-22|67°-82°|
|VIl-Disposicionesespeciales|23-26|83°-94°|
|VIl-Anexos<br>yformularios|A-C|TSOTSO<br>E-21aE-26|



Bases Administrativas TFEP-01/2026 1/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

###### Cómo está organizado este documento 

Los Títulos | y III a VII contienen el articulado administrativo y contractual habitual de un proceso de licitación: quién puede participar, qué garantías debe rendir, cómo se presenta la oferta, cómo se evalúa, cómo se adjudica y bajo qué reglas se ejecuta el contrato. 

El Título I| es distinto y merece atención especial. Contiene el objeto de la contratación, el cronograma contractual obligatorio de 56 meses, el modelo de despliegue híbrido exigido, los requisitos transversales que toda solución debe satisfacer con independencia de la industria, y la exigencia de innovación. Es el título que define el nivel técnico mínimo del llamado. 

El Título VIII reúne los formularios. Los del Anexo A integran el Sobre N* 1, los del Anexo B el Sobre N* 2 y los del Anexo C el Sobre N* 3. 

Advertencia sobre el nivel de exigencia de estas Bases. 

El CLIENTE ha optado deliberadamente por un pliego exigente. Los requisitos de arquitectura, seguridad, continuidad, calidad y operación que contiene el Capítulo 4 no son aspiracionales: son el estándar con que hoy se contratan plataformas de misión crítica en la industria. Una propuesta que los aborde de manera superficial no será competitiva, con independencia de su precio. 

Bases Administrativas TFEP-01/2026 2/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### DISPOSICIONES GENERALES 

#### CAPÍTULO 1 - ANTECEDENTES Y MARCO NORMATIVO 

###### ARTÍCULO 1°. IDENTIFICACIÓN DE LA LICITACIÓN 

1.1 La presente Licitación Pública Internacional, identificada como LICITACIÓN N* TFEP-01/2026, tiene por objeto la contratación del diseño, desarrollo, integración, implementación, puesta en marcha, soporte y operación de una plataforma digital de misión crítica, en adelante «el PROYECTO», conforme a las especificaciones administrativas contenidas en las presentes Bases y a las especificaciones funcionales, técnicas y de industria contenidas en las Bases Técnicas del caso asignado a cada PROPONENTE. 

1.2 El CLIENTE ha estructurado este llamado bajo la modalidad de licitación por caso. A cada PROPONENTE se le asigna una industria y un caso específico, cuyas Bases Técnicas se publican como documento separado e integrante de este proceso. Las presentes Bases Administrativas y Tecnología Transversales son comunes, íntegras y obligatorias para la totalidad de los casos e industrias del llamado, sin excepción. 

1.3 La solución objeto del PROYECTO deberá representar el estado del arte de la industria en materia de arquitectura, seguridad, resiliencia, automatización y experiencia de usuario. El CLIENTE no aceptará propuestas construidas sobre tecnología descontinuada, sin soporte vigente del fabricante, o cuya arquitectura no admita evolución, escalamiento ni sustitución de componentes. 

###### ARTÍCULO 2°. ENTIDAD CONVOCANTE 

2.1 Para todos los efectos de las presentes Bases, la entidad convocante se denominará «el CLIENTE». El CLIENTE actúa como mandante, dueño del PROYECTO y contraparte técnica y administrativa durante los procesos de licitación, evaluación, adjudicación, contratación, ejecución, operación y cierre. 

2.2 El CLIENTE ejercerá sus facultades a través de la Comisión Evaluadora, del Administrador del Contrato y de la Contraparte Técnica, según se define en estas Bases. 

###### ARTÍCULO 3°. DEFINICIONES 

Para la correcta interpretación de las presentes Bases, de las Bases Técnicas y del Contrato, se establecen las siguientes definiciones, las que prevalecen sobre cualquier otro uso que los PROPONENTES den a los mismos términos: 

|Término|p<br>n|
|---|---|
|ADJUDICATARIO|PROPONENTEaquienseadjudicalalicitaciónmedianteactoformaldelCLIENTE.|
|ALTADISPONIBILIDAD|Capacidaddelasolucióndemantenerelservicioantelafalladeunoomásdesus<br>-<br>NS<br>ey<br>;<br>;<br>componentes,sinintervenciónmanualysinpérdidadetransaccionescomprometidas.|
|AMBIENTE|Instanciacompletaeindependientedelasolución.ElPROYECTOexige,comomínimo,<br>losambientesdeDesarrollo,QA,PreproducciónyProducción,máselambientede<br>RecuperaciónanteDesastres.|
|BASES|ConjuntointegradoporlasBasesAdministrativas,lasBasesTécnicasdelcaso,sus<br>;<br>-<br>p<br>anexos,formularios, aclaracionesymodificaciones.|



Bases Administrativas TFEP-01/2026 3/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

|CONSORCIO|Agrupaciéndedosomáspersonasjurídicasquepresentanunaofertaconjuntabajo<br>responsabilidadsolidaria.<br>|
|---|---|
|CONTRAPARTETÉCNICA|EquipodesignadoporelCLIENTEparavalidarentregables,aprobaravancestécnicosy<br>a<br>3<br>emitirconformidades.|
|CONTRATO|InstrumentoqueperfeccionalaadjudicaciónyregulalarelaciónentreelCLIENTEyel<br>ADJUDICATARIO.|
|ETAPA1|PrimeralcancefuncionalydeinfraestructuradelPROYECTO,definidoenlasBases<br>E<br>0<br>Técnicasdelcaso,cuyodesarrolloseejecutaentreelmes1yelmes12.|
|ETAPA2|SegundoalcancefuncionaldelPROYECTO,definidoenlasBasesTécnicasdelcaso,cuyo<br>desarrollo seejecutaentreelmes13yelmes18inclusive.|
|HITO|Puntoverificabledelcronogramacontractualasociadoaentregables,criteriosde<br>aceptacióny,cuandocorresponda,aunpago.|
|INNOVACIÓN|Solución,práctica,tecnologíaomodelonuevoosignificativamentemejoradorespecto<br>delaoperaciónactual delCLIENTE,formuladaconformealCapítulo5deestasBases.|
|MARCHABLANCA|PeríododeOF?rac!onsupervlsadadelasf)/lucloncondyatosyusuariosrea{es,en;?a'ralelo<br>conlaoperaciónvigente,sinquelasoluciónseatodavíaelsistemaderegistrooficial.|
|MITR|Tiempomedioderestauracióndelservicio,medidodesdeladeteccióndelincidente<br>hastalarestituciónverificadadelaoperación.|
|OFERENTEo<br>PROPONENTE|Personajuridica,consorcioounióntemporalquepresentaunapropuestaenelproceso.<br>U<br>b<br>[FHRICERE<br>(E<br>&<br>-|
|ON-PREMISE|Componentesdelasolucióndesplegadoseninstalaciones,centrosdedatosobordes<br>operacionalesbajocontrolfísicodelCLIENTE.|
|OPERACIÓN|Fasedesoporte,mantenciónyoperacióncontinuadelaplataforma,de 36mesesde<br>duración,queseiniciaenelmes21.|
|PRODUCCIÓN|Estadoenqu'elasoluflonccnstlt}:yeelsistemaderegistrooficialdelprocesodenegocio<br>ysusdatostienenvalidezoperativa,contableylegal.|
|R|Conjuntodeservicios,productos,entregables,licencias,infraestructurayobligaciones<br>objetodelapresentelicitación.|
|RPO|Puntoobjetivoderecuperación:máximapérdidadedatostolerada,expresada en<br>unidadesdetiempo.|
|RTO|Tiempoobjetivoderecuperación:máximotiempotolerado pararestituirelserviciotras<br>unainterrupciónmayor.|
|SLA/SLO/SLI<br>|Acuerdo,objetivo eindicadordeniveldeservicio,respectivamente,conformeala<br>.<br>P<br>definicióndeITIL<br>4 eISO/IEC20000-1.<br> <br>|
|T|<br>Arquitecturaenquelacargaprincipalseejecutaennubepública yexistencomponentes<br>obligatoriosdesplegadoson-premise,integradoscomounúnicosistemagobernado.<br>|
|ZEROTRUST|Modelodeseguridadenqueningunared,dispositivo,identidadocargadetrabajoes<br>confiablepordefecto, ytodasolicitudseautentica,autoriza ycifradeformaexplícita.|



Bases Administrativas TFEP-01/2026 4 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

###### ARTÍCULO 4°. MARCO LEGAL, NORMATIVO Y DE ESTÁNDARES 

4.1 La presente licitación y el Contrato que de ella derive se regirán por: 

1. Las presentes Bases Administrativas, sus anexos, aclaraciones y modificaciones. 

2. Las Bases Técnicas del caso asignado y sus anexos. 

- 8: La legislación chilena vigente y aplicable. 4 . La Ley N* 19.886 de Bases sobre Contratos Administrativos de Suministro y Prestación de Servicios y su reglamento, en lo que resulte aplicable. 

- . Los principios de igualdad de los oferentes, libre concurrencia, estricta sujeción a las bases, transparencia y probidad. 

4.2 El PROPONENTE declara conocer y obligarse a cumplir, en lo que le resulte aplicable, la siguiente normativa nacional: 

- Ley N* 21.719 sobre Protección de Datos Personales y la institucionalidad de la Agencia de Protección de Datos Personales; y, mientras mantenga vigencia, la Ley N* 19.628. 

- Ley N* 21.663, Ley Marco de Ciberseguridad e Infraestructura Crítica de la Información, y las 

- instrucciones de la Agencia Nacional de Ciberseguridad, cuando el caso corresponda a un servicio 

- esencial u operador de importancia vital. 

- Ley N* 21.459 sobre Delitos Informáticos. 

- Ley N* 19.799 sobre Documentos Electrónicos y Firma Electrónica. 

- Ley N* 20.393 sobre Responsabilidad Penal de las Personas Juridicas y Ley N* 21.595 de Delitos Económicos. 

- Ley N* 20.422 sobre igualdad de oportunidades e inclusión social de personas con discapacidad. 

- Legislación laboral, previsional, tributaria, aduanera y ambiental vigente. 

- Normativa sectorial específica que las Bases Técnicas del caso identifiquen para la industria 

- correspondiente. 

4.3 La solución ofertada deberá diseñarse, construirse y operarse conforme a los siguientes estándares y marcos de referencia, cuyo cumplimiento el PROPONENTE deberá acreditar explicitamente en su Oferta Técnica: 

|Ami|Estándaromarcoexigido|
|---|---|
|Seguridaddelainformación|ISO/IEC27001eISO/IEC27002;1SO/IEC27017(nube);ISO/IEC27018(datos<br>|personales ennube);NISTCybersecurityFramework2.0;NISTSP800-207(Zero<br>Trust).|
|Seguridaddelsoftware|OWASPASVS4.0nivel2comomínimo;OWASPTop10yOWASPAPISecurityTop10;<br>OWASPSAMMparaelproceso;CISBenchmarksparaelendurecimientodesistemas.|
|Cadenadesuministrode<br>software|SLSAnivel3osuperior;SBOMenformatoCycloneDXoSPDXporcadaartefacto<br>liberado;firmadeartefactosyverificacióndeprocedencia.|
|Continuidaddelnegocio|1SO22301paraelsistemadegestióndecontinuidad;ISO/IEC27031parala<br>continuidadTIC.|
|Gestióndeservicios|1SO/IEC20000-1;prácticasITIL4;principiosdeSiteReliabilityEngineering.|
|Calidaddelproducto<br>software|ISO/IEC25010eISO/IEC25012paracalidaddedatos;ISO/IEC/IEEE29119para<br>pruebas.|



Bases Administrativas TFEP-01/2026 5/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

|Ámbito||
|---|---|
|Arquitectura|ISO/IEC/IEEE42010paradescripcióndearquitectura;TOGAFoequivalentedeclarado<br>-<br>a<br>paraelmarcodegobiernoarquitectónico.|
|Gestiónd<br>t<br>nOprovecios|PMBOKGuide(PMI)comomarcobase,complementadoconprácticaságilesdondeel<br>PROPONENTE<br>lojustifique.|
|Accesibilidad|WCAG2.2nivelAAcomomínimo;EN301549comoreferenciacomplementaria.|
|Interoperabilidad<br>P|OpenAPI3.1paraserviciossincronos;AsyncAPI2.6osuperior paraservicios dirigidos<br>5<br>o<br>_<br>e<br>poreventos;estandaressectorialesqueindiquenlasBasesTécnicas.|
|GestiónderiesgodeIA|NISTAl RiskManagementFramework1.0eISO/IEC42001,cuandolasolución<br>.<br>iN<br>.<br>incorporecomponentesdeinteligenciaartificial|
|Sostenibilidad<br>j|1SO14001comoreferenciaymétricasdeeficienciaenergéticadeclaradas(PUEdel<br>centrodedatos,huelladecarbonoestimada delaoperación).|



La sola mención de un estándar sin evidencia de cómo la solución lo satisface será evaluada con puntaje cero en el criterio respectivo. El CLIENTE exige trazabilidad entre el estándar invocado, el control implementado y el entregable que lo evidencia. 

###### ARTÍCULO 5°. DOCUMENTOS QUE RIGEN LA LICITACIÓN Y ORDEN DE PRECEDENCIA 

5.1 Los documentos que rigen el presente proceso, en estricto orden de precedencia, son: 

   - . Bases Administrativas y sus anexos. 

   - . Bases Técnicas del caso asignado y sus anexos. 

   - . Aclaraciones, respuestas a consultas y modificaciones emitidas formalmente por el CLIENTE. 

   - . Oferta Técnica del PROPONENTE adjudicado. 

   - . Oferta Económica del PROPONENTE adjudicado. 

   - . Resolución de Adjudicación. 

   - . Contrato y sus anexos. 

   - . Informes y presentaciones preparatorias aprobadas. 

- . Otros antecedentes documentados que proporcione el CLIENTE durante el proceso. 

5.2 Los documentos señalados conforman un todo integrado y se complementan recíprocamente. Toda obligación que aparezca en cualquiera de ellos se entenderá parte del Contrato, aunque no se repita en los demás. 

5.3 En caso de discrepancia prevalecerá el orden establecido en el numeral 5.1. Si la discrepancia se produce entre disposiciones de un mismo documento, prevalecerá la más exigente para el ADJUDICATARIO. 

5.4 Si el PROPONENTE detecta una contradicción, un vacio o una ambigiiedad en las Bases, deberá plantearla durante el período de consultas. Presentada la oferta, se entenderá que el PROPONENTE aceptó la interpretación más exigente y no podrá invocar la contradicción como fundamento de mayor precio, mayor plazo o menor alcance. 

Bases Administrativas TFEP-01/2026 6/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

###### ARTÍCULO 6°. INTERPRETACIÓN DE LAS BASES 

6.1 Las Bases se interpretarán conforme a su sentido literal y, en subsidio, conforme a la finalidad del PROYECTO declarada en el Artículo 1°. 

6.2 Las expresiones «deberá», «se exige», «obligatorio» y «como mínimo» constituyen requisitos de cumplimiento forzoso cuya omisión afecta la admisibilidad o el puntaje de la oferta. Las expresiones «podrá», «se valorará» y «deseable» identifican elementos que otorgan puntaje diferenciador, pero no condicionan la admisibilidad. 

6.3 Toda cifra expresada como mínimo se entiende como umbral inferior. Ofertar por debajo de un mínimo constituye incumplimiento; ofertar por sobre él debe justificarse técnica y económicamente. 

###### CAPÍTULO 2 - CONDICIONES GENERALES DEL PROCESO 

###### ARTÍCULO 7°. TIPO Y MODALIDAD DE LICITACIÓN 

1. Tipo: Licitación Pública Internacional. 

2. Modalidad: etapa única con presentación simultánea de Antecedentes Administrativos, Oferta Técnica y Oferta Económica, en sobres separados. 

3. Proceso preparatorio obligatorio: tres informes y tres presentaciones preparatorias con 

   - retroalimentación formal del CLIENTE. 

4. Sistema de evaluación: ponderación de presentaciones preparatorias, evaluación técnica y evaluación económica, conforme al Título V. 

###### ARTÍCULO 8°. IDIOMA OFICIAL 

8.1 El idioma oficial del proceso, de la documentación contractual, de los entregables y de la operación es el español. 

8.2 Podrán presentarse en inglés, sin traducción, los folletos técnicos de fabricante, los catálogos de producto, las certificaciones internacionales y la documentación de referencia de estándares. En caso de discrepancia prevalecerá la versión en español. 

8.3 Toda documentación operativa dirigida a usuarios finales del CLIENTE —manuales, interfaces, mensajes de error, notificaciones y material de capacitación— deberá entregarse integramente en español. 

###### ARTÍCULO 9°. MONEDA, VALORES E IMPUESTOS 

9.1 Las ofertas económicas deberán expresarse simultáneamente en Pesos Chilenos (CLP), Unidades de Fomento (UF) y Dólares de los Estados Unidos de América (USD). 

9.2 Todos los valores deberán presentarse desglosados en valor neto, Impuesto al Valor Agregado y total. Los valores del Contrato se entenderán netos, salvo mención expresa en contrario. 

9.3 Para efectos de evaluación y de conversión entre monedas se utilizarán exclusivamente los parámetros del Formulario E-24. El uso de tipos de cambio distintos constituye causal de observación grave y, si altera el orden de mérito, causal de inadmisibilidad de la oferta económica. 

9.4 Los precios ofertados se entenderán firmes durante la Etapa 1 y la Etapa 2. Para la fase de Operación se admitirá reajustabilidad conforme a lo que el PROPONENTE declare y justifique en su Oferta Económica, la que no podrá superar la variación acumulada del Índice de Precios al Consumidor del período. 

Bases Administrativas TFEP-01/2026 7/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### ARTÍCULO 10°. CÓMPUTO Y CARACTER DE LOS PLAZOS 

1. Los plazos expresados en días se entienden de días hábiles, de lunes a viernes, excluidos los festivos, salvo indicación expresa de días corridos. 

2. Los plazos expresados en meses dentro del cronograma contractual se cuentan desde la fecha de inicio del Contrato, entendiéndose el mes 1 como el primer mes completo de ejecución. 

3. Los plazos del proceso licitatorio son fatales e improrrogables. Su incumplimiento produce la exclusión automática del PROPONENTE, sin necesidad de declaración previa. 

4. Excepcionalmente, y por razones fundadas, el CLIENTE podrá modificar plazos, lo que comunicará a todos los participantes registrados por los canales oficiales. 

###### ARTÍCULO 11°. GASTOS DEL PROCESO 

11.1 Todos los gastos en que incurran los PROPONENTES con motivo del estudio, preparación, presentación y defensa de sus ofertas serán de su exclusivo cargo, cualquiera sea el resultado del proceso. 

11.2 El CLIENTE no efectuará reembolsos ni indemnizaciones por concepto de estudios y análisis, preparación 

de documentación, garantías y seguros, pruebas de concepto, traducciones, legalizaciones, viajes, traslados ni 

asesorías externas. 

###### ARTÍCULO 12°. COMUNICACIONES OFICIALES 

12.1 Toda comunicación del proceso se cursará por escrito, a través del correo electrónico institucional del CLIENTE y del canal formal que se informe al inicio del proceso, dirigido al Representante registrado de cada PROPONENTE. 

12.2 El Representante deberá acusar recibo y entendimiento de toda comunicación dentro de las doce horas siguientes a su envío. La falta de acuse no suspende nialtera los plazos. 

12.3 Las comunicaciones verbales, las conversaciones informales y los mensajes cursados por canales no oficiales no obligan al CLIENTE ni pueden invocarse como fuente de derechos. 

12.4 Es responsabilidad exclusiva del PROPONENTE mantener actualizados los datos de contacto de su Representante. El CLIENTE no responde por comunicaciones no recibidas a causa de datos desactualizados, filtros de correo o buzones sin capacidad. 

###### ARTÍCULO 13°. PROBIDAD, CONFLICTOS DE INTERÉS Y CONDUCTA 

13.1 Los PROPONENTES deberán abstenerse de toda conducta que afecte la libre concurrencia o la igualdad de los oferentes, incluyendo acuerdos de precios, reparto de mercado, presentación de ofertas de acompañamiento y utilización de información privilegiada. 

13.2 El PROPONENTE deberá declarar cualquier vínculo, relación de propiedad, parentesco o dependencia con integrantes de la Comisión Evaluadora o con la contraparte del CLIENTE. La omisión de esta declaración constituye causal de exclusión. 

13.3 Se prohíbe todo contacto con integrantes de la Comisión Evaluadora respecto del contenido de las ofertas fuera de los canales y las instancias formales previstas en estas Bases. 

13.4 La constatación de plagio, de suplantación de autoría, de falsificación de antecedentes o de presentación de información que no corresponda a la realidad producirá la exclusión inmediata del PROPONENTE y la ejecución de la Garantía de Seriedad de la Oferta. 

Bases Administrativas TFEP-01/2026 8/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

13.5 El uso de herramientas de inteligencia artificial generativa en la preparación de la propuesta deberá declararse en el Formulario A-6, indicando en qué secciones se utilizó y con qué finalidad. La declaración no exime al PROPONENTE de la responsabilidad íntegra sobre el contenido, la exactitud y la originalidad de su propuesta. 

Bases Administrativas TFEP-01/2026 9/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### OBJETO, ALCANCE Y REQUISITOS TRANSVERSALES OBLIGATORIOS 

##### CAPÍTULO 3 - OBJETO Y ESTRUCTURA DE LA CONTRATACIÓN 

ARTÍCULO 14°. OBJETO DE LA CONTRATACIÓN 

14.1 El objeto de la contratación es la provisión integral, llave en mano, de una plataforma digital de misión crítica para el proceso de negocio descrito en las Bases Técnicas del caso asignado, incluyendo el diseño de la solución, la construcción del software, la provisión y configuración de la infraestructura, la integración con los sistemas existentes del CLIENTE, la migración de datos, la implantación, la capacitación, la puesta en producción y la operación de la plataforma por 36 meses. 

14.2 El alcance comprende, sin que la enumeración sea taxativa: 

- Arquitectura de solución: arquitectura lógica, arquitectura física, arquitectura de datos, arquitectura de integración, arquitectura de seguridad y arquitectura de despliegue (Según se requiera o se exija en pauta de evaluación). 

- Construcción y configuración del software aplicativo, de sus servicios de integración y de sus componentes de borde. 

- Provisión, dimensionamiento, configuración y endurecimiento de la infraestructura en nube pública y de los componentes on-premise. 

- Provisión de licenciamiento de software de base, de plataforma y de terceros, a nombre del CLIENTE, por todo el período contractual. 

- Especificación técnica del hardware de terreno y de los dispositivos operacionales requeridos, indicando marca, modelo de referencia, cantidad y características mínimas, aun cuando su adquisición sea de cargo del CLIENTE. 

- Migración, saneamiento y validación de los datos históricos que las Bases Técnicas del caso definan. 

- Integraciones con los sistemas internos y externos identificados en las Bases Técnicas del caso. 

- Plan y ejecución de pruebas: unitarias, de integración, de sistema, de aceptación de usuario, de carga, de estrés, de resiliencia, de recuperación ante desastres y de seguridad ofensiva. 

- Implantación, marcha blanca, paso a producción y estabilización. 

- Gestión del cambio organizacional, capacitación y transferencia tecnológica. 

- Soporte, mantención correctiva, preventiva y evolutiva, y operación de la plataforma durante 36 meses. 

- Documentación técnica, operativa y de usuario, y entrega de código fuente y artefactos conforme al Título VIL 

Bases Administrativas TFEP-01/2026 10/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

###### ARTÍCULO 15°. ESTRUCTURA DEL SUMINISTRO 

15.1 El PROYECTO se estructura en tres componentes contractuales indivisibles. No se admiten ofertas parciales ni ofertas que excluyan alguno de estos componentes: 

|Etapa1—<br>Implementación|Alcancefuncional<br>ydeinfraestructuradeprimeraprioridad<br>definidoenlasBasesTécnicasdelcaso,incluidalaplataforma<br>híbridacompleta,laseguridad,laobservabilidadylas<br>integracionescríticas.|Meses1a12(desarrollo);<br>marchablancameses13a<br>15;produccióndesdeel<br>mes16.|
|---|---|---|
|Etapa2—<br>Implementación|SegundoalcancefuncionaldefinidoenlasBasesTécnicasdel<br>caso,construidosobrelaplataformadelaEtapa1sinrehacer<br>suarquitectura.|Meses13a18(desarrollo);<br>marchablancameses19y<br>20;produccióndesdeel<br>mes21.|
||Soporte,mantenciéncorrectiva,preventivayevolutiva,|36mesescontinuos,desde|
|Operaciónysoporte||operacióndelaplataforma,gestióndelainfraestructuray<br>cumplimientodelosnivelesdeservicio.|elmes21hastaelmes56<br>inclusive.|



15.2 La duración total del Contrato es de 56 meses contados desde su fecha de inicio. 

###### ARTÍCULO 16°. MODELO DE DESPLIEGUE HÍBRIDO OBLIGATORIO 

16.1 La solución deberá ser obligatoriamente hibrida: la carga principal se ejecutará en nube pública y existirán componentes desplegados on-premise en las instalaciones u operaciones del CLIENTE. No se admiten propuestas exclusivamente en nube ni exclusivamente on-premise. 

16.2 El PROPONENTE deberá justificar, componente por componente, la decisión de emplazamiento en función de latencia, criticidad operacional, volumen de datos, restricciones regulatorias, disponibilidad de conectividad y costo total de propiedad. Una asignación no justificada será evaluada como observación grave. 

###### 16.3 Exigencias del componente en nube 

- Proveedor de nube pública de alcance global con presencia de región o zona en Chile o en Sudamérica, declarando expresamente la región primaria y la región secundaria utilizadas. 

- Despliegue multi-zona de disponibilidad para todos los componentes con requisito de alta disponibilidad; el diseño en una sola zona no será aceptado. 

- Infraestructura definida como código, versionada, revisable y reproducible en su totalidad. No se admite infraestructura creada manualmente por consola. 

- Segmentación de red por capas, con subredes privadas para las capas de aplicación y de datos, y exposición pública restringida exclusivamente a la capa de borde. 

- Uso de servicios administrados por sobre servicios autoadministrados cuando ello reduzca el riesgo operacional, con justificación explícita en cada caso. 

- Gestión de costos en nube conforme a prácticas FinOps: etiquetado obligatorio de recursos, presupuestos, alertas de desviación y reporte mensual de consumo al CLIENTE. 

- Declaración explícita de la estrategia de reversibilidad y de mitigación del bloqueo por proveedor, identificando qué componentes son portables y cuáles no. 

Bases Administrativas TFEP-01/2026 11/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

###### 16.4 Exigencias del componente on-premise 

- Capacidad de operación autónoma degradada ante la pérdida total del enlace con la nube, por el período mínimo que definan las Bases Técnicas del caso y en ningún caso inferior a 24 horas continuas. 

- Sincronización diferida y reconciliación automática de las transacciones generadas durante la operación desconectada, con resolución determinista de conflictos y bitácora de las decisiones aplicadas. 

- Redundancia de los equipos on-premise criticos y esquema de almacenamiento con tolerancia a la falla de al menos un disco, declarando el nivel RAID y su justificación. 

- Endurecimiento conforme a CIS Benchmarks, gestión centralizada de parches y control de acceso físico y lógico documentado. 

- Monitoreo del componente on-premise integrado a la misma plataforma de observabilidad que la nube, sin puntos ciegos. 

- Enlace de comunicaciones redundante entre el sitio on-premise y la nube, con caminos y proveedores 

- distintos, y conmutación automática. 

El CLIENTE evaluará expresamente la coherencia entre la arquitectura lógica, la arquitectura física y la estructura de costos. Una arquitectura correcta cuyo costo no la refleje, o un costo correcto sin arquitectura 

que lo sustente, serán calificados como incoherencia grave de la propuesta. 

###### ARTÍCULO 17°. CRONOGRAMA CONTRACTUAL OBLIGATORIO 

17.1 El cronograma que se establece a continuación es obligatorio, indivisible y no negociable. Toda oferta que proponga plazos distintos será declarada inadmisible. 

|Mes|Fase|Contenidoobligatori|
|---|---|---|
|2-7|Etapa:1Desartollo|Levantamientoylíneabasedealcance,diseñodearquitectura,construcción,<br>integraciones,migracióndedatos,habilitacióndelosambientesDEV,QA,<br>PREPRODyPROD,pruebasintegrales,pruebas deseguridadycertificación<br>delasolución.|
|1315|Etapa1-Marchablanca|Tresmesesdeoperaciónsupervisadacondatosyusuariosreales,en<br>|convivenciaconlaoperaciónvigentedelCLIENTE,conplandereversión<br>activoymedicióndiariadeindicadores.|
|16|Etapa1-Producción|LaEtapa1pasaaproduccióny seconvierteenelsistemaderegistrooficial<br>paithpasai<br>prodiceiany<br>8<br>delalcancecomprometido.|
|13-18|Etapa2-Desarrollo|Desarrollodelsegundoalcancefuncional,enparaleloconlamarchablancay<br>laestabilizacióndelaEtapa1,sindegradarlosnivelesdeservicio<br>comprometidos.Cierre deldesarrolloenelmes18inclusive.|
|10-55|Etapa2-Marchablanca||0O5mesesdeoperaciónsupervisadadelaEtapa2,conviviendoconlaEtapa<br>1enproducción,conintegridaddedatosgarantizadaentreambosalcances.|
|21|Eraa2ARt|!.aEtapa2pa.slaaproducción.AceptaciónfinaldelPROYECTOde<br>implementación.|
|21-56|Operación|36mesescontinuosdesoportedelaplataformaydelaoperación,bajolos<br>P<br>G<br>v<br>"<br>,<br>nivelesdeserviciodelArtículo78°.|



Bases Administrativas TFEP-01/2026 12/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

17.2 Reglas de solapamiento y convivencia: 

1. Entre los meses 13 y 15 coexisten la marcha blanca de la Etapa 1 y el desarrollo de la Etapa 2. El PROPONENTE deberá dimensionar dotación y frentes de trabajo suficientes para ambos esfuerzos y demostrarlo en la nivelación de recursos del Formulario T-15. 

2. Entre los meses 19 y 20 coexisten la Etapa 1 en producción y la Etapa 2 en marcha blanca. La solución deberá garantizar una única fuente de verdad para los datos compartidos por ambos alcances y evitar toda doble digitación. 

3. El paso a producción de la Etapa 2 en el mes 21 no podrá degradar la disponibilidad, el desempeño ni la integridad de los datos de la Etapa 1. 

4. El inicio de la fase de Operación en el mes 21 es simultáneo al paso a producción de la Etapa 2 y comprende ambos alcances desde el primer día. 

17.3 Condiciones de cierre de cada marcha blanca. Una marcha blanca sólo se dará por concluida y habilitará el paso a producción cuando, de manera copulativa: 

- No existan incidentes abiertos de severidad critica ni alta atribuibles a la solución. 

- Se haya alcanzado el volumen de operación real comprometido en el plan de implantación, durante al menos las cuatro últimas semanas del período. 

- Los indicadores de disponibilidad y de tiempo de respuesta comprometidos se hayan cumplido de forma sostenida durante ese mismo período. 

- La conciliación entre la solución y el sistema o registro vigente no presente diferencias no explicadas. 

- El personal del CLIENTE haya sido capacitado y certificado conforme al plan de capacitación aprobado. 

- La Contraparte Técnica haya suscrito el acta de aceptación correspondiente. 

Si al término del período de marcha blanca no se satisfacen las condiciones anteriores, el ADJUDICATARIO deberá extender la marcha blanca a su costo, sin cargo adicional para el CLIENTE, sin desplazar las fechas contractuales de las fases siguientes y quedando afecto a las multas por atraso del Artículo 80°. 

###### ARTÍCULO 18°. HITOS CONTRACTUALES Y CRITERIOS DE ACEPTACIÓN 

18.1 Los hitos contractuales, sus entregables y su ponderación en la estructura de pagos se establecen en el Formulario E-25. Cada hito se entiende cumplido únicamente con la suscripción del acta de aceptación por parte de la Contraparte Técnica. 

18.2 Todo entregable sometido a aceptación deberá incorporar: el documento o artefacto en sí, la evidencia objetiva de su verificación, la trazabilidad hacia los requerimientos que satisface y el registro de las observaciones previas resueltas. 

18.3 El CLIENTE dispondrá de diez días hábiles para revisar cada entregable y pronunciarse. Formuladas observaciones, el ADJUDICATARIO dispondrá de diez días hábiles para subsanarlas. La segunda presentación de un entregable con observaciones de la misma naturaleza se considerará atraso imputable al ADJUDICATARIO. 

18.4 La aceptación de un entregable no libera al ADJUDICATARIO de su responsabilidad por defectos posteriores, ni convalida incumplimientos de requisitos que se detecten con posterioridad. 

Bases Administrativas TFEP-01/2026 13 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### CAPÍTULO 4 - REQUISITOS TRANSVERSALES OBLIGATORIOS DE LA SOLUCIÓN 

Los requisitos de este Capítulo son exigibles a la totalidad de los casos e industrias del llamado, se suman a los requisitos específicos de las Bases Técnicas y deben acreditarse expresamente en la Oferta Técnica. Cuando las Bases Técnicas del caso establezcan una exigencia superior, prevalecerá esta última. 

###### ARTÍCULO 19°. ARQUITECTURA Y DISEÑO 

- Arquitectura modular, con límites de contexto explícitos, acoplamiento débil entre módulos y contratos de interfaz versionados. Se rechazará toda arquitectura monolítica sin capacidad de despliegue independiente de sus componentes críticos. 

- Descripción de la arquitectura conforme a ISO/IEC/IEEE 42010, con vistas lógica, de procesos, de 

- despliegue, de datos y de seguridad, y con registro de decisiones de arquitectura (ADR) fechado y fundado. 

- Capa de integración explícita y gobernada, con catálogo de servicios, control de versiones de contratos, política de compatibilidad hacia atrás y desacoplamiento mediante mensajería asíncrona donde el proceso lo admita. 

- Idempotencia obligatoria en todas las operaciones de escritura expuestas a reintentos, y garantía de entrega al menos una vez con deduplicación en los flujos de eventos. 

- Diseño para la degradación elegante: ante la indisponibilidad de un componente no crítico, la solución debe seguir operando en modo reducido y no fallar de forma total. 

- Patrones de resiliencia implementados y demostrables: reintento con retroceso exponencial, 

- cortacircuitos, mamparos de aislamiento, límites de tasa y tiempos de espera explícitos en toda llamada remota. 

- Escalamiento horizontal automático de las capas de aplicación e integración, con umbrales, límites superiores y costo asociado declarados. 

- Ausencia de estado en la capa de aplicación; el estado de sesión y el estado de proceso deben residir en almacenes externos con alta disponibilidad. 

- Multi-tenencia o capacidad de replicar la solución a nuevas unidades, sitios o filiales del CLIENTE sin rediseño, cuando las Bases Técnicas del caso lo señalen. 

###### ARTÍCULO 20°. DISPONIBILIDAD, CONTINUIDAD Y RECUPERACIÓN ANTE DESASTRES 

- Disponibilidad mensual mínima de 99,9 % para los servicios clasificados como críticos, medida sobre la transacción de negocio de extremo a extremo y no sobre la disponibilidad de la infraestructura. 

- Objetivo de tiempo de recuperación (RTO) máximo de 4 horas y objetivo de punto de recuperación (RPO) máximo de 15 minutos para los servicios críticos, salvo exigencia superior de las Bases Técnicas del caso. 

- Sitio o región secundaria de recuperación ante desastres, con replicación continua de datos y 

- procedimiento de conmutación documentado y automatizable. 

- Prueba de recuperación ante desastres al menos semestral durante la fase de Operación, con ejecución real de la conmutación, informe de resultados y plan de corrección de las brechas detectadas. 

- Política de respaldo con esquema 3-2-1-1-0: tres copias, en dos medios, una fuera de sitio, una inmutable o fuera de línea y cero errores de verificación de restauración. 

- Respaldos cifrados en reposo y en tránsito, con retención declarada, con copias inmutables protegidas contra borrado y con prueba de restauración documentada al menos mensual. 

Bases Administrativas TFEP-01/2026 14 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

- Plan de continuidad del negocio conforme a ISO 22301, con análisis de impacto en el negocio, escenarios de contingencia y procedimientos manuales de respaldo para el período de indisponibilidad. 

- Mantenimientos programados fuera de la ventana operacional crítica que definan las Bases Técnicas del caso, con aviso previo mínimo de diez días hábiles y con capacidad de despliegue sin interrupción del servicio. 

###### ARTÍCULO 21°. SEGURIDAD DE LA INFORMACIÓN Y CIBERSEGURIDAD 

###### 21.1 Principios y gobierno 

- Arquitectura de seguridad basada en Zero Trust conforme a NIST SP 800-207: verificación explícita de cada solicitud, privilegio mínimo y presunción de compromiso. 

- Seguridad incorporada desde el diseño y por defecto, con modelado de amenazas documentado (STRIDE o equivalente) por cada componente y por cada integración externa. 

- Clasificación de la información del CLIENTE y controles diferenciados por nivel de clasificación. 

- Programa de gestión de vulnerabilidades con plazos máximos de remediación: 7 días corridos para vulnerabilidades críticas, 15 días para altas, 30 días para medias, contados desde su publicación o detección. 

###### 21.2 Protección de la capa expuesta 

- Publicación exclusiva a través de una capa de borde con red de distribución de contenidos, cortafuegos de aplicaciones web con reglas gestionadas y personalizadas, y protección contra denegación de servicio distribuida en capas 3, 4 y 7. 

- Cifrado en tránsito con TLS 1.3, prohibición de TLS 1.0 y 1.1, conjuntos de cifrado modernos, HSTS con precarga y gestión automatizada de certificados con rotación y alerta anticipada de vencimiento. 

- Cifrado en reposo de la totalidad de los datos, con claves gestionadas en un servicio de gestión de claves o módulo de seguridad de hardware, política de rotación declarada y separación de funciones en la custodia de claves. 

- Puerta de enlace de servicios (API gateway) con autenticación, autorización, cuotas, límites de tasa, validación de esquema e inspección de carga útil. 

- Protección de bots y de abuso automatizado en los puntos de entrada públicos, con reto progresivo y sin degradar la accesibilidad. 

###### 21.3 Detección, respuesta y evidencia 

- Registro centralizado e inalterable de eventos de seguridad, con retención mínima de doce meses en línea y veinticuatro meses adicionales en archivo recuperable. 

- Correlación de eventos en una plataforma SIEM, con casos de uso de detección definidos para el proceso de negocio del caso y no sólo genéricos de infraestructura. 

- Detección y respuesta en puntos finales y en cargas de trabajo, tanto en nube como on-premise. 

- Plan de respuesta a incidentes de seguridad con clasificación, cadena de escalamiento, plazos, 

- responsables y protocolo de comunicación al CLIENTE dentro de las dos horas de detectado un incidente de severidad crítica. 

- Obligación de notificar al CLIENTE toda brecha de seguridad y de datos personales en un plazo no superior a 24 horas desde su detección, con informe preliminar, y de entregar el análisis de causa raíz dentro de los cinco días hábiles siguientes. 

Bases Administrativas TFEP-01/2026 15/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

- Pruebas de intrusión anuales por un tercero independiente del ADJUDICATARIO, y previas a cada paso a producción, con entrega íntegra del informe al CLIENTE y plan de remediación con plazos. 

###### 21.4 Seguridad del ciclo de desarrollo 

- Análisis estático de código, análisis de composición de software, análisis dinámico y escaneo de imágenes de contenedor integrados en el flujo de integración continua, con criterios de bloqueo automático del despliegue. 

- Inventario de componentes de software (SBOM) por cada versión liberada, en formato CycloneDX o SPDX, entregado al CLIENTE. 

- Firma de artefactos y verificación de procedencia conforme a SLSA nivel 3 o superior. 

- Prohibición absoluta de credenciales, claves o secretos embebidos en el código, en imágenes o en 

- archivos de configuración; uso obligatorio de un gestor de secretos con rotación automática. 

- Prohibición de utilizar datos productivos reales en ambientes no productivos sin anonimización o seudonimización verificable. 

###### ARTÍCULO 22°. IDENTIDAD, ACCESO Y GESTIÓN DE SESIONES 

- Gestión de identidad centralizada, con federación mediante OpenlD Connect y OAuth 2.1, o SAML 2.0 cuando la integración con el CLIENTE lo requiera, e integración con el directorio corporativo del CLIENTE por LDAP o su equivalente en la nube. 

- Inicio de sesión único para todos los módulos de la solución y cierre de sesión propagado. 

- Autenticación multifactor obligatoria para usuarios administradores, para accesos privilegiados y para 

- todo acceso desde fuera de la red corporativa; se valorará el soporte de factores resistentes a la suplantación de identidad (FIDO2 o claves de acceso). 

- Control de acceso basado en roles, complementado con control basado en atributos donde el proceso lo exija, y matriz de segregación de funciones documentada y verificable. 

- Gestión de accesos privilegiados con acceso a demanda, elevación temporal, aprobación y grabación de sesión para las operaciones de mayor riesgo. 

- Política de sesión declarada: duración máxima, caducidad por inactividad, renovación de credenciales de sesión tras la autenticación, revocación inmediata y control de sesiones concurrentes. 

- Credenciales de sesión firmadas y de vida breve, con credencial de refresco rotatoria; prohibición de transportar identificadores de sesión en la ruta de la dirección web. 

- Registro de auditoría de identidad: creación, modificación, elevación y baja de cuentas, con retención y no repudio. 

- Procedimiento de aprovisionamiento y desaprovisionamiento automatizado ligado al ciclo de vida laboral del usuario, con baja efectiva en un plazo no superior a 24 horas desde la desvinculación. 

- Autenticación adecuada al perfil de usuario operacional descrito en las Bases Técnicas del caso, considerando entornos de terreno, guantes, baja alfabetización digital y dispositivos compartidos. 

###### ARTÍCULO 23°. DATOS, INTEGRACIÓN E INTEROPERABILIDAD 

- Modelo de datos documentado, normalizado donde corresponda y con diccionario de datos entregable, incluyendo linaje y propietario de cada dominio de información. 

- Trazabilidad completa de las operaciones de negocio: toda transacción debe permitir reconstruir quién, qué, cuándo, desde dónde y con qué valores anteriores y posteriores. 

Bases Administrativas TFEP-01/2026 16/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

- Calidad de datos conforme a ISO/IEC 25012, con reglas de validación en el punto de captura, indicadores de completitud y exactitud, y proceso de saneamiento de los datos migrados. 

- Interfaces de programación documentadas en OpenAPI 3.1 y, para los flujos por eventos, en AsyncAPI, con versionado semántico y política de obsolescencia con preaviso mínimo de seis meses. 

- Capacidad de exportar la totalidad de la información del CLIENTE en formatos abiertos y documentados, en cualquier momento del Contrato y sin costo adicional. 

- Separación entre el almacenamiento transaccional y el analítico, con una capa analítica que no degrade el desempeño de la operación. 

- Retención, archivado y eliminación de datos conforme a la normativa aplicable y a la política que el CLIENTE apruebe, con procedimiento verificable de eliminación segura. 

- Residencia de datos declarada y sujeta a aprobación del CLIENTE; toda transferencia internacional de datos personales deberá contar con base de licitud y resguardos conforme a la Ley N* 21.719. 

###### ARTÍCULO 24°. INGENIERÍA, DEVSECOPS Y CALIDAD 

- Cuatro ambientes obligatorios — Desarrollo, QA, Preproducción y Producción— aislados entre sí, con 

- Preproducción equivalente en topología y configuración a Producción. 

- Integración y entrega continuas con despliegues automatizados, reversión automatizada y ausencia de intervención manual en el paso a producción. 

- Estrategia de despliegue sin interrupción del servicio: azul-verde, canario o despliegue progresivo, 

- declarada y demostrada en Preproducción antes de cada paso a producción. 

- Control de versiones con revisión obligatoria por pares, ramas protegidas y trazabilidad entre 

- requerimiento, cambio de código, prueba y despliegue. 

- Cobertura de pruebas automatizadas mínima del 70 % en el código de lógica de negocio, con umbral 

- bloqueante en el flujo de integración continua, y batería de pruebas de regresión automatizada. 

- Pruebas de carga y de estrés ejecutadas sobre Preproducción con volúmenes equivalentes a 1,5 veces el peak declarado en las Bases Técnicas del caso, con informe de resultados y plan de capacidad. 

- Pruebas de resiliencia mediante inyección controlada de fallas, al menos antes de cada paso a producción 

- y una vez por semestre durante la Operación. 

- Gestión explícita de la deuda técnica, con registro, cuantificación y presupuesto asignado en la planificación de la Operación. 

- Criterios de calidad conforme a ISO/IEC 25010 con umbrales numéricos declarados para funcionalidad, desempeño, compatibilidad, usabilidad, fiabilidad, seguridad, mantenibilidad y portabilidad. 

###### ARTÍCULO 25°. OBSERVABILIDAD, OPERACIÓN Y NIVELES DE SERVICIO 

- Observabilidad completa y unificada de nube y on-premise: métricas, registros y trazas distribuidas 

- correlacionadas por identificador único de transacción, con instrumentación conforme a OpenTelemetry. 

- Tableros operacionales y de negocio disponibles para el CLIENTE, con indicadores de nivel de servicio medidos sobre la experiencia real del usuario. 

- Alertamiento basado en síntomas de negocio y no sólo en umbrales de infraestructura, con supresión de ruido, escalamiento automático y turnos de disponibilidad declarados. 

- Mesa de servicio con canal único de registro, clasificación por severidad, seguimiento del ciclo de vida del incidente y reporte mensual de cumplimiento. 

Bases Administrativas TFEP-01/2026 17 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

- Libros de operación y guías de resolución documentados para cada escenario de falla previsible, con automatización progresiva de las tareas repetitivas. 

- Gestión de problemas con análisis de causa raíz obligatorio para todo incidente crítico, informe entregable dentro de cinco días hábiles y seguimiento de las acciones correctivas. 

- Presupuesto de error declarado por servicio y su vinculación con el ritmo de despliegue de cambios. 

- Gestión de la capacidad con proyección trimestral de crecimiento, alertas anticipadas de agotamiento y propuesta de ajuste de dimensionamiento y de costo. 

###### ARTÍCULO 26°. ACCESIBILIDAD, USABILIDAD Y SOSTENIBILIDAD 

- Cumplimiento de WCAG 2.2 nivel AA en todas las interfaces destinadas a personas usuarias, verificado con herramientas automatizadas y con pruebas manuales, e informe de conformidad entregable. 

- Diseño centrado en las personas usuarias reales del caso, con investigación de usuario, prototipado y pruebas de usabilidad con participantes del CLIENTE antes de la construcción definitiva. 

- Indicadores de usabilidad medibles y comprometidos: tiempo máximo de la transacción operacional crítica, número máximo de pasos, tasa de error tolerada y curva de aprendizaje esperada. 

- Soporte para personas usuarias con baja alfabetización digital y para condiciones de terreno adversas cuando el caso lo requiera: alto contraste, objetivos táctiles amplios, operación con guantes, uso a la intemperie y funcionamiento sin conexión. 

- Compatibilidad declarada de navegadores y de dispositivos, con política de soporte de versiones. 

- Eficiencia energética y sostenibilidad: dimensionamiento ajustado a la demanda, apagado de ambientes no productivos fuera de horario, elección de regiones con menor intensidad de carbono cuando sea viable y estimación de la huella de la operación. 

- Gestión responsable del ciclo de vida del hardware especificado, incluyendo recomendaciones de reacondicionamiento y disposición final. 

###### ARTÍCULO 27°. CUMPLIMIENTO NORMATIVO, AUDITORÍA Y DERECHO DE INSPECCIÓN 

- Matriz de cumplimiento normativo por cada obligación legal y sectorial aplicable al caso, indicando el control implementado y la evidencia que lo acredita. 

- Registro de actividades de tratamiento de datos personales, evaluación de impacto en protección de datos cuando corresponda, y designación de una contraparte responsable de la materia. 

- Derecho del CLIENTE a auditar, por sí o por terceros independientes, la solución, los procesos, los controles de seguridad y las instalaciones del ADJUDICATARIO y de sus subcontratistas, con aviso previo de cinco días hábiles y sin costo para el CLIENTE. 

- Entrega anual al CLIENTE de los informes de certificación vigentes del ADJUDICATARIO y de sus 

- proveedores de nube, y notificación inmediata de toda pérdida o suspensión de una certificación. 

- Conservación de la evidencia de cumplimiento por todo el período contractual y por veinticuatro meses adicionales. 

Bases Administrativas TFEP-01/2026 18 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### CAPÍTULO 5 - EXIGENCIA DE INNOVACIÓN 

###### ARTÍCULO 28°. CARTERA OBLIGATORIA DE CINCO INNOVACIONES 

28.1 Cada PROPONENTE deberá formular, justificar y valorizar cinco innovaciones en su propuesta técnicoeconómica, una por cada tipo obligatorio. No se admiten dos innovaciones del mismo tipo, ni innovaciones enunciadas sin justificación técnica y sin valorización económica. 

28.2 Las innovaciones deberán ser pertinentes a la industria del caso asignado y trazables con la arquitectura, con la estructura de descomposición del trabajo y con el flujo de caja de la propuesta. 

|N*|Tipodeinnovación|QuédebedemostrarelPROPONENTE|
|---|---|---|
|1|Producto oservicio|Funcionalidadoservicionuevo,osignificativamentemejoradorespectodela<br>operaciónactualdelCLIENTE.Debedeclararseelbeneficioparaelusuariofinal<br>yelindicadorconqueseverificará.|
|2|Proceso|Cambioenlaformadeejecutarelprocesodenegocio,oelprocesode<br>desarrollo yoperación(automatización,integración,autoservicio,DevOps),con<br>lamejora esperadaentiempo,tasadeerrorocostounitario.|
|3|Tecnológicaode<br>arquitectura|Adopcióndeunatecnologíao de unpatrónarquitectónicovigente(nube,<br>datos,inteligenciaartificial,integraciónoseguridad),justificadaconestándares<br>yfuentescitadasennormaAPA7.2 ed.,indicandosuniveldemadurezyel<br>riesgodeadopción.|
|e|Modelodenegocioode<br>contratación|Cambioenlaformadegenerarocapturarvalor:modelodelicenciamiento,<br>pagoporuso,serviciosgestionados,nivelesdeserviciooesquemade<br>escalamiento.Debequedarreflejadoenlaestructuradecostosyenelflujode<br>caja.|
|5|Experienciadeusuario,<br>sostenibilidadoimpacto<br>social|Mejoraverificableenaccesibilidad,usabilidad,inclusión,eficienciaenergéticao<br>impactoambientalysocialdelasolución,coherenteconlasrestriccionesdel<br>contextodelcaso.|



###### ARTÍCULO 29°. DOCUMENTACIÓN EXIGIDA POR CADA INNOVACIÓN 

Para cada una de las cinco innovaciones, el PROPONENTE deberá presentar, en el Formulario T-19, los siguientes elementos. La omisión de cualquiera de ellos reduce la innovación a un enunciado y será evaluada como tal: 

1. Problema u oportunidad concreta del caso que la innovación resuelve, con el dato o la evidencia que dimensiona el problema. 

2. Tecnología, práctica o modelo que la sustenta, descrita con preci ón técnica y no como categoría genérica. 

3. Nivel de madurez de la tecnología o práctica, con la escala utilizada y las fuentes citadas en norma APA 7.2 edición. 

4. Diseño de la incorporación: dónde se inserta en la arquitectura, qué paquetes de la estructura de descomposición del trabajo la ejecutan y en qué mes del cronograma se materializa. 

5. Impacto económico estimado: inversión requerida, efecto en el costo operacional y beneficio esperado, reflejado en el flujo de caja de la propuesta. 

6. Indicador de verificación del beneficio, con línea base, meta y momento de medición. 

Bases Administrativas TFEP-01/2026 19/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

7. Riesgo de adopción, su probabilidad, su impacto, la estrategia de mitigación y el plan de contingencia si la innovación no rinde lo esperado. 

###### ARTÍCULO 30*%. EVALUACIÓN Y EXIGIBILIDAD DE LAS INNOVACIONES 

30.1 Las innovaciones se evalúan en el subdocumento correspondiente de la Oferta Técnica y, en su dimensión económica, en el Entregable 2 de la Oferta Económica. 

30.2 El CLIENTE valorará especialmente la pertinencia al caso por sobre la novedad tecnológica en abstracto. Una innovación de alta sofisticación técnica que no resuelva un problema real del caso obtendrá menor puntaje que una innovación sencilla, bien justificada y con impacto verificable. 

30.3 Las innovaciones comprometidas en la propuesta adjudicada forman parte del alcance contractual y son exigibles como cualquier otro requerimiento. Su omisión durante la ejecución será tratada como incumplimiento del alcance. 

No se aceptará como innovación: la sola adopción de una tecnología que ya constituye estándar de la industria; la mención de una tendencia sin diseño de incorporación; ni una funcionalidad exigida por las Bases Técnicas presentada como innovación. 

Bases Administrativas TFEP-01/2026 20/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### REQUISITOS Y CONDICIONES DE PARTICIPACIÓN 

#### CAPÍTULO 6 - PARTICIPANTES 

###### ARTÍCULO 31°. QUIENES PUEDEN PARTICIPAR 

31.1 Podrán participar en esta licitación personas juridicas nacionales o extranjeras, consorcios o asociaciones de empresas y uniones temporales de proveedores, que cumplan copulativamente los requisitos de estas Bases. 

31.2 Los participantes deberan: 

- Tener giro social compatible con el objeto de la licitación. 

- Acreditar la idoneidad técnica y financiera exigida en el Artículo 34°. 

- No encontrarse afectos a las prohibiciones e inhabilidades del Articulo 32°. 

- Registrarse formalmente como participantes dentro del plazo del calendario, designando un Representante único con poder suficiente. 

- Aceptar integramente las Bases, sin reservas, condicionamientos ni contrapropuestas. 

31.3 Cada PROPONENTE participa respecto del caso e industria que el CLIENTE le asigne. No se admite 

presentar oferta para un caso distinto del asignado, ni presentar más de una oferta por caso. 

###### ARTÍCULO 32°. PROHIBICIONES E INHABILIDADES 

No podrán participar, y serán excluidos en cualquier etapa del proceso, quienes: 

- Se encuentren en alguna de las situaciones del Artículo 4* de la Ley N* 19.886. 

- Tengan vigente declaratoria de quiebra, liquidación concursal o se encuentren en procedimiento de reorganización judicial. 

- Registren incumplimientos contractuales graves con el CLIENTE en los últimos tres años. 

- Mantengan litigios pendientes con el CLIENTE relativos a materias contractuales. 

- Hayan sido sancionados por infracciones laborales, previsionales o tributarias graves en los últimos dos años. 

- Hayan sido condenados conforme a la Ley N* 20.393 o a la Ley N* 21.595 por delitos que afecten la 

- probidad, salvo cumplimiento íntegro de la pena y acreditación de un modelo de prevención certificado. 

- Presenten conflictos de interés no declarados con integrantes de la Comisión Evaluadora o con la contraparte del CLIENTE. 

- Hayan incurrido en las conductas prohibidas del Artículo 13°. 

###### ARTÍCULO 33°. CONSORCIOS Y UNIONES TEMPORALES 

Los consorcios y uniones temporales deberán: 

1. Designar un representante único con poder suficiente para obligar a todos sus integrantes. 

2. Establecer responsabilidad solidaria e indivisible entre todos sus integrantes respecto de la totalidad de las obligaciones del Contrato. 

Bases Administrativas TFEP-01/2026 21/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

3. Presentar promesa de constitución formal, exigible en caso de adjudicación, con plazo de constitución no superior a quince días hábiles desde la notificación. 

4. Indicar la participación porcentual de cada integrante y el aporte técnico concreto de cada uno. 

5. Mantener su composición durante todo el proceso; la sustitución de un integrante requiere autorización previa y escrita del CLIENTE y sólo procede por causa grave. 

Ningún integrante podrá participar en más de un consorcio ni, simultáneamente, de forma individual en la misma licitación. La experiencia y la capacidad se evaluarán considerando la suma de los integrantes, con la ponderación que la Comisión Evaluadora determine según el aporte declarado. 

###### ARTÍCULO 34°. REQUISITOS HABILITANTES DE IDONEIDAD TÉCNICA Y FINANCIERA 

34.1 Constituyen requisitos habilitantes, cuyo incumplimiento produce la inadmisibilidad de la oferta sin evaluación técnica: 

||imo<br>Requi|Acreditación|
|---|---|---|
|Experienciageneral||Acreditar<br>al<br>t<br>ctos<br>**d**e<br>software<br>**d**e<br>misi**ó** <br>creditaralmenostresproyectosesoftwaree misi n—<br> críticafinalizadosy enoperaciónenlosúltimoscinco<br>años.|[L<br>e<br>verificablesdecontraparte.|
|Experiencia<br>específica|Almenosunproyectoconarquitecturahíbrida(nubemás<br>on-premise)yunproyectoconoperaciónbajoacuerdode<br>niveldeserviciodedisponibilidadigualosuperiora99,5<br>%.|FormularioT-6ycartade<br>referenciadelmandante.|
|Capacidadde<br>equipo|Equipoclavecompletoynominado,condedicación<br>declarada,quecubraalmenoslosrolesdeJefede<br>Proyecto,ArquitectodeSolución,EncargadodeSeguridad<br>delaInformación,LíderdeDatos,LíderdeCalidadyLíder<br>deOperación.|FormularioT-8concurrículosy<br>cartasdecompromiso.|
|Certificaciones<br>institucionales|CertificaciónvigenteenISO/IEC27001o,ensudefecto,<br>plandecertificaciónconhitosverificablesdentro delos<br>primerosdocemesesdelContrato.|Certificadooplanformalfirmado<br>porelrepresentantelegal.|
|Capacidadde<br>proveedordenube|Condicióndesociodelproveedordenubeofertado,o<br>acuerdoformalcon unsociocertificadoqueparticipedel<br>PROYECTO.|Certificadodelproveedorocarta<br>decompromisodelsocio.|
|Solvencia<br>"<br>.<br>financiera|Estadosfinancierosdelosúltimostresejercicioscon<br>,<br>5<br>oo<br>"<br>_<br>patrimoniopositivo,ycapacidaddeconstituirlas<br>,<br>,<br>garantíasdelCapítulo7.|Estadosfinancierosycertificado<br>.<br>-<br>.<br>bancariodecapacidaddeemisión.|
|Cumplimiento<br>laboral|"<br>-<br>,<br>2<br>Sindeudasprevisionalesnisancioneslaboralesgraves<br>-<br>vigentes.|CertificadodelaDireccióndel<br>.<br>"<br>TrabajoyBoletínLaboraly<br>Previsional.|



34.2 El CLIENTE se reserva el derecho de verificar directamente con las contrapartes declaradas la efectividad de la experiencia informada. La constatación de información no veraz produce la exclusión inmediata y la ejecución de la Garantía de Seriedad de la Oferta. 

Bases Administrativas TFEP-01/2026 22/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### CAPÍTULO 7 - GARANTÍAS Y SEGUROS 

###### ARTÍCULO 35°. GARANTÍA DE SERIEDAD DE LA OFERTA 

35.1 Cada PROPONENTE deberá entregar una Boleta de Garantía de Seriedad de la Propuesta, tomada en un banco comercial con oficinas en Valparaíso, Chile, a la vista, irrevocable, no endosable y a la orden del CLIENTE, expresada en Dólares de los Estados Unidos de América, por la cantidad de quinientos mil dólares (USD 500.000). 

35.2 Glosa obligatoria: «Boleta de Garantía de Seriedad de la Oferta para la Licitación Internacional N* TFEP01/2026». 

35.3 Vigencia: mínimo ciento cincuenta (150) días corridos contados desde la fecha de entrega de la propuesta, renovable antes de su vencimiento por períodos de a lo menos treinta y cinco (35) días, manteniendo su vigencia durante todo el proceso y hasta el décimo día hábil siguiente a la fecha de inicio del Contrato. 

35.4 El CLIENTE podrá hacer efectiva esta garantía, sin necesidad de declaración judicial previa, en cualquiera de los siguientes casos: 

- Que se compruebe que cualquiera de los antecedentes entregados por el PROPONENTE no corresponde a la realidad. 

- Que el PROPONENTE se desista de su propuesta o la retire unilateralmente sin motivo fundado y 

- aceptado por el CLIENTE. 

- Que el PROPONENTE no concurra a una instancia obligatoria del proceso sin justificación. 

- Que el ADJUDICATARIO no entregue la Garantía de Fiel Cumplimiento en el plazo establecido. 

- Que el ADJUDICATARIO no suscriba el Contrato dentro del plazo máximo fijado. 

35.5 La garantía se presentará en original, en el Sobre N* 1, en la fecha y hora del Calendario de Actividades (Formulario T-20). Será devuelta a los PROPONENTES no adjudicados a partir del undécimo día hábil siguiente a la firma del Contrato con el ADJUDICATARIO. 

###### ARTÍCULO 36°. GARANTÍA DE FIEL CUMPLIMIENTO DEL CONTRATO 

36.1 El ADJUDICATARIO deberá entregar una Boleta de Garantía de Fiel Cumplimiento del Contrato, tomada en un banco comercial con oficinas en Valparaíso, Chile, a la vista, irrevocable y a la orden del CLIENTE, conforme a las siguientes condiciones: 

|Instrumento<br>|Boletabancaria,valevistaodepósitoa plazoendosadoalaordendelCLIENTE.<br>|
|---|---|
|Monto<br>|USD1.000.000(un millóndedólaresdelosEstadosUnidosdeAmérica).<br>|
|Beneficiario<br>|ElCLIENTE.<br>|
|Glosa<br>|«GarantíadeFielCumplimientodelContrato—ProyectoTFEP-01/2026».<br>|
|leeel<br>|DesdelafirmadelContratoyhastadoce(12)mesesposterioresaltérminodelafasede<br>Operación.<br>|
|Plazodeentrega<br>|Dentro delosdiez(10)díashábilessiguientesalanotificacióndelaadjudicación.<br>|
|Ea|ReemplazaalaGarantíadeSeriedaddelaOferta,laquesedevolveráunavezrecibida<br>conforme.|



Bases Administrativas TFEP-01/2026 23/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

36.2 Esta garantía caucionará el cumplimiento íntegro y oportuno de todas las obligaciones del Contrato, incluidas las obligaciones laborales y previsionales del ADJUDICATARIO y de sus subcontratistas, y el pago de multas. 

36.3 Si el CLIENTE hiciera efectiva parcialmente esta garantía, el ADJUDICATARIO deberá reconstituirla por el monto total dentro de los diez días hábiles siguientes. Su no reconstitución constituye causal de término anticipado del Contrato por incumplimiento grave. 

###### ARTÍCULO 37°. GARANTÍA DE CORRECTO FUNCIONAMIENTO 

37.1 Al término de la fase de implementación y como condición para la aceptación final del mes 21, el ADJUDICATARIO deberá constituir una Garantía de Correcto Funcionamiento equivalente al cinco por ciento (5 %) del valor total de la fase de implementación, con vigencia de veinticuatro (24) meses. 

37.2 Esta garantía caucionará la corrección de defectos que se manifiesten con posterioridad a la aceptación final y que sean imputables al diseño, la construcción o la implantación de la solución. 

###### ARTÍCULO 38°. SEGUROS 

El ADJUDICATARIO deberá mantener vigentes, durante toda la ejecución del Contrato, y acreditar anualmente ante el CLIENTE, al menos las siguientes coberturas: 

|Responsabilidadcivilgeneraly<br>profesional|UF20.000por eventoyenelagregadoanual.|Todaladuracióndel<br>Contrato.|
|---|---|---|
|Ciberriesgoyresponsabilidadpor <br>datos||UF20.000,concoberturadegastosdenotificación,<br>análisisforenseyrestitucióndedatos.|Todaladuracióndel<br>oty<br>olen<br>.<br>posteriores.|
|Todoriesgodeequiposyblenes||Valordereposicióndelosequiposprovistosu<br> |<br>.«eninstalacionesdelCLIENTE.|Desdelainstalación<br>hastalaentregafinal.|
|Accidentesdeltrabajoy<br>responsabilidadpatronal|Conformealalegislaciónvigente.|Todaladuracióndel<br>Contrato.|



Bases Administrativas TFEP-01/2026 24 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### CAPÍTULO 8 - REQUISITOS ADMINISTRATIVOS Y FORMALES 

###### ARTÍCULO 39°. DOCUMENTACIÓN ADMINISTRATIVA OBLIGATORIA 

Los PROPONENTES deberán presentar, en el Sobre N* 1, la totalidad de los siguientes antecedentes: 

###### 1. Identificación y antecedentes legales 

- Formulario A-1: Identificación del Proponente y de su Representante. 

- Fotocopia legalizada ante notario de la cédula de identidad del representante legal. 

- Rol Único Tributario de la empresa. 

- Certificado de vigencia de la sociedad, con antigliedad no superior a 30 días. 

- Fotocopia legalizada ante notario de la patente comercial al día. 

- Escritura de constitución y sus modificaciones. 

- Poderes vigentes del representante legal. 

- Individualización completa de los socios y, en caso de consorcio, de sus integrantes y su porcentaje de participación. 

###### 2. Antecedentes financieros 

- Certificado de deudas tributarias. 

- Estados financieros auditados de los últimos tres ejercicios. 

- Certificado de antecedentes comerciales. 

- Boletín Laboral y Previsional de la Dirección del Trabajo. 

- Certificado bancario que acredite capacidad de emisión de las garantías exigidas. 

###### 3. Declaraciones juradas ante notario 

- Formulario A-2: no afectación por las prohibiciones del Artículo 4° de la Ley N* 19.886 y del Artículo 32° de estas Bases. 

- Declaración de no encontrarse en quiebra ni en reorganización judicial. 

- Formulario A-3: aceptación íntegra e incondicional de las Bases. 

- Formulario A-4: declaración de ausencia de conflictos de interés. 

- Constitución de domicilio en la ciudad de Valparaíso. 

###### 4. Antecedentes técnicos habilitantes 

- Carta de presentación del PROPONENTE con la nómina de contratos suscritos por servicios similares. 

- Cartas compromiso de socios tecnológicos, subcontratistas y proveedores clave. 

- Formulario A-5: presentación e índice de antecedentes. 

- Formulario A-6: declaración de uso de herramientas de inteligencia artificial generativa. 

- Certificaciones institucionales y de fabricante vigentes. 

Bases Administrativas TFEP-01/2026 25/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

###### ARTÍCULO 40°. REQUISITOS DE FORMA Y PRESENTACIÓN 

40.1 Foliación. Todas las páginas deberán numerarse correlativamente, sin saltos ni páginas sin numeración, en zona visible del extremo inferior derecho. La falta de foliación es requisito excluyente y produce la exclusión automática. 

40.2 Firmas. Media firma del representante legal o apoderado en el extremo inferior derecho de cada página, y firma completa en la carátula y en los documentos principales. 

40.3 Índices. Hoja resumen al inicio de cada sobre, con indicación del folio inicial de cada sección y correspondencia exacta con la foliación. 

40.4 Formato de los documentos digitales: 

|Elemento|Exigencia|
|---|---|
|Formato|PDFcontextoseleccionableparalosdocumentos;XLSXparaelmodelofinanciero;los<br>documentos1y2delaOfertaEconómicaademásenDOCX.|
|Tamañodepágina|Cartauoficio,orientaciónvertical,salvoanexosgraficosquepodránserhorizontales.|
|Tipografía|Cuerponoinferiora11puntos;entablasyfiguras,noinferiora9puntos.|
|Índice|Índicedetalladoconnumeracióndepáginasencadadocumento.|
|Referencias|NormaAPA7.2ediciónparatodacitayreferenciabibliográfica.|
|Nomenclatura|Conformea losArtículos49*a51°.Unarchivomalnominadoseconsideraránopresentado.|
|Tamañomáximo|500MBporsobredigital;losarchivosmayoresdeberánsegmentarseydeclararseenel<br>e_<br>indice.|



El CLIENTE no revisará documentos que no consten en el índice, que no estén foliados, que estén protegidos por contraseña no informada o que no puedan abrirse con las herramientas estándar declaradas. 

La carga de la correcta presentación recae integramente en el PROPONENTE. 

Bases Administrativas TFEP-01/2026 26/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

#### PROCESO DE LICITACIÓN 

##### CAPÍTULO 9 - OBTENCIÓN DE BASES Y CALENDARIO 

###### ARTÍCULO 41°. ADQUISICIÓN DE LAS BASES Y REGISTRO DE PARTICIPANTES 

41.1 Las Bases Administrativas, las Bases Técnicas del caso y sus anexos estarán disponibles sin costo desde la fecha indicada en el Calendario de Actividades (Formulario T-20). 

41.2 Todo interesado deberá registrarse como participante indicando razón social, Rol Único Tributario, nombre del Representante, correo electrónico y teléfono de contacto. Sólo los participantes registrados recibirán las comunicaciones oficiales, las aclaraciones y las modificaciones. 

41.3 La no recepción de una comunicación por no haberse registrado, o por datos de contacto erróneos, no suspende plazos ni genera derecho alguno para el participante. 

###### ARTÍCULO 42°. CALENDARIO DEL PROCESO 

El Calendario de Actividades es el establecido en el Formulario T-20 de estas Bases. Sus fechas son obligatorias para todos los participantes y sólo podrán modificarse por comunicación formal del CLIENTE. 

##### CAPÍTULO 10 - CONSULTAS Y ACLARACIONES 

###### ARTÍCULO 43°. PERÍODO DE CONSULTAS 

43.1 Las consultas deberán formularse exclusivamente durante el período establecido en el Formulario T-20, por escrito y a través del canal oficial. 

43.2 Formato obligatorio. Las consultas se presentarán en una planilla con la siguiente estructura: 

|A|Númerocorrelativodelaconsulta|
|---|---|
|B|Nombredelaempresaproponente|
|c|Fechadelaconsulta|
|D|Tipo:Administrativa,TécnicaoAnexo.|
|E|Documento,sección,artículoypáginaaqueserefiere.|
|F|Consultadetallada,formulada demaneraconcretayprecisa.|
|G|Propuestadeinterpretacióndelproponente,silatuviere.|



43.3 Nomenclatura del archivo: CONSULTAS_[EMPRESA]_AAAAMMDD.XLSX 

43.4 El CLIENTE responderá únicamente las consultas pertinentes al proceso, concretas y precisas, y que no involucren información confidencial ni exijan al CLIENTE diseñar la solución en lugar del PROPONENTE. 

Bases Administrativas TFEP-01/2026 27 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

43.5 Las respuestas se consolidarán en un Acta de Respuestas a Consultas, de conocimiento público para todos los participantes registrados, que pasará a formar parte integrante de las Bases con la precedencia del Artículo 5°. Las consultas se publicarán sin identificar a la empresa que las formuló. 

Una consulta bien formulada es en si misma un antecedente de calidad profesional. El CLIENTE registra qué empresas identifican vacíos, contradicciones y riesgos en las Bases, y qué empresas se limitan a solicitar aclaraciones sobre materias explícitamente resueltas en el texto. 

###### ARTÍCULO 44°. ACLARACIONES Y MODIFICACIONES DE OFICIO 

44.1 El CLIENTE podrá emitir aclaraciones de oficio hasta cinco días hábiles antes del cierre de recepción de ofertas. 

44.2 El CLIENTE podrá modificar las Bases hasta cinco días corridos antes de la recepción de ofertas. Toda modificación se notificará a los participantes registrados, formará parte integrante de las Bases y, cuando su entidad lo justifique, se acompañará de una prórroga del plazo de presentación. 

###### CAPÍTULO 11 - INFORMES Y PRESENTACIONES PREPARATORIAS 

###### ARTÍCULO 45°. OBLIGATORIEDAD Y CARACTERÍSTICAS 

45.1 Con el objeto de asegurar que las propuestas cumplan los objetivos definidos por el CLIENTE, se realizarán tres informes y tres presentaciones preparatorias por cada PROPONENTE, en las fechas del Formulario T-20. 

|Aspecto|Condición|
|---|---|
|Carácter|Obligatorio.Lanopresentaciónimplicalaexclusiónautomáticadelprocesodeadjudicación.|
|Modalidad|Privada,conlacontrapartedelCLIENTEylosrepresentantesdelaempresa.|
|Duración|15minutosdeexposicióny15minutos depreguntasydiscusión,salvoindicacióndistinta.|
|Agenda|Cerrada.EncadapresentaciónsóloseabordaránlostemasdefinidosenelFormularioT-22.|
|Participación|Deberáexponermásde unintegrantedelequipo;elCLIENTE podrádesignarquiénexponecada<br>-<br>sección.|
|Entregableprevio|Elinformeescritodeberáentregarseenlafechadelcalendario,conanterioridadala<br>de<br>presentación.|



###### ARTÍCULO 46°. CONTENIDO DE LAS PRESENTACIONES PREPARATORIAS 

El contenido exigido en cada instancia se detalla en el Formulario T-22. Cada informe deberá incorporar, además, la resolución explícita de las observaciones formuladas en la instancia anterior, mediante una tabla de trazabilidad observación—respuesta—sección modificada. 

###### ARTÍCULO 47°. EFECTOS DE LAS OBSERVACIONES 

47.1 Las observaciones formuladas por el CLIENTE en una instancia preparatoria son vinculantes. Su no incorporación en la propuesta final será evaluada como observación grave en el criterio afectado. 

47.2 Las presentaciones preparatorias ponderan un diez por ciento del puntaje final, conforme al Artículo 62°. 

47.3 La retroalimentación del CLIENTE no constituye aprobación de la solución ni traslada al CLIENTE responsabilidad alguna sobre las decisiones técnicas del PROPONENTE. 

Bases Administrativas TFEP-01/2026 28/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### CAPÍTULO 12 + RECEPCIÓN Y APERTURA DE OFERTAS 

###### ARTÍCULO 48°. PRESENTACIÓN DE OFERTAS 

48.1 Las ofertas se presentarán en tres sobres separados e independientes, en la fecha y hora exactas del Formulario T-20. No se recibirán ofertas fuera de plazo, cualquiera sea la causa. 

|N*1|AntecedentesadministrativosyGarantíadeSeriedaddelaOferta.|Físico,foliado yfirmado,más<br>.<br>respaldodigital.|
|---|---|---|
|N2|OfertaTécnicaconformealFormularioT-7.|Electrónico.|
|N°3|OfertaEconómicaconformealFormularioE-21.|Electrónico.|



48.2 La entrega de los tres sobres es simultánea y copulativa. La falta de cualquiera de ellos hace inadmisible la oferta en su conjunto. 

###### ARTÍCULO 49°. SOBRE N* 1 — ANTECEDENTES ADMINISTRATIVOS 

49.1 Carátula del sobre físico, en la que deberá leerse: 

LICITACIÓN N* TFEP-01/2026 

Proyecto de Plataforma Digital de Misión Crítica — Caso [N.* y nombre de la industria] 

SOBRE N* 1: ANTECEDENTES DEL OFERENTE 

[Nombre del Proponente] 

[Nombre del Representante Legal] 

[Correo electrónico y teléfono del Representante] 

49.2 Contenido: la totalidad de los documentos del Artículo 39°, la Boleta de Garantía de Seriedad en original, el índice con folio de inicio de cada sección y los documentos foliados y firmados. 

49.3 Respaldo digital: SOBRE1_[EMPRESA]_ANTECEDENTES_OFERENTE_AAAAMMDD.ZIP, con los documentos 

escaneados y con firmas y folios visibles. 

###### ARTÍCULO 50°. SOBRE N* 2 — OFERTA TÉCNICA 

50.1 Contenido obligatorio conforme al Formulario T-7 y a los formularios técnicos del Anexo B. 

50.2 Restricción absoluta: la Oferta Técnica no podrá contener información de precios, tarifas, valores unitarios ni cifra alguna que permita inferir el monto de la oferta económica. Su inclusión es causal de exclusión inmediata. 

###### 50.3 Nomenclatura: SOBRE2_[EMPRESA]_OFERTA_TECNICA_AAAAMMDD.ZIP 

###### ARTÍCULO 51°. SOBRE N* 3 — OFERTA ECONÓMICA 

51.1 Contenido obligatorio conforme al Formulario E-21, comprendiendo los tres entregables allí definidos. 

51.2 Formato: valores en CLP, UF y USD; valores netos; IVA desglosado; totales por ítem y total general; tipo de cambio del Formulario E-24. 

###### 51.3 Nomenclatura: SOBRE3_[EMPRESA]_OFERTA_ECONOMICA_AAAAMMDD.ZIP 

Bases Administrativas TFEP-01/2026 29 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

51.4 Los valores contenidos en los tres entregables de la Oferta Económica deberán ser idénticos entre sí y coherentes con la Oferta Técnica. Toda discrepancia no explicada es causal de descalificación. 

###### ARTÍCULO 52°. ACTO DE APERTURA 

1. Apertura del Sobre N* 1 en la fecha de recepción: verificación de la Garantía de Seriedad, revisión de la documentación administrativa y levantamiento de acta con las observaciones detectadas. 

2. Exclusión, en el mismo acto, de las ofertas que no cumplan los requisitos esenciales o los requisitos habilitantes del Articulo 34°. 

3. Custodia de los Sobres N* 2 y N* 3, que permanecerán cerrados hasta las respectivas etapas de evaluación. 

4. Apertura del Sobre N* 2 al inicio de la evaluación técnica, con levantamiento de acta. 

5. Apertura del Sobre N* 3 únicamente respecto de los PROPONENTES que hayan obtenido puntaje técnico igual o superior a 60, con levantamiento de acta de los montos ofertados. 

###### ARTÍCULO 53°. CAUSALES DE INADMISIBILIDAD DE LA OFERTA 

Serán declaradas inadmisibles, sin evaluación posterior, las ofertas que incurran en cualquiera de las siguientes causales: 

- Presentación fuera del plazo, de la hora o del lugar establecidos. 

- Ausencia de cualquiera de los tres sobres. 

- Ausencia, insuficiencia o defecto formal de la Garantía de Seriedad de la Oferta. 

- Falta de foliación o de firma en los términos del Articulo 40°. 

- Incumplimiento de cualquiera de los requisitos habilitantes del Artículo 34°. 

- Inclusión de información económica en la Oferta Técnica. 

- Proposición de plazos distintos del cronograma contractual obligatorio del Artículo 17°. 

- Propuesta de arquitectura exclusivamente en nube o exclusivamente on-premise, en contravención del Articulo 16°. 

- Oferta condicionada, con reservas, alternativas no solicitadas o sujeta a contrapropuesta de las Bases. 

- Discrepancias no explicadas entre los tres entregables de la Oferta Económica. 

- Información falsa, adulterada o que no corresponda a la realidad. 

- Ausencia de la cartera completa de cinco innovaciones exigida en el Artículo 28”. 

La inadí lidad opera de pleno derecho y se declarará en acta fundada. El CLIENTE no está obligado a otorgar plazo de subsanación respecto de estas causales. 

Bases Administrativas TFEP-01/2026 30/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

### EVALUACIÓN Y ADJUDICACIÓN 

##### CAPÍTULO 13 - PROCESO DE EVALUACIÓN 

###### ARTÍCULO 54°. COMISIÓN EVALUADORA 

54.1 La evaluación estará a cargo de una Comisión Evaluadora designada por el CLIENTE, asesorada por una Comisión de Expertos cuya misión es analizar, evaluar y ordenar las ofertas según el cumplimiento de los requerimientos planteados. 

54.2 Son atribuciones de la Comisión: 

- Evaluar las ofertas conforme a los criterios establecidos en estas Bases. 

- Solicitar aclaraciones a los PROPONENTES, sin que ello permita modificar, mejorar ni completar la oferta 

- presentada. 

- Verificar directamente la información declarada, incluyendo contacto con las contrapartes de los proyectos informados. 

- Elaborar el informe de evaluación con la fundamentación de cada puntaje asignado. 

- Recomendar la adjudicación, la adjudicación parcial o la declaración de licitación desierta. 

54.3 Los integrantes de la Comisión deberán declarar la ausencia de conflictos de interés respecto de todos los 

PROPONENTES. 

###### ARTÍCULO 55*%. EVALUACIÓN ADMINISTRATIVA 

55.1 Consiste en la verificación del cumplimiento de los requisitos formales y habilitantes. 

55.2 Errores formales subsanables. El CLIENTE podrá otorgar un plazo de veinticuatro horas para subsanar errores estrictamente formales que no afecten la igualdad de los oferentes ni el contenido de la oferta. No son subsanables las garantías, la foliación, la firma, los documentos esenciales ni los requisitos habilitantes. 

55.3 Las ofertas que no cumplan los requisitos esenciales serán declaradas inadmisibles conforme al Artículo 53° y no pasarán a evaluación técnica. 

##### CAPÍTULO 14 - EVALUACIÓN TÉCNICA 

###### ARTÍCULO 56°. ESCALA Y CRITERIOS DE ASIGNACIÓN DE PUNTAJE 

56.1 Cada ítem del índice de la Oferta Técnica será evaluado en una escala de 0 a 100 puntos, conforme al siguiente criterio: 

|100|Elítemcumplecontodolosolicitado,sinobservaciones.|
|---|---|
|90|Elítemcumplecontodolosolicitado,con unaobservaciónmenor.|
|80|Elítemcumpleconlosolicitado,peropresentadosobservaciones.|



Bases Administrativas TFEP-01/2026 31/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

|70|Elítemcumpleconlosolicitado,peropresentamásde dosobservaciones,ounaobservacióngrave.|
|---|---|
|60|Elítemcumpleconelminimorequerido.|
|50|Elítemcumpleconelmínimorequerido,peropresentaobservaciones.|
|40|Elítemmencionalevementelosolicitado,ocumpleelmínimoconobservacionesgraves.|
|20|Elítemsólosemenciona,sinexplicaciónqueaportevalor.|
|o|Elítemnoseencuentra,onorespondealosolicitado.|



56.2 Se entenderá por observación menor una imprecisión que no afecta la viabilidad de la solución; por observación grave, un error que compromete la coherencia técnica, la factibilidad, la seguridad o la trazabilidad de la propuesta. 

56.3 Criterios de comparación entre ofertas. Dentro de cada ítem, la mejor propuesta obtendrá 100 puntos, las intermedias se interpolarán y el cumplimiento mínimo obtendrá 60 puntos. Para cumplimiento inferior al exigido, la propuesta más alta del grupo obtendrá 60 puntos y las restantes se interpolarán entre 21 y 59, correspondiendo 0 al incumplimiento total. 

##### ARTÍCULO 57°. PONDERACIÓN POR ÍTEM Y PUNTAJE TÉCNICO 

57.1 La ponderación de cada ítem de la Oferta Técnica es la establecida en el Formulario T-21. El puntaje técnico corresponde a la suma de los puntajes de cada ítem multiplicados por su ponderación. 

57.2 El CLIENTE evaluará de forma transversal, y podrá descontar puntaje en cualquier ítem, la coherencia entre las secciones de la propuesta. En particular se verificará que: 

- La arquitectura declarada sostenga el alcance comprometido y esté reflejada en la estructura de costos. 

- La estructura de descomposición del trabajo contenga la totalidad del alcance, incluidas las innovaciones y las actividades de seguridad, calidad, migración e implantación. 

- El cronograma sea consistente con la estructura de descomposición del trabajo, con la nivelación de recursos y con el cronograma contractual obligatorio. 

- La dotación y los perfiles del equipo sean coherentes con las horas hombre estimadas y con la curva de recursos. 

- Los riesgos identificados correspondan a la solución efectivamente propuesta y no a un catálogo genérico. 

- Los valores del modelo financiero deriven de las cantidades declaradas en la Oferta Técnica. 

###### ARTÍCULO 58°. CONDICIONES DE EXCLUSIÓN EN LA EVALUACIÓN TÉCNICA 

Serán excluidas de la continuación del proceso las ofertas que: 

- Obtengan un puntaje inferior a 30 en cualquier ítem de la evaluación técnica. 

- Obtengan un puntaje técnico ponderado total inferior a 60 puntos. 

- Omitan alguno de los subdocumentos obligatorios del Formulario T-7. 

- No acrediten el cumplimiento de los requisitos transversales obligatorios del Capítulo 4. 

Bases Administrativas TFEP-01/2026 32/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### CAPÍTULO 15 - EVALUACIÓN ECONÓMICA 

###### ARTÍCULO 59°. APERTURA DE LAS OFERTAS ECONÓMICAS 

Sólo se abrirán las ofertas económicas de los PROPONENTES cuyo puntaje técnico ponderado sea igual o superior a 60 puntos. Se levantará acta con los montos ofertados por cada uno. 

###### ARTÍCULO 60*%. DETERMINACIÓN DEL INTERVALO DE CONFIANZA 

60.1 Con el objeto de descartar ofertas anómalas por exceso o por defecto, el CLIENTE determinará un intervalo de confianza sobre el conjunto de los precios admitidos, conforme a la siguiente expresión: 

###### IC=[P-nS, P+nS] 

###### Donde: 

###### Significado 

|1c|Intervalodeconfianzaquedefinelabandadepreciosaceptados.|
|---|---|
|B|Promedioaritméticodelospreciosofertadosporlasofertasadmitidastécnicamente.|
|n|PonderadordeterminadoporelCLIENTEenfuncióndelosdatosdelamuestra.|
|5|Desviaciónestándarmuestraldelospreciosofertados.|



60.2 La desviación estándar se calcula como la raíz cuadrada de la suma de los cuadrados de las diferencias entre cada precio y el promedio, dividida por el número de observaciones menos uno. 

60.3 Las ofertas cuyo precio se sitúe sobre el límite superior o bajo el límite inferior del intervalo serán descartadas del proceso de evaluación económica y obtendrán cero puntos en este criterio. 

El intervalo de confianza protege al CLIENTE de dos riesgos simétricos: el precio inflado y el precio temerariamente bajo. Una oferta muy por debajo del promedio no es una ventaja competitiva, sino una señal de que el alcance no fue comprendido o de que el proyecto no es financieramente sostenible. 

###### ARTÍCULO 61°. ASIGNACIÓN DEL PUNTAJE ECONÓMICO 

61.1 Para las ofertas situadas dentro del intervalo de confianza, el puntaje económico se asignará conforme a la siguiente fórmula: 

Puntaje Precio = 100 — ( 0,5 x ( Valor Oferente — Valor Mínimo ) / Valor Oferente ) x 100 

61.2 El mejor precio dentro del intervalo obtiene 100 puntos. Las ofertas situadas fuera del intervalo obtienen 0 puntos. 

61.3 Para la aplicación de la fórmula se considerará el Valor Total del Proyecto, esto es, la suma del valor de la fase de implementación (Etapas 1 y 2) y del valor de la fase de Operación por los 36 meses, expresado en la moneda de referencia del Formulario E-24. 

Bases Administrativas TFEP-01/2026 33/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### CAPÍTULO 16 - EVALUACIÓN FINAL Y ADJUDICACIÓN 

###### ARTÍCULO 62°. PUNTAJE FINAL 

62.1 El puntaje final se determinará conforme a la siguiente ponderación: 

PUNTAJE FINAL = (Presentaciones x 0,10) + (Técnica x 0,70) + (Económica x 0,20) 

|Presentacionespreparatorias|10%|Informes1,2y 3 y suspresentaciones,conformeal<br>Formulario1-22.|
|---|---|---|
|Evaluacióntécnica|70%|OfertaTécnica,conformealosFormulariosT-7yT-21.|
|Evaluacióneconómica|20%|OfertaEconómica,conformealosArtículos60*y61°.|



###### ARTÍCULO 63°. CRITERIOS DE ADJUDICACIÓN Y DESEMPATE 

63.1 Se adjudicará al PROPONENTE que obtenga el mayor puntaje final ponderado, siempre que cumpla la totalidad de los requisitos de estas Bases. 

63.2 En caso de empate, se resolverá aplicando sucesivamente los siguientes criterios: 

1. Mayor puntaje técnico ponderado. 

2. Mayor puntaje en el item de arquitectura lógica y física. 

3. Mayor puntaje en el ítem de innovaciones. 

4. Mayor puntaje en el plan de trabajo, EDT y cronograma. 

5. Mejor precio dentro del intervalo de confianza. 

63.3 El CLIENTE se reserva el derecho de adjudicar parcialmente, de declarar desierta la licitación cuando ninguna oferta satisfaga sus necesidades, y de rechazar todas las ofertas, sin que ello genere derecho a indemnización alguna. 

###### ARTÍCULO 64°. NOTIFICACIÓN Y PUBLICACIÓN DE LA ADJUDICACIÓN 

64.1 La adjudicación se notificará al ADJUDICATARIO por carta certificada y correo electrónico, y a los demás PROPONENTES por correo electrónico, dentro de los cinco días hábiles siguientes a la resolución. 

64.2 Junto con la notificación se publicará el cuadro comparativo de evaluación, con el puntaje de cada PROPONENTE por criterio y la fundamentación de la decisión. 

Bases Administrativas TFEP-01/2026 34 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### CAPÍTULO 17 - EVALUACIÓN ACADÉMICA 

###### ARTÍCULO 65°. ESCALA DE CALIFICACIÓN ACADÉMICA 

65.1 Para efectos académicos, el resultado del proceso se traducirá en calificación conforme a la siguiente tabla: 

|Con|Nota|
|---|---|
|Primerlugar—Existeunapropuestaque cumplesobreel90%delosrequerimientosen todoslos<br>ítemsy essuperioralresto.|70<br>v|
|Segundolugar—Ofertasquecumplensobreel80%delosrequerimientosen todoslositems.|6,5|
|Tercerlugar—Puntajefinalenlaevaluacióntécnicaigualosuperiora60%ypuntajeen cadaítem<br>superiora30%.|85<br>-|
|Cuartolugar—Puntajefinalenlaevaluacióntécnicaigualosuperiora60%ypuntajeencada<br>ítemsuperiora30%.|45<br>'|
|Quintolugareinferiores—Puntajefinalenlaevaluacióntécnicaigualosuperiora 60 %ypuntaje<br>en cadaitemsuperiora30%.|10<br>-|
|Nocumpletécnicamente—Puntajetécnicoinferiora60%oalgúníteminferiora30%.|3,0|
|Ofertanoaceptada—Incumplimientoformaloadministrativoqueinvalidelaoferta.|1,0|



###### ARTÍCULO 66°. AJUSTE POR EXCELENCIA DEL PRIMER LUGAR 

66.1 Cuando ninguna propuesta alcance la calificación máxima de 7,0 por no superar el 90 % en todos los criterios, pero exista una propuesta que se destaque significativamente del resto, se aplicará un mecanismo de ajuste. 

66.2 Condiciones copulativas para aplicar el ajuste: 

- La propuesta mejor evaluada debe presentar una diferencia mínima de diez puntos porcentuales en el puntaje final ponderado respecto del segundo lugar. 

- Debe cumplir con todos los requisitos técnicos mínimos establecidos. 

- Debe haber obtenido al menos el 75 % del puntaje máximo posible en la evaluación técnica. 

66.3 Aplicado el ajuste, las demás propuestas se reposicionarán proporcionalmente según las diferencias establecidas. 

Bases Administrativas TFEP-01/2026 35 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

#### CONTRATACIÓN Y EJECUCIÓN 

##### CAPÍTULO 18 - FORMALIZACIÓN DEL CONTRATO 

###### ARTÍCULO 67°. DOCUMENTACIÓN PARA CONTRATAR 

El ADJUDICATARIO deberá presentar, dentro de los diez días hábiles siguientes a la notificación de la adjudicación: 

###### 1. Documentación legal 

- Escritura de constitución y sus modificaciones. 

- Certificado de vigencia con antigliedad no superior a 30 días. 

- Poderes vigentes del representante legal. 

- Inscripciones y publicaciones legales. 

- Escritura de constitución del consorcio, cuando corresponda. 

###### 2. Documentación tributaria 

- Inicio de actividades. 

- Último balance tributario. 

- Certificado de cumplimiento tributario. 

###### 3. Garantías y seguros 

- Garantía de Fiel Cumplimiento del Contrato conforme al Articulo 36°. 

- Pólizas de seguro conforme al Articulo 38°. 

###### 4. Documentación del proyecto 

- Nómina definitiva del equipo clave, con cartas de compromiso individuales. 

- Acuerdo de confidencialidad suscrito por la empresa y por cada integrante del equipo clave. 

- Plan de trabajo detallado de los primeros noventa días. 

- Declaración de subcontratistas y proveedores clave, con sus respectivos acuerdos de confidencialidad. 

###### ARTÍCULO 68°. PLAZO Y CONDICIONES DE FIRMA 

1. Plazo para suscribir el Contrato: diez días hábiles desde la entrega completa de la documentación. 

2. Lugar: notaría designada por el CLIENTE. 

3. Gastos notariales y de legalización: de cargo del ADJUDICATARIO. 

4. . Si el ADJUDICATARIO no suscribe el Contrato en el plazo señalado, el CLIENTE hará efectiva la Garantía de Seriedad de la Oferta y podrá adjudicar al PROPONENTE que le siga en el orden de mérito, o declarar desierta la licitación. 

Bases Administrativas TFEP-01/2026 36/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

###### ARTÍCULO 69°. CONTENIDO MÍNIMO DEL CONTRATO 

El Contrato incorporará, como mínimo: 

- Identificación de las partes y de sus representantes. 

- Objeto y alcance detallado, con remisión expresa a las Bases y a la oferta adjudicada. 

- Plazo de ejecución y cronograma contractual obligatorio del Artículo 17°. 

- Precio, estructura de hitos y forma de pago conforme al Formulario E-25. 

- Garantías y seguros. 

- Obligaciones de las partes y gobierno del proyecto. 

- Niveles de servicio, indicadores, método de medición y reporte. 

- Régimen de multas y penalidades. 

- Propiedad intelectual, código fuente, custodia de fuentes y licenciamiento. 

- Confidencialidad y tratamiento de datos personales. 

- Plan de reversibilidad y salida: 

- Causales de término y procedimiento. 

- Mecanismos de solución de controversias. 

##### CAPÍTULO 19 - GESTION CONTRACTUAL 

###### ARTICULO 70°. ADMINISTRACION DEL CONTRATO 

70.1 El Administrador del Contrato, designado por el CLIENTE, tendrá por función supervisar el cumplimiento contractual, aprobar los estados de pago, gestionar las modificaciones y aplicar multas y sanciones. 

70.2 La Contraparte Técnica, designada por el CLIENTE, tendrá por función validar entregables, aprobar avances técnicos, coordinar las pruebas y emitir las conformidades que habilitan los hitos de pago. 

70.3 El ADJUDICATARIO deberá designar un Jefe de Proyecto con dedicación exclusiva durante la fase de implementación, con facultades para comprometer al ADJUDICATARIO en materias de ejecución. 

###### ARTÍCULO 71°. GOBIERNO DEL PROYECTO 

Se establecen las siguientes instancias de gobierno, de asistencia obligatoria para ambas partes: 

|Instanci||Participantes||
|---|---|---|---|
|ComitéEjecutivo|Mensual|.<br>.<br>PatrocinadordelCLIENTE,gerenciadel<br>ADJUDICATARIO,Administradordel<br>Contrato.|Decisionesestratégicas,<br>escalamiento,aprobaciónde<br>"<br>e<br>-~<br>cambiosdealcanceyrevisionde<br>-riesgosmayores.|
|Comitéde<br>Proyecto|Quincenal|ContraparteTécnicay Jefede<br>ProyectodelADJUDICATARIO.|A<br>del<br>tadod<br>e:zlí…í;?;;íí;ljsadode<br>iay<br>decisionesoperativas.|
|Comitáda<br>Arquitectura|Mensual|ArquitectodeSolución,Encargadode <br>Seguridad,referentestécnicosdel<br>CLIENTE.||Aprobacióndedecisionesde<br>arquitectura,revisióndedeuda<br>técnicay deriesgostécnicos.|



Bases Administrativas TFEP-01/2026 37 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

|Instanci|Frecuencia|Participantes|Prop|
|---|---|---|---|
|Comitéde<br>.<br>Operación|Mensualdesde|<br>elmes13|.<br>.<br>_<br> LíderdeOperación,mesadeservicio,<br>—<br>ContraparteTécnica.|Cumplimientodenivelesde<br>p<br>servicio,incidentes,problemasy<br>í<br>-<br>plandemejoracontinua.|
|.<br>Reuniónde<br>seguimiento|Semanal|.<br>.<br>Equiposdetrabajodeambaspartes.|Coordinaciónoperativa,<br>N<br>!<br>.<br>impedimentosycompromisosdela<br>semana.|



###### ARTÍCULO 72°. MODIFICACIONES CONTRACTUALES Y CONTROL DE CAMBIOS 

1. Toda modificación requiere acuerdo escrito de ambas partes, previa evaluación de impacto en alcance, plazo, costo, riesgo y niveles de servicio. 

2. Límite máximo acumulado de modificaciones: 20 % del valor original del Contrato. 

3. No podrán modificarse el objeto principal, la naturaleza del Contrato, las garantias mínimas ni el cronograma contractual obligatorio del Artículo 17°. 

4. Todo cambio deberá tramitarse mediante una solicitud formal de cambio, con análisis de impacto, y ser aprobado por el Comité Ejecutivo antes de su ejecución. 

5. La ejecución de un cambio sin aprobación previa es de cargo y riesgo exclusivo del ADJUDICATARIO y no da derecho a pago adicional. 

###### ARTÍCULO 73°. SUBCONTRATACIÓN 

73.1 La subcontratación requiere autorización previa y escrita del CLIENTE y no podrá superar el 40 % del valor del Contrato. 

73.2 No podrá externalizarse el núcleo del negocio: las aplicaciones y la información críticas del CLIENTE no pueden ser operadas ni custodiadas por terceros no autorizados expresamente. 

73.3 El ADJUDICATARIO responde solidariamente por sus subcontratistas, quienes deberán cumplir los mismos estándares de seguridad, confidencialidad, calidad y cumplimiento laboral exigidos al contratista principal. 

73.4 Todo subcontratista con acceso a datos del CLIENTE deberá ser declarado, auditado y sujeto a acuerdo de tratamiento de datos conforme a la Ley N* 21.719. 

##### CAPÍTULO 20 - OBLIGACIONES DEL CONTRATISTA 

###### ARTÍCULO 74°. OBLIGACIONES GENERALES 

1. Ejecutar el PROYECTO conforme a lo ofertado, a las Bases y al Contrato, con la diligencia de un profesional experto en la materia. 

- . Mantener vigentes las garantías y los seguros durante todo el período contractual. 

- . Cumplir toda la normativa aplicable y mantener actualizadas sus certificaciones. 

- . Mantener confidencialidad absoluta sobre la información del CLIENTE. 

- . Reportar el avance con la periodicidad y el formato acordados, informando oportunamente toda 

- desviación. 

6. Facilitar auditorías, inspecciones y fiscalizaciones del CLIENTE y de la autoridad competente. 

Bases Administrativas TFEP-01/2026 38 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

7. Advertir por escrito al CLIENTE de toda decisión suya que, a juicio experto del ADJUDICATARIO, comprometa la seguridad, la continuidad o la calidad de la solución. 

###### ARTÍCULO 75°. OBLIGACIONES LABORALES Y PREVISIONALES 

1. Cumplir integramente la legislación laboral y previsional vigente. 

2. Mantener al día los pagos previsionales y de salud de todo su personal y del personal de sus subcontratistas. 

3. Presentar mensualmente los certificados de cumplimiento de obligaciones laborales y previsionales. 

4. Responder por los accidentes del trabajo y mantener vigentes los seguros correspondientes. 

5. El CLIENTE podrá retener los pagos mientras no se acredite el cumplimiento de estas obligaciones. 

###### ARTÍCULO 76°. EQUIPO CLAVE, CONTINUIDAD Y REEMPLAZOS 

76.1 Los integrantes del equipo clave nominados en la oferta constituyen un elemento determinante de la adjudicación y no podrán ser reemplazados sin autorización previa y escrita del CLIENTE. 

76.2 Todo reemplazo deberá recaer en un profesional de perfil igual o superior, acreditado documentalmente, con un período de traslape mínimo de quince días hábiles y sin costo adicional para el CLIENTE. 

76.3 La rotación no autorizada del equipo clave, o una rotación superior al 30 % del equipo clave en un período de doce meses, constituye incumplimiento contractual y da lugar a la multa del Artículo 80°. 

76.4 El ADJUDICATARIO deberá mantener documentación y conocimiento distribuidos, de modo que la salida de cualquier integrante no comprometa la continuidad del PROYECTO. 

###### ARTÍCULO 77°. TRANSFERENCIA TECNOLÓGICA Y REVERSIBILIDAD 

77.1 El ADJUDICATARIO deberá ejecutar un programa de transferencia tecnológica que comprenda, como mínimo: 

- Capacitación completa y certificada del personal del CLIENTE, por perfil y por rol. 

- Entrega de la documentación técnica, funcional, de arquitectura, de operación y de seguridad, actualizada a la última versión desplegada. 

- Entrega del código fuente, de los artefactos de construcción, de los scripts de infraestructura como código y de los procedimientos de despliegue. 

* Base de conocimiento con incidentes, problemas, soluciones y decisiones de diseño. 

- Manuales de operación, libros de operación y guías de resolución de fallas. 

77.2 Plan de reversibilidad y salida. Dentro de los primeros noventa días del Contrato, el ADJUDICATARIO deberá entregar un Plan de Reversibilidad, actualizado anualmente, que permita al CLIENTE o a un tercero asumir la operación sin interrupción del servicio, incluyendo el inventario de activos, el traspaso de credenciales, la exportación íntegra de los datos en formatos abiertos y un período de acompañamiento de a lo menos noventa días. 

77.3 La ejecución del Plan de Reversibilidad al término del Contrato, por cualquier causa, está incluida en el precio ofertado y no da derecho a cobro adicional. 

Bases Administrativas TFEP-01/2026 39 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### CAPÍTULO 21 - NIVELES DE SERVICIO Y RÉGIMEN DE PENALIDADES 

###### ARTÍCULO 78°. NIVELES DE SERVICIO 

78.1 Clasificación de severidad de los incidentes: 

|Severidad|De'|||||
|---|---|---|---|---|---|
|Crítica|Interrupciónto<br>-<br>.<br>operativa,o in|taldelservicio,oaf<br> <br>"<br>cidentedeseguridad|ectaciónde unproces<br>"<br> concompromisode|odenegociocríticos<br>datos.|inalternativa|
|Alta|Degradacións<br>afectaciónde u|everadelservicio,o <br>ngruporelevanted|falladeunafuncióncr<br>epersonasusuarias.|íticaconalternativao|perativacostosa,o|
|a<br>edia|Falladeunafu<br>disponible.|nciónnocritica,ode|gradaciónquenoimp|idelaoperación,con|alternativa|
|Baja|Consulta,incid|enciamenor,defect|ocosméticoosolicitu|ddeinformación.||
|78.2Nivelesde<br>|servicioexigidos<br>|durantelafasede<br>|Operación:<br>|<br>|<br>|
|||||<br>|<br>|
|<br>Disponibilidad|<br> mensualmínima|<br>99,9%|<br>99,5%|<br> <br>99,0%|<br> <br>98,0%|
|Tiempomáxim|oderespuesta|15minutos|1hora|4horas|8horas|
|Tiempomáxim|oderesolución|4horas|8horas|24horas|48horas|
|Coberturadea|tención|247365|247365|Horeriohabi<br>extendido|Horariohábil|
|Informedecau|saraíz|5díashábiles|10díashábiles|Asolicitud|Noaplica|



78.3 Indicadores adicionales exigidos: 

|Tiempo derespuestadelatransacción<br>operacionalcrítica|ConformealvalorquefijenlasBasesTécnicasdelcaso,medido<br>enelpercentil95sobrelaexperienciarealdelusuario.|
|---|---|
|Tiempo medioderestauración(MTTR)de<br>incidentescríticos|Nosuperiora4horas,medidomensualmente.|
|Tasadecambiosfallidosenproduccién|Nosuperioral5%delosdesplieguesdelmes.|
|CumplimientodelRPOydelRTOenlaprueba<br>semestralderecuperación|100%.|
|Vulnerabilidadescríticasabiertaspormásdel<br>plazodel Articulo21.1|G,|
|Reincidenciadeincidentesconlamismacausaraiz—|Nosuperiorauneventoportrimestre.|
|Satisfaccióndelaspersonasusuariasconlamesa<br>-<br>deservicio|Igualosuperiora4,0en escalade1a5|



###### ARTÍCULO 79°. MEDICIÓN, REPORTE Y VERIFICACIÓN 

79.1 La medición de los niveles de servicio se realizará sobre la plataforma de observabilidad, cuyos datos deberán estar disponibles para el CLIENTE en tiempo real y ser exportables. 

79.2 El ADJUDICATARIO entregará, dentro de los primeros cinco días hábiles de cada mes, un informe de nivel de servicio con el detalle de cada indicador, los incidentes del período, las causas raíz y el plan de acción. 

Bases Administrativas TFEP-01/2026 40 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

79.3 El CLIENTE podrá verificar la medición por sus propios medios. Ante discrepancias, prevalecerá la medición del CLIENTE, salvo que el ADJUDICATARIO acredite un error metodológico. 

79.4 Las ventanas de mantenimiento programadas y aprobadas no computan como indisponibilidad. Las ventanas no aprobadas o excedidas sí lo hacen. 

###### ARTÍCULO 80*%. MULTAS Y PENALIDADES 

|Incumplimiento|Multa|
|---|---|
|Atrasoenlaentregade unentregableohito.|0,5%delvalordelhitoporcadadiacorridodeatraso,con<br>topede10%delvalordelhito.|
|Incumplimientodelniveldedisponibilidad<br>comprometido.|1%delvalormensualdelaOperación por cadapunto<br>porcentualofracciónbajoelnivelcomprometido,contope<br>de10%delvalormensual.|
|Incumplimientodeltiempoderespuestaode<br>resolución.|5UFpor cadaincidentecríticoy2UFporcadaincidentealto<br>queexcedaelplazo.|
|Extensióndeunamarchablancapor causa<br>imputablealADJUDICATARIO.|1%delvalordelhitode pasoaproducciónpor cadasemana<br>deextensión,con tope de10 %.|
|Vulnerabilidadcríticanoremediadadentrodelplazo<br>del Artículo21.1.|20UFporvulnerabilidad yporcadasemanaderetrasoenla<br>remediación.|
|Incumplimientodeldeberdenotificaciónde un<br>incidentedeseguridadodeunabrechadedatos.<br>|100UFporevento,sinperjuiciodelasresponsabilidades<br>legales.|
|Reemplazonoautorizadode unintegrantedel<br>equipoclave.|50UFporpersonareemplazada.|
|Noentregaoentregaincompletadelinforme<br>mensualdeniveldesen<br>0.|10UFporinforme.|
|Incumplimientodelasobligacionesde<br>confidencialidad.|10%delvalortotaldelContrato,sinperjuiciodelasacciones<br>legalesquecorrespondan.|
|Incumplimientodelasobligacioneslaboraleso<br>previsionales.|Retenciónde pagoshastasuacreditaciónymultade 20UF<br>pormesdeincumplimiento.|
|Procedimientodeaplicacién:||



1, . Notificación escrita y fundada del incumplimiento al ADJUDICATARIO. 

- 2 . Plazo de cinco días hábiles para presentar descargos. 

3. Resolución fundada del Administrador del Contrato dentro de los cinco días hábiles siguientes. 

4. . Descuento del monto en el siguiente estado de pago o, en su defecto, cobro con cargo a la Garantía de 

   - Fiel Cumplimiento. 

Tope global. El total de multas aplicadas en un período de doce meses no podrá exceder el 15 % del valor del Contrato correspondiente a ese período. Superado dicho tope, el CLIENTE podrá poner término anticipado al Contrato por incumplimiento grave. 

Bases Administrativas TFEP-01/2026 41/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### CAPÍTULO 22 - TÉRMINO DEL CONTRATO 

###### ARTÍCULO 81°. CAUSALES DE TERMINO 

1. Término normal por cumplimiento integro de las obligaciones de ambas partes. 

- 2 Término anticipado por mutuo acuerdo, con acta de liquidación. 

3. Término por incumplimiento grave del ADJUDICATARIO: atraso superior a 30 días corridos en un hito contractual; incumplimiento reiterado de los niveles de servicio en tres meses consecutivos; superación del tope global de multas; quiebra o insolvencia; pérdida de certificaciones esenciales; violación de confidencialidad; incidente de seguridad grave imputable a negligencia; no reconstitución de garantías. 

- . Término por causas sobrevinientes: caso fortuito o fuerza mayor, acto de autoridad, o imposibilidad absoluta de cumplimiento. 

###### ARTÍCULO 82°. PROCEDIMIENTO DE TÉRMINO Y REVERSIBILIDAD 

1. Notificación escrita con treinta días corridos de anticipación, salvo incumplimiento grave que ponga en riesgo la operación o la seguridad, caso en el cual el término podrá ser inmediato. 

- . Acta de cierre con el estado de avance, los entregables recibidos y los pendientes. . Activación del Plan de Reversibilidad del Artículo 77°, con acompafiamiento mínimo de noventa días. . Liquidación de pagos pendientes, compensación de multas y determinación de saldos. . Entrega íntegra de la documentación, del código fuente, de los datos en formatos abiertos y de las credenciales. 

- . Devolución de las garantías que procedan, una vez verificado el cumplimiento de las obligaciones pendientes. 

Bases Administrativas TFEP-01/2026 42 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### DISPOSICIONES ESPECIALES 

##### CAPÍTULO 23 - CONFIDENCIALIDAD, PROPIEDAD INTELECTUAL Y DATOS PERSONALES 

###### ARTÍCULO 83°. CONFIDENCIALIDAD 

|Aspecto|Regla|
|---|---|
|Alcance|TodainformacióndelCLIENTEalaqueelADJUDICATARIOaccedaconocasióndelprocesoodel<br>a<br>;<br>"<br>Contratoesconfidencial,cualquierasea susoporte.|
|Vigencia|Permanente,inclusodespuésdeltérminodelContrato.|
|Extensló<br>xtensión|ObligaalADJUDICATARIO,asupersonal,asussubcontratistas,asusasesoresyacualquier<br>terceroqueintervenga.|
|Excepciones|SóloinformacióndedominiopúblicoporcausanoimputablealADJUDICATARIO,ocuya<br>divulgaciónseaexigidaporleyoporresolucióndeautoridadcompetente,encuyocasodeberá<br>notificarsepreviamentealCLIENTE.|
|Instrumentos|Acuerdodeconfidencialidadsuscritoporlaempresayporcadaintegrantedelequipoclave,<br>b<br>T<br>antesdeliniciodelaejecución.|
|N<br>Sanciones|MultadelArtículo80°,ejecucióndelaGarantiadeFielCumplimiento,términoanticipadodel<br>Contratoyejerciciodelasaccioneslegalesquecorrespondan|



###### ARTÍCULO 84°. PROPIEDAD INTELECTUAL, CÓDIGO FUENTE Y CUSTODIA 

1. Todo desarrollo específico realizado para el PROYECTO, su código fuente, su documentación, sus modelos de datos, sus artefactos de configuración y sus scripts de infraestructura serán de propiedad exclusiva del CLIENTE desde su creación. 

2. El ADJUDICATARIO cede al CLIENTE, de forma total, exclusiva, irrevocable y sin límite territorial ni temporal, todos los derechos patrimoniales de autor sobre dichos desarrollos. 

3. Las licencias de software de terceros deberán constituirse a nombre del CLIENTE, transferibles y vigentes por todo el período contractual, con el costo de renovación explicitado en la Oferta Económica. 

4. Cuando el ADJUDICATARIO incorpore componentes preexistentes de su propiedad, deberá declararlos e individualizarlos, y otorgar al CLIENTE una licencia perpetua, irrevocable y sin costo adicional para su uso, mantención y modificación en el ámbito del PROYECTO. 

5. El uso de software de código abierto deberá declararse en el inventario de componentes, con su licencia y su compatibilidad con el uso previsto. Queda prohibido el uso de componentes con licencias que impongan obligaciones de liberación incompatibles con los intereses del CLIENTE, sin autorización previa y escrita. 

6. El código fuente deberá depositarse en el repositorio del CLIENTE, actualizado en cada liberación. Adicionalmente, el ADJUDICATARIO deberá constituir un depósito de custodia de fuentes ante un tercero independiente, con actualización semestral y cláusulas de liberación ante insolvencia o 

   - incumplimiento grave. 

7. Se prohíbe al ADJUDICATARIO reutilizar los desarrollos específicos del PROYECTO para otros clientes sin autorización previa y escrita del CLIENTE. 

Bases Administrativas TFEP-01/2026 43 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

8. Los datos del CLIENTE, en todo momento y en cualquier estado de procesamiento, son de propiedad exclusiva del CLIENTE. 

###### ARTÍCULO 85°. PROTECCIÓN DE DATOS PERSONALES 

1. El ADJUDICATARIO actúa como encargado del tratamiento por cuenta del CLIENTE y sólo podrá tratar datos personales conforme a las instrucciones documentadas de éste. 

2. Deberá suscribirse un acuerdo de tratamiento de datos que precise finalidad, categorías de datos, categorías de titulares, plazo, medidas de seguridad y régimen de subencargados. 

3. El ADJUDICATARIO implementará medidas técnicas y organizativas apropiadas, incluyendo seudonimización, cifrado, control de acceso por privilegio mínimo, registro de accesos y minimización de datos. 

4. Toda subcontratación que implique tratamiento de datos personales requiere autorización previa y escrita del CLIENTE, y el subencargado quedará sujeto a las mismas obligaciones. 

5. El ADJUDICATARIO deberá asistir al CLIENTE en la atención de las solicitudes de ejercicio de derechos de los titulares, dentro de los plazos legales. 

6. Toda brecha de datos personales deberá notificarse al CLIENTE dentro de las 24 horas siguientes a su detección, con la información necesaria para que el CLIENTE cumpla sus obligaciones de notificación a la autoridad y a los titulares. 

7. Al término del Contrato, el ADJUDICATARIO deberá devolver o eliminar de forma segura y verificable todos los datos personales, entregando certificado de eliminación. 

8. La transferencia internacional de datos personales requiere base de licitud, resguardos adecuados y autorización previa y escrita del CLIENTE. 

###### ARTÍCULO 86°. USO DE INTELIGENCIA ARTIFICIAL EN LA SOLUCIÓN 

86.1 Cuando la solución incorpore componentes de inteligencia artificial, el ADJUDICATARIO deberá: 

- Declarar el modelo o servicio utilizado, su proveedor, su versión y su ubicación de procesamiento. 

- Garantizar que los datos del CLIENTE no serán utilizados para entrenar modelos de terceros, salvo autorización expresa y escrita. 

- Documentar el propósito, los límites de uso, los casos en que el resultado requiere validación humana y el procedimiento de supervisión. 

- Evaluar y mitigar los riesgos de sesgo, alucinación, fuga de información y uso indebido, conforme al NIST Al Risk Management Framework y a la norma ISO/IEC 42001. 

- Registrar las interacciones relevantes para efectos de auditoría y trazabilidad. 

- Proveer un mecanismo de desactivación del componente sin comprometer la operación del resto de la solución. 

86.2 La responsabilidad por los resultados de los componentes de inteligencia artificial incorporados a la solución recae integramente en el ADJUDICATARIO. 

Bases Administrativas TFEP-01/2026 44 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### CAPÍTULO 24 - SOLUCIÓN DE CONTROVERSIAS 

###### ARTÍCULO 87°. MECANISMOS DE RESOLUCIÓN 

1. Primera instancia: negociación directa entre las partes, con plazo de treinta días corridos, escalada al Comité Ejecutivo. 

2. Segunda instancia: mediación ante el Centro de Arbitraje y Mediación de Santiago, con plazo de treinta días corridos. 

3. Tercera instancia: arbitraje de derecho, con árbitro único designado conforme al reglamento del Centro de Arbitraje y Mediación de Santiago, cuyo fallo será obligatorio para ambas partes. 

La existencia de una controversia no suspende las obligaciones de ejecución, de continuidad del servicio ni de pago de las prestaciones no controvertidas. 

###### ARTÍCULO 88°. DOMICILIO Y JURISDICCIÓN 

- Domicilio: ciudad de Valparaíso, República de Chile. 

- Legislación aplicable: chilena. 

- Tribunales competentes: ordinarios de Valparaíso, en subsidio del arbitraje pactado. 

##### CAPÍTULO 25 - GESTIÓN DEL CAMBIO, CAPACITACIÓN Y DOCUMENTACIÓN 

###### ARTÍCULO 89°. GESTION DEL CAMBIO ORGANIZACIONAL 

El ADJUDICATARIO deberá presentar y ejecutar un plan de gestión del cambio que contemple: 

- Diagnóstico del impacto organizacional del PROYECTO, por área y por perfil. 

- Estrategia de comunicación a los distintos grupos de interés, con calendario y canales. 

- Identificación y habilitación de agentes de cambio dentro de la organización del CLIENTE. 

- Identificación anticipada de las resistencias previsibles y estrategias específicas de mitigación, incluidas las que provengan de usuarios expertos apegados a los procedimientos vigentes. 

- Rediseño y documentación de los procedimientos operativos afectados. 

- Medición de la adopción con indicadores objetivos: cobertura de usuarios activos, tasa de uso por 

- función, abandono de los mecanismos manuales previos y satisfacción de las personas usuarias. 

- Plan de acción correctiva cuando los indicadores de adopción no alcancen las metas comprometidas. 

###### ARTÍCULO 90*%. CAPACITACIÓN 

90.1 Plan de capacitación integral, dirigido a usuarios finales, usuarios avanzados, administradores, equipo técnico y soporte de niveles 1 y 2. 

90.2 Modalidades exigidas: presencial en cada sitio de operación, en línea sincrónica, autoformación en línea y acompañamiento en puesto de trabajo durante la marcha blanca. 

90.3 Materiales exigidos: manuales por perfil, guías rápidas, preguntas frecuentes, videos tutoriales en español y base de conocimiento consultable, todos entregados en formato editable y de propiedad del CLIENTE. 

90.4 Certificación: el plan deberá contemplar la evaluación y certificación de los usuarios administradores y del 

equipo técnico del CLIENTE, como condición para el cierre de cada marcha blanca. 

Bases Administrativas TFEP-01/2026 45 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

90.5 Refuerzo: durante la fase de Operación, el ADJUDICATARIO deberá ejecutar al menos dos jornadas anuales de actualización y capacitar al personal nuevo del CLIENTE, sin costo adicional. 

###### ARTÍCULO 91°. DOCUMENTACIÓN EXIGIBLE 

La documentación es un entregable contractual y su ausencia o desactualización impide la aceptación del hito correspondiente. Se exige, como mínimo: 

|Categoría|Documentos|
|---|---|
|Arquitect<br>rqitectira|DocumentodearquitecturaconformeaISO/IEC/IEEE42010;registrodedecisionesde<br>arquitectura;diagramaslógico,físico,dedatos,deintegración ydeseguridad.|
|Requerimientos|Catálogoderequerimientosfuncionalesynofuncionales,matrizdetrazabilidadylíneabase de<br>!<br>alcanceversionada.|
|Construcción|Estándaresdecodificación,documentacióndeinterfaces(OpenAPIyAsyncAPl),diccionariode<br>datose inventariodecomponentes(SBOM).|
|Pruebas|Planycasosdeprueba,evidenciadeejecucién,informesdepruebas decarga,deresilienciay<br>deseguridad.|
|o<br>-<br>eración<br>P|Manualdeoperación,librosdeoperación,guíasderesolución,matrizdeescalamiento,plande<br>=<br>continuidady planderecuperaciónantedesastres.|
|Seguridad<br>3|Políticadeseguridaddelasolución,modeladodeamenazas,matrizdecontroles,informesde<br>pruebasdeintrusiónyplanderemediación.|
|Usuario|Manualesporperfil,guíasrápidas,materialdecapacitaciónybasedeconocimiento.|
|Proyesto|Plandeproyecto,EDT,cronograma,nivelaciónderecursos,registroderiesgos,registrode<br>cambiosy actasdetodosloscomités.|



##### CAPÍTULO 26 - DISPOSICIONES FINALES 

###### ARTÍCULO 92°. RELACIÓN CON LAS BASES TÉCNICAS DEL CASO 

92.1 Las presentes Bases Administrativas son comunes a todos los casos e industrias del llamado. Las Bases Técnicas de cada caso desarrollan el contexto de la industria, el proceso de negocio, los requerimientos funcionales y no funcionales específicos, los volúmenes, las integraciones, los datos y los criterios de aceptación propios de ese caso. 

92.2 Cuando las Bases Técnicas establezcan una exigencia superior a la de estas Bases Administrativas, prevalecerá la más exigente. Cuando establezcan una exigencia inferior, se entenderá que rige la de estas Bases Administrativas. 

92.3 Ninguna disposición de las Bases Técnicas podrá interpretarse como una dispensa del cronograma contractual obligatorio del Articulo 17*, del modelo híbrido del Artículo 16”, de los requisitos transversales del Capítulo 4 ni de la exigencia de innovación del Capítulo 5. 

###### ARTÍCULO 93°. CARÁCTER ACADÉMICO DEL PROCESO 

93.1 El presente proceso constituye una simulación con fines formativos, desarrollada en el marco de la asignatura Taller de Formulación de Proyectos Informáticos (ICI-5444) de la Escuela de Informática de la Pontificia Universidad Católica de Valparaíso. 

Bases Administrativas TFEP-01/2026 46 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

93.2 Las garantías, montos, obligaciones contractuales y penalidades descritas en estas Bases son elementos del ejercicio y no generan obligaciones jurídicas reales entre las partes. Su rigor es deliberado: reproducen las condiciones a las que se enfrenta una empresa proveedora en un proceso de licitación real. 

93.3 Las consecuencias efectivas del incumplimiento de estas Bases son académicas y se expresan en la evaluación conforme al Capítulo 17. 

###### ARTÍCULO 94°. VIGENCIA Y ACEPTACIÓN 

94.1 Estas Bases rigen desde su publicación y hasta el término del proceso de adjudicación. 

94.2 La sola presentación de una oferta implica la aceptación íntegra e incondicional de estas Bases, de las Bases Técnicas del caso, de sus anexos y de las aclaraciones y modificaciones emitidas por el CLIENTE, sin reserva alguna. 

Bases Administrativas TFEP-01/2026 47 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

#### ANEXOS Y FORMULARIOS 

##### CAPÍTULO A - FORMULARIOS ADMINISTRATIVOS 

Los formularios de este anexo integran el Sobre N* 1. Todos deberán presentarse firmados por el representante legal y, cuando se indique, ante notario. 

||Formulario|
|---|---|
|A-1|IdentificacióndelProponenteydelRepresentante.|
|A-2|Declaraciónjuradade noafectaciónporprohibicionese inhabilidades|
|A3|DeclaracióndeaceptacióníntegradelasBases|
|A-4|Declaracióndeausenciadeconflictosdeinterés.|
|A-5|Presentacióneíndicedeantecedentes.|
|A-6|Declaracióndeusodeherramientasdeinteligenciaartificialgenerativa.|



Bases Administrativas TFEP-01/2026 48 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

###### FORMULARIO A-1 

###### IDENTIFICACIÓN DEL PROPONENTE 

|Razónsocial||
|---|---|
|Nombredefantasía||
|RolÚnicoTributario||
|Domiciliocomercial||
|Ciudadyregión||
|Giro||
|Sitioweb||
|Casoeindustriaasignada||
|Representantelegal||
|Céduladeidentidad||
|Correoelectrónico||
|Teléfonodecontacto||
|Representantedelproceso(contraparte)||
|Correodelrepresentantedelproceso||
|Teléfonodelrepresentantedelproceso||
|Tipodeparticipación|Individual/Consorcio/Unión temporal(marcar)|
|Integrantesyporcentaje(siaplica)||



Firma del representante leg; 

Bases Administrativas TFEP-01/2026 49 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

###### FORMULARIO A-2 

###### DECLARACIÓN JURADA DE NO AFECTACIÓN POR PROHIBICIONES E INHABILIDADES 

El suscrito, en su calidad de representante legal de la empresa individualizada en el Formulario A-1, declara 

bajo juramento que su representada: 

1. No se encuentra afecta a ninguna de las situaciones descritas en el Articulo 4* de la Ley N* 19.886 ni en el Artículo 32° de las Bases Administrativas. 

2. Notiene vigente declaratoria de quiebra, liquidación concursal ni procedimiento de reorganización judicial. 

3. Noregistra incumplimientos contractuales graves con el CLIENTE en los últimos tres años. 

4. No mantiene litigios pendientes con el CLIENTE. 

5. No ha sido sancionada por infracciones laborales, previsionales o tributarias graves en los últimos dos años. 

6. No ha sido condenada conforme a la Ley N* 20.393 ni a la Ley N* 21.595 por delitos que afecten la probidad. 

7. Toda la información contenida en su propuesta corresponde a la realidad y es verificable. 

Nombre: .. 

Firm 

Bases Administrativas TFEP-01/2026 50 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

###### FORMULARIO A-3 DECLARACIÓN DE ACEPTACIÓN ÍNTEGRA DE LAS BASES 

El suscrito, en representación de la empresa individualizada en el Formulario A-1, declara que: 

1. Ha estudiado íntegramente las Bases Administrativas, las Bases Técnicas del caso asignado, sus anexos, formularios, aclaraciones y modificaciones. 

2. Acepta sin reserva, condicionamiento ni contrapropuesta la totalidad de sus disposiciones, incluido el cronograma contractual obligatorio del Artículo 17° y el modelo de despliegue híbrido del Articulo 16°. 

3. Ha considerado en su oferta la totalidad de los costos, riesgos y obligaciones que se derivan de las Bases, y no formulará reclamo alguno fundado en su desconocimiento. 

4. Constituye domicilio en la ciudad de Valparaíso para todos los efectos del proceso y del Contrato. 

5. Mantendrá vigente su oferta por el plazo mínimo de ciento cincuenta días corridos contados desde su presentación. 

Nombre: .. 

Firma: 

Fecha: ... 

Bases Administrativas TFEP-01/2026 51/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

###### FORMULARIO A-4 

###### DECLARACIÓN DE AUSENCIA DE CONFLICTOS DE INTERÉS 

El suscrito declara que ni la empresa que representa, ni sus socios, directores, administradores o integrantes del equipo propuesto, mantienen vínculo de propiedad, parentesco, dependencia, sociedad o interés económico con los integrantes de la Comisión Evaluadora, de la Comisión de Expertos o de la contraparte del CLIENTE, salvo las situaciones que a continuación se declaran expresamente: 

|rsona<br>inculodeclarado<br>Conquién|
|---|



Declara asimismo conocer que la omisión de un vinculo existente constituye causal de exclusión del proceso. 

Nombre 

Firma: 

Fecha: 

Bases Administrativas TFEP-01/2026 52 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

###### FORMULARIO A-5 

###### PRESENTACIÓN E ÍNDICE DE ANTECEDENTES 

El Proponente deberá completar el índice de la totalidad de los documentos incluidos en el Sobre N* 1, indicando el folio de inicio de cada sección. La correspondencia entre este índice y la foliación efectiva es requisito excluyente. 

||Documento|Fol|Folio<br>.<br>término|”<br>Observación|
|---|---|---|---|---|
|1|||||
|2|||||
|10|||||
|p|||||
|12|||||



Bases Administrativas TFEP-01/2026 53/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

###### FORMULARIO A-6 

###### DECLARACIÓN DE USO DE INTELIGENCIA ARTIFICIAL GENERATIVA 

Conforme al Artículo 13.5 de las Bases Administrativas, el Proponente declara el uso de herramientas de inteligencia artificial generativa en la preparación de su propuesta: 

|"<br>Seccióndelapropuesta|;<br>;<br>Herramientautilizada|_<br>Finalidad deluso|Revisiónhumana<br>.<br>aplicada|
|---|---|---|---|



El Proponente declara que asume la responsabilidad integra sobre el contenido, la exactitud, la originalidad y la coherencia técnica de su propuesta, con independencia de las herramientas empleadas en su preparación, y que no ha incorporado datos confidenciales del CLIENTE en servicios de terceros sin autorización. 

Nombre: .. 

Firma: 

Fecha: ... 

Bases Administrativas TFEP-01/2026 54 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### CAPÍTULO B - FORMULARIOS TÉCNICOS 

Los formularios de este anexo integran el Sobre N* 2. Ninguno de ellos podrá contener información de precios. 

|Código|Formulario|
|---|---|
|T-6|Experienciaenproyectossimilares.|
|T7|ContenidoyestructuradelaPropuestaTécnica.|
|T-8|Equipo detrabajo,subcontratacionesyalianzas.<br>|
|T-9|Metodologíaparalaadministraciónygestióndelproyecto.|
|T-10|Metodologíaparaeldesarrollo.|
|T-11|Especificaciones técnicasofertadas.|
|T-12|Matrizdecumplimientotécnicoytrazabilidadderequerimientos.|
|T-13|Plande pruebas yvalidación.|
|T-14|Plandetrabajo,EDTycartaGantt.|
|T-15|Nivelaciónderecursos.|
|T-16|Planderiesgos.|
|T-17|Protocolodeaceptación.|
|T-18|Propuestadeimplantaciónypuestaen marchacontrolada.|
|T-19|Carteradeinnovaciones.|
|T-20|Calendariodeactividades.|
|T-21|Ponderacióndelaevaluacióntécnica.|
|T-22|Contenidodelosinformesypresentacionespreparatorias.|



Bases Administrativas TFEP-01/2026 55 /77 

Pontificia Universidad Católica de Valparaíso Escuela de Informética 

Licitación N* TFEP-01/2026 

##### FORMULARIO T-6 

###### EXPERIENCIA EN PROYECTOS SIMILARES 

Se deberán declarar al menos tres proyectos finalizados y en operación en los últimos cinco años. El CLIENTE verificará directamente con las contrapartes declaradas. 

||Proyecto2|Proyecto3|
|---|---|---|
|Nombredelproyecto|||
|Cliente /mandante|||
|Industria|||
|Añodeinicioydetérmino|||
|Montodelcontrato(rango)|||
|Alcanceejecutado|||
|Arquitectura(nube/on-<br>premise/híbrida)|||
|Niveldeserviciocomprometido|||
|Volumendeoperación<br>soportado|||
|Roldelaempresa(principal/<br>socio)|||
|Contrapartedereferenciay<br>contacto|||



Bases Administrativas TFEP-01/2026 56/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### FORMULARIO T-7 CONTENIDO Y ESTRUCTURA DE LA PROPUESTA TÉCNICA 

La Propuesta Técnica deberá estructurarse en catorce subdocumentos, en el orden que se indica. Cada subdocumento constituye un ítem de evaluación con la ponderación del Formulario T-21. 

###### SUBDOCUMENTO 1 — Presentación de la empresa 

- Reseña de la trayectoria, capacidades instaladas, lineas de negocio, productos y servicios ofrecidos. 

- Estructura organizacional, dotación, certificaciones institucionales y alianzas tecnológicas vigentes. 

- Experiencia relevante en la industria del caso y en proyectos de complejidad equivalente. 

- Modelo de gobierno interno de calidad, seguridad y gestión del conocimiento. 

###### SUBDOCUMENTO 2 — Comprensión del problema y de la necesidad 

- Dimensionamiento realista de la magnitud del problema o desafío, con foco cualitativo y con datos cuantitativos que lo sustenten. 

- Comprensión del contexto de la industria, de sus particularidades operacionales, regulatorias y estacionales. 

- Identificación de los actores afectados y de los grupos de interés, con su nivel de influencia e interés. 

- Supuestos declarados y su fundamento. No mezclar el problema con la solución. 

- Información de apoyo adecuadamente referenciada en norma APA 7.2 edición. 

###### SUBDOCUMENTO 3 — Esquema de solución y alcance 

- Descripción de la solución propuesta y su coherencia con el problema definido. 

- Alcance de la Etapa 1 y de la Etapa 2, con separación explícita y criterios de asignación entre ambas. 

- Exclusiones explícitas, supuestos y restricciones del alcance. 

- Catálogo de requerimientos funcionales y no funcionales, priorizado y trazable. 

- Estrategia para obtener el apoyo de los grupos de interés clave. 

- Criterios de aceptación del alcance comprometido. 

###### SUBDOCUMENTO 4 — Arquitectura lógica y física de la solución 

- Arquitectura lógica: capas, módulos, límites de contexto, responsabilidades e interfaces. 

- Arquitectura física: emplazamiento de cada componente en nube y on-premise, con justificación por componente conforme al Artículo 16°. 

- Arquitectura de integración: servicios, contratos, mensajería, versionado y gobierno. 

- Arquitectura de seguridad: modelo Zero Trust, capa expuesta, identidad, cifrado y controles. 

- Arquitectura de despliegue: ambientes, redes, alta disponibilidad, recuperación ante desastres y 

- respaldos. 

- Dimensionamiento y plan de capacidad, con supuestos de volumen, concurrencia y crecimiento. 

- Decisiones de arquitectura registradas, con alternativas evaluadas y criterio de selección. 

- La arquitectura debe ser propia de la solución planteada. No se aceptarán diagramas genéricos. 

###### SUBDOCUMENTO 5 — Modelo y gestión de datos 

- Dominio de información. 

Bases Administrativas TFEP-01/2026 57 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

- Selección del motor y del paradigma de persistencia, con justificación: relacional o no relacional, transaccionalidad, consistencia y disponibilidad conforme al teorema CAP. 

- Estrategia de migración, saneamiento, validación y conciliación de los datos históricos. 

- Estrategia de desempeño: indexación, particionamiento, caché y optimización de consultas. 

- Separación entre almacenamiento transaccional y analítico, y modelo de explotación de información. 

- Calidad de datos, retención, archivado y eliminación segura. 

###### SUBDOCUMENTO 6 — Metodologías 

- Metodología de gestión del proyecto: aplicación del PMBOK adaptada a la complejidad del PROYECTO, integrando enfoques ágiles donde corresponda. Gestión de interesados, comunicaciones, adquisiciones e integración. 

- Metodología de desarrollo: enfoque coherente con la naturaleza del proyecto, con sus implicancias en gestión de requerimientos, arquitectura evolutiva, refactorización, deuda técnica y tiempo de salida al mercado. 

- Prácticas de DevSecOps, integración y entrega continuas, infraestructura como código y automatización de pruebas. 

- Ceremonias, artefactos, cadencias y mecanismos de decisión. 

###### SUBDOCUMENTO 7 — Plan de trabajo, EDT, cronograma e implantación 

- Estructura de descomposición del trabajo con el 100 % del alcance, hasta paquetes de trabajo estimables y asignables. 

- Diccionario de la EDT con entregable, criterio de aceptación y responsable por paquete. 

- Secuenciamiento, estimacién, ruta crítica identificada y gestión de holguras, con técnicas PERT y CPM. 

- Carta Gantt alineada con el cronograma contractual obligatorio del Artículo 17°, con los hitos del Formulario E-25. 

- Frentes de trabajo, paralelización y sincronización, incluido el solapamiento de los meses 13a 15 y 19a 20. 

- Plan de implantación y puesta en marcha: estrategia de despliegue (azul-verde, canario o progresivo), 

- pruebas de aceptación, pruebas de desempeño y de estrés, criterios de éxito medibles y procedimiento de reversión. 

- Plan de marcha blanca de la Etapa 1 y de la Etapa 2, con indicadores de cierre conforme al Artículo 17.3. 

###### SUBDOCUMENTO 8 — Plan de riesgos 

- Identificación y cuantificación de riesgos técnicos, organizacionales, de proyecto, de seguridad y de operación. 

- Análisis cualitativo y cuantitativo, con técnicas de análisis de modos de falla, árbol de fallas o simulación. 

- Estrategias de mitigación basadas en análisis costo-beneficio, con responsable, plazo y disparador. 

- Riesgos de obsolescencia tecnológica, bloqueo por proveedor, escalabilidad, ciberseguridad y disponibilidad de contrapartes del CLIENTE. 

- Reservas de contingencia y de gestión, y su reflejo en el cronograma y en el flujo de caja. 

- Los riesgos deben corresponder a la solución efectivamente propuesta y no a un catálogo genérico. 

###### SUBDOCUMENTO 9 — Plan de calidad 

* Marco de aseguramiento de calidad basado en ISO/IEC 25010 y en modelos de madurez. 

Bases Administrativas TFEP-01/2026 58 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

- Métricas de calidad del código, cobertura de pruebas, complejidad y acoplamiento, con umbrales bloqueantes. 

- Puertas de calidad, revisiones por pares, análisis estático y dinámico. 

- Estrategia de pruebas conforme a ISO/IEC/IEEE 29119: niveles, tipos, ambientes, datos de prueba y automatización. 

- Verificación, validación y trazabilidad entre requerimiento, diseño, código, prueba y despliegue. 

###### SUBDOCUMENTO 10 — Servicios de operación y niveles de servicio 

- Modelo de soporte basado en ITIL 4, con estructura de niveles, canales, horarios y escalamiento. 

- Definición de indicadores, objetivos y acuerdos de nivel de servicio, coherentes con el Artículo 78°. 

- Dimensionamiento de la mesa de servicio con fundamento cuantitativo (teoría de colas, modelo Erlang C u otro declarado). 

- Acuerdos de nivel operacional y contratos de apoyo internos coherentes con los compromisos externos. 

- Libros de operación, guías de resolución, gestión del conocimiento y automatización progresiva. 

- Observabilidad de extremo a extremo, correlación de eventos y detección proactiva. 

###### SUBDOCUMENTO 11 — Planes en operación 

- Plan de mantención preventiva, correctiva y evolutiva, con criterios de priorización y presupuesto de capacidad. 

- Estrategia de actualización de dependencias, gestión de deuda técnica y ventana de obsolescencia. 

- Plan de operación conforme a principios de ingeniería de confiabilidad: presupuesto de error, reducción del trabajo manual y análisis retrospectivo sin culpa. 

- Gestión de la capacidad y optimización de costos en nube conforme a prácticas FinOps. 

- Plan de pruebas periódicas de recuperación ante desastres y de resiliencia. 

###### SUBDOCUMENTO 12 — Equipo de trabajo, subcontrataciones y alianzas 

- Estructura organizacional del proyecto, con roles, responsabilidades y matriz de asignación. 

- Equipo clave nominado, con currículo, certificaciones, dedicación y período de participación. 

- Curva de dotación por fase, coherente con la nivelación de recursos del Formulario T-15. 

- Decisiones de hacer o comprar, con justificación por capacidades, certificaciones y trayectoria. 

- Subcontratiy **s** ocios,tas su rol, su porcentaje de participación y su régimen de control. 

- Estrategia de gestión del conocimiento, retención de talento y continuidad ante rotación. 

###### SUBDOCUMENTO 13 — Innovaciones 

- Cartera obligatoria de cinco innovaciones, una por cada tipo del Articulo 28°, presentada en el Formulario T-19. 

- Cada innovación con los siete elementos del Articulo 29°: problema, tecnologia, madurez, diseño de incorporación, impacto económico, indicador de verificación y riesgo de adopción. 

- Trazabilidad de cada innovación con la arquitectura, con la EDT y con el flujo de caja. 

- Fuentes citadas en norma APA 7.2 edición para las innovaciones de base tecnológica. 

###### SUBDOCUMENTO 14 — Ventajas, beneficios y consolidación 

* Síntesis de la propuesta de valor desde una perspectiva de ingeniería integral. 

Bases Administrativas TFEP-01/2026 59/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

- Análisis cuantitativo de beneficios para el CLIENTE: mejoras de desempeño, reducción del tiempo de restauración, aumento de disponibilidad y ahorro operacional. 

- Demostración de cómo la solución equilibra alcance, tiempo, costo y calidad. 

- Coherencia arquitectónica y tecnológica entre todas las secciones de la propuesta. 

- Trazabilidad de extremo a extremo: requerimiento, diseño, construcción, prueba, implantación y operación. 

###### Consideraciones transversales de evaluación 

- Consistencia técnica: todas las secciones deben mantener coherencia arquitectónica y tecnológica. 

- Trazabilidad: mapeo explícito entre requerimientos, diseño, implementación y operación. 

- Fundamentación ingenieril: decisiones respaldadas por análisis cuantitativo, modelos y mejores prácticas. 

- Cumplimiento: consideración de los aspectos regulatorios, de los estándares del Artículo 4.3 y de los marcos de gobierno de tecnologías de información. 

Bases Administrativas TFEP-01/2026 60/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### FORMULARIO T-8 

###### EQUIPO DE TRABAJO, SUBCONTRATACIONES Y ALIANZAS 

|_<br>o<br>certfeaciones<br>JefedeProyecto|
|---|
|ArquitectodeSolución|
|Encargadode Seguridaddela<br>Información|
|LíderdeDatos|
|LíderdeDesarrollo|
|LíderdeCalidad|
|LíderdeOperación/SRE|
|LíderdeImplantaciónyGestióndel<br>Cambio|
|Otrosroles(agregarfilas)|



###### Subcontrataciones y alianzas: 

##### FORMULARIO T-9 

##### METODOLOGÍA PARA LA ADMINISTRACIÓN Y GESTIÓN DEL PROYECTO 

El Proponente adjuntará a este formulario la información solicitada en el Subdocumento 6, letra a. 

##### FORMULARIO T-10 

##### METODOLOGÍA PARA EL DESARROLLO 

El Proponente adjuntará a este formulario la información solicitada en el Subdocumento 6, letra b. 

Bases Administrativas TFEP-01/2026 61/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### FORMULARIO T-11 

###### ESPECIFICACIONES TÉCNICAS OFERTADAS 

Detalle de los componentes de infraestructura, plataforma, licenciamiento y hardware especificado, con su ubicación / lugar y su justificación. 

|Producto/servicioofertado|Ubicación/Lugar|Cantidad|Justificación|
|---|



##### FORMULARIO T-12 

###### MATRIZ DE CUMPLIMIENTO TÉCNICO Y TRAZABILIDAD 

El Proponente deberá declarar el cumplimiento de cada requerimiento de las Bases Técnicas del caso y de los requisitos transversales del Capítulo 3, indicando dónde se acredita en la propuesta. 

|1Dreque<br>to|N<br>|Descripción|Cumple|Component**e** <br>qulo<br>.<br>satisface|Seccióndela<br>propuesta|
|---|---|---|---|---|



###### FORMULARIO T-13 

###### PLAN DE PRUEBAS Y VALIDACIÓN 

El Proponente adjuntará a este formulario el plan de pruebas conforme al Subdocumento 9, incluyendo niveles, tipos, ambientes, datos de prueba, criterios de entrada y salida, automatización y el calendario de las pruebas de carga, de resiliencia, de recuperación ante desastres y de seguridad ofensiva. 

Bases Administrativas TFEP-01/2026 62 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### FORMULARIO T-14 

###### PLAN DE TRABAJO, EDT Y CARTA GANTT 

El Proponente adjuntará a este formulario la información solicitada en el Subdocumento 7. La carta Gantt deberá cubrir los 56 meses del Contrato y mostrar explicitamente las ventanas de marcha blanca, los pasos a producción y el inicio de la fase de Operación. 

##### FORMULARIO T-15 NIVELACIÓN DE RECURSOS 

- El Proponente deberá indicar claramente la siguiente información de planificación, a modo de resumen: 

   - Horas hombre destinadas a cada una de las tareas, paquetes de trabajo y etapas de la implementación. 

   - Curva de horas hombre programadas para la implementación, por etapa y para el total del proyecto, y en forma separada la curva de la etapa de continuidad operacional. 

   - Número de personas involucradas en las distintas actividades durante la implementación y durante la operación. 

   - Identificación de la ruta crítica de la implementación y de sus holguras. 

   - Cantidad de frentes de trabajo empleados en la ejecución del programa, con especial detalle del período de solapamiento de los meses 13 a 15 y 19 a 20. 

|Etapa1—Desarrollo||
|---|---|
|Etapa1—Marchablanca|1315|
|Etapa2—Desarrollo|13-18|
|Etapa2—Marchablanca|19-20|
|Operación|21-56|



##### FORMULARIO T-16 PLAN DE RIESGOS 

|1|
|---|



Bases Administrativas TFEP-01/2026 63 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### FORMULARIO T-17 

##### PROTOCOLO DE ACEPTACIÓN 

El Proponente adjuntará a este formulario la propuesta de Protocolo de Aceptación de cada hito y del producto final, indicando entregables, criterios de aceptación objetivos, evidencia requerida, plazos de revisión, procedimiento de observaciones y acta de conformidad. 

##### FORMULARIO T-18 

##### PROPUESTA DE IMPLANTACIÓN Y PUESTA EN MARCHA CONTROLADA 

El Proponente adjuntará a este formulario la propuesta de implantación y puesta en marcha controlada que asegure el éxito del paso a producción, cubriendo por separado la Etapa 1 (marcha blanca de los meses 13 a 15 y producción desde el mes 16) y la Etapa 2 (marcha blanca de los meses 19 y 20 y producción desde el mes 21), con el plan de convivencia entre ambas y el procedimiento de reversión. 

##### FORMULARIO T-19 

##### CARTERA DE INNOVACIONES 

Una ficha por cada una de las cinco innovaciones obligatorias del Artículo 28°. 

|Campo|Contenido|
|---|---|
|Tipodeinnovación(1a5)||
|Nombredelainnovación||
|Problemauoportunidaddelcasoqueresuelve||
|Tecnología,prácticaomodeloquelasustenta||
|Niveldemadurezyescalautilizada||
|Fuentescitadas(APA7.2ed.)||
|Dóndeseinsertaenlaarquitectura||
|PaquetesdelaEDTquelaejecutan||
|Mesdelcronogramaenquesematerializa||
|Inversiónrequerida||
|Efectoenelcostooperacional||
|Beneficioesperadoysucuantificación||
|Indicadordeverificación,líneabaseymeta||
|Momentodemedición||
|Riesgodeadopción,probabilidadeimpacto||
|Estrategiademitigación||
|Plandecontingenciasinorindeloesperado||



Bases Administrativas TFEP-01/2026 64 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### FORMULARIO T-20 

###### CALENDARIO DE ACTIVIDADES 

Las fechas podrán ser ajustadas por el CLIENTE conforme al Articulo 10° de las Bases Administrativas. 

|a|Actividad|Fechainicio|'echatérmino|
|---|---|---|---|
|1|Registrodeparticipantes|14-08-2026|17-08-2026|
|2|PublicacióndelasBasesAdministrativas|19-08-2026|19-08-2026|
|3|Z:'b;iceaíóndelasBasesTécnicasyentregadelcaso<br>acada|19-08-2026|19-08-2026|
|4|Períododeconsultasabiertas|20-08-2026|01-09-2026|
|5i|PublicacióndelActadeRespuestasaConsultas|07-09-2026|07-09-2026|
|6|EntregadelInforme1|07-09-2026|07-09-2026|
|7|Presentaciónpreparatoria1|14-09-2026|25-09-2026|
|8|EntregadelInforme2|05-10-2026|05-10-2026|
|9|Presentaciónpreparatoria2|19-10-2026|02-11-2026|
|10|EntregadelInforme3|13-11-2026|13-11-2026|
|11|Presentaciónpreparatoria3|13-11-2026|20-11-2026|
|12|Entregadepropuestasen sobres cerrados(máximo14:00h).<br>-Incluyeantecedentesadministrativos,garantías,OfertaTécnica<br>yOfertaEconómica.|25-11-2026|25-11-2026|
|13||Presentacióndepropuestasanteempresasevaluadoras|27-11-2026|27-11-2026|
|14||EntregaderesultadosLicitación|01-12-2026|01-12-2026|



Bases Administrativas TFEP-01/2026 65 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

#### FORMULARIO T-21 PONDERACIÓN DE LA EVALUACIÓN TÉCNICA 

Cada subdocumento del Formulario T-7 se evalúa de 0 a 100 puntos conforme al Artículo 56° y pondera según la siguiente tabla. En cada subdocumento que requiere un formulario, el documento debe contener un resumen y análisis, el detalle o listado respectivo debe ser complementado en los respectivos formularios. 

|m|<br>Ítemevaluado/ÍndicePropuesta|Informe1|linforme2||Ponderación|
|---|---|---|---|---|
|Transversal|Formalidadycontenidodeldocumento/Cumplimientode<br>u<br>Instrucciones|4%|3%|2%|
|,|P<br>**ta**ción<br>de<br>l.<br>resen<br>cióndelaempresa<br>FormularioT-6|as|3105|1%|
|2|ResumenEjecutivo,comprensióndelproblemay delanecesidad|11%|6%|4%|
|3|Esquema-desoluciónyalcance<br>Formulario12|21%|12%|10%|
|4|Arquitecturalógicayfísicadelasolución<br>||||
|4.1|Arquitecturalógica<br>a)EsquemaSolución<br>b)ArquitecturaLógicadelaSolución|16%|7%|5%|
|42|Arquitecturafísica<br>a)ArquitecturaFísicadelaSolución<br>b)EspecificacionesTecnologíasdeSoftwareautilizar<br>c)EspecificacionesImplementosaproveer(Hardware<br>ySoftware)<br>d)EspecificacionesDataCenterPrimaria<br>e)EspecificacionesDataCenterSecundario<br>FormularioT-11|16%|12%|10%|
|5|Modeloygestióndedatos|11%|6%|5%|
|6|Metodologías<br>a)MetodologíadeGestióndeProyectos<br>FormularioT-9<br>b)MetodologíadeDesarrolloSoftware<br>FormularioT-10||8%|6%|
|-|Plandetrabajo,EDT,cronogramaeimplantación<br>FormularioT-14<br>FormularioT-15<br>FormularioT-18||9<br>15%|9<br>12%|
|g|Planderiesgos<br>FormularioT-16||10%|7%|
|9|Plandecalidad<br>FormularioT-13<br>FormularioT-17||8%|6%|
|10|Serviciosdeoperaciónynivelesdeservicio|||8%|
|11|Planesenoperación<br>a)PlanMantenciónPreventiva/Evolutiva<br>b)PlanServiciosdeOperación|||6%|



Bases Administrativas TFEP-01/2026 66 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

|m|<br>ftemevaluado/ÍndicePropuesta<br>|Informe1||Informe2||Ponderación|
|---|---|---|---|---|
|12|Equipodetrabajo,subcontratacionesyalianzas<br>FormularioT-8|||5%|
|13|Innovaciones<br>FormularioT-19|177|an|%|
|14|Ventajas,beneficios yconsolidación|||3%|
|TOTAL|Puntajetécnicoponderado|100%|100%|100%|



Bases Administrativas TFEP-01/2026 67 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### FORMULARIO T-22 CONTENIDO DE LOS INFORMES Y PRESENTACIONES PREPARATORIAS 

Con el objeto de asegurar que el proceso sea exitoso y que las propuestas cumplan los objetivos definidos por el CLIENTE, se realizarán tres presentaciones previas de validación. Tienen carácter obligatorio: la no presentación implica quedar fuera del proceso de adjudicación. En cada instancia sólo se abordarán los temas definidos en la agenda. 

###### Informe y presentación 1 

- Presentación de la empresa: reseña de la trayectoria y de las principales capacidades; actividad a la que se dedica y productos o servicios que ofrece. 

- Presentación del problema y de la necesidad: dimensionamiento realista de la magnitud del desafío, comprensión del contexto y de sus particularidades con foco cualitativo, claridad del planteamiento e identificación correcta de los actores afectados. Debe explicar el tamaño del problema, los supuestos del análisis y aportar datos cuantitativos. No mezclar con la solución. La información de apoyo debe estar referenciada. 

- Presentación del esquema de solución y del alcance: coherencia entre el problema definido y la solución planteada; estrategia de la solución y forma de obtener el apoyo de los involucrados clave. 

- Presentación de la arquitectura lógica y física: distinta de la explicación del alcance o del diagrama de solución. Debe tener suficiente detalle para entender cada módulo y cada capa, y ser propia de la solución planteada; no se acepta un diagrama genérico. Debe evidenciar el carácter híbrido exigido en el Artículo 16°. 

- Presentación de la cartera de cinco innovaciones: cada una desarrollada en su idea, tecnología, alcance, forma de implementación y resultados esperados. Si alguna requiere investigación adicional, debe declararse; en ningún caso puede presentarse sólo el título de la innovación. 

- De la Propuesta Técnica corresponde a los subdocumentos: 1, 2, 3,4, 5 y 13. 

###### Informe y presentación 2 

- Correcciones del Informe 1, con tabla de trazabilidad observación—respuesta—sección modificada. 

- Análisis de riesgo de la solución. 

- Análisis de riesgo del desarrollo del proyecto. 

- Análisis de riesgo de implantación. 

- EDT del proyecto y equipo de trabajo: el equipo debe ser coherente con las actividades en términos concretos de la propuesta. 

- Planificación e hitos del proyecto, alineados con el cronograma contractual obligatorio del Artículo 17°. Se evaluará con severidad todo plan de trabajo con actividades genéricas que podrían servir para cualquier proyecto, o incoherente con los objetivos declarados. 

De la Propuesta Técnica corresponde a los subdocumentos: 1, 2, 3, 4, 5, 6, 7, 8, 9 y 13. 

Bases Administrativas TFEP-01/2026 68 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

###### Informe y presentación 3 

- Proveedores clave de la solución. 

- Adquisiciones clave o relevantes de la solución. 

- Curva S del proyecto. 

- Análisis de costos de la solución. Se evaluará con severidad todo presupuesto sobreestimado o subestimado; los ítems presupuestados deben estar justificados y ser coherentes con el plan de actividades. 

- VAN y TIR de la solución. 

- Valorización de las cinco innovaciones en el flujo de caja: inversión, costo operacional y beneficio esperado. 

Se deberá completar la planilla de cálculo que entregará el CLIENTE con la información económica del proyecto, desglosada en gastos de operación, gastos de inversión, gastos administrativos y gastos de recursos humanos. Los gastos asociados a proveedores deben explicitarse en una hoja y sumarse al gasto de operación. Debe incluirse además un flujo de caja mensual con total del mes y monto acumulado. 

De la Propuesta Económica corresponde a: el documento de costos frente a venta y la planilla de cálculo. 

Bases Administrativas TFEP-01/2026 69 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### CAPÍTULO C + FORMULARIOS ECONÓMICOS 

Los formularios de este anexo integran el Sobre N* 3. 

|Código|Formulario|
|---|---|
|E-21|Estructuradelapropuestaeconómica.|
|E-24|Condicionesyparámetrosparalapreparacióndelaofertaeconómica.|
|E-25|Hitosdepago.|
|E-26|Rangodevaloresaceptadosparaperfilesprofesionales.|



##### FORMULARIO E-21 ESTRUCTURA DE LA PROPUESTA ECONÓMICA 

###### ADVERTENCIA: 

El cumplimiento estricto de estas instrucciones es obligatorio. Cualquier desviación, omisión o error en el formato, la estructura o el contenido solicitado resultará en la descalificación automática del proceso de licitación. 

La Oferta Económica debe entregarse de forma separada e independiente de la Oferta Técnica, en la fecha y hora exactas del Formulario T-20. 

La Oferta Económica comprende tres entregables obligatorios que deben presentarse simultáneamente. 

Entregable 1 — Propuesta económica formal 

Documento ejecutivo con la propuesta comercial definitiva. 

1.1 Propuesta de valor económico. Valores totales del proyecto, expresados obligatoriamente en CLP, UF y USD: 

- Valor total de la fase de implementación (Etapa 1 y Etapa 2). 

- Valor total de la fase de Operación por los 36 meses. 

- Valor total del proyecto, suma de los dos anteriores. 

- Tipo de cambio referencial utilizado y su fecha de referencia. 

- Cláusulas de reajustabilidad aplicables. 

- Vigencia de la oferta. 

1.2 Estructura de pagos detallada. 

- Hitos de pago de la fase de implementación conforme al Formulario E-25: identificación de cada hito facturable, porcentaje y monto, entregables que gatillan el pago y criterios de aceptación vinculados. 

- Estructura de pagos mensuales de la fase de Operación: servicios incluidos, componentes fijos y variables, métricas que afectan los pagos variables y periodicidad de facturación. 

Bases Administrativas TFEP-01/2026 70/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

1.3 Resumen ejecutivo de valor. 

- Matriz de servicios y productos incluidos. 

- Exclusiones explícitas. 

- Supuestos y dependencias comerciales. 

- Beneficios económicos para el CLIENTE. 

- Términos y condiciones comerciales relevantes. 

Entregable 2 — Análisis económico-financiero 

Documento técnico con el modelo de negocio y la justificación económica. 

- 2.1 Análisis comparativo de costos frente a precio: cuadro maestro de costos (directos de implementación, directos de operación, indirectos y overhead, por categoría) y cuadro de precio de venta con los márgenes aplicados por componente, todo en CLP, UF y USD. 

- 2.2 Evaluación financiera: VAN con la tasa de descuento utilizada y su justificación, flujo de caja proyectado completo, TIR, análisis de sensibilidad y punto de equilibrio. 

- 2.3 Curva S: costos acumulados, ingresos acumulados y análisis de flujo de caja mensual. 

- 2.4 Estrategia de adquisiciones: matriz de adquisiciones principales, cronograma de compras alineado con el plan de proyecto, estrategia de negociación, contratos críticos, plan de importaciones si aplica y análisis de hacer o comprar. 

- 2.5 Modelo de costos operacionales: recursos humanos, infraestructura y alojamiento, licenciamiento y 

- suscripciones, conectividad, energía e instalaciones, seguros y garantías, y optimizaciones previstas en el tiempo. 

- 2.6 Estructura de mantención y soporte: modelo de costeo, recursos dedicados frente a compartidos, 

- mantención preventiva programada, provisión para mantención correctiva, presupuesto de mejora continua y costos de actualización tecnológica. 

- 2.7 Valorización de las cinco innovaciones: inversión, costo operacional incremental y beneficio esperado de cada una, reflejados en el flujo de caja. 

Entregable 3 — Modelo financiero en planilla de cálculo 

Herramienta de cálculo auditable con el modelo económico completo. Deberá contener, al menos, las hojas de Resumen Ejecutivo, Parámetros, Curva S, Costos, Ingresos, Flujo de Caja e Indicadores. 

Requisitos técnicos obligatorios del modelo: 

- Uso correcto de fórmulas financieras. 

- Referencias absolutas y relativas apropiadas. 

- Validación de datos en las celdas de entrada. 

- Protección de las fórmulas críticas. 

- Documentación de los supuestos en cada hoja. 

- Trazabilidad completa de los cálculos. 

- Ausencia de valores fijos incrustados dentro de las fórmulas. 

Criterios de evaluación del modelo: coherencia y consistencia de fórmulas, flexibilidad para el análisis de 

escenarios, claridad de la presentación, robustez ante cambios de parámetros, alineación con los documentos 1 y2 y cumplimiento de la plantilla proporcionada. 

Bases Administrativas TFEP-01/2026 71/77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

###### Requisitos formales de presentación 

- Documentos 1 y 2 en formato PDF y DOCX; modelo financiero en XLSX. 

- Numeración correlativa de páginas e índice detallado en cada documento. 

- Nomenclatura de los archivos, sin excepción: 

- [EMPRESA]_OfertaEconomica_1_[FECHA].pdf 

- [EMPRESA]_AnalisisFinanciero_2_[FECHA].pdf 

- [EMPRESA]_ModeloFinanciero_3_[FECHA].xIsx 

- Los valores de los tres documentos deben ser idénticos; cualquier discrepancia es causal de descalificacion. 

- Es obligatorio presentar todos los valores en las tres monedas, con el tipo de cambio del Formulario E-24 claramente indicado. 

- La oferta debe incorporar todas las correcciones solicitadas en los informes y presentaciones preparatorias. 

- Toda la información económica está sujeta al acuerdo de confidencialidad. 

###### RECORDATORIO FINAL: 

El incumplimiento de cualquier requisito establecido en estas instrucciones resultará en la descalificación automática del proceso. 

No se aceptarán entregas parciales, fuera de plazo, o que no cumplan con el formato especificado. 

Bases Administrativas TFEP-01/2026 72 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### FORMULARIO E-24 

###### CONDICIONES Y PARÁMETROS PARA LA PREPARACIÓN DE LA OFERTA ECONÓMICA 

|Indicador|Valora|
|---|---|
|DólardelosEstadosUnidos(USD)|$900|
|Euro(EUR)|$1.000|
|Unidad deFomento(UF)|$40.000|
|Tasadeinterés—créditodeconsumo|0,9%mensual|
|Tasadeinterés—líneadecrédito|3,0%mensual|
|Rentabilidadmáximaaobtener|20%|
|Montomáximoautilizarenlíneadecrédito|$50.000.000|
|Porcentajemáximodefinanciamientopropio|20%|
|Porcentajemáximodefinanciamientobancario|80%|
|ImpuestoalValorAgregado|19%|
|Horizontedeevaluación|56meses|



Bases Administrativas TFEP-01/2026 73 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### FORMULARIO E-25 HITOS DE PAGO 

Estructura obligatoria de hitos de pago de la fase de implementación. Los porcentajes se aplican sobre el valor total de la fase de implementación. 

###### Etapa 1 — Implementación 

|-|<br>Descripciónyentregablequelogatilla|Mes||
|---|---|---|---|
|M|Cierredellevantamientoyaprobacióndelalíneabasedealcanceydela<br>matrizdetrazabilidadderequerimientos.|2|9<br>8%|
|H2|Aprobacióndeldocumentodearquitectura,delplandeseguridadydel<br>modelodedatos.|4|7%|
|H3|Entregadelainfraestructurahíbridayhabilitacióndelosambientesde<br>Desarrollo,QA,PreproducciónyProducción,conobservabilidadoperativa.|6|10%<br>.|
|m|E**nt** <br>del<br>sof**t** <br>**d**e<br>la<br>Etapa<br>**1**<br>b;<br>A<br>d<br>i**denci** <br> <br>rega<br>delsof wareela<br>Etapa<br>para pruebas,conQAsuperado<br>y<br>evi<br>a<br>decobertura.|T|T|
|H5|CertificacióndelasolucióndelaEtapa1:pruebas deaceptacióndeusuario,de<br>carga,deresilienciaydeseguridadofensivaaprobadas.|12|10%<br>u|
|He|Iniciode<br>I<br>**ha** bl:<br>dela<br>Etapa**1,** <br>l**and** <br>**i**ón<br>ac**t**i<br>|Iniciode lamarc<br> blanca<br>de la<br>Etapa<br> conpl<br>erevers ónac ivoy<br>usuarioscapacitados.|5|3|
|H7|PasoaproduccióndelaEtapa1ycierreconformedelamarchablanca.|16|10%|
||SubtotalEtapa1||60%|



###### Etapa 2 — Implementación 

|-|<br>Descripciónyentr|egablequelogatilla|Mes|||
|---|---|---|---|---|---|
|H8|Aprobacióndelal|íneabase dealcancedelaEtapa2 ydesudiseñodetallado.|14||5%|
|H9||Entregadelsoftwa|redelaEtapa2para pruebas,conQAsuperado|17||10%|
|H10—|Certificacióndela|solucióndelaEtapa2ycierre deldesarrollo.|18||10%|
|H11|Iniciode'!amarcha<br>producción.<br> <br>|blancadelaEtapa2enconvivenciaconlaEtapa1en<br> <br>|19||5%|
|H2|P<br>jón<br>7asoaprodu.cflon<br>implementación.|de<br>E<br> delaEtapa2yaceptaciónfinaldelproyectode|21||10%|
||SubtotalEtapa 2||||40%|
|Operac|ióndelasolución|<br>Condi||do||
|Hitome<br>produc|nsualen<br>ción|Valormensualfijomáscomponentesvariables,pagadodent<br>delosprimerosdíasdelmessiguientevencido,sujetoal<br>descuentodelasmultas porincumplimientodenivelde<br>servicio.|ro<br>3<br>5|6pagos,<br>6|meses21a|



Bases Administrativas TFEP-01/2026 74 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

La suma de los hitos de la Etapa 1 y de la Etapa 2 debe totalizar el 100 % del valor de la fase de implementación. La fase de Operación se factura integramente contra los 36 pagos mensuales y no puede anticiparse ni prorratearse en la fase de implementación. 

Bases Administrativas TFEP-01/2026 75 /77 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 

##### FORMULARIO E-26 

##### RANGO DE VALORES ACEPTADOS PARA PERFILES PROFESIONALES 

Rangos permitidos de costo y tarifa horaria para los servicios profesionales, expresados en Unidades de Fomento, que deben considerarse en la preparación de la oferta económica. 

|DirectordeProyecto|15-2,8UF|2,5-4,0UF|
|---|---|---|
|GerentedeProyecto|1,5-2,8UF|2,5-4,0UF|
|JefedeProyecto|0,8-2,1UF<br>|1,5-3,0UF<br>|
|JefedeAnálisisy Diseño|0,7-1,4UF<br>|1,0-2,0UF<br>|
|JefedeDesarrollo|0,7-1,4UF|1,0-2,0UF|
|JefedeTIC|0,7-1,4UF|1,0-2,0UF|
|Analista/DiseñadorExperto|0,5-0,8UF|0,8-1,2UF|
|Analista/DiseñadorSenior|0,5-0,7UF|0,7-1,0UF|
|Analista/DiseñadorJunior|0,3-0,6UF|0,5-0,8UF|
|IngenieroExperto|0,6-1,0UF|1,0-1,5UF|
|IngenieroSenior|0,6-0,8UF|0,8-1,2UF|
|IngenieroJunior|0,4-0,7UF<br>|0,6-1,0UF<br>|
|ArquitectoExperto|0,8-1,4UF|1,5-2,5UF|
|ArquitectoSenior|0,8-1,4UF|1,2-2,0UF|
|ArquitectoJunior|0,7-1,0UF|1,0-1,5UF|
|Encargadode SeguridadTI|0,8-1,4UF|1,5-2,5UF|
|IngenierodeDatos|0,6-1,0UF|1,0-1,5UF|
|IngenieroDevOps/SRE|0,6-1,0UF|1,0-1,5UF|
|TIC|0,6-1,0UF|0,8-15UF|
|Documentador|0,3—0,7UF|0,5-1,0UF|
|AnalistaQAExperto|0,5-0,7UF|0,8-1,0UF|
|AnalistaQASenior|0,4-0,6UF|0,6-0,8UF|
|AnalistaQAJunior|0,3-0,4UF|0,4-0,6UF|



Pueden existir otros roles no contenidos en la lista. Deberán declararse en la hoja de tarifas del modelo financiero y respetar rangos coherentes con los aquí indicados. 

Bases Administrativas TFEP-01/2026 76/77 

