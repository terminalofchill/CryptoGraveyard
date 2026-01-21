// CRYPTO GRAVEYARD v4.0 - Phoenix Protocol Edition
const BAGS_REFERRAL = "https://bags.fm/?ref=cryptograveyrd";

const cryptoCorpses = [
{id:1,name:"Internet Computer (ICP)",category:"L1 Blockchain",launchDate:"2021-05",deathDate:"2021-05",amount:45000000000,description:"Launched at $750, crashed to $3. Insiders dumped on retail.",fullDescription:"Dfinity's Internet Computer launched with unprecedented hype, reaching $45 billion on day one.",causeOfDeath:"VCs who got tokens at cents dumped immediately. Price crashed 99.5%. Retail bought the top while insiders exit-liquified.",tags:["insider-dump","vc-exit"],type:"collapse",lessons:["Check unlock schedules before buying ANYTHING","Launch valuations represent peak delusion, not value","VC entry prices vs retail prices = guaranteed dump","Good tech doesn't save bad tokenomics"],
phoenix:{enabled:true,score:{rebuild:4,market:5,fairLaunch:5},
valueProposition:"Dfinity promised to replace AWS/GCP with decentralized cloud computing. The tech was genuinely innovative - canister smart contracts, reverse gas model, web-speed finality. Enterprise adoption was actually growing before the dump destroyed trust.",
theAlpha:["Decentralized compute is a real and growing need","AI boom creating massive GPU/compute demand","Canister smart contracts were genuinely innovative","VC dumps killed trust, not the underlying technology","100% fair launch eliminates the dump problem entirely"],
keyPeople:[{role:"Founder",name:"Dominic Williams"},{role:"Investor",name:"Andreessen Horowitz"},{role:"Investor",name:"Polychain Capital"}],
marketToday:"Cloud computing is $500B+ market. AWS/GCP dominate with 60%+ margins. AI compute demand exploding - GPU costs up 300% since ChatGPT. Decentralized alternatives gaining traction: Akash, Render, io.net.",
protocols:["Akash","Render","io.net","Golem"],
concept:{name:"COMPUTE FAIR",tagline:"The cloud that can't dump on you",description:"Decentralized GPU compute network. 100% fair launch - zero VC tokens. Node operators provide GPUs, earn fees. Users pay 40-60% less than AWS for AI inference. Community owns the infrastructure."},
executionPlan:["Launch node operator program - target 100 GPUs month one","Build simple API matching AWS/GCP for easy migration","Fair launch token on Bags - earned by operators and users","Focus on AI inference market first","Scale to training workloads after proving reliability"],
tokenomics:"100% fair launch. No team tokens, no VC allocation. Earned through: providing compute (70%), using compute (20%), governance (10%). Revenue from fees to stakers.",
monetization:"10% platform fee on compute transactions. At 1000 GPUs doing $100/day = $3.65M/year protocol revenue distributed to token holders.",
risks:["Cold start problem - need supply and demand simultaneously","Nvidia/cloud provider moats are strong","Decentralized compute UX historically poor"]}},

{id:2,name:"Terra/LUNA",category:"L1 Blockchain",launchDate:"2018-04",deathDate:"2022-05",amount:40000000000,description:"Algorithmic stablecoin death spiral wiped out $40B.",fullDescription:"Terra was built around UST, an algorithmic stablecoin. 20% APY on Anchor attracted massive deposits.",causeOfDeath:"UST lost peg, algorithm minted trillions of LUNA trying to defend. LUNA crashed from $119 to $0.00001 in days. The 20% yield was subsidized - reserves depleted, spiral began.",tags:["death-spiral","stablecoin"],type:"collapse",lessons:["Algorithmic stables without collateral are fragile","20% 'stable' yield is always a red flag","Reflexive mechanisms spiral both directions","150%+ collateralization needed for survival"],
phoenix:{enabled:true,score:{rebuild:4,market:5,fairLaunch:4},
valueProposition:"Terra proved massive demand exists for decentralized stablecoins - UST hit $18B market cap. Simple 'deposit and earn' UX attracted non-crypto natives. Ecosystem integration across 100+ apps made it sticky.",
theAlpha:["$18B UST at peak proved decentralized stable demand","Simple UX attracted millions of non-DeFi users","The PROBLEM was undercollateralization, not the concept","Over-collateralized designs (DAI, LUSD) survived the crash","Real 5-8% yield is achievable from actual DeFi activity"],
keyPeople:[{role:"Founder",name:"Do Kwon"},{role:"Founder",name:"Daniel Shin"},{role:"Investor",name:"Pantera Capital"},{role:"Investor",name:"Galaxy Digital"}],
marketToday:"Stablecoin market is $150B+ and growing. USDT/USDC dominate but are centralized - Tether froze $1B+ in 2023. Gap for decentralized, over-collateralized stable with sustainable yield. Ethena's USDe showing demand.",
protocols:["MakerDAO","Liquity","Ethena","Frax"],
concept:{name:"FORTRESS",tagline:"The stablecoin that survives the next crash",description:"150%+ over-collateralized stablecoin backed by diversified crypto. Sustainable 5-7% APY from real sources: Aave lending, Uniswap LP fees, liquid staking. No algorithmic minting. No fake APY. Just math that works."},
executionPlan:["Launch with ETH/stETH collateral vaults at 150% minimum","Yield aggregation from Aave, Compound, Lido","MEV-protected liquidation engine","Fair launch governance on Bags - no VC allocation","Cross-chain expansion after $50M TVL"],
tokenomics:"Governance token fair launched. No yield from inflation. Protocol fees (0.5% mint/redeem) distributed to stakers. Emergency shutdown controlled by governance.",
monetization:"0.5% fee on mint/redeem, 10% of yield generated. At $100M TVL with 6% yield = $600K/year protocol revenue.",
risks:["Smart contract risk on yield sources","Collateral price crashes in black swan","Competition from established players like MakerDAO"]}},

{id:3,name:"FTX",category:"Exchange",launchDate:"2019-05",deathDate:"2022-11",amount:32000000000,description:"SBF stole $8B customer funds. 25 years prison.",fullDescription:"FTX became third-largest exchange. SBF secretly funneled deposits to Alameda.",causeOfDeath:"CoinDesk exposed Alameda. Binance triggered bank run. SBF sentenced 25 years.",tags:["fraud","customer-funds"],type:"rug",lessons:["Never trust exchanges without proof of reserves"],phoenix:{enabled:false}},

{id:4,name:"Three Arrows Capital",category:"Hedge Fund",launchDate:"2012-01",deathDate:"2022-07",amount:18000000000,description:"Overleveraged hedge fund collapsed.",fullDescription:"3AC managed $18B. Su Zhu and Kyle Davies borrowed without collateral.",causeOfDeath:"LUNA collapse destroyed 3AC. They ghosted creditors and fled.",tags:["leverage","contagion"],type:"collapse",lessons:["Excessive leverage amplifies losses"],phoenix:{enabled:false}},

{id:5,name:"Anchor Protocol",category:"DeFi",launchDate:"2021-03",deathDate:"2022-05",amount:17000000000,description:"20% stable yield attracted $17B. Killed Terra.",fullDescription:"Anchor offered 20% APY on UST. At peak held $17 billion.",causeOfDeath:"Yield was subsidized at $5M/day burn rate. When reserves ran out, death spiral began.",tags:["unsustainable-yield","terra"],type:"collapse",lessons:["20% stable yield is mathematically impossible","Subsidized yield isn't real - it's marketing spend","Check where yield actually comes from","Simple UX hid broken mechanics"],phoenix:{enabled:false}},

{id:6,name:"Celsius Network",category:"CeFi Lending",launchDate:"2017-06",deathDate:"2022-07",amount:12000000000,description:"18% yields while gambling funds. CEO arrested.",fullDescription:"Celsius offered 18% APY. CEO Mashinsky attacked banks while secretly losing customer funds on risky DeFi plays.",causeOfDeath:"Froze $8B in withdrawals. $1.2B hole revealed. Mashinsky arrested for fraud. Users lost billions.",tags:["fraud","yield-fraud"],type:"rug",lessons:["Yields above market rate = hidden risk","CeFi opacity enables fraud","Charismatic CEOs are red flags not features","If you don't control keys, you don't control crypto"],
phoenix:{enabled:true,score:{rebuild:4,market:4,fairLaunch:5},
valueProposition:"Celsius proved users genuinely want yield on idle crypto. Simple mobile UX attracted millions of non-DeFi users. 'Unbank yourself' messaging resonated. At peak, $25B+ in assets under management.",
theAlpha:["Users genuinely want yield on idle crypto","Simple mobile UX attracted millions","Problem was opacity and fraud, not the concept","Decentralized lending works - Aave has $10B+ TVL","Trust through transparency, not charisma"],
keyPeople:[{role:"Founder",name:"Alex Mashinsky"},{role:"Investor",name:"WestCap"},{role:"Investor",name:"CDPQ"},{role:"Investor",name:"Tether"}],
marketToday:"CeFi lending is dead - BlockFi, Celsius, Voyager all bankrupt. DeFi lending thriving but complex for normies. Aave, Compound have billions but require wallet setup, gas management. Gap: Aave-level security with Celsius-level UX.",
protocols:["Aave","Compound","Morpho","Spark"],
concept:{name:"GLASS VAULT",tagline:"See everything. Trust nothing. Earn anyway.",description:"Non-custodial lending aggregator with radical transparency. Your keys, always. Real-time dashboard showing exactly where funds are deployed. No black box. Yield from battle-tested protocols only. Mobile app simplicity, DeFi security."},
executionPlan:["Build non-custodial vault contracts - users always control withdrawal","Integrate with Aave, Compound, Morpho - only battle-tested protocols","Real-time transparency dashboard - every position visible","Mobile app with one-tap deposit/withdraw","Fair launch governance on Bags"],
tokenomics:"Governance token controls fee switch and strategy allocation. 0.1% management fee on TVL distributed to stakers. No yield from inflation - pure revenue share.",
monetization:"0.1% annual fee on TVL + 5% of yield generated. At $500M TVL earning 5% = $1.75M/year protocol revenue.",
risks:["Smart contract risk on underlying protocols","Yield compression over time","Competition from protocol-native apps"]}},

{id:7,name:"BlockFi",category:"Lending",launchDate:"2017-08",deathDate:"2022-11",amount:10000000000,description:"3AC exposure, then FTX rescue with stolen funds.",fullDescription:"BlockFi hit by 3AC collapse. FTX rescue paid with stolen funds.",causeOfDeath:"3AC default plus FTX collapse = bankruptcy. Double-victimized by crypto's two biggest frauds.",tags:["contagion","ftx"],type:"collapse",lessons:["Counterparty risk can come from rescuers too","Being regulated doesn't mean being safe","Due diligence on partners matters"],phoenix:{enabled:false}},

{id:8,name:"Mt. Gox",category:"Exchange",launchDate:"2010-07",deathDate:"2014-02",amount:8500000000,description:"Lost 850,000 BTC. Original crypto catastrophe.",fullDescription:"Mt. Gox handled 70% of BTC transactions. Years-long security breach.",causeOfDeath:"850,000 BTC stolen. Creditors waited 10+ years.",tags:["hack","legendary"],type:"hack",lessons:["Not your keys, not your coins"],phoenix:{enabled:false}},

{id:9,name:"Voyager Digital",category:"Lending",launchDate:"2018-01",deathDate:"2022-07",amount:7000000000,description:"Lent $650M to 3AC. Falsely implied FDIC insurance.",fullDescription:"Voyager lent $650M to 3AC with minimal collateral.",causeOfDeath:"3AC default made loan unrecoverable. 3.5M customers lost access.",tags:["3ac-exposure","bankruptcy"],type:"collapse",lessons:["FDIC does not cover crypto"],phoenix:{enabled:false}},

{id:10,name:"Bitfinex Hack",category:"Exchange",launchDate:"2012-01",deathDate:"2016-08",amount:4500000000,description:"119,756 BTC stolen. Hackers were married couple.",fullDescription:"Bitfinex lost 119,756 BTC. Hackers were Ilya Lichtenstein and Heather Morgan.",causeOfDeath:"DOJ arrested couple and seized $3.6B.",tags:["hack","recovered"],type:"hack",lessons:["Stolen crypto can be traced"],phoenix:{enabled:false}},

{id:11,name:"Axie Infinity",category:"GameFi",launchDate:"2018-03",deathDate:"2022-06",amount:4200000000,description:"Play-to-earn became work-to-lose.",fullDescription:"2.7M daily users. Filipinos quit jobs to play. Required endless new players to sustain payouts.",causeOfDeath:"Ponzi dynamics unsustainable. SLP crashed 95%. Ronin bridge hack ($625M) was killing blow. Players realized they were working, not playing.",tags:["gamefi","ponzinomics"],type:"collapse",lessons:["Game must be fun WITHOUT earning","Play-to-earn requires infinite growth","Token emissions must tie to real revenue","Two-token models can spiral quickly"],
phoenix:{enabled:true,score:{rebuild:5,market:5,fairLaunch:4},
valueProposition:"Axie proved crypto gaming could achieve mainstream adoption. 2.7 million daily users earning real income. Filipino players quit jobs to play full-time. The core insight was valid: people spend enormous time in games, so let them earn while playing.",
theAlpha:["2.7M daily users proved crypto gaming demand is REAL","Breeding mechanics created emotional attachment to NFTs","Community guilds showed power of coordinated play","Mobile gaming is $90B+ market barely touched by crypto","Battle mechanics were engaging - the game had real depth"],
keyPeople:[{role:"Founder",name:"Trung Nguyen"},{role:"Founder",name:"Aleksander Larsen"},{role:"Investor",name:"Andreessen Horowitz"},{role:"Investor",name:"Paradigm"}],
marketToday:"Gaming is a $200B+ industry. Mobile gaming alone is $90B. Play-to-earn is dead, but 'play-AND-earn' emerging. Successful examples: Pixels, Big Time. Gap: fair-launched mobile game where earning enhances fun.",
protocols:["Solana Gaming","Immutable X","Arbitrum Nova"],
concept:{name:"QUEST PROTOCOL",tagline:"The game you'd play even if tokens were worthless",description:"Mobile-first RPG where the core loop is genuinely fun. Tokens earned through gameplay but capped daily to prevent grinding culture. NFTs are cosmetic flexes, not pay-to-win. Revenue from battle passes and cosmetics - proven $50B+ market."},
executionPlan:["Build genuinely fun mobile game first - 3 month prototype with no crypto","Soft launch to test retention - target 20% Day-30 before adding tokens","Add optional token earning - capped at $5-10/day","Fair launch governance on Bags - earned through achievements","Revenue share to stakers from cosmetic sales"],
tokenomics:"Fixed 100M supply. No emissions - tokens from one-time achievement unlocks. Revenue from cosmetics: 70% to stakers, 20% treasury, 10% dev. 5% burn on cosmetic purchases.",
monetization:"Battle passes ($10/season), cosmetic NFTs ($1-100), tournament entry (5% rake). Target: $2 ARPU on 500K MAU = $1M/month to token holders.",
risks:["Mobile dev is expensive and competitive","Crypto gaming reputation damaged","App store NFT policies are restrictive"]}},

{id:12,name:"OneCoin",category:"Ponzi",launchDate:"2014-01",deathDate:"2017-10",amount:4000000000,description:"No blockchain existed. Crypto Queen vanished.",fullDescription:"Ruja Ignatova promised OneCoin beats Bitcoin. No blockchain existed.",causeOfDeath:"Ruja flew to Athens 2017 and vanished. FBI $250K reward.",tags:["ponzi","fbi-wanted"],type:"rug",lessons:["Verify blockchain exists"],phoenix:{enabled:false}},

{id:13,name:"Olympus DAO",category:"DeFi",launchDate:"2021-03",deathDate:"2022-01",amount:4000000000,description:"(3,3) promised 7,000% APY. Crashed 99%.",fullDescription:"Olympus pioneered (3,3) game theory with 7,000%+ APY staking.",causeOfDeath:"When confidence cracked, game theory flipped. OHM crashed from $1,400 to under $15. Memes are not monetary policy.",tags:["ponzinomics","defi-2.0"],type:"collapse",lessons:["7,000% APY is mathematically impossible","Game theory with real money leads to defection","Protocol-owned liquidity concept was innovative","Rebasing tokens are easily manipulated"],phoenix:{enabled:false}},

{id:14,name:"Africrypt",category:"Ponzi",launchDate:"2019-01",deathDate:"2021-04",amount:3600000000,description:"Brothers vanished with 69,000 BTC.",fullDescription:"Cajee brothers accumulated 69,000 BTC.",causeOfDeath:"Claimed hack, told investors NOT to contact police, vanished.",tags:["exit-scam","brothers"],type:"rug",lessons:["If they say don't contact police, contact police"],phoenix:{enabled:false}},

{id:15,name:"BitConnect",category:"Ponzi",launchDate:"2016-01",deathDate:"2018-01",amount:3500000000,description:"OG crypto Ponzi. 1% daily. Carlos Matos meme.",fullDescription:"Promised 1% daily through fake trading bot.",causeOfDeath:"Regulators issued warnings. BCC crashed from $400 to $1.",tags:["ponzi","mlm","meme"],type:"rug",lessons:["1% daily is mathematically impossible"],phoenix:{enabled:false}},

{id:16,name:"Genesis Trading",category:"Lending",launchDate:"2013-01",deathDate:"2023-01",amount:3000000000,description:"$2.36B exposure to 3AC.",fullDescription:"Genesis was DCG's lending arm with massive 3AC exposure.",causeOfDeath:"3AC collapse left $2.36B hole.",tags:["contagion","gemini"],type:"collapse",lessons:["Yield programs inherit counterparty risk"],phoenix:{enabled:false}},

{id:17,name:"StepN",category:"GameFi",launchDate:"2021-12",deathDate:"2022-06",amount:3000000000,description:"Move-to-earn required $1,000 sneaker NFTs.",fullDescription:"Required expensive sneaker NFTs to earn GMT while walking.",causeOfDeath:"China banned app. Ponzi dynamics collapsed. 3M+ users stranded.",tags:["move-to-earn","ponzinomics"],type:"collapse",lessons:["$1,000 NFTs to walk is not sustainable","Free alternatives always win","Geographic bans can kill overnight"],phoenix:{enabled:false}},

{id:18,name:"PlusToken",category:"Ponzi",launchDate:"2018-05",deathDate:"2019-06",amount:2900000000,description:"Chinese MLM with 3 million victims.",fullDescription:"Promised 10-30% monthly through fake arbitrage.",causeOfDeath:"Chinese authorities arrested 109 members.",tags:["ponzi","china"],type:"rug",lessons:["Arbitrage bot claims are fake"],phoenix:{enabled:false}},

{id:19,name:"BAYC",category:"NFT",launchDate:"2021-04",deathDate:"2024-01",amount:2800000000,description:"Floor crashed from 150 ETH to under 10.",fullDescription:"BAYC was ultimate status symbol. Bieber paid $1.3M.",causeOfDeath:"NFT winter. Floor crashed 93%.",tags:["nft-winter","celebrities"],type:"collapse",lessons:["Celebrity purchases mark the top"],phoenix:{enabled:false}},

{id:20,name:"Thodex",category:"Exchange",launchDate:"2017-01",deathDate:"2021-04",amount:2000000000,description:"Turkish CEO fled with $2B. 11,196 years prison.",fullDescription:"Turkey's largest exchange. CEO claimed negotiations then fled.",causeOfDeath:"400K users stranded. CEO caught, sentenced 11,196 years.",tags:["exit-scam","turkey"],type:"rug",lessons:["Watch for sudden maintenance"],phoenix:{enabled:false}},

{id:21,name:"Solidly",category:"DeFi",launchDate:"2022-02",deathDate:"2022-03",amount:2000000000,description:"Andre Cronje quit. $2B TVL fled.",fullDescription:"Andre's ve(3,3) experiment attracted $2B TVL in weeks.",causeOfDeath:"Andre announced leaving crypto. Panic. TVL fled overnight. Proves single founder dependency is fatal.",tags:["abandoned","andre-cronje"],type:"collapse",lessons:["Protocols dependent on one person are fragile","ve(3,3) model works when properly run (see Velodrome)"],phoenix:{enabled:false}},

{id:22,name:"IRON/TITAN",category:"DeFi",launchDate:"2021-05",deathDate:"2021-06",amount:1900000000,description:"Mark Cuban got rugged. TITAN to zero.",fullDescription:"Partially-collateralized algo stablecoin. Cuban invested.",causeOfDeath:"Death spiral. TITAN crashed to $0.000000035.",tags:["death-spiral","celebrity-victim"],type:"collapse",lessons:["Even billionaires get rugged"],phoenix:{enabled:false}},

{id:23,name:"Finiko",category:"Ponzi",launchDate:"2019-01",deathDate:"2021-07",amount:1500000000,description:"Russian Ponzi. 30% monthly.",fullDescription:"Operated in Russia promising 30% monthly.",causeOfDeath:"Russian authorities arrested founder.",tags:["ponzi","russia"],type:"rug",lessons:["30% monthly is impossible"],phoenix:{enabled:false}},

{id:24,name:"Wonderland TIME",category:"DeFi",launchDate:"2021-09",deathDate:"2022-01",amount:1200000000,description:"Treasury managed by convicted felon.",fullDescription:"OHM fork with $1B+ treasury. 0xSifu managed funds.",causeOfDeath:"ZachXBT revealed 0xSifu was Michael Patryn.",tags:["criminal","ohm-fork"],type:"collapse",lessons:["Anonymous treasury = risk"],phoenix:{enabled:false}},

{id:25,name:"Ronin Bridge",category:"Bridge",launchDate:"2021-06",deathDate:"2022-03",amount:625000000,description:"North Korea stole $625M.",fullDescription:"Axie's bridge. Lazarus Group compromised keys.",causeOfDeath:"$625M drained. Theft unnoticed 6 days.",tags:["hack","north-korea"],type:"hack",lessons:["Nation-state hackers target bridges"],phoenix:{enabled:false}},

{id:26,name:"Mango Markets",category:"DeFi",launchDate:"2021-08",deathDate:"2022-10",amount:114000000,description:"Eisenberg bragged. Got arrested.",fullDescription:"Solana perps DEX. Eisenberg manipulated MNGO price to borrow $114M.",causeOfDeath:"Manipulated price 10x, borrowed $114M. Bragged publicly. Arrested.",tags:["manipulation","arrested"],type:"hack",lessons:["Bragging attracts prosecution","Oracle manipulation is existential risk for perps"],phoenix:{enabled:false}},

{id:27,name:"Badger DAO",category:"DeFi",launchDate:"2020-12",deathDate:"2021-12",amount:120000000,description:"Frontend attack. Users approved drains.",fullDescription:"Bitcoin DeFi. Hackers compromised Cloudflare key.",causeOfDeath:"Malicious scripts prompted approvals. $120M drained while users thought they were using normal app.",tags:["hack","frontend"],type:"hack",lessons:["Frontends are attack vectors","Check what you're signing","Compromised CDN = compromised app"],phoenix:{enabled:false}}
];

