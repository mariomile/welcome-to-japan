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

export interface PrepCategory {
  id: string;
  title: string;
  icon: string;
  items: { title: string; detail: string }[];
}

export interface BonusExperience {
  title: string;
  location: string;
  cost: string;
  duration: string;
  detail: string;
  maps: string;
  image?: string;
}

export const itineraryData: DayData[] = [
  {
    day: 1, date: "19 Mar", title: "Atterriamo + primo impatto + Shinjuku Night", location: "Tokyo", tag: "Impatto", icon: "\u{1F3D9}\uFE0F",
    timeline: [
      { time: "11:00", title: "Arrivo e setup: 3 cose e via",
        detail: "Atterriamo. Non perdiamo tempo. Facciamo queste 3 cose e usciamo:<br><br><b>1. IC Card Suica</b> — Se abbiamo iPhone, la aggiungiamo su Apple Wallet prima ancora di scendere dall'aereo. Altrimenti, compriamo la Welcome Suica alle macchinette JR in aeroporto (1,000 yen di deposito + ricarica).<br><b>2. Preleviamo 15,000 yen a testa</b> — ATM del 7-Eleven nel terminal. Funziona con qualsiasi carta europea.<br><b>3. Konbini pit stop</b> — Entriamo nel primo 7-Eleven. Prendiamo: <i>Onigiri</i> (~150 yen), acqua, <i>Strong Zero</i> (~200 yen, la lattina che ci cambierà la vita).<br><br><b>Per il centro:</b> Da Narita: Narita Express (N'EX) → Tokyo Station, ~60 min, ~3,250 yen. Da Haneda: Monorail o Keikyu Line, ~20 min, ~500 yen.<br><br>Obiettivo: essere in strada entro le 13:30.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tokyo+Airport",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=400&fit=crop" },
      { time: "14:30", title: "Asakusa — Il Giappone che immaginavamo",
        detail: "Primo contatto col Giappone tradizionale. <b>Senso-ji</b>, il tempio più antico di Tokyo (anno 645). Serve per entrare nel mood.<br><br><b>Come viverla:</b><br>1. Entriamo dal <b>Kaminarimon Gate</b> — la porta rossa gigante con la lanterna. Foto obbligatoria.<br>2. Percorriamo <b>Nakamise Street</b> (~250m di bancarelle). Prendiamo: <i>Ningyo-yaki</i> (dolcetti ripieni di anko, ~300 yen) e <i>Age-manju</i> (manju fritto, ~100 yen).<br>3. Al tempio: ci laviamo le mani alla <b>fontana rituale</b> (chozuya). Mano sinistra prima, poi destra, poi sciacquiamo la bocca.<br>4. Accendiamo un bastoncino d'incenso (~100 yen) — porta fortuna.<br>5. <b>Dietro il tempio</b>: meno folla, giardino <b>Demboin</b> spesso poco visitato.<br><br><b>Tempo:</b> ~2 ore | <b>Budget:</b> ~500 yen a testa",
        maps: "https://maps.app.goo.gl/4K9E7vUXH2v7Zb9F7",
        image: "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=800&h=400&fit=crop" },
      { time: "17:00", title: "Passeggiata Sumida River",
        detail: "Usciamo da Senso-ji e camminiamo lungo il fiume Sumida verso sud. Lo skyline con la <b>Tokyo Skytree</b> che domina tutto. Questa passeggiata serve per smaltire il jet lag camminando, fare foto incredibili con la luce del tardo pomeriggio e iniziare a sentire il ritmo della città.<br><br><b>Pro tip:</b> Attraversiamo il <b>Sumida Park</b> — a fine marzo potremmo trovare i primi sakura (fiori di ciliegio) lungo il fiume.",
        maps: "https://www.google.com/maps/search/?api=1&query=Sumida+River+Walk",
        image: "/itinerary/tokyo-river-night.svg" },
      { time: "20:00", title: "Omoide Yokocho + Golden Gai: la prima sera vera",
        detail: "<b>Omoide Yokocho (Memory Lane / Piss Alley)</b> — Un labirinto di micro-ristoranti all'aperto, ciascuno con 6-8 posti, fumo alla griglia, lanterne rosse. È il Giappone crudo, autentico, da film.<br><br>Ci sediamo in uno con lo <i>yakitori</i>. Ordiniamo: <i>negima</i> (pollo e cipollotto), <i>tsukune</i> (polpetta), <i>kawa</i> (pelle croccante), <i>sunagimo</i> (ventriglio — fidiamoci). 4-5 spiedini a testa (~150-200 yen l'uno) + <i>nama biiru</i> (birra alla spina, ~500 yen). Budget per 3: ~5,000-7,000 yen totali.<br><br><b>Golden Gai</b> — 200+ micro-bar in 6 vicoli stretti. Ogni bar ha 5-10 posti. Portiamo <b>solo cash</b>. Cover charge 500-1,000 yen (è normale). Entriamo in almeno <b>2-3 bar diversi</b>. Bar consigliati: <i>Ace's</i> (prezzi bassi), <i>Black Sun</i> (jazz), <i>Albatross</i> (su 3 piani, atmosfera unica). Parliamo col bartender — questo È Golden Gai. Budget: ~3,000-5,000 yen a testa.",
        maps: "https://maps.app.goo.gl/QgztVtSP3qzJkzHL6",
        image: "/itinerary/tokyo-night-bars.svg" }
    ]
  },
  {
    day: 2, date: "20 Mar", title: "Shibuya iconica + Shibuya Sky + cocktail serio", location: "Tokyo", tag: "Shopping & Vibe", icon: "\u{1F6CD}\uFE0F",
    timeline: [
      { time: "09:00", title: "Meiji Jingu — Il reset mentale",
        detail: "Non è 'solo un tempio'. È una foresta sacra nel cuore di Tokyo. 700,000 alberi piantati 100 anni fa. Entriamo e il caos della città scompare.<br><br>1. Entriamo dal grande <b>torii in legno di cipresso</b> — il più grande del Giappone.<br>2. Camminiamo lentamente nel sentiero nel bosco (~10 min). Respiriamo. Silenzio.<br>3. Ci fermiamo davanti ai <b>barili di sake</b> (offerte all'imperatore) e ai <b>barili di vino</b> (regalo dalla Francia) — foto iconica.<br>4. Al santuario: offerta (moneta, inchino 2 volte, mani 2 volte, inchino). Scriviamo un <i>ema</i> (~500 yen) — il nostro desiderio per il viaggio.<br><br><b>Pro tip:</b> Andiamo presto (prima delle 10) per evitare la folla. A volte si assiste a un matrimonio shintoista.<br><b>Tempo:</b> 60-90 min | <b>Budget:</b> ~600 yen",
        maps: "https://maps.app.goo.gl/PUe3yF2Y5uWGy3rR7",
        image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&h=400&fit=crop" },
      { time: "11:30", title: "Harajuku + Cat Street — Street culture Tokyo",
        detail: "Da Meiji Jingu usciamo verso Harajuku. <b>Takeshita Street:</b> la via del caos — moda kawaii, crepe giganti, gente vestita in modo assurdo. Attraversiamola per l'esperienza.<br><br><b>Cat Street:</b> molto più figa. Negozi streetwear, vintage, design:<br>• <i>BAPE Store</i> — streetwear iconico giapponese<br>• <i>Neighborhood</i> — brand cult underground<br>• <i>Vintage shops</i> — pezzi unici di seconda mano<br>• <i>Design Festa Gallery</i> — arte underground gratuita<br><br>Prendiamo una <i>crepe giapponese</i> da Marion Crepes (~500 yen) — rito di passaggio Harajuku.<br><b>Pro tip:</b> Entriamo nei negozi piccoli laterali. I pezzi migliori non sono nelle catene.",
        maps: "https://maps.app.goo.gl/vqM5NUPsXv6mU5zd6",
        image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?w=800&h=400&fit=crop" },
      { time: "15:30", title: "Shibuya Crossing + Shibuya Sky",
        detail: "<b>Shibuya Crossing</b> — L'incrocio più famoso del mondo. Fino a 3,000 persone lo attraversano a ogni semaforo verde. Attraversiamolo almeno 2 volte, poi saliamo allo <b>Starbucks al 2° piano del Tsutaya Building</b> per la vista dall'alto. Troviamo la <b>statua di Hachiko</b> all'uscita della stazione — foto veloce.<br><br><b>Shibuya Sky</b> — Osservatorio a 230 metri. Vista a 360° su tutta Tokyo. <b>Prenotazione obbligatoria</b> su shibuya-sky.com. ~2,000 yen. Prenotiamo lo slot delle 16:30-17:00 per il tramonto. Rooftop all'aperto con amache. Portiamo la giacca — a 230 metri c'è vento.",
        maps: "https://maps.app.goo.gl/VmWv7U7fsX1Vv8nS6",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&h=400&fit=crop" },
      { time: "19:30", title: "The SG Club — Cocktail di livello mondiale",
        detail: "Tokyo è tra le top 3 città al mondo per cocktail bar. <b>The SG Club</b> di Shingo Gokan è la prova. Due piani: <b>Guzzle</b> (piano terra, più casual, highball e drinks veloci) e <b>Sip</b> (seminterrato, cocktail complessi, atmosfera speakeasy). Andiamo prima da Guzzle per un drink veloce, poi scendiamo da Sip per il cocktail vero.<br><br>~2,000-2,500 yen a cocktail. Ci sediamo al bancone, guardiamo il bartender lavorare, ci facciamo consigliare — è la nostra prima volta a Tokyo.<br><b>Budget per 3 (2 drink a testa):</b> ~15,000 yen",
        maps: "https://maps.app.goo.gl/TQ3L1vmb8kUuZy1y7",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=400&fit=crop" },
      { time: "21:30", title: "Karaoke privato — Perché siamo 3 amici in Giappone",
        detail: "Il karaoke in Giappone non è cantare al bar davanti a sconosciuti. È una <b>stanza privata</b> solo per noi, con divani, luci, e tutto l'alcol che vogliamo.<br><br><b>Dove:</b> <i>Karaoke Kan Shibuya</i> (famoso da Lost in Translation) | <i>Big Echo</i> (solida) | <i>Manekineko</i> (più economico, drink bar incluso).<br><br>Prendiamo un pacchetto <i>nomihodai</i> (all-you-can-drink) di 2 ore — ~3,000-4,000 yen a testa include stanza + bevande illimitate. Cantiamo <i>Bohemian Rhapsody</i>, <i>My Way</i>, e almeno una giapponese ('Ue wo Muite Arukou'). Urliamo. Ridiamo. È per questo che siamo qui.<br><b>Budget per 3:</b> ~10,000-12,000 yen totali",
        maps: "https://www.google.com/maps/search/?api=1&query=Karaoke+Kan+Shibuya",
        image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 3, date: "21 Mar", title: "TeamLab + Odaiba + Bar BenFiddich", location: "Tokyo", tag: "Futuro & Cocktail", icon: "\u{1F52E}",
    timeline: [
      { time: "10:00", title: "teamLab Planets — L'esperienza più immersiva (prenotato!)",
        detail: "Un museo dove camminiamo nell'arte. Letteralmente. Piedi nudi nell'acqua, luci, specchi, fiori digitali. È l'esperienza più Instagrammabile del Giappone — ma è anche genuinamente bellissima.<br><br><b>Prenotazione obbligatoria</b> su teamlabplanets.dmm.com. ~3,800-4,800 yen (prezzo dinamico). Arriviamo 15 min prima. <b>Pantaloni:</b> corti o arrotolabili — cammineremo nell'acqua fino alle ginocchia. Zaini nei locker gratuiti, solo telefono (waterproof case consigliata).<br><br>Non corriamo. La stanza dell'<b>acqua infinita con le carpe koi</b> è la più iconica — restiamoci almeno 10 minuti. Il <b>giardino dei fiori</b> alla fine è pazzesco per foto.<br><b>Tempo:</b> 2 ore",
        maps: "https://maps.app.goo.gl/x9FvDfd7Y3K8Z5mM9",
        image: "/itinerary/tokyo-future.svg" },
      { time: "13:00", title: "Pranzo a Tsukiji/Toyosu",
        detail: "Siamo vicini a Toyosu, dove si è spostato il vecchio mercato del pesce. Per mangiare il meglio:<br><br><b>Opzione 1 — Tsukiji Outer Market</b> (il mercato esterno è ancora attivo): <i>Sashimi freschissimo</i> sui banchi — tonno, salmone, <i>uni</i> (riccio di mare). <i>Tamago-yaki</i> (frittata dolce su stecco, ~300 yen). <i>Gyudon</i> (ciotola di riso e manzo) da uno dei chioschi.<br><br><b>Opzione 2 — Ramen vicino Toyosu:</b> un buon ramen costa ~1,000-1,200 yen ed è il pranzo perfetto.",
        maps: "https://www.google.com/maps/search/?api=1&query=Tsukiji+Outer+Market",
        image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&h=400&fit=crop" },
      { time: "14:30", title: "Odaiba — Tokyo futuristica",
        detail: "Prendiamo il <b>Yurikamome</b> (treno sopraelevato automatico — sì, senza conducente) verso Odaiba. Passeggiata lungo la baia con vista sulla <b>Rainbow Bridge</b> e lo skyline. <b>Unicorn Gundam</b> a grandezza naturale davanti al DiverCity — alto 20 metri, si muove a orari prestabiliti. Anche se non ci interessa, è impressionante.<br><br>Se abbiamo voglia di follia: <b>Joypolis</b> — parco giochi indoor di Sega con VR e giochi arcade.<br><br><b>Serve per:</b> vedere una Tokyo completamente diversa. Moderna, spaziosa, futuristica.<br><b>Tempo:</b> 2-3 ore",
        maps: "https://www.google.com/maps/search/?api=1&query=Unicorn+Gundam+Statue+Odaiba",
        image: "/itinerary/tokyo-future.svg" },
      { time: "20:30", title: "Bar BenFiddich — L'Esperienza",
        detail: "Numero 18 nella classifica <b>World's 50 Best Bars</b>. Il bartender <b>Hiroyasu Kayama</b> coltiva le erbe nel suo giardino, macina spezie al momento, e crea ogni cocktail su misura. Non esiste un menu.<br><br><b>Prenotazione OBBLIGATORIA</b> — via TableCheck. 3 slot: 19:00-20:50, 21:00-22:50, 23:00-00:50. Prendiamo il secondo. Location: 9° piano, Yamatoya Building, Nishi-Shinjuku. Niente insegna fuori. <b>Dress code:</b> smart casual. Solo <b>15 posti</b> — prenotare settimane prima.<br><br>Ci sediamo al bancone davanti a Kayama. Gli diciamo cosa ci piace — creerà qualcosa solo per noi. Mortaio, erbe fresche, tecniche uniche. 2-3 cocktail a testa, ~3,000-4,500 yen l'uno.<br><b>Budget per 3:</b> ~25,000-35,000 yen<br><br><b>Questo è uno di quei posti che racconteremo per sempre.</b>",
        maps: "https://maps.app.goo.gl/5Z5M6vFQ1mLq3U6z8",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 4, date: "22 Mar", title: "Nikko — Templi nella foresta", location: "Nikko", tag: "Escursione Must", icon: "\u26E9\uFE0F",
    timeline: [
      { time: "07:30", title: "Treno Tobu da Asakusa verso le montagne",
        detail: "Oggi usciamo da Tokyo. <b>Treno Tobu</b> dalla stazione di Asakusa → Tobu-Nikko. <b>Limited Express Spacia X:</b> ~2 ore, 2,850-3,540 yen (il più comodo, sedili riservati). Oppure espresso + locale: ~2.5 ore, ~1,400 yen.<br><br><b>Consiglio:</b> compriamo il <b>Nikko World Heritage Area Pass</b> (3,000 yen) — include treno A/R + bus locali nell'area dei templi. Si compra alla stazione Tobu Asakusa.<br><br>Nikko è patrimonio UNESCO. Templi dorati nascosti in una foresta di cedri millenari. Atmosfera completamente diversa da Tokyo — mistica, silenziosa, potente.",
        maps: "https://www.google.com/maps/search/?api=1&query=Nikko+Station",
        image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&h=400&fit=crop" },
      { time: "10:00", title: "Toshogu Shrine — Il tempio più decorato del Giappone",
        detail: "Il mausoleo dello shogun Tokugawa Ieyasu. Oro, intagli, colori vivaci in mezzo alla foresta di cedri. Completamente diverso dai templi minimalisti di Kyoto.<br><br><b>Cosa vedere:</b><br>1. <b>Yomeimon Gate</b> — 'la porta del tramonto'. Talmente bella che dicono potresti guardarla fino al tramonto senza stancarti. Migliaia di intagli dettagliati.<br>2. <b>Le 3 scimmie</b> (non vedo, non sento, non parlo) — scolpite sulla stalla sacra.<br>3. <b>Il gatto dormiente (Nemuri Neko)</b> — piccolo, nascosto sopra un portale. Cerchiamolo.<br>4. <b>Il corridoio dei 200 lanterne di pietra</b> — camminiamoci in silenzio.<br>5. Saliamo le scale fino alla <b>tomba di Tokugawa</b> — in mezzo al bosco.<br><br><b>Biglietto:</b> ~1,300 yen | <b>Tempo:</b> 2-2.5 ore",
        maps: "https://maps.app.goo.gl/6QvVZb9h5Y7uLw8a9",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=400&fit=crop" },
      { time: "13:00", title: "Pranzo + Shinkyo Bridge",
        detail: "<b>Pranzo:</b> Proviamo lo <i>yuba</i> — la specialità di Nikko. È la 'pelle' del latte di soia, servita fresca in vari modi. Sembra strano ma è buonissimo. ~1,500-2,000 yen nei ristoranti vicino ai templi.<br><br><b>Shinkyo Bridge</b> — Ponte sacro rosso sul fiume. Non serve pagare per attraversarlo — basta la foto dal lato. Poi camminiamo lungo il fiume, ci godiamo la foresta.",
        maps: "https://maps.app.goo.gl/XnVsz3J5nBL5C8GNA",
        image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=400&fit=crop" },
      { time: "15:30", title: "Kegon Falls (opzionale) + rientro",
        detail: "<b>Kegon Falls</b> — Una delle 3 cascate più famose del Giappone. 97 metri di caduta. C'è un ascensore che scende alla base (~570 yen). Spettacolare ma richiede ~1 ora extra di bus da Nikko.<br><br><b>Se siamo stanchi:</b> saltiamo Kegon e godiamoci Nikko con calma. Prendiamo il treno delle 16-17 per tornare a Tokyo.<br><br><b>Cena a Tokyo:</b> <i>Tonkatsu</i> da <b>Maisen</b> a Omotesando (~1,800 yen, leggendario) | <i>Conveyor belt sushi</i> (sushi rotante, ~2,000-3,000 yen) | <i>Konbini dinner</i> al 7-Eleven — sì, è un'esperienza legittima. Proviamo il <i>katsu sando</i>, <i>nikuman</i> e un Strong Zero.",
        maps: "https://maps.app.goo.gl/YvM5V7uX8p9Qz3nL6",
        image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 5, date: "23 Mar", title: "Tokyo local + Akihabara + Sushi della vita", location: "Tokyo", tag: "Nerd & Omakase", icon: "\u{1F47E}",
    timeline: [
      { time: "10:00", title: "Ameyoko Market — Il mercato caotico",
        detail: "Il mercato di strada più caotico di Tokyo. Nato come mercato nero del dopoguerra, oggi è un mix di street food, vestiti, spezie e caos puro.<br><br><b>Cosa fare:</b> <i>Street food</i> — frutta fresca con cioccolato (~500 yen), spiedini di carne, takoyaki. <i>Fresh seafood</i> — banchi con ricci di mare, granchi, sashimi da mangiare sul posto. Compriamo souvenir: tè giapponese, dolci, spezie — prezzi migliori che nei negozi.<br><br>L'atmosfera è tipo mercato di strada asiatico — venditori che urlano, gente ovunque.<br><b>Tempo:</b> 1.5-2 ore",
        maps: "https://maps.app.goo.gl/3NuiRqvbXqe6j42LA",
        image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&h=400&fit=crop" },
      { time: "12:30", title: "Akihabara — La Capitale Nerd",
        detail: "Anche se non siamo nerd, Akihabara è un'esperienza. Palazzi interi di arcade, manga, figure, elettronica.<br><br><b>Cosa fare assolutamente:</b><br>• <b>GiGO Arcade</b> — giochi di ritmo, claw machines, giochi assurdi. Almeno 1 ora qui.<br>• <b>Taito Station</b> — Proviamo <i>Taiko no Tatsujin</i> (tamburi).<br>• <b>Super Potato</b> — negozio retrogaming leggendario. NES, SNES, Game Boy. Anche se non compriamo, è un museo.<br>• <b>Don Quijote (Donki)</b> — il discount store più folle del Giappone. 7 piani: snack, gadget, Kit-Kat gusti assurdi (matcha, sake, fragola). Compriamo Kit-Kat come souvenir.<br>• <b>Maid café</b> (opzionale ma cringe obbligatorio) — ci chiameranno 'Master'. Content imbarazzante garantito.<br><br><b>Budget:</b> ~3,000-5,000 yen (giochi + snack + souvenir)",
        maps: "https://maps.app.goo.gl/kL8E8oUKBvYJFD2g8",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=400&fit=crop" },
      { time: "16:00", title: "Tempo libero — ultimi giri a Tokyo",
        detail: "Ultime ore libere a Tokyo. Opzioni:<br><br>• Shopping last-minute a Shibuya o Shinjuku<br>• Rilassarci in un <i>kissaten</i> (caffè tradizionale) — proviamo il café au lait e un toast spesso<br>• Tornare in un posto che ci è piaciuto particolarmente<br>• <b>Sento</b> (bagno pubblico, ~500 yen) — esperienza locale autentica. Stesso protocollo dell'onsen: nudi, lavarsi prima, poi vasca calda",
        maps: "https://www.google.com/maps/search/?api=1&query=Shinjuku+Tokyo",
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=400&fit=crop" },
      { time: "20:00", title: "Sushi Omakase — La cena della vita (prenotato!)",
        detail: "L'esperienza culinaria definitiva del viaggio. Sushi al bancone, chef davanti a noi, pesce tagliato al momento. Silenzio. Concentrazione. Arte.<br><br><b>Come funziona:</b> 'Omakase' significa 'mi affido a te'. Lo chef decide tutto. Ci sediamo al bancone (3 posti di fila perfetti per noi). Il pesce arriva un pezzo alla volta — lo mangiamo appena servito. Il riso è tiepido, il pesce a temperatura perfetta. <b>Non mettiamo wasabi:</b> lo chef l'ha già messo. Non affoghiamo il sushi nella soia — un tocco leggero solo sulla parte del pesce. 12-15 pezzi + qualche extra.<br><br><b>Dove:</b> Fascia 15,000-25,000 yen a testa. <i>Sushi Sho</i> (Yotsuya, eccellente) | Omakase a Tsukiji (~10,000-15,000 yen, ottima qualità).<br><b>Pro tip:</b> Prenotare 2-3 settimane prima. Molti accettano prenotazioni solo in giapponese — chiediamo al nostro hotel.<br><br><b>Questa sera la ricorderemo per sempre.</b>",
        maps: "https://www.google.com/maps/search/?api=1&query=Ginza+Sushi+Omakase",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 6, date: "24 Mar", title: "Hakone Loop + Ryokan + Onsen", location: "Hakone", tag: "Esperienza Top", icon: "\u2668\uFE0F",
    timeline: [
      { time: "08:00", title: "Romancecar per Hakone",
        detail: "<b>Romancecar</b> da Shinjuku → Hakone-Yumoto: ~85 minuti, ~2,330 yen (treno panoramico, sedili riservati). Oppure usiamo il <b>Hakone Free Pass</b> (6,100 yen per 2 giorni) — include il Romancecar base + TUTTI i trasporti a Hakone (bus, funivia, battello, cremagliera). Si compra alla stazione di Shinjuku (Odakyu).<br><br>Hakone è il contrappeso perfetto dopo 5 giorni di Tokyo. Montagne, laghi, vapore vulcanico, e soprattutto l'<b>onsen</b>. Questo è il momento più autentico del viaggio.",
        maps: "https://www.google.com/maps/search/?api=1&query=Hakone+Yumoto",
        image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&h=400&fit=crop" },
      { time: "10:30", title: "Hakone Loop — Il giro completo",
        detail: "Circuito che ci porta attraverso tutti i punti principali. Facciamolo in senso antiorario:<br><br><b>1. Treno a cremagliera</b> (Hakone-Yumoto → Gora, ~40 min) — sale la montagna attraverso la foresta. Sediamoci a destra.<br><b>2. Funicolare</b> (Gora → Sounzan, 10 min) — salita ripida.<br><b>3. Funivia</b> (Sounzan → Owakudani) — attraversa la <b>Valle Vulcanica</b>. Fumarole, vapore sulfureo, paesaggio lunare.<br><br><b>A Owakudani:</b> compriamo le <i>kuro-tamago</i> (uova nere, ~500 yen per 5) — cotte nella sorgente sulfurea. Ogni uovo allunga la vita di 7 anni. Vista sul <b>Monte Fuji</b> se il cielo è sereno.<br><br><b>4. Funivia</b> → Togendai.<br><b>5. Battello pirata</b> sul Lago Ashi (~30 min) — se il cielo è limpido, vista del Fuji riflesso nel lago. LA foto del viaggio.<br><b>6. Hakone Shrine</b> — il famoso <b>torii rosso nell'acqua</b>. Foto iconica. Il santuario è nella foresta di cedri.<br><br><b>Tempo totale:</b> ~5-6 ore (tutto incluso nel Free Pass)",
        maps: "https://maps.app.goo.gl/8ZcBNPgn4vqdwYWE8",
        image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=400&fit=crop" },
      { time: "18:00", title: "Ryokan + Onsen + Kaiseki — Il momento più giapponese",
        detail: "L'esperienza che ricorderemo di più. Un bagno termale all'aperto (rotenburo), circondati dalle montagne.<br><br><b>Come funziona l'onsen:</b><br>1. Togliamo TUTTO — è <b>nudo</b>. Nessuna eccezione. Non facciamoci problemi, siamo tra uomini.<br>2. Ci laviamo PRIMA di entrare (docce/sgabelli prima della vasca) — obbligatorio.<br>3. L'asciugamano piccolo in testa, MAI nell'acqua.<br>4. Entriamo lentamente — l'acqua è 40-42°C.<br>5. Rilassiamoci. Silenzio. Guardiamo le montagne. Questo è il Giappone.<br><br><b>Tattoo?</b> Cerchiamo ryokan con <i>kashikiri</i> (bagno privato per gruppi) — perfetto per 3 amici. Oppure onsen tattoo-friendly (Hakone Yuryo, verificare).<br><br><b>Cena kaiseki</b> (multi-portata tradizionale) spesso inclusa nel ryokan. Dormiamo in yukata (kimono leggero). Svegliamoci presto per un secondo bagno all'alba.<br><b>Budget ryokan:</b> ~15,000-20,000 yen a testa",
        maps: "https://www.google.com/maps/search/?api=1&query=Hakone+Ryokan",
        image: "https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 7, date: "25 Mar", title: "Fushimi Inari all'alba + Kyoto piena", location: "Kyoto", tag: "Cultura Pura", icon: "\u{1F3EF}",
    timeline: [
      { time: "06:00", title: "Shinkansen + Fushimi Inari all'alba",
        detail: "Hakone-Yumoto → Odawara (treno, 15 min) → <b>Shinkansen</b> Odawara → Kyoto (~2 ore, coperto dal JR Pass!). Attiviamo il JR Pass oggi.<br><br>Appena arriviamo a Kyoto andiamo dritti a <b>Fushimi Inari</b>. 10,000 torii arancioni che formano un tunnel sulla montagna. All'alba è VUOTO. Arriviamo entro le 6:00-6:30 — il santuario è aperto 24/7, gratis. I primi 15-20 minuti i torii sono praticamente per noi. Dopo le 8 diventa un incubo.<br><br><b>Non fermiamoci alle prime 100 porte</b> — tutti lo fanno. Continuiamo a salire. Almeno fino a <b>Yotsutsuji</b> (~45 min) — vista su tutta Kyoto.<br><br><b>Il silenzio tra i torii all'alba è una delle esperienze più potenti del viaggio.</b>",
        maps: "https://maps.app.goo.gl/bR9PdCdqxkTN8DPT8",
        image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&h=400&fit=crop" },
      { time: "10:00", title: "Nishiki Market — La cucina di Kyoto",
        detail: "400 metri di bancarelle coperte col meglio del cibo locale.<br><br><b>Cosa mangiare:</b><br>• <i>Dashimaki tamago</i> — frittata soffice cotta nel dashi. Il migliore al banco di Marutama.<br>• <i>Mochi fresco</i> — con matcha o anko.<br>• <i>Yuba</i> — servita fresca, diversa da Nikko.<br>• <i>Sake tasting</i> — diversi banchi offrono degustazioni per ~300-500 yen (3-5 assaggi).<br>• <i>Tako tamago</i> — un polpo intero piccolo con dentro un uovo di quaglia, su stecco (~400 yen).<br><br><b>Tempo:</b> 1-1.5 ore | <b>Budget:</b> ~2,000 yen",
        maps: "https://maps.app.goo.gl/pv2jT1VrBMVcDPkr5",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&h=400&fit=crop" },
      { time: "12:00", title: "Kinkaku-ji — Il Padiglione d'Oro",
        detail: "Il tempio ricoperto d'oro che si riflette nel lago. Dal vivo è ancora più impressionante. <b>Biglietto:</b> 500 yen — ci danno un biglietto che è un talismano calligrafico, teniamolo come souvenir. Il percorso è obbligato (~30-45 min). La foto migliore è dal primo punto di osservazione — il tempio riflesso nel lago. Prendiamo un <i>matcha con dolcetto</i> nella casa del tè (~500 yen).<br><b>Tempo:</b> 1 ora",
        maps: "https://maps.app.goo.gl/H7K3HKdE5Ny7WJCR6",
        image: "/itinerary/kyoto-classic.svg" },
      { time: "14:00", title: "Arashiyama — Bambù e Scimmie",
        detail: "La foresta di bambù. Uno dei posti più iconici del Giappone. Camminiamo nel <b>Bamboo Grove</b> — il suono del vento tra i bambù è ipnotico. Il sentiero è corto (~500m) ma bellissimo. <b>Continuiamo oltre</b> la folla verso l'<b>Okochi Sanso Garden</b> (1,000 yen) — giardino meno visitato con vista spettacolare e matcha incluso.<br><br>Camminiamo verso il fiume fino al <b>Togetsukyo Bridge</b> — ponte iconico con le montagne dietro.<br><br><b>Bonus: Monkey Park Iwatayama</b> — 15 min di salita e poi 120+ scimmie libere in cima. Vista panoramica su Kyoto. ~550 yen. Diamo da mangiare alle scimmie (dall'interno di una gabbia — noi dentro, loro fuori).<br><b>Tempo:</b> 3-4 ore per tutto Arashiyama",
        maps: "https://maps.app.goo.gl/1qKBa8XuXM5JCGkz9",
        image: "/itinerary/kyoto-classic.svg" },
      { time: "19:00", title: "Gion + Pontocho — Cena e geisha",
        detail: "Il quartiere più elegante di Kyoto. Strade di pietra, lanterne, case di legno tradizionali.<br><br>Camminiamo lungo <b>Hanami-koji</b>. Se vediamo una geisha o maiko, NON le blocchiamo, NON le tocchiamo. Possiamo fotografarle di sfuggita ma con rispetto. Esploriamo i vicoli laterali — <b>Shirakawa</b> lungo il canale con i salici è magico la sera.<br><br><b>Cena a Pontocho Alley</b> — vicolo stretto parallelo al fiume Kamogawa. Scegliamo uno con affaccio sul fiume. Proviamo: <i>obanzai</i> (cucina casalinga di Kyoto, ~2,500-3,500 yen) oppure <i>shabu-shabu</i> (manzo sottile cotto nel brodo).",
        maps: "https://maps.app.goo.gl/xFUi6PSQRvUb2UEq5",
        image: "/itinerary/kyoto-classic.svg" }
    ]
  },
  {
    day: 8, date: "26 Mar", title: "Kiyomizu-dera + Filosofia + Cocktail", location: "Kyoto", tag: "Templi & Bar", icon: "\u{1F376}",
    timeline: [
      { time: "09:00", title: "Kiyomizu-dera — Il tempio sulla scogliera",
        detail: "Un tempio di legno costruito sulla parete di una collina, senza un singolo chiodo. La terrazza sospesa nel vuoto con vista su Kyoto è mozzafiato.<br><br><b>Come arrivarci nel modo giusto:</b> Saliamo da <b>Ninenzaka</b> e poi <b>Sannenzaka</b> — due stradine con case tradizionali, negozi di ceramica, dolci e tè. QUESTA è Kyoto. Entriamo nei negozi di <b>ceramica Kiyomizu-yaki</b> — tazza fatta a mano come souvenir (~1,500-3,000 yen).<br><br>Al tempio: la terrazza principale è la star. Se siamo a fine marzo, potremmo vedere i primi sakura. Beviamo alla <b>Fontana Otowa</b> — 3 cascatelle: successo, amore, longevità. Scegliamo UNA (berne di più è considerato avido).<br><b>Biglietto:</b> 400 yen | <b>Tempo totale:</b> 2-3 ore",
        maps: "https://maps.app.goo.gl/EePZxiWFG8Xf1Dck7",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=400&fit=crop" },
      { time: "12:00", title: "Philosopher's Path — La passeggiata contemplativa",
        detail: "2 km di sentiero lungo un canale, fiancheggiato da centinaia di ciliegi. A fine marzo i primi fiori potrebbero già essere aperti.<br><br>Camminiamo con calma. Non è una destinazione, è il percorso stesso l'esperienza. Lungo il sentiero ci sono piccoli templi e caffè nascosti. Ci fermiamo per un <i>matcha latte</i> in uno dei cafeteria lungo il percorso.<br><b>Tempo:</b> 1-1.5 ore",
        maps: "https://maps.app.goo.gl/G7gDTrZrFSsPaHCe8",
        image: "/itinerary/kyoto-classic.svg" },
      { time: "14:00", title: "Pranzo + Pomeriggio libero",
        detail: "<b>Ramen a Kyoto:</b> <i>Ippudo Kyoto</i> — tonkotsu cremoso, ~1,000 yen. Oppure <i>Menbakaichidai</i> — il 'ramen di fuoco': il cameriere versa olio bollente e si alza una fiammata. Spettacolare. ~900 yen.<br><br><b>Pomeriggio:</b><br>• <b>Shopping a Teramachi/Shinkyogoku</b> — vie coperte con negozi e souvenir<br>• <b>Ceremonia del tè</b> — 45-60 min (~2,000-3,000 yen). Ci insegnano il rituale, prepariamo il tè noi stessi<br>• <b>Sake tasting a Fushimi</b> — il quartiere del sake a sud. <i>Gekkeikan Okura Sake Museum</i> (400 yen, include assaggi)",
        maps: "https://www.google.com/maps/search/?api=1&query=Teramachi+Kyoto",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=400&fit=crop" },
      { time: "20:00", title: "Cocktail bar Kyoto",
        detail: "Kyoto ha una scena cocktail sottovalutata:<br><br>• <b>Bar Bees Knees</b> — cocktail d'autore in ambiente intimo, Gion<br>• <b>Bar K6</b> — classico, elegante, uno dei bar più antichi di Kyoto. Kiyamachi area<br>• <b>Nokishita 711</b> — atmosfera moderna, creativi, ottimo per un gruppo di amici<br><br><b>Budget serata:</b> ~5,000-8,000 yen a testa",
        maps: "https://www.google.com/maps/search/?api=1&query=Bar+K6+Kyoto",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 9, date: "27 Mar", title: "Esperienza culturale + si parte per Osaka", location: "Kyoto \u2192 Osaka", tag: "Transizione", icon: "\u{1F685}",
    timeline: [
      { time: "09:00", title: "Mattina — Esperienza culturale",
        detail: "<b>Opzione 1 — Ryoan-ji:</b> il giardino zen di roccia più famoso del mondo (~500 yen). 15 rocce, sabbia rastrellata. Sediamoci e guardiamolo in silenzio per 10 minuti. Poi passeggiamo nel giardino circostante.<br><br><b>Opzione 2 — Cooking class:</b> Impariamo a preparare ramen, sushi o okonomiyaki (~5,000-8,000 yen, 2-3 ore). Prenotare su Airbnb Experiences o cookly.me. Un'esperienza perfetta per 3 amici e un ricordo che ci portiamo a casa.",
        maps: "https://www.google.com/maps/search/?api=1&query=Ryoan-ji+Kyoto",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=400&fit=crop" },
      { time: "13:00", title: "Treno per Osaka — 15 minuti e cambia tutto",
        detail: "<b>Shinkansen</b> Kyoto → Shin-Osaka: <b>15 minuti</b>. Sì, quindici. Coperto dal JR Pass. Oppure treno JR locale: ~30 min, coperto dal JR Pass.<br><br>Osaka è il contrario di Kyoto. Rumorosa, diretta, mangereccia, divertente. I locali dicono <i>kuidaore</i> — mangiare fino a crollare. Ed è esattamente quello che faremo.",
        maps: "https://www.google.com/maps/search/?api=1&query=Osaka+Station",
        image: "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?w=800&h=400&fit=crop" },
      { time: "18:00", title: "Dotonbori — Lo street food più iconico del Giappone",
        detail: "Neon giganti, insegne 3D (granchio meccanico, pufferfish, l'uomo Glico), canale illuminato, e CIBO ovunque. La regola: non prenootiamo niente. Camminiamo e mangiamo.<br><br><b>OBBLIGATORIO:</b><br>1. <i>Takoyaki</i> (polpette di polpo) — <b>Wanaka</b> o <b>Kukuru</b>, ~600 yen per 8 pezzi. Proviamo entrambi.<br>2. <i>Okonomiyaki</i> — <b>Mizuno</b> (leggendario, fila ma vale). ~1,200-1,800 yen.<br>3. <i>Kushikatsu</i> (spiedini fritti) — <b>Regola sacra:</b> NON doppio tuffo nella salsa comune. MAI. ~100-200 yen a spiedino.<br>4. <i>Gyoza</i> — cerchiamo quelli croccanti fritti.<br><br><b>Beviamo:</b> <i>Highball</i> (whisky + soda), birra alla spina, Strong Zero per le passeggiate. Foto sul <b>Ebisubashi Bridge</b> con l'uomo Glico dietro — LA foto di Osaka.<br><b>Budget:</b> ~3,000-5,000 yen a testa",
        maps: "https://maps.app.goo.gl/WkzYeNjkH9SbghXm6",
        image: "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 10, date: "28 Mar", title: "Scegliamo l'avventura: Hiroshima o Osaka chill", location: "Scelta Libera", tag: "Scelta Libera", icon: "\u{1F914}",
    timeline: [
      { time: "07:30", title: "Opzione A — Hiroshima + Miyajima",
        detail: "Se abbiamo le energie e vogliamo un'esperienza che ci segna per la vita. Shinkansen Shin-Osaka → Hiroshima, ~1 ora 30 min (coperto dal JR Pass).<br><br><b>Hiroshima Peace Memorial Park:</b> Il 6 agosto 1945, la prima bomba atomica. Oggi il parco sorge esattamente nel punto dell'esplosione. <b>A-Bomb Dome</b> — lo scheletro sopravvissuto. Patrimonio UNESCO. <b>Peace Memorial Museum</b> (~200 yen) — racconta la storia. Preparamoci emotivamente. È duro ma essenziale. <b>Cenotafio</b> — 220,000 nomi delle vittime. <b>Fiamma della Pace</b> — brucia dal 1964, verrà spenta solo quando l'ultima arma nucleare sarà distrutta.<br><br>Come viverla: in silenzio, con rispetto. Non è turismo. È testimonianza.<br><b>Tempo:</b> 2-2.5 ore",
        maps: "https://maps.google.com/?q=Hiroshima+Peace+Memorial+Park",
        image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&h=400&fit=crop" },
      { time: "12:00", title: "Pranzo Hiroshima + Miyajima",
        detail: "<b>Pranzo:</b> <i>Hiroshima-style okonomiyaki</i> — diverso da Osaka! Qui gli strati sono separati (noodles, cavolo, uovo, maiale). Cerchiamo l'<b>Okonomimura</b> (24 ristoranti su 3 piani). ~1,000-1,500 yen.<br><br><b>Miyajima (13:30)</b> — Treno JR → Miyajimaguchi (~30 min) + traghetto JR (~10 min), tutto coperto dal JR Pass. L'isola sacra col famoso <b>torii galleggiante</b> rosso nell'acqua — una delle 3 viste più iconiche del Giappone. Alto 16 metri. Ad alta marea galleggia, a bassa marea ci camminiamo sotto. Controlliamo le maree!<br><br><b>Itsukushima Shrine</b> (~300 yen) — santuario su palafitte sull'acqua. Cervi in libertà ovunque. <i>Momiji Manju</i> — dolcetto a forma di foglia d'acero (~200 yen). Se c'è tempo: funivia sul <b>Monte Misen</b> (~1,800 yen A/R).<br><b>Rientro a Osaka:</b> ~20:00",
        maps: "https://maps.google.com/?q=Itsukushima+Shrine",
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=400&fit=crop" },
      { time: "10:00", title: "Opzione B — Osaka chill + fun day",
        detail: "Se dopo 10 giorni vogliamo respirare, divertirci e goderci Osaka come dei locali. Dormiamo fino a tardi. Ce lo meritiamo.<br><br><b>Brunch al Kuromon Market</b> — sashimi fresco, wagyu su stecco, frutta premium. Mangiamo con calma.<br><br><b>Osaka Castle</b> — A fine marzo è uno dei migliori spot per i primi sakura. Birra + picnic sotto i ciliegi è un'esperienza molto giapponese. Il castello è imponente dall'esterno. Interno (~600 yen) opzionale.<br><br><b>Amerikamura</b> — vintage shops, street art, sneakers, caffè cool. Il quartiere più underground di Osaka. Poi <b>Shinsaibashi</b> — shopping coperto infinito. Ultimo giro Don Quijote per souvenir. Tax-free sopra 5,000 yen (portiamo il passaporto!).<br><br><b>Sera:</b> <b>Shinsekai</b> per kushikatsu da <b>Daruma</b> + <b>Spa World</b> (opzionale, ~1,500 yen) mega onsen con zone tematiche.",
        maps: "https://maps.google.com/?q=Kuromon+Market+Osaka",
        image: "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 11, date: "29 Mar", title: "Nara: cervi sacri + Buddha gigante", location: "Nara / Osaka", tag: "Cervi & Templi", icon: "\u{1F98C}",
    timeline: [
      { time: "08:30", title: "Treno per Nara — Day trip magico",
        detail: "Treno JR da Osaka → Nara, ~45 min, ~570 yen (coperto dal JR Pass). Nara è stata la primissima capitale del Giappone (710-784). Oggi è famosa per i <b>cervi sacri</b> che girano liberi — 1,200+ cervi tra templi e turisti.",
        maps: "https://maps.app.goo.gl/vKRuVqK8Z7VCWCCM9",
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=400&fit=crop" },
      { time: "09:30", title: "I Cervi di Nara Park + Todai-ji",
        detail: "<b>I cervi:</b> Compriamo i <i>shika senbei</i> (cracker, ~200 yen). Quando mostriamo il cracker, il cervo si inchina — inchiniamoci anche noi e poi diamoglielo. Nascondiamo i cracker dopo averli comprati — i cervi sono furbi e insistenti. Ci circonderanno.<br><br><b>Todai-ji</b> — L'edificio in legno più grande del mondo. Dentro c'è un <b>Buddha di bronzo alto 15 metri</b>. Quando entriamo, la scala ci colpirà fisicamente.<br><br><b>La sfida del pilastro:</b> uno dei pilastri ha un buco alla base grande quanto la narice del Buddha (~30x37cm). Se riusciamo a passarci attraverso, ci porta fortuna. Proviamoci, ridiamo, facciamo video.<br><b>Biglietto:</b> 600 yen | <b>Tempo:</b> 45-60 min",
        maps: "https://maps.app.goo.gl/RWCRvkNhU9JbHYcH8",
        image: "/itinerary/nara-deer.svg" },
      { time: "12:00", title: "Kasuga Taisha + Pranzo",
        detail: "Camminiamo attraverso il parco verso <b>Kasuga Taisha</b> — il santuario con migliaia di <b>lanterne di pietra</b> coperte di muschio. Atmosfera da film Ghibli.<br><br><b>Pranzo:</b> <i>Kakinoha-zushi</i> (sushi avvolto in foglia di cachi, specialità locale) ~800-1,200 yen.<br><b>Tempo totale Nara:</b> 4-5 ore, poi torniamo a Osaka nel primo pomeriggio.",
        maps: "https://maps.app.goo.gl/FZFBV4uQfX5x3BwM9",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=400&fit=crop" },
      { time: "16:00", title: "Pomeriggio Osaka + sera tranquilla",
        detail: "<b>Pomeriggio opzioni:</b><br>• <b>Kuromon Market</b> — sashimi fresco, wagyu su stecco (~1,000 yen), frutta premium<br>• <b>Amerikamura</b> — quartiere hip, vintage shops, street art<br>• <b>Osaka Castle</b> — il parco è bello e gratis, ottimo per sakura<br><br><b>Sera:</b> Dopo Nara e un pomeriggio in giro, serata tranquilla. Domani c'è USJ che richiede energie. Ceniamo in un ramen shop di quartiere e a letto presto. Chi propone di uscire viene ignorato.",
        maps: "https://maps.google.com/?q=Osaka+Castle",
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 12, date: "30 Mar", title: "Universal Studios Japan — Giornata blockbuster", location: "Osaka", tag: "Adrenalina Pura", icon: "\u{1F3A2}",
    timeline: [
      { time: "08:00", title: "USJ — Operazione militare (biglietti online!)",
        detail: "<b>Operazione militare.</b> Arriviamo ai cancelli un'ora prima. Apre alle 9:00 ma spesso prima. Appena aprono, camminiamo veloci dritti verso <b>Super Nintendo World</b> — è l'attrazione più richiesta e le code esplodono dopo le 10.<br><br><b>Biglietto:</b> ~8,600 yen 1-day pass. <b>Express Pass:</b> ~7,800-13,000+ yen extra — VALE OGNI CENTESIMO. Ci risparmia 2-3 ore di code. <b>Comprato online in anticipo</b> su usj.co.jp. Scarichiamo l'app USJ per i tempi di attesa in tempo reale.<br><br><b>IMPORTANTE:</b> USJ ha comunicato la fine delle vendite ai botteghini on-site. Senza biglietto online piangiamo fuori.",
        maps: "https://maps.app.goo.gl/y3kfj3aP6TL5wqVQ6",
        image: "https://images.unsplash.com/photo-1565402170291-8491f14678db?w=800&h=400&fit=crop" },
      { time: "09:00", title: "Super Nintendo World — Siamo dentro al gioco",
        detail: "Entriamo dal tubo verde come Mario. Compriamo il <b>Power-Up Band</b> (~3,800 yen) — braccialetto NFC per raccogliere monete, sbloccare sfide, combattere boss.<br><br><b>Mario Kart: Koopa's Challenge</b> — l'attrazione principale con AR headset. Lanciamo gusci rossi VERI mentre sterziamo. Una roba che in Europa ce la sogniamo. Poi <b>Yoshi's Adventure</b> — più tranquilla ma carina.<br><br>Pranzo: <b>Toadstool Cafe</b> se troviamo posto (prenotazione tramite app), altrimenti <b>Butterbeer</b> nel mondo di Harry Potter (~700 yen).",
        maps: "https://www.google.com/maps/search/?api=1&query=Super+Nintendo+World+USJ",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&h=400&fit=crop" },
      { time: "14:00", title: "Harry Potter + The Flying Dinosaur",
        detail: "<b>Harry Potter and the Forbidden Journey</b> — la seconda attrazione migliore del parco. <b>The Flying Dinosaur</b> — se ci piacciono le montagne russe, è brutale (in senso buono). A pancia in giù, loop pazzeschi.<br><br><b>Trucco:</b> fila 'Single Rider' per risparmiare 90 minuti di coda. Dopo: <b>Burrobirra ghiacciata</b> a Hogsmeade. Siamo uomini adulti al parco di Harry Potter. Nessun rimorso.<br><b>Tempo:</b> giornata intera, usciamo verso le 17-18",
        maps: "https://www.google.com/maps/search/?api=1&query=The+Flying+Dinosaur+USJ",
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&h=400&fit=crop" },
      { time: "19:00", title: "Shinsekai — L'Osaka old school",
        detail: "Il quartiere retro di Osaka. Insegne vintage, Tsutenkaku Tower illuminata. <b>Kushikatsu dinner</b> — qui è dove è nato. <b>Daruma</b> (catena storica, la statua arrabbiata fuori) o <b>Yaekatsu</b> (più autentico). Ordiniamo di tutto: gamberi, formaggio, asparagi, renkon, uova di quaglia. ~2,000-3,000 yen a testa.<br><br><b>Ricordiamo:</b> un solo tuffo nella salsa. MAI il doppio. È il peccato mortale di Osaka.<br><br><b>Spa World</b> (opzionale, ~1,500 yen) — mega onsen con zone tematiche. Perfetto dopo una giornata a USJ.",
        maps: "https://maps.app.goo.gl/dCq6KLn7KCVPFTtq7",
        image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 13, date: "31 Mar", title: "Ultimo giorno Osaka — Kuromon, castello e ultima sera", location: "Osaka", tag: "Gran Finale", icon: "\u{1F37E}",
    timeline: [
      { time: "09:00", title: "Kuromon Market — La colazione dei re",
        detail: "Il 'mercato della cucina di Osaka' — 600 metri di bancarelle coperte. Meglio la mattina presto quando il pesce è freschissimo.<br><br><b>Cosa mangiare:</b><br>• <i>Sashimi fresco</i> al banco — tonno otoro (la parte grassa), salmone, uni (riccio di mare). ~1,000-2,000 yen<br>• <i>Wagyu su stecco</i> — manzo giapponese alla griglia, si scioglie in bocca. ~1,000 yen<br>• <i>Frutta premium</i> — in Giappone la frutta è un'ossessione. Melone tagliato o fragole perfette. Caro ma un'esperienza<br>• <i>Unagi</i> (anguilla) alla griglia — dolce, caramellata, incredibile",
        maps: "https://maps.google.com/?q=Kuromon+Market+Osaka",
        image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&h=400&fit=crop" },
      { time: "11:00", title: "Osaka Castle + Sakura",
        detail: "Il castello a 5 piani domina un parco enorme — e a fine marzo il parco è uno dei migliori spot per i <b>sakura</b>. Il parco esterno è gratuito e bellissimo. Saliamo all'ultimo piano per la vista panoramica su Osaka (~600 yen).<br><b>Tempo:</b> 1.5-2 ore",
        maps: "https://maps.google.com/?q=Osaka+Castle",
        image: "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?w=800&h=400&fit=crop" },
      { time: "14:00", title: "Amerikamura + Shopping finale",
        detail: "<b>Amerikamura</b> — il quartiere giovane/underground. Vintage shops, street art, negozi di sneakers, caffè cool. Oppure: <b>Shinsaibashi</b> — la via dello shopping coperta più lunga di Osaka.<br><br><b>Don Quijote (Donki) Dotonbori</b> — ultimo giro per souvenir, Kit-Kat gusti assurdi (matcha, sake, wasabi, fragola), cosmetici giapponesi. Tax-free sopra 5,000 yen (portiamo il passaporto!).<br><br><b>Opzionale: Umeda Sky Building</b> (~1,500 yen) — osservatorio galleggiante, due torri collegate da un anello a 173 metri. Vista al tramonto spettacolare.",
        maps: "https://maps.google.com/?q=Umeda+Sky+Building",
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=400&fit=crop" },
      { time: "20:00", title: "L'ultima sera — Chiudiamo in grande",
        detail: "L'ultima sera del viaggio. Chiudiamo in grande.<br><br>1. <b>Cena:</b> <i>Yakiniku</i> (BBQ giapponese) — cuciniamo noi la carne wagyu sulla griglia. ~3,000-5,000 yen. Oppure ultimo round di street food a Dotonbori.<br>2. <b>Hozenji Yokocho</b> — vicolo nascosto con tempietto e ristorantini tradizionali. Atmosfera intima, perfetta per l'ultima sera.<br>3. <b>Bar hopping Namba/Shinsaibashi:</b> <i>Bar Nayuta</i> (cocktail creativi) + vicoli laterali pieni di bar nascosti.<br>4. <b>Late night:</b> konbini run finale — Strong Zero, onigiri, passeggiata sul canale di Dotonbori illuminato.<br><br><b>Brindisi finale: siamo 3 amici che hanno appena vissuto 14 giorni in Giappone. Questo è un ricordo per la vita.</b>",
        maps: "https://maps.app.goo.gl/WkzYeNjkH9SbghXm6",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=400&fit=crop" }
    ]
  },
  {
    day: 14, date: "1 Apr", title: "Partenza — Ultimi acquisti e arrivederci", location: "Osaka \u2192 KIX", tag: "Partenza", icon: "\u2708\uFE0F",
    timeline: [
      { time: "09:00", title: "Ultimi acquisti + checkout",
        detail: "Ultimo giro al konbini per snack da portare in aereo. Facciamo checkout e andiamo verso l'aeroporto con calma.<br><br><b>Da Osaka/Namba:</b> Treno <b>Nankai Rapit</b> → KIX, ~38 min, ~1,450 yen (treno futuristico, molto figo). Oppure: JR Haruka → KIX, ~50 min (coperto da JR Pass se ancora attivo).<br><br>Arriviamo <b>3 ore prima</b> del volo per shopping duty-free.",
        maps: "https://www.google.com/maps/search/?api=1&query=Kansai+International+Airport",
        image: "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?w=800&h=400&fit=crop" },
      { time: "11:00", title: "Shopping duty-free — L'ultimo colpo",
        detail: "<b>Cosa comprare all'ultimo:</b><br>• <i>Kit-Kat</i> gusti esclusivi (matcha, sake, strawberry cheesecake, ume)<br>• <i>Sake</i> — una bottiglia buona costa ~2,000-5,000 yen<br>• <i>Whisky giapponese</i> — Suntory, Nikka. Se troviamo qualcosa di buono, prendiamolo. In Italia costano il triplo<br>• <i>Snack dal konbini</i> — Tokyo Banana, Royce chocolate, castagne dolci<br>• <i>Ceramica</i> — se abbiamo comprato qualcosa a Kyoto, imballiamola bene<br><br>Ultimo sguardo al Giappone dal finestrino. 14 giorni, 3 amici, zero rimpianti. Un paio di chili in più, un buco nel conto in banca. Non importa. Ci torneremo. È una promessa tra uomini. Non stiamo piangendo, è il jetlag.",
        maps: "https://www.google.com/maps/search/?api=1&query=KIX+Duty+Free",
        image: "/itinerary/airport-last-call.svg" }
    ]
  }
];

export const prepData: PrepCategory[] = [
  {
    id: "trasporti", title: "Trasporti", icon: "\u{1F689}",
    items: [
      { title: "JR Pass 7 giorni", detail: "~50,000 yen (~310 EUR). Copre Shinkansen Tokyo\u2192Kyoto\u2192Osaka e treni JR locali. Attiviamolo il giorno in cui partiamo da Tokyo verso Kyoto per massimizzare l'uso." },
      { title: "IC Card (Suica)", detail: "Aggiungiamola su iPhone via Apple Wallet (cerchiamo 'Suica'). Funziona per metro, bus, konbini e distributori automatici. Se non abbiamo iPhone, compriamo la Welcome Suica alle macchinette in aeroporto." },
      { title: "Hakone Free Pass", detail: "~6,100 yen. Copre treno da Shinjuku + tutti i trasporti dentro Hakone (bus, funivia, battello). Compriamolo a Shinjuku Station." }
    ]
  },
  {
    id: "soldi", title: "Soldi", icon: "\u{1F4B4}",
    items: [
      { title: "Preleviamo yen al 7-Eleven ATM", detail: "Commissioni basse, accetta carte europee. Funziona sempre." },
      { title: "Almeno 30,000 yen in contanti a persona", detail: "Molti posti piccoli, bar e mercati accettano solo cash. Le carte contactless funzionano nei grandi store e catene, ma il cash \u00e8 ancora re in Giappone." }
    ]
  },
  {
    id: "connessione", title: "Connessione", icon: "\u{1F4F6}",
    items: [
      { title: "eSIM: Ubigi o Airalo", detail: "Attiviamola prima di partire. ~15-20 EUR per 10GB/15 giorni. Funziona subito all'atterraggio. Senza internet siamo tre scimmie perse." }
    ]
  },
  {
    id: "app", title: "App Essenziali", icon: "\u{1F4F1}",
    items: [
      { title: "Google Maps", detail: "Funziona perfettamente per trasporti e navigazione in Giappone." },
      { title: "Navitime for Japan Travel", detail: "Orari treni super precisi. Indispensabile per Shinkansen e treni locali." },
      { title: "Google Translate", detail: "Usiamo la fotocamera per tradurre menu e cartelli in tempo reale. Salvavita." },
      { title: "Tabelog", detail: "Il 'TripAdvisor giapponese' per ristoranti. Rating sopra 3.5 = eccellente." }
    ]
  },
  {
    id: "meteo", title: "Meteo Marzo", icon: "\u{1F326}\uFE0F",
    items: [
      { title: "Tokyo: 8-16\u00B0C", detail: "Giornate miti ma sere fresche. Vestiamoci a strati: t-shirt + felpa + giacca." },
      { title: "Kyoto/Osaka: 7-15\u00B0C", detail: "Simile, leggermente pi\u00F9 freddo. Possibilit\u00E0 di pioggia \u2192 portiamo una giacca impermeabile leggera." },
      { title: "Sakura", detail: "Se siamo fortunati, i primi fiori di ciliegio appaiono a fine marzo a Tokyo. Kyoto tipicamente 1 settimana dopo." }
    ]
  },
  {
    id: "etichetta", title: "Etichetta \u2014 Le 10 Regole d'Oro", icon: "\u{1F3AF}",
    items: [
      { title: "Non dare mance", detail: "\u00C8 considerato offensivo." },
      { title: "Scarpe fuori", detail: "Quando entriamo in templi, ryokan, certi ristoranti." },
      { title: "Non mangiare camminando", detail: "Fermiamoci per mangiare. \u00C8 una questione di rispetto." },
      { title: "Silenzio sui mezzi pubblici", detail: "Niente telefonate, volume basso. Sempre." },
      { title: "Fila ordinata", detail: "Sempre, ovunque. I giapponesi sono maestri di fila." },
      { title: "Bacchette: mai piantarle nel riso", detail: "Ricorda i funerali. Evitiamo anche di passare cibo da bacchette a bacchette." },
      { title: "Inchino leggero per ringraziare", detail: "Un piccolo inchino ogni volta che qualcuno ci aiuta. Funziona ovunque." },
      { title: "Non soffiarci il naso in pubblico", detail: "Andiamo in bagno. In Giappone tirare su col naso \u00E8 accettato, soffiarsi no." },
      { title: "Rifiuti in tasca", detail: "Quasi zero cestini in strada. Portiamo una busta." },
      { title: "Rispettiamo le geisha", detail: "Non tocchiamole, non blocchiamole per foto. Sono artiste che vanno a lavorare." }
    ]
  }
];

export const bonusExperiences: BonusExperience[] = [
  {
    title: "Go-Kart per le strade di Tokyo",
    location: "Tokyo", cost: "~10,000-12,000 yen", duration: "1-2 ore",
    detail: "L'esperienza pi\u00F9 folle. Guidiamo go-kart veri per le strade di Tokyo vestiti in costume (Mario, Luigi, qualsiasi cosa). Attraversiamo Shibuya Crossing in kart. La gente ci filma. \u00C8 surreale. <b>IMPORTANTE:</b> Serve la Patente di Guida Internazionale (IDP). Da fare in Italia prima, ~40 EUR in motorizzazione. Prenotiamo online almeno 3-4 giorni prima.",
    maps: "https://streetkart.com/en/",
    image: "/itinerary/tokyo-rides.svg"
  },
  {
    title: "Samurai Sword Cutting (Tameshigiri)",
    location: "Tokyo", cost: "~6,000-12,000 yen", duration: "1-1.5 ore",
    detail: "Impugniamo una katana vera e tagliamo bersagli di tatami sotto la guida di un maestro. Postura, impugnatura, tecnica di taglio. Poi tagliamo per davvero. Il pacchetto combo Samurai + Ninja (shuriken throwing) \u00E8 il pi\u00F9 divertente per 3 amici.",
    maps: "https://samuraininjamuseum.com/",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=400&fit=crop"
  },
  {
    title: "Tokyo Drift \u2014 Esperienza JDM",
    location: "Tokyo", cost: "~15,000-40,000 yen", duration: "2-4 ore",
    detail: "Ride-along su una drift car guidata da un pilota professionista, oppure guidiamo noi su circuito. Macchine JDM iconiche: Nissan Silvia, Toyota GT86, Mazda RX-7. Fast & Furious vibes reali. Bonus: il <i>Daikoku PA car meet</i> \u00E8 un raduno notturno di auto JDM. Gratuito, venerd\u00EC/sabato sera.",
    maps: "https://driftintokyo.com/",
    image: "/itinerary/tokyo-rides.svg"
  },
  {
    title: "Speakeasy segreti di Tokyo",
    location: "Tokyo", cost: "~2,000-4,000 yen/cocktail", duration: "Serata",
    detail: "Tokyo ha i bar nascosti pi\u00F9 folli del mondo. <b>A10 (Ebisu)</b> \u2014 ingresso dietro un armadietto. <b>MOSS Crossties</b> \u2014 ingresso dietro un distributore automatico. <b>Tokyo Confidential</b> \u2014 creato dalla #9 bartender pi\u00F9 influente al mondo. Alcuni richiedono prenotazione o password \u2014 controlliamo prima su Instagram.",
    maps: "https://www.google.com/maps/search/?api=1&query=A10+Bar+Ebisu",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=400&fit=crop"
  },
  {
    title: "Sake Brewery Tour \u2014 Fushimi",
    location: "Kyoto", cost: "~400-600 yen", duration: "1-2 ore",
    detail: "Il distretto di Fushimi ha alcune delle distillerie pi\u00F9 antiche del Giappone. Gekkeikan Okura Sake Museum o Kizakura Sake Brewery. Tour + degustazione. Compriamo una bottiglia di sake locale come souvenir \u2014 non si trova fuori dal Giappone.",
    maps: "https://www.google.com/maps/search/?api=1&query=Fushimi+Sake+District",
    image: "/itinerary/sake-brewery.svg"
  },
  {
    title: "Fugu \u2014 Il pesce potenzialmente letale",
    location: "Osaka", cost: "~2,000-15,000 yen", duration: "Cena",
    detail: "Osaka \u00E8 la capitale mondiale del fugu (pesce palla). S\u00EC, quello con la tossina che pu\u00F2 ucciderci se preparato male. Ma i cuochi hanno licenza speciale. Ordiniamo il <i>tecchiri</i> \u2014 hot pot di fugu in brodo di kombu con ponzu. Con sake caldo. L'esperienza perfetta per 3 amici coraggiosi. \u00C8 un rito di passaggio.",
    maps: "https://www.google.com/maps/search/?api=1&query=Fugu+Restaurant+Dotonbori",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=400&fit=crop"
  },
  {
    title: "Spa World \u2014 L'onsen pi\u00F9 folle del mondo",
    location: "Osaka", cost: "~1,500-2,500 yen", duration: "2-4 ore",
    detail: "Non \u00E8 un semplice onsen. \u00C8 un parco acquatico termale su 8 piani con zone a tema (terme romane, hammam, sauna finlandese). C'\u00E8 anche uno scivolo d'acqua sul tetto. Possibilit\u00E0 di restare tutta la notte. Verificare la policy tatuaggi prima.",
    maps: "https://www.google.com/maps/search/?api=1&query=Spa+World+Osaka",
    image: "https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?w=800&h=400&fit=crop"
  },
  {
    title: "Ruota panoramica Don Quijote \u2014 Dotonbori",
    location: "Osaka", cost: "~600 yen", duration: "15 min",
    detail: "Una ruota panoramica incastrata dentro un edificio nel mezzo di Dotonbori. Di notte con le luci neon sotto di noi. Il Don Quijote pi\u00F9 famoso del Giappone. ~15 minuti di giro.",
    maps: "https://www.google.com/maps/search/?api=1&query=Don+Quijote+Dotonbori",
    image: "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?w=800&h=400&fit=crop"
  }
];

export const tasksData: TaskData[] = [
  { id: 1, title: "Ryokan Hakone (la notte premium)", timeline: "Prima cosa da bloccare. 60+ giorni prima. Cerchiamo ryokan con kashikiri (bagno privato).", icon: "\u{1F3E8}" },
  { id: 2, title: "teamLab Planets (slot obbligatorio)", timeline: "45 giorni prima su teamlabplanets.dmm.com. Si esauriscono subito.", icon: "\u{1F4A1}" },
  { id: 3, title: "Shibuya Sky (prenotazione online)", timeline: "30 giorni prima su shibuya-sky.com. Slot 16:30-17:00 per il tramonto. ~2,000 yen.", icon: "\u{1F3D9}\uFE0F" },
  { id: 4, title: "Bar BenFiddich (prenotazione)", timeline: "Settimane prima via TableCheck. Solo 15 posti. Slot 21:00-22:50 consigliato.", icon: "\u{1F378}" },
  { id: 5, title: "USJ + Express Pass (online!)", timeline: "45 giorni prima su usj.co.jp. Vendita on-site CHIUSA. Senza biglietto online piangiamo.", icon: "\u{1F3AB}" },
  { id: 6, title: "Sushi Omakase (Tokyo)", timeline: "2-3 settimane prima. Chiediamo al nostro hotel di prenotare per noi.", icon: "\u{1F363}" },
  { id: 7, title: "JR Pass 7 giorni", timeline: "Prima del viaggio. ~310 EUR. Attiviamolo al Day 7 (partenza per Kyoto).", icon: "\u{1F689}" },
  { id: 8, title: "Cooking class o Tea ceremony (Kyoto)", timeline: "3-7 giorni prima su Airbnb Experiences o cookly.me.", icon: "\u{1F375}" },
  { id: 9, title: "Compilare Visit Japan Web", timeline: "7 giorni prima. QR Code per saltare le file in aeroporto.", icon: "\u{1F4CB}" },
  { id: 10, title: "eSIM pronta (Ubigi o Airalo)", timeline: "2 giorni prima. ~15-20 EUR per 10GB/15 giorni. Attiviamola prima di partire.", icon: "\u{1F4F6}" }
];

export const stepChartData = [
  { day: "D1", steps: 14000 },
  { day: "D2", steps: 24000 },
  { day: "D3", steps: 20000 },
  { day: "D4", steps: 26000 },
  { day: "D5", steps: 22000 },
  { day: "D6", steps: 18000 },
  { day: "D7", steps: 30000 },
  { day: "D8", steps: 22000 },
  { day: "D9", steps: 16000 },
  { day: "D10", steps: 24000 },
  { day: "D11", steps: 22000 },
  { day: "D12", steps: 28000 },
  { day: "D13", steps: 20000 },
  { day: "D14", steps: 8000 },
];

export const budgetData = [
  { name: "Alloggi (Hotel + Ryokan)", value: 30, color: "#0F172A" },
  { name: "Cibo (Omakase, Street Food, Kaiseki)", value: 25, color: "#E11D48" },
  { name: "Trasporti (JR Pass + locale)", value: 18, color: "#94A3B8" },
  { name: "Attivit\u00E0 (USJ, TeamLab, Templi)", value: 15, color: "#F59E0B" },
  { name: "Serate & Cocktail Bar", value: 12, color: "#10B981" },
];

export const kyotoData = [
  { x: 2, y: 10, label: "Fushimi Inari (Alba)" },
  { x: 8, y: 7, label: "Kinkaku-ji (Diurno)" },
  { x: 7, y: 9, label: "Kiyomizu-dera (Mattina)" },
  { x: 4, y: 9.5, label: "Arashiyama Bamb\u00F9 (Presto)" },
  { x: 2, y: 8, label: "Gion (Sera)" },
  { x: 5, y: 7.5, label: "Nishiki Market (Mattina)" },
  { x: 3, y: 8.5, label: "Philosopher's Path" },
];

export const vibeData = [
  { category: "Posti iconici", value: 10 },
  { category: "Street food", value: 10 },
  { category: "Cultura & storia", value: 9 },
  { category: "Serate & cocktail", value: 9 },
  { category: "Nerd & arcade", value: 7 },
  { category: "Relax & onsen", value: 6 },
];
