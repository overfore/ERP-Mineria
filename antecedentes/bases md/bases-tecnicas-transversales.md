#### FORMULACIÓN DE PROYECTOS 

BASES TÉCNICAS TRANSVERSALES PARA LA PREPARACIÓN DE LA PROPUESTA 

Versión 1.0 Fecha Documento: 18-08-2026 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

##### Bases Técnicas Transversales 

Requisitos técnicos comunes a las trece industrias del llamado 

|Asignatura|TallerdeFormulacióndeProyectosInformáticos—ICl-5444|
|---|---|
|Unidadacadémica|EscueladeInformática,PontificiaUniversidadCatólicadeValparaíso|
|Profesor|AntonioMoyaVillegas—antonio.moyaOpucv.cl|
|Objeto|RemquisissdeEee,<br>infraestructura,calidad,operaciónypresentación<br>exigiblesatodasoluciónofertada|
|Ámbito|Lastreceindustriasdelllamado,sinexcepción|
|Documentobase|BasesAdministrativasTFEP-01/2026(FEPO1.26)|
|Documentocomplementario|BasesTécnicasdelcasoasignadoacadaempresaproponente|
|Versión|1.0—agostode2026|



Este documento fija el piso técnico común del llamado. Todo lo que aquí se exige es exigible en las trece industrias; lo que cada industria tiene de propio —su proceso de negocio, sus volúmenes, sus integraciones y su regulación sectorial — se establece en las Bases Técnicas de cada caso. Los requisitos están codificados como RT-CC.NN y deben responderse uno a uno en el Formulario T-12 de las Bases Administrativas. 

Bases Técnicas Transversales TFEP-01/2026 1/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### CONTENIDO 

||-Disposicionesdeldocumento|Objeto,ámbito,relaciónconlosdemásdocumentos,régimende<br>o<br>cumplimientoyformaderesponder.|1|
|---|---|---|
|II-Arquitecturadelasolución|Modelomulticapadereferencia,modelohíbridodenubey on-<br>premise,ambientesyentregacontinua,datos,integracióny<br>analítica.|25|
|II!-Infraestructura|Siteprincipalon-premise,sitesecundarioyrecuperaciónante<br>desastres,hardware,puestosdetrabajoyequipamientode<br>terreno.|6-8|
|IV-Requisitosnofuncionales|Desempeñoycapacidad,disponibilidadyresiliencia,seguridad,<br>identidad, usabilidadyaccesibilidad,observabilidad,sostenibilidad<br>ycertificaciones.|9-15|
|V-Capacidadestransversales|Módulosobligatoriosen todaindustria,canalesdigitalesy<br>o.<br>a.<br>e<br>o,<br>movilidad,inteligenciaartificialyautomatización.|16-18|
|VI-Proyecto,implantacióny<br>operación|Gobiernodelproyecto,pruebasycriteriosdeaceptación,modelo<br>deoperación,mesadeayuda,mantenciónycapacitación.|7|
|.<br>.<br>.,<br>VII-Exigenciasdepresentación|Presenciadigitaldelproponente,videodepresentación,prototipo<br>.<br>.<br>8.<br>P P<br>:<br>P<br>P<br>P<br>interactivodeinterfazeinnovaciones.|23-26|
|VII!-Anexos|Índicederequisitos,<br>plantilladevolumetría,checklistde<br>Ñ<br>da<br>'<br>entregablesyglosario.|A-D|



###### Cómo se articula este documento con los demás 

Las Bases Administrativas gobiernan el proceso y el contrato: quién participa, qué garantías rinde, cómo se evalúa, qué plazos rigen y qué se penaliza. Su Capítulo 4 enuncia los requisitos transversales en el nivel de exigencia contractual. 

Este documento desarrolla técnicamente ese Capítulo 4 y lo lleva al nivel de requisito verificable. Donde las Bases Administrativas dicen «la solución deberá tener alta disponibilidad», aquí se dice cuál, medida cómo, probada cuándo y acreditada con qué evidencia. 

Las Bases Técnicas de cada caso, que se publican por separado, aportan el contexto de la industria, el proceso de negocio, los requerimientos funcionales, la volumetría real y los valores concretos de todo requisito marcado «Según caso» en este documento. 

Sobre el nivel de exigencia. 

Este pliego describe una plataforma de misión crítica, no un sistema de gestión convencional. Los umbrales, los estándares y los controles que contiene son los que hoy se exigen en el mercado a un proveedor que opera la infraestructura digital de una empresa. Una propuesta que los trate como formalidades a declarar, en lugar de como decisiones de ingeniería a resolver, quedará en evidencia en la matriz de cumplimiento y en la defensa técnica. 

Bases Técnicas Transversales TFEP-01/2026 2/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### TÍTULO 1 DISPOSICIONES DEL DOCUMENTO 

###### CAPÍTULO 1 - OBJETO, ÁMBITO Y RÉGIMEN DE CUMPLIMIENTO 

###### 1.1 Objeto 

Las presentes Bases Técnicas Transversales establecen los requisitos técnicos, de infraestructura, de calidad, de operación y de presentación que toda solución ofertada en la Licitación N” TFEP-01/2026 debe satisfacer, con independencia de la industria y del caso asignado a cada empresa proponente. 

El propósito de este documento es doble. Primero, fijar un piso técnico común y exigente que impida que la comparación entre ofertas se distorsione por diferencias de interpretación sobre qué es una plataforma de misión crítica. Segundo, liberar a las Bases Técnicas de cada caso de repetir aquello que es común, permitiéndoles concentrarse en lo que efectivamente distingue a una industria de otra: su proceso de negocio, sus volúmenes, sus integraciones, sus regulaciones sectoriales y sus criterios de aceptación propios. 

###### 1.2 Ámbito de aplicación 

Este documento aplica íntegramente a documento aplica íntegramente a aplica íntegramente a íntegramente a a los trece casos del llamado: trece casos del llamado: casos del llamado: del llamado: llamado: 

Este documento aplica íntegramente a documento aplica íntegramente a aplica íntegramente a íntegramente a a los trece casos del llamado: trece casos del llamado: casos del llamado: del llamado: llamado: COC 

||Minería—extrac|ciónderecursos||Saladecine—entre|tenimiento|
|---|---|---|---|---|---|
|2|Logística—empr|esadistribuidora|9|Cadenamultitienda|—retail|
|3|Serviciosdeagua|potable—utilities|10||Transportedecarga||
|4|Consultasmédica|s—salud ybienestar|11||Serviciosfinancieros|—banca,segurosycambio|
|5|Cadenadehotele|s—turismoyhospitalidad|12||Agroindustria||
|6|Portuaria—oper|aciónmarítimacomercial|13|| Telecomunicaciones||
||Serviciodepuert<br>marítima|odeportivo—recreación||||
|.3Re<br>sted<br>onfo<br>Bases<br>TFEP-|laciónconlosde<br>ocumentoselee<br>rmealordendep<br> Administrativas<br>01/2026|másdocumentosdelproceso<br> conjuntamenteconlasBas<br>recedenciadelArtículo5”del<br>Reglasdelproceso,participac<br>adjudicación, contrato,nivele<br>penalidadesy exigenciadein<br>cronogramaobligatoriode 56<br>requisitostransversalesdeniv|<br>esAdmi<br>asBases<br>ión,gara<br>sdeserv<br>novación<br> meses(<br>elcontr|nistrativasyconla<br> Administrativas.<br>ntías,evaluación,<br>iciocontractuales,<br>.Incluyeel<br>Art.177)ylos<br>actual(Capítulo4).|sBasesTécnicasdelcas<br>Prevalecensobreeste<br>documentoenmaterias<br>administrativasy<br>contractuales.|
|Bases<br>Trans<br>docum|Técnicas<br>versales(este<br>ento)|Cómodebeestarconstruida, <br>operadaypresentadalasoluc<br>0<br>verificablesycomunesalast|desplega<br>o,<br>ión,ent<br>.<br>receindu|da,protegida,<br>oo<br>érminostécnicos<br>.<br>strias.|Desarrollatécnicamenteel<br>,<br>Capítulo4delasBases<br>o<br>.<br>Administrativas.Nolo<br>contradiceni lorebaja.|



###### 1.3 Relación con los demás documentos del proceso 

Este documento se lee conjuntamente con las Bases Administrativas y con las Bases Técnicas del caso, conforme al orden de precedencia del Artículo 5” de las Bases Administrativas. 

Bases Técnicas Transversales TFEP-01/2026 3/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

||Contextodelaindustria,procesodenegocio,|Puedeendurecercualquier<br>requisitodeeste|
|---|---|---|
|o.<br>BasesTécnicasdelcaso|requerimientosfuncionales,volúmenesreales,<br>.<br>.<br>.<br>.<br>.<br>integraciones,normativasectorial,ventanaoperacionaly|documento;nunca<br>.<br>rebajarlo.Aportalosvalores|
||criteriosdeaceptaciónpropiosdelcaso.|delosrequisitosmarcados<br>«Segúncaso».|



###### 1.4 Régimen de cumplimiento 

Los requisitos de este documento se identifican con un código de la forma RT-CC.NN, donde CC es el número del capítulo y NN el correlativo dentro de él. Cada requisito tiene un carácter: 

||Significado|Efectoenlaevaluación|
|---|---|---|
|Obligatorio|Requisitodecumplimientoforzoso.La<br>7<br>o<br>o<br>soluciónnoesadmisiblesinél.|Suincumplimientoosuomisiónproducenpuntaje<br>ceroenelítemafectado.Elincumplimientodeun<br>requisitoobligatoriodeseguridad,continuidad o<br>arquitecturahabilitalaexclusiónconformeal<br>Artículo58”delasBasesAdministrativas.|
|Deseable|RequisitoqueelCLIENTEvaloraperono<br>exige.Diferenciaunaofertabuenadeuna<br>ofertadestacada.|Sucumplimientoacreditadootorga puntaje<br>adicionaldentrodelftem.Suausencianopenaliza.|
|Segúncaso|Requisitoobligatoriocuyovalornumérico,<br>umbraloalcanceconcretolofijanlasBases<br>Técnicasdelcaso.|Seevalúa contraelvalordelcaso.Si elcasonolo<br>fija,rigeelvalorpordefectoqueestedocumento<br>indiquey,ensu defecto,elcriteriodelaComisión<br>Evaluadora.|



###### 1.5 Cómo debe responderse este documento 

El PROPONENTE deberá acreditar el cumplimiento de la totalidad de los requisitos en el Formulario T-12, Matriz de Cumplimiento Técnico y Trazabilidad, indicando por cada código RT: 

###### 1. Si cumple, cumple parcialmente o no cumple. 

2. El componente, servicio, producto o práctica concreta con que lo satisface, individualizado por nombre y versión. 

3. La sección y página de la Oferta Técnica donde se desarrolla. 

4. La evidencia con que se verificará durante la ejecución: entregable, prueba, informe o certificado. 

Declarar «cumple» sin individualizar el componente ni indicar dónde se desarrolla equivale a no declarar. La Comisión Evaluadora no buscará en la propuesta la respuesta que el PROPONENTE no señaló, y calificará el requisito como no acreditado. 

###### 1.6 Neutralidad tecnológica y criterio de vigencia 

Este documento no impone marcas, productos ni proveedores determinados. Cuando menciona un producto lo hace a título de referencia y admite equivalentes de prestaciones iguales o superiores, lo que el PROPONENTE deberá acreditar. 

Sí impone, en cambio, un criterio de vigencia. Todo componente ofertado —lenguaje, marco de trabajo, motor de base de datos, sistema operativo, biblioteca, dispositivo — deberá contar con soporte vigente del fabricante o de su comunidad al momento de la oferta, y con hoja de ruta de soporte que cubra, como mínimo, la totalidad 

Bases Técnicas Transversales TFEP-01/2026 4/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

del período contractual de 56 meses. El PROPONENTE deberá declarar, por cada componente principal, su versión, su fecha de fin de soporte y su plan de actualización. 

La obsolescencia programada de un componente durante la vigencia del Contrato no es un riesgo del CLIENTE. Si un componente alcanza su fin de soporte antes del mes 56, la actualización o la sustitución es de cargo del ADJUDICATARIO y debe estar prevista y costeada en la oferta. 

###### 1.7 Interpretación de los umbrales 

Todo umbral expresado en este documento es un mínimo exigido, salvo que se indique expresamente que constituye un máximo. Los tiempos de respuesta se entienden medidos en el percentil 95 sobre la experiencia real del usuario final, y no como promedio ni como medición sintética de laboratorio, salvo indicación expresa. 

Las mediciones de disponibilidad se calculan sobre la transacción de negocio completa de extremo a extremo. La disponibilidad de la infraestructura subyacente no es un sustituto válido: un componente activo que devuelve errores no cuenta como disponible. 

Bases Técnicas Transversales TFEP-01/2026 5/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### TÍTULO 11 

###### ARQUITECTURA DE LA SOLUCIÓN 

###### CAPÍTULO 2 - MODELO DE ARQUITECTURA DE REFERENCIA 

###### 2.1 Modelo multicapa exigido 

La solución deberá organizarse en las capas que se describen a continuación. Las capas son de existencia obligatoria; la tecnología con que se materializa cada una es decisión del PROPONENTE, que deberá justificarla. 

|Presentación|Interfacesdelaspersonasusuarias:portalweb,<br>aplicación móvil,terminalesoperacionalesy<br>pantallasdeterreno.|Diseñoadaptativo,accesibleysinlógicade<br>negocio.Ningunainterfazpodráacceder<br>directamentealabasededatos.|
|---|---|---|
|Bordeyexposición|Únicopuntodeentradapúblico:distribuciónde<br>contenidos,balanceo,protecciónperimetraly<br>terminacióndecifrado.|CDN,WAFgestionado,proteccióncontra<br>denegacióndeservicioencapas3,4y7,y<br>terminaciónTLS1.3.|
|Puertadeenlace<br>deservicios|Publicación,autenticación,autorización,<br>cuotas,límitesdetasa,versionadoy<br>observabilidaddelasinterfacesde<br>programación.|Validacióndeesquema,inspeccióndecarga<br>útil,trazabilidadportransacciónycatálogo<br>deservicios.|
|Serviciosde<br>negocio|Lógicadelprocesodenegociodelcaso,<br>organizadaenmódulosconlímitesdecontexto<br>explícitos.|Sinestado,desplegablesdeforma<br>independiente,concontratosversionadosy<br>compatibilidadhaciaatrás.|
|Integracióny<br>eventos|Comunicaciónasíncrona,desacoplamiento,<br>orquestaciónycoreografíadeprocesosentre<br>módulosyconsistemasexternos.|Busointermediariodemensajeríacon<br>persistencia,colademensajesfallidos,<br>reintentoydeduplicación.|
|Datos|Persistenciatransaccional,analítica,<br>documental,deseriesdetiempoydearchivos,<br>segúnlorequieraelcaso.|Separaciónentrelotransaccionalylo<br>analítico.Cifradoenreposo.Respaldoy<br>retencióndeclarados.|
|Seguridad<br>transversal|Identidad,autorización,gestióndesecretos,<br>cifrado,registrodeauditoríaydetección.|Aplicadaatodaslascapas,nocomocapa<br>perimetralúnica.|
|Observabilidad<br>transversal|Métricas,registrosytrazasdistribuidas<br>correlacionadas.|Instrumentaciónconformea<br>OpenTelemetry,coberturadenubeyon-<br>premisesinpuntosciegos.|



###### 2.2 Requisitos de arquitectura 

||Lasoluciónseorganizaráenlasochocapasdelnumeral2.1.ElPROPONENTE||
|---|---|---|
|RT-02.01|presentaráeldiagramadelaarquitecturalógicaidentificandocadacapa,sus<br>componentesylasinterfacesentreellas.|Obligatorio|
||Laarquitecturaserámodular,conlímitesdecontextoexplícitosyacoplamientodébil.||
|RT-02.02|Serechazarátodaarquitecturamonolíticaquenopermitadesplegardeforma<br>independientesuscomponentescríticos.|Obligatorio|



Bases Técnicas Transversales TFEP-01/2026 6/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|RT-02.03|LadescripcióndelaarquitecturaseajustaráaISO/IEC/IEEE42010, convistaslógica,<br>deprocesos,dedespliegue,dedatosydeseguridad.|Obligatorio|
|---|---|---|
|RT-02.04|ElPROPONENTEmantendráunregistrodedecisionesdearquitectura(ADR)fechado,<br>conlaalternativaescogida,lasalternativasdescartadasyelcriteriodedecisión.El<br>registroesentregablecontractualyseactualizarádurantetodalaejecución.|Obligatorio|
|RT-02.05|Lacapadeserviciosdenegocioserásinestado.Elestadodesesión yelestadode<br>z<br>.<br>aiii<br>procesoresidiránenalmacenesexternosconaltadisponibilidad.|Obligatorio|
|RT-02.06|Todaoperacióndeescrituraexpuestaareintentosseráidempotente,conclavede<br>a<br>idempotenciadeclaradaporelclienteyventanadededuplicacióndocumentada.|Obligatorio|
|RT-02.07|Losflujosdeeventosgarantizaránentregaalmenosunavez,condeduplicaciónenel<br>consumidoryordengarantizadodentrodelaparticiónodelagregadocuandoel<br>procesoloexija.|Obligatorio|
|RT-02.08|Lasoluciónimplementarápatronesderesilienciademostrables:reintentocon<br>retrocesoexponencialyvariaciónaleatoria,cortacircuitos,mamparosdeaislamiento,<br>límitesdetasaytiempodeesperaexplícitoentodallamadaremota.Noseadmiten<br>llamadasremotassintiempodeespera.|Obligatorio|
|RT-02.09|Lasolucióndegradarádeformaelegante:antelaindisponibilidaddeuncomponente<br>nocríticodeberácontinuaroperandoenmodoreducido,informandoladegradación<br>alapersonausuaria,ynuncafallardeformatotal.|Obligatorio|
|RT-02.10|Lascapasdeaplicacióne integraciónescalaránhorizontalmentedeforma<br>automática,conumbrales,límitessuperioresycostoasociadodeclaradosenla<br>oferta.|Obligatorio|
|RT-02.11|ElPROPONENTEdeclararáexplícitamentelospuntosúnicosdefallaquesubsistanen<br>suarquitecturayjustificaráporquésonaceptables.Omitirestadeclaracióncuando<br>existanpuntosúnicosdefallaseevaluarácomoobservacióngrave.|Obligatorio|
|RT-02.12|Lasoluciónadmitirásureplicaciónanuevasunidades,sitios,sucursalesofilialesdel<br>ES<br>.<br>Elo<br>.<br>A<br>.<br>.<br>CLIENTEsinrediseñoarquitectónico,medianteparametrizaciónomulti-tenencia.|Segúncaso<br>8|
|RT-02.13|ElPROPONENTEpresentaráunmodelodedominiodelnegociodelcaso,conlas<br>E<br>o<br>P<br>.<br>8.<br>OS<br>entidadesprincipales,susrelaciones yloseventosdenegocioquelasmodifican.|.<br>.<br>Obligatorio|
|RT-02.14|Sevalorarálaaplicacióndocumentadadepatronesdearquitecturaevolutivaque<br>permitansustituiruncomponentesinreescribirlasolución:capaanticorrupción<br>frenteasistemasheredados,estrangulamientoprogresivoyabstracciónde<br>proveedores.|Deseable|



###### 2.3 Estilo arquitectónico y su justificación 

El CLIENTE no impone un estilo arquitectónico. Sí exige que el escogido sea explícito, coherente con la escala del caso y justificado. El PROPONENTE deberá comparar al menos dos alternativas y explicar por qué descarta la no elegida, considerando la complejidad operacional que introduce, el tamaño y las competencias del equipo, el costo de infraestructura y la capacidad del CLIENTE de operarla al término del Contrato. 