const hallOfShame = [
{rank:1,id:'do-kwon',name:"Do Kwon",project:"Terra/LUNA",year:"2022",status:"Extradited to US",
extracted:"Unknown",peakMC:"$40B",victimLosses:"$40B+",
photoUrl:"images/do_kwon.jpg",viralQuote:"I don't debate the poor.",
viralMoment:"Arrogant tweets aged catastrophically as LUNA crashed from $119 to $0.00001.",
story:"Built Terra while mocking critics. When UST collapsed, tweets became evidence of hubris. Arrested with fake passports.",
tags:["terra","arrogance"],viralityScore:10,videoId:"KYlNI8U9TCw",videoType:"youtube"},

{rank:2,id:'sbf',name:"Sam Bankman-Fried",project:"FTX",year:"2022",status:"25 years prison",
extracted:"$8B+",peakMC:"$32B",victimLosses:"$8B+",
photoUrl:"images/sam_bankman_fried.jpg",viralQuote:"I didn't knowingly commingle funds.",
viralMoment:"Played League during investor calls while stealing $8B.",
story:"Built $32B empire while stealing deposits. Gave interviews playing games post-collapse. 25 years.",
tags:["ftx","fraud"],viralityScore:10,videoId:"20BEJouWBgY",videoType:"youtube"},

{rank:3,id:'su-zhu',name:"Su Zhu & Kyle Davies",project:"Three Arrows Capital",year:"2022",status:"Su Zhu arrested",
extracted:"$18B collapse",peakMC:"$18B AUM",victimLosses:"$3.5B+",
photoUrl:"images/_3_Su_Zhu___Kyle_Davies.jpg",viralQuote:"We are communicating with relevant parties.",
viralMoment:"Lost $18B, ghosted creditors, fled on yacht, launched exchange for bankruptcy claims.",
story:"Borrowed without collateral. LUNA destroyed them. Fled on yacht. Su Zhu arrested.",
tags:["3ac","yacht"],viralityScore:9,videoId:"7SaHu3UVNCk",videoType:"youtube"},

{rank:4,id:'mashinsky',name:"Alex Mashinsky",project:"Celsius",year:"2022",status:"Arrested",
extracted:"$10M+",peakMC:"$12B deposits",victimLosses:"$4.7B",
photoUrl:"images/_4_Alex_Mashinsky.jpg",viralQuote:"Banks are not your friends!",
viralMoment:"Weekly AMAs attacking banks while withdrawing $10M before freeze.",
story:"Working-class hero act while gambling funds. Withdrew $10M before freeze. Arrested.",
tags:["celsius","hypocrisy"],viralityScore:9,videoId:"dv6_57Bowhs",videoType:"youtube"},

{rank:5,id:'richard-heart',name:"Richard Heart",project:"HEX/PulseChain",year:"2023",status:"SEC charged, fugitive",
extracted:"$12B+ sacrifices",peakMC:"$12B",victimLosses:"Unknown",
photoUrl:"images/_5_Richard_Heart.png",viralQuote:"Delayed gratification is key.",
viralMoment:"$100M in watches while telling followers to 'sacrifice' to him.",
story:"Cult following. Billions in 'sacrifices'. SEC charged. Fled to Europe.",
tags:["hex","cult"],viralityScore:8,videoId:"NPVOxgqKZsI",videoType:"youtube"},

{rank:6,id:'ruja',name:"Dr. Ruja Ignatova",project:"OneCoin",year:"2017",status:"FBI Top 10 Wanted",
extracted:"$4B+",peakMC:"N/A",victimLosses:"$4B+",
photoUrl:"images/_6_Dr__Ruja_Ignatova.jpg",viralQuote:"Nobody will talk about Bitcoin!",
viralMoment:"Stadium events for fake crypto. No blockchain. Vanished 2017.",
story:"'Crypto Queen' sold fake crypto. No blockchain existed. $250K FBI reward.",
tags:["onecoin","fbi"],viralityScore:10,videoId:"ZoklPHEjXl4",videoType:"youtube"},

{rank:7,id:'africrypt',name:"Cajee Brothers",project:"Africrypt",year:"2021",status:"Fugitives",
extracted:"69,000 BTC",peakMC:"N/A",victimLosses:"$3.6B",
photoUrl:"images/_7_Cajee_Brothers.jpg",viralQuote:"Don't report to authorities.",
viralMoment:"Ages 18 and 21, vanished with 69K BTC after telling investors NOT to call police.",
story:"'AI trading' claims. 69K BTC accumulated. Said don't report 'hack'. Vanished.",
tags:["exit-scam"],viralityScore:8,videoId:"_T4OyfUoJ1I",videoType:"youtube"},

{rank:8,id:'bitconnect',name:"Satish Kumbhani",project:"BitConnect",year:"2018",status:"Indicted, hiding",
extracted:"$2.4B",peakMC:"$3.5B",victimLosses:"$2.4B",
photoUrl:"images/_8_Satish_Kumbhani.jpg",viralQuote:"BitConnect is the future!",
viralMoment:"Carlos Matos 'BITCONNEEECT!' - crypto's most legendary meme.",
story:"1% daily via fake bot. Carlos Matos meme. BCC crashed $400 to $1.",
tags:["ponzi","meme"],viralityScore:10,videoId:"gHdasR7PxW8",videoType:"youtube"},

{rank:9,id:'thodex',name:"Faruk Fatih Özer",project:"Thodex",year:"2021",status:"11,196 years prison",
extracted:"$2B",peakMC:"N/A",victimLosses:"$2B",
photoUrl:"images/_9_Faruk_Fatih_Özer.jpg",viralQuote:"Partnership negotiations.",
viralMoment:"Posted about negotiations while fleeing with $2B.",
story:"Turkey's largest exchange. Fled to Albania with $2B. 11,196 years.",
tags:["exit-scam","turkey"],viralityScore:8,videoId:"JWApzXk745Q",videoType:"youtube"},

{rank:10,id:'quadriga',name:"Gerald Cotten",project:"QuadrigaCX",year:"2019",status:"Dead (disputed)",
extracted:"$190M",peakMC:"N/A",victimLosses:"$190M",
photoUrl:"images/_10_Gerald_Cotten.jpg",viralQuote:"Only I have the passwords.",
viralMoment:"Sole keyholder 'died' in India. Wallets were already empty.",
story:"Canada's exchange. Died, cremated quick. Wallets empty for months. Many think faked.",
tags:["fake-death"],viralityScore:9,videoId:"HqmS-2D7SVM",videoType:"youtube"}
];

