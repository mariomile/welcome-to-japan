export interface TimelineEntry {
  time: string;
  title: string;
  detail: string;
  maps: string;
  image?: string;
}

export interface DayData {
  day: number;
  date: string;
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
    day: 1, date: "19 Mar", title: "Atterriamo, tradizione e Shinjuku by night", location: "Tokyo", tag: "Impatto", icon: "\u{1F3D9}\uFE0F",
    timeline: [
      { time: "11:00", title: "Tocchiamo terra, porco il jetlag",
        detail: "<b>Prima cosa:</b> attiviamo la eSIM (Ubigi o Airalo) che abbiamo scaricato in Italia. Senza internet siamo tre scimmie perse in un aeroporto con scritte incomprensibili. <br><br><b>Ai controlli:</b> tiriamo fuori i QR Code di <i>Visit Japan Web</i> e passiamo come dei VIP. <br><br><b>Da fare subito:</b> IC Card (Suica/Pasmo), cash minimo al 7-Eleven ATM. Obiettivo: essere fuori dall'hotel entro le 13:00. Non ci fermiamo, non ci sdraiamo, non 'riposiamo 5 minuti'. Chi si sdraia è morto.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Airport",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=400&fit=crop" },
      { time: "13:30", title: "Asakusa: il Giappone cartolina, ma ci serve",
        detail: "Sì, è turistico. Sì, ci sono i selfie stick. Ma <b>Senso-ji</b> va visto la prima volta perché ti dà il contesto visivo e culturale subito. Il portone Kaminarimon con la lanterna rossa gigante, la via di bancarelle Nakamise, il fumo dell'incenso. <br><br><b>Cibo:</b> street snack qui, non cena lunga. <i>Melon Pan</i> da Kagetsudo (croccante fuori, morbido dentro, non sa di melone, non chiedere perché) e <i>Ningyoyaki</i>, dolcetti minuscoli ripieni di fagioli rossi dolci.",
        maps: "https://www.google.com/maps/search/?api=1&query=Senso-ji+Temple",
        image: "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=800&h=400&fit=crop" },
      { time: "17:30", title: "Passeggiata sul Sumida: decompressione",
        detail: "Lungo il fiume Sumida con lo skyline di Tokyo davanti. Foto, aria, il primo momento in cui ci rendiamo conto che siamo davvero in Giappone. La Tokyo Skytree di fronte illuminata, i battelli che passano. Niente di folle, solo il primo respiro dopo 12 ore di volo e il jet lag che inizia a bussare.",
        maps: "https://www.google.com/maps/search/?api=1&query=Sumida+River+Walk",
        image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&h=400&fit=crop" },
      { time: "20:00", title: "Omoide Yokocho + Golden Gai: il battesimo",
        detail: "<b>Reset obbligatorio:</b> 60-90 minuti in hotel. Doccia, cambio, si esce freschi come dei signori. <br><br>Poi dritti a Shinjuku. <b>Omoide Yokocho</b> prima: vicolo strettissimo sotto i binari, fumo e lanterne rosse. <i>Yakitori</i> e <i>Nama-biru</i> (birra alla spina gelata). La prima birra giapponese dopo un volo di 12 ore è un'esperienza religiosa. <br><br><b>Dopo:</b> <b>Golden Gai</b>, 2 bar piccoli per atmosfera. Sei vicoletti con 200 bar dove entrano 5 persone. Cerchiamo i cartelli 'No Cover Charge' sennò ci fanno pagare solo per poggiare il culo su uno sgabello.",
        maps: "https://www.google.com/maps/search/?api=1&query=Omoide+Yokocho+Shinjuku",
        image: "https://images.unsplash.com/photo-1554797589-7241bb691548?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 2, date: "20 Mar", title: "Shopping run + Meiji Jingu + cocktail serio", location: "Tokyo", tag: "Shopping & Vibe", icon: "\u{1F6CD}\uFE0F",
    timeline: [
      { time: "09:00", title: "Meiji Jingu: il tempio giusto per noi",
        detail: "Il tempio perfetto per tre che non vogliono perdere mezza giornata a fare i pellegrini. È vicino allo shopping, immerso nel verde del parco Yoyogi, e l'esperienza è potente senza sbattimento. Camminiamo sulla ghiaia nel bosco, c'è il muro enorme di barili di Sake decorati offerti alle divinità. Noi gli dei del sake li onoriamo ogni weekend in Italia, qua è solo formazione professionale.",
        maps: "https://www.google.com/maps/search/?api=1&query=Meiji+Jingu+Tokyo",
        image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&h=400&fit=crop" },
      { time: "11:00", title: "Harajuku → Cat Street → Shibuya: shopping run",
        detail: "<b>Harajuku</b> per la vibe street e il delirio visivo. Poi <b>Cat Street</b>: via pedonale piena di negozi vintage curatissimi, flagship streetwear (Supreme, Bape) e boutique di sneakers rarissime. Prendiamoci un caffè e facciamo i danni. <br><br>Finiamo a <b>Shibuya</b>: l'incrocio più famoso del mondo. <b>Trucco:</b> invece di farci schiacciare in mezzo, andiamo al <i>Magnet by Shibuya 109</i> e fotografiamo dall'alto migliaia di persone che attraversano tutte insieme. Impressionante. Chi torna a casa con le valigie più pesanti perde.",
        maps: "https://www.google.com/maps/search/?api=1&query=Cat+Street+Harajuku",
        image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?w=800&h=400&fit=crop" },
      { time: "18:30", title: "Cocktail bar #1: The SG Club",
        detail: "<b>Reset hotel obbligatorio prima.</b> Doccia, cambio, si esce belli. <br><br><b>The SG Club</b> a Shibuya: riconosciuto nei ranking internazionali, è il posto giusto per iniziare la nostra 'Tokyo cocktail culture'. Due piani: sotto è più casual (Guzzle), sopra è il bar serio (Sip). Ordiniamo dal barman e lasciamoci consigliare. Non è un bar da shot, è un bar da gentlemen. Tre gentlemen che domani avranno mal di testa, ma gentlemen.",
        maps: "https://www.google.com/maps/search/?api=1&query=The+SG+Club+Shibuya",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=400&fit=crop" },
      { time: "21:00", title: "Karaoke privato: la sfida vocale",
        detail: "Stanza privata, 2 ore. Perfetto da 3. Il karaoke giapponese non è il karaoke triste del bar sotto casa: è una suite con divano, tamburello, maracas e un catalogo infinito di canzoni (anche italiane). Ordiniamo il <i>Nomihodai</i> (all-you-can-drink) e ci sfidiamo. Chi stona di più paga la prossima serata. Spoiler: stoniamo tutti.",
        maps: "https://www.google.com/maps/search/?api=1&query=Karaoke+Kan+Shibuya",
        image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 3, date: "21 Mar", title: "TeamLab + baia futuristica + BenFiddich", location: "Tokyo", tag: "Futuro & Cocktail", icon: "\u{1F52E}",
    timeline: [
      { time: "10:00", title: "TeamLab Planets: la botta futuristica (prenotato!)",
        detail: "Questo è <b>obbligatorio</b>. Si entra scalzi. La prima stanza è una salita contro una cascata d'acqua vera. Poi si cammina in stanze dove l'acqua calda arriva al ginocchio e pesci digitali nuotano intorno. L'Infinity Room con specchi e LED è roba da acido senza acido. <br><br>Prepariamo i telefoni impermeabili. Biglietti/slot dallo store ufficiale, sennò piangiamo fuori.",
        maps: "https://www.google.com/maps/search/?api=1&query=teamLab+Planets",
        image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&h=400&fit=crop" },
      { time: "13:30", title: "Odaiba/Toyosu: vibe cyberpunk e skyline",
        detail: "Zona baia con vista sullo skyline di Tokyo e il Rainbow Bridge. Il Gundam Unicorn a grandezza naturale davanti al DiverCity. Facciamo le foto come tre bambini di 30 anni. Se piove: arcades e mall al coperto, sennò passeggiata sulla baia. <br><br><b>Tokyo Joypolis</b> di Sega se abbiamo energie: montagne russe al chiuso dove schiacci pulsanti mentre giri come una trottola.",
        maps: "https://www.google.com/maps/search/?api=1&query=Unicorn+Gundam+Statue+Odaiba",
        image: "https://images.unsplash.com/photo-1624601573012-efb68f3b1b85?w=800&h=400&fit=crop" },
      { time: "19:30", title: "Cocktail bar #2: Bar BenFiddich",
        detail: "<b>Reset hotel.</b> Stasera si sale di livello. <br><br><b>Bar BenFiddich</b> a Shinjuku: uno dei nomi più forti di Tokyo. Non c'è menu. Il barman Hiroyasu Kayama coltiva le sue erbe e distilla i suoi ingredienti. Ci chiede cosa ci piace e ci fa un cocktail su misura. Un'esperienza che in Italia ce la sogniamo. Tre amici al bancone di uno dei bar migliori del mondo. Momento da ricordare.",
        maps: "https://www.google.com/maps/search/?api=1&query=Bar+Benfiddich+Shinjuku",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=400&fit=crop" },
      { time: "21:30", title: "Shibuya night: se abbiamo ancora benzina",
        detail: "Se dopo BenFiddich abbiamo ancora energie (e le avremo, perché siamo scemi): club leggero o late izakaya a Shibuya. Niente di programmato, vediamo dove ci porta la serata. Chiudiamo con un ramen pesantissimo alle 2 di notte, come da protocollo internazionale della sbronza.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shibuya+Crossing",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 4, date: "22 Mar", title: "Nikko: il Giappone spirituale fuori Tokyo", location: "Nikko", tag: "Escursione Must", icon: "\u26E9\uFE0F",
    timeline: [
      { time: "07:00", title: "Sveglia presto, treno verso le montagne",
        detail: "Oggi si esce da Tokyo. Treno verso Nikko (2 ore circa). <b>NIKKO PASS</b> per i trasporti + limited express se lo vogliamo. Compriamo un <i>Ekiben</i> in stazione e mangiamo sul treno. Si vedono i palazzi diventare montagne e foreste. Viaggiare in treno in Giappone è un altro livello rispetto ai Frecciarossa con la brioche del bar.",
        maps: "https://www.google.com/maps/search/?api=1&query=Nikko+Station",
        image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&h=400&fit=crop" },
      { time: "09:30", title: "Toshogu: area templi UNESCO",
        detail: "Il <b>Toshogu Shrine</b> è il mausoleo dello shogun Tokugawa Ieyasu, uno dei personaggi più importanti della storia giapponese. Questo non è il tempio zen tranquillo, è roba pesante: legno laccato d'oro, sculture colorate pazzesche, il famoso gatto addormentato e le tre scimmie ('non vedo, non sento, non parlo'). <br><br>L'area UNESCO è immensa, tra cedri secolari altissimi. Il Giappone spirituale fuori dalla follia di Tokyo. Prepariamoci a camminare su e giù per scalinate antiche.",
        maps: "https://www.google.com/maps/search/?api=1&query=Nikko+Toshogu+Shrine",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=400&fit=crop" },
      { time: "14:00", title: "Natura: lago e cascate (se c'è tempo)",
        detail: "Se il meteo è dalla nostra parte: <b>Lago Chuzenji</b> e la cascata <b>Kegon Falls</b> (97 metri di salto). C'è un ascensore scavato nella roccia per vederla da sotto. La zona è pura montagna giapponese, aria fresca e zero turisti da città. Se siamo stanchi, semplicemente ci sediamo a mangiare in un locale vicino ai templi e ci godiamo la pace.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kegon+Falls+Nikko",
        image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=400&fit=crop" },
      { time: "19:30", title: "Rientro Tokyo: ramen e nanna",
        detail: "Torniamo a Tokyo col treno. Cena ramen easy vicino alla stazione: ordiniamo dalla macchinetta, diamo il bigliettino al cameriere, risucchiamo forte (qui è educazione, non maleducazione). Stasera zero nightlife, domani si spinge. Il corpo deve recuperare, la mente pure. Chi propone di uscire paga una penale.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Station+Ramen",
        image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 5, date: "23 Mar", title: "Mercati veri, Akihabara e sushi wow", location: "Tokyo", tag: "Nerd & Omakase", icon: "\u{1F47E}",
    timeline: [
      { time: "10:00", title: "Ueno + Ameyoko: il mercato dei veri",
        detail: "Niente roba turistica. <b>Ameyoko</b> è nato come mercato nero del dopoguerra e oggi è un glorioso casino sotto i binari. I venditori urlano sconti come se gli stessero rubando la macchina. Street food, vibe local, prezzi onesti. <br><br><b>Pranzo:</b> <i>Kaisendon</i> (ciotola di riso con pesce crudo e uova di salmone). Costa poco ed è una bomba nucleare.",
        maps: "https://www.google.com/maps/search/?api=1&query=Ameyoko+Ueno",
        image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&h=400&fit=crop" },
      { time: "13:00", title: "Akihabara: arcade seri + shopping nerd",
        detail: "La 'Città Elettrica'. Fa parte della prima volta, non si discute. Arcade seri nei palazzoni <b>GiGO</b> o Taito Station: sfida mortale a <i>Mario Kart Arcade GP</i> e <i>Taiko no Tatsujin</i> (i tamburi). Chi perde paga la cena. <br><br>Da <b>Super Potato</b> troviamo GameBoy, cartucce NES e roba vintage. Non usciremo a mani vuote. <br><br><b>Maid Cafe</b> (opzionale ma cringe obbligatorio): le cameriere ci chiameranno 'Master' e ci faranno fare la formula magica ('Moe Moe Kyun'). Content imbarazzante per il gruppo WhatsApp garantito.",
        maps: "https://www.google.com/maps/search/?api=1&query=Super+Potato+Akihabara",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=400&fit=crop" },
      { time: "20:00", title: "Sushi Omakase: la cena wow (prenotata!)",
        detail: "<b>Reset hotel prima.</b> Stasera ci trattiamo da re. <br><br><b>Sushi Omakase</b> fascia media: 'Fai tu, maestro'. Ci sediamo al bancone di legno laccato. Il maestro ci prepara un Nigiri alla volta, già con la quantità giusta di soia. Lo prendiamo con le dita e lo mangiamo in un boccone. Probabilmente il sushi migliore della nostra vita. <br><br>Esperienza memorabile senza bruciare il budget. Se dopo questo ordiniamo sushi in Italia piangeremo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Ginza+Sushi+Omakase",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 6, date: "24 Mar", title: "Hakone: ryokan, onsen e la notte premium", location: "Hakone", tag: "Esperienza Top", icon: "\u2668\uFE0F",
    timeline: [
      { time: "08:00", title: "Spediamo le valigie e partiamo leggeri",
        detail: "<b>Yamato Transport:</b> le valigie vanno a Kyoto, noi partiamo con lo zaino. Questa è la mossa di un uomo superiore, non di un turista col trolley sulle scale della metro. <br><br>Treno per Hakone. <b>Hakone Freepass</b> se facciamo la loop completa (funicolare, funivia, nave pirata). Esiste anche la versione 'solo area Hakone' se proseguiamo verso il Kansai, che è il nostro caso.",
        maps: "https://www.google.com/maps/search/?api=1&query=Hakone+Yumoto",
        image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&h=400&fit=crop" },
      { time: "11:30", title: "Hakone Loop: uova nere e nave pirata",
        detail: "Funicolare, poi funivia fino alla vetta di <b>Owakudani</b>. Puzza di zolfo fortissima, il terreno fuma, sembra Mordor. Compriamo le <i>Kuro-tamago</i> (uova nere): guscio nero per lo zolfo, dentro normali uova sode. Ogni uovo allunga la vita di 7 anni. Ne mangiamo 3 a testa, siamo praticamente immortali. <br><br>Scendiamo con una nave pirata sul Lago Ashi. Sì, una nave pirata, in un lago di montagna, in Giappone. Non facciamo domande.",
        maps: "https://www.google.com/maps/search/?api=1&query=Owakudani+Hakone",
        image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=400&fit=crop" },
      { time: "18:00", title: "Ryokan + Onsen + Kaiseki: la notte premium",
        detail: "<b>Se dobbiamo spendere su una cosa, è questa.</b> Entriamo nella locanda tradizionale. Via le scarpe, Yukata addosso. <br><br><b>Onsen:</b> niente costume, si va nudi. Sì, nudi. Tranquilli, è normalissimo e non frega niente a nessuno. Sgabellini, lavaggio, e poi acqua a 42 gradi. Dopo 5 giorni a Tokyo a 25.000 passi al giorno, questo è il reset della vita. <br><br><b>Kaiseki:</b> cena top della cucina giapponese. 10-15 piattini uno dopo l'altro. Non sappiamo cosa stiamo mangiando la metà delle volte ma è tutto incredibile. Crollo sui futon. Ronfiamo come tre orsi.",
        maps: "https://www.google.com/maps/search/?api=1&query=Hakone+Ryokan",
        image: "https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 7, date: "25 Mar", title: "Kyoto: Higashiyama cinematica + Gion", location: "Kyoto", tag: "Cultura Pura", icon: "\u{1F3EF}",
    timeline: [
      { time: "09:00", title: "Shinkansen per Kyoto (posti a destra!)",
        detail: "Da Odawara prendiamo lo Shinkansen. <b>Importantissimo:</b> posti sul lato destro (E o D). Se siamo fortunati, vediamo il Monte Fuji sfrecciare a 300 km/h. Momento da pelle d'oca anche per tre che non si emozionano mai. Le valigie ci aspettano già in camera (Yamato, i migliori).",
        maps: "https://www.google.com/maps/search/?api=1&query=Kyoto+Station",
        image: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=800&h=400&fit=crop" },
      { time: "12:00", title: "Kiyomizu-dera + stradine storiche",
        detail: "<b>Prima volta obbligatoria.</b> La terrazza del tempio è enorme e la vista spacca. Sotto c'è la cascata Otowa: si beve da uno dei tre getti (salute, successo o amore). <b>Regola:</b> non beviamo da tutti e tre sennò gli dei ci considerano avidi. <br><br>Scendiamo per <b>Sannenzaka</b> e <b>Ninenzaka</b>. Viuzze preservate perfettamente: casette in legno, tettoie scure, sembra il set dell'Ultimo Samurai. Tiramisù al tè verde al Maccha House se siamo stanchi. No, non è da femmine, è oggettivamente buono.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kiyomizu-dera",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=400&fit=crop" },
      { time: "16:00", title: "Nishiki Market: food crawl",
        detail: "Il 'mercato di Kyoto'. Ci infiliamo nel Nishiki Market e assaggiamo tutto. <i>Tako Tamago</i> (polpetto rosso glassato con uovo di quaglia dentro, mangiarlo in un boccone è la prova), crocchette di pesce caldo. <b>Per chi cucina:</b> coltelli in acciaio fatti a mano (tipo Aritsugu). Regaloni per farci belli con le tipe quando cuciniamo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Nishiki+Market",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&h=400&fit=crop" },
      { time: "19:00", title: "Pontocho + Gion: cena e passeggiata",
        detail: "Ceniamo a <b>Pontocho</b>, vicolo parallelo al fiume Kamo. Poi passeggiamo per <b>Gion</b> e <i>Hanamikoji</i> al tramonto. Le Geiko e Maiko vanno a lavorare nelle case da tè a quest'ora. Se ne vediamo una, non facciamo i coglioni: niente urla, niente inseguimenti col telefono. Non siamo quei turisti lì. <br><br>Non è 'casino', ma è bellissimo. Atmosfera da film, con le lanterne di carta e il legno antico.",
        maps: "https://www.google.com/maps/search/?api=1&query=Pontocho+Kyoto",
        image: "https://images.unsplash.com/photo-1522623349500-de288cb2a5a7?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 8, date: "26 Mar", title: "Fushimi Inari all'alba + sake district", location: "Kyoto", tag: "Alba & Sake", icon: "\u26E9\uFE0F",
    timeline: [
      { time: "06:30", title: "Fushimi Inari: il leg day del viaggio",
        detail: "<b>Andiamo presto: è il modo per viverlo davvero.</b> Arriviamo al tempio dei 10.000 portali rossi (Torii). A quest'ora è vuoto. Saliamo fino in cima alla montagna come gli spartani. Al bivio (Yotsutsuji) panorama pazzesco. <br><br>Le foto che facciamo qui saranno le migliori del viaggio, garantito. Arriveremo sudati, distrutti e fieri come dopo una maratona. Solo che questa ha le foto migliori.",
        maps: "https://www.google.com/maps/search/?api=1&query=Fushimi+Inari",
        image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&h=400&fit=crop" },
      { time: "11:00", title: "Fushimi Sake District: degustazione da 3",
        detail: "Scendendo verso sud, il quartiere di Fushimi è la patria storica del Sake. <b>Gekkeikan Okura Sake Museum</b>: tour veloce e assaggio di tre tipi (caldo, freddo e alla prugna). Perfetto da 3 amici. Alle 11 di mattina siamo già alticci davanti a un museo. Il viaggio sta andando benissimo. <br><br>Il quartiere ha canali antichi e distillerie storiche. Atmosfera completamente diversa dalla Kyoto turistica. Qui siamo locali.",
        maps: "https://www.google.com/maps/search/?api=1&query=Fushimi+Sake+District+Kyoto",
        image: "https://images.unsplash.com/photo-1516253593875-bd7ba052f0fd?w=800&h=400&fit=crop" },
      { time: "18:00", title: "Sera tranquilla: bar e cena easy",
        detail: "Stasera calma. Bar tranquilli nel quartiere o cena easy senza sbattimento. Domani c'è Arashiyama e un'esperienza da prenotare, quindi teniamo le energie. <br><br><i>Strong Zero</i> dal konbini sul fiume Kamo se vogliamo la versione economica (9% alcol, 1 euro, fa danni serissimi). Tramonto, birra, cazzate tra amici. Perfezione.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kamo+River+Kyoto",
        image: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 9, date: "27 Mar", title: "Arashiyama + esperienza prenotata", location: "Kyoto", tag: "Bambù & Cultura", icon: "\u{1F38B}",
    timeline: [
      { time: "07:00", title: "Foresta di bambù: sveglia all'alba",
        detail: "<b>Questa sveglia ci cambierà il viaggio.</b> Arashiyama alle 10 è un inferno di gente. Ma all'alba la foresta è vuota. Fusti alti 20 metri che sbattono col vento. Le foto saranno le migliori del viaggio. <br><br>A due passi: tempio <b>Tenryu-ji</b>. Giardino del 1300 con un trucco geniale: le montagne vere dietro sembrano parte del giardino. Sediamoci sulla veranda. Nessuno di noi posterà 'finding inner peace'. Giurato.",
        maps: "https://www.google.com/maps/search/?api=1&query=Arashiyama+Bamboo+Grove",
        image: "https://images.unsplash.com/photo-1580623027781-a7db8c6bd092?w=800&h=400&fit=crop" },
      { time: "12:00", title: "Zona fiume e pranzo local",
        detail: "Passeggiata lungo il fiume Hozu nella zona di Arashiyama. Ponti, colline, acqua trasparente. Pranzo in un locale sulla riva. Se piove ci sono un sacco di posti coperti con vista. Dopo il bambù e il tempio, questo è il decompressore perfetto.",
        maps: "https://www.google.com/maps/search/?api=1&query=Arashiyama+River",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=400&fit=crop" },
      { time: "14:30", title: "Esperienza prenotata: tea ceremony o cooking class",
        detail: "<b>Tea ceremony</b> (culturale): ci insegnano il rito del tè matcha. Si sta seduti sui tatami, si osserva il maestro preparare il tè con gesti lentissimi e precisi. È meditativo, silenzioso, e ci sentiamo dei samurai per 60 minuti. <br><br><b>Oppure cooking class</b> (più social): impariamo a fare ramen o gyoza da zero. Perfetta da 3, si ride, si cucina e si mangia. <br><br>Prenotare 3-7 giorni prima.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tea+Ceremony+Kyoto",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=400&fit=crop" },
      { time: "19:00", title: "Kyoto chill: teniamo energia per Osaka",
        detail: "Sera rilassata. Ramen alla stazione di Kyoto (10esimo piano, <i>Kyoto Ramen Koji</i>: 10 ristoranti uno accanto all'altro). Si ordina dalla macchinetta, sfida a chi risucchia più forte. <br><br>Domani si cambia registro completamente. Osaka è un altro pianeta. Dormiamo come dei cristiani.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kyoto+Station+Ramen+Koji",
        image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 10, date: "28 Mar", title: "Colpo grosso: Hiroshima o Kyoto slow", location: "Kyoto / Hiroshima", tag: "Scelta Libera", icon: "\u{1F914}",
    timeline: [
      { time: "08:00", title: "Opzione A: Hiroshima + Miyajima",
        detail: "<b>Se vogliamo completare la prima volta</b>, oggi è il giorno. Shinkansen per Hiroshima (80 min). Il <b>Memoriale della Pace</b> è pesante ma va visto. Poi ferry per <b>Miyajima</b>: l'isola col Torii rosso gigante nell'acqua e i cervi che girano liberi. <br><br>È una giornata intensa ma iconica. Non è turismo, è storia e bellezza pura. Si torna a Kyoto la sera stanchi ma con qualcosa in più dentro.",
        maps: "https://www.google.com/maps/search/?api=1&query=Hiroshima+Peace+Memorial",
        image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&h=400&fit=crop" },
      { time: "08:00", title: "Opzione B: Kyoto slow (se siamo stanchi)",
        detail: "Se le gambe sono morte e preferiamo qualità alla quantità: <b>Kinkaku-ji</b> (il tempio d'oro che un monaco fuori di testa incendiò negli anni '50, roba da true crime). <br><br>Poi: quartieri meno turistici, caffè speciality, shopping vintage. Tempo per respirare, comprare coltelli al Nishiki Market, e prepararci mentalmente a Osaka che ci distruggerà. A volte la scelta migliore è non correre.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kinkaku-ji",
        image: "https://images.unsplash.com/photo-1623785013715-70e3e3c7e15c?w=800&h=400&fit=crop" },
      { time: "19:00", title: "Ultima sera a Kyoto",
        detail: "Comunque la giochiamo, stasera è l'ultima a Kyoto. Cena sul fiume Kamo. Quando i turisti tornano in hotel, noi andiamo al <b>Santuario Yasaka</b>: di notte è aperto, illuminato da centinaia di lanterne, e siamo soli. Momento top del viaggio, anche per tre che di solito parlano solo di calcio e motori.",
        maps: "https://www.google.com/maps/search/?api=1&query=Yasaka+Shrine+Kyoto",
        image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 11, date: "29 Mar", title: "Osaka! Kuromon + Dotonbori night", location: "Osaka", tag: "Cibo & Neon", icon: "\u{1F525}",
    timeline: [
      { time: "11:00", title: "Arrivo a Osaka: si cambia registro",
        detail: "Mezz'ora di treno e il Giappone zen di Kyoto sparisce. Osaka è caos, rumore, neon e cibo ovunque. Check-in e subito fuori. Questa città è stata costruita per mangiare. Siamo nel posto giusto.",
        maps: "https://www.google.com/maps/search/?api=1&query=Osaka+Station",
        image: "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?w=800&h=400&fit=crop" },
      { time: "13:00", title: "Kuromon Market: mangiamo TUTTO",
        detail: "<b>Seriamente, mangiamo tutto.</b> Banchi del pesce dove assaggiamo tonno freschissimo, riccio di mare e cubetti di Kobe beef cucinati davanti a noi sulla piastra. Ostriche giganti con Ponzu. Frutta perfetta tagliata al momento. <br><br>A Osaka il motto è <i>Kuidaore</i>: mangiare fino a stare male. Da oggi lo onoriamo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kuromon+Ichiba",
        image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&h=400&fit=crop" },
      { time: "19:00", title: "Dotonbori: neon + street food + bar hopping",
        detail: "<b>Reset hotel prima.</b> Poi Dotonbori di notte: un canale circondato da insegne LED giganti. Foto con l'omino della <b>Glico</b>. Sembra di stare dentro un anime col volume al massimo. <br><br><b>Takoyaki</b> (polpette con polpo bollente, maionese e bonito che balla). <b>Okonomiyaki</b> sulla piastra. Birra Asahi a fiumi. Poi bar-hopping nella zona. Il buco nella cintura lo facciamo domani.",
        maps: "https://www.google.com/maps/search/?api=1&query=Dotonbori",
        image: "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 12, date: "30 Mar", title: "Nara: cervi + Buddha + cocktail serio", location: "Nara / Osaka", tag: "Cervi & Cocktail", icon: "\u{1F98C}",
    timeline: [
      { time: "09:30", title: "Nara: i cervi che si inchinano",
        detail: "<b>Must da prima volta.</b> Treno Kintetsu, parco pieno di 1000+ cervi sacri liberi. Compriamo i <i>Shika Senbei</i> (cracker). Se facciamo un inchino al cervo, lui risponde inchinandosi per il biscotto. Più educati dei nostri colleghi. <br><br>Attenzione: nascondiamo le mappe di carta, questi bastardi se le mangiano davvero.",
        maps: "https://www.google.com/maps/search/?api=1&query=Nara+Park",
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=400&fit=crop" },
      { time: "11:30", title: "Todai-ji: il Buddha più grosso di sempre",
        detail: "Edificio in legno più grande del mondo. Buddha di bronzo di 15 metri dentro. Dietro la statua: colonna con buco alla base. Chi ci passa attraverso riceve l'illuminazione. Proviamoci. È strettissimo e ci incastreremo. Rideremo come delle bestie. <br><br>Da Nakatanidou sulla via del ritorno: <i>Mochitsuki</i>, pasticceri che battono il mochi con martelli giganti urlando. Ipnotico.",
        maps: "https://www.google.com/maps/search/?api=1&query=Todai-ji+Temple+Nara",
        image: "https://images.unsplash.com/photo-1624601573012-efb68f3b1b85?w=800&h=400&fit=crop" },
      { time: "18:00", title: "Shinsekai + Kushikatsu",
        detail: "Torniamo a Osaka. <b>Shinsekai</b>: doveva essere il quartiere del futuro 100 anni fa, oggi è un paradiso retro-cyberpunk. <br><br><b>Kushikatsu da Daruma:</b> spiedini di qualsiasi cosa impanati e fritti. <b>LA REGOLA:</b> si intinge UNA VOLTA SOLA nella salsa. Il doppio tuffo è vietatissimo. Ci sgridano forte. Tipo mamma quando tornavamo a casa tardi.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shinsekai+Osaka",
        image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&h=400&fit=crop" },
      { time: "21:00", title: "Cocktail serio + giro Namba",
        detail: "Osaka ha ottimi cocktail bar. Facciamo 'cocktail serio' poi giro Namba. Il quartiere è vivo fino a tardi, pieno di locali e gente. Ultima sera prima di USJ, non esageriamo troppo. O sì. Vedremo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Namba+Osaka",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 13, date: "31 Mar", title: "Universal Studios Japan: giornata blockbuster", location: "Osaka", tag: "Adrenalina Pura", icon: "\u{1F3A2}",
    timeline: [
      { time: "07:30", title: "USJ: operazione militare",
        detail: "<b>Operazione militare.</b> Arriviamo ai cancelli un'ora prima. Appena aprono, camminiamo veloci dritti verso l'area Nintendo. L'Express Pass ce l'abbiamo, usiamolo come si deve. <br><br><b>IMPORTANTE:</b> biglietti acquistati online in anticipo via WEB Ticket Store. USJ ha comunicato la fine delle vendite ai botteghini on-site. Se non abbiamo i biglietti, piangiamo fuori come dei coglioni. Non succederà.",
        maps: "https://www.google.com/maps/search/?api=1&query=Universal+Studios+Japan",
        image: "https://images.unsplash.com/photo-1565402170291-8491f14678db?w=800&h=400&fit=crop" },
      { time: "09:00", title: "Super Nintendo World: siamo dentro al gioco",
        detail: "Entriamo dal tubo verde come Mario. Power-Up Band per colpire blocchi e raccogliere monete come dei deficienti felici. <i>Mario Kart: Koopa's Challenge</i> con visore AR: lanciamo gusci rossi VERI mentre sterziamo. Una roba che in Europa ce la sogniamo. <br><br>Tre uomini adulti che urlano in un go-kart di Mario. Bello.",
        maps: "https://www.google.com/maps/search/?api=1&query=Super+Nintendo+World+USJ",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=400&fit=crop" },
      { time: "13:00", title: "Dinosauri, montagne russe e Burrobirra",
        detail: "<i>The Flying Dinosaur</i>: a pancia in giù, loop pazzeschi. <b>Trucco:</b> fila 'Single Rider', risparmiamo 90 minuti di coda. Dopo: Burrobirra ghiacciata a Hogsmeade. Siamo uomini adulti al parco di Harry Potter. Nessun rimorso.",
        maps: "https://www.google.com/maps/search/?api=1&query=The+Flying+Dinosaur+USJ",
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&h=400&fit=crop" },
      { time: "19:00", title: "Usciamo cotti: cena easy e basta",
        detail: "Le gambe sono finite. Usciamo e mangiamo la prima cosa calorica che troviamo. Ramen tonkotsu pesantissimo o quello che capita. Stasera niente nightlife, saremo distrutti. Chi propone di uscire viene ignorato. Domani è l'ultimo giorno e deve contare.",
        maps: "https://www.google.com/maps/search/?api=1&query=Universal+CityWalk+Osaka",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 14, date: "1 Apr", title: "Last dance: shopping + cena epica + cocktail finale", location: "Osaka", tag: "Gran Finale", icon: "\u{1F37E}",
    timeline: [
      { time: "11:00", title: "Shopping finale: regali e roba assurda",
        detail: "Ultimo giorno, ultimo shopping. <i>Don Quijote</i> per i KitKat ai gusti assurdi (Sake, Fragola, Patata dolce) da portare in Italia. Tutto quello che non abbiamo comprato prima lo compriamo adesso. Il conto in banca è già morto, a questo punto ce ne freghiamo. <br><br>Regali per far contente le madri e chiunque ci abbia dato da mangiare il gatto.",
        maps: "https://www.google.com/maps/search/?api=1&query=Don+Quijote+Osaka",
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=400&fit=crop" },
      { time: "18:00", title: "Cena epica: okonomiyaki/teppan o sushi premium #2",
        detail: "<b>L'ultima cena deve spaccare.</b> Due opzioni: <br><br><b>Okonomiyaki/Teppanyaki:</b> seduti alla piastra bollente, lo chef cucina davanti a noi. Carne, pesce, verdure, birra. Osaka style. <br><br><b>Oppure sushi premium #2:</b> se il primo omakase a Tokyo ci ha cambiato la vita, ripetiamo l'esperienza qui. Due cene wow in un viaggio è il minimo per tre che lavorano come muli tutto l'anno. Ce lo meritiamo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Okonomiyaki+Osaka",
        image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800&h=400&fit=crop" },
      { time: "21:00", title: "Cocktail finale: chiusura col botto",
        detail: "<b>L'ultimo drink del viaggio.</b> Troviamo il cocktail bar migliore di Osaka e brindiamo ai 14 giorni più belli della nostra vita. <br><br>Tre amici, primo viaggio in Giappone, zero rimpianti, un milione di storie da raccontare. Un paio di chili in più e un buco nel conto in banca. Non importa. Ci torneremo. <br><br>È una promessa tra uomini. Non stiamo piangendo, è il jetlag.",
        maps: "https://www.google.com/maps/search/?api=1&query=Cocktail+Bar+Osaka",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=400&fit=crop" }
    ]
  }
];

export const tasksData: TaskData[] = [
  { id: 1, title: "Ryokan Hakone (la notte premium)", timeline: "Prima cosa da bloccare. 60+ giorni prima. Chi dorme non dorme (al ryokan).", icon: "\u{1F3E8}" },
  { id: 2, title: "TeamLab Planets (slot obbligatorio)", timeline: "45 giorni prima. Si esauriscono subito, non facciamo i furbi.", icon: "\u{1F4A1}" },
  { id: 3, title: "USJ (acquisto online, non al botteghino!)", timeline: "45 giorni prima. Vendita on-site CHIUSA. Senza biglietto online piangiamo fuori.", icon: "\u{1F3AB}" },
  { id: 4, title: "Sushi Omakase (Tokyo o Osaka)", timeline: "5-10 giorni prima. Fascia media, non serve vendere un rene.", icon: "\u{1F363}" },
  { id: 5, title: "Tea ceremony o Cooking class (Kyoto)", timeline: "3-7 giorni prima. Esperienza culturale o sociale, scegliamo noi.", icon: "\u{1F375}" },
  { id: 6, title: "Hakone Freepass + NIKKO PASS", timeline: "1 settimana prima. Controllare le opzioni e comprare in anticipo.", icon: "\u{1F689}" },
  { id: 7, title: "Compilare Visit Japan Web", timeline: "7 giorni prima. QR Code per saltare le file come dei VIP.", icon: "\u{1F4F1}" },
  { id: 8, title: "eSIM pronta (Ubigi o Airalo)", timeline: "2 giorni prima. Senza internet siamo tre scimmie perse.", icon: "\u{1F4F6}" }
];

export const stepChartData = [
  { day: "D1", steps: 14000 },
  { day: "D2", steps: 24000 },
  { day: "D3", steps: 20000 },
  { day: "D4", steps: 26000 },
  { day: "D5", steps: 22000 },
  { day: "D6", steps: 18000 },
  { day: "D7", steps: 22000 },
  { day: "D8", steps: 28000 },
  { day: "D9", steps: 24000 },
  { day: "D10", steps: 20000 },
  { day: "D11", steps: 18000 },
  { day: "D12", steps: 24000 },
  { day: "D13", steps: 32000 },
  { day: "D14", steps: 12000 },
];

export const budgetData = [
  { name: "Cibo (Omakase, Street Food, Kaiseki)", value: 35, color: "#0F172A" },
  { name: "Alloggi (Ryokan premium)", value: 20, color: "#E11D48" },
  { name: "Trasporti & Shinkansen", value: 15, color: "#94A3B8" },
  { name: "Serate & Cocktail Bar", value: 15, color: "#10B981" },
  { name: "Attrazioni (USJ, TeamLab, Esperienze)", value: 15, color: "#F59E0B" },
];

export const kyotoData = [
  { x: 9.5, y: 10, label: "Fushimi Inari (Alba)" },
  { x: 8.5, y: 7, label: "Kinkaku-ji (Diurno)" },
  { x: 9, y: 8.5, label: "Kiyomizu-dera (Terrazza)" },
  { x: 10, y: 9, label: "Arashiyama Bambù (Alba)" },
  { x: 2, y: 8, label: "Yasaka Shrine (Notturno)" },
  { x: 5, y: 7, label: "Nishiki Market (Pomeriggio)" },
  { x: 3, y: 9, label: "Fushimi Sake District" },
];

export const vibeData = [
  { category: "Posti iconici", value: 10 },
  { category: "Esplorazione locale", value: 9 },
  { category: "Roba nerd/tech", value: 7 },
  { category: "Serate & cocktail", value: 9 },
  { category: "Cibo pazzesco", value: 10 },
  { category: "Cultura & storia", value: 8 },
];