Adoptar una arquitectura de microservicios para un caso cuyo volumen no la justifica es un error de ingeniería y se evaluará como tal. La sofisticación no reemplaza a la pertinencia. 

Bases Técnicas Transversales TFEP-01/2026 7/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### CAPÍTULO 3 - MODELO HÍBRIDO: NUBE Y ON-PREMISE 

###### 3.1 Distribución de cargas 

Conforme al Artículo 16” de las Bases Administrativas, la solución será obligatoriamente híbrida. El PROPONENTE deberá presentar una tabla de emplazamiento que asigne cada componente a nube o a onpremise y justifique la decisión. 

|Latenciatoleradaporelproceso|Superiora100ms|Inferiora50msodeterminista|
|---|---|---|
|Consecuenciadelapérdidade<br>o.<br>conectividad|Elprocesopuedeesperar<br>P<br>P<br>p|Elprocesodebecontinuarsin<br>excepción|
|Volumenycostodetransferenciade<br>datos|Volumenmoderado|Altovolumengeneradolocalmente<br>.<br>,<br>(video,telemetría,sensores)|
|Acoplamientoconequipamiento<br>físico|Nuloomediadoporservicios|Directo:balanzas,PLC,lectores,<br>barreras,cámaras,básculas|
|Elasticidaddelademanda|Muyvariableoestacional|Constanteypredecible|
|Restricciónregulatoriaderesidencia<br>.<br>ocustodia|.<br>o,<br>Sinrestricción|Conrestricciónsectorialdeclarada<br>enelcaso|



###### 3.2 Requisitos del componente en nube 

|RT-03.01|ElPROPONENTEdeclararáelproveedordenubepública,laregiónprimariayla<br>regiónsecundariautilizadas.Elproveedordeberácontarconpresenciaderegióno<br>zonaenChileoenSudamérica.|Obligatorio|
|---|---|---|
|RT-03.02|Todosloscomponentesconrequisitodealtadisponibilidadsedesplegaránenal<br>E<br>E<br>menosdoszonasdedisponibilidad.Noseaceptaráundiseñoenunasolazona.|Obligatorio<br>8|
|RT-03.03|Latotalidaddelainfraestructurasedefinirácomocódigo,versionadaenel<br>repositoriodelCLIENTE,revisableyreproducible.Noseadmiteinfraestructura<br>P<br>d<br>y<br>rep<br>creadamanualmenteporconsola,salvolacuentaraízinicial,cuyacreacióndeberá<br>documentarse.|Obligatorio|
|RT-03.04|Laredsesegmentaráporcapas,consubredesprivadasparaaplicaciónydatos,y<br>exposiciónpúblicarestringidaalacapadeborde.Ningúncomponentededatosserá<br>alcanzabledesdeInternet.|Obligatorio|
|RT-03.05|ElPROPONENTEprivilegiaráserviciosadministradosporsobreservicios<br>autoadministradoscuandoelloreduzcaelriesgooperacional,yjustificarácada<br>excepción.|Obligatorio|
|RT-03.06|SeaplicaránprácticasFinOps:etiquetadoobligatoriodetodoslosrecursospor<br>ambiente,móduloycentrodecosto;presupuestos conalertasdedesviación;y<br>reportemensualdeconsumodesglosadoentregadoalCLIENTE.|Obligatorio|
|RT-03.07|ElPROPONENTEdeclararásuestrategiadereversibilidadydemitigacióndelbloqueo<br>porproveedor,identificandoquécomponentessonportables,cuálesnolosonycuál<br>seríaelesfuerzoestimadodeunamigración.|Obligatorio|
|RT-03.08|Lasoluciónemplearáinstanciasreservadas,planesdeahorroocapacidad<br>comprometidacuandoelperfildecargalojustifique,yloreflejaráenlaestructurade<br>costos.|Deseable|



Bases Técnicas Transversales TFEP-01/2026 8/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|RT-03.09<br>.3Requisit|Sevaloraráelusodecómputosinservidorodecontenedoresadministradosparalas<br>cargasdeperfilvariable,conelanálisiscomparativodecostofrenteainstancias<br>permanentes.<br>osdelcomponenteon-premiseydelbordeoperacional|Deseable|
|---|---|---|
||Elcomponenteon-premiseoperarádeformaautónomaydegradadaantelapérdida||
|RT-03.10|totaldelenlaceconlanube,duranteunperíodomínimode 24horascontinuasoel<br>mayorquefijeelcaso.|Obligatorio|
|RT-03.11|Durantelaoperacióndesconectada,lasolucióncontinuaráregistrandolas<br>transaccionesoperacionalescríticasdeformalocal,conintegridadgarantizadaysin<br>pérdidadedatos.|Obligatorio|
|RT-03.12|Restablecidoelenlace,lasincronizaciónseráautomática,conreconciliación<br>deterministadeconflictos,regladeresolucióndocumentadaybitácoraauditablede<br>lasdecisionesaplicadas.|Obligatorio|
|RT-03.13|ElPROPONENTEdeclararáquéfuncionesNOestarándisponiblesenmodo<br>desconectadoyquéprocedimientomanuallassuple.Laausenciadeestadeclaración<br>seevaluarácomoobservacióngrave.|Obligatorio|
|RT-03.14|Losequiposon-premisecríticosseránredundantes.Elalmacenamientolocaltolerará<br>lafalladealmenosundisco;elPROPONENTEdeclararáelnivelRAIDescogidoylo<br>justificaráfrentealasalternativas.|Obligatorio|
|RT-03.15|Lossistemason-premiseseendureceránconformealosCISBenchmarksaplicables,<br>o,<br>.<br>o,<br>congestióncentralizadadeparchesyventanadeaplicaciónacordadaconelCLIENTE.|Obligatorio|
|RT-03.16|Elmonitoreodelcomponenteon-premiseseintegraráalamismaplataformade<br>Mm<br>.<br>o<br>observabilidadquelanube,conalertamientounificado.|A<br>A<br>Obligatorio|
|RT-03.17|Elenlaceentreelsitioon-premiseylanubeseráredundante,concaminosfísicosy<br>proveedoresdistintos,yconmutaciónautomáticacontiempodeconmutación<br>declarado.|Obligatorio|
|RT-03.18|Losdispositivosdebordeydeterrenoseadministrarándeformaremotay<br>centralizada:inventario,configuración,actualizacióndefirmwareydeaplicación,<br>bloqueoyborradoremoto.|Obligatorio|
|RT-03.19<br>.4Conectiv|Sevaloraráelprocesamientoenelbordedelascargasqueloadmitan—filtrado,<br>agregaciónprevia,inferencialocal<br>— reduciendoelvolumentransferidoyla<br>dependenciadelenlace.<br>idadyredes|Deseable|
|RT-03.20|ElPROPONENTEdimensionaráelanchodebandarequeridoporsitio,enrégimen<br>normalyenpeak,ylojustificaráconelcálculodevolumendetransaccionesyde<br>datos.|Obligatorio|
|RT-03.21|LaconexiónentrelareddelCLIENTEylanubeseestablecerámedianteenlace<br>privadodedicadooredprivadavirtualconcifrado,segúnloqueelvolumenyla<br>criticidadjustifiquen.|Obligatorio|



###### 3.3 Requisitos del componente on-premise y del borde operacional 

###### 3.4 Conectividad y redes 

Bases Técnicas Transversales TFEP-01/2026 9/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|RT-03.22|ElaccesoremotodelaspersonastrabajadorasdelCLIENTE,incluidoeltrabajodesde<br>elhogar,se resolveráconaccesoalareddeconfianzacero,converificaciónde<br>posturadeldispositivo.Noseadmiteexponerserviciosinternosdirectamentea<br>Internet.|Obligatorio|
|---|---|---|
|RT-03.23|Laredinalámbricadelossitiosoperacionales,cuandoelcasolarequiera,contarácon<br>segmentaciónportipodedispositivo,autenticaciónporcertificadoocredencialde<br>empresaycoberturaverificadamedianteestudiodesitio.|Segúncaso|
|RT-03.24|ElPROPONENTEdeclararálacalidaddeservicioylapriorizacióndetráficoaplicadaa<br>.<br>,<br>ds<br>7d<br>e<br>s<br>lastransaccionesoperacionalescríticasfrentealtráficoadministrativo.|Deseable|



###### CAPÍTULO 4 - AMBIENTES, ENTREGA CONTINUA Y GESTIÓN DE LA CONFIGURACIÓN 

###### 4.1 Ambientes obligatorios 

|Desarrollo|Construcciónypruebaunitariaporpartedel<br>:<br>equipodedesarrollo.|Aislado.Datossintéticosoanonimizados.<br>,<br>ja<br>Reconstruibledesdecódigo.|
|---|---|---|
|QA|Pruebasfuncionales,deintegración,de<br>regresiónyautomatizadas.|Aislado.Datosdepruebacontroladosy<br>versionados.Reinicioaestadoconocido.|
|Preproducción|Pruebasdeaceptación,decarga,deresiliencia<br>o,<br>yensayodelpasoaproducción.|Equivalenteaproducciónentopología,<br>configuraciónyversiones.Volumende<br>datosrepresentativo.|
|Producción|Operaciónreal.<br>A|Accesorestringidoyauditado.Sinacceso<br>interactivodirectodedesarrolladores.|
|Recuperaciónante<br>desastres|Continuidadanteindisponibilidaddelaregión<br>odelsitioprimario.|Replicacióncontinua.Conmutación<br>probadasemestralmente.|



###### 4.2 Requisitos de entrega continua 

|AAA|Loscincoambientesdelnumeral4.1estaránhabilitadosyoperativoscomocondición<br>delhitoH3delFormularioE-25.|Obligatorio|
|---|---|---|
|RT-04.02|Preproducciónseráequivalenteaproducciónentopología,versionesde<br>componentesy configuración.Lasdiferenciasquesubsistanporcostosedeclararán<br>expresamenteysejustificarán.|Obligatorio|
|RT-04.03|Elcódigoresidiráenunsistemadecontroldeversionesconramasprotegidas,<br>revisiónobligatoriaporparesyprohibicióndeescrituradirectasobrelarama<br>principal.|Obligatorio|
|RT-04.04|Existirátrazabilidadcompletaentrerequerimiento,incidencia,cambiodecódigo<br>.<br>P<br>Ñ<br>q<br>!<br>!<br>89,<br>pruebaejecutadaydesplieguerealizado.|.<br>.<br>Obligatorio|
|RT-04.05|Elflujodeintegracióncontinuaejecutará,comomínimo:compilación,pruebas<br>unitarias,análisisestáticodecódigo,análisisdecomposicióndesoftware,escaneode<br>!<br>Bes<br>P<br>?<br>secretosyescaneodeimágenesdecontenedor,concriteriosdebloqueoautomático<br>deldespliegue.|.<br>.<br>Obligatorio|



Bases Técnicas Transversales TFEP-01/2026 10/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|RT-04.06|Losdesplieguesseránautomatizadosy reproducibles,conreversiónautomatizaday<br>o.<br>e<br>sd<br>sinintervenciónmanualenelpasoaproducción.|Obligatorio|
|---|---|---|
|RT-04.07|Laestrategiadedesplieguepermitiráliberarsininterrupcióndelservicio:azul-verde,<br>canarioo despliegueprogresivo.Sedeclararácuálseempleay sedemostraráen<br>Preproducciónantesdecada pasoaproducción.|Obligatorio|
|RT-04.08|Todaconfiguraciónestaráexternalizadadelartefacto ygestionadaporambiente.Un<br>mismoartefactodeberápoderpromoversedeQAaPreproducciónyaProducciónsin<br>recompilación.|Obligatorio|
|RT-04.09|Lossecretosresidiránen ungestordesecretosconrotaciónautomáticayauditoría<br>deacceso.Quedaprohibidatodacredencialembebidaencódigo,imágeneso<br>archivosdeconfiguración.|Obligatorio|
|RT-04.10|Lasmigracionesdeesquemadebasededatosseránversionadas,reversiblesy<br>ejecutadasdeformaautomatizada,conestrategiadecompatibilidadquepermita<br>convivirdosversionesdelaaplicaciónduranteeldespliegue.|Obligatorio|
|RT-04.11|Lacoberturadepruebasautomatizadasdelcódigodelógicadenegocioserádeal<br>»<br>:<br>menos70%,conumbralbloqueante enelflujodeintegracióncontinua.|Obligatorio|
|RT-04.12|ElPROPONENTEdeclararásufrecuenciadedespliegueobjetivo,sutiempodesdeel<br>compromisodecódigohastaproducción,sutasadecambiosfallidosysutiempode<br>restauración,ylosmedirádurantelaOperación.|Obligatorio|
|RT-04.13|Losambientesnoproductivosseapagaránoreduciránfueradelhorariodeuso,con<br>.<br>elahorroreflejadoenlaestructuradecostos.|Deseable|
|RT-04.14<br>APÍTULO|Sevalorarálaexistenciadeambientesefímerosporramao porincidencia,creadosy<br>.<br>he:<br>destruidosautomáticamente.<br> 5-DATOS,INTEGRACIÓNEINTEROPERABILIDAD|Deseable|
|.1Modelo|ygestióndedatos<br>ElPROPONENTEentregaráelmodelodedatosdocumentadoyundiccionariode||
|RT-05.01|datosconelnombre,eltipo,eldominiodevalores,laobligatoriedad,elpropietario y<br>lasensibilidaddecadaatributo.|Obligatorio|
|RT-05.02|ElPROPONENTEjustificarálaseleccióndelparadigmaydelmotordepersistencia:<br>relacionalonorelacional,garantíastransaccionales,ylaposiciónescogidaentre<br>consistencia ydisponibilidadconformealteoremaCAP,paracadadominiodedatos.|Obligatorio|
|RT-05.03|Todaoperacióndenegocioserátrazable:lasoluciónpermitiráreconstruirquién,<br>qué,cuándo,desdequédispositivoyconquévaloresanterioresyposteriores,para<br>cualquierregistroyencualquiermomentodelperíododeretención.|Obligatorio|
|RT-05.04|LacalidaddedatossegestionaráconformeaISO/IEC25012,convalidaciónenel<br>puntodecaptura,indicadoresdecompletitud,exactitud yconsistencia,ytablerode<br>calidaddisponibleparaelCLIENTE.|Obligatorio|
|RT-05.05|Elalmacenamientotransaccionalyelanalíticoestaránseparados.Ningunaconsulta<br>A<br>,<br>-<br>y<br>analíticapodrádegradareldesempeño<sup>delaoperación.</sup>|Obligatori<br>IBatorlo|



###### CAPÍTULO 5 - DATOS, INTEGRACIÓN E INTEROPERABILIDAD 

###### 5.1 Modelo y gestión de datos 

Bases Técnicas Transversales TFEP-01/2026 11/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|RT-05.06|LasoluciónpermitiráexportarlatotalidaddelainformacióndelCLIENTEenformatos<br>abiertos ydocumentados,encualquiermomentodelContrato,sincostoadicionaly<br>sinintervencióndelADJUDICATARIO.|Obligatorio|
|---|---|---|
|RT-05.07|ElPROPONENTEdeclararálapolíticaderetención,archivadoyeliminaciónporcada<br>dominiodedatos,coherenteconlanormativaaplicablealcaso,eimplementaráun<br>procedimientoverificabledeeliminaciónsegura.|Obligatorio|
|RT-05.08|Losdatospersonalesse trataránconformealArtículo85”delasBases<br>Administrativas,con seudonimizaciónocifradoaniveldecampoparalascategorías<br>sensiblesqueelcasoidentifique.|Obligatorio|
|RT-05.09|ElPROPONENTEpresentaráunaestrategiadegestióndedatosmaestrosqueevitela<br>A<br>.<br>.<br>,<br>.<br>duplicacióndeentidadescompartidasentremódulosyconsistemasexternos.|.<br>.<br>Obligatorio|
|RT-05.10|Sevalorarálaimplementacióndeuncatálogodedatosconlinajeautomatizado,que<br>.<br>:<br>E<br>a<br>permitarastrearelorigendecadaindicadordenegociohastasufuente.|Deseable|



###### 5.2 Migración de datos 

|RT-05.11|ElPROPONENTEpresentaráunplandemigraciónconalcance,origen,volumen,<br>reglasdetransformación,criteriosdecalidad,estrategiadeejecucióny plande<br>reversión.|Obligatorio|
|---|---|---|
|RT-05.12|Lamigraciónincluiráunaetapadeperfiladoysaneamientoprevio,coninformede<br>losdefectosdetectadosenlosdatosdeorigenyladecisiónadoptadasobrecada<br>uno.|Obligatorio|
|RT-05.13|Seejecutaránalmenosdos ensayoscompletosdemigraciónsobrePreproducción<br>antesdelamigracióndefinitiva,conmedicióndeltiempototalydelresultadodela<br>conciliación.|Obligatorio|
|RT-05.14|Laconciliaciónposterioralamigraciónserácuantitativayverificable:recuentos,<br>sumasdecontrolymuestreodirigido.Todadiferenciadeberáquedarexplicada.|Obligatorio|
|RT-05.15|Losdatoshistóricosquenosemigrenquedaránaccesiblesenunrepositoriode<br>,<br>5<br>0.<br>consultaduranteelperíododeretenciónquefije elcaso.|-<br>Segúncaso|



###### 5.3 Integración e interoperabilidad 

|RT-05.16|LosserviciossíncronossedocumentaránenOpenAPI3.1ylosflujosdirigidospor<br>eventosenAsyncAPI2.6osuperior.Ladocumentaciónsegenerarádesdeelcódigoy<br>semantendráactualizadaautomáticamente.|Obligatorio|
|---|---|---|
|RT-05.17|Loscontratosdeinterfazseversionaránsemánticamente,concompatibilidadhacia<br>><br>da<br>.<br>:<br>A<br>:<br>atrásypolíticadeobsolescenciaconpreavisomínimodeseismeses.|Obligatorio|
|RT-05.18|LaautenticaciónentresistemasemplearáOAuth2.1concredencialesdeclienteo<br>autenticaciónmutuaTLS.Quedaprohibidalaautenticaciónporclaveestáticaenla<br>rutadeladirecciónweb.|Obligatorio|
|RT-05.19|Todaintegraciónregistrarálatransaccióndeentradaydesalida,conidentificadorde<br>correlacióncomúnquepermitaseguirunaoperacióndenegocioatravésdetodos<br>lossistemasinvolucrados.|Obligatorio|



Bases Técnicas Transversales TFEP-01/2026 12/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|RT-05.20|Lasintegracionesconsistemasheredadosodetercerosseaislaránmedianteuna<br>capaanticorrupción,demodoqueuncambioenelsistemaexternonopropaguesu<br>modeloalnúcleodelasolución.|Obligatorio|
|---|---|---|
|RT-05.21|ElPROPONENTEdeclarará,porcadaintegración,elmodo(síncronooasíncrono),el<br>volumenesperado,laventanadedisponibilidaddelsistema contraparteyel<br>comportamientodelasolucióncuandoese sistemanoresponde.|Obligatorio|
|RT-05.22|Lasoluciónsoportarálacargaydescargamasivadeinformaciónen formatos<br>abiertos,convalidaciónprevia,informedeerroresporregistroyprocesamiento<br>parcial.|Obligatorio|
|RT-05.23|SeemplearánlosestándaressectorialesdeintercambioquelasBasesTécnicasdel<br>.<br>ml<br>casoidentifiquen.|'<br>Segúncaso|
|RT-05.24|Sevalorarálapublicacióndeunportaldeserviciosparadesarrolladorescon<br>documentaciónnavegable,ambientedepruebasycredencialesdeprueba<br>autoservidas.|Deseable|



###### 5.4 Analítica e inteligencia de negocio 