const pumpFunHorrors = [
{id:'baby',name:"The Baby Incident",perpetrator:"Mikael Owns",date:"2024",wtfFactor:10,emoji:"👶🔥",
extracted:"~$30K",peakMC:"Unknown",
shortDescription:"Tied up baby on stream. Got Pump.fun livestreams banned forever.",
fullStory:"Appeared with restrained infant during launch. Massive outrage. Pump.fun disabled all streams.",
aftermath:"Streams disabled permanently. Mikael vanished.",
tags:["banned"],videoId:"ZRWkTFqkhgY",videoType:"youtube"},

{id:'fire',name:"Fire Guy",perpetrator:"Anonymous",date:"2024",wtfFactor:9,emoji:"🔥😱",
extracted:"~$15K",peakMC:"Unknown",
shortDescription:"Set himself on fire to pump token.",
fullStory:"Doused with flammable liquid. Ignited on stream. Token pumped. Then rugged.",
aftermath:"Clip viral. Condition unknown.",tags:["fire"],videoId:"",videoType:"twitter-search"},

{id:'cereal',name:"Cereal Rugger",perpetrator:"Anonymous",date:"2024",wtfFactor:7,emoji:"🥣😐",
extracted:"~$50K",peakMC:"Unknown",
shortDescription:"Ate cereal calmly while rugging mid-bite.",
fullStory:"Said nothing. Ate cereal. Token pumped. Mid-bite, pulled liquidity.",
aftermath:"Became meme. Token zero.",tags:["cereal"],videoId:"",videoType:"twitter-search"},

{id:'classroom',name:"Classroom Launch",perpetrator:"Teen",date:"2024",wtfFactor:8,emoji:"🏫📱",
extracted:"~$10K",peakMC:"Unknown",
shortDescription:"Launched and rugged from school classroom.",
fullStory:"Streamed under desk while teacher lectured. Rugged before bell.",
aftermath:"Unknown if caught.",tags:["school"],videoId:"",videoType:"twitter-search"},

{id:'grandma',name:"Grandma Rugger",perpetrator:"Anonymous",date:"2024",wtfFactor:7,emoji:"👵💸",
extracted:"~$20K",peakMC:"Unknown",
shortDescription:"Brought confused grandma. Rugged with her on screen.",
fullStory:"Grandma smiled and waved. Chat pumped. Grandson rugged.",
aftermath:"Grandma still confused.",tags:["grandma"],videoId:"",videoType:"twitter-search"},

{id:'mando',name:"Mando's Stunts",perpetrator:"Mando",date:"2024",wtfFactor:9,emoji:"🎭🤯",
extracted:"$100K+",peakMC:"Various",
shortDescription:"Serial streamer. Pump.fun's biggest winner.",
fullStory:"Constantly one-upped stunts. Each clip viral. $100K+ extracted.",
aftermath:"Still active. Platform's poster child.",tags:["stunts"],videoId:"gKHJYuG4yFQ",videoType:"youtube"}
];

