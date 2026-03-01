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
    day: 1, title: "Atterriamo! Si parte col botto", location: "Tokyo", tag: "Prima Impressione", icon: "\u{1F3D9}\uFE0F",
    timeline: [
      { time: "11:00", title: "Ce l'abbiamo fatta, siamo in Giappone!",
        detail: "<b>Prima cosa in assoluto:</b> attiviamo la eSIM (Ubigi o Airalo) che abbiamo scaricato in Italia, così abbiamo internet subito senza impazzire a cercare WiFi. <br><br><b>Ai controlli:</b> tiriamo fuori i QR Code di <i>Visit Japan Web</i> e saltiamo le file infinite dei turisti che compilano i fogli di carta. <br><br><b>Soldi e treno:</b> troviamo un ATM al 7-Eleven dell'aeroporto per prelevare Yen (funzionano Revolut e N26). Poi dritti sul Keisei Skyliner o N'EX verso il centro. Tra sbarco e uscita dall'aeroporto: 60-90 minuti, non perdiamo la testa.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Airport" },
      { time: "14:00", title: "Molliamo le valigie e saliamo in alto",
        detail: "Arriviamo a Shinjuku e la stazione è un delirio totale (è la più grande del mondo, niente panico). Buttiamo i bagagli in hotel e andiamo dritti al <b>Tokyo Metropolitan Government Building</b>. Si sale gratis al 45esimo piano e si vede tutta Tokyo a 360 gradi. Zero fila, primo colpo d'occhio pazzesco sulla città. Ci sembrerà di stare dentro un videogioco.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Metropolitan+Government+Building" },
      { time: "18:00", title: "Benvenuti nel casino di Kabukicho",
        detail: "Col buio questa zona si accende come un flipper. Entriamo a <b>Kabukicho</b>, il quartiere più pazzo di Shinjuku. Musica a palla dai Pachinko, neon ovunque. Andiamo a vedere la testa gigante di Godzilla sul cinema Toho: a certi orari sputa fumo e ruggisce! I PR cercheranno di tirarci dentro i locali, basta fare un cenno gentile e tirare dritto, è tranquillo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kabukicho+Godzilla+Head" },
      { time: "19:30", title: "Prima cena giapponese: Omoide Yokocho",
        detail: "Prepariamoci: è un vicolo strettissimo attaccato ai binari del treno, pieno di fumo e lanterne rosse. Sembra di essere tornati indietro di 60 anni. <b>Cosa fare:</b> sederci al bancone di un micro-locale e ordinare <i>Nama-biru</i> (birra alla spina gelata) con <i>Yakitori</i> (spiedini di pollo alla griglia). Ci chiederanno se li vogliamo <i>Shio</i> (al sale) o <i>Tare</i> (con salsa dolce). Ordiniamo misti e godiamoceli. La prima birra giapponese non si scorda mai.",
        maps: "https://www.google.com/maps/search/?api=1&query=Omoide+Yokocho+Shinjuku" },
      { time: "21:30", title: "Golden Gai e poi mazzate da baseball",
        detail: "Ci spostiamo al <b>Golden Gai</b>: sei vicoletti con 200 bar minuscoli dove entrano 5 persone a locale. <b>Trucco:</b> cerchiamo i cartelli 'No Cover Charge' per non pagare 10 euro solo per sederci. Chiacchieriamo col barista, sono tutti personaggi incredibili. <br><br><b>Dopo:</b> andiamo alle <b>Batting Cages</b> a tirare palline da baseball! Si mettono i gettoni, si sceglie la velocità (da 80 a 130 km/h) e si sfoga tutta l'adrenalina del primo giorno.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shinjuku+Batting+Center" }
    ]
  },
  {
    day: 2, title: "Templi all'alba, arcade al tramonto", location: "Tokyo", tag: "Tech & Cultura", icon: "\u{1F47E}",
    timeline: [
      { time: "07:30", title: "Senso-ji: la sveglia la fa il jetlag",
        detail: "Il jetlag ci sveglierà prestissimo, sfruttiamolo! Andiamo al tempio Senso-ji ad Asakusa, passiamo sotto il portalone rosso gigante (Kaminarimon). <b>Il bello:</b> a quest'ora il tempio è praticamente vuoto, foto da urlo senza turisti. Laviamoci le mani alla fontana sacra, avviciniamoci al fumo dell'incenso (si dice che porti saggezza) e godiamoci il silenzio prima che arrivi il caos.",
        maps: "https://www.google.com/maps/search/?api=1&query=Senso-ji+Temple" },
      { time: "09:30", title: "Colazione nella via dei souvenir",
        detail: "Le bancarelle di Nakamise Dori iniziano ad aprire. <b>Cosa mangiare:</b> un <i>Melon Pan</i> (panino dolce croccante fuori e morbidissimo dentro) da Kagetsudo, e i <i>Ningyoyaki</i>, dolcetti minuscoli a forma di lanterna ripieni di fagioli rossi dolci. Sì, i fagioli dolci qui sono una cosa seria e sono buonissimi.",
        maps: "https://www.google.com/maps/search/?api=1&query=Nakamise+Shopping+Street" },
      { time: "11:30", title: "Il mercato dove urlano: Ameyoko",
        detail: "Metro fino a Ueno. <b>Ameyoko</b> è nato come mercato nero del dopoguerra e oggi è un casino bellissimo sotto i binari. I venditori urlano sconti come pazzi. <b>Pranzo:</b> fermiamoci a un chiosco e ordiniamo un <i>Kaisendon</i> (ciotola di riso con pesce crudo freschissimo e uova di salmone). Costa pochissimo ed è una bomba.",
        maps: "https://www.google.com/maps/search/?api=1&query=Ameyoko+Ueno" },
      { time: "14:30", title: "Akihabara: il paradiso nerd",
        detail: "Ragazzi, qui impazziamo. La 'Città Elettrica'. Entriamo nei palazzoni dei giochi <b>GiGO</b> o Taito Station. <b>Come funzionano:</b> i primi piani sono UFO Catcher (le gru per i pupazzi, lasciamo stare che sono truccate). Saliamo in alto: lì ci sono i cabinati arcade veri. Sfidiamoci a <i>Mario Kart Arcade GP</i> e ai tamburi di <i>Taiko no Tatsujin</i>! <br><br><b>Shopping obbligatorio:</b> da <b>Super Potato</b> troviamo GameBoy, cartucce NES e roba vintage da collezionisti. Non usciremo a mani vuote.",
        maps: "https://www.google.com/maps/search/?api=1&query=Super+Potato+Akihabara" },
      { time: "17:30", title: "L'esperienza cringe che va fatta: Maid Cafe",
        detail: "È imbarazzante? Totalmente. Va fatto almeno una volta nella vita? Assolutamente sì. Andiamo al <i>@Home Cafe</i>. Le cameriere vestite da cameriere vittoriane ci chiameranno 'Master'. Ordiniamo l'<b>Omurice</b> (frittata di riso): ci chiederanno che animale vogliamo e lo disegneranno sopra col ketchup. Dovremo anche fare una formula magica ('Moe Moe Kyun') per rendere il cibo più buono. Content per i social garantito.",
        maps: "https://www.google.com/maps/search/?api=1&query=At+Home+Cafe+Akihabara" },
      { time: "20:30", title: "Cena vera tra i salaryman",
        detail: "Usciamo da Akihabara e camminiamo 10 minuti fino a Kanda. Entriamo in un Izakaya sotto i binari dove ci sono solo impiegati giapponesi in giacca e cravatta che bevono dopo il lavoro. Ordiniamo pollo fritto croccantissimo (<i>Karaage</i>), Edamame e fiumi di Highball (whisky con soda ghiacciato). Ci sentiremo locali per una sera.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kanda+Station+Izakaya" }
    ]
  },
  {
    day: 3, title: "Sneakers, tramonti e serata pazza", location: "Tokyo", tag: "Energia Pura", icon: "\u{1F525}",
    timeline: [
      { time: "09:00", title: "Passeggiata zen nel bosco",
        detail: "Iniziamo tranquilli nel parco Yoyogi. Camminiamo sulla ghiaia nel bosco fino al santuario Meiji Jingu. Guardiamo il muro enorme di barili di Sake decorati (offerti dalle distillerie agli dei). Un momento di pace totale prima della follia shopping che ci aspetta.",
        maps: "https://www.google.com/maps/search/?api=1&query=Meiji+Jingu+Tokyo" },
      { time: "11:00", title: "Cat Street: la via più cool dell'Asia",
        detail: "Usciamo e attraversiamo Harajuku, ma saltiamo la turisticissima Takeshita Street. Puntiamo su <b>Cat Street</b> (Ura-Harajuku). Via pedonale piena di negozi vintage curatissimi, flagship store streetwear (Supreme, Bape) e boutique di sneakers rarissime. Prendiamoci uno specialty coffee e facciamo un po' di danni alla carta di credito.",
        maps: "https://www.google.com/maps/search/?api=1&query=Cat+Street+Harajuku" },
      { time: "14:30", title: "L'incrocio più famoso del mondo",
        detail: "Proseguendo a piedi arriviamo a Shibuya. Foto alla statua di Hachiko il cane fedele. <b>Trucco per la vista:</b> invece di farvi schiacciare in mezzo all'incrocio, andate al palazzo <i>Magnet by Shibuya 109</i>. All'ultimo piano c'è una terrazza (Mag's Park) da cui fotografate dall'alto migliaia di persone che attraversano tutte insieme. Roba da brividi.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shibuya+Scramble+Crossing" },
      { time: "16:30", title: "Tramonto dallo Shibuya Sky (prenotato!)",
        detail: "Tiriamo fuori il QR code della prenotazione. Ascensori velocissimi, arriviamo a 230 metri. La vista è assurda. Restiamo fino a quando il sole tramonta e Tokyo diventa un tappeto infinito di lucine bianche e rosse. Una di quelle cose che te le ricordi per sempre.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shibuya+Sky" },
      { time: "20:00", title: "Roppongi: si mangia e si esce",
        detail: "Metro verso Roppongi, il quartiere della vita notturna. <b>Cena:</b> ci sfondamiamo di carne alla griglia in una Steakhouse o Korean BBQ. <br><b>Poi:</b> siamo 3 amici al primo viaggio in Giappone, stasera si esce! Proviamo il <i>1OAK Tokyo</i>, il <i>V2</i> o il <i>Jumanji 55</i>. Chiudiamo la nottata con un Ramen pesantissimo alle 4 di notte come tradizione vuole.",
        maps: "https://www.google.com/maps/search/?api=1&query=Roppongi+Crossing" }
    ]
  },
  {
    day: 4, title: "Post-sbornia, arte e sushi lusso", location: "Tokyo", tag: "Lusso", icon: "\u2728",
    timeline: [
      { time: "09:30", title: "Tsukiji: la cura della mattina dopo",
        detail: "Nessuna sveglia presto oggi, ce lo siamo meritati. Arriviamo al mercato esterno di Tsukiji. Le bancarelle sono la cura perfetta. <b>Da provare assolutamente:</b> spiedini di manzo Wagyu fiammeggiati al momento con riccio di mare sopra. Ostriche giganti aperte davanti a noi con salsa Ponzu. Ci rimettiamo in sesto mangiando.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tsukiji+Outer+Market" },
      { time: "12:30", title: "TeamLab Planets: prepariamo i piedi",
        detail: "Andiamo a Toyosu per il <b>TeamLab Planets</b>. <b>Come funziona:</b> si entra scalzi. La prima stanza è una salita contro una cascata d'acqua vera. Poi si cammina in stanze dove l'acqua calda arriva al ginocchio e pesci digitali nuotano intorno a noi. L'Infinity Room con specchi e LED è una roba allucinante. Prepariamo i telefoni impermeabili.",
        maps: "https://www.google.com/maps/search/?api=1&query=teamLab+Planets" },
      { time: "15:30", title: "Odaiba: il Gundam gigante e le giostre",
        detail: "Prendiamo la linea automatica che attraversa il Rainbow Bridge (già questa è un'esperienza). Davanti al DiverCity c'è il Gundam Unicorn a grandezza naturale. <b>Per scaricare adrenalina:</b> entriamo al <i>Tokyo Joypolis</i> di Sega. Montagne russe al chiuso dove schiacci pulsanti mentre giri come una trottola. Follia pura.",
        maps: "https://www.google.com/maps/search/?api=1&query=Unicorn+Gundam+Statue+Odaiba" },
      { time: "19:00", title: "Sushi Omakase: ci trattiamo bene",
        detail: "Andiamo a Ginza, il quartiere elegante. <b>Stasera ci trattiamo bene:</b> Sushi Omakase ('Lascio fare a te'). Ci sediamo al bancone di legno laccato. Il maestro ci prepara un Nigiri alla volta, già con la quantità esatta di soia. Lo prendiamo con le dita e lo mangiamo in un boccone solo. Probabilmente il sushi migliore della nostra vita.",
        maps: "https://www.google.com/maps/search/?api=1&query=Ginza+Sushi" },
      { time: "22:30", title: "Spesa notturna al Don Quijote",
        detail: "Entriamo nel Mega Don Quijote (Donki), aperto 24 ore. <b>Perché di notte:</b> zero file! Compriamo skincare giapponese, integratori strani, dolci assurdi. Portate il passaporto per togliere il 10% di IVA alla cassa Tax-Free. È un supermercato su 5 piani dove trovi qualsiasi cosa. Perderemo almeno un'ora lì dentro.",
        maps: "https://www.google.com/maps/search/?api=1&query=Mega+Don+Quijote+Ginza" }
    ]
  },
  {
    day: 5, title: "Hakone: oggi ci rilassiamo (sul serio)", location: "Hakone", tag: "Relax", icon: "\u2668\uFE0F",
    timeline: [
      { time: "08:30", title: "Spediamo le valigie come dei pro",
        detail: "Scendiamo alla reception e compiliamo il modulo per il servizio <b>Yamato Transport</b>. Loro prendono le nostre 3 valigie e le spediscono direttamente all'hotel di Kyoto (arrivano domani). Noi partiamo leggeri solo con lo zaino. Questa è una mossa da geni.",
        maps: "https://www.google.com/maps/search/?api=1&query=Yamato+Transport+Tokyo" },
      { time: "10:00", title: "Treno panoramico e pranzo in viaggio",
        detail: "Da Shinjuku prendiamo il Romancecar per Hakone-Yumoto. <b>Trucco:</b> compriamo un <i>Ekiben</i> (i bento box spettacolari delle stazioni giapponesi) prima di salire e lo mangiamo sul treno guardando i palazzi che diventano montagne. Viaggiare così è un altro mondo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Hakone+Yumoto" },
      { time: "12:30", title: "Uova nere e puzza di zolfo",
        detail: "Hakone è un percorso ad anello. Funicolare, poi funivia fino alla vetta di <b>Owakudani</b>. Puzza di zolfo fortissima, il terreno fuma. Compriamo le <i>Kuro-tamago</i> (uova nere): il guscio è nero per lo zolfo, dentro sono normali uova sode. La leggenda dice che ogni uovo allunga la vita di 7 anni. Poi scendiamo con una nave pirata (sì, pirata) sul Lago Ashi.",
        maps: "https://www.google.com/maps/search/?api=1&query=Owakudani+Hakone" },
      { time: "16:00", title: "Ryokan e terme: il reset totale",
        detail: "Entriamo nella locanda tradizionale. Via le scarpe, ci danno gli <i>Yukata</i> (vestaglie di cotone). <b>Come funziona l'Onsen:</b> niente costume, si va nudi (tranquilli, è normale qui). Ci si siede sugli sgabellini, ci si lava per bene, e POI ci si immerge nell'acqua termale a 42 gradi. Restiamo dentro finché resistiamo. Dopo 4 giorni di Tokyo, questo ci resetterà completamente.",
        maps: "https://www.google.com/maps/search/?api=1&query=Hakone+Onsen" },
      { time: "19:00", title: "Cena Kaiseki: 15 piattini pazzeschi",
        detail: "Restiamo in Yukata, ci sediamo sui tatami. La cena Kaiseki è il top della cucina giapponese. Ci portano 10-15 piattini minuscoli uno dopo l'altro: sashimi freschissimo, tempura croccante, zuppe stagionali, un pezzetto di wagyu alla griglia. È un viaggio nel viaggio. Dopo cena crollo sui futon. Notte da sogno.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kaiseki+Hakone" }
    ]
  },
  {
    day: 6, title: "Kyoto: benvenuti nel Giappone antico", location: "Kyoto", tag: "Cultura", icon: "\u{1F684}",
    timeline: [
      { time: "09:30", title: "Treno proiettile! (forse vediamo il Fuji)",
        detail: "Da Odawara prendiamo lo Shinkansen per Kyoto. <b>Trucco importantissimo:</b> prenotate i posti sul lato destro (posti E o D). Se siamo fortunati, vediamo il Monte Fuji sfrecciare fuori dal finestrino a 300 km/h. Un momento che non dimenticheremo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kyoto+Station" },
      { time: "13:00", title: "Affittiamo le e-bike e voliamo",
        detail: "Arriviamo a Kyoto, le valigie ci aspettano già in camera (grazie Yamato!). <b>Il segreto per muoversi a Kyoto:</b> i bus sono pieni zeppi di turisti, la metro non copre le zone storiche. Affittiamo bici elettriche. Ci muoveremo come dei fulmini, parcheggiando ovunque. È il modo migliore per vedere la città.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kyoto+Bicycle+Rental" },
      { time: "14:30", title: "Kiyomizu-dera: il tempio con la terrazza assurda",
        detail: "Lasciamo le bici e saliamo a piedi la collina. La terrazza del tempio è enorme e la vista lascia senza parole. Sotto c'è la cascata Otowa: si beve con dei mestoli lunghi da uno dei tre getti d'acqua (salute, successo o amore). <b>Regola:</b> non beviamo da tutti e tre, sennò gli dei ci considerano avidi!",
        maps: "https://www.google.com/maps/search/?api=1&query=Kiyomizu-dera" },
      { time: "16:00", title: "Le stradine dove sembra di stare in un film",
        detail: "Scendiamo verso valle per Sannenzaka e Ninenzaka. Viuzze preservate perfettamente: casette in legno, tettoie scure, sembra il set di un film sui Samurai. Se siamo stanchi, ci fermiamo al Maccha House per un tiramisù al tè verde servito in scatoline di legno.",
        maps: "https://www.google.com/maps/search/?api=1&query=Ninenzaka+Kyoto" },
      { time: "18:00", title: "Gion: magari becchiamo una Geisha",
        detail: "Il quartiere delle arti. Passeggiamo per <i>Hanamikoji</i> al tramonto. Le Geiko e Maiko vanno a lavorare nelle case da tè proprio a quest'ora. <b>Importante:</b> se ne vediamo una, non urliamo, non la inseguiamo col telefono e non ci mettiamo in mezzo alla strada. Guardiamo e basta, con rispetto.",
        maps: "https://www.google.com/maps/search/?api=1&query=Gion+Kyoto" },
      { time: "20:00", title: "Cena sul fiume e tempio notturno segreto",
        detail: "Ceniamo a Pontocho, un vicolo bellissimo parallelo al fiume. Poi <b>colpo di scena:</b> quando tutti i turisti tornano in hotel, noi prendiamo le e-bike e andiamo al <i>Santuario Yasaka</i>. Di notte è aperto, illuminato da centinaia di lanterne di carta. L'atmosfera è magica e saremo praticamente soli. Momento top del viaggio.",
        maps: "https://www.google.com/maps/search/?api=1&query=Yasaka+Shrine+Kyoto" }
    ]
  },
  {
    day: 7, title: "Sveglia all'alba per le foto della vita", location: "Kyoto", tag: "Foto Epiche", icon: "\u{1F4F8}",
    timeline: [
      { time: "06:30", title: "La foresta di bambù SENZA nessuno",
        detail: "<b>Questa sveglia ci cambierà il viaggio.</b> Arashiyama alle 10 è un inferno di gente. Ma se ci andiamo all'alba, la foresta è vuota. Sentiremo il rumore ipnotico dei fusti alti 20 metri che sbattono tra loro col vento. Le foto che facciamo qui saranno le migliori del viaggio. Andiamo via prima che arrivino i pullman.",
        maps: "https://www.google.com/maps/search/?api=1&query=Arashiyama+Bamboo+Grove" },
      { time: "09:00", title: "Tempio zen con vista da cartolina",
        detail: "A due passi dal bambù c'è il tempio Tenryu-ji. Ha un giardino del 1300 progettato con un trucco geniale: le montagne vere dietro il tempio sembrano parte del giardino. Sediamoci sulla veranda di legno e contempliamo. Dopo la sveglia all'alba ce lo meritiamo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tenryu-ji+Temple" },
      { time: "11:30", title: "Il tempio tutto d'oro",
        detail: "Taxi o bus verso nord per il Kinkaku-ji. È interamente coperto di foglia d'oro (lo ricostruirono negli anni '50 dopo che un monaco fuori di testa lo incendiò). C'è un percorso obbligato per girarci intorno, ci vogliono 30 minuti, ma l'impatto visivo è da mascella a terra.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kinkaku-ji" },
      { time: "14:00", title: "Pranzo al mercato: polpo e coltelli",
        detail: "Rientriamo in centro e ci infiliamo nel Nishiki Market. Sempre pieno ma vale la pena. Assaggiamo il <i>Tako Tamago</i> (un polpetto rosso glassato con dentro un uovo di quaglia) e crocchette di pesce caldo. Se ci piace cucinare: qui vendono coltelli in acciaio fatti a mano pazzeschi (tipo Aritsugu). Regaloni perfetti.",
        maps: "https://www.google.com/maps/search/?api=1&query=Nishiki+Market" },
      { time: "17:00", title: "Birretta sul fiume con gli studenti",
        detail: "Ultima ora di luce, pedaliamo lungo il fiume Kamo. Ci fermiamo a un konbini (minimarket), prendiamo delle lattine di <i>Strong Zero</i> o Chu-Hi alla frutta, e ci sediamo sull'erba. È il ritrovo degli universitari di Kyoto. Vibes rilassatissime, tramonto sul fiume, birra fresca. Perfezione.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kamo+River+Kyoto" },
      { time: "19:30", title: "La via del Ramen: scegliamo il nostro fighter",
        detail: "Alla stazione di Kyoto, 10esimo piano. C'è la <i>Kyoto Ramen Koji</i>: 10 ristoranti di ramen uno di fianco all'altro. <b>Come funziona:</b> si ordina dalla macchinetta fuori, si ritira il bigliettino, lo si dà al cameriere e si mangia il ramen risucchiando forte (qui è segno che è buono, non è maleducazione!). Sfida a chi fa più rumore.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kyoto+Station+Ramen+Koji" }
    ]
  },
  {
    day: 8, title: "10.000 Torii rossi e poi... Osaka!", location: "Kyoto/Osaka", tag: "Si Cambia", icon: "\u26E9\uFE0F",
    timeline: [
      { time: "07:00", title: "Fushimi Inari: il leg day definitivo",
        detail: "<b>Gambe pronte?</b> Arriviamo presto al tempio dei 10.000 portali rossi (Torii). Ognuno è stato donato da un'azienda giapponese, dietro ci sono gli ideogrammi col nome. In basso è pieno di gente, ma noi saliamo fino in cima alla montagna. Al bivio (Yotsutsuji) c'è un panorama pazzesco. Continuiamo fino alla vetta. Arriveremo sudati, fieri e praticamente soli.",
        maps: "https://www.google.com/maps/search/?api=1&query=Fushimi+Inari" },
      { time: "11:00", title: "Assaggio sake prima di salutare Kyoto",
        detail: "Scendendo verso sud, il quartiere di Fushimi è la patria storica del Sake. Andiamo al <b>Gekkeikan Okura Sake Museum</b>. Tour veloce e assaggio di tre tipi di sake (caldo, freddo e alla prugna). Brindisi d'addio a Kyoto!",
        maps: "https://www.google.com/maps/search/?api=1&query=Gekkeikan+Okura+Sake+Museum" },
      { time: "14:00", title: "Osaka! Si cambia completamente vibe",
        detail: "Mezz'ora di treno e il Giappone zen scompare. Osaka è caos, rumore, neon e cibo ovunque. Check-in e poi dritti al <b>Kuromon Ichiba Market</b>. Banchi del pesce dove assaggiamo tonno, riccio di mare e cubetti di Kobe beef cucinati davanti a noi. Questa città è fatta per mangiare.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kuromon+Ichiba" },
      { time: "18:00", title: "Dotonbori: i neon più pazzi del Giappone",
        detail: "Un canale circondato da grattacieli tappezzati di insegne LED giganti. Troviamo il ponte Ebisubashi e facciamo l'iconica foto con l'omino che corre della <b>Glico</b>. Di sera questa zona è come stare dentro un anime in live action.",
        maps: "https://www.google.com/maps/search/?api=1&query=Dotonbori" },
      { time: "19:30", title: "Mangiare fino a scoppiare (è la regola qui)",
        detail: "A Osaka il motto è <i>Kuidaore</i>: mangiare fino a rovinarsi. Stasera lo onoriamo. Prima <b>Takoyaki</b> da un chiosco: polpette di pastella con polpo bollente, maionese e scaglie di bonito che ballano sopra. Poi ci sediamo in un ristorante di <b>Okonomiyaki</b> (frittata di cavolo e carne sulla piastra calda). Birra Asahi a fiumi. Preparate le cinture.",
        maps: "https://www.google.com/maps/search/?api=1&query=Okonomiyaki+Dotonbori" }
    ]
  },
  {
    day: 9, title: "Super Mario nella vita reale!", location: "Osaka", tag: "Adrenalina Pura", icon: "\u{1F3A2}",
    timeline: [
      { time: "07:30", title: "Missione: Universal Studios Japan",
        detail: "<b>Operazione militare.</b> Arriviamo ai cancelli un'ora prima dell'apertura. Appena aprono, camminiamo veloci (non corriamo, ci fermano) dritti verso l'area Nintendo. L'Express Pass ce l'abbiamo, usiamolo bene.",
        maps: "https://www.google.com/maps/search/?api=1&query=Universal+Studios+Japan" },
      { time: "09:00", title: "Super Nintendo World: noi ci siamo dentro",
        detail: "Entriamo dal tubo verde. Compriamo il Power-Up Band (braccialetto smart) per colpire i blocchi. Con l'Express Pass andiamo dritti su <i>Mario Kart: Koopa's Challenge</i>. Ci mettono un visore AR e lanciamo gusci rossi VERI mentre sterziamo. Una roba che in Europa non esiste. Ci sentiremo bambini di nuovo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Super+Nintendo+World+USJ" },
      { time: "13:00", title: "Dinosauri volanti e Burrobirra",
        detail: "Andiamo sull'ottovolante <i>The Flying Dinosaur</i>. Ci appendono a pancia in giù e ci scaraventano in loop pazzeschi. <b>Trucco per 3 amici:</b> usiamo la fila 'Single Rider'. Risparmiamo 90 minuti di coda, finiamo in carrelli diversi ma chi se ne importa. Dopo, ci rilassiamo a Hogsmeade con una Burrobirra ghiacciata.",
        maps: "https://www.google.com/maps/search/?api=1&query=The+Flying+Dinosaur+USJ" },
      { time: "19:00", title: "Usciamo distrutti (ma felici)",
        detail: "Le gambe sono finite. Usciamo dal parco e mangiamo la prima cosa calorica che troviamo nella CityWalk accanto (ramen tonkotsu pesantissimo o un Bubba Gump, qualsiasi cosa va bene).",
        maps: "https://www.google.com/maps/search/?api=1&query=Universal+CityWalk+Osaka" },
      { time: "22:00", title: "Round1: sport, arcade e karaoke fino a tardi",
        detail: "<b>Se abbiamo ancora energie:</b> andiamo a Namba ed entriamo nel <b>Round1 Stadium</b>. Con un biglietto <i>Spo-Cha</i> abbiamo accesso illimitato a: cabinati arcade, freccette, karaoke privato, basket, pattinaggio a rotelle, calcetto e batting cages sul tetto. È il posto più assurdo in cui siamo mai stati. Puro Giappone.",
        maps: "https://www.google.com/maps/search/?api=1&query=Round1+Stadium+Sennichimae" }
    ]
  },
  {
    day: 10, title: "Cervi educati, fritti vietati e arte pazza", location: "Nara / Osaka", tag: "Esplorazione", icon: "\u{1F98C}",
    timeline: [
      { time: "09:30", title: "Nara: i cervi che si inchinano",
        detail: "Treno Kintetsu verso Nara. Il parco è pieno di oltre 1000 cervi sacri. Compriamo i <i>Shika Senbei</i> (cracker per cervi). <b>Il trucco più bello:</b> se facciamo un leggero inchino al cervo, lui ci risponde inchinandosi per ricevere il biscotto. È la cosa più tenera che vedremo in vita nostra. (Nascondiamo le mappe di carta, se le mangiano sul serio).",
        maps: "https://www.google.com/maps/search/?api=1&query=Nara+Park" },
      { time: "11:30", title: "Il Buddha più grande che abbiamo mai visto",
        detail: "Il tempio Todai-ji è l'edificio in legno più grande del mondo. Dentro c'è un Buddha di bronzo di 15 metri che toglie il fiato. Dietro la statua c'è una colonna con un buco alla base: chi ci passa attraverso riceve l'illuminazione. Proviamoci, è strettissimo e rideremo tantissimo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Todai-ji+Temple+Nara" },
      { time: "13:00", title: "Il mochi più veloce del mondo",
        detail: "Tornando alla stazione, fermiamoci da Nakatanidou. I pasticceri fanno il <i>Mochitsuki</i>: battono la pasta di riso con martelli giganti a velocità folle, urlando. È uno spettacolo ipnotico. Compriamo un mochi caldo ripieno di fagioli rossi dolci. Merenda perfetta.",
        maps: "https://www.google.com/maps/search/?api=1&query=Nakatanidou+Mochi+Nara" },
      { time: "16:30", title: "Shinsekai: il quartiere retro-cyberpunk",
        detail: "Torniamo a Osaka. Shinsekai ('Nuovo Mondo') doveva essere il quartiere del futuro 100 anni fa. Oggi è un paradiso retro pieno di sale giochi meccaniche antiche, insegne 3D giganti e un'atmosfera scanzonata e popolare. Ci si sente in un film degli anni '80.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shinsekai+Osaka" },
      { time: "18:00", title: "Kushikatsu: NON tuffiamo due volte!",
        detail: "Ci sediamo da <i>Daruma Kushikatsu</i>. Sono spiedini di qualsiasi cosa (manzo, asparagi, uova, formaggio) impanati e fritti. Davanti c'è una vaschetta di salsa in comune. <b>LA REGOLA:</b> si intinge lo spiedino UNA VOLTA SOLA. Il doppio tuffo è vietatissimo e ci sgridano forte se lo facciamo. Stiamo attenti!",
        maps: "https://www.google.com/maps/search/?api=1&query=Kushikatsu+Daruma+Shinsekai" },
      { time: "20:30", title: "TeamLab nel giardino botanico di notte",
        detail: "<b>Esperienza da brividi:</b> andiamo al giardino botanico Nagai. Di notte TeamLab lo trasforma in un'installazione artistica pazzesca. Uova luminose giganti sparse tra gli alberi, laghi illuminati, sculture che cambiano colore se le tocchi. È come camminare dentro un sogno. Fidateci, non ce ne pentiremo.",
        maps: "https://www.google.com/maps/search/?api=1&query=TeamLab+Botanical+Garden+Osaka" }
    ]
  },
  {
    day: 11, title: "Kobe beef e serata Osaka style", location: "Kobe / Osaka", tag: "Festa & Lusso", icon: "\u{1F969}",
    timeline: [
      { time: "11:00", title: "Kobe: la città del manzo leggendario",
        detail: "Breve treno per Kobe. Città portuale con un vibe internazionale. Passeggiamo nel quartiere storico <i>Kitano-cho</i> o scendiamo al <i>Meriken Park</i> per la torre rossa del porto. Godiamocela con calma perché tra poco mangiamo il pasto della vita.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kobe+Meriken+Park" },
      { time: "13:00", title: "Il Kobe Beef: il pasto della vita (prenotato!)",
        detail: "Eccoci. Questo è il momento. Seduti al bancone, uno chef personale ci mostra il taglio di Wagyu A5 crudo: ha più grasso bianco che carne rossa. Lo cuoce sulla piastra d'acciaio in 3 minuti davanti ai nostri occhi. Si scioglie in bocca senza masticare. Tre amici che lavorano duro e si regalano questo: ce lo meritiamo tutto.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kobe+Beef+Ishida" },
      { time: "17:00", title: "Tramonto tra i grattacieli di Osaka",
        detail: "Torniamo a Osaka, stazione di Umeda. Saliamo sull'<b>Umeda Sky Building</b> al tramonto. Ha delle scale mobili sospese nel vuoto tra due grattacieli che da sole valgono la salita. Scendiamo e passeggiamo per <b>Kitashinchi</b>, il distretto dei locali premium.",
        maps: "https://www.google.com/maps/search/?api=1&query=Umeda+Sky+Building" },
      { time: "22:00", title: "Ultima notte a Osaka: si balla",
        detail: "Stasera si esce! <i>Americamura</i> (Amemura) è il quartiere giovane di Osaka. Triangle Park è pieno di ragazzi, musica hip-hop, skater. Facciamo bar-hopping o entriamo in un club (Ghost Ultra Lounge, Pure, o Giraffe). Si balla, si beve, si fa alba. Domani dormiamo sul treno, ne vale la pena.",
        maps: "https://www.google.com/maps/search/?api=1&query=Americamura+Osaka" }
    ]
  },
  {
    day: 12, title: "Si torna a Tokyo: vintage e grigliate", location: "Tokyo", tag: "Ritorno", icon: "\u{1F684}",
    timeline: [
      { time: "10:30", title: "Shinkansen della convalescenza",
        detail: "Recuperiamo dalla nottata. Treno proiettile di ritorno a Tokyo. Compriamo un Boss Coffee (il caffè in lattina dei distributori) e un Bento box in stazione. Pranzo in viaggio guardando il Giappone sfrecciare fuori dal finestrino. Momento zen forzato.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Station" },
      { time: "14:00", title: "Ultimo hotel: base operativa finale",
        detail: "Check-in nell'ultimo alloggio. Da qui in poi l'obiettivo è vivere le ultime esperienze di Tokyo e fare gli acquisti finali senza trascinare pacchi in giro.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Hotel" },
      { time: "15:30", title: "Shimokitazawa: il quartiere bohémien",
        detail: "Shimokitazawa è tutta pedonale e piena di personalità. <b>Per chi ama vestirsi:</b> negozi di giacche vintage anni '90 (New York Joe, Flamingo). <b>Per chi ama la musica:</b> negozi di vinili dell'usato tenuti come gioielli. Mangiamo una <i>Soup Curry</i> per merenda e ci godiamo la vibe diversa da tutto il resto di Tokyo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shimokitazawa+Tokyo" },
      { time: "19:30", title: "Yakiniku: alla griglia tutti insieme",
        detail: "Torniamo a Shibuya e festeggiamo il rientro con un <b>Yakiniku</b> (griglia giapponese). Prendiamo il <i>Nomihodai</i>: all-you-can-drink di birra e highball per 90 minuti! Ci portano piatti infiniti di carne marinata, lingua di bue al limone e costine. Ce la cuociamo noi al centro del tavolo urlando <i>Kanpai!</i> (cin cin) a ogni giro.",
        maps: "https://www.google.com/maps/search/?api=1&query=Yakiniku+Shibuya" },
      { time: "22:00", title: "Purikura e cazzeggio a Center-Gai",
        detail: "Smaltiamo la cena camminando per <i>Center-Gai</i> a Shibuya. Entriamo nei Game Center e proviamo le cabine Purikura (le Photo Booth giapponesi che ci modificano gli occhi facendoci sembrare personaggi degli anime). Foto ricordo ridicole ma impagabili.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shibuya+Center-Gai" }
    ]
  },
  {
    day: 13, title: "Go-kart per le strade e ultimo brindisi", location: "Tokyo", tag: "Gran Finale", icon: "\u{1F3CE}\uFE0F",
    timeline: [
      { time: "10:00", title: "TeamLab Borderless: perdersi di proposito",
        detail: "Se Planets ci è piaciuto, questo ci farà impazzire. Ad Azabudai Hills. È un labirinto scuro senza percorso: le opere d'arte (fiori luminosi, cascate digitali) si muovono da sole, escono dalle stanze e interagiscono tra loro e con noi. Perdiamoci intenzionalmente. È costruito apposta per quello.",
        maps: "https://www.google.com/maps/search/?api=1&query=Azabudai+Hills+TeamLab" },
      { time: "14:30", title: "Ultima spesa: regali e KitKat strani",
        detail: "Corsa finale per gli acquisti. <i>Uniqlo Ginza</i> per magliette in cotone giapponese a prezzi ridicoli. <i>Don Quijote</i> per i KitKat ai gusti assurdi (Sake, Fragola, Patata dolce) da portare a tutti in Italia. Compriamo un po' di tutto, ce lo meritiamo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Don+Quijote+Tokyo" },
      { time: "16:00", title: "Go-kart per le strade di Tokyo (prenotato!)",
        detail: "<b>Il gran finale.</b> Mettiamo le tute di Mario, Luigi e Toad. Saliamo sui go-kart a motore e, guidati da un capofila, entriamo nel TRAFFICO VERO di Tokyo. Sfrecciamo sotto i grattacieli, la Tokyo Tower, passiamo gli incroci a 60km/h rasoterra. La gente ci fotografa dai marciapiedi. È la cosa più assurda e indimenticabile del viaggio. (Serve la Patente Internazionale fatta in Italia!).",
        maps: "https://www.google.com/maps/search/?api=1&query=Street+Kart+Tokyo" },
      { time: "19:30", title: "Ultima cena: Tsukemen, il ramen decostruito",
        detail: "Andiamo da <i>Rokurinsha</i> o <i>Tsujita</i>. Ordiniamo lo <b>Tsukemen</b>: noodles grossi e freddi da una parte, brodo ultra-denso bollente dall'altra. Si intingono e si mangiano. Alla fine chiediamo il 'Soup Wari': ci allungano il brodo rimasto con acqua calda e lo beviamo come una zuppa. L'ultima cena perfetta.",
        maps: "https://www.google.com/maps/search/?api=1&query=Rokurinsha+Tokyo+Station" },
      { time: "22:00", title: "Ultimo drink: cocktail bar segreti",
        detail: "Vestiamoci bene per l'ultima sera. Tokyo ha i barman migliori del mondo. Proviamo <i>The SG Club</i>, <i>Bar Trench</i> o il leggendario <i>Bar BenFiddich</i> a Shinjuku (bar senza menù dove il barman distilla erbe davanti a noi). Brindiamo ai 14 giorni più belli della nostra vita. Ce l'abbiamo fatta.",
        maps: "https://www.google.com/maps/search/?api=1&query=Bar+Benfiddich+Shinjuku" }
    ]
  },
  {
    day: 14, title: "L'ultimo giorno (lacrimuccia)", location: "Tokyo", tag: "Ultimo Giorno", icon: "\u2708\uFE0F",
    timeline: [
      { time: "09:00", title: "L'ultimo 7-Eleven della nostra vita",
        detail: "La malinconia arriva qui. Scendiamo al 7-Eleven o FamilyMart per l'ultima volta. Compriamoci il <i>Tamago Sando</i> (tramezzino col pane morbidissimo ripieno di insalata di uova) e un <i>Famichiki</i> (pollo fritto bollente). Mangiamolo lentamente, sapendo che ci mancherà tutto questo.",
        maps: "https://www.google.com/maps/search/?api=1&query=7-Eleven+Tokyo" },
      { time: "10:00", title: "La battaglia con le valigie",
        detail: "Cerchiamo di far stare dentro i bagagli tutto quello che abbiamo comprato in 14 giorni (auguri). Prendiamo il Narita Express o lo Skyliner. Almeno hanno spazio per le valigie gonfissime.",
        maps: "https://www.google.com/maps/search/?api=1&query=Narita+Express" },
      { time: "12:00", title: "Aeroporto: ultimo shopping (sì, ancora)",
        detail: "Dopo i controlli, se ci sono rimasti Yen o spazio in valigia, compriamo il cioccolato <i>Royce'</i> (i mattoncini di Nama Chocolate che devono stare in frigo) e i <i>Tokyo Banana</i>. Ultimi regali per chi ci aspetta a casa.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Airport+Duty+Free" },
      { time: "15:00", title: "Si torna a casa. Ma ci torneremo.",
        detail: "Saliamo sull'aereo pieni di ricordi, foto, KitKat strani e un buco nel conto in banca. Non importa. Questi 14 giorni sono stati perfetti. Tre amici, primo viaggio in Giappone, zero rimpianti. Ci torneremo, è una promessa.",
        maps: "" }
    ]
  }
];