|RT-05.25|Lasoluciónproveeráunacapaanalíticacontablerosoperacionalesydegestión,<br>PE<br>,<br>construidossobrelosindicadoresquelasBasesTécnicasdelcasodefinan.|Obligatori<br>iii|
|---|---|---|
|RT-05.26|Lostablerospermitiránfiltrarporperíodo,unidadorganizacionalydimensiones<br>propiasdelcaso,yprofundizardesdeelindicadoragregadohastalatransacciónde<br>origen.|Obligatorio|
|RT-05.27|ElCLIENTEpodráconstruirsuspropiosinformessinintervencióndelADJUDICATARIO,<br>medianteunaherramientadeautoservicioconmodelosemánticodocumentado.|Obligatorio|
|RT-05.28|Todoinformeseráexportableen formatosabiertosyprogramableparaenvío<br>po<br>.<br>automáticoporcalendario.|.<br>.<br>Obligatorio|
|RT-05.29|Lalatenciamáximaentrelaocurrenciadeunatransaccióny sudisponibilidadenla<br>ly<br>,<br>Ñ<br>hi<br>capaanalíticaserálaquefije elcasoy,ensu defecto,nosuperarálas4horas.|Segúncaso|
|RT-05.30|Sevalorarálaincorporacióndeanalíticapredictivapertinentealprocesodelcaso,<br>conelmodelo,susvariables,sumétricadedesempeñoy suplandereentrenamiento<br>documentados.|Deseable|



Bases Técnicas Transversales TFEP-01/2026 13/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### TÍTULO 111 INFRAESTRUCTURA 

###### CAPÍTULO 6 - SITE PRINCIPAL ON-PREMISE 

###### 6.1 Alcance y dimensionamiento proporcional 

El PROPONENTE deberá habilitar un recinto técnico para el alojamiento de los servidores, el almacenamiento y los equipos de telecomunicaciones que soportan la operación on-premise del CLIENTE, con un nivel de disponibilidad de infraestructura de 99,95 %. El recinto se emplazará en el espacio físico que proporcione el CLIENTE, cuya ubicación y superficie se establecen en las Bases Técnicas del caso. 

Las exigencias de este capítulo se aplican de manera proporcional a la escala del componente on-premise que el caso requiera: 

|Salatécnicaprincipal<br>pane|Elcasorequierecómputo,almacenamientoy<br>rocesamientosustantivosenlasinstalacionesdel<br>P<br>CLIENTE.|o,<br>Seaplicanintegramentelos<br>requisitosRT-06.01aRT-06.24.|
|---|---|---|
|Salatécnica<br>secundariaodesitio|Sitiosoperacionalesquerequierencómputolocal<br>paracontinuidad,peronoalberganelnúcleo.|Seaplicanlosrequisitosdeenergía,<br>climatización,controldeacceso,<br>deteccióndeincendioymonitoreo,<br>dimensionadosalsitio.|
|.<br>Gabineteo borde<br>y<br>operacional|o,<br>.<br>.<br>o.<br>Puntosdeoperaciónconequipamientomínimo:<br>ES<br>PO<br>pórtico,muelle,salademáquinas,sucursal,faena.|Seaplicanlosrequisitosde<br>proteccióneléctrica,controlde<br>o.<br>.<br>accesofísico,monitoreoremotoy<br>condicionesambientalesdel<br>equipo.|



El PROPONENTE deberá declarar expresamente qué tipología adopta en cada sitio del caso y justificar el dimensionamiento. Sobredimensionar el recinto es tan penalizado como subdimensionarlo: ambos revelan que el cálculo de capacidad no se hizo. 

###### 6.2 Requisitos de obra y habilitación 

|RT-06.01|Elespacioasignadoserádeusoexclusivodelasoluciónyestaráaisladodeotras<br>dependenciasdelCLIENTE,conaccesoindependiente.|Obligatorio|
|---|---|---|
|RT-06.02|Losmurosnoestructuralesdelrecintocontaránconblindajeperimetral;el<br>z<br>><br>:<br>:<br>PROPONENTEespecificaráelmaterialylaresistencia.|Obligatorio|
|RT-06.03|ElPROPONENTEentregaráelplanodedistribucióninternadelrecinto,conla<br>separacióndelaszonasdegeneradores,baterías,climatización,servidores,<br>comunicaciones,trabajoyrespaldo.|Obligatorio|
|RT-06.04|Elpisotécnico,lacanalización,elcableadoestructuradoyeletiquetadoseejecutarán<br>o,<br>As<br>conformeanorma,condocumentacióndelacertificacióndecadaenlace.|Obligatorio|



Bases Técnicas Transversales TFEP-01/2026 14/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

||Losracksdeservidoresseránindependientesdelosracksdeequiposde||
|---|---|---|
|RT-06.05|comunicación.Sedeclararálaocupaciónproyectadadecadarackysumargende<br>crecimiento.|Obligatorio|
|RT-06.06|La<br>obra<br>civil<br>d<br>ión<br>de<br>las<br>**in**stalaci<br>d<br>delCLIENTE;<br>aObracivil<br>deseparacióndelas<br>stalacionesesdecargode<br>; su<br>especificacióntécnicaysucoordinaciónsondecargodelPROPONENTE.|Obligatorio|



###### 6.3 Energía 

|RT-06.07|Elsuministroeléctricodelosequiposseráininterrumpido,consistemade<br>alimentaciónininterrumpidadimensionadoparaunaautonomíamínimade 30<br>minutosaplenacarga.|Obligatorio|
|---|---|---|
|RT-06.08|Lacapacidaddegeneraciónautónomaaseguraráunrangomínimode 24horas<br>continuasdeoperación,conestanquedecombustibledimensionadoycontratode<br>reabastecimientodeclarado.|Obligatorio|
|RT-06.09|Lainstalacióneléctrica delrecintoseráindependientedeladelrestodeledificioy<br>cumplirálanormativaeléctricachilenavigente,incluidalaNChElec.2777sobre<br>sistemasdepuestaatierra.|Obligatorio|
|RT-06.10|Seefectuarárevisiónymediciónsemestraldelasinstalacioneseléctricasdelrecinto,<br>coninformeentregablealCLIENTE.|Obligatorio|
|RT-06.11|ElPROPONENTEdeclararálacargaeléctricaproyectadaenkW,elfactordepotencia<br>A<br>,<br>]<br>.<br>ylaeficienciaenelusodelaenergía(PUE)estimadadelrecinto.|.<br>.<br>Obligatorio|
|RT-06.12|Sevalorarálaredundanciadealimentaciónenconfiguración2NoN+1condoble<br>ne<br>S<br>acometidaytransferenciaautomática.|Deseable|



###### 6.4 Climatización y condiciones ambientales 

||Elrecintocontaráconclimatizacióndeprecisiónparaoperacióncontinua,||
|---|---|---|
|RT-06.13|redundanteenconfiguraciónN+1,concontroldetemperaturaydehumedadrelativa<br>dentrodelosrangosquerecomiendaelfabricantedelequipamiento.|Obligatorio|
|RT-06.14|Semonitorearánenlínealatemperatura,lahumedadylapresenciadeagua,con<br>alertamientointegradoalaplataformadeobservabilidad.|Obligatori<br>igatono|
|RT-06.15|ElARORONENTEdeclararRuestrategjadecontencióndepasillofríoocalientey su<br>efectoenlaeficienciaenergética.|nesezble|



###### 6.5 Detección y extinción de incendios 

|RT-06.16|Elrecintocontarácondeteccióntempranaporaspiracióndeairecontecnología<br>A<br>.<br>.<br>.<br>.<br>.<br>láser,tipoAnaLASERoequivalentedeprestacionesigualesosuperiores.|.<br>Ñ<br>Obligatorio|
|---|---|---|
|RT-06.17|LaextinciónseráautomáticamedianteagentelimpiotipoFM-200oequivalente,con<br>Sl<br>di<br>8<br>ai<br>q<br>:<br>aprobaciónULeinstalaciónconformeanormaNFPA.|Obligatorio|
|RT-06.18|Se proveeráunsistemasecundariodeextintoresportátileshabilitados,con<br>o,<br>A<br>mantenciónycertificaciónvigentes.|.<br>.<br>Obligatorio|



Bases Técnicas Transversales TFEP-01/2026 15/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

El sistema de detección y extinción se integrará al monitoreo en línea y notificará al RT-06.19 Obligatorio NOC y a la contraparte del CLIENTE. 

###### 6.6 Seguridad física y control de acceso 

|RT-06.20|Elingresoalrecintosecontrolarámedianteseguridadfísicaycontroldeacceso<br>biométricobasadoprincipalmenteenbiometríafacial,conAFIScomorespaldo.Se<br>admiteproponersistemasdemayorseguridad.|Obligatorio|
|---|---|---|
|RT-06.21|Todoingresoyegresoquedaráregistradoenunabitácoraauditable,con<br>identificacióndelapersona,fecha,horaymotivo,conservadaporelperíodode<br>retencióndeclarado.|Obligatorio|
|RT-06.22|Entreelaccesoprincipalyeltérminodelpasillodelazonadecontrolsedispondráun<br>espacioparalaatencióndepersonasenprocesodeenrolamiento.Seevaluarámejor<br>.<br>.<br>o,<br>.<br>.<br>.<br>.<br>laexistenciadeunaestacióndeenrolamientofueradelasinstalacionesdelrecinto<br>técnico.|Obligatorio|
|RT-06.23|Altérminodelpasilloseinstalaráunaccesoqueimpidaelpasodemásdeuna<br>personaalavez,connuevaverificacióndeidentidadpreviaalingreso.|.<br>A<br>Obligatorio|
|RT-06.24|ElrecintocontaráconvideovigilanciaymonitoreoIP,conimágenesenlíneay<br>disponiblesparavisualizacióndealmenoslosúltimos30días.Lasgrabaciones<br>anterioresserespaldaránenunmediosecundariorecuperableyauditable.|Obligatorio|
|RT-06.25<br>.7Respald|ElPROPONENTEdeclararáelprocedimientodeaccesodeterceros—fabricantes,<br>.<br>o<br>;<br>.<br>:<br>mantenedores,auditores—conacompañamientoobligatorioyregistro.<br>oycustodiademedios|Obligatorio|
|RT-06.26|Sehabilitaráunserviciodecustodiademediosderespaldoparaelsitioprimario,en<br>unmediofísicotransportableaotrolugarcuandoelCLIENTElodetermine.Seadmite<br>proponerunasoluciónmássegurayeficiente,debidamentejustificada.|Obligatorio|
|RT-06.27|Elrecintodecustodiacumpliráexigenciasdeluminosidad,humedad,ventilacióny<br>cualquierotrofactorque puedaafectarlacalidadyladisponibilidaddelosmedios.|Obligatorio|
|RT-06.28|Sellevaráuninventariodemediosconrotación,verificaciónperiódicadelegibilidad<br>.<br>o<br>.<br>yregistrodetodomovimientodeentradaydesalida.|.<br>.<br>Obligatorio|
|.8Espacio<br>RT-06.29|deoperacióndelpersonal<br>ElPROPONENTEhabilitaráelespaciofísiconecesarioparaelpersonalencargadode<br>laoperaciónyadministracióndelaplataforma,conestacionesdetrabajo,telefonía,<br>SE<br>.<br>.<br>Da<br>conexiónaInternetytodoelementoquepermitarealizarlalaborencondiciones<br>adecuadas.|Obligatorio|
|RT-06.30|Elespaciodeoperaciónestaráseparadodelasaladeequiposynorequeriráel<br>E<br>:<br>E<br>A<br>ingresoalrecintotécnicoparalaslaboreshabitualesdeoperación.|Obligatorio|
|RT-06.31|Lasinstalacionessanitarias,laszonasdeseguridadanteemergenciaylasáreas<br>exterioresexistenteseneledificiodelCLIENTEpodránutilizarseynodeben<br>implementarsenuevamente.ElPROPONENTEdeclararádecuálesharáuso.|Obligatorio|



###### 6.7 Respaldo y custodia de medios 

###### 6.8 Espacio de operación del personal 

Bases Técnicas Transversales TFEP-01/2026 16/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### 6.9 Rutas de comunicaciones 

|RT-06.32|Elaccesoalasredesdecomunicacionesestaráprovistoatravésderutasfísicas<br>o<br>.<br>e<br>distintas,coningresoaledificioporpuntosseparados.|.<br>.<br>Obligatorio|
|---|---|---|
|RT-06.33|ElPROPONENTEproveerátodalaconectividad,laseguridadylascanalizaciones,<br>E<br>.<br>:<br>:<br>7<br>:<br>cañeríasoductosrequeridosparacumplirlosnivelesdeserviciocomprometidos.|Obligatorio|
|RT-06.34<br>APÍTULO|SeprivilegiaráalPROPONENTEqueofrezcaoproveaespecificacionesnuevaso<br>p<br>a<br>a<br>mejoresquelasaquíestablecidas,debidamentefundamentadas.<br> 7-SITESECUNDARIOYRECUPERACIÓNANTEDESASTRES|Deseable|
|.1Configur<br>omplement<br>istintas,en<br>roducción <br>íticos.<br>RT-07.01|aciónexigida<br>ariamentealsitioprincipal,elPROPONENTEdeberáhabilitarunsitiosecundario <br> modalidadactivo-activooactivo-pasivo,conreplicacióndedatosenlíneapara<br> ycaracterísticastecnológicasequivalentesalasdelsitioprincipalenloquerespec<br>ElPROPONENTEdeclararálamodalidadescogida—activo-activooactivo-pasivo—y<br>lajustificaráfrentealcosto,alRTOcomprometidoyalacomplejidadoperacionalque<br>introduce.|endependenci<br> elambiente <br>taalosservici<br>Obligatorio|
|RT-07.02|Elsitiosecundarioestaráemplazadoaunadistanciasuficientedelprincipalparano<br>verseafectadoporelmismoeventodefuerzamayor.ElPROPONENTEdeclararála<br>distanciayelanálisisdeamenazascomunesconsiderado.|Obligatorio|
|RT-07.03|Lareplicacióndedatosserácontinua,conmediciónyalertamientodelretrasode<br>SE<br>replicación.|.<br>.<br>Obligatorio|
|RT-07.04|Elobjetivodetiempoderecuperación(RTO)nosuperará4horasyelobjetivode<br>puntoderecuperación(RPO)nosuperará15minutosparalosservicioscríticos,salvo<br>exigenciasuperiordelcaso.|Obligatorio|
|RT-07.05|Elprocedimientodeconmutaciónestarádocumentado,automatizadoenlamayor<br>medidaposible yejecutableporelpersonaldelCLIENTEtraslatransferenciade<br>conocimiento.|Obligatorio|
|RT-07.06|Existiráunprocedimientoderetornoalsitioprincipaligualmentedocumentadoy<br>-<br>.<br>:<br>probado,conreconciliacióndelosdatosgeneradosdurantelacontingencia.|Obligatorio|
|RT-07.07|Elplanderecuperaciónantedesastresseprobaráalmenosdosvecesalaño<br>medianteconmutaciónreal,coninformederesultados,medicióndelRTOydelRPO<br>efectivamentealcanzadosyplandecorreccióndelasbrechasdetectadas.|Obligatorio|
|RT-07.08|Sevaloraráquelaconmutaciónseaautomáticaanteladeteccióndeindisponibilidad,<br>o<br>.<br>De<br>A<br>.<br>concriteriodedisparodeclaradoyproteccióncontraconmutacióninnecesaria.|Deseable|



###### CAPÍTULO 7 - SITE SECUNDARIO Y RECUPERACIÓN ANTE DESASTRES 

###### 7.1 Configuración exigida 

Complementariamente al sitio principal, el PROPONENTE deberá habilitar un sitio secundario en dependencias distintas, en modalidad activo-activo o activo-pasivo, con replicación de datos en línea para el ambiente de producción y características tecnológicas equivalentes a las del sitio principal en lo que respecta a los servicios 

críticos. 

###### 7.2 Niveles de servicio de infraestructura 

|Energíadelrecinto|99,95%|
|---|---|
|Climatización|99,95%|



Bases Técnicas Transversales TFEP-01/2026 17/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|Redycomunicaciones|99,95%|
|---|---|
|Servidoresycómputo|99,95%|
|Motordebasededatos|99,95%|
|Portalycanalesdeatención|99,95%|
|Transaccióndenegociocríticadeextremoaextremo|99,9%(Artículo78”delasBasesAdministrativas)|



Los niveles de disponibilidad de infraestructura son un medio, no un fin. El compromiso contractual que se mide y se penaliza es el del Artículo 78” de las Bases Administrativas, sobre la transacción de negocio de extremo a extremo. 

###### 7.3 Respaldos 

|RT-07.09|Lapolíticaderespaldoseguiráelesquema3-2-1-1-0:trescopias,en dosmedios<br>distintos,unafueradesitio,unainmutableofueradelíneayceroerroresde<br>verificaciónderestauración.|Obligatorio|
|---|---|---|
|RT-07.10|Losrespaldosestaráncifradosenreposoyentránsito,conclavegestionadadeforma<br>independientedelainfraestructurarespaldada.|Obligatorio|
|RT-07.11|Lascopiasinmutablesestaránprotegidascontraborradoycontramodificación<br>durantesuperíododeretención,inclusofrenteacredencialesadministrativas<br>comprometidas.|Obligatorio|
|RT-07.12|Seejecutaráydocumentaráunapruebaderestauraciónalmenosmensual,sobre<br>.<br>qua<br>:<br>E<br>2<br>unamuestrarepresentativa,conmedicióndeltiempoefectivoderestauración.|Obligatorio|
|RT-07.13|ElPROPONENTEdeclarará,porcadadominiodedatos,lafrecuenciaderespaldo,el<br>,<br>y<br>]<br>.<br>o,<br>períododeretenciónyeltiempoestimadoderestauracióncompleta.|E<br>E<br>Obligatorio|
|RT-07.14|Losrespaldospermitiránlarestauracióngranular:unregistro,unatabla,unmóduloo<br>.<br>elsistemacompleto.|Deseable|



###### CAPÍTULO 8 - HARDWARE, PUESTOS DE TRABAJO Y EQUIPAMIENTO DE TERRENO 

###### 8.1 Infraestructura de cómputo, almacenamiento y red 

|RT-08.01|ElPROPONENTEespecificaráelequipamiento decómputoconsumarca,modelode<br>referencia,procesador,memoria,almacenamientolocal,interfacesyconsumo,junto<br>conelcálculodedimensionamientoquelosustenta.|Obligatorio|
|---|---|---|
|RT-08.02|Elalmacenamientoseráredundante,contoleranciadeclaradaalafalladediscos,<br>controldeerroresymonitoreopredictivodesaluddelosmedios.|Obligatorio<br>5|
|RT-08.03|Losconmutadoresdenúcleo,loscortafuegosylosbalanceadoresdecargaestaránen<br>,<br>ps<br>Ñ<br>a<br>:<br>E<br>configuracióndealtadisponibilidad,sinpuntoúnicodefalla.|.<br>.<br>Obligatorio|
|RT-08.04|Todoelequipamientocontaráconfuentesdepoderredundantesyconexióna<br>oEa<br>circuitoseléctricosdistintos.|Obligatorio|



Bases Técnicas Transversales TFEP-01/2026 18/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

||ElPROPONENTEdeclararáelmargendecrecimientodeldimensionamiento||
|---|---|---|
|RT-08.05|propuesto,expresadocomoporcentajesobrelacargaproyectadadelcaso,yel|Obligatorio|
||procedimientodeampliación.||
|RT-08.06|Elequipamientoseránuevo,sinusoprevio,congarantíadefábricavigentedesdela<br>o,<br>recepciónconforme.|Obligatorio|



###### 8.2 Puestos de trabajo de operación y de back office 

