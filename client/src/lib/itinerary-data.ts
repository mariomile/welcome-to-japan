export interface TimelineEntry {
  time: string;
  title: string;
  detail: string;
  maps: string;
}

export interface DayData {
  day: number;
  title: string;
  location: string;
  tag: string;
  icon: string;
  timeline: TimelineEntry[];
}

export interface TaskData {
  id: number;
  title: string;
  timeline: string;
  icon: string;
}

export const itineraryData: DayData[] = [
  {
    day: 1, title: "Deploy: Tokyo 11:00 AM", location: "Tokyo", tag: "First Impression", icon: "\u{1F3D9}\uFE0F",
    timeline: [
      { time: "11:00", title: "Atterraggio Tattico & Setup Logistico",
        detail: "<b>Setup Connettività:</b> Essendo la prima volta, la rete è vitale. Attivate il profilo eSIM (Ubigi/Airalo) scaricato in Italia. Non fermatevi a comprare SIM fisiche o Pocket WiFi. <br><br><b>Immigrazione:</b> Aprite i QR Code generati su <i>Visit Japan Web</i> per saltare le file ai controlli cartacei. <br><br><b>Cash & Transit:</b> Trovate un ATM del 7-Eleven in aeroporto per prelevare Yen (Revolut/N26 consigliate). Prendete il treno Keisei Skyliner o N'EX verso il centro. Tempo stimato di uscita: 60-90 minuti.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Airport" },
      { time: "14:00", title: "Check-in & View Panoramica Gratuita",
        detail: "Uscite a Shinjuku. L'impatto con la stazione (la più grande del mondo) sarà uno shock. Lasciate i bagagli in hotel. Per avere subito la mappa mentale di Tokyo, andate al <b>Tokyo Metropolitan Government Building</b>. Due torri gemelle governative dove si sale gratis al 45° piano. Nessuna fila, vista a 360° sull'oceano di cemento.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Metropolitan+Government+Building" },
      { time: "18:00", title: "Kabukicho & Il Godzilla",
        detail: "Il buio accende la città. Entrate a <b>Kabukicho</b>, il quartiere dei divertimenti. Sentirete musiche assordanti dai locali di Pachinko. Puntate verso il cinema Toho: sul tetto c'è una replica gigante della testa di Godzilla che a orari sputa fumo e ruggisce. È caotico, i PR proveranno a fermarvi (ignorateli con un cenno, è sicuro).",
        maps: "https://www.google.com/maps/search/?api=1&query=Kabukicho+Godzilla+Head" },
      { time: "19:30", title: "Cena: Omoide Yokocho (Piss Alley)",
        detail: "Un contrasto brutale con i neon. È un vicolo vicinissimo ai binari, incastrato nel tempo. Stretto, fumoso, pieno di lanterne rosse. <b>Cosa fare:</b> Sedetevi al bancone di un micro-locale (cercate quelli con menù in inglese se non parlate giapponese). Ordinate <i>Nama-biru</i> (birra alla spina) ghiacciata e <i>Yakitori</i> (spiedini di pollo). Vi chiederanno se li volete <i>Shio</i> (al sale) o <i>Tare</i> (con salsa dolce di soia). Prendeteli misti.",
        maps: "https://www.google.com/maps/search/?api=1&query=Omoide+Yokocho+Shinjuku" },
      { time: "21:30", title: "Golden Gai & Batting Cages",
        detail: "Spostatevi al <b>Golden Gai</b>: sei viuzze con 200 bar minuscoli. <b>Regola:</b> Cercate i cartelli 'No Cover Charge' per evitare di pagare 10€ solo per sedervi. Fate networking col barista. <br><br><b>Late Night:</b> Quando chiude, andate all'<b>Oslo Batting Center</b>. Sono gabbie di battuta da baseball aperte fino a tardi. Inserite i gettoni, scegliete la velocità della macchina lanciapalle (da 80 a 130 km/h) e scaricate l'adrenalina.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shinjuku+Batting+Center" }
    ]
  },
  {
    day: 2, title: "Dal Silenzio Zen al Caos Arcade", location: "Tokyo", tag: "Tech & Culture", icon: "\u{1F47E}",
    timeline: [
      { time: "07:30", title: "Senso-ji: Il Silenzio del Mattino",
        detail: "Sfruttate il jetlag che vi farà svegliare presto. Andate ad Asakusa e passate sotto l'enorme portale rosso (Kaminarimon). <b>Hack:</b> A quest'ora il tempio è deserto, potrete fare foto senza migliaia di teste. Purificatevi le mani alla fontana, avvicinate il fumo dell'incenso alla testa (porta saggezza) e godetevi l'architettura.",
        maps: "https://www.google.com/maps/search/?api=1&query=Senso-ji+Temple" },
      { time: "09:30", title: "Nakamise Street & Colazione",
        detail: "Le saracinesche (spesso dipinte a mano) si alzano. Inizia la passeggiata su Nakamise Dori. <b>Cosa mangiare:</b> Comprate un <i>Melon Pan</i> (pane dolce croccante fuori e morbido dentro) dal famosissimo negozio Kagetsudo. Assaggiate anche i <i>Ningyoyaki</i>, piccoli dolcetti a forma di lanterna o pagoda ripieni di fagioli rossi dolci (Anko).",
        maps: "https://www.google.com/maps/search/?api=1&query=Nakamise+Shopping+Street" },
      { time: "11:30", title: "Ueno e il Mercato Ameyoko",
        detail: "Spostamento in metro. <b>Ameyoko</b> nacque come mercato nero del dopoguerra. Oggi è un labirinto caotico sotto i binari. I venditori urlano sconti. <b>Pranzo:</b> Fermatevi in un chiosco sulla strada, mangiate un <i>Kaisendon</i> (ciotola di riso con pesce crudo freschissimo e uova di salmone) per pochi euro.",
        maps: "https://www.google.com/maps/search/?api=1&query=Ameyoko+Ueno" },
      { time: "14:30", title: "Akihabara: La Mecca del Gaming",
        detail: "Entrate nella 'Città Elettrica'. Andate nei palazzoni rossi <b>GiGO</b> o Taito Station. <b>Struttura:</b> I primi piani sono UFO Catcher (gru per peluche, skippateli, sono truccati). Salite agli ultimi piani: troverete i cabinati arcade. Sfidatevi a <i>Mario Kart Arcade GP</i> e pestate a tempo di musica i tamburi di <i>Taiko no Tatsujin</i>. <br><br><b>Shopping:</b> Tappa obbligata da <b>Super Potato</b> per vedere (e comprare) GameBoy, cartucce del NES e console introvabili.",
        maps: "https://www.google.com/maps/search/?api=1&query=Super+Potato+Akihabara" },
      { time: "17:30", title: "L'Esperienza: Maid Cafe",
        detail: "È cringe? Sì. Va fatto? Assolutamente. Scegliete il <i>@Home Cafe</i>. Ragazze vestite da cameriere vittoriane vi accoglieranno chiamandovi 'Master'. Ordinate l'<b>Omurice</b> (frittata di riso): vi chiederanno che animale volete e lo disegneranno sopra col ketchup. Dovrete anche fare la magia 'Moe Moe Kyun' per renderlo più buono. Ottimo per le Instagram Stories.",
        maps: "https://www.google.com/maps/search/?api=1&query=At+Home+Cafe+Akihabara" },
      { time: "20:30", title: "Cena Locale a Kanda",
        detail: "Uscite da Akihabara e camminate 10 minuti fino alla stazione di Kanda (zona di uffici). Entrate in un Izakaya sotto i binari dove ci sono solo <i>salaryman</i> giapponesi in giacca e cravatta. Ordinate pollo fritto croccantissimo (<i>Karaage</i>), fagioli Edamame e chiudete con fiumi di Highball (Whisky ghiacciato e soda).",
        maps: "https://www.google.com/maps/search/?api=1&query=Kanda+Station+Izakaya" }
    ]
  },
  {
    day: 3, title: "Ovest Tokyo: Streetwear e Clubbing", location: "Tokyo", tag: "High Energy", icon: "\u{1F525}",
    timeline: [
      { time: "09:00", title: "Meiji Jingu & Yoyogi Park",
        detail: "Passeggiata nel parco Yoyogi. Percorrete il largo sentiero di ghiaia nel bosco fino al santuario scintoista. Fate attenzione all'enorme muro di barili di Sake decorati (offerti dalle distillerie in omaggio agli dèi). È un momento di pace assoluta prima della frenesia della moda.",
        maps: "https://www.google.com/maps/search/?api=1&query=Meiji+Jingu+Tokyo" },
      { time: "11:00", title: "Cat Street & Sneaker Hunting",
        detail: "Uscite e attraversate Harajuku, ma bypassate la turistica Takeshita Street. Immettetevi in <b>Cat Street</b> (Ura-Harajuku). È la via pedonale più cool dell'Asia. Trovate negozi di abbigliamento vintage curatoriale, flagship store di brand streetwear (Supreme, Bape) e boutique di sneakers rarissime. Prendetevi uno specialty coffee.",
        maps: "https://www.google.com/maps/search/?api=1&query=Cat+Street+Harajuku" },
      { time: "14:30", title: "Shibuya Scramble Crossing",
        detail: "Proseguendo a piedi arriverete a Shibuya. Uscita Hachiko per la statua del cane. <b>Hack per la vista:</b> Invece di farvi schiacciare in mezzo all'incrocio, andate al palazzo <i>Magnet by Shibuya 109</i>. All'ultimo piano c'è una terrazza (Mag's Park) da cui potete fotografare dall'alto l'incredibile coreografia delle migliaia di persone che attraversano simultaneamente.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shibuya+Scramble+Crossing" },
      { time: "16:30", title: "Tramonto a Shibuya Sky (PRENOTATO)",
        detail: "Presentate il QR code. Prenderete ascensori super veloci. Arriverete a 230 metri. Gli angoli di vetro offrono la vista perfetta. Rimanete finché non scende il sole e Tokyo si trasforma in un tappeto infinito di luci bianche e rosse.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shibuya+Sky" },
      { time: "20:00", title: "Roppongi: Carne e Nightlife",
        detail: "Prendete la metro verso Roppongi, il quartiere della vita notturna internazionale. <b>Cena:</b> Sfondatevi di carne in una Steakhouse o un Korean BBQ locale. <br><b>Party:</b> Siete 3 ragazzi, Roppongi è fatta per voi. Andate al <i>1OAK Tokyo</i>, al <i>V2</i> o al <i>Jumanji 55</i>. Chiuderete la serata (o nottata) mangiando Ramen pesantissimo o Kebab alle 4 del mattino.",
        maps: "https://www.google.com/maps/search/?api=1&query=Roppongi+Crossing" }
    ]
  },
  {
    day: 4, title: "Oceano, Illusioni e Lusso", location: "Tokyo", tag: "Premium", icon: "\u2728",
    timeline: [
      { time: "09:30", title: "Tsukiji Outer Market (Cura Post-Party)",
        detail: "Niente sveglia all'alba oggi. Arrivate al mercato esterno di Tsukiji. Le bancarelle sono il miglior rimedio per i postumi. <b>Must-eat:</b> Spiedini di manzo Wagyu fiammeggiati al momento serviti con ricci di mare (Uni) sopra. Se vi piace il pesce crudo, prendete ostriche giganti aperte al momento e condite con salsa Ponzu.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tsukiji+Outer+Market" },
      { time: "12:30", title: "TeamLab Planets (PRENOTATO)",
        detail: "Prendete la monorotaia verso Toyosu. <b>L'Esperienza:</b> Entrerete a piedi nudi. La prima stanza è una salita contro una cascata d'acqua vera. Poi entrerete in stanze dove l'acqua calda vi arriva al ginocchio e i pesci digitali nuotano intorno a voi. L'Infinity Room con specchi e LED è psichedelica.",
        maps: "https://www.google.com/maps/search/?api=1&query=teamLab+Planets" },
      { time: "15:30", title: "Odaiba: Il Gundam e Joypolis",
        detail: "Prendete la linea automatica Yurikamome che attraversa il maestoso Rainbow Bridge. Davanti al DiverCity vi aspetta il Gundam Unicorn 1:1. <b>Adrenalina extra:</b> Entrate al <i>Tokyo Joypolis</i> (Sega), un parco divertimenti interamente al chiuso. Fate le montagne russe <i>Halfpipe Tokyo</i> in cui dovete schiacciare pulsanti a tempo mentre girate come trottole.",
        maps: "https://www.google.com/maps/search/?api=1&query=Unicorn+Gundam+Statue+Odaiba" },
      { time: "19:00", title: "Ginza e la Cena Omakase",
        detail: "Rientro a Ginza. Se è domenica, la via centrale è chiusa alle auto (Hokoten). Quartiere elitario e immacolato. <b>Cena:</b> Concedetevi il Sushi Omakase ('Lascio fare a te'). Vi sedete al bancone di legno laccato. Il maestro vi prepara un Nigiri alla volta, già spennellato con la soia esatta necessaria. Voi dovete solo prenderlo con le dita e mangiarlo in un solo boccone.",
        maps: "https://www.google.com/maps/search/?api=1&query=Ginza+Sushi" },
      { time: "22:30", title: "Midnight Shopping al Don Quijote",
        detail: "A Ginza o Shinjuku. Entrate nel Mega Don Quijote (Donki) aperto h24. <b>Hack logistico:</b> Facendo la spesa di notte evitate le code chilometriche e non perdete tempo utile di giorno. Comprate skin-care, integratori giapponesi folli, dolci. Portate il passaporto per defalcare l'IVA dell'10% alla cassa Tax-Free.",
        maps: "https://www.google.com/maps/search/?api=1&query=Mega+Don+Quijote+Ginza" }
    ]
  },
  {
    day: 5, title: "Hakone: Azzerare l'Acido Lattico", location: "Hakone", tag: "Relax", icon: "\u2668\uFE0F",
    timeline: [
      { time: "08:30", title: "Ta-Q-Bin Operations",
        detail: "Scendete alla reception di Tokyo. Compilate il modulo per il servizio <b>Yamato Transport</b>. Loro prendono in carico i vostri 3 valigioni e li spediscono all'hotel di Kyoto (ci metteranno un giorno). Voi partite leggeri solo con uno zainetto tattico.",
        maps: "https://www.google.com/maps/search/?api=1&query=Yamato+Transport+Tokyo" },
      { time: "10:00", title: "Romancecar & Ekiben",
        detail: "Dalla stazione di Shinjuku (rete Odakyu) prendete il treno limitato Romancecar per Hakone-Yumoto. <b>Cibo:</b> Comprate prima di salire un <i>Ekiben</i> (i bento box spettacolari venduti in stazione) e mangiatelo sul treno guardando i palazzi trasformarsi in montagne.",
        maps: "https://www.google.com/maps/search/?api=1&query=Hakone+Yumoto" },
      { time: "12:30", title: "Il Loop di Hakone e le Uova Nere",
        detail: "Hakone è un percorso circolare. Funicolare, poi funivia (Ropeway) fino alla vetta di <b>Owakudani</b>. La puzza di zolfo è forte, il terreno fuma. Comprate un sacchetto di <i>Kuro-tamago</i> (uova nere). Il guscio è nero per via dell'ossidazione sulfurea, dentro sono normali uova sode ma la leggenda narra allunghino la vita di 7 anni. Poi scendete con la nave pirata sul Lago Ashi.",
        maps: "https://www.google.com/maps/search/?api=1&query=Owakudani+Hakone" },
      { time: "16:00", title: "Check-in Ryokan & Onsen",
        detail: "Entrate nella locanda. Via le scarpe. Vi daranno gli <i>Yukata</i> (vesti di cotone) e la giacca (Haori). <b>Il rituale Onsen:</b> Niente costumi. Nudi. Vi sedete sugli sgabellini, vi lavate il corpo minuziosamente con il sapone. Solo allora vi immergete nelle acque termali (40°C-42°C). State ammollo finché resistete, l'acqua ricca di minerali resetterà la stanchezza fisica di 4 giorni a Tokyo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Hakone+Onsen" },
      { time: "19:00", title: "La Cena Kaiseki",
        detail: "Sempre indossando lo Yukata, vi siederete sui tatami. La cena Kaiseki è l'apice della gastronomia giapponese. Vi porteranno 10-15 piattini microscopici. Assaggerete Sashimi freschissimo, tempura croccante, zuppe di stagione, un piccolo pezzo di wagyu sulla griglia. Un viaggio sensoriale pazzesco. Si va a letto presto sui futon.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kaiseki+Hakone" }
    ]
  },
  {
    day: 6, title: "L'Impatto con l'Antica Kyoto", location: "Kyoto", tag: "Cultura", icon: "\u{1F684}",
    timeline: [
      { time: "09:30", title: "Treno Proiettile (Shinkansen)",
        detail: "Da Odawara prendete il treno Shinkansen per Kyoto. <b>Hack dei Posti:</b> Prenotate i posti sul lato destro del treno (posti E o D) se volete massimizzare la possibilità di vedere il Monte Fuji sfrecciare fuori dal finestrino a 300 km/h.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kyoto+Station" },
      { time: "13:00", title: "La Soluzione E-Bike",
        detail: "Arrivo a Kyoto, le valigie vi aspettano in stanza. <b>Il Segreto di Kyoto:</b> I bus sono perennemente intasati dai turisti. La metro non copre le zone storiche. La soluzione per 3 ragazzi? Affittate bici a pedalata assistita (e-bike). Vi muoverete come fulmini, parcheggiando ovunque. È un'esperienza di per sé.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kyoto+Bicycle+Rental" },
      { time: "14:30", title: "Kiyomizu-dera & Acqua Pura",
        detail: "Lasciate le bici. Salite a piedi la collina di Higashiyama fino al tempio Kiyomizu-dera. La terrazza è enorme. Sotto c'è la cascata Otowa: usate i lunghi mestoli per bere da uno dei tre flussi d'acqua (salute, successo o amore. Non bevete da tutti e tre o sarete considerati avidi dagli dèi!).",
        maps: "https://www.google.com/maps/search/?api=1&query=Kiyomizu-dera" },
      { time: "16:00", title: "Stradine Storiche: Ninenzaka",
        detail: "La discesa verso valle. Sannenzaka e Ninenzaka sono viuzze preservate perfettamente. Casette in legno, tettoie scure. Sembra il set di un film sui Samurai. Se siete stanchi, c'è il Maccha House per un Tiramisù al tè verde dentro scatolette di legno (Masu).",
        maps: "https://www.google.com/maps/search/?api=1&query=Ninenzaka+Kyoto" },
      { time: "18:00", title: "Gion & Avvistamento Geishe",
        detail: "Il quartiere delle arti. Passeggiate per la via <i>Hanamikoji</i> al tramonto. Le Geiko e Maiko vanno a lavorare nelle case da tè esclusive in questo momento. <b>Etichetta:</b> Guardatele passare, ma non mettetevi in mezzo alla strada, non urlate e non inseguitele con i telefoni.",
        maps: "https://www.google.com/maps/search/?api=1&query=Gion+Kyoto" },
      { time: "20:00", title: "Cena a Pontocho & Esplorazione Notturna",
        detail: "Pontocho è un vicolo parallelo al fiume. Cenate in uno dei ristoranti. Poi, <b>Hack Esplorativo:</b> Mentre i turisti tornano in hotel, prendete le e-bike e andate al <i>Santuario Yasaka</i>. Di notte è aperto, illuminato da centinaia di lanterne di carta col nome dei donatori. L'atmosfera è mistica e sarete completamente soli.",
        maps: "https://www.google.com/maps/search/?api=1&query=Yasaka+Shrine+Kyoto" }
    ]
  },
  {
    day: 7, title: "L'Iconico (con Algoritmo Anti-Folla)", location: "Kyoto", tag: "Ottimizzazione", icon: "\u{1F4F8}",
    timeline: [
      { time: "06:30", title: "La Foresta di Bambù all'Alba",
        detail: "<b>Il sacrificio che vale il viaggio.</b> Arashiyama alle 10:00 è invivibile. Arrivandoci quando c'è solo la prima luce dell'alba, la foresta è vuota. Sentirete il rumore ipnotico dei fusti alti 20 metri che sbattono tra loro mossi dal vento. Scattate le foto migliori del viaggio e andate via prima che arrivino i bus.",
        maps: "https://www.google.com/maps/search/?api=1&query=Arashiyama+Bamboo+Grove" },
      { time: "09:00", title: "Tenryu-ji & Shakkei",
        detail: "A due passi dal bambù. Il tempio zen Tenryu-ji ha un giardino del XIV secolo progettato col concetto di <i>Shakkei</i> (scenografia presa in prestito): le montagne vere dietro il tempio sembrano parte integrante del giardino stesso. Sedetevi sulla veranda di legno (hojo) a contemplarlo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tenryu-ji+Temple" },
      { time: "11:30", title: "Kinkaku-ji (Il Padiglione d'Oro)",
        detail: "Prendete il bus o un taxi per andare a nord. Il tempio è un'icona mondiale, interamente placcato in foglia d'oro (ricostruito negli anni '50 dopo che un monaco folle lo incendiò). Qui c'è solo un percorso a senso unico per girarci intorno, ci vorranno solo 30 minuti, ma l'impatto visivo è brutale.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kinkaku-ji" },
      { time: "14:00", title: "Pranzo: Nishiki Market",
        detail: "Rientrati in centro, infilatevi in questo mercato alimentare coperto. Costantemente affollato. Assaggiate il <i>Tako Tamago</i> (un piccolo polpo rosso glassato e ripieno di un uovo di quaglia) e crocchette di pesce caldo. Ottimo posto per comprare coltelli in acciaio al carbonio fatti a mano (come da Aritsugu).",
        maps: "https://www.google.com/maps/search/?api=1&query=Nishiki+Market" },
      { time: "17:00", title: "Kamo River Chill",
        detail: "Usate l'ultima ora di luce per pedalare. Fermatevi a un Kombini, prendete delle lattine di <i>Strong Zero</i> o Chu-Hi alla frutta, e sedetevi sull'erba lungo le sponde del fiume Kamo. È il punto di ritrovo degli studenti universitari di Kyoto. Vibrazione super rilassata.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kamo+River+Kyoto" },
      { time: "19:30", title: "Cena: La via del Ramen",
        detail: "A Kyoto Station, andate dritti al 10° piano. Troverete la <i>Kyoto Ramen Koji</i> (Via del Ramen). 10 ristoranti diversi. <b>Istruzioni:</b> Scegliete tramite i distributori automatici fuori dal locale, ritirate il bigliettino, date lo scontrino al cameriere e mangiate il vostro ramen risucchiando forte (segno che è buono).",
        maps: "https://www.google.com/maps/search/?api=1&query=Kyoto+Station+Ramen+Koji" }
    ]
  },
  {
    day: 8, title: "Workout e Lo Shock Sensoriale", location: "Kyoto/Osaka", tag: "Transizione", icon: "\u26E9\uFE0F",
    timeline: [
      { time: "07:00", title: "Fushimi Inari: L'Ascesa",
        detail: "<b>Il Leg Day definitivo.</b> Arrivate presto al tempio dei 10.000 Torii (donati da aziende giapponesi, troverete ideogrammi neri incisi dietro ognuno). Ignorate i turisti in basso e iniziate a scalare la montagna. Al bivio (Yotsutsuji) avrete un bel panorama. Continuate fino al santuario superiore in cima alla montagna boscosa. Sarete sudati, fieri e soli.",
        maps: "https://www.google.com/maps/search/?api=1&query=Fushimi+Inari" },
      { time: "11:00", title: "Degustazione di Sake",
        detail: "Scendendo verso sud, il quartiere di Fushimi è la capitale storica del Sake per via della sua acqua pura. Andate al <b>Gekkeikan Okura Sake Museum</b>. Tour veloce e assaggio di tre tipi diversi di Sake (caldo, freddo e da prugna) prima di lasciare Kyoto.",
        maps: "https://www.google.com/maps/search/?api=1&query=Gekkeikan+Okura+Sake+Museum" },
      { time: "14:00", title: "L'Impatto con Osaka & Kuromon Market",
        detail: "Mezz'ora di treno e la pacatezza zen lascia spazio al caos industriale e chiassoso di Osaka. Fate il check-in. Andate al <b>Kuromon Ichiba Market</b>. Pieno di banchi del pesce (Tonno Toro, Riccio di Mare) e banchi di manzo Kobe dove vi cuociono i cubetti di carne davanti agli occhi.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kuromon+Ichiba" },
      { time: "18:00", title: "Dotonbori: Il Cuore del Kansai",
        detail: "Un canale artificiale circondato da grattacieli tappezzati di neon LED colossali e maxischermi. Trovate il ponte Ebisubashi e fate l'iconica foto con l'insegna del <b>Glico Man</b>.",
        maps: "https://www.google.com/maps/search/?api=1&query=Dotonbori" },
      { time: "19:30", title: "Kuidaore: Il Comandamento di Osaka",
        detail: "Kuidaore significa 'mangiare fino a rovinarsi'. La missione di oggi: comprare <b>Takoyaki</b> (polpette di pastella con pezzi di polpo bollente dentro, coperte di maionese e scaglie di bonito ballerine) da un chiosco. Poi sedersi in un ristorante di <b>Okonomiyaki</b> (frittata di cavolo e carne su piastra calda) innaffiando tutto con birra Asahi.",
        maps: "https://www.google.com/maps/search/?api=1&query=Okonomiyaki+Dotonbori" }
    ]
  },
  {
    day: 9, title: "Super Mario, Dinosauri & Spo-Cha", location: "Osaka", tag: "Adrenalina Pura", icon: "\u{1F3A2}",
    timeline: [
      { time: "07:30", title: "Assalto agli USJ",
        detail: "<b>Operazione Militare:</b> Arrivate ai cancelli di Universal Studios Japan un'ora prima dell'apertura ufficiale. I giapponesi sono iper-organizzati. Appena si aprono i tornelli, camminate veloci (non correte, vi fermano) verso l'area Nintendo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Universal+Studios+Japan" },
      { time: "09:00", title: "Super Nintendo World (PRENOTATO)",
        detail: "Entrate dal tubo verde. Comprate un Power-Up Band (braccialetto smart) per interagire con i blocchi. Con l'Express Pass andate dritti su <i>Mario Kart: Koopa's Challenge</i>. Vi metteranno un visore AR (Realtà Aumentata) per lanciare gusci rossi reali mentre sterzate. Una roba mai vista in Europa.",
        maps: "https://www.google.com/maps/search/?api=1&query=Super+Nintendo+World+USJ" },
      { time: "13:00", title: "Flying Dinosaur & Harry Potter",
        detail: "Andate sull'ottovolante <i>The Flying Dinosaur</i>. Vi appendono a pancia in giù e vi scaraventano in loop folli. <b>Hack 3 amici:</b> Usate rigorosamente la fila 'Single Rider'. Risparmierete 90 minuti di coda, sarete in carrelli separati ma il divertimento è lo stesso. Dopo, chillate a Hogsmeade con una Burrobirra ghiacciata.",
        maps: "https://www.google.com/maps/search/?api=1&query=The+Flying+Dinosaur+USJ" },
      { time: "19:00", title: "Uscita & Cena a CityWalk",
        detail: "Avrete le gambe a pezzi. Uscite dal parco. Mangerete la prima cosa calorica che vi capita davanti nella CityWalk adiacente (che sia un Bubba Gump o un ramen tonkotsu super carico).",
        maps: "https://www.google.com/maps/search/?api=1&query=Universal+CityWalk+Osaka" },
      { time: "22:00", title: "Late Night: Round1 Spo-Cha",
        detail: "<b>Energia Extra:</b> Se non siete crollati, andate a Namba. Entrate nel <b>Round1 Stadium</b>. Pagate un biglietto per l'area <i>Spo-Cha</i>. Avrete accesso illimitato e gratuito per ore a: cabinati arcade, freccette, sale karaoke private, basket, pattinaggio a rotelle, calcetto e batting cages sul tetto. È la follia videoludica giapponese allo stato puro.",
        maps: "https://www.google.com/maps/search/?api=1&query=Round1+Stadium+Sennichimae" }
    ]
  },
  {
    day: 10, title: "Biscotti, Cyberpunk e Arte Notturna", location: "Nara / Osaka", tag: "Esplorazione", icon: "\u{1F98C}",
    timeline: [
      { time: "09:30", title: "Nara: I Cervi Sika",
        detail: "Treno Kintetsu verso Nara (più comodo del treno JR). Il parco enorme ospita oltre 1000 cervi sacri. Comprate i <i>Shika Senbei</i> (cracker per cervi). <b>Hack:</b> Se fate un leggero inchino al cervo, lui vi risponderà inchinandosi a sua volta per ricevere il biscotto. (Nascondete la mappa di carta, se la mangiano).",
        maps: "https://www.google.com/maps/search/?api=1&query=Nara+Park" },
      { time: "11:30", title: "Il Colossale Todai-ji",
        detail: "Questo tempio è l'edificio in legno più grande del mondo. All'interno c'è un Buddha di bronzo scuro mastodontico (15 metri). Dietro la statua c'è una colonna di legno con un buco alla base. Leggenda: chi riesce a passarci attraverso riceverà l'illuminazione (provateci, è stretto).",
        maps: "https://www.google.com/maps/search/?api=1&query=Todai-ji+Temple+Nara" },
      { time: "13:00", title: "Nakatanidou: La Battitura del Mochi",
        detail: "Mentre tornate alla stazione, fermatevi da Nakatanidou. Guardate i mastri pasticceri che eseguono il <i>Mochitsuki</i>: battono con martelli di legno giganti la pasta di riso verde a velocità inumana, urlando. Comprate un Mochi caldo ripieno di fagioli rossi.",
        maps: "https://www.google.com/maps/search/?api=1&query=Nakatanidou+Mochi+Nara" },
      { time: "16:30", title: "Shinsekai: Il Quartiere Anni '80",
        detail: "Tornate a Osaka e andate a Shinsekai (Nuovo Mondo). Era il quartiere del futuro a inizio '900, oggi è un paradiso retro-cyberpunk. Pieno di sale di giochi meccanici vecchissimi (Smartball) e insegne 3D giganti. L'atmosfera è scanzonata e proletaria.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shinsekai+Osaka" },
      { time: "18:00", title: "Cena: Kushikatsu (La Regola del Doppio Tuffo)",
        detail: "Sedetevi da <i>Daruma Kushikatsu</i>. Sono spiedini di qualsiasi cosa (manzo, asparagi, uova di quaglia, formaggio) impanati nel Panko e fritti. Davanti a voi c'è una vaschetta di salsa Worcestershire agrodolce in comune. <b>Regola:</b> Si intinge lo spiedino UNA VOLTA SOLA. Il doppio tuffo è severamente vietato e sarete ripresi duramente se lo fate.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kushikatsu+Daruma+Shinsekai" },
      { time: "20:30", title: "TeamLab Botanical Garden Night",
        detail: "<b>Esperienza Pazzesca:</b> Spostatevi al giardino botanico Nagai di Osaka. Di notte, il collettivo artistico TeamLab lo trasforma in un'installazione mistica all'aperto. Uova luminose giganti (Ovoids) sparse tra gli alberi, laghi illuminati, sculture che cambiano colore se le sfiorate. È un'esperienza quasi psichedelica.",
        maps: "https://www.google.com/maps/search/?api=1&query=TeamLab+Botanical+Garden+Osaka" }
    ]
  },
  {
    day: 11, title: "L'Alta Società, Kobe e i Club", location: "Kobe / Osaka", tag: "Party & Lusso", icon: "\u{1F969}",
    timeline: [
      { time: "11:00", title: "Esplorazione di Kobe",
        detail: "Breve treno rapido per Kobe. Città portuale dal vibe internazionale. Passeggiate nel quartiere storico <i>Kitano-cho</i> o scendete al <i>Meriken Park</i> per vedere la torre del porto rossa. Preparatevi al pasto più incredibile del viaggio.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kobe+Meriken+Park" },
      { time: "13:00", title: "Teppanyaki Kobe Beef (PRENOTATO)",
        detail: "Per 3 ragazzi lavoratori, questa è la 'treat'. Prenotate mesi prima da <i>Kobe Beef Ishida</i> o simile. Scegliete rigorosamente la carne 'Wagyu A5'. Sederete al bancone. Uno chef personale vi mostrerà il taglio di carne crudo: ha più grasso bianco (marmorizzazione/sashi) che carne rossa. La cuocerà sulla piastra d'acciaio davanti a voi in 3 minuti. Si scioglie in bocca, senza masticare.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kobe+Beef+Ishida" },
      { time: "17:00", title: "Umeda Sky Building & Kitashinchi",
        detail: "Tornate a Osaka (stazione di Umeda). Salite sull'<b>Umeda Sky Building</b> al tramonto. Ha delle incredibili scale mobili sospese nel vuoto tra i due grattacieli. Scendendo, passeggiate per <b>Kitashinchi</b>, il distretto premium dei club esclusivi per host/hostess e dirigenti aziendali.",
        maps: "https://www.google.com/maps/search/?api=1&query=Umeda+Sky+Building" },
      { time: "22:00", title: "La Notte di Americamura",
        detail: "È sabato sera (simbolicamente). <i>Americamura</i> (Amemura) è l'Harajuku del Kansai. Il Triangle Park è pieno di ragazzi, musica hip-hop, skater. Iniziate a fare bar-hopping o infilatevi in un Club Hip-Hop/EDM (es. Ghost Ultra Lounge, Pure, o Giraffe). Bevete, ballate e fate alba. Domani si dorme sul treno.",
        maps: "https://www.google.com/maps/search/?api=1&query=Americamura+Osaka" }
    ]
  },
  {
    day: 12, title: "Il Rientro, il Vintage e il BBQ", location: "Tokyo", tag: "Esecuzione", icon: "\u{1F684}",
    timeline: [
      { time: "10:30", title: "Shinkansen per Tokyo",
        detail: "Recuperate dalla nottata. Treno proiettile di ritorno a Tokyo. Comprate un caffè forte in bottiglietta (Boss Coffee) dai distributori automatici e un Bento box in stazione per pranzare in viaggio.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Station" },
      { time: "14:00", title: "Check-in: Base Finale",
        detail: "Check-in nel vostro ultimo hotel. Da qui in poi, l'obiettivo è incassare le ultime esperienze e smarcare gli acquisti senza portarsi dietro pacchi ingombranti nelle tappe precedenti.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Hotel" },
      { time: "15:30", title: "Shimokitazawa: Boho Vibes",
        detail: "Prendete il treno per Shimokitazawa. Il quartiere è interamente pedonale. <b>Cosa fare:</b> Se amate l'abbigliamento, spulciate i negozi di giacche vintage anni '90 (New York Joe, Flamingo). Se amate la musica, ci sono decine di negozi di vinili dell'usato tenuti perfettamente. Mangiate una <i>Soup Curry</i> per merenda.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shimokitazawa+Tokyo" },
      { time: "19:30", title: "Cena Yakiniku a Shibuya",
        detail: "Tornate a Shibuya. Per festeggiare il rientro, andate in un ristorante <b>Yakiniku</b> (Griglia giapponese). Aggiungete l'opzione <i>Nomihodai</i> (All-you-can-drink di birra e highball per 90 minuti). Vi porteranno piatti continui di carne cruda marinata, lingua di bue con limone e costine, e ve la cuocerete voi al centro del tavolo ridendo e urlando <i>Kanpai!</i>",
        maps: "https://www.google.com/maps/search/?api=1&query=Yakiniku+Shibuya" },
      { time: "22:00", title: "Center-Gai Shibuya",
        detail: "Smaltite la carne e l'alcol camminando in <i>Center-Gai</i> a Shibuya. Entrate nei Game Center, provate le Photo Booth giapponesi (Purikura) che vi modificheranno gli occhi facendovi sembrare personaggi degli anime.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shibuya+Center-Gai" }
    ]
  },
  {
    day: 13, title: "L'Arte dell'Eccesso e i Cocktail", location: "Tokyo", tag: "Chiusura col Botto", icon: "\u{1F3CE}\uFE0F",
    timeline: [
      { time: "10:00", title: "TeamLab Borderless (Azabudai Hills)",
        detail: "Se Planets vi è piaciuto, questo vi farà impazzire. Situato nel nuovo e lussuoso complesso di Azabudai Hills. È una mappa vasta, scura, senza percorsi definiti. Le opere d'arte (fiori luminosi, cascate digitali) si spostano, escono dalle stanze e interagiscono tra di loro e con voi. Perdetevi intenzionalmente.",
        maps: "https://www.google.com/maps/search/?api=1&query=Azabudai+Hills+TeamLab" },
      { time: "14:30", title: "L'Ultima Spesa: Donki & Uniqlo",
        detail: "Ultima corsa per ciò che vi manca. <i>Uniqlo Ginza</i> per magliette in cotone premium a prezzi stracciati. <i>Don Quijote</i> per le valanghe di KitKat ai gusti strambi (Sakè, Fragola, Patata dolce) da portare ai colleghi o famiglia in Italia.",
        maps: "https://www.google.com/maps/search/?api=1&query=Don+Quijote+Tokyo" },
      { time: "16:00", title: "Street Go-Karting (PRENOTATO)",
        detail: "<b>Epic Win Finale:</b> Mettete le tute di Mario, Luigi e Toad (o chi per loro) che vi forniranno al check-in. Salite sui Go-Kart a motore e, guidati da un capofila, entrate nel TRAFFICO VERO di Tokyo. Sfreccerete sotto i grattacieli, la Tokyo Tower e passerete i grandi incroci a 60km/h rasoterra. (Serve la Patente Internazionale di Ginevra '49 fatta in Motorizzazione in Italia).",
        maps: "https://www.google.com/maps/search/?api=1&query=Street+Kart+Tokyo" },
      { time: "19:30", title: "Tsukemen: Il Ramen Decostruito",
        detail: "Cena conclusiva. Trovate un posto famoso come <i>Rokurinsha</i> (nella Ramen Street sotto la stazione di Tokyo) o <i>Tsujita</i>. Ordinate lo <b>Tsukemen</b>. È un piatto con spaghetti grossi e freddi da una parte, e un brodo ultra-denso e bollente (spesso a base di maiale e polvere di sgombro) dall'altra. Li intingete e mangiate. Alla fine, chiedete il 'Soup Wari' (vi allungano il brodo rimasto con acqua calda per berlo a fine pasto).",
        maps: "https://www.google.com/maps/search/?api=1&query=Rokurinsha+Tokyo+Station" },
      { time: "22:00", title: "High-End Mixology / Speakeasy",
        detail: "Vestitevi decentemente e andate a bere l'ultimo drink. Tokyo ha i barman migliori del mondo, ossessionati dal dettaglio artigianale. Trovate posti come <i>The SG Club</i>, <i>Bar Trench</i> o il <i>Bar BenFiddich</i> (un mixology bar stile speziale magico a Shinjuku senza menù, dove il barman distilla erbe davanti a voi). Brindate alla riuscita del piano.",
        maps: "https://www.google.com/maps/search/?api=1&query=Bar+Benfiddich+Shinjuku" }
    ]
  },
  {
    day: 14, title: "Deployment (Il Rientro)", location: "Tokyo", tag: "Logistica", icon: "\u2708\uFE0F",
    timeline: [
      { time: "09:00", title: "Il Rito del Kombini",
        detail: "La malinconia colpisce qui. Scendete al 7-Eleven o FamilyMart per l'ultima volta. Compratevi l'intramontabile <i>Tamago Sando</i> (tramezzino col pane al latte morbidissimo ripieno di insalata di uova) e un pezzo di <i>Famichiki</i> (pollo fritto disossato bollente, sublime).",
        maps: "https://www.google.com/maps/search/?api=1&query=7-Eleven+Tokyo" },
      { time: "10:00", title: "Bagagli e Partenza",
        detail: "Combattete con l'espansione dei bagagli per farci stare l'impossibile. Prendete il Narita Express (N'EX) o lo Skyliner. Entrambi offrono ampio spazio per i bagagli pesanti.",
        maps: "https://www.google.com/maps/search/?api=1&query=Narita+Express" },
      { time: "12:00", title: "Aeroporto (Shopping Duty Free)",
        detail: "Dopo i controlli, se vi sono avanzati Yen o spazio, l'aeroporto è perfetto per comprare il famoso cioccolato <i>Royce'</i> (i mattoncini di Nama Chocolate che devono stare in fresco) e dolcetti <i>Tokyo Banana</i>.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Airport+Duty+Free" },
      { time: "15:00", title: "Volo di Ritorno",
        detail: "Tornate in Italia e in ufficio (o sulla vostra startup). L'esecuzione è stata perfetta.",
        maps: "" }
    ]
  }
];

