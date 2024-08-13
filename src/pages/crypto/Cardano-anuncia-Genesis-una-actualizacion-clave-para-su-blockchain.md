---
layout: ../../layouts/MarkdownPostLayout.astro

title: 'Cardano anuncia "Génesis", una actualización clave para su blockchain'
date: 'Mayo 16, 2024'
pubDate: '2024-05-16T14:55:00'
description: 'El fundador de Cardano, Charles Hoskinson, avivó la emoción del mundo crypto con una publicación en X, afirmando que "El Génesis está llegando".'
author: 'Plankton Editorial Team'
image:
    url: 'https://raw.githubusercontent.com/AntonioHerrera1994/news-astro/master/src/assets/crypto/crypto148.webp'
    alt: 'Cardano anuncia "Génesis", una actualización clave para su blockchain'
tags: ["crypto"]
category: Crypto
---

<span><a href="/" style="text-decoration:none;color:#0F1416">Inicio</a> / <a href="/crypto" style="text-decoration:none;color:#0F1416">Crypto</a></span>

<p style="font-weight: bold;">El fundador de Cardano, Charles Hoskinson, recientemente avivó la emoción del mundo de las criptomonedas con una publicación en X, afirmando que "El Génesis está llegando". Este anuncio estuvo vinculado a un blog escrito por Nicholas Frisby, ingeniero de software en IOHK, que arroja luz sobre el próximo protocolo Ouroboros Génesis, una actualización significativa destinada a mejorar el mecanismo de consenso fundamental de la blockchain de Cardano. </p>

El protocolo Ouroboros Génesis representa un avance significativo en el desarrollo del mecanismo de consenso subyacente de Cardano. Basándose en las iteraciones anteriores - Ouroboros Classic, Ouroboros BFT y Ouroboros Praos - Génesis introduce mejoras cruciales enfocadas en proteger los nodos de la red en sus momentos más vulnerables: al momento de su conexión inicial a la red o al volver a conectarse tras una ausencia significativa.

La actualización ofrece varias características innovadoras para abordar los desafíos únicos que enfrentan los nodos nuevos o de retorno:

<ul style="font-family: 'Helvetica', sans-serif;">
<li><span style="font-weight:bold">Pares del libro mayor:</span> un nuevo componente en la arquitectura del nodo para mejorar la seguridad, corroborando que los nodos se conecten con participantes de la red de confianza, reduciendo así el riesgo de ataques de eclipse.</li>
<li><span style="font-weight:bold">Checkpointing ligero:</span> un mecanismo que proporciona una opción de recuperación durante situaciones críticas, permitiendo a la red establecer rápidamente un consenso sobre la versión correcta de la historia de la blockchain.</li>
<li><span style="font-weight:bold">Límite de Premura (LoE):</span> esta característica previene que los nodos se comprometan prematuramente con una blockchain que no ha sido completamente validada por fuentes confiables.</li>
<li><span style="font-weight:bold">Desconexiones por Densidad de Génesis (GDD):</span> un protocolo para desconectar de pares que sugieran una versión de la blockchain más densa pero potencialmente deshonesta.</li>
<li><span style="font-weight:bold">Límite de Paciencia (LoP):</span> asegura que los nodos solo mantengan conexiones con pares que entreguen datos de la blockchain de manera oportuna, reduciendo el riesgo de ataques de estancamiento.</li>
</ul>

Además, Ouroboros Génesis va más allá de meras mejoras incrementales integrando profundamente mecanismos que elevan significativamente la postura de seguridad de la red:

Límites de reversión: manteniendo un límite de reversión fijado de iteraciones anteriores (2,160 bloques), Génesis asegura un equilibrio entre flexibilidad y estabilidad, previniendo abusos potenciales en las capacidades de reversión mientras mantiene chequeos de seguridad esenciales.
Revisión de la lógica de selección de pares: la lógica actualizada de selección de pares en Génesis aprovecha las distribuciones de participación recientes para elegir pares, aumentando la probabilidad de conectar con nodos honestos y reduciendo la posibilidad de ataques de eclipse.
Ajustes de red adaptativos: el protocolo presenta ajustes dinámicos, como modificar el número de pares del libro mayor durante la fase de sincronización de un nodo, lo que es crucial para mantener robustas defensas contra la segmentación o aislamiento de la red.

La introducción de Ouroboros Génesis es esperada para marcar un salto adelante significativo para la seguridad de Cardano. Con un lanzamiento proyectado para el tercer trimestre de 2024, actualmente está en las fases finales de desarrollo y prueba. Este período es crítico para garantizar la integración perfecta de las nuevas características con los sistemas existentes, así como su desempeño bajo condiciones operativas diversas.

Al momento de esta publicación, ADA se cotiza a $0.454.