|RT-08.07|ElPROPONENTEespecificarálasestacionesdetrabajorequeridasparalaoperacióny<br>laadministracióndelaplataforma,enlacantidadquedetermineel<br>dimensionamientodelcaso,conmonitoresduales.|Obligatorio|
|---|---|---|
|RT-08.08|LospuestosdetrabajocumpliránlascondicionesergonómicasdelaNCh2527ylos<br>.<br>,<br>ao<br>pan<br>equiposcontaránconcertificacióndeeficienciaenergética.|Obligatorio|
|RT-08.09|Lasestacionesestarángestionadasdeformacentralizada,concifradodedisco,<br>controldedispositivosextraíbles,antiviruscondetecciónyrespuestayactualización<br>automatizada.|Obligatorio|



###### 8.3 Equipamiento de terreno y dispositivos operacionales 

Conforme al Artículo 14.2 de las Bases Administrativas, la especificación técnica del hardware de terreno es de cargo del PROPONENTE aunque su adquisición corresponda al CLIENTE. 

|RT-08.10|ElPROPONENTEespecificarácadadispositivodeterrenoconmarca,modelode<br>referencia,cantidad,característicasmínimas,accesorios,consumiblesycosto<br>unitarioestimado,auncuandosucompraseadecargodelCLIENTE.|Obligatorio|
|---|---|---|
|RT-08.11|Laespecificaciónconsiderarálascondicionesrealesdeusodelcaso:intemperie,<br>humedad,polvo,vibración,temperatura,usoconguantes,luminosidadyautonomía<br>debateríarequeridaporturno.|Obligatorio|
|RT-08.12|Losdispositivosdeclararánsugradodeproteccióncontrapolvoyaguaysu<br>.<br>.<br>:<br>oz<br>resistenciaacaídas,coherentesconelentornodeoperación.|Obligatorio|
|RT-08.13|ElPROPONENTEindicaráelciclodevidaesperadodecadadispositivo,la<br>disponibilidadderepuestosyelplandereposicióndurantelos56mesesdel<br>Contrato.|Obligatorio|
|RT-08.14|LosdispositivosseintegraránalagestióncentralizadadeflotaexigidaenRT-03.18.|Obligatorio|
|RT-08.15|ElPROPONENTE<br>3<br>idad d<br>da<br>tipo<br>de<br>di<br>¡ti<br>ifi**cad** <br>proveerá unaunidad<br>decada<br>tipo<br>de<br>dispositivoespecifi<br>opara<br>pruebasdeaceptaciónporpartedelCLIENTE, antesdelacompramasiva.|Deseable|



###### 8.4 Garantías, repuestos y niveles de reemplazo 

|Hardwarecrítico|Soporte24x7conatenciónensitioycompromisoderesoluciónen 4<br>horas.|
|---|---|
|Hardwarenocrítico|Soporte enhorariohábilconcompromisoderesoluciónen24horas.|
|Softwaredebaseydeplataforma|Soportecontinuodelfabricantedurantetodoelperíodocontractual.|



Bases Técnicas Transversales TFEP-01/2026 19/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|Stockderepuestos|Almenos10%delparqueinstaladoportipodecomponentecrítico,<br>disponibleenChile.|
|---|---|
|Reemplazodecomponentecríticoen<br>falla|Máximo4horasdesdelaconfirmacióndeldiagnóstico.|
|Dispositivosdeterreno|Stockdereemplazoensitioequivalenteal10%delparque,con<br>configuraciónprecargada.|



###### 8.5 Ciclo de vida y disposición final 

|RT-08.16|ElPROPONENTEpresentaráelplandeciclodevidadelequipamiento:recepción,<br>o<br>oz<br>a.<br>.<br>e<br>puestaenservicio,mantención,actualización,retiroydisposiciónfinal.|Obligatorio|
|---|---|---|
|RT-08.17|Todomediodealmacenamientoquesalgadeservicioseráborradodeformasegura<br>e<br>ce<br>se<br>a<br>yverificable,concertificadodedestrucciónodesanitizaciónentregadoalCLIENTE.|oblicarar<br>igatorio<br>8|
|RT-08.18|Ladisposiciónfinaldeequipamientoelectrónicoserealizarácongestorautorizado,<br>conformealanormativaderesiduosaplicable,concertificadodedisposición.|Obligatorio|
|RT-08.19|Sevaloraráunaestrategiadereacondicionamientoodeextensióndevidaútilque<br>reduzcaelimpactoambiental,cuantificadaenlapropuesta.|D<br>bl<br>eseable|



Bases Técnicas Transversales TFEP-01/2026 20/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### TÍTULO IV REQUISITOS NO FUNCIONALES 

###### CAPÍTULO 9 - DESEMPEÑO, CAPACIDAD Y ESCALABILIDAD 

###### 9.1 Umbrales de desempeño 

Los siguientes umbrales son exigibles en producción, medidos en el percentil 95 sobre la experiencia real de la persona usuaria y bajo la carga de peak declarada en las Bases Técnicas del caso. 

|Cargainicial|de unapáginadelportal|2segundos||
|---|---|---|---|
|Navegación|entrevistasyacargadas|1segundo||
|Respuestad|e unainterfazdeprogramacióndeconsultasimple|500ms||
|Respuestad|eunainterfazdeprogramacióndeescrituratransaccional|800ms||
|a<br>Transacción|<br>.<br>Le:<br> operacionalcríticadeterreno,deextremoaextremo|Definidoporelcaso;en <br>segundos|sudefecto, 3|
|Búsquedac|oncriterioscompuestos|3segundos||
|Generación|deuninformeestándarenlínea|30segundos||
|Procesamie|ntoporlotes|10.000registrospor|minuto|
|Cargade un|archivode100MB|60segundos||
|Tiempodea|rranqueenfríode unservicio|60segundos||
|.2Requisit<br>RT-09.01|osdecapacidadyescalabilidad<br>ElPROPONENTEpresentaráelcálculodecapacidadquesust<br>dimensionamiento,conlossupuestosdeusuariosconcurrent<br>segundo,volumendedatosycrecimientoanual,tomadosde|entasu<br>es,transaccionespor<br> lavolumetríadelcaso.|Obligatorio|
|RT-09.02|Lasoluciónsoportarálaconcurrenciayelvolumendetransa<br>E<br>.<br>ymantendrálosumbralesdelnumeral9.1bajoesacarga.|ccionesquefije elcaso,|-<br>Segúncaso|
|RT-09.03|Lasoluciónsoportará,sinrediseño,uncrecimientodealmen<br>dae<br>:<br>y<br>volumetríainicialdelcasoenunhorizontedetresaños.|ostresvecesla|Obligatorio|
|RT-09.04|Elescalamientodelascapasdeaplicacióne integración será<br>.<br>o,<br>o<br>.<br>contiempodereaccióndeclaradoysinpérdidadetransacci|horizontalyautomático,<br>onesencurso.|,<br>Ñ<br>Obligatorio|
|RT-09.05|ElPROPONENTEidentificaráelcomponentequeprimerose<br>a<br>z<br>2<br>botellaalcrecerlacargayexplicarácómolodetectaráycóm|convertiráencuellode<br>E<br>oloresolverá.|Obligatorio|
|RT-09.06|SeejecutaránpruebasdecargasobrePreproducciónconun<br>1,5veceselpeakdeclarado,ypruebasdeestréshastaidenti<br>delasolución.|volumenequivalentea<br>ficarelpuntodequiebre|Obligatorio|
|RT-09.07|Elinformedepruebasdecargaincluirálacurvadetiempod<br>carga,elpuntodesaturación,elconsumoderecursosyelc<br>despuésdelpeak.|erespuestafrentea<br>omportamientodurantey|Obligatorio|



###### 9.2 Requisitos de capacidad y escalabilidad 

Bases Técnicas Transversales TFEP-01/2026 21/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|RT-09.08|Lasolucióndegradarádeformacontroladaalsuperarselacapacidad:encolamiento,<br>limitacióndetasaymensajeexplícitoalapersonausuaria,nuncaerrorgenériconi<br>pérdidasilenciosadetransacciones.|Obligatorio|
|---|---|---|
|RT-09.09|SegestionarálacapacidaddurantelaOperaciónconproyeccióntrimestralde<br>crecimiento,alertasanticipadasdeagotamientoypropuestadeajustede<br>dimensionamientoydecosto.|Obligatorio|
||Sevalorarálaexistenciadepruebasdecargaautomatizadasejecutadasdeforma||
|RT-09.10|periódicaenelflujodeintegracióncontinua,condetecciónderegresionesde<br>desempeño.|Deseable|



###### CAPÍTULO 10 - DISPONIBILIDAD, CONTINUIDAD Y RESILIENCIA 

|RT-10.01|Lasoluciónalcanzaráunadisponibilidadmensualmínimade99,9%paralosservicios<br>clasificadoscomocríticos,medidasobrelatransaccióndenegociodeextremoa<br>extremo.|Obligatorio|
|---|---|---|
|RT-10.02|ElPROPONENTEclasificarácadaserviciodelasoluciónencrítico,alto,medioobajo,<br>justificandolaclasificaciónconelimpactooperacionaldesuindisponibilidad,y<br>aplicaráacadaunoelniveldeserviciocorrespondientedelArtículo78”delasBases<br>Administrativas.|Obligatorio|
|RT-10.03|ElplandecontinuidaddelnegocioseelaboraráconformeaISO22301,conanálisis<br>deimpactoenelnegocio,escenariosdecontingencia,procedimientosmanualesde<br>respaldoycriteriosdeactivación.|Obligatorio|
|RT-10.04|LacontinuidadTICseestructuraráconformeaISO/IEC27031,articuladaconelplan<br>o,<br>,<br>derecuperaciónantedesastresdelCapítulo7.|Obligatorio<br>8|
|RT-10.05|Losmantenimientosprogramadosseejecutaránfueradelaventanaoperacional<br>críticaquedefinaelcaso,conavisopreviomínimodediez díashábiles.|is|
|RT-10.06|Lasoluciónpermitirádesplegarcambiossininterrupcióndelservicio.Lasventanasde<br>indisponibilidadprogramadaseránexcepcionalesydeberánjustificarsecasoacaso.|Oblisatoño<br>E|
|RT-10.07|Seejecutaránpruebasderesilienciamedianteinyeccióncontroladadefallas—caída<br>deinstancia,dezona,dedependenciaexterna,latenciaelevada,saturaciónde<br>disco—antesdecada pasoaproducciónyalmenosunavezporsemestredurantela<br>Operación.|Obiigatoríó|
|RT-10.08|ElPROPONENTEdocumentará,porcadadependenciaexterna,elcomportamientode<br>lasolucióncuandoesadependencianoresponde,respondeconerrororesponde<br>conlentitud.|Obligatorio|
|RT-10.09|Sedeclararáunpresupuestodeerrorporserviciocríticoy su vinculaciónconelritmo<br>dedesplieguedecambios.|D<br>bl<br>eseable|



Bases Técnicas Transversales TFEP-01/2026 22/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### CAPÍTULO 11 - SEGURIDAD DE LA INFORMACIÓN 

###### 11.1 Gobierno y modelo de seguridad 

|RT-11.01|LaarquitecturadeseguridadsebasaráenelmodeloZeroTrustconformeaNISTSP<br>800-207:verificaciónexplícitadecadasolicitud,privilegiomínimoypresunciónde<br>compromiso.|Obligatorio|
|---|---|---|
|RT-11.02|ElPROPONENTEentregaráunmodeladodeamenazasdocumentadoporcada<br>componenteyporcadaintegraciónexterna,con metodologíadeclarada(STRIDEu<br>otra),yloactualizaráantecadacambioarquitectónicorelevante.|Obligatorio|
|RT-11.03|LainformacióndelCLIENTEseclasificaráporniveldesensibilidad,concontroles<br>diferenciadosporniveldocumentadosenunamatriz.|Obligatorio<br>d|
|RT-11.04|Existiráunprogramadegestióndevulnerabilidadesconescaneocontinuoyplazos<br>máximosderemediaciónde7díascorridosparavulnerabilidadescríticas,15días<br>paraaltasy30díasparamedias,contadosdesdesupublicaciónodetección.|Obligatorio|
|RT-11.05|ElPROPONENTEmantendráunamatrizdecontrolesdeseguridadtrazableaISO/IEC<br>27001eISO/IEC27002,indicandoelcontrol,suimplementaciónconcretaenla<br>solución ylaevidenciaqueloacredita.|Obligatorio|
|RT-11.06|SeaplicaránloscontrolesdeISO/IEC27017paralosserviciosennubeydeISO/IEC<br>27018paraeltratamientodedatospersonalesennube.|Obligatorio<br>8|



###### 11.2 Protección de la capa expuesta 

|RT-11.07|Lapublicacióndeserviciosserealizaráexclusivamenteatravésdelacapadeborde,<br>conreddedistribucióndecontenidos,cortafuegosdeaplicacioneswebconreglas<br>gestionadasypersonalizadas,yproteccióncontradenegacióndeserviciodistribuida<br>encapas3,4y7.|Obligatorio|
|---|---|---|
|RT-11.08|ElcifradoentránsitoemplearáTLS1.3,conprohibiciónexpresadeTLS1.0y1.1,<br>conjuntosdecifradomodernos,HSTSconprecargaygestiónautomatizadade<br>certificadosconrotaciónyalertaanticipadadevencimiento.|Obligatorio|
|RT-11.09|Latotalidaddelosdatosenreposoestarácifrada,conclavesgestionadasenun<br>serviciodegestióndeclavesoen unmódulodeseguridaddehardware,políticade<br>rotacióndeclaradayseparacióndefuncionesenlacustodiadeclaves.|Obligatorio|
|RT-11.10|Losdatosdecategoríasensiblequeelcasoidentifiquesecifraránadicionalmentea<br>.<br>.<br>niveldecampo,demodoqueelaccesoalabasededatosnorevelesucontenido.|Segúncaso|
|RT-11.11|Lapuertadeenlacedeserviciosaplicaráautenticación,autorización,cuotas,límites<br>O<br>.<br>oz<br>3<br>detasa,validacióndeesquemaeinspeccióndecargaútil.|Obligatorio<br>8|
|RT-11.12|Lospuntosdeentradapúblicoscontaránconproteccióncontrabotsyabuso<br>automatizado,conretoprogresivoquenodegradelaaccesibilidadnibloqueea<br>personasusuariaslegítimas.|Obligatorio|
|RT-11.13|ElPROPONENTEdeclararálasuperficiedeexposicióncompletadelasolución:cada<br>nombrededominio,puertoyservicioalcanzabledesdefueradelareddelCLIENTE.|Obligatori<br>da|



Bases Técnicas Transversales TFEP-01/2026 23/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### 11.3 Detección, respuesta y evidencia 

|RT-11.14|Loseventosdeseguridadseregistrarándeformacentralizadaeinalterable,con<br>retenciónmínimade docemesesenlíneayveinticuatromesesadicionalesenarchivo<br>recuperable.|Obligatorio|
|---|---|---|
|RT-11.15|LoseventossecorrelacionaránenunaplataformaSIEM,concasosdeusode<br>deteccióndefinidosespecíficamenteparaelprocesodenegociodelcaso,ynosólo<br>genéricosdeinfraestructura.|Obligatorio|
|RT-11.16|Seimplementarádetecciónyrespuestaen puntosfinalesyencargasdetrabajo,<br>.<br>tantoennubecomoon-premise.|Obligatorio|
|RT-11.17|ElPROPONENTEdispondrádeuncentrodeoperacionesdeseguridadconcobertura<br>z<br>a<br>a<br>E<br>24x7,propioosubcontratado,ydeclararásuubicación,dotaciónyprocedimientos.|Obligatorio|
|RT-11.18|Elplanderespuestaaincidentesdeseguridaddefiniráclasificación,cadena de<br>escalamiento,plazos,responsablesyprotocolodecomunicaciónalCLIENTEdentro<br>delasdoshorasdedetectadounincidentedeseveridadcrítica.|Obligatorio|
|RT-11.19|Todabrechadeseguridad odedatospersonalessenotificaráalCLIENTEdentrode<br>las24horasdesudetección,coninformepreliminar,yelanálisisdecausaraízse<br>entregarádentrodeloscincodíashábilessiguientes.|Obligatorio|
|RT-11.20|Seejecutaránpruebasdeintrusiónporunterceroindependientedel<br>ADJUDICATARIO,anualmenteyantesdecada pasoaproducción,conentregaíntegra<br>delinformealCLIENTEy planderemediaciónconplazos.|Obligatorio|
|RT-11.21|SerealizaránejerciciosdesimulacióndeincidenteconparticipacióndelCLIENTEal<br>E<br>Sn<br>menosunavezalañodurantelaOperación.|Deseable|



###### 11.4 Seguridad del ciclo de desarrollo y de la cadena de suministro 

|RT-11.22|Elflujodeintegracióncontinuaincorporaráanálisisestáticodecódigo,análisisde<br>composicióndesoftware,análisisdinámicoyescaneodeimágenesdecontenedor,<br>concriteriosdebloqueoautomáticodeldespliegueantehallazgoscríticos.|Obligatorio|
|---|---|---|
|RT-11.23|Cadaversiónliberadaseacompañarádesuinventariodecomponentesdesoftware<br>enformatoCycloneDXoSPDX,entregadoalCLIENTE.|Obligatorio<br>8|
|RT-11.24|Los artefactossefirmaránysuprocedenciaseverificaráconformeaSLSAnivel3o<br>]<br>superior.|a<br>E<br>Obligatorio|
|RT-11.25|Quedaprohibidoelusodedatosproductivosrealesenambientesnoproductivossin<br>anonimizaciónoseudonimizaciónverificable.|Obligatorio|
|RT-11.26|ElPROPONENTEdeclararáelprocesodeaprobacióndenuevasdependenciasde<br>terceros,incluyendocriteriosdelicencia,mantenciónactivayausenciade<br>vulnerabilidadesconocidas.|Obligatorio|
|RT-11.27|Laspersonasdesarrolladorasnotendránaccesointeractivodirectoalambientede<br>producción.Todoaccesoexcepcionalserátemporal,aprobado,registradoycon<br>sesióngrabada.|Obligatorio|
|RT-11.28|SeaplicaráelmarcoOWASPSAMMoequivalenteparamedirymejorarlamadurez<br>OS<br>y<br>delprocesodedesarrolloseguro,conevaluacióninicialyreevaluaciónanual.|Deseable|



Bases Técnicas Transversales TFEP-01/2026 24/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### 11.5 Certificaciones y estándares de seguridad exigidos 

|Sistemadegestióndeseguridad|ISO/IEC27001eISO/IEC27002|
|---|---|
|Serviciosennube|ISO/IEC27017|
|Datospersonalesennube|ISO/IEC27018|
|Marcodeciberseguridad|NISTCybersecurityFramework2.0|
|Arquitecturadeconfianzacero|NISTSP800-207|
|Seguridaddeaplicaciones|OWASPASVS4.0nivel2comomínimo;OWASPTop10yOWASPAPISecurity<br>Top10|
|Endurecimientodesistemas|CISBenchmarksdelproductocorrespondiente|
|Cadenadesuministrodesoftware||SLSAnivel3osuperior|
|Continuidad|ISO22301eISO/IEC27031|
|Normativanacional|LeyesN*21.719,N”21.663,N*21.459yN*19.799,segúnaplicabilidadalcaso|



###### CAPÍTULO 12 - IDENTIDAD, ACCESO Y GESTIÓN DE SESIONES 