export const tasksData: TaskData[] = [
  { id: 1, title: "Universal Studios (Express Pass con Mario Kart)", timeline: "SLA: T-60 Giorni ESATTI. Must-have.", icon: "\u{1F3AB}" },
  { id: 2, title: "TeamLab Planets & Borderless", timeline: "SLA: T-45 Giorni.", icon: "\u{1F4A1}" },
  { id: 3, title: "Shibuya Sky (Slot Tramonto)", timeline: "SLA: Esattamente 4 settimane prima (T-28).", icon: "\u{1F307}" },
  { id: 4, title: "Street Go-Karting (Akihabara)", timeline: "SLA: T-30 Giorni tramite Klook.", icon: "\u{1F3CE}\uFE0F" },
  { id: 5, title: "Teppanyaki Kobe Beef (Wagyu)", timeline: "SLA: T-30 Giorni. Inventory limitata a 10-15 posti.", icon: "\u{1F969}" },
  { id: 6, title: "Patente Internazionale (Ginevra 1949)", timeline: "SLA: T-60 Giorni in Motorizzazione in Italia.", icon: "\u{1F6C2}" },
  { id: 7, title: "Compilazione Visit Japan Web", timeline: "SLA: T-7 Giorni. QR code per Dogana e Immigrazione.", icon: "\u{1F4F1}" },
  { id: 8, title: "Setup eSIM (Ubigi)", timeline: "SLA: T-2 Giorni. Da attivare prima del volo.", icon: "\u{1F4F6}" }
];

