export interface TimelineEntry {
  time: string;
  title: string;
  detail: string;
  maps: string;
  image?: string;
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
    day: 1, title: "Atterriamo, si comincia a fare danni", location: "Tokyo", tag: "Impatto", icon: "\u{1F3D9}\uFE0F",
    timeline: [
      { time: "11:00", title: "Tocchiamo terra, porco il jetlag",
        detail: "<b>Prima cosa:</b> attiviamo la eSIM (Ubigi o Airalo) che abbiamo scaricato in Italia. Senza internet siamo tre scimmie perse in un aeroporto con scritte incomprensibili. <br><br><b>Ai controlli:</b> tiriamo fuori i QR Code di <i>Visit Japan Web</i> e passiamo come dei VIP mentre gli altri turisti stanno lì a compilare foglietti a mano. <br><br><b>Soldi:</b> ATM al 7-Eleven dell'aeroporto per tirare fuori Yen (Revolut e N26 funzionano). Poi Keisei Skyliner o N'EX verso il centro. Tra sbarco e uscita: 60-90 minuti, non perdiamo la testa che siamo appena arrivati.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Airport",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=400&fit=crop" },
      { time: "14:00", title: "Mollo le valigie e si sale in alto gratis",
        detail: "Arriviamo a Shinjuku. La stazione è un delirio totale, è la più grande del mondo, prepariamoci a perderci tre volte. Buttiamo i bagagli in hotel e dritti al <b>Tokyo Metropolitan Government Building</b>. Saliamo gratis al 45esimo piano e vediamo tutta Tokyo. Gratis, sottolineo, che il portafoglio deve sopravvivere 14 giorni. Primo colpo d'occhio sulla città: sembra un videogioco.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Metropolitan+Government+Building",
        image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&h=400&fit=crop" },
      { time: "18:00", title: "Kabukicho: il quartiere dei pazzi",
        detail: "Col buio questa zona si accende come un flipper. Entriamo a <b>Kabukicho</b>, il quartiere più folle di Shinjuku. Pachinko che fanno un casino assurdo, neon ovunque. La testa gigante di Godzilla sul cinema Toho a certi orari sputa fumo e ruggisce, roba da bambini di 30 anni quali siamo. I PR cercheranno di tirarci dentro i locali, basta un cenno gentile e tirare dritto, non spendiamo qui i soldi del Kobe Beef.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kabukicho+Godzilla+Head",
        image: "https://images.unsplash.com/photo-1554797589-7241bb691548?w=800&h=400&fit=crop" },
      { time: "19:30", title: "Yakitori e birra: il battesimo",
        detail: "Vicolo strettissimo attaccato ai binari del treno, pieno di fumo e lanterne rosse. <b>Omoide Yokocho</b>, il Viale della Nostalgia. Ci sediamo al bancone di un micro-locale e ordiniamo <i>Nama-biru</i> (birra alla spina gelata) e <i>Yakitori</i> (spiedini di pollo). Ci chiedono <i>Shio</i> (sale) o <i>Tare</i> (salsa dolce): ordiniamo misti e via. La prima birra giapponese dopo un volo di 12 ore è un'esperienza religiosa.",
        maps: "https://www.google.com/maps/search/?api=1&query=Omoide+Yokocho+Shinjuku",
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=400&fit=crop" },
      { time: "21:30", title: "Golden Gai e poi ci meniamo a baseball",
        detail: "Ci spostiamo al <b>Golden Gai</b>: sei vicoletti con 200 bar minuscoli dove entrano 5 persone a locale. Cerchiamo i cartelli 'No Cover Charge' sennò ci fanno pagare 10 euro solo per poggiare il culo su uno sgabello. <br><br><b>Dopo:</b> <b>Batting Cages</b>. Si mettono i gettoni, si sceglie la velocità (da 80 a 130 km/h) e ci si sfida a chi mena più forte. Il perdente paga il prossimo giro di birre.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shinjuku+Batting+Center",
        image: "https://images.unsplash.com/photo-1569407228235-9a744831a140?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 2, title: "Templi all'alba, arcade al tramonto", location: "Tokyo", tag: "Nerd & Sacro", icon: "\u{1F47E}",
    timeline: [
      { time: "07:30", title: "Il jetlag fa la sveglia, ringraziamolo",
        detail: "Sfruttiamo il jetlag che ci sveglia alle 6, tanto non riusciamo a dormire. Andiamo al tempio <b>Senso-ji</b> ad Asakusa. A quest'ora il tempio è vuoto, foto perfette senza orde di turisti coi selfie stick. Laviamoci le mani alla fontana sacra e avviciniamoci al fumo dell'incenso. Se porta saggezza ne abbiamo tutti e tre disperatamente bisogno.",
        maps: "https://www.google.com/maps/search/?api=1&query=Senso-ji+Temple",
        image: "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=800&h=400&fit=crop" },
      { time: "09:30", title: "Colazione di cose che non conosciamo",
        detail: "Le bancarelle di Nakamise Dori aprono. Prendiamo un <i>Melon Pan</i> da Kagetsudo (panino dolce croccante fuori e morbido dentro, non sa di melone, non chiedere perché) e i <i>Ningyoyaki</i>, dolcetti minuscoli ripieni di fagioli rossi dolci. Sì, i fagioli dolci qui sono una roba seria. Fidateci.",
        maps: "https://www.google.com/maps/search/?api=1&query=Nakamise+Shopping+Street",
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=400&fit=crop" },
      { time: "11:30", title: "Ameyoko: il mercato dove urlano",
        detail: "Metro fino a Ueno. <b>Ameyoko</b> è nato come mercato nero del dopoguerra e oggi è un glorioso casino sotto i binari. I venditori urlano sconti come se gli stessero rubando la macchina. <b>Pranzo:</b> ordiniamo un <i>Kaisendon</i> (ciotola di riso con pesce crudo e uova di salmone). Costa poco ed è una bomba nucleare.",
        maps: "https://www.google.com/maps/search/?api=1&query=Ameyoko+Ueno",
        image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&h=400&fit=crop" },
      { time: "14:30", title: "Akihabara: qua impazziamo",
        detail: "La 'Città Elettrica'. Entriamo nei palazzoni arcade <b>GiGO</b> o Taito Station. I primi piani sono UFO Catcher (le gru per i pupazzi, truccatissime, non sprechiamo i soldi). Saliamo in alto dove ci sono i cabinati veri. Sfida mortale a <i>Mario Kart Arcade GP</i> e <i>Taiko no Tatsujin</i> (i tamburi). Chi perde paga la cena. <br><br>Da <b>Super Potato</b> troviamo GameBoy, cartucce NES e roba vintage da collezionisti. Non usciremo a mani vuote, ve lo garantisco.",
        maps: "https://www.google.com/maps/search/?api=1&query=Super+Potato+Akihabara",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=400&fit=crop" },
      { time: "17:30", title: "Maid Cafe: l'esperienza cringe obbligatoria",
        detail: "Imbarazzante? Totalmente. Va fatto? Assolutamente. <i>@Home Cafe</i>. Le cameriere ci chiameranno 'Master' con una vocina acuta che fa venire voglia di ridere e piangere allo stesso tempo. Ordiniamo l'<b>Omurice</b>: ci chiederanno che animale vogliamo e lo disegneranno sopra col ketchup. Poi ci tocca fare una formula magica ('Moe Moe Kyun') per rendere il cibo più buono. Content imbarazzante per il gruppo WhatsApp: garantito.",
        maps: "https://www.google.com/maps/search/?api=1&query=At+Home+Cafe+Akihabara",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&h=400&fit=crop" },
      { time: "20:30", title: "Izakaya coi salaryman: finalmente roba seria",
        detail: "Usciamo da Akihabara e andiamo a Kanda. Entriamo in un Izakaya sotto i binari pieno di impiegati giapponesi in giacca e cravatta che bevono dopo il lavoro. <i>Karaage</i> (pollo fritto croccantissimo), Edamame e fiumi di Highball (whisky con soda ghiacciato). Qui non ci sono turisti, solo gente che se la gode dopo 12 ore di ufficio. Come noi tra una settimana quando torniamo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kanda+Station+Izakaya",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 3, title: "Sneakers, tramonti e nottata pesante", location: "Tokyo", tag: "Full Gas", icon: "\u{1F525}",
    timeline: [
      { time: "09:00", title: "Momento zen prima della follia",
        detail: "Iniziamo tranquilli nel parco Yoyogi. Camminiamo sulla ghiaia nel bosco fino al santuario Meiji Jingu. C'è un muro enorme di barili di Sake decorati, offerti dalle distillerie agli dei. Noi gli dei del sake li onoriamo ogni weekend in Italia, qua è solo formazione professionale.",
        maps: "https://www.google.com/maps/search/?api=1&query=Meiji+Jingu+Tokyo",
        image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&h=400&fit=crop" },
      { time: "11:00", title: "Cat Street: il portafoglio soffre",
        detail: "Saltiamo la turisticissima Takeshita Street (piena di ragazzine) e puntiamo su <b>Cat Street</b>. Via pedonale piena di negozi vintage curatissimi, flagship store streetwear (Supreme, Bape) e boutique di sneakers rarissime. Prendiamoci un caffè e facciamo i danni. Chi torna a casa con le valigie più pesanti perde.",
        maps: "https://www.google.com/maps/search/?api=1&query=Cat+Street+Harajuku",
        image: "https://images.unsplash.com/photo-1532236204992-f5e85c024202?w=800&h=400&fit=crop" },
      { time: "14:30", title: "L'incrocio più famoso del mondo",
        detail: "Arriviamo a Shibuya. Foto alla statua di Hachiko (il cane che ha aspettato il padrone morto per 10 anni, non piangere). <b>Trucco:</b> invece di farci schiacciare in mezzo all'incrocio, andiamo al <i>Magnet by Shibuya 109</i>. All'ultimo piano c'è Mag's Park, la terrazza da cui fotografiamo dall'alto migliaia di persone che attraversano tutte insieme. Impressionante.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shibuya+Scramble+Crossing",
        image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?w=800&h=400&fit=crop" },
      { time: "16:30", title: "Shibuya Sky al tramonto (prenotato!)",
        detail: "Tiriamo fuori il QR code. Ascensori velocissimi, arriviamo a 230 metri. La vista è assurda. Restiamo fino al tramonto e Tokyo diventa un tappeto infinito di lucine bianche e rosse. Per una volta stiamo zitti tutti e tre.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shibuya+Sky",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&h=400&fit=crop" },
      { time: "20:00", title: "Roppongi: carne, birra e si esce",
        detail: "Metro verso Roppongi, il quartiere della vita notturna. <b>Cena:</b> ci sfondamiamo di carne alla griglia, Steakhouse o Korean BBQ. <br><b>Poi:</b> siamo 3 amici al primo viaggio in Giappone, stasera si esce e basta. Proviamo il <i>1OAK Tokyo</i>, il <i>V2</i> o il <i>Jumanji 55</i>. Chiudiamo con un Ramen pesantissimo alle 4 di notte, come da protocollo internazionale della sbronza.",
        maps: "https://www.google.com/maps/search/?api=1&query=Roppongi+Crossing",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 4, title: "Hangover, arte e sushi da paura", location: "Tokyo", tag: "Recovery", icon: "\u2728",
    timeline: [
      { time: "09:30", title: "Tsukiji: la cura dell'hangover",
        detail: "Nessuna sveglia presto, ce lo siamo meritati dopo ieri notte. Arriviamo al mercato esterno di Tsukiji. Le bancarelle sono la cura perfetta per lo stomaco devastato. <b>Da provare:</b> spiedini di Wagyu fiammeggiati al momento con riccio di mare sopra. Ostriche giganti aperte davanti a noi con salsa Ponzu. Nessun giudizio se ordiniamo tutto il banco.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tsukiji+Outer+Market",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&h=400&fit=crop" },
      { time: "12:30", title: "TeamLab Planets: si va scalzi e bagnati",
        detail: "Andiamo a Toyosu per il <b>TeamLab Planets</b>. Si entra scalzi. La prima stanza è una salita contro una cascata d'acqua vera. Poi si cammina in stanze dove l'acqua calda arriva al ginocchio e pesci digitali nuotano intorno. L'Infinity Room con specchi e LED è roba da acido senza acido. Prepariamo i telefoni impermeabili, sennò piangiamo.",
        maps: "https://www.google.com/maps/search/?api=1&query=teamLab+Planets",
        image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&h=400&fit=crop" },
      { time: "15:30", title: "Odaiba: Gundam gigante e giostre Sega",
        detail: "Prendiamo la linea automatica che attraversa il Rainbow Bridge. Davanti al DiverCity c'è il Gundam Unicorn a grandezza naturale. Facciamo le foto come tre bambini di 30 anni. <b>Poi:</b> <i>Tokyo Joypolis</i> di Sega. Montagne russe al chiuso dove schiacci pulsanti mentre giri come una trottola. Follia pura, come noi.",
        maps: "https://www.google.com/maps/search/?api=1&query=Unicorn+Gundam+Statue+Odaiba",
        image: "https://images.unsplash.com/photo-1624601573012-efb68f3b1b85?w=800&h=400&fit=crop" },
      { time: "19:00", title: "Omakase a Ginza: ci trattiamo da re",
        detail: "Andiamo a Ginza, il quartiere elegante. Stasera ci trattiamo bene: <b>Sushi Omakase</b> ('Fai tu, maestro'). Ci sediamo al bancone di legno laccato. Il maestro ci prepara un Nigiri alla volta, già con la quantità giusta di soia. Lo prendiamo con le dita e lo mangiamo in un boccone. Probabilmente il sushi migliore della nostra vita. Se dopo questo ordiniamo sushi in Italia piangeremo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Ginza+Sushi",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=400&fit=crop" },
      { time: "22:30", title: "Don Quijote: shopping notturno da degenerati",
        detail: "Mega Don Quijote (Donki), aperto 24 ore. Di notte zero fila. Compriamo roba assurda: integratori strani, dolci dal packaging incomprensibile, coltellini tascabili. Portiamo il passaporto per il 10% di sconto Tax-Free. È un supermercato su 5 piani dove perdiamo la cognizione del tempo. Uno di noi uscirà con qualcosa di assolutamente inutile, è statisticamente certo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Mega+Don+Quijote+Ginza",
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 5, title: "Hakone: oggi si riposa (ci crediamo?)", location: "Hakone", tag: "Relax (Forse)", icon: "\u2668\uFE0F",
    timeline: [
      { time: "08:30", title: "Spediamo le valigie come geni del male",
        detail: "Scendiamo alla reception e compiliamo il modulo per il <b>Yamato Transport</b>. Loro prendono le nostre 3 valigie e le spediscono direttamente all'hotel di Kyoto. Arrivano domani. Noi partiamo leggeri solo con lo zaino. Questa è la mossa di un uomo superiore, non di un turista col trolley sulle scale della metro.",
        maps: "https://www.google.com/maps/search/?api=1&query=Yamato+Transport+Tokyo",
        image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&h=400&fit=crop" },
      { time: "10:00", title: "Treno panoramico e bento box",
        detail: "Da Shinjuku prendiamo il Romancecar per Hakone-Yumoto. Compriamo un <i>Ekiben</i> (i bento box delle stazioni giapponesi, opere d'arte commestibili) e lo mangiamo sul treno guardando i palazzi che diventano montagne. Viaggiare così è un altro livello rispetto ai Frecciarossa con la brioche del bar.",
        maps: "https://www.google.com/maps/search/?api=1&query=Hakone+Yumoto",
        image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&h=400&fit=crop" },
      { time: "12:30", title: "Uova nere e puzza di uova marce",
        detail: "Funicolare, poi funivia fino alla vetta di <b>Owakudani</b>. Puzza di zolfo fortissima, il terreno fuma, sembra Mordor. Compriamo le <i>Kuro-tamago</i> (uova nere): il guscio è nero per lo zolfo, dentro sono normali uova sode. La leggenda dice che ogni uovo allunga la vita di 7 anni. Ne mangiamo 3 a testa, siamo praticamente immortali. Poi scendiamo con una nave pirata (sì, pirata, in un lago di montagna, in Giappone) sul Lago Ashi.",
        maps: "https://www.google.com/maps/search/?api=1&query=Owakudani+Hakone",
        image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=400&fit=crop" },
      { time: "16:00", title: "Ryokan e Onsen: nudi tra amici",
        detail: "Entriamo nella locanda tradizionale. Via le scarpe, ci danno gli <i>Yukata</i> (vestaglie di cotone). <b>L'Onsen:</b> niente costume, si va nudi. Sì, nudi. Tranquilli, è normalissimo qui e non frega niente a nessuno. Ci si siede sugli sgabellini, ci si lava per bene, e POI ci si immerge nell'acqua a 42 gradi. Dopo 4 giorni a Tokyo a 25.000 passi al giorno, questo è il reset della vita.",
        maps: "https://www.google.com/maps/search/?api=1&query=Hakone+Onsen",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=400&fit=crop" },
      { time: "19:00", title: "Cena Kaiseki: 15 piattini da chef",
        detail: "Restiamo in Yukata, ci sediamo sui tatami. La cena Kaiseki è il top della cucina giapponese: 10-15 piattini minuscoli uno dopo l'altro. Sashimi freschissimo, tempura croccante, zuppe stagionali, un pezzetto di wagyu alla griglia. Non sappiamo cosa stiamo mangiando la metà delle volte ma è tutto incredibile. Dopo cena crollo sui futon. Ronfiamo come tre orsi.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kaiseki+Hakone",
        image: "https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 6, title: "Kyoto: il Giappone dei Samurai", location: "Kyoto", tag: "Cultura", icon: "\u{1F684}",
    timeline: [
      { time: "09:30", title: "Treno proiettile! (forse vediamo il Fuji)",
        detail: "Da Odawara prendiamo lo Shinkansen per Kyoto. <b>Importantissimo:</b> prenotiamo i posti sul lato destro (posti E o D). Se siamo fortunati, vediamo il Monte Fuji sfrecciare fuori dal finestrino a 300 km/h. Momento da pelle d'oca anche per tre che non si emozionano mai.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kyoto+Station",
        image: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=800&h=400&fit=crop" },
      { time: "13:00", title: "Affittiamo le e-bike e dominiamo la città",
        detail: "Arriviamo a Kyoto, le valigie ci aspettano già in camera (Yamato, i migliori). <b>Il segreto:</b> i bus sono pieni zeppi di turisti, la metro non copre le zone storiche. Affittiamo bici elettriche e ci muoviamo come dei signori, parcheggiando dove vogliamo. Chi va in bus è un turista, chi va in bici è un locale. Noi siamo locali.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kyoto+Bicycle+Rental",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=400&fit=crop" },
      { time: "14:30", title: "Kiyomizu-dera: il tempio con la terrazza",
        detail: "Lasciamo le bici e saliamo a piedi la collina. La terrazza del tempio è enorme e la vista spacca. Sotto c'è la cascata Otowa: si beve con dei mestoli lunghi da uno dei tre getti d'acqua (salute, successo o amore). <b>Regola:</b> non beviamo da tutti e tre, sennò gli dei ci considerano avidi. Già che siamo qui per i soldi del Kobe Beef, non tentiamo il destino.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kiyomizu-dera",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=400&fit=crop" },
      { time: "16:00", title: "Viuzze da film sui Samurai",
        detail: "Scendiamo per Sannenzaka e Ninenzaka. Viuzze preservate perfettamente: casette in legno, tettoie scure, sembra il set dell'Ultimo Samurai. Se siamo stanchi, ci fermiamo al Maccha House per un tiramisù al tè verde. Sì, tiramisù al tè verde. No, non è da femmina, è oggettivamente buono.",
        maps: "https://www.google.com/maps/search/?api=1&query=Ninenzaka+Kyoto",
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=400&fit=crop" },
      { time: "18:00", title: "Gion: il quartiere delle Geisha",
        detail: "Passeggiamo per <i>Hanamikoji</i> al tramonto. Le Geiko e Maiko vanno a lavorare nelle case da tè a quest'ora. Se ne vediamo una, non facciamo i coglioni: niente urla, niente inseguimenti col telefono, niente foto senza permesso. Guardiamo e basta. Non siamo quei turisti lì.",
        maps: "https://www.google.com/maps/search/?api=1&query=Gion+Kyoto",
        image: "https://images.unsplash.com/photo-1522623349500-de288cb2a5a7?w=800&h=400&fit=crop" },
      { time: "20:00", title: "Cena sul fiume e santuario notturno segreto",
        detail: "Ceniamo a Pontocho, vicolo parallelo al fiume. Poi <b>colpo di scena:</b> quando tutti i turisti tornano in hotel, noi prendiamo le e-bike e andiamo al <i>Santuario Yasaka</i>. Di notte è aperto, illuminato da centinaia di lanterne di carta, e siamo praticamente soli. Momento top del viaggio, anche per tre che di solito parlano solo di calcio e motori.",
        maps: "https://www.google.com/maps/search/?api=1&query=Yasaka+Shrine+Kyoto",
        image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 7, title: "Sveglia all'alba, ma ne vale la pena", location: "Kyoto", tag: "Foto Epiche", icon: "\u{1F4F8}",
    timeline: [
      { time: "06:30", title: "Foresta di bambù SENZA turisti",
        detail: "<b>Questa sveglia ci cambierà il viaggio.</b> Arashiyama alle 10 è un inferno di gente. Ma all'alba la foresta è vuota. Sentiamo il rumore dei fusti alti 20 metri che sbattono tra loro col vento. Le foto che facciamo qui saranno le migliori del viaggio, garantito. Andiamo via prima che arrivino i pullman cinesi.",
        maps: "https://www.google.com/maps/search/?api=1&query=Arashiyama+Bamboo+Grove",
        image: "https://images.unsplash.com/photo-1580623027781-a7db8c6bd092?w=800&h=400&fit=crop" },
      { time: "09:00", title: "Tempio zen: ci sediamo e stiamo zitti",
        detail: "A due passi dal bambù c'è il tempio Tenryu-ji. Ha un giardino del 1300 progettato con un trucco geniale: le montagne vere dietro il tempio sembrano parte del giardino. Sediamoci sulla veranda e contempliamo. Dopo la sveglia alle 6 ce lo meritiamo. Nessuno di noi posterà una storia con la frase 'finding inner peace'. Giurato.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tenryu-ji+Temple",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=400&fit=crop" },
      { time: "11:30", title: "Il tempio d'oro (che un pazzo ha bruciato)",
        detail: "Taxi o bus verso nord per il Kinkaku-ji. È interamente coperto di foglia d'oro. Lo ricostruirono negli anni '50 dopo che un monaco fuori di testa lo incendiò. Roba da true crime giapponese. C'è un percorso obbligato per girarci intorno, 30 minuti, ma l'impatto visivo è da mascella a terra.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kinkaku-ji",
        image: "https://images.unsplash.com/photo-1623785013715-70e3e3c7e15c?w=800&h=400&fit=crop" },
      { time: "14:00", title: "Nishiki Market: polpo, coltelli e prove di coraggio",
        detail: "Rientriamo in centro e ci infiliamo nel Nishiki Market. Assaggiamo il <i>Tako Tamago</i> (un polpetto rosso glassato con dentro un uovo di quaglia, mangiarlo tutto in un boccone è la prova) e crocchette di pesce caldo. <b>Per chi cucina:</b> qui vendono coltelli in acciaio fatti a mano pazzeschi (tipo Aritsugu). Regaloni per farci belli con le tipe quando cuciniamo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Nishiki+Market",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&h=400&fit=crop" },
      { time: "17:00", title: "Strong Zero sul fiume come dei veri degenerati",
        detail: "Ultima ora di luce, pedaliamo lungo il fiume Kamo. Ci fermiamo a un konbini, prendiamo lattine di <i>Strong Zero</i> (9% di alcol, costa 1 euro, fa danni serissimi) e ci sediamo sull'erba. È il ritrovo degli universitari di Kyoto. Tramonto, birra, cazzate tra amici. Perfezione.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kamo+River+Kyoto",
        image: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=800&h=400&fit=crop" },
      { time: "19:30", title: "La via del Ramen: 1 vs 1 vs 1",
        detail: "Alla stazione di Kyoto, 10esimo piano. <i>Kyoto Ramen Koji</i>: 10 ristoranti di ramen uno accanto all'altro. Si ordina dalla macchinetta fuori, si dà il bigliettino al cameriere e si mangia il ramen risucchiando forte (qui è educazione, non maleducazione). Sfida: chi fa più rumore risucchiando vince. Chi si vergogna paga.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kyoto+Station+Ramen+Koji",
        image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 8, title: "10.000 Torii e poi si sbarca a Osaka", location: "Kyoto/Osaka", tag: "Cambio Vibe", icon: "\u26E9\uFE0F",
    timeline: [
      { time: "07:00", title: "Fushimi Inari: il leg day del viaggio",
        detail: "<b>Gambe pronte? No? Chissenefrega.</b> Arriviamo presto al tempio dei 10.000 portali rossi (Torii). In basso è pieno di gente, ma noi saliamo fino in cima alla montagna come gli spartani. Al bivio (Yotsutsuji) panorama pazzesco. Continuiamo fino alla vetta. Arriveremo sudati, distrutti e fieri come dopo una maratona. Solo che questa ha le foto migliori.",
        maps: "https://www.google.com/maps/search/?api=1&query=Fushimi+Inari",
        image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&h=400&fit=crop" },
      { time: "11:00", title: "Sake Museum: brindisi d'addio a Kyoto",
        detail: "Scendendo verso sud, il quartiere di Fushimi è la patria storica del Sake. <b>Gekkeikan Okura Sake Museum</b>: tour veloce e assaggio di tre tipi di sake (caldo, freddo e alla prugna). Alle 11 di mattina siamo già alticci davanti a un museo. Il viaggio sta andando benissimo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Gekkeikan+Okura+Sake+Museum",
        image: "https://images.unsplash.com/photo-1516253593875-bd7ba052f0fd?w=800&h=400&fit=crop" },
      { time: "14:00", title: "Osaka! Si cambia completamente registro",
        detail: "Mezz'ora di treno e il Giappone zen di Kyoto sparisce. Osaka è caos, rumore, neon e cibo ovunque. Check-in e poi dritti al <b>Kuromon Ichiba Market</b>. Banchi del pesce dove assaggiamo tonno, riccio di mare e cubetti di Kobe beef cucinati davanti a noi sulla piastra. Questa città è stata costruita per mangiare. Siamo nel posto giusto.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kuromon+Ichiba",
        image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&h=400&fit=crop" },
      { time: "18:00", title: "Dotonbori: i neon più pazzi del mondo",
        detail: "Un canale circondato da grattacieli tappezzati di insegne LED giganti. Troviamo il ponte Ebisubashi e facciamo l'iconica foto con l'omino che corre della <b>Glico</b>. Di sera questa zona è come stare dentro un anime in live action, ma col volume al massimo e l'odore di fritto ovunque. Paradiso.",
        maps: "https://www.google.com/maps/search/?api=1&query=Dotonbori",
        image: "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?w=800&h=400&fit=crop" },
      { time: "19:30", title: "Mangiare fino a scoppiare (è obbligatorio)",
        detail: "A Osaka il motto è <i>Kuidaore</i>: mangiare fino a stare male. Stasera lo onoriamo. Prima <b>Takoyaki</b> da un chiosco: polpette con polpo bollente, maionese e scaglie di bonito che ballano sopra. Poi <b>Okonomiyaki</b> (frittata di cavolo e carne sulla piastra). Birra Asahi a fiumi. Il buco nella cintura lo faremo domani.",
        maps: "https://www.google.com/maps/search/?api=1&query=Okonomiyaki+Dotonbori",
        image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 9, title: "Super Mario nella vita reale", location: "Osaka", tag: "Adrenalina Pura", icon: "\u{1F3A2}",
    timeline: [
      { time: "07:30", title: "Universal Studios: operazione militare",
        detail: "<b>Operazione militare.</b> Arriviamo ai cancelli un'ora prima dell'apertura. Appena aprono, camminiamo veloci (non corriamo, ci fermano i giapponesi educati col fischietto) dritti verso l'area Nintendo. L'Express Pass ce l'abbiamo, usiamolo come si deve.",
        maps: "https://www.google.com/maps/search/?api=1&query=Universal+Studios+Japan",
        image: "https://images.unsplash.com/photo-1565402170291-8491f14678db?w=800&h=400&fit=crop" },
      { time: "09:00", title: "Super Nintendo World: siamo dentro al gioco",
        detail: "Entriamo dal tubo verde come Mario. Compriamo il Power-Up Band (braccialetto smart) per colpire i blocchi e raccogliere monete come dei deficienti felici. Con l'Express Pass andiamo dritti su <i>Mario Kart: Koopa's Challenge</i>. Ci mettono un visore AR e lanciamo gusci rossi VERI mentre sterziamo. Una roba che in Europa ce la sogniamo. Tre uomini adulti che urlano in un go-kart di Mario. Bello.",
        maps: "https://www.google.com/maps/search/?api=1&query=Super+Nintendo+World+USJ",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=400&fit=crop" },
      { time: "13:00", title: "Dinosauri, montagne russe e Burrobirra",
        detail: "Andiamo sull'ottovolante <i>The Flying Dinosaur</i>. Ci appendono a pancia in giù e ci scaraventano in loop pazzeschi. <b>Trucco:</b> usiamo la fila 'Single Rider', risparmiamo 90 minuti di coda. Finiamo in carrelli diversi ma chi se ne importa. Dopo, Burrobirra ghiacciata a Hogsmeade. Siamo uomini adulti al parco di Harry Potter. Nessun rimorso.",
        maps: "https://www.google.com/maps/search/?api=1&query=The+Flying+Dinosaur+USJ",
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&h=400&fit=crop" },
      { time: "19:00", title: "Usciamo distrutti ma felici",
        detail: "Le gambe sono finite. Usciamo dal parco e mangiamo la prima cosa calorica che troviamo nella CityWalk (ramen tonkotsu pesantissimo o quello che capita). Non ci importa cosa, basta che sia unto e caldo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Universal+CityWalk+Osaka",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=400&fit=crop" },
      { time: "22:00", title: "Round1: sport, arcade e karaoke da ubriachi",
        detail: "<b>Se abbiamo ancora energie</b> (e ne avremo, perché siamo scemi): andiamo a Namba al <b>Round1 Stadium</b>. Con un biglietto <i>Spo-Cha</i> abbiamo accesso illimitato a: cabinati arcade, freccette, karaoke privato, basket, pattinaggio a rotelle, calcetto e batting cages sul tetto. È il posto più assurdo in cui siamo mai stati. Karaoke privato a mezzanotte dopo un parco divertimenti: solo in Giappone.",
        maps: "https://www.google.com/maps/search/?api=1&query=Round1+Stadium+Sennichimae",
        image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 10, title: "Cervi, fritti e roba strana", location: "Nara / Osaka", tag: "Esplorazione", icon: "\u{1F98C}",
    timeline: [
      { time: "09:30", title: "Nara: i cervi che si inchinano (davvero)",
        detail: "Treno Kintetsu verso Nara. Il parco è pieno di oltre 1000 cervi sacri che girano liberi. Compriamo i <i>Shika Senbei</i> (cracker per cervi). <b>Il bello:</b> se facciamo un leggero inchino al cervo, lui ci risponde inchinandosi per ricevere il biscotto. Più educati dei nostri colleghi. Attenzione: nascondiamo le mappe di carta, questi bastardi se le mangiano davvero.",
        maps: "https://www.google.com/maps/search/?api=1&query=Nara+Park",
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=400&fit=crop" },
      { time: "11:30", title: "Il Buddha più grosso che vedremo mai",
        detail: "Il tempio Todai-ji è l'edificio in legno più grande del mondo. Dentro c'è un Buddha di bronzo di 15 metri. Dietro la statua c'è una colonna con un buco alla base: chi ci passa attraverso riceve l'illuminazione. Proviamoci. È strettissimo e ci incastreremo. Rideremo come delle bestie.",
        maps: "https://www.google.com/maps/search/?api=1&query=Todai-ji+Temple+Nara",
        image: "https://images.unsplash.com/photo-1624601573012-efb68f3b1b85?w=800&h=400&fit=crop" },
      { time: "13:00", title: "Il mochi più veloce del mondo",
        detail: "Tornando alla stazione, fermiamoci da Nakatanidou. I pasticceri fanno il <i>Mochitsuki</i>: battono la pasta di riso con martelli giganti a velocità folle, urlando. È uno spettacolo ipnotico. Compriamo un mochi caldo. Merenda perfetta dopo aver tentato di entrare in un buco da gnomo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Nakatanidou+Mochi+Nara",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=400&fit=crop" },
      { time: "16:30", title: "Shinsekai: il quartiere retro-cyberpunk",
        detail: "Torniamo a Osaka. Shinsekai ('Nuovo Mondo') doveva essere il quartiere del futuro 100 anni fa. Oggi è un paradiso retro pieno di sale giochi meccaniche antiche, insegne 3D giganti e un'atmosfera da film di Blade Runner girato con due lire. Ci si sente a casa, ma in versione giapponese.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shinsekai+Osaka",
        image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&h=400&fit=crop" },
      { time: "18:00", title: "Kushikatsu: la regola del doppio tuffo",
        detail: "Ci sediamo da <i>Daruma Kushikatsu</i>. Sono spiedini di qualsiasi cosa (manzo, asparagi, uova, formaggio) impanati e fritti. Davanti c'è una vaschetta di salsa in comune. <b>LA REGOLA:</b> si intinge lo spiedino UNA VOLTA SOLA. Il doppio tuffo è vietatissimo e ci sgridano forte se lo facciamo. Tipo mamma quando tornavamo a casa tardi. Stiamo attenti.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kushikatsu+Daruma+Shinsekai",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400&fit=crop" },
      { time: "20:30", title: "TeamLab nel giardino botanico di notte",
        detail: "<b>Esperienza assurda:</b> giardino botanico Nagai. Di notte TeamLab lo trasforma in un'installazione artistica pazzesca. Uova luminose giganti tra gli alberi, laghi illuminati, sculture che cambiano colore se le tocchi. Sì, è bello anche per tre maschi che non vanno alle mostre d'arte. Fidatevi.",
        maps: "https://www.google.com/maps/search/?api=1&query=TeamLab+Botanical+Garden+Osaka",
        image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 11, title: "Il Kobe Beef e poi si esce a Osaka", location: "Kobe / Osaka", tag: "Festa & Lusso", icon: "\u{1F969}",
    timeline: [
      { time: "11:00", title: "Kobe: la città del manzo leggendario",
        detail: "Breve treno per Kobe. Città portuale con un vibe internazionale. Passeggiamo al <i>Meriken Park</i> per la torre rossa del porto. Godiamocela con calma perché tra poco arriva il momento che aspettiamo da quando abbiamo prenotato questo viaggio.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kobe+Meriken+Park",
        image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&h=400&fit=crop" },
      { time: "13:00", title: "KOBE BEEF: il pasto della vita (prenotato!)",
        detail: "Eccoci. Questo è IL momento. Seduti al bancone, uno chef personale ci mostra il taglio di Wagyu A5 crudo: ha più grasso bianco che carne rossa, sembra un marmo di Carrara commestibile. Lo cuoce sulla piastra d'acciaio in 3 minuti davanti ai nostri occhi. Si scioglie in bocca senza masticare. Tre amici che lavorano come dei muli e si regalano la bistecca migliore del pianeta. Ce lo meritiamo tutto, e se qualcuno dice che è uno spreco non è nostro amico.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kobe+Beef+Ishida",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=400&fit=crop" },
      { time: "17:00", title: "Umeda Sky Building al tramonto",
        detail: "Torniamo a Osaka, stazione di Umeda. Saliamo sull'<b>Umeda Sky Building</b> al tramonto. Ha delle scale mobili sospese nel vuoto tra due grattacieli che da sole valgono la salita. Scendiamo e passeggiamo per <b>Kitashinchi</b>, il distretto dei locali premium. Ci sentiamo dei boss, e dopo il Kobe Beef lo siamo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Umeda+Sky+Building",
        image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&h=400&fit=crop" },
      { time: "22:00", title: "Ultima notte a Osaka: si balla",
        detail: "Ultima sera a Osaka, facciamola contare. <i>Americamura</i> (Amemura) è il quartiere giovane. Triangle Park è pieno di ragazzi, musica hip-hop, skater. Facciamo bar-hopping e poi entriamo in un club (Ghost Ultra Lounge, Pure, o Giraffe). Si balla, si beve, si fa alba. Domani dormiamo sul treno proiettile, ne vale la pena.",
        maps: "https://www.google.com/maps/search/?api=1&query=Americamura+Osaka",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 12, title: "Si torna a Tokyo: vintage e grigliate", location: "Tokyo", tag: "Ritorno", icon: "\u{1F684}",
    timeline: [
      { time: "10:30", title: "Shinkansen della convalescenza",
        detail: "Recuperiamo dalla nottata. Treno proiettile di ritorno a Tokyo. Compriamo un Boss Coffee (il caffè in lattina dei distributori, sembra una roba da camionisti ma è buonissimo) e un Bento box in stazione. Pranzo in viaggio guardando il Giappone sfrecciare fuori dal finestrino. Momento zen forzato dal corpo distrutto.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Station",
        image: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=800&h=400&fit=crop" },
      { time: "14:00", title: "Ultimo hotel: base operativa finale",
        detail: "Check-in nell'ultimo alloggio. Da qui in poi l'obiettivo è chiaro: ultime esperienze e shopping finale senza trascinare pacchi in giro come bestie da soma.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Hotel",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=400&fit=crop" },
      { time: "15:30", title: "Shimokitazawa: il quartiere dei fighi",
        detail: "Shimokitazawa è tutta pedonale e piena di personalità. Negozi di giacche vintage anni '90 (New York Joe, Flamingo) e negozi di vinili dell'usato tenuti come gioielli. Mangiamo una <i>Soup Curry</i> per merenda e ci godiamo il quartiere dove i tokyoti vanno quando vogliono sembrare interessanti. Come noi, insomma.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shimokitazawa+Tokyo",
        image: "https://images.unsplash.com/photo-1532236204992-f5e85c024202?w=800&h=400&fit=crop" },
      { time: "19:30", title: "Yakiniku: grigliata e bevute",
        detail: "Torniamo a Shibuya e festeggiamo il rientro con un <b>Yakiniku</b> (griglia giapponese). Prendiamo il <i>Nomihodai</i>: all-you-can-drink di birra e highball per 90 minuti. Piatti infiniti di carne marinata, lingua di bue al limone, costine. Ce la cuociamo noi al centro del tavolo urlando <i>Kanpai!</i> a ogni birra. Sembra una serata qualunque tra amici, ma in Giappone, e con la carne migliore del mondo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Yakiniku+Shibuya",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop" },
      { time: "22:00", title: "Purikura e cazzeggio a Shibuya",
        detail: "Smaltiamo la cena camminando per <i>Center-Gai</i> a Shibuya. Entriamo nei Game Center e proviamo le cabine Purikura (Photo Booth giapponesi che ci modificano gli occhi facendoci sembrare personaggi degli anime). Le foto che escono sono ridicole. Perfette per il gruppo WhatsApp. Le mostreranno ai nostri futuri figli.",
        maps: "https://www.google.com/maps/search/?api=1&query=Shibuya+Center-Gai",
        image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 13, title: "Go-kart per le strade e ultimo brindisi", location: "Tokyo", tag: "Gran Finale", icon: "\u{1F3CE}\uFE0F",
    timeline: [
      { time: "10:00", title: "TeamLab Borderless: ci perdiamo di proposito",
        detail: "Se Planets ci è piaciuto, questo ci farà impazzire. Ad Azabudai Hills. È un labirinto scuro senza percorso: le opere d'arte (fiori luminosi, cascate digitali) si muovono da sole, escono dalle stanze e interagiscono tra loro e con noi. Ci perdiamo intenzionalmente. È costruito apposta per quello. Come le serate a Roppongi, ma legale.",
        maps: "https://www.google.com/maps/search/?api=1&query=Azabudai+Hills+TeamLab",
        image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62b1?w=800&h=400&fit=crop" },
      { time: "14:30", title: "Ultima spesa: regali e roba assurda",
        detail: "Corsa finale per gli acquisti. <i>Uniqlo Ginza</i> per magliette in cotone giapponese a prezzi ridicoli. <i>Don Quijote</i> per i KitKat ai gusti assurdi (Sake, Fragola, Patata dolce) da portare in Italia e farci sembrare fighi. Compriamo di tutto: tanto il conto in banca è già morto, a questo punto ce ne freghiamo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Don+Quijote+Tokyo",
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=400&fit=crop" },
      { time: "16:00", title: "GO-KART PER TOKYO (prenotato!)",
        detail: "<b>IL GRAN FINALE.</b> Mettiamo le tute di Mario, Luigi e Toad. Saliamo sui go-kart a motore e, guidati da un capofila, entriamo nel TRAFFICO VERO di Tokyo. Sfrecciamo sotto i grattacieli, la Tokyo Tower, passiamo gli incroci a 60km/h rasoterra. La gente ci fotografa dai marciapiedi come se fossimo delle celebrità. È la cosa più assurda e indimenticabile del viaggio. (Serve la Patente Internazionale fatta in Motorizzazione, sennò niente).",
        maps: "https://www.google.com/maps/search/?api=1&query=Street+Kart+Tokyo",
        image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&h=400&fit=crop" },
      { time: "19:30", title: "Ultima cena: Tsukemen, il ramen per uomini veri",
        detail: "Andiamo da <i>Rokurinsha</i> o <i>Tsujita</i>. Ordiniamo lo <b>Tsukemen</b>: noodles grossi e freddi da una parte, brodo ultra-denso bollente dall'altra. Si intingono e si mangiano. Alla fine chiediamo il 'Soup Wari': ci allungano il brodo rimasto con acqua calda e lo beviamo come una zuppa. L'ultima cena. E non è una pizza.",
        maps: "https://www.google.com/maps/search/?api=1&query=Rokurinsha+Tokyo+Station",
        image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&h=400&fit=crop" },
      { time: "22:00", title: "Ultimo drink: cocktail bar segreti",
        detail: "Mettiamoci bene per l'ultima sera. Tokyo ha i barman migliori del mondo. Proviamo <i>The SG Club</i>, <i>Bar Trench</i> o il leggendario <i>Bar BenFiddich</i> a Shinjuku (bar senza menù dove il barman distilla erbe davanti a noi e ci fa un cocktail su misura). Brindiamo ai 14 giorni più belli della nostra vita. Ce l'abbiamo fatta, ragazzi.",
        maps: "https://www.google.com/maps/search/?api=1&query=Bar+Benfiddich+Shinjuku",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 14, title: "L'ultimo giorno (non piango, giuro)", location: "Tokyo", tag: "Ultimo Giorno", icon: "\u2708\uFE0F",
    timeline: [
      { time: "09:00", title: "L'ultimo 7-Eleven della nostra vita",
        detail: "La malinconia arriva qui. Scendiamo al 7-Eleven per l'ultima volta. Compriamoci il <i>Tamago Sando</i> (tramezzino col pane morbidissimo ripieno di insalata di uova, una roba che in Italia non esiste) e un <i>Famichiki</i> (pollo fritto bollente). Mangiamolo lentamente. Ci mancherà tutto questo. Non stiamo piangendo, è il jetlag.",
        maps: "https://www.google.com/maps/search/?api=1&query=7-Eleven+Tokyo",
        image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&h=400&fit=crop" },
      { time: "10:00", title: "Tetris con le valigie",
        detail: "Cerchiamo di far stare dentro i bagagli tutto quello che abbiamo comprato in 14 giorni. Spoiler: non ci sta. Prendiamo il Narita Express o lo Skyliner. Almeno hanno spazio per le valigie gonfissime di KitKat e coltelli da chef.",
        maps: "https://www.google.com/maps/search/?api=1&query=Narita+Express",
        image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&h=400&fit=crop" },
      { time: "12:00", title: "Aeroporto: ultimo shopping (sì, ancora)",
        detail: "Dopo i controlli, se ci sono rimasti Yen o un briciolo di spazio, compriamo il cioccolato <i>Royce'</i> (mattoncini di Nama Chocolate che devono stare in frigo, buoni da morire) e i <i>Tokyo Banana</i>. Ultimi regali per far contente le madri e chiunque ci abbia dato da mangiare il gatto.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Airport+Duty+Free",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&h=400&fit=crop" },
      { time: "15:00", title: "Si torna a casa. Ma ci torneremo.",
        detail: "Saliamo sull'aereo pieni di ricordi, foto, KitKat strani, un paio di chili in più e un buco nel conto in banca. Non importa. Questi 14 giorni sono stati perfetti. Tre amici, primo viaggio in Giappone, zero rimpianti, un milione di storie da raccontare. Ci torneremo. È una promessa tra uomini.",
        maps: "",
        image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=400&fit=crop" }
    ]
  }
];

export const tasksData: TaskData[] = [
  { id: 1, title: "Universal Studios (Express Pass con Mario Kart)", timeline: "60 giorni prima. Se aspettiamo piangiamo lacrime amare.", icon: "\u{1F3AB}" },
  { id: 2, title: "TeamLab Planets & Borderless", timeline: "45 giorni prima. Si esauriscono subito, non facciamo i furbi.", icon: "\u{1F4A1}" },
  { id: 3, title: "Shibuya Sky (slot al tramonto!)", timeline: "4 settimane prima. Lo slot tramonto vale oro.", icon: "\u{1F307}" },
  { id: 4, title: "Street Go-Karting (il gran finale)", timeline: "30 giorni prima su Klook. Il momento della gloria.", icon: "\u{1F3CE}\uFE0F" },
  { id: 5, title: "Teppanyaki Kobe Beef (il pasto della vita)", timeline: "30 giorni prima. Solo 10-15 posti, chi dorme non mangia.", icon: "\u{1F969}" },
  { id: 6, title: "Patente Internazionale (Ginevra 1949)", timeline: "60 giorni prima in Motorizzazione. Senza questa, niente go-kart.", icon: "\u{1F6C2}" },
  { id: 7, title: "Compilare Visit Japan Web", timeline: "7 giorni prima. QR Code per saltare le file come dei VIP.", icon: "\u{1F4F1}" },
  { id: 8, title: "eSIM pronta (Ubigi o Airalo)", timeline: "2 giorni prima. Senza internet siamo tre scimmie perse.", icon: "\u{1F4F6}" }
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
  { category: "Serate e sbronze", value: 10 },
  { category: "Cibo pazzesco", value: 10 },
  { category: "Relax", value: 4 },
];