|RT-12.01|Lagestióndeidentidadserácentralizada,confederaciónmedianteOpenIDConnecty<br>OAuth2.1,oSAML2.0cuandolaintegraciónconelCLIENTElorequiera,eintegración<br>coneldirectoriocorporativodelCLIENTEporLDAPosuequivalenteenlanube.|Obligatorio|
|---|---|---|
|RT-12.02|Existiráiniciodesesiónúnicoparatodoslosmódulosdelasolución,concierrede<br>a<br>sesiónpropagadoatodosellos.|Obligatorio|
|RT-12.03|Laautenticaciónmultifactorseráobligatoriaparapersonasusuariasadministradoras,<br>paratodoaccesoprivilegiadoyparatodoaccesooriginadofueradelared<br>corporativa.|Obligatorio|
|RT-12.04|Sesoportaránfactoresresistentesalasuplantacióndeidentidad,tipoFIDO2oclaves<br>:<br>ER<br>deacceso,almenosparalosperfilesadministradores.|Deseable|
|RT-12.05|Elcontroldeaccesoserábasadoenroles,complementadoconcontrolbasadoen<br>atributosdondeelprocesoloexija,conmatrizdesegregacióndefunciones<br>documentadayverificable.|Obligatorio|
|RT-12.06|Losaccesosprivilegiadossegestionaránconelevacióntemporalademanda,<br>Es<br>E<br>a<br>SY<br>.<br>:<br>aprobaciónpreviaygrabacióndesesiónparalasoperacionesdemayorriesgo.|Obligatorio|
|RT-12.07|Lapolíticadesesióndeclararáduraciónmáxima,caducidadporinactividad,<br>renovacióndelacredencialdesesióntraslaautenticación,revocacióninmediatay<br>controldesesionesconcurrentes.|Obligatorio|
|RT-12.08|Lascredencialesdesesiónseránfirmadasydevidabreve,concredencialderefresco<br>rotatoria.Quedaprohibidotransportaridentificadoresdesesiónenlarutadela<br>direcciónweb.|Obligatorio|
|RT-12.09|Seregistraráauditoríacompletadelciclodevidadelaidentidad:creación,<br>modificación,elevación,bloqueoybajadecuentas,connorepudioyretención<br>declarada.|Obligatorio|



Bases Técnicas Transversales TFEP-01/2026 25/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|RT-12.10|Elaprovisionamientoyeldesaprovisionamientoestaránautomatizadosyligadosal<br>ciclodevidalaboral,conbajaefectivaenunplazonosuperiora24horasdesdela<br>desvinculación.|Obligatorio|
|---|---|---|
|RT-12.11|Elmecanismodeautenticaciónseadecuaráalperfiloperacionalrealdescritoenel<br>caso:entornosdeterreno,usoconguantes,bajaalfabetizacióndigital,dispositivos<br>compartidosporturnoyausenciadecorreoelectrónico personal.|Segúncaso|
|RT-12.12|LaspersonasusuariasexternasdelCLIENTE—clientes,proveedores,pacientes,<br>productores,segúnelcaso—dispondrándeunmecanismoderegistro,verificación<br>deidentidadyrecuperacióndeaccesoautoservidoyseguro.|Segúncaso|
|RT-12.13|ElPROPONENTEdeclararáelprocedimientodeaccesodeemergencia(cuentade<br>0<br>,<br>a<br>últimorecurso),sucustodia,sucontroly suauditoría.|Obligatorio|



###### CAPÍTULO 13 - USABILIDAD, ACCESIBILIDAD Y EXPERIENCIA DE USUARIO 

|RT-13.01|TodaslasinterfacesdestinadasapersonasusuariascumpliránWCAG2.2nivelAA,<br>verificadoconherramientasautomatizadasycon pruebasmanuales, coninformede<br>conformidadentregable.|Obligatorio|
|---|---|---|
|RT-13.02|Eldiseñoseráresponsivoyfuncionarácorrectamenteenescritorio,tabletay<br>teléfono,conpuntosdequiebrecoherentesyadaptacióninteligentedelcontenido,<br>nosimplereducción.|Obligatorio|
|RT-13.03|ElPROPONENTEejecutaráinvestigaciónconpersonasusuariasrealesdelCLIENTE,<br>prototipadoypruebasdeusabilidadantesdelaconstruccióndefinitiva,y<br>documentaráloshallazgosyloscambiosdediseñoqueprodujeron.|Obligatorio|
||Secomprometeránindicadoresdeusabilidadmedibles:tiempomáximodela||
|RT-13.04|transacciónoperacionalcrítica,númeromáximodepasos,tasadeerrortoleraday<br>tiempodeaprendizajeesperadoporperfil.|Obligatorio|
|RT-13.05|Ningunafuncionalidadprincipalrequerirámásdetresinteraccionesdesdelapantalla<br>deiniciodelperfilcorrespondiente.|Obligatorio|
|RT-13.06|Lasoluciónentregaráretroalimentaciónvisualclaraantecadaacción,manejarálos<br>erroresdeformacomprensible—indicandoquéocurrióyquéhacer—yevitará<br>mensajestécnicosdirigidosalapersonausuariafinal.|Obligatorio|
|RT-13.07|Lasoluciónsoportaráapersonasusuariasconbajaalfabetizacióndigital:alto<br>contraste,objetivostáctilesdealmenos44x44píxeles,iconografíaacompañadade<br>texto,yflujosguiadospasoapaso.|Obligatorio|
|RT-13.08|Cuandoelcasolorequiera,lasinterfacesdeterrenooperaránconguantes,ala<br>.<br>.<br>o<br>.<br>.<br>o,<br>intemperie,conluminosidadvariableysinconexión.|Segúncaso|
|RT-13.09|Existiráunsistemadediseñodocumentadoconpaletadecoloresacotada,jerarquía<br>tipográficadealomásdosfamilias,iconografíacoherente,retículaycomponentes<br>reutilizables.|Obligatorio|
|RT-13.10|ElPROPONENTEdeclararálamatrizdenavegadoresydeversionessoportadasy su<br>a<br>o,<br>políticadeactualización.|.<br>.<br>Obligatorio|
|RT-13.11|Lasoluciónseránavegableintegramenteporteclado,conordendefocológico<br>8<br>E<br>P<br>!<br>gico<br>Y<br>atajosparalasoperacionesfrecuentes.|z<br>;<br>Obligatorio|



Bases Técnicas Transversales TFEP-01/2026 26/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

Se valorará el soporte de modo oscuro, de personalización de la interfaz por persona RT-13.12 Deseable usuaria y de múltiples idiomas cuando el caso lo justifique. 

###### CAPÍTULO 14 - OBSERVABILIDAD Y GESTIÓN DEL SERVICIO 

|RT-14.01|Laobservabilidadseráunificadaparanubeyon-premise,conmétricas,registrosy<br>trazasdistribuidascorrelacionadasporunidentificadorúnicodetransacción,<br>instrumentadasconformeaOpenTelemetry.|Obligatorio|
|---|---|---|
|RT-14.02|ElCLIENTEdispondrádeaccesopropioypermanentealostablerosoperacionalesy<br>denegocio,condatosentiemporealycapacidaddeexportación.|Obligatorio|
|RT-14.03|Losindicadoresdeniveldeserviciosemediránsobrelaexperienciarealdela<br>personausuaria ynosobrepruebassintéticas,sinperjuiciodequeestasseempleen<br>comocomplemento.|Obligatorio|
|RT-14.04|Elalertamientosebasaráensíntomasdenegocioynosóloenumbralesde<br>infraestructura,consupresiónderuido,agrupación,escalamientoautomáticoy<br>turnosdedisponibilidaddeclarados.|Obligatorio|
|RT-14.05|Existiráunlibrodeoperaciónyunaguíaderesolucióndocumentadosparacada<br>escenariodefallaprevisible,conautomatizaciónprogresivadelastareasrepetitivas.|Obligatorio|
|RT-14.06|Todoincidentecríticodarálugaraunanálisisdecausaraízobligatorio,coninforme<br>entregabledentrodecincodíashábilesyseguimientodelasaccionescorrectivas<br>hastasucierre.|Obligatorio|
|RT-14.07|Losregistrosdelasoluciónnocontendrándatospersonalessensiblesnicredenciales,<br>ysuaccesoestarácontroladoyauditado.|Obligatorio|
|RT-14.08|ElPROPONENTEdeclararálaretencióndemétricas,registrosytrazas,y sucosto<br>asociado,distinguiendoelalmacenamientoenlíneadelarchivado.|Obligatorio|
|RT-14.09|Sevaloraráladetecciónproactivadeanomalíasmedianteanálisisdel<br>comportamientohistórico,conalertaantesdequeelincidenteafectealaoperación.|Deseable|



###### CAPÍTULO 15 - SOSTENIBILIDAD, EFICIENCIA Y CERTIFICACIONES 

###### 15.1 Sostenibilidad y eficiencia energética 

|RT-15.01|ElPROPONENTEdimensionarálainfraestructuraajustadaalademandareal,<br>evitandocapacidadociosapermanente,ydeclararáelfactordeutilización<br>proyectado.|Obligatorio|
|---|---|---|
|RT-15.02|Losambientesnoproductivosseapagaránoreduciránfueradelhorariodeuso.|Obligatorio|
|RT-15.03|ElPROPONENTEestimarálahuelladecarbonoanualdelaoperacióndelasolucióny<br>declararálametodologíaempleada.|Obligatorio|
|RT-15.04|Sedeclararálaeficienciaenelusodelaenergía(PUE)delrecintoon-premiseyla<br>intensidaddecarbonodelaregióndenubeescogida.|Obligatorio|



Bases Técnicas Transversales TFEP-01/2026 27/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|RT-15.05|Sevalorarálaelecciónderegionesdenubeconmenorintensidaddecarbonocuando<br>lalatenciaylaregulaciónlopermitan,conelanálisiscomparativocorrespondiente.|Deseable|
|---|---|---|
|RT-15.06|SevaloraráladefinicióndemetasdereduccióndelconsumodurantelaOperación,<br>conmediciónyreporteanual.|Deseable|



###### 15.2 Certificaciones institucionales exigidas Certificaciones institucionales exigidas institucionales exigidas exigidas 

15.2 Certificaciones institucionales exigidas Certificaciones institucionales exigidas institucionales exigidas exigidas 

|ISO/IEC27001—Seguridaddela<br>información|Obligatoria|Vigentealafechadelaofertaoplandecertificación<br>conhitos verificablesdentrodelosprimeros12meses<br>delContrato.|
|---|---|---|
|ISO9001—Gestióndelacalidad|Obligatoria|Vigentealafechadelaoferta.|
|ISO/IEC20000-1—Gestiónde<br>serviciosdeTl|Deseable|Vigenteoplandeclarado.|
|ISO22301—Continuidaddelnegocio|Deseable|Vigenteoplandeclarado.|
|ISO/IEC42001—Gestiónde<br>inteligenciaartificial|Deseable|ExigiblesólosilasoluciónincorporacomponentesdelA.|
|Certificaciónsectorialespecífica|Segúncaso|LaqueidentifiquenlasBasesTécnicasdelcaso.|



###### 15.3 Certificaciones del personal 

El equipo propuesto acreditará, como mínimo, las siguientes certificaciones individuales vigentes. Una misma persona puede acreditar más de una, pero no puede contarse dos veces para el mismo requisito. 

|Certificaciónocompetencia|Cantidadmínima|
|---|---|
|Gestióndeproyectos(PMP,PRINCE2oequivalente)|2personas|
|Gestióndeservicios(ITIL4Foundationosuperior)|5personas|
|GobiernodeTI(COBIToequivalente)|2personas|
|Arquitecturadenubedelproveedorofertado,nivelprofesionalo de<br>arquitecto|3personas|
|Seguridaddelainformación(CISSP,CISM,CEH,OSCPoequivalente)|2personas|
|Basesdedatosdelmotorofertado|2personas|
|Calidadypruebasdesoftware(ISTQBoequivalente)|2personas|



|RT-15.07|Lascertificacionesseacreditaránconcopiadelcertificadovigenteyconelcódigode<br>oi<br>.<br>a<br>.<br>verificacióndelorganismoemisorcuandoexista.|Obligatorio|
|---|---|---|
||Laspersonascertificadasformaránpartedelequipoefectivamenteasignadoal||
|RT-15.08|PROYECTO,condedicacióndeclarada.Noseaceptaráacreditarpersonalqueno<br>participe.|Obligatorio|
||ElADJUDICATARIOmantendrávigentesestascertificacionesdurantetodoelperíodo||
|RT-15.09|contractualylasrepondráantelasalidadeunapersonacertificada,conformeal<br>Artículo76”delasBasesAdministrativas.|Obligatorio|



Bases Técnicas Transversales TFEP-01/2026 28/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### TÍTULO Y 

###### CAPACIDADES TRANSVERSALES DE LA SOLUCIÓN 

Los módulos y capacidades de este Título son exigibles en las trece industrias. No son el negocio del caso —eso lo definen las Bases Técnicas respectivas— sino la infraestructura funcional sin la cual ninguna plataforma de misión crítica es operable, auditable ni administrable. 

###### CAPÍTULO 16 - MÓDULOS TRANSVERSALES OBLIGATORIOS 

###### 16.1 Administración y parametrización 

|RT-16.01|LasolucióndispondrádeunmódulodeadministraciónquepermitaalCLIENTE,sin<br>intervencióndelADJUDICATARIO,gestionarpersonasusuarias,roles,permisos,<br>unidadesorganizacionalesysusjerarquías.|Obligatorio|
|---|---|---|
|RT-16.02|Lasreglasdenegocioparametrizables—umbrales,plazos,montos,tolerancias,<br>catálogos,listasdevalores,textosdenotificación—seránconfigurablesdesdela<br>.<br>o<br>o,<br>.<br>.<br>o,<br>os<br>interfazdeadministración,concontroldeversionesyregistrodequiéncambió quéy<br>cuándo.|.<br>.<br>Obligatorio|
|RT-16.03|Todocambiodeparámetroconimpactooperacionalrequeriráaprobacióndeun<br>.<br>po<br>rr<br>segundoperfilyquedaráregistradoconsujustificación.|.<br>.<br>Obligatorio|
|RT-16.04|ElPROPONENTEdeclararáexpresamentequéelementossonparametrizablesy<br>cuálesrequierendesarrollo.Presentarcomoparametrizableloqueexigedesarrollo<br>seevaluarácomoobservacióngrave.|Obligatorio|
|RT-16.05<br>6.2Auditor|Existiráunambientedesimulaciónquepermitaprobarelefectodeuncambiode<br>;<br>:<br>o<br>parámetroantesdeaplicarloaproducción.<br>íaytrazabilidad|Deseable|
|RT-16.06|Todaoperaciónquecree,modifiqueoelimineinformaciónquedaráregistradacon<br>identificacióndelapersonaodelsistemaquelaejecutó,fechayhoraconzona<br>horaria,origen,valoresanterioresyvaloresposteriores.|Obligatorio|
|RT-16.07|Elregistrodeauditoríaseráinalterableynopodrásermodificadonieliminadopor<br>ningúnperfil,incluidoeladministradordelaplataforma.|Obligatorio|
|RT-16.08|ElCLIENTEpodráconsultaryexportarlaauditoríadesdelainterfaz,confiltrospor<br>,<br>É<br>.<br>A<br>.<br>persona,período,entidadytipodeoperación,sinrequeriraccesoalabasededatos.|.<br>.<br>Obligatorio|
|RT-16.09|Lasconsultasainformaciónsensiblequedaránregistradas,nosólolas<br>o<br>a<br>8<br>!<br>modificaciones.|,<br>Segúncaso|
|RT-16.10|Elperíododeretencióndelaauditoríaseráelquefije elcasoy,ensu defecto,no<br>.<br>.<br>.<br>mn<br>inferioracincoaños.|Segúncaso|



###### 16.2 Auditoría y trazabilidad 

Bases Técnicas Transversales TFEP-01/2026 29/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### 16.3 Flujos de trabajo y motor de reglas 

|RT-16.11|Lasoluciónsoportaráflujosdetrabajoconestados,transiciones,responsables,<br>.<br>E<br>o<br>2<br>.<br>plazos,escalamientoautomáticoporvencimientoydelegaciónporausencia.|Obligatorio|
|---|---|---|
|RT-16.12|LosflujosseránconfigurablesporelCLIENTEsindesarrollo,almenosenlorelativoa<br>responsables,plazosynivelesdeaprobación.|Obligatorio|
|RT-16.13|Todasolicitudpendienteserávisibleparasuresponsableenunabandejadetareas<br>unificada,conpriorizaciónyalertadevencimiento.|Gbiistoia<br>8|
|RT-16.14|Elmotordereglaspermitirádefinircondicionesdenegocioevaluablessin<br>recompilación,contrazabilidaddequéreglaseaplicóacadatransacción.|D<br>bl<br>eseable|
|6.4Gestió<br>RT-16.15|ndocumentalyfirmaelectrónica<br>Lasolucióngestionarádocumentosconversionado,metadatos,controldeacceso,<br>z<br>.<br>.o<br>búsquedaporcontenidoypormetadato,yprevisualizaciónsindescarga.|Obligatorio|
|RT-16.16|Losdocumentossealmacenaráncifrados,converificacióndeintegridadyretención<br>ae<br>conformealapolíticadelcaso.|Obligatorio<br>-|
|RT-16.17|LasoluciónsoportaráfirmaelectrónicaconformealaLeyN*19.799,confirma<br>avanzadaparalosactosqueelcasolorequiera,yverificacióndevalidezdel<br>certificadoalmomentodelafirma.|Segúncaso|
|RT-16.18|Se generaráelsellodetiempoy seconservarálaevidenciadefirmaquepermita<br>ce<br>o<br>e<br>q<br>verificareldocumentoconposterioridadalvencimientodelcertificado.|Segúncaso|
|RT-16.19|LasolucióngenerarádocumentosapartirdeplantillasadministrablesporelCLIENTE,<br>z<br>.<br>.<br>condatosdelatransacciónysalidaenformatoabierto.|Obligatorio<br>8|



###### 16.4 Gestión documental y firma electrónica 

###### 16.5 Notificaciones y mensajería multicanal 

|RT-16.20|Lasoluciónenviaránotificacionesporalmenostrescanales:correoelectrónico,<br>notificaciónenlaaplicaciónymensajeríainstantáneaoSMS,segúnloqueelcaso<br>requiera.|Obligatorio|
|---|---|---|
|RT-16.21|LasplantillasdenotificaciónseránadministrablesporelCLIENTE,convariablesdela<br>transacción,yversionadas.|Obligatorio|
|RT-16.22|Cadapersonausuariapodráconfigurarsuspreferenciasdecanal ydefrecuencia,<br>e<br>]<br>.<br>:<br>respetandolasnotificacionesqueelCLIENTEdefinacomoobligatorias.|AMES<br>igatorio<br>8|
|RT-16.23|Elenvíoseráasíncrono,conreintentoantefalla,controldeduplicadosyregistrode<br>entrega,apertura yerrorporcadamensaje.|Obligatorio|
|RT-16.24|ElPROPONENTEdeclararáelproveedordecadacanal,sucostounitario,suvolumen<br>proyectadoyeltratamientodelcostovariableenlaOfertaEconómica.|óblitodo<br>8|
|RT-16.25|Lasnotificacionesrespetaránlanormativadecomunicacionescomercialesy<br>e<br>.<br>permitiránlabajacuandocorresponda.|Obligatori<br>igatorio<br>8|
|RT-16.26|Sevalorarálaintegraciónconcanalesconversacionalesquepermitanalapersona<br>usuariaresponderyejecutaraccionesdesdeelpropiocanal.|esauBra|



Bases Técnicas Transversales TFEP-01/2026 30/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### 16.6 Búsqueda, reportería y exportación 