export const stepChartData = [
  { day: "D1", steps: 15000 },
  { day: "D2", steps: 26000 },
  { day: "D3", steps: 28000 },
  { day: "D4", steps: 22000 },
  { day: "D5", steps: 10000 },
  { day: "D6", steps: 20000 },
  { day: "D7", steps: 28000 },
  { day: "D8", steps: 25000 },
  { day: "D9", steps: 35000 },
  { day: "D10", steps: 22000 },
  { day: "D11", steps: 18000 },
  { day: "D12", steps: 20000 },
  { day: "D13", steps: 18000 },
  { day: "D14", steps: 8000 },
];

export const budgetData = [
  { name: "Food (Wagyu, Omakase, Street Food)", value: 35, color: "#0F172A" },
  { name: "Shopping (Vintage, Elettronica)", value: 25, color: "#E11D48" },
  { name: "Trasporti & Shinkansen", value: 15, color: "#94A3B8" },
  { name: "Nightlife (Alcol/Club/Batting)", value: 15, color: "#10B981" },
  { name: "Attrazioni (USJ, TeamLab, GoKart)", value: 10, color: "#F59E0B" },
];

export const kyotoData = [
  { x: 9.5, y: 10, label: "Fushimi Inari (Trekking Alto)" },
  { x: 8.5, y: 7, label: "Kinkaku-ji (Diurno)" },
  { x: 9, y: 8.5, label: "Kiyomizu-dera (Terrazza)" },
  { x: 10, y: 9, label: "Arashiyama Bambù (Alba)" },
  { x: 2, y: 8, label: "Yasaka Shrine (Notturno)" },
];

export const vibeData = [
  { category: "Must-See Turistici", value: 9 },
  { category: "Esplorazione Local", value: 9 },
  { category: "Immersione Nerd/Tech", value: 8 },
  { category: "Nightlife & Adrenalina", value: 10 },
  { category: "Food Experience Premium", value: 10 },
  { category: "Natura & Relax", value: 4 },
];
