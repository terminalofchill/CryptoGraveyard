// CRYPTO GRAVEYARD v4.0 - Phoenix Protocol Edition
const BAGS_REFERRAL = "https://bags.fm/?ref=cryptograveyrd";

const cryptoCorpses = [
{id:1,name:"Internet Computer (ICP)",category:"L1 Blockchain",launchDate:"2021-05",deathDate:"2021-05",amount:45000000000,description:"Launched at $750, crashed to $3. Insiders dumped on retail.",fullDescription:"Dfinity's Internet Computer launched with unprecedented hype, reaching $45 billion on day one.",causeOfDeath:"VCs who got tokens at cents dumped immediately. Price crashed 99.5%.",tags:["insider-dump","vc-exit"],type:"collapse",lessons:["Check unlock schedules","Launch valuations are peak delusion"],
phoenix:{enabled:true,score:{rebuild:3,market:4,fairLaunch:5},
theLoot:["Decentralized compute is a real need","Enterprise adoption was growing","Canister smart contracts innovative","VC dumps killed trust, not the tech"],
marketToday:"Cloud computing $500B+ market. AWS/GCP dominate. Decentralized alternatives gaining traction. Gap for fair-launched compute.",
concept:{name:"FAIR COMPUTE",description:"Decentralized compute network. 100% fair launch. No VC. Community-owned infrastructure for AI/web hosting."},
executionPlan:["Fork compute concepts with fair tokenomics","Target AI devs priced out of GPU clouds","Launch on Bags with no presale","Build node operator community"],
tokenomics:"100% fair launch. No team tokens. Revenue from compute fees to stakers."}},

{id:2,name:"Terra/LUNA",category:"L1 Blockchain",launchDate:"2018-04",deathDate:"2022-05",amount:40000000000,description:"Algorithmic stablecoin death spiral wiped out $40B.",fullDescription:"Terra was built around UST, an algorithmic stablecoin. 20% APY on Anchor attracted massive deposits.",causeOfDeath:"UST lost peg, algorithm minted trillions of LUNA. Crashed from $119 to $0.00001.",tags:["death-spiral","stablecoin"],type:"collapse",lessons:["Algo stablecoins are fragile","20% stable APY is unsustainable"],
phoenix:{enabled:true,score:{rebuild:4,market:5,fairLaunch:3},
theLoot:["Stablecoin demand is massive ($150B+)","Yield on stables attracts capital","L1 integration created sticky ecosystem","Problem was uncollateralized design"],
marketToday:"USDT/USDC dominate but centralized. Gap for decentralized, over-collateralized stable with real 5-8% yield.",
concept:{name:"PHOENIX STABLE",description:"Over-collateralized stablecoin. Sustainable 5-8% yield from real DeFi, not inflation."},
executionPlan:["Build over-collateralized vaults (150%+)","Yield from lending/LP only","Transparent on-chain reserves","Fair launch on Bags"],
tokenomics:"Governance token fair launched. Yield from protocol fees. No fake APY."}},

{id:3,name:"FTX",category:"Exchange",launchDate:"2019-05",deathDate:"2022-11",amount:32000000000,description:"SBF stole $8B customer funds. 25 years prison.",fullDescription:"FTX became third-largest exchange. SBF secretly funneled deposits to Alameda.",causeOfDeath:"CoinDesk exposed Alameda. Binance triggered bank run. SBF sentenced 25 years.",tags:["fraud","customer-funds"],type:"rug",lessons:["Never trust exchanges without proof of reserves"],phoenix:{enabled:false}},

{id:4,name:"Three Arrows Capital",category:"Hedge Fund",launchDate:"2012-01",deathDate:"2022-07",amount:18000000000,description:"Overleveraged hedge fund collapsed.",fullDescription:"3AC managed $18B. Su Zhu and Kyle Davies borrowed without collateral.",causeOfDeath:"LUNA collapse destroyed 3AC. They ghosted creditors and fled.",tags:["leverage","contagion"],type:"collapse",lessons:["Excessive leverage amplifies losses"],phoenix:{enabled:false}},

{id:5,name:"Anchor Protocol",category:"DeFi",launchDate:"2021-03",deathDate:"2022-05",amount:17000000000,description:"20% stable yield attracted $17B. Killed Terra.",fullDescription:"Anchor offered 20% APY on UST. At peak held $17 billion.",causeOfDeath:"Yield was subsidized. When reserves ran out, death spiral began.",tags:["unsustainable-yield","terra"],type:"collapse",lessons:["20% stable yield is impossible"],
phoenix:{enabled:true,score:{rebuild:4,market:5,fairLaunch:4},
theLoot:["Simple UX attracted billions","One-click deposit was killer feature","Users want stable yield without complexity","Yield source was fake - real yield achievable"],
marketToday:"DeFi yield fragmented. Users want simple 'deposit and earn'. Real 5-10% yields exist but hard to access.",
concept:{name:"REAL YIELD VAULT",description:"Aggregated yield from battle-tested protocols. No ponzinomics. Target 5-8% sustainable APY."},
executionPlan:["Aggregate yield from top Solana protocols","Transparent strategy dashboard","Auto-compound optimized","Fair launch governance on Bags"],
tokenomics:"No yield from inflation. Protocol fee on profits only. Governance controls allocation."}},

{id:6,name:"Celsius Network",category:"Lending",launchDate:"2017-06",deathDate:"2022-07",amount:12000000000,description:"18% yields while gambling funds. CEO arrested.",fullDescription:"Celsius offered 18% APY. CEO Mashinsky attacked banks while losing customer funds.",causeOfDeath:"Froze $8B in withdrawals. $1.2B hole revealed. Mashinsky arrested.",tags:["ponzi","yield-fraud"],type:"rug",lessons:["Yields above market = unsustainable risk"],
phoenix:{enabled:true,score:{rebuild:4,market:4,fairLaunch:4},
theLoot:["Users want to earn on idle crypto","CeFi UX was excellent","Problem was opacity and fraud","Decentralized lending works (Aave, Compound)"],
marketToday:"CeFi lending dead. DeFi lending thriving but complex. Gap for simple, transparent lending with great UX.",
concept:{name:"TRANSPARENT LEND",description:"Decentralized lending with real-time proof of reserves. All positions on-chain. Simple UX."},
executionPlan:["Build non-custodial lending pools","Real-time dashboard showing all loans","Liquidation bot incentives","Fair launch on Bags"],
tokenomics:"Protocol fees to stakers. No yield promises - earnings from actual borrow demand."}},

{id:7,name:"BlockFi",category:"Lending",launchDate:"2017-08",deathDate:"2022-11",amount:10000000000,description:"3AC exposure, then FTX rescue with stolen funds.",fullDescription:"BlockFi hit by 3AC collapse. FTX rescue paid with stolen funds.",causeOfDeath:"3AC default plus FTX collapse = bankruptcy.",tags:["contagion","ftx"],type:"collapse",lessons:["Don't accept rescue from shady entities"],
phoenix:{enabled:true,score:{rebuild:3,market:4,fairLaunch:4},
theLoot:["BTC-collateralized loans have demand","Institutional interest was growing","Counterparty risk killed it, not model","Decentralized version eliminates SPOF"],
marketToday:"BTC holders want to borrow without selling. DeFi options exist but complex. Opportunity for simple BTC-backed lending.",
concept:{name:"BTC BORROW",description:"Decentralized BTC-collateralized lending. Borrow stables against BTC. No KYC. Fully on-chain."},
executionPlan:["Accept wBTC/tBTC as collateral","Issue loans at safe LTV (50-60%)","Transparent liquidation engine","Fair launch on Bags"],
tokenomics:"Governance for protocol params. Revenue from borrow fees."}},

{id:8,name:"Mt. Gox",category:"Exchange",launchDate:"2010-07",deathDate:"2014-02",amount:8500000000,description:"Lost 850,000 BTC. Original crypto catastrophe.",fullDescription:"Mt. Gox handled 70% of BTC transactions. Years-long security breach.",causeOfDeath:"850,000 BTC stolen. Creditors waited 10+ years.",tags:["hack","legendary"],type:"hack",lessons:["Not your keys, not your coins"],phoenix:{enabled:false}},

{id:9,name:"Voyager Digital",category:"Lending",launchDate:"2018-01",deathDate:"2022-07",amount:7000000000,description:"Lent $650M to 3AC. Falsely implied FDIC insurance.",fullDescription:"Voyager lent $650M to 3AC with minimal collateral.",causeOfDeath:"3AC default made loan unrecoverable. 3.5M customers lost access.",tags:["3ac-exposure","bankruptcy"],type:"collapse",lessons:["FDIC does not cover crypto"],phoenix:{enabled:false}},

{id:10,name:"Bitfinex Hack",category:"Exchange",launchDate:"2012-01",deathDate:"2016-08",amount:4500000000,description:"119,756 BTC stolen. Hackers were married couple.",fullDescription:"Bitfinex lost 119,756 BTC. Hackers were Ilya Lichtenstein and Heather Morgan.",causeOfDeath:"DOJ arrested couple and seized $3.6B.",tags:["hack","recovered"],type:"hack",lessons:["Stolen crypto can be traced"],phoenix:{enabled:false}},

{id:11,name:"Axie Infinity",category:"GameFi",launchDate:"2018-03",deathDate:"2022-06",amount:4200000000,description:"Play-to-earn became work-to-lose.",fullDescription:"2.7M daily users. Filipinos quit jobs to play. Required endless new players.",causeOfDeath:"Ponzi dynamics unsustainable. SLP crashed 95%. Ronin hack was killing blow.",tags:["gamefi","ponzinomics"],type:"collapse",lessons:["Play-to-earn requires infinite growth"],
phoenix:{enabled:true,score:{rebuild:5,market:5,fairLaunch:4},
theLoot:["Gaming + crypto has massive appeal","2.7M daily users proved demand","Problem was unsustainable tokenomics","Game needs to be fun FIRST"],
marketToday:"Gaming $200B+ industry. P2E dead but 'play AND earn' rising. Mobile gaming huge opportunity.",
concept:{name:"FAIR QUEST",description:"Mobile RPG where earning is bonus, not requirement. Cosmetic NFTs. Sustainable token sink. Fun gameplay."},
executionPlan:["Build fun mobile game first","Earnings from cosmetics, not inflation","Token for governance + premium","Fair launch on Bags - earn by playing"],
tokenomics:"Fixed supply. Earnings from game revenue share. Deflationary cosmetic burns."}},

{id:12,name:"OneCoin",category:"Ponzi",launchDate:"2014-01",deathDate:"2017-10",amount:4000000000,description:"No blockchain existed. Crypto Queen vanished.",fullDescription:"Ruja Ignatova promised OneCoin beats Bitcoin. No blockchain existed.",causeOfDeath:"Ruja flew to Athens 2017 and vanished. FBI $250K reward.",tags:["ponzi","fbi-wanted"],type:"rug",lessons:["Verify blockchain exists"],phoenix:{enabled:false}},

{id:13,name:"Olympus DAO",category:"DeFi",launchDate:"2021-03",deathDate:"2022-01",amount:4000000000,description:"(3,3) promised 7,000% APY. Crashed 99%.",fullDescription:"Olympus pioneered (3,3) game theory with 7,000%+ APY staking.",causeOfDeath:"When confidence cracked, OHM crashed from $1,400 to under $15.",tags:["ponzinomics","defi-2.0"],type:"collapse",lessons:["7,000% APY is impossible"],
phoenix:{enabled:true,score:{rebuild:3,market:3,fairLaunch:4},
theLoot:["Protocol-owned liquidity is valid","Treasury management innovative","Community coordination powerful","Bonding mechanism was interesting"],
marketToday:"POL concept lives in Velodrome. Treasury DAOs simpler now. Opportunity for sustainable treasury protocol.",
concept:{name:"OPEN TREASURY",description:"Community treasury with transparent management. Real yield from DeFi. No insane APY. Governance over allocation."},
executionPlan:["Launch treasury with fair distribution","Yield from LP/lending only","Weekly transparent reports","Community votes via Bags governance"],
tokenomics:"Token = share of treasury. No rebasing. Yield distributed based on governance."}},

{id:14,name:"Africrypt",category:"Ponzi",launchDate:"2019-01",deathDate:"2021-04",amount:3600000000,description:"Brothers vanished with 69,000 BTC.",fullDescription:"Cajee brothers accumulated 69,000 BTC.",causeOfDeath:"Claimed hack, told investors NOT to contact police, vanished.",tags:["exit-scam","brothers"],type:"rug",lessons:["If they say don't contact police, contact police"],phoenix:{enabled:false}},

{id:15,name:"BitConnect",category:"Ponzi",launchDate:"2016-01",deathDate:"2018-01",amount:3500000000,description:"OG crypto Ponzi. 1% daily. Carlos Matos meme.",fullDescription:"Promised 1% daily through fake trading bot.",causeOfDeath:"Regulators issued warnings. BCC crashed from $400 to $1.",tags:["ponzi","mlm","meme"],type:"rug",lessons:["1% daily is mathematically impossible"],phoenix:{enabled:false}},

{id:16,name:"Genesis Trading",category:"Lending",launchDate:"2013-01",deathDate:"2023-01",amount:3000000000,description:"$2.36B exposure to 3AC.",fullDescription:"Genesis was DCG's lending arm with massive 3AC exposure.",causeOfDeath:"3AC collapse left $2.36B hole.",tags:["contagion","gemini"],type:"collapse",lessons:["Yield programs inherit counterparty risk"],phoenix:{enabled:false}},

{id:17,name:"StepN",category:"GameFi",launchDate:"2021-12",deathDate:"2022-06",amount:3000000000,description:"Move-to-earn required $1,000 sneaker NFTs.",fullDescription:"Required expensive sneaker NFTs to earn GMT while walking.",causeOfDeath:"China banned app. Ponzi dynamics collapsed.",tags:["move-to-earn","ponzinomics"],type:"collapse",lessons:["$1,000 NFTs to walk is not sustainable"],
phoenix:{enabled:true,score:{rebuild:5,market:5,fairLaunch:5},
theLoot:["Fitness + crypto compelling","3M+ users proved demand","$1K entry barrier was insane","Sustainable: free to start, earn small"],
marketToday:"Fitness apps huge. No dominant Web3 fitness since StepN. Health data valuable. Insurance companies interested.",
concept:{name:"STEP FREE",description:"Move-to-earn with ZERO entry cost. Earn small amounts for walking. Premium for power users. Brand partnerships."},
executionPlan:["Free app - no NFT required","Earn $0.10-1/day for step goals","Premium tier with boosts","Brand partnerships for revenue","Fair launch on Bags"],
tokenomics:"Token earned through activity, burned for premium. Revenue from brands/subs, not new users."}},

{id:18,name:"PlusToken",category:"Ponzi",launchDate:"2018-05",deathDate:"2019-06",amount:2900000000,description:"Chinese MLM with 3 million victims.",fullDescription:"Promised 10-30% monthly through fake arbitrage.",causeOfDeath:"Chinese authorities arrested 109 members.",tags:["ponzi","china"],type:"rug",lessons:["Arbitrage bot claims are fake"],phoenix:{enabled:false}},

{id:19,name:"BAYC",category:"NFT",launchDate:"2021-04",deathDate:"2024-01",amount:2800000000,description:"Floor crashed from 150 ETH to under 10.",fullDescription:"BAYC was ultimate status symbol. Bieber paid $1.3M.",causeOfDeath:"NFT winter. Floor crashed 93%.",tags:["nft-winter","celebrities"],type:"collapse",lessons:["Celebrity purchases mark the top"],phoenix:{enabled:false}},

{id:20,name:"Thodex",category:"Exchange",launchDate:"2017-01",deathDate:"2021-04",amount:2000000000,description:"Turkish CEO fled with $2B. 11,196 years prison.",fullDescription:"Turkey's largest exchange. CEO claimed negotiations then fled.",causeOfDeath:"400K users stranded. CEO caught, sentenced 11,196 years.",tags:["exit-scam","turkey"],type:"rug",lessons:["Watch for sudden maintenance"],phoenix:{enabled:false}},

{id:21,name:"Solidly",category:"DeFi",launchDate:"2022-02",deathDate:"2022-03",amount:2000000000,description:"Andre Cronje quit. $2B TVL fled.",fullDescription:"Andre's ve(3,3) experiment attracted $2B TVL in weeks.",causeOfDeath:"Andre announced leaving crypto. Panic. TVL fled.",tags:["abandoned","andre-cronje"],type:"collapse",lessons:["Protocols dependent on one person are fragile"],
phoenix:{enabled:true,score:{rebuild:4,market:4,fairLaunch:5},
theLoot:["ve(3,3) model works (see Velodrome)","Protocol-owned liquidity valuable","Andre's departure killed it, not design","Needs decentralized team"],
marketToday:"Velodrome proved ve(3,3) works ($300M+ TVL). Opportunity to bring model to Solana with fair launch.",
concept:{name:"VELOCITY",description:"ve(3,3) DEX on Solana. Vote-escrowed tokenomics. Bribes for liquidity. Decentralized team."},
executionPlan:["Fork Velodrome to Solana","Fair launch, no team allocation","Build diverse contributor team","Launch on Bags with governance"],
tokenomics:"veToken model. Emissions by voters. Bribes create revenue. No founder dependency."}},

{id:22,name:"IRON/TITAN",category:"DeFi",launchDate:"2021-05",deathDate:"2021-06",amount:1900000000,description:"Mark Cuban got rugged. TITAN to zero.",fullDescription:"Partially-collateralized algo stablecoin. Cuban invested.",causeOfDeath:"Death spiral. TITAN crashed to $0.000000035.",tags:["death-spiral","celebrity-victim"],type:"collapse",lessons:["Even billionaires get rugged"],phoenix:{enabled:false}},

{id:23,name:"Finiko",category:"Ponzi",launchDate:"2019-01",deathDate:"2021-07",amount:1500000000,description:"Russian Ponzi. 30% monthly.",fullDescription:"Operated in Russia promising 30% monthly.",causeOfDeath:"Russian authorities arrested founder.",tags:["ponzi","russia"],type:"rug",lessons:["30% monthly is impossible"],phoenix:{enabled:false}},

{id:24,name:"Wonderland TIME",category:"DeFi",launchDate:"2021-09",deathDate:"2022-01",amount:1200000000,description:"Treasury managed by convicted felon.",fullDescription:"OHM fork with $1B+ treasury. 0xSifu managed funds.",causeOfDeath:"ZachXBT revealed 0xSifu was Michael Patryn.",tags:["criminal","ohm-fork"],type:"collapse",lessons:["Anonymous treasury = risk"],phoenix:{enabled:false}},

{id:25,name:"Ronin Bridge",category:"Bridge",launchDate:"2021-06",deathDate:"2022-03",amount:625000000,description:"North Korea stole $625M.",fullDescription:"Axie's bridge. Lazarus Group compromised keys.",causeOfDeath:"$625M drained. Theft unnoticed 6 days.",tags:["hack","north-korea"],type:"hack",lessons:["Nation-state hackers target bridges"],phoenix:{enabled:false}},

{id:26,name:"Mango Markets",category:"DeFi",launchDate:"2021-08",deathDate:"2022-10",amount:114000000,description:"Eisenberg bragged. Got arrested.",fullDescription:"Solana perps DEX. Eisenberg manipulated MNGO price.",causeOfDeath:"Manipulated price 10x, borrowed $114M. Bragged. Arrested.",tags:["manipulation","arrested"],type:"hack",lessons:["Bragging attracts prosecution"],
phoenix:{enabled:true,score:{rebuild:4,market:5,fairLaunch:4},
theLoot:["Perps DEX on Solana has demand","Mango's UX was good","Oracle manipulation was vulnerability","Better price feeds needed"],
marketToday:"Perps huge. Drift, Jupiter Perps growing. Opportunity for manipulation-resistant perps.",
concept:{name:"SAFE PERPS",description:"Perps DEX with multi-oracle feeds and circuit breakers. Manipulation-resistant. Insurance fund."},
executionPlan:["Multi-oracle consensus pricing","Circuit breakers on anomalies","Insurance from trading fees","Fair launch on Bags"],
tokenomics:"Trading fees to stakers and insurance. Governance over risk params."}},

{id:27,name:"Badger DAO",category:"DeFi",launchDate:"2020-12",deathDate:"2021-12",amount:120000000,description:"Frontend attack. Users approved drains.",fullDescription:"Bitcoin DeFi. Hackers compromised Cloudflare key.",causeOfDeath:"Malicious scripts prompted approvals. $120M drained.",tags:["hack","frontend"],type:"hack",lessons:["Frontends are attack vectors"],
phoenix:{enabled:true,score:{rebuild:4,market:4,fairLaunch:4},
theLoot:["BTC in DeFi has demand","Yield on Bitcoin valuable","Frontend security was failure","Concept valid"],
marketToday:"wBTC, tBTC growing. BTC holders want yield. Limited options on Solana.",
concept:{name:"BTC YIELD",description:"BTC on Solana DeFi. Multiple yield strategies. Security-first frontend."},
executionPlan:["Integrate wBTC/tBTC on Solana","Curated yield strategies","No external scripts in frontend","Fair launch on Bags"],
tokenomics:"Governance over strategies. Protocol fees to stakers."}}
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