|RT-16.27|Lasolucióndispondrádebúsquedaglobalconindexacióndetextocompleto,<br>toleranciaaerroresdeescritura,filtrosfacetadosyrespetodelcontroldeaccesode<br>lapersonaquebusca.|Obligatorio|
|---|---|---|
|RT-16.28|Loslistadosseránordenables,filtrables,paginadosyexportablesenformatos<br>z<br>abiertos,conelfiltroaplicadoreflejadoenlaexportación.|Obligatorio<br>8|
|RT-16.29|Lasexportacionesdegranvolumenseprocesarándeformaasíncrona,con<br>AL<br>Ea<br>.<br>o,<br>notificaciónalcompletarseysinbloquearlasesión.|,<br>]<br>Obligatorio|
|RT-16.30<br>6.7Portal|Todaexportacióndeinformaciónsensiblequedaráregistradaenlaauditoría,con<br>P<br>q<br>8<br>!<br>identificacióndequiénexportóquéycuándo.<br>públicoycanalesdeautoatención|.<br>.<br>Obligatorio|
|RT-16.31|Lasolucióndispondrádeunportalpúblicoconlainformaciónqueelcasodetermine,<br>accesiblesinautenticación,conlosmismosestándaresdeaccesibilidadydesempeño<br>queelrestodelaplataforma.|Segúncaso|
|RT-16.32|Laspersonasusuariasexternasdispondrándeautoatenciónparalasconsultasde<br>.<br>.<br>AA<br>.<br>.<br>mayorfrecuencia,evitandoelcontactotelefónicoparaoperacionessimples.|Obligatorio|
|RT-16.33|ElPROPONENTEestimarálareducciónesperadadelvolumendeatenciónasistidapor<br>a<br>peraca<br>e<br>P<br>efectodelaautoatenciónycomprometeráelindicador.|Obligatorio|
|RT-16.34|El<br>portalpúblicoresistirápicosdetráficosindegradarlosserviciostransaccionales<br>P<br>P<br>P<br>8<br>internos,medianteaislamientoderecursosycaché.|.<br>.<br>Obligatorio|



###### 16.7 Portal público y canales de autoatención 

###### CAPÍTULO 17 - CANALES DIGITALES Y MOVILIDAD 

|RT-17.01|Lasoluciónproveeráunaaplicaciónmóvilparalosperfilesoperacionalesqueelcaso<br>identifique,confuncionamientosinconexióny sincronizacióndiferidacuandola<br>operaciónenterrenolorequiera.|Segúncaso|
|---|---|---|
|RT-17.02|ElPROPONENTEdeclararásilaaplicaciónesnativa,híbridaowebprogresiva,y<br>justificaráladecisiónfrentealrequisitodeoperacióndesconectada,alaccesoa<br>periféricosyalcostodemantención.|Obligatorio|
|RT-17.03|Laaplicaciónsoportarálasversionesdesistemaoperativomóvilvigentesylasdos<br>.<br>te<br>2.”<br>anteriores,conpolíticadeactualizacióndeclarada.|Obligatorio|
|RT-17.04|Laaplicaciónsedistribuiráporlastiendasoficialesomediantegestióndeflota<br>P<br>.<br>.<br>Po,<br>e<br>.<br>.g<br>corporativa,confirmadelaaplicaciónyverificacióndeintegridad.|.<br>.<br>Obligatorio|
|RT-17.05|Lainformaciónalmacenadaeneldispositivoestarácifrada,conborradoremotoy<br>eo<br>.<br>o<br>.<br>bloqueoantepérdidaodesvinculacióndelapersonausuaria.|,<br>.<br>Obligatorio|
|RT-17.06|Laaplicaciónintegrarálosperiféricosque elcasorequiera:cámara,lectordecódigos<br>P<br>.<br>8<br>bl<br>q<br>:<br>A<br>!<br>q<br>NFC,GPS,impresoradeetiquetas,balanzaobáscula.|Segúncaso|
|RT-17.07|Elconsumodedatosmóvilesydebateríaseoptimizaráy sedeclararáelconsumo<br>Y<br>P<br>y<br>estimadoporturnodetrabajo.|.<br>.<br>Obligatorio|



Bases Técnicas Transversales TFEP-01/2026 31/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|RT-17.08|Sevaloraráladisponibilidaddeunaversióndelainterfazparadispositivosdebajo<br>.<br>.<br>:<br>.<br>costoodegeneracionesanteriores,ampliandolacoberturadepersonasusuarias.|Deseable|
|---|---|---|



###### CAPÍTULO 18 - INTELIGENCIA ARTIFICIAL Y AUTOMATIZACIÓN 

La incorporación de inteligencia artificial no es obligatoria. Sí lo es, cuando el PROPONENTE la incorpore, cumplir íntegramente los requisitos de este capítulo. Una capacidad de inteligencia artificial mal gobernada es un riesgo, no una ventaja competitiva. 

|RT-18.01|ElPROPONENTEdeclararácadacomponentedeinteligenciaartificial:propósito,<br>modelooservicioempleado,proveedor,versiónyubicacióndeprocesamientodelos<br>datos.|Obligatorio|
|---|---|---|
|RT-18.02|SegarantizarácontractualmentequelosdatosdelCLIENTEnoseránutilizadospara<br>8<br>q<br>o,<br>.<br>P<br>entrenarmodelosdeterceros,salvoautorizaciónexpresayescrita.|.<br>.<br>Obligatorio|
|RT-18.03|Sedocumentaránloslímitesdeuso,loscasosenqueelresultadorequierevalidación<br>]<br>q<br>q<br>humanapreviayelprocedimientodesupervisión.|A<br>3<br>Obligatorio|
|RT-18.04|Losriesgosdesesgo,alucinación,fugadeinformaciónyusoindebidoseevaluarány<br>mitigaránconformealNISTAlRiskManagementFramework1.0yalanormaISO/IEC<br>42001.|Obligatorio|
|RT-18.05|Todainteracciónrelevantecon uncomponentedeinteligenciaartificialquedará<br>registradaparaefectosdeauditoríaytrazabilidad,incluyendolaentrada,lasaliday<br>ladecisiónhumanaposterior.|Obligatorio|
|RT-18.06|Elcomponentepodrádesactivarsesincomprometerlaoperacióndelrestodela<br>solución,yexistiráunprocedimientomanualderespaldoparalafunciónque<br>automatiza.|Obligatorio|
|RT-18.07|Cuandoelresultadosepresenteaunapersonausuaria,seindicaráexpresamente<br>quefuegeneradoosugeridodeformaautomática,ysuniveldeconfianzacuandoel<br>modeloloprovea.|Obligatorio|
|RT-18.08|Losmodelospredictivosdeclararánsusvariablesdeentrada,sumétricade<br>2<br>Z<br>.<br>do<br>:<br>desempeño,sulíneabaseysuplandereentrenamientoydedeteccióndederiva.|Obligatorio|
|RT-18.09|Laresponsabilidadporlosresultadosdeloscomponentesdeinteligenciaartificial<br>recaeintegramenteenelADJUDICATARIO,conformealArtículo86”delasBases<br>Administrativas.|Obligatorio|
|RT-18.10|Sevaloraráelusodeautomatizaciónrobóticadeprocesosodeagentesparatareas<br>repetitivasdebackoffice,conelahorrodehorascuantificadoyreflejadoenlaOferta<br>Económica.|Deseable|



Incorporar un modelo de lenguaje a la solución sin declarar dónde se procesan los datos, sin control de acceso a la información que consulta y sin validación humana de sus resultados será evaluado como incumplimiento de los requisitos de seguridad, no como innovación. 

Bases Técnicas Transversales TFEP-01/2026 32/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### TÍTULO VI PROYECTO, IMPLANTACIÓN Y OPERACIÓN 

###### CAPÍTULO 19 - ESTRUCTURA Y GOBIERNO DEL PROYECTO 

###### 19.1 Oficina de gestión y metodología 

|RT-19.01|ElADJUDICATARIOconstituiráunaoficinadegestióndelproyectoconmetodología<br>declarada,basada enelPMBOKdelProjectManagementInstituteeintegrando<br>prácticaságilesdondeelPROPONENTElojustifique.|Obligatorio|
|---|---|---|
|RT-19.02|ElJefedeProyectotendrádedicaciónexclusivadurantetodalafasede<br>implementaciónyfacultadesparacomprometeralADJUDICATARIOenmateriasde<br>ejecución.|Obligatorio|
|RT-19.03|ExistiráunprocedimientoformaldecontroldecambiosconformealArtículo72*de<br>lasBasesAdministrativas,conregistrodecambios,análisisdeimpactoyaprobación<br>previaalaejecución.|Obligatorio|
|RT-19.04|LagestióndelriesgoseguirálanormaISO31000, conregistroderiesgosvivo,<br>revisiónencadaComitédeProyectoyplanesdemitigaciónconresponsable,plazo y<br>disparador.|Obligatorio|
|RT-19.05|ElADJUDICATARIOhabilitaráunespaciocolaborativoaccesiblealCLIENTE,conla<br>documentacióndelproyecto,losentregables,lasactas,elregistroderiesgosyel<br>registrodecambiossiempreactualizados.|Obligatorio|



###### 19.2 Roles mínimos del equipo Roles mínimos del equipo mínimos del equipo del equipo equipo 

# CO 19.2 Roles mínimos del equipo Roles mínimos del equipo mínimos del equipo del equipo equipo 

|JefedeProyecto|100%enimplementación|Certificaciónengestióndeproyectosy<br>experienciacomprobableenproyectosde<br>escalaequivalente.|
|---|---|---|
|.<br>o<br>ArquitectodeSolución|Altaendiseño,permanenteen<br>a<br>.<br>elComitédeArquitectura|Certificacióndearquitecturadelproveedor<br>denubeofertado.|
|EncargadodeSeguridaddela<br>8o<br>8<br>Información|Permanente|,<br>.<br>.<br>Certificaciónenseguridadvigente.|
|.<br>LíderdeDatos|.<br>o<br>Permanenteenimplementación|Experienciaenmodeladoymigraciónde<br>datos.|
|LíderdeDesarrollo|100%enimplementación|Experienciaenlatecnologíaofertada.|
|LíderFuncional|100%enimplementación|Experienciaenlaindustriadelcaso.|
|LíderdeCalidadyPruebas|Permanente|Certificaciónen pruebasdesoftware.|
|,<br>LíderdeIntegración|.<br>Permanenteenimplementación|Experienciaenintegracióndesistemas<br>heredados.|
|az<br>LíderdeOperación/SRE|Desdeelmes6,permanenteen<br>P<br>Operación|O<br>o,<br>E<br>Certificaciónengestióndeservicios.|



Bases Técnicas Transversales TFEP-01/2026 33/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|C||O|
|---|---|---|
|<br>LíderdeImplantaciónyGestióndel<br>.<br>Cambio|<br>Desdeelmes8|<br>Experienciaenimplantaciónconusuarios<br>.<br>operacionales.|



El PROPONENTE podrá agregar los roles que su propuesta requiera. La dotación total del equipo deberá ser coherente con las horas hombre del Formulario T-15 y con la curva de recursos de la Oferta Económica. 

###### 19.3 Control y reporte del proyecto 

|RT-19.06|ElADJUDICATARIOentregaráuninformemensualdeavanceconestadodel<br>cronograma,avancefísicoyfinanciero,entregablesdelperíodo,desviaciones,<br>riesgos,incidenciasycompromisosdelperíodosiguiente.|Obligatorio|
|---|---|---|
|RT-19.07|Elavancesemediráconvalorganado,reportandoelíndicededesempeñodel<br>cronogramaydelcosto,ynomediantedeclaracióncualitativadeporcentajede<br>avance.|Obligatorio|
|RT-19.08|ElCLIENTEdispondrádeuntablerodeestadodelproyectoactualizado,accesibleen<br>.<br>cualquiermomento.|Obligatorio|
|RT-19.09|LasactasdetodosloscomitésdelArtículo71”delasBasesAdministrativasse<br>levantarándentrodelosdosdíashábilessiguientesyregistraránacuerdos,<br>responsablesyplazos.|Obligatorio|
|RT-19.10|Todadesviaciónsuperioral10%en unhitosecomunicarádentrodeloscincodías<br>..<br>cuz<br>hábilesdedetectada,conplanderecuperación.|Obligatorio|



###### CAPÍTULO 20 - IMPLANTACIÓN, PRUEBAS Y CRITERIOS DE ACEPTACIÓN 

###### 20.1 Estrategia de pruebas 

|Unitariasydecomponente||Continuo,enelflujodeintegración|Coberturamínimade 70%enlógicade<br>A<br>negocio;sinpruebas enfalla.|
|---|---|---|
|Integración|Continuo,trascadadespliegueaQA|Todoslosflujosdeintegracióndelcaso<br>.<br>Ñ<br>ejecutadossinerror.|
|.<br>y<br>Sistema yregresión|Antesdecadapromocióna<br>2d<br>Preproducción|Bateríaderegresiónautomatizada<br>.<br>.<br>completasinregresiones.|
|o<br>.<br>Aceptacióndeusuario|Le<br>Antesdecadacertificacióndeetapa|Casosdeaceptacióndelcasoaprobados<br>.<br>P<br>AÑ.<br>y<br>firmadosporlaContraparteTécnica.|
|y<br>Cargayestrés|o<br>Antesdecada pasoaproducción|UmbralesdelCapítulo9cumplidosa1,5<br>P<br>P<br>veceselpeakdeclarado.|
|Resiliencia|Antesdecadapasoaproduccióny<br>semestralenOperación|Lasolucióndegradadeformacontroladay<br>serecuperasinintervención.|
|Recuperaciónante<br>desastres|Antesdelpasoaproducciónysemestral|RTOyRPOcomprometidosalcanzadosen<br>conmutaciónreal.|
|Seguridadofensiva|Antesdecada pasoaproducciónyanual||Sinhallazgoscríticosnialtosabiertos.|
|nte<br>Accesibilidad|o,<br>Antesdecada pasoaproducción|ConformidadWCAG2.2AAverificada<br>y<br>documentada.|



Bases Técnicas Transversales TFEP-01/2026 34/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|Migracióndedatos|Dosensayospreviosalamigración<br>as<br>definitiva|Conciliaciónsindiferenciasnoexplicadas.|
|---|---|---|



###### 20.2 Requisitos de implantación 

|RT-20.01|ElPROPONENTEpresentaráunplandeimplantaciónporsitioyporperfil,coherente<br>A<br>2<br>a<br>conelcronogramaobligatoriodelArtículo17”delasBasesAdministrativas.|Obligatorio<br>8|
|---|---|---|
|RT-20.02|Laestrategiadepasoaproducciónserágradualyreversible.Sedeclararáelcriterio<br>o<br>o,<br>.<br>.<br>o,<br>deavanceentreolasyelprocedimientodereversión,consutiempodeejecución.|.<br>.<br>Obligatorio|
|RT-20.03|Durantelamarchablanca,lasoluciónconviviráconlaoperaciónvigentedelCLIENTE<br>?<br>P<br>8<br>!<br>conconciliacióndiariaysindobledigitaciónnodeclarada.|"<br>a<br>Obligatorio|
|RT-20.04|ElPROPONENTEdefinirálosindicadoresdiariosquesemedirándurantelamarcha<br>blancay susumbralesdeavance,conformealArtículo17.3delasBases<br>Administrativas.|Obligatorio|
|RT-20.05|Sedispondrádeacompañamientoenterrenodurantelasprimerassemanasdecada<br>.<br>.<br>,<br>Ep<br>ola,condotación declaradaydecrecientesegúnlacurvadeadopción.|Obligatorio<br>8|
|RT-20.06|Seestableceráunperíododeestabilizaciónconatenciónreforzadatrascadapasoa<br>"e<br>perio:<br>10<br>ze<br>P<br>producción,condotaciónyduracióndeclaradasysincostoadicional.|Obligatorio|
|RT-20.07|ExistiráunadefinicióndeterminadoacordadaconelCLIENTE,aplicableacada<br>to<br>A<br>entregable,queincluyacódigo,pruebas,documentación,seguridadydespliegue.|Obligatorio|
|RT-20.08|ElprotocolodeaceptacióndecadahitoseformalizaráconformealFormularioT-17,<br>concriteriosobjetivos yverificables.|z<br>Ñ<br>Obligatorio|



###### CAPÍTULO 21 - MODELO DE OPERACIÓN, MANTENCIÓN Y SOPORTE 

###### 21.1 Estructura operativa 

|RT-21.01|ElADJUDICATARIOdispondráde uncentrodeoperacionesderedconcobertura<br>24x7x365,propio osubcontratado,ydeclararásuubicación,dotaciónporturnoy<br>procedimientos.|Obligatorio|
|---|---|---|
|RT-21.02|Sedesignaráungerentedeserviciodedicadocomocontrapartepermanentedel<br>-<br>CLIENTEdurantelafasedeOperación.|Obligatori<br>eono|
|RT-21.03|ElEQUIEodeoperacióncontaráconespecialistasportecnología,nominadosycon<br>dedicacióndeclarada.|Obligatorio|
|RT-21.04|Losprocedimientosdeoperaciónestarándocumentadosyseránejecutablesporel<br>personaldelCLIENTEtraslatransferenciadeconocimiento.|.<br>.<br>Obligatorio|



Bases Técnicas Transversales TFEP-01/2026 35/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### 21.2 Centro de atención telefónica 

Este ámbito es central para dar continuidad y seguimiento al esfuerzo de incorporación y adopción de la solución. 

|RT-21.05|ElPROPONENTEdispondrádeuncentrodeatenciónadecuadoparasoportar<br>integralmentelasconsultas,propioosubcontratadoconunoperadordenivel<br>acreditado.|Obligatorio|
|---|---|---|
|RT-21.06|Elcentrodeatencióncumpliráuntiempodeatenciónalusuariofinalde 80%antes<br>de 20segundosyunaresoluciónalprimercontactodealmenos70%.Latasade<br>abandononosuperaráel5%.|Obligatorio|
|RT-21.07|Elhorariomínimodeatenciónseráde8:00a20:00endíashábiles,ampliadoa24x7<br>paralosincidentesdeseveridadcríticayparalaventanaoperacionalquedefinael<br>caso.|Segúncaso|
|RT-21.08|Laatencióncubriráorientaciónfuncionaldedistintosgradosdecomplejidad,desde<br>preguntassimpleshastasituacionescomplejas,ylaspreguntastécnicasmás<br>frecuentessobrelaaplicaciónysuentornodeuso.|Obligatorio|
|RT-21.09|Semantendráunregistrohistóricodelasactividadesdesoportequepermita<br>monitorearygestionarlosprincipalesrequerimientos,conanálisisdetendencia<br>mensual.|Obligatorio|
|RT-21.10|Existiráunprocesodeaprendizajedelcentrodesoportequeacumuleconocimiento<br>sobrelascomplejidadesdelaoperaciónylasnecesidadesdelaspersonasusuarias,<br>reflejadoenlabasedeconocimiento.|Obligatorio|
|RT-21.11|Seproveeránserviciosdecapacitaciónenlíneaenmodalidaddeautoformación,con<br>j<br>.<br>registrodeavanceparaefectosdemonitoreo.|Obligatorio|
|RT-21.12|Sehabilitaránespaciosdeinteracciónentrelasentidadesypersonasusuariasdel<br>sistema,quepermitancompartirexperienciasdeuso.|Deseable|
|RT-21.13|LosindicadoresclavedelprocesodesoporteestaránabiertosalCLIENTE,ylos<br>indicadoresespecíficosseránaccesiblessegúnniveldeautorización.|.<br>.<br>Obligatorio|
|RT-21.14|ElPROPONENTEdimensionaráladotacióndelcentrodeatenciónconfundamento<br>cuantitativo,empleandoteoríadecolasoelmodeloErlangC,apartirdelvolumende<br>contactosproyectadodelcaso.|Obligatorio|



###### 21.3 Mesa de ayuda por niveles 

## CI E 