const trenchLegends = [
{id:'quant-kid',name:"Quant Kid",perpetrator:"13-year-old",project:"Gen Z Quant",date:"2024",wtfFactor:10,emoji:"👦😭",
extracted:"~$30K",peakMC:"$85M (revenge pump)",victimLosses:"Unknown",
blockchain:"Solana",contractAddress:"3an8rhdepsLCya22af7qDBKPbdomw8K4iCHXaA2Gpump",
shortDescription:"13yo rugged $30K. Community revenge-pumped to $85M. Cried 'I'm just a kid!'",
fullStory:"Livestreamed launch. Extracted $30K. Cried when confronted. Community pumped to $85M to spite him.",
aftermath:"Doxxed. Launched 2 more tokens, rugged those too.",
tags:["teen"],photoUrl:"images/quant.jpg",videoId:"jZUeyFKw7u4",videoType:"youtube"},

{id:'hawk-tuah',name:"Hawk Tuah Token",perpetrator:"Haliey Welch",project:"HAWK",date:"2024",wtfFactor:9,emoji:"🦅💀",
extracted:"~$1.27M (insiders)",peakMC:"$490M",victimLosses:"Millions",
blockchain:"Solana",contractAddress:"HAWKThXRcNL9ZGZKqgUXLm4W8tnRZ7U6MVdEepSutj34",
shortDescription:"$490M in 15 min. Insiders dumped. Crashed 93%. Lawsuit filed.",
fullStory:"Viral meme girl's token. $490M in minutes. Insiders dumped $1.27M. She got $125K+ fee.",
aftermath:"Class action lawsuit. Added as defendant.",
tags:["celebrity"],photoUrl:"images/Hawk_Tuah_Token.jpg",videoId:"qwQTX2vbgRk",videoType:"youtube"},

{id:'squid',name:"Squid Game Token",perpetrator:"Anonymous",project:"SQUID",date:"2021",wtfFactor:10,emoji:"🦑🎮",
extracted:"~$3.38M",peakMC:"$2,860/token",victimLosses:"$3.38M+",
blockchain:"BSC",contractAddress:"0x87230146E138d3F296a9a77e497A2A83012e9Bc5",
shortDescription:"45,000% pump. Couldn't sell - honeypot. Crashed to $0 in 5 min.",
fullStory:"No Netflix affiliation. Pumped 45,000%. Contract prevented selling. Classic honeypot.",
aftermath:"Textbook honeypot example.",
tags:["honeypot"],photoUrl:"images/Squid_Game_Token.jpg",videoId:"CpR2kMxy7O8",videoType:"youtube"},

{id:'anubis',name:"AnubisDAO",perpetrator:"Beerus",project:"ANKH",date:"2021",wtfFactor:9,emoji:"🐺💨",
extracted:"$60M",peakMC:"$60M",victimLosses:"$60M",
blockchain:"Ethereum",contractAddress:"0x38a0df9a08d18dc06cd91fc7ec94a0acdf28d994",
shortDescription:"$60M raised in 20 hours. Drained same day. Fastest major rug.",
fullStory:"OHM fork. $60M in 20 hours. All ETH transferred out same day. 'Phishing' excuse.",
aftermath:"ZachXBT traced funds. Fastest large rug ever.",
tags:["speedrun"],videoId:"97bHgDkf3pE",videoType:"youtube"},

{id:'faze',name:"FaZe Save The Kids",perpetrator:"FaZe Kay",project:"$KIDS",date:"2021",wtfFactor:8,emoji:"🎮🤑",
extracted:"~$30K",peakMC:"~$2-3M",victimLosses:"Hundreds of thousands",
blockchain:"BSC",contractAddress:"0x7acf49997e9598843cb9051389fa755969e551bb",
shortDescription:"Gaming influencers scammed teen fans with 'charity' token.",
fullStory:"50M+ followers. Anti-whale code secretly changed. Kay dumped. Coffeezilla exposed.",
aftermath:"Kay fired. Paid $400-500K refunds.",
tags:["influencer"],photoUrl:"images/FaZe_Save_The_Kids.png",videoId:"6fxtayFVwxQ",videoType:"youtube"},

{id:'ice',name:"Ice Poseidon",perpetrator:"Paul Denino",project:"CxCoin",date:"2022",wtfFactor:10,emoji:"🎥💩",
extracted:"$500K",peakMC:"Unknown",victimLosses:"$500K",blockchain:"Ethereum",
shortDescription:"Admitted on camera: 'I just didn't care.' Zero consequences.",
fullStory:"Raised $500K. Coffeezilla confronted. Openly admitted didn't care about investors.",
aftermath:"No legal consequences. Still streams.",
tags:["confession"],photoUrl:"images/ice_pos.jpg",videoId:"3NA8Ee3RF5E",videoType:"youtube"},

{id:'evil-ape',name:"Evil Ape",perpetrator:"Evil Ape",project:"Evolved Apes",date:"2021",wtfFactor:7,emoji:"🦍😈",
extracted:"$2.7M",peakMC:"$2.7M",victimLosses:"$2.7M",blockchain:"Ethereum",
shortDescription:"Named himself 'Evil Ape'. People trusted him. He rugged.",
fullStory:"NFT project. Dev literally called Evil Ape. Drained 798 ETH. Game never made.",
aftermath:"Community tried 'Fight Back Apes'. Never caught.",
tags:["nft"],photoUrl:"images/Evil_Ape.jpg",videoId:"jLBvfEdxjYU",videoType:"youtube"}
];

const typeLabels = {rug:"RUG PULL",hack:"HACKED",collapse:"COLLAPSED"};
const typeColors = {rug:"#ff2d55",hack:"#ff9500",collapse:"#bf5af2"};