export const tasksData: TaskData[] = [
  { id: 1, title: "Universal Studios (Express Pass con Mario Kart)", timeline: "Prenotare 60 giorni prima. Se aspettiamo, piangiamo.", icon: "\u{1F3AB}" },
  { id: 2, title: "TeamLab Planets & Borderless", timeline: "Prenotare 45 giorni prima. Si esauriscono in fretta.", icon: "\u{1F4A1}" },
  { id: 3, title: "Shibuya Sky (slot al tramonto!)", timeline: "Esattamente 4 settimane prima. Lo slot tramonto è oro.", icon: "\u{1F307}" },
  { id: 4, title: "Street Go-Karting (il gran finale)", timeline: "30 giorni prima su Klook. Non dimentichiamolo!", icon: "\u{1F3CE}\uFE0F" },
  { id: 5, title: "Teppanyaki Kobe Beef (il pasto della vita)", timeline: "30 giorni prima. Solo 10-15 posti, muoviamoci.", icon: "\u{1F969}" },
  { id: 6, title: "Patente Internazionale (Ginevra 1949)", timeline: "60 giorni prima in Motorizzazione. Senza questa, niente go-kart!", icon: "\u{1F6C2}" },
  { id: 7, title: "Compilare Visit Japan Web", timeline: "7 giorni prima. Genera i QR Code per saltare le file.", icon: "\u{1F4F1}" },
  { id: 8, title: "eSIM pronta (Ubigi o Airalo)", timeline: "2 giorni prima. Attiviamola prima di salire sull'aereo.", icon: "\u{1F4F6}" }
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
  { name: "Cibo (Wagyu, Omakase, Street Food)", value: 35, color: "#0F172A" },
  { name: "Shopping (Vintage, Elettronica)", value: 25, color: "#E11D48" },
  { name: "Trasporti & Shinkansen", value: 15, color: "#94A3B8" },
  { name: "Serate (Alcol/Club/Batting)", value: 15, color: "#10B981" },
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
  { category: "Posti iconici", value: 9 },
  { category: "Esplorazione locale", value: 9 },
  { category: "Roba nerd/tech", value: 8 },
  { category: "Serate e adrenalina", value: 10 },
  { category: "Cibo pazzesco", value: 10 },
  { category: "Relax", value: 4 },
];