|Nivel1|Recibeloscontactosdelaspersonasusuarias<br>internas yexternassobrecualquierrequerimiento<br>delaplataforma.|Recepción,registrodelticket,clasificación,<br>solucionesbásicasyderivación.|
|---|---|---|
|Nivel2|Agentesconmayoresconocimientosoespecialistas<br>enelsistemayenlasaplicacionesprovistasporel<br>ADJUDICATARIO.Resuelvenlosincidentesderivados <br>delnivel1apoyándoseenmanualesyguías.|Soporteespecializado,configuracionesy<br>diagnóstico.Los incidentesrelativosa<br>procedimientospropiosdelaoperaciónoa<br>|aplicacionesdelCLIENTEnoprovistasporel<br>ADJUDICATARIOsonderesponsabilidaddel<br>CLIENTEynosederivanalamesa.|



Bases Técnicas Transversales TFEP-01/2026 36/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

### Pd pr 

|Nivel3|Métodosdesolucióna nivelexpertoyanálisis<br>avanzadodelasoluciónydelasaplicaciones<br>provistas.|Resolucióndeproblemasnuevoso<br>desconocidos,apoyoalosniveles1y2,e<br>investigaciónydesarrollodesoluciones.Incluye<br>eltrasladoasitiocuandoelproblemalo<br>requiera.|
|---|---|---|
|||EsresponsabilidaddelADJUDICATARIOgestionar|
|Nivel4|Soportedelfabricantedeloscomponentesde<br>softwareohardwareutilizados.|yobtenerestesoportecuandoserequiera,sin<br>queelloloeximaderesponsabilidadfrenteal<br>CLIENTE.|



|RT-21.15|Existiráuncanalúnicoderegistrodeincidentes ysolicitudes,connúmerodeticket,<br>clasificaciónporseveridadyseguimientodelciclodevidacompletohastaelcierre<br>conforme.|Obligatorio|
|---|---|---|
|RT-21.16|Cuandoelcasocomprendasitiosalejados,losespecialistasdeniveles2y3deberán<br>trasladarsecuandolaresoluciónlorequiera,porelmediomásrápidodisponibley<br>.<br>ae<br>.<br>o.<br>.<br>o,<br>condisponibilidaddetiemposuficiente,sinalterarlaatenciónnormaldelrestode<br>lossitios.Elcostodeltrasladoestáincluidoenlaoferta.|'<br>Segúncaso|
|RT-21.17|Elcierredeunticketrequeriráconfirmacióndelapersonausuariaotranscursodel<br>,<br>dun<br>plazodeconfirmaciónautomáticadeclarado.|Obligatorio|
|RT-21.18|ElADJUDICATARIOreportarámensualmenteelcumplimientodelosnivelesde<br>o<br>o,<br>.<br>o<br>.<br>o<br>serviciodeatención,coneldetalleporseveridadyelanálisisdelosincumplimientos.|.<br>A<br>Obligatorio|



###### 21.4 CO Mantención 

|Preventiva|Revisionesprogramadas,actualizaciones<br>planificadas,optimizacióncontinuayauditorías<br>técnicas.|CalendarioanualacordadoconelCLIENTE.<br>Auditoríasalmenostrimestrales,con<br>informe.|
|---|---|---|
|Correctiva|Correccióndedefectosdelasolución.|Sincostoadicional.Sujetaalostiemposde<br>resolucióndelArtículo78”delasBases<br>Administrativas.|
|Evolutiva|Mejorasfuncionales,nuevascaracterísticasy<br>optimizacióndeldesempeñosolicitadasporel<br>CLIENTE.|Bolsaanualdehorascomprometidaenla<br>:<br>oferta,contarifadeclaradaparael<br>e<br>o<br>excedente.Labolsanoutilizadaen unaño<br>nosepierdey seacumulaalsiguiente.|
|N<br>Í<br>ormativa|Adecuacióndelasoluciónantecambioslegaleso<br>regulatoriosaplicablesalcaso.|IncluidaenelvalordelaOperación,sin<br>costoadicional.Plazodeadecuación<br>coherenteconlaentradaenvigenciadela<br>norma.|



||ElPROPONENTEdeclararáeltamañodelabolsaanualdehorasdemantención||
|---|---|---|
|RT-21.19|evolutiva,sucomposiciónporperfilyelprocedimientodesolicitud,estimación,|Obligatorio|
||aprobaciónyliquidación.||



Bases Técnicas Transversales TFEP-01/2026 37/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|RT-21.20|Lamantenciónevolutivasesometeráalmismoestándardecalidad,pruebasy<br>seguridadqueeldesarrollooriginal.|Obligatorio<br>8|
|---|---|---|
|RT-21.21|ElPROPONENTEmantendráunregistrodedeudatécnicacuantificadoydestinará<br>o,<br>Ñ<br>o,<br>.<br>unafraccióndeclaradadelacapacidaddelaOperaciónareducirla.|s<br>E<br>Obligatorio|
|RT-21.22|Lasactualizacionesdeversióndeloscomponentesdebaseseplanificarán<br>anualmente, conventanaacordadayplandereversión.|.<br>.<br>Obligatorio|



###### CAPÍTULO 22 - CAPACITACIÓN Y TRANSFERENCIA DE CONOCIMIENTO 

|RT-22.01|Elplandecapacitaciónseestructuraráporperfil:personasusuariasfinales,usuarias<br>po<br>.<br>avanzadas,administradoras,equipotécnicoysoportedeniveles1y2.|Obligatorio<br>8|
|---|---|---|
|RT-22.02|Lasmodalidadesincluiráncapacitaciónpresencialencadasitiodeoperación,<br>sesionesenlíneasincrónicas,autoformaciónyacompañamientoenpuestode<br>trabajodurantelamarchablanca.|Obligatorio|
|RT-22.03|Todoelmaterialdecapacitaciónseentregaráenespañol,enformatoeditable yde<br>propiedaddelCLIENTE:manualesporperfil,guíasrápidas,preguntasfrecuentes,<br>videostutorialesybasedeconocimientoconsultable.|Obligatorio|
|RT-22.04|LacapacitaciónnopodráafectarlaoperacióndelCLIENTE:seprogramaráporturnos<br>yenhorariosacordados,considerandolaestacionalidadylaventanaoperacionaldel<br>caso.|Segúncaso|
|RT-22.05|LaspersonasusuariasadministradorasyelequipotécnicodelCLIENTEserán<br>0<br>Ade<br>.<br>evaluadosycertificadoscomocondiciónparaelcierredecadamarchablanca.|:<br>A<br>Obligatorio|
|RT-22.06|DurantelaOperaciónseejecutaránalmenosdosjornadasanualesdeactualizacióny<br>secapacitaráalpersonalnuevodelCLIENTEsincostoadicional.|Oblizatorio<br>E|
|RT-22.07|ElADJUDICATARIOproveeráacompañamientoymentoríaalequipotécnicodel<br>CLIENTEdurantealmenosseismesesposterioresalpasoaproduccióndelaEtapa2.|Oniatano<br>a|
|RT-22.08|LabasedeconocimientoserámantenidayactualizadadurantetodoelContrato,con<br>0<br>a<br>a<br>métricasdeusoydeutilidadpercibida.|.<br>.<br>Obligatorio|
|RT-22.09|Sevalorarálaexistenciadeunambientepermanentedeentrenamiento,condatos<br>ficticios,disponibleparalaprácticasinriesgo.|Deseable|



Bases Técnicas Transversales TFEP-01/2026 38/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### TÍTULO VII 

###### EXIGENCIAS DE PRESENTACIÓN DE LA PROPUESTA 

Este Título establece entregables de la propuesta que no son documentos escritos: la presencia digital del proponente, un video de presentación y un prototipo interactivo. Los tres se evalúan y los tres tienen causales de descalificación propias. 

###### CAPÍTULO 23 - INFORMACIÓN CORPORATIVA Y PRESENCIA DIGITAL 

###### 23.1 Página web corporativa 

El PROPONENTE deberá disponer de una página web corporativa activa y actualizada que contenga, como mínimo, la siguiente información claramente identificable y de fácil acceso. 

|RT-23.01|Informacióninstitucional:descripcióndetalladadelgiroprincipal,historiay<br>trayectoriadelaempresaconalmenostresañosdeantigúedadcomprobable,<br>misión,visiónyvalores,certificacionesyacreditacionesvigentes,ypresencia<br>geográficayoficinas.|Obligatorio|
|---|---|---|
|RT-23.02|Experienciaycasosdeéxito:portafoliodeproyectossimilaresdelosúltimoscinco<br>años,casosdocumentadosconmétricasverificables,testimoniosdeclientescon<br>autorizacióndepublicación,industriasatendidasconénfasisenladelcasoasignado,<br>yvolumendetransaccionesodepersonasusuariasgestionadas.|Obligatorio|
|RT-23.03|Equipoprofesional:organigramadelequipodirectivo,perfilesdesociosydirectores,<br>currículosresumidosdelequipotécnicoclaveycertificacionesprofesionalesdel<br>personal.|Obligatorio|
|RT-23.04|Capacidadestécnicas:serviciosysolucionesofrecidas,conjuntotecnológico<br>dominado,alianzastecnológicascon proveedoresdenubeydeplataforma,<br>metodologíasdetrabajocertificadas,einfraestructuraycapacidadinstalada.|Obligatorio|
|RT-23.05|ElsitioseráaccesibleconformeaWCAG2.2nivelAA,responsivoyconcertificadoTLS<br>23<br>;<br>válidoyvigente.|Obligatorio|
|RT-23.06|Elsitiosemantendráactivoydisponibledurantetodoelprocesodelicitación,desde<br>.<br>o<br>o,<br>elregistrodelparticipantehastalaadjudicación.|.<br>.<br>Obligatorio|
|RT-23.07|Materialeducativodigital:seminariosenlínea,artículostécnicoso centrode<br>un<br>recursosydocumentación.|Deseable|
|RT-23.08|Demostraciónenlínea,recorridovirtualdelasoluciónoportaldesoportepara<br>y<br>clientes.|Deseable|
|RT-23.09|Métricasdedisponibilidadydesempeñodelosserviciosdelproponentepublicadas<br>entiemporeal.|Nesaaklá|
|RT-23.10|Calculadoraderetornodelainversiónoherramientadeestimaciónpertinenteala<br>.<br>.<br>industriadelcaso.|Deseable|



###### 23.2 Verificación y validación 

El CLIENTE verificará el sitio durante el proceso de evaluación. Constituyen causal de descalificación: 

- e Sitio web no disponible o con caídas recurrentes durante el período de evaluación. 

Bases Técnicas Transversales TFEP-01/2026 39/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

- e Información falsa o engañosa comprobada. 

- e Ausencia de la información crítica exigida en el numeral 23.1. 

- e Casos de éxito no verificables o cuyas contrapartes desmientan lo declarado. 

- e Plagio de contenido de otros sitios. 

###### 23.3 Declaración de veracidad 

El PROPONENTE deberá incluir en el Sobre N* 1 una declaración jurada simple que indique: 

- La dirección oficial del sitio web de la empresa. 

- Que toda la información publicada en el sitio es verídica y se encuentra actualizada. 

- La autorización para que la Comisión Evaluadora contacte a las referencias declaradas. 

- El compromiso de mantener el sitio activo durante todo el proceso. 

- La aceptación de la descalificación en caso de información falsa. 

###### CAPÍTULO 24 - VIDEO DE PRESENTACIÓN DE LA PROPUESTA 

###### 24.1 Especificaciones técnicas 

|Duración|Máximo5minutos(300segundos).Excederloproducedescalificaciónautomática.|
|---|---|
|Resolución|FullHD,1920x1080píxelescomomínimo.|
|Formatodearchivo|MP4concódecH.264.|
|Cuadrosporsegundo|30fpscomomínimo.|
|Tasadebitsdevideo|5Mbpscomomínimo.|
|Tamañomáximodel<br>archivo|500MB.|
|Audio|44,1kHzy16bitscomomínimo,enAACoMP3,connivelesnormalizados,sin<br>distorsiónniruidodefondoexcesivo.|
|Música|Opcional,conlicenciaacreditable.|
|Orientación|Horizontal(apaisada).|
|Aspectosvisuales|Iluminaciónprofesionaladecuada,fondoneutroocorporativo,sinefectosque<br>distraigandelmensajeycontransicionessuaves.|



###### 24.2 Estructura y contenido 

El video deberá contener los siguientes segmentos, en este orden: 

1. Introducción corporativa: logotipo animado, nombre del proyecto y del caso, fecha de la propuesta y 

   - nombre del proponente. 

2. Comprensión del problema: análisis de la problemática actual, impacto en las personas afectadas, riesgos de no implementar la solución, métricas del problema identificado y demostración de comprensión del sector. 

3. Solución propuesta: visión general, beneficios para cada grupo de interés, diferenciadores clave, innovaciones incluidas y resultados esperados con métricas. 

Bases Técnicas Transversales TFEP-01/2026 40/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

4. Propuesta tecnológica: conjunto tecnológico completo, arquitectura de alto nivel, servicios de nube 

   - utilizados, y seguridad y cumplimiento normativo. 

5. Ventajas competitivas: por qué el proponente es la mejor opción, experiencia específica, casos de éxito relevantes, garantías y compromisos, y valor agregado único. 

6. Cierre y compromiso: compromiso con el proyecto, datos de contacto e identidad corporativa final. 

###### 24.3 Participación del equipo 

|RT-24.01|Todoslosintegrantesclavedelequipodeberánaparecerindividualmente<br>presentándose,entomademediocuerpo,mirandodirectamentealacámara,con<br>.<br>o<br>.,<br>o.<br>a<br>vestimentaformalodenegocioinformal,yconunaduraciónmínimadeapariciónde<br>10segundosporpersona.|Obligatorio|
|---|---|---|
|RT-24.02|Cadavezqueaparezcaunintegrantedeberámostrarseenpantalla sunombre<br>completo,sucargoenelproyecto, susañosdeexperienciaysuespecialización<br>relevante.|Obligatorio|
|RT-24.03|Lascertificacionesprincipalesdecadaintegrantepodránmostrarseenpantalla.|Deseable|
|RT-24.04|Elfondoseráelmismoparatodaslastomasdepersonas,coniluminación<br>consistenteyencuadresimilarparatodoslosparticipantes.|.<br>.<br>Obligatorio|
|RT-24.05|Lapaletadecolorescorporativa,latipografíayelusodelamarcaseránconsistentes<br>entodoelvideo,conlogotipovisibleentodaslasescenasydatosdecontactoenel<br>encabezadoopie.|Obligatorio|
|RT-24.06|Losnivelesdevolumenestaránnormalizados,conlamismacalidaddegrabacióny<br>.<br>o<br>.<br>sinvariacionesbruscasdesonido.|Obligatorio|



###### 24.4 Evaluación, penalizaciones y descalificación 

|Audioconproblemasmenores|-5 puntos|
|---|---|
|Iluminacióndeficiente|-5 puntos|
|Transicionesbruscas|-5 puntos|
|Informaciónpococlara|-5 puntos|
|Faltadeunrolnocríticodelequipo|-5 puntos|
|Duraciónsuperiora5minutos|Descalificaciónautomática|
|Noaparicióndelequipoclavecompleto|Descalificaciónautomática|
|Calidadtécnicainferioralaespecificadaenelnumeral24.1|Descalificaciónautomática|
|Informaciónfalsaoengañosa|Descalificaciónautomática|
|Usodematerialconderechosdeautorsinlicencia|Descalificaciónautomática|
|Noentregadelvideojuntoconlapropuesta|Descalificaciónautomática|



###### 24.5 Entrega, derechos y autorizaciones 

- e Entrega física: unidad de almacenamiento USB junto con la propuesta, etiquetada con el nombre de la empresa y del proyecto, incluyendo archivo de respaldo. 

Bases Técnicas Transversales TFEP-01/2026 41/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

- e Entrega digital: enlace de descarga con vigencia mínima de 60 días, sin restricciones de descarga y con la contraseña de acceso en documento separado. 

- e El PROPONENTE autoriza el uso del video para fines de evaluación y su proyección en las sesiones de evaluación. 

- e El PROPONENTE garantiza que posee todos los derechos necesarios sobre el material utilizado. 

- e La Comisión Evaluadora mantendrá la confidencialidad del contenido, no lo distribuirá sin autorización y eliminará las copias posteriores a la evaluación de las propuestas no seleccionadas. 

###### CAPÍTULO 25 - PROTOTIPO INTERACTIVO DE INTERFAZ Y DISEÑO UX/UI 

###### 25.1 Objetivo y momento de entrega 

El PROPONENTE deberá presentar, junto con el Informe 3, un prototipo interactivo de alta fidelidad que demuestre de manera clara y tangible la visión de diseño de interfaz propuesta para la solución del caso. El prototipo permite evaluar la comprensión del proponente sobre las necesidades reales de las personas usuarias y su capacidad de traducirlas en una experiencia de uso adecuada. 

El prototipo no requiere conexión con servicios de fondo ni con base de datos, pero debe simular de manera realista la navegación y los flujos de trabajo principales, permitiendo a los evaluadores experimentar la solución desde la perspectiva de los distintos perfiles de personas usuarias. 

###### 25.2 Alcance mínimo 

El prototipo deberá incluir, como mínimo, las siguientes vistas y funcionalidades navegables: 

|Portalprincipal|Páginadeiniciopública;páginadeinicioconsesióniniciadaypersonalizadaporperfil;<br>tableroprincipalconcomponentesconfigurables;menúdenavegacióncompletoy<br>funcional;rastrodenavegaciónynavegacióncontextual.|
|---|---|
|Autenticacióne<br>incorporación|Pantalladeiniciodesesiónunificada;registrodeunanuevapersonausuariaexterna<br>enalmenoscincopasos;recuperacióndeacceso;segundofactordeautenticación;y<br>tablerodeprimeringresoconrecorridoguiado.|
|Procesooperacional<br>principaldelcaso|Elflujodenegociocentraldelaindustriaasignada,deextremoaextremo,enal<br>menosseispasos,desdesuiniciohastasucierre,incluyendolosestadosintermedios<br>yelmanejodelaexcepciónmásfrecuente.|
|Procesooperacional<br>secundariodelcaso|Unsegundoflujorelevante,consulistado,suvistadedetalle,sucreaciónysuflujode<br>aprobaciónvisual.|
|Perfildeterrenoo de<br>operación|Lavistaqueutilizarálapersonausuariaoperacionalensupuestoreal,incluidasu<br>versiónmóvilysucomportamientosinconexión,cuandoelcasolorequiera.|
|Gestióndeterceros|Directoriodelacontraparte externadelcaso—clientes,proveedores,productores,<br>.<br>.<br>.<br>yz<br>a<br>pacientes,pasajeros—,sufichacompleta,suevaluaciónysuhistorial.|
|Tableroanalítico|Indicadoresprincipalesconvisualizaciones;almenosseistiposdegráficodistintos;<br>filtrosporperíodoycategoría;profundizacióndesdeelindicadorhastaeldetalle;y<br>exportacióndeinformes.|
|Administración|Gestióndepersonasusuarias,rolesypermisos;parametrización;yconsultade<br>os<br>auditoría.|
|Dosmódulosadicionales|AeleccióndelPROPONENTE,pertinentesalcaso.|



Bases Técnicas Transversales TFEP-01/2026 42/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### 25.3 Principios de diseño exigidos 

|RT-25.01|Navegaciónintuitivasinnecesidaddemanual,conunmáximodetresinteracciones<br>paraalcanzarcualquierfuncionalidadprincipal.|Obligatorio<br>8|
|---|---|---|
|RT-25.02|Retroalimentaciónvisualclaraantecadaacción,estadosdecargaytransiciónfluidos,<br>ymanejoelegantedeloserrores.|Obligatorio<br>-|
|RT-25.03|CumplimientodeWCAG2.2nivelAA:contrasteadecuado,tamañosdefuente<br>legibles,objetivostáctilesdealmenos44x44píxeles,navegacióncompletapor<br>teclado,ytextosalternativosyetiquetasdeaccesibilidad.|Obligatorio|
|RT-25.04|Diseñoresponsivodemostradoenescritorio(1920x1080y1366x768),tableta(768<br>x1024enverticalyhorizontal)yteléfono (375x812),con puntosdequiebre<br>coherentes.|Obligatorio|
|RT-25.05|Sistemadediseñodocumentado:paletadealomáscincocoloresprincipales,alo<br>másdosfamiliastipográficasjerarquizadas,iconografíacoherente,retículay<br>espaciadoconsistentes,ycomponentesreutilizables.|Obligatorio|



###### 25.4 Componentes de interfaz obligatorios 

||Componentesqueelprototipodebedemostrar|
|---|---|
|Navegación|Menúprincipal,menúsecundariocontextual,rastrodenavegación,paginación,pestañasy<br>acordeones,navegaciónporpasosymenúdeaccionesrápidas.|
|Formularios|Camposdetextoconvalidaciónentiemporeal,selectores ydesplegables,casillasybotones<br>deopción,selectoresdefechayhora,cargadearchivosconarrastrarysoltar,<br>autocompletadoyformulariosdemúltiples pasos.|
|Visualizacióndedatos|Tablasconordenamientoyfiltrado,gráficosdebarras,delíneasycirculares,tarjetasde<br>|información,líneasdetiempo,indicadoresdeprogreso,distintivosyetiquetas,e<br>informacióncontextualemergente.|
|Retroalimentación|Mensajesdeéxito,error,advertenciaeinformación;ventanasmodalesydiálogos;<br>notificacionesemergentes;esqueletosdecarga;indicadoresdeprogreso;yestadosvacíos<br>ilustrados.|
|Acción|Botonesprimarios,secundariosyterciarios;botóndeacciónflotante;accionesenlínea;<br>menúscontextuales;accionesmasivas;yconfirmacióndeaccionescríticas.|



###### 25.5 Entrega y nivel de interactividad 

|RT-25.06|Elprototiposeentregarácomoenlacenavegableenlínea,sininstalaciónni<br>.<br>.<br>complementos,compatibleconlosnavegadoresmodernosvigentes.|Obligatorio|
|---|---|---|
|RT-25.07|Elaccesoalprototipoestarágarantizadoporunmínimodeseismesesdesdesu<br>entrega.|Obligatorio|
|RT-25.08|Elprototipopermitiránavegacióncompletaentrepantallas,simulacióndeingresode<br>datos,transicionesyanimacionesbásicas,estadosdeposadoyactivo,simulaciónde<br>cargadearchivos,elementosdesplegablesfuncionalesysimulacióndevalidaciones.|Obligatorio|
|RT-25.09|Seentregarálaarquitecturadeinformacióndelprototipo:mapadelsitiocompleto,<br>diagramadenavegación,taxonomíaynomenclatura,estructurademenúsyjerarquía<br>delainformación.|Obligatorio|



Bases Técnicas Transversales TFEP-01/2026 43/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

Se valorará la posibilidad de exportar el prototipo a un documento interactivo para RT-25.10 o os Deseable revisión sin conexión. 

###### 25.6 Restricciones y penalizaciones 

|Nose requiere|Sepenalizará|
|---|---|
|Funcionalidadrealdeserviciosdefondo.|Prototiposestáticos,nonavegables.|
|Conexiónabasededatos.|Diseñosgenéricossinpersonalizaciónalcaso.|
|Procesamientorealdedatos.|Incumplimientodelosestándaresdeaccesibilidad.|
|Integraciónconserviciosexternos.|Navegaciónconfusaoenlacesrotos.|
|Autenticaciónreal.|Inconsistenciasvisualesevidentes.|
|Persistenciadelainformacióningresada.|Faltaderesponsividadenlostamañosexigidos.|



###### 25.7 Propiedad intelectual del diseño 

- e El diseño propuesto será de propiedad del CLIENTE si la propuesta resulta adjudicada, conforme al Artículo 84” de las Bases Administrativas. 

- e El PROPONENTE mantiene los derechos sobre sus componentes genéricos y sobre su sistema de diseño preexistente. 

- e Se autoriza el uso del prototipo para fines de evaluación y para su proyección en las sesiones de evaluación. 

- e El CLIENTE mantendrá la confidencialidad de los diseños no seleccionados. 

###### CAPÍTULO 26 - INNOVACIONES 

La exigencia de innovación se establece en el Capítulo 5 de las Bases Administrativas: cinco innovaciones obligatorias, una por cada tipo, con los siete elementos del Artículo 29? documentados en el Formulario T-19. Este capítulo agrega las exigencias técnicas de su formulación. 

|RT-26.01|Cadainnovaciónseubicaráexplícitamenteenlaarquitectura:quécapalacontiene,<br>A<br>a<br>2<br>quécomponenteslaimplementanyquéinterfacesconsumeoexpone.|Obligatorio|
|---|---|---|
|RT-26.02|Cadainnovaciónidentificarálospaquetesdelaestructuradedescomposicióndel<br>trabajoquelaejecutanyelmesdelcronogramaenquesematerializa.|Obligatorio<br>8|
|RT-26.03|Lasinnovacionesdebasetecnológicadeclararánelniveldemadurezdelatecnología<br>8<br>dd<br>y<br>conlaescalautilizadaycitaránlasfuentesennormaAPA7.2edición.|OBlizato<br>igatorio<br>8|
|RT-26.04|Cadainnovacióndeclararásuriesgodeadopción,suprobabilidad,suimpacto,la<br>estrategiademitigaciónyelplandecontingenciasinorindeloesperado.|Obligatorio|
|RT-26.05|Cadainnovacióndeclararásuindicadordeverificaciónconlíneabase,metay<br>momentodemedición,y suimpactoeninversión,costooperacionaly beneficio<br>esperado.|Obligatorio|
|RT-26.06|Lasinnovacionesqueincorporeninteligenciaartificialcumpliránintegramenteel<br>Capítulo18deestedocumento.|.<br>.<br>Obligatorio|



Bases Técnicas Transversales TFEP-01/2026 44/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|RT-26.07|Lasinnovacionesquemodifiquenlaarquitecturadeseguridadrequeriránsupropio<br>modeladodeamenazas.|Obligatorio|
|---|---|---|
|RT-26.08|Sevaloraráquealmenosunainnovaciónseaverificabledurantelamarchablancade<br>laEtapa1,esdecir,quesubeneficiopuedamedirseantesdelmes16.|Deseable|



No se aceptará como innovación la sola adopción de una tecnología que ya constituye estándar de la industria, la mención de una tendencia sin diseño de incorporación, ni una funcionalidad exigida por las Bases Técnicas presentada como innovación. La pertinencia al caso pesa más que la novedad tecnológica en abstracto. 

Bases Técnicas Transversales TFEP-01/2026 45/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

###### TÍTULO VIII ANEXOS 

###### CAPÍTULO A - ÍNDICE DE REQUISITOS TRANSVERSALES 

Resumen de los requisitos codificados de este documento. El PROPONENTE deberá pronunciarse sobre la totalidad de ellos en el Formulario T-12. 

A estos requisitos se suman los del Capítulo 4 de las Bases Administrativas y la totalidad de los requerimientos funcionales, volúmenes y criterios de aceptación de las Bases Técnicas del caso asignado. 

||Modelodearquitecturadereferencia|RT-02.01<br>—RT-02.14||
|---|---|---|---|
|03|Modelohíbrido:nubeyon-premise|RT-03.01—RT-03.24|24|
|04|Ambientes,entregacontinuayconfiguración|RT-04,01—RT-04.14|14|
|05|Datos,integracióneinteroperabilidad|RT-05.01—RT-05.30|30|
|06|Siteprincipalon-premise|RT-06.01—RT-06.34|34|
|07|Sitesecundarioyrecuperaciónantedesastres|RT-07.01—RT-07.14|14|
|08|Hardware,puestosdetrabajoyterreno|RT-08.01—RT-08.19|19|
|09|Desempeño,capacidadyescalabilidad|RT-09.01—RT-09.10|10|
|10|Disponibilidad,continuidadyresiliencia|RT-10.01—RT-10.09|9|
|all|Seguridaddelainformación|RT-11.01—RT-11.28|28|
|12|Identidad,accesoysesiones|RT-12.01—RT-12.13|13|
|13|Usabilidad,accesibilidadyexperienciadeusuario|RT-13.01—RT-13.12|12|
|14|Observabilidadygestióndelservicio|RT-14,01—RT-14.09|9|
|15|Sostenibilidad,eficienciaycertificaciones|RT-15.01—RT-15.09|9|
|16|Módulostransversalesobligatorios|RT-16.01—RT-16.34|34|
|17|Canalesdigitalesymovilidad|RT-17.01—RT-17.08|8|
|18|Inteligenciaartificialyautomatización|RT-18.01—RT-18.10|10|
|19|Estructura ygobiernodelproyecto|RT-19.01—RT-19.10|10|
|20|Implantación,pruebasyaceptación|RT-20.01—RT-20.08|8|
|21|Operación,mantenciónysoporte|RT-21.01—RT-21.22|22|
|22|Capacitaciónytransferenciadeconocimiento|RT-22.01—RT-22.09|9|
|23|Informacióncorporativaypresenciadigital|RT-23.01—RT-23.10|10|
|24|Videodepresentacióndelapropuesta|RT-24.01—RT-24.06|6|
|25|PrototipointeractivoydiseñoUX/UI|RT-25.01—RT-25.10|10|



Bases Técnicas Transversales TFEP-01/2026 46/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|Innovaciones|RT-26.01<br>— RT-26.08||
|---|---|---|
|TOTALDEREQUISITOSCODIFICADOS||374|



###### CAPÍTULO B - PLANTILLA DE VOLUMETRÍA 

Las Bases Técnicas de cada caso entregan la volumetría real de la industria correspondiente, completando la siguiente plantilla. El PROPONENTE deberá dimensionar su solución sobre esos valores y declarar el margen de crecimiento considerado. 

|Transaccionesdenegocio anuales|
|---|
|Transaccionesporsegundoenrégimennormal|
|Transaccionesporsegundoenpeak|
|Personasusuariasregistradas|
|Personasusuariasconcurrentes|
|Contrapartesexternasactivas|
|Documentosprocesadosalaño|
|Volumendealmacenamientotransaccional|
|Volumendealmacenamientodocumentaly<br>multimedia|
|Volumendedatoshistóricosamigrar|
|Dispositivosdeterrenoenoperación|
|Sitiosuoperacionesacubrir|
|Integracionesconsistemasinternos|
|Integracionesconsistemasexternos|
|Contactosmensualesalcentrodeatención|
|Ventanaoperacionalcrítica(horarioy<br>estacionalidad)|



###### CAPÍTULO C - CHECKLIST DE ENTREGABLES DE LA OFERTA TÉCNICA 

Lista de verificación para el PROPONENTE. No reemplaza a los formularios del Anexo B de las Bases Administrativas ni altera sus exigencias. 

|Documentodearquitecturaconformea<br>ISO/IEC/IEEE42010, conlascincovistas|RT-02.03|SobreN*2|
|---|---|---|
|2<br>Registrodedecisionesdearquitectura(ADR)|RT-02.04|SobreN*2|



Bases Técnicas Transversales TFEP-01/2026 47/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

||Tabladeemplazamientodecomponentesennube<br>yon-premise,justificada|Cap.3|SobreN*2|
|---|---|---|---|
||Declaracióndefuncionesnodisponiblesenmodo<br>desconectado|RT-03.13|SobreN*2|
||Modelodedatosydiccionariodedatos|RT-05.01|SobreN*2|
||Plandemigracióndedatos|RT=05.11|SobreN*2|
||DocumentacióndeinterfacesenOpenAPlIy<br>AsyncAPl|RT-05.16|SobreN*2|
||Especificacióndelsiteprincipalydelsite<br>secundario,conplanos|Caps.6y7|SobreN*2|
||Planderecuperaciónantedesastresypolíticade<br>respaldo|Cap.7|SobreN*2|
|10|Especificacióndelhardwareydelosdispositivos<br>deterreno|Cap.8|SobreN*2|
|11|Cálculodecapacidadydimensionamiento|RT-09.01|SobreN*2|
|12|PlandecontinuidaddelnegocioconformeaISO<br>22301|RT-10.03|SobreN*2|
|13|Modeladodeamenazasymatrizdecontrolesde<br>seguridad|RT-11.02yRT-11.05|SobreN*2|
|14|Declaracióndelasuperficiedeexposicióndela<br>solución|RT-11,13|SobreN*2|
|15|Planderespuestaaincidentesdeseguridad|RT-11.18|SobreN*2|
|16|Modelodeidentidad,matrizderolesysegregación<br>defunciones|Cap.12|SobreN*2|
|17|Sistemadediseñoeinformedeconformidadde<br>accesibilidad|Cap.13|SobreN*2|
|18|Estrategiadeobservabilidadycatálogodealertas|Cap.14|SobreN*2|
|19|Certificadosinstitucionalesydelpersonal|Cap.15|SobreN*1yN*2|
|20|Estrategiadepruebasy plandepruebas<br>(FormularioT-13)|Cap.20|SobreN*2|
|21|Plandeimplantaciónydemarchablanca<br>(FormularioT-18)|RT-20.01|SobreN*2|
|22|Modelodeoperación,soportey<br>dimensionamientodelcentrodeatención|Cap.21|SobreN*2|
|23|Plandecapacitaciónydetransferenciade<br>conocimiento|Cap.22|SobreN*2|
|24|Matrizdecumplimientotécnico(FormularioT-12)<br>sobretodosloscódigosRT|Numeral1.5|SobreN*2|
|25|Sitiowebcorporativoactivoydeclaraciónjurada<br>deveracidad|Cap.23|SobreN*1|
|26|Videodepresentacióndelapropuesta|Cap.24|Conlapropuestafinal|



Bases Técnicas Transversales TFEP-01/2026 48/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|Prototipointeractivoyarquitecturadeinformación|Cap.25|ConelInforme3|
|---|---|
|28|Fichasdelascincoinnovaciones(FormularioT-19)|Cap.26|SobreN*2|



###### CAPÍTULO D - GLOSARIO Y DEFINICIONES 

Complementa el Artículo 3” de las Bases Administrativas. Ante discrepancia, prevalece la definición de dicho artículo. 

|Término|Definición|
|---|---|
|ADR|ArchitectureDecisionRecord.Registrofechadodeunadecisióndearquitectura,sus<br>:<br>alternativasysufundamento.|
|AFIS|AutomatedFingerprintIdentificationSystem. Sistemaautomatizadodeidentificaciónpor<br>huelladactilar.|
|API|ApplicationProgrammingInterface.Interfazdeprogramaciónqueexponecapacidadesde<br>unsistemaaotro.|
|ASVS|ApplicationSecurityVerificationStandard,deOWASP.Estándardeverificaciónde<br>seguridaddeaplicaciones.|
|.<br>53<br>Capaanticorrupción|Componentequetraduceelmodelodeunsistemaexternoalmodelopropio,impidiendo<br>.<br>queaquelcontamineeste.|
|CDN|ContentDeliveryNetwork.Reddedistribucióndecontenidos.|
|CISBenchmarks|GuíasdeconfiguraciónsegurapublicadasporelCenterforInternetSecurity.|
|Cortacircuitos|Patrónqueinterrumpelasllamadasaunadependenciaenfallaparaevitarlapropagación<br>delerror.|
|Despliegueazul-verde|Estrategiaquemantienedosentornosproductivosyconmutaeltráficoentreellos.|
|Desplieguecanario|Estrategiaque exponelanuevaversiónaunafraccióncrecientedeltráfico.|
|DevSecOps|Integracióndelasprácticasdeseguridadenelciclodedesarrolloyoperación.|
|ErlangC|Modelodeteoríadecolasempleadoparadimensionarcentrosdeatención.|
|FCR|FirstCallResolution.Resoluciónenelprimercontacto.|
|FM-200|Agentelimpiodeextincióndeincendios,aptopararecintosconequipamientoelectrónico.|
|laC|InfrastructureasCode.Infraestructuradefinidacomocódigoversionado.|
|.<br>Idempotencia|Propiedaddeunaoperaciónqueproduceelmismoresultadoaunqueseejecutevarias<br>veces.|
|ITIL|Marcodebuenasprácticasparalagestióndeserviciosdetecnologíasdeinformación.|
|Mamparode<br>aislamiento|Patrónquesepararecursosporgrupodeconsumoparaquelafalladeunonoagotelosdel<br>resto.|
|MTTR|MeanTimeToRestore.Tiempomedioderestauracióndelservicio.|
|NOC|NetworkOperationsCenter.Centrodeoperacionesdered.|
|NCh<br>OpenTelemetry|NormaChilenaOficial,emitidaporelInstitutoNacionaldeNormalización.<br>Estándarabiertodeinstrumentaciónparamétricas,registrosytrazas.|



Bases Técnicas Transversales TFEP-01/2026 49/51 

Pontificia Universidad Católica de Valparaíso - Escuela de Informática 

Licitación N* TFEP-01/2026 - Bases Técnicas Transversales 

|Término<br>OWASP|Definición<br>OpenWorldwideApplicationSecurityProject.|
|---|---|
|Percentil95|Valorbajoelcualseencuentrael95%delasmediciones.Reflejalaexperienciadelacola<br>lenta,noelpromedio.|
|PMBOK|Guíadefundamentosparaladireccióndeproyectos,delProjectManagementInstitute.|
|PMO|ProjectManagementOffice.Oficinadegestióndeproyectos.|
|Presupuestodeerror|Fraccióndeindisponibilidadadmitidaporelobjetivodeniveldeservicio,empleadapara<br>regularelritmodecambios.|
|PUE|PowerUsageEffectiveness.Relaciónentrelaenergíatotalconsumidaporunrecintoyla<br>consumidaporelequipamientodeTl.|
|RAID|RedundantArrayofIndependentDisks.Arregloredundante dediscos.|
|RPO|RecoveryPointObjective.Máximapérdidadedatostolerada,expresadaentiempo.|
|RTO|RecoveryTimeObjective.Máximotiempotoleradopararestituirelservicio.|
|sSBOM|SoftwareBillofMaterials.Inventariodeloscomponentesdeunartefactodesoftware.|
|SIEM|SecurityInformationandEventManagement.Plataformadecorrelacióndeeventosde<br>seguridad.|
|SLA/SLO/SLI|Acuerdo,objetivo eindicadordeniveldeservicio.|
|SLSA|Supply-chainLevelsforSoftwareArtifacts.Marcodenivelesdeseguridaddelacadena de<br>suministrodesoftware.|
|soc|SecurityOperationsCenter.Centrodeoperacionesdeseguridad.|
|SRE|SiteReliabilityEngineering.Disciplinadeoperacióndesistemasbasada eningeniería.|
|STRIDE|Metodologíademodeladodeamenazas:suplantación,manipulación,repudio,divulgación,<br>denegaciónyelevacióndeprivilegios.|
|TPS|TransactionsPerSecond.Transaccionesporsegundo.|
|UAT|UserAcceptanceTesting.Pruebasdeaceptacióndeusuario.|
|WAF|WebApplicationFirewall.Cortafuegosdeaplicacionesweb.|
|WCAG|WebContentAccessibilityGuidelines.Pautasdeaccesibilidadparaelcontenidoweb.|
|ZeroTrust|Modelodeseguridadenqueningunared,dispositivo,identidadocargadetrabajoes<br>confiablepordefecto.|



Bases Técnicas Transversales TFEP-01/2026 50/51 

