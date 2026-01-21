// CRYPTO GRAVEYARD v5.0 - Phoenix Protocol Edition
// Inspired by loot-drop.io - Deep, informative, resurrection-ready
const BAGS_REFERRAL = "https://bags.fm/?ref=cryptograveyrd";

const cryptoCorpses = [
// ============================================
// PHOENIX-ENABLED PROJECTS (Top 5 Resurrection Candidates)
// ============================================

{id:1,name:"Axie Infinity",category:"GameFi",launchDate:"2018-03",deathDate:"2022-06",amount:4200000000,
description:"Play-to-earn gaming that onboarded millions - then collapsed when the music stopped.",
valueProposition:"Axie proved crypto gaming could achieve mainstream adoption. At peak, 2.7 million daily active users were earning real income through gameplay. Filipino players quit jobs to play full-time. The core insight was valid: people will spend enormous time in games, so let them earn while playing.",
causeOfDeath:"The fatal flaw was pure ponzinomics - new player money paid existing players. When growth slowed, the SLP token crashed 99%. The Ronin bridge hack ($625M) accelerated collapse, but the economic model was already dying. Players realized they were working, not playing.",
tags:["gamefi","ponzinomics","mass-adoption"],type:"collapse",
lessons:[
"Game must be fun WITHOUT earning - earning is bonus, not core loop",
"Token emissions must be tied to real revenue, not new deposits",
"Two-token models (governance + utility) can spiral if not balanced",
"Scholarship systems created extraction, not community",
"Mobile-first would have 10x'd the addressable market"
],
keyPeople:[
{role:"Founder",name:"Trung Nguyen"},
{role:"Founder",name:"Aleksander Larsen"},
{role:"Investor",name:"Andreessen Horowitz"},
{role:"Investor",name:"Paradigm"}
],
phoenix:{enabled:true,
score:{rebuild:5,market:5,fairLaunch:4},
theAlpha:[
"2.7M daily users proved crypto gaming demand is REAL",
"Breeding mechanics created genuine emotional attachment to NFTs",
"Community guilds showed power of coordinated play",
"Mobile gaming is $90B+ market barely touched by crypto",
"Battle mechanics were actually engaging - the game had real depth"
],
marketToday:"Gaming is a $200B+ industry. Mobile gaming alone is $90B. Play-to-earn is dead, but 'play-AND-earn' is emerging. Successful examples: Pixels (casual farming), Big Time (AAA quality). The gap: a fair-launched mobile game where earning enhances fun rather than replacing it.",
protocols:["Solana Gaming","Immutable X","Arbitrum Nova"],
concept:{
name:"QUEST PROTOCOL",
tagline:"The game you'd play even if tokens were worthless",
description:"Mobile-first RPG where the core loop is genuinely fun. Tokens earned through gameplay but capped daily to prevent grinding culture. NFTs are cosmetic flexes, not pay-to-win. Revenue from battle passes and cosmetics - a proven $50B+ market. Token holders get revenue share, not inflation."
},
executionPlan:[
{step:"Build genuinely fun mobile game first - 3 month prototype with no crypto",title:"Game First"},
{step:"Soft launch to test retention - target 20% Day-30 retention before adding tokens",title:"Validate Fun"},
{step:"Add optional token earning - capped at $5-10/day to prevent job-ification",title:"Sustainable Earn"},
{step:"Fair launch governance token on Bags - earned through gameplay achievements",title:"Fair Launch"},
{step:"Revenue share to stakers from cosmetic sales - real yield, not emissions",title:"Real Revenue"}
],
tokenomics:"Fixed 100M supply. No emissions - tokens earned from one-time achievement unlocks only. Revenue from cosmetics/battle passes: 70% to stakers, 20% treasury, 10% dev. Deflationary: 5% burn on cosmetic purchases.",
monetization:"Battle passes ($10/season), cosmetic NFTs ($1-100), tournament entry (5% rake). Target: $2 ARPU on 500K MAU = $1M/month to token holders.",
risks:["Mobile dev is expensive","Crypto gaming reputation damaged","App store NFT policies"]
}},

{id:2,name:"Terra/LUNA",category:"L1 Blockchain",launchDate:"2018-04",deathDate:"2022-05",amount:40000000000,
description:"The algorithmic stablecoin that promised 20% yields - until the death spiral consumed $40 billion.",
valueProposition:"Terra built an ecosystem around UST, an algorithmic stablecoin. 20% APY on Anchor attracted massive deposits. At peak, UST was #3 stablecoin with $18B+ market cap. The vision of decentralized, scalable stable money was compelling.",
causeOfDeath:"UST maintained peg through LUNA minting/burning. When confidence cracked, the algorithm minted trillions of LUNA defending the peg. LUNA crashed from $119 to $0.00001 in days. The 20% yield was subsidized - when reserves depleted, the spiral began.",
tags:["death-spiral","stablecoin","algorithmic"],type:"collapse",
lessons:[
"Algorithmic stables without collateral are inherently fragile",
"20% 'stable' yield is a red flag - where does it come from?",
"Reflexive mechanisms spiral both directions",
"Don't build ecosystems on single points of failure",
"150%+ collateralization needed for black swan survival"
],
keyPeople:[
{role:"Founder",name:"Do Kwon"},
{role:"Founder",name:"Daniel Shin"},
{role:"Investor",name:"Pantera Capital"},
{role:"Investor",name:"Galaxy Digital"}
],
phoenix:{enabled:true,
score:{rebuild:4,market:5,fairLaunch:4},
theAlpha:[
"Proved massive demand for decentralized stables ($18B UST at peak)",
"Simple 'deposit and earn' UX attracted non-crypto natives",
"Ecosystem integration made UST sticky across 100+ apps",
"The PROBLEM was undercollateralization, not the concept",
"Over-collateralized designs (DAI, LUSD) survived the crash"
],
marketToday:"Stablecoin market is $150B+ and growing. USDT/USDC dominate but are centralized - Tether froze $1B+ in 2023. Gap exists for decentralized, over-collateralized stable with sustainable 4-8% yield. Ethena's USDe showing demand for yield-bearing stables.",
protocols:["MakerDAO","Liquity","Ethena","Frax"],
concept:{
name:"FORTRESS",
tagline:"The stablecoin that survives the next crash",
description:"150%+ over-collateralized stablecoin backed by diversified crypto. Sustainable 5-7% APY from real sources: Aave lending, Uniswap LP fees, liquid staking yield. No algorithmic minting. No fake APY. Just math that works."
},
executionPlan:[
{step:"Launch with ETH/stETH collateral vaults at 150% minimum ratio",title:"Solid Foundation"},
{step:"Yield aggregation from Aave, Compound, Lido - transparent dashboard",title:"Real Yield"},
{step:"Liquidation engine with MEV-protected auctions",title:"Safe Liquidations"},
{step:"Fair launch governance on Bags - no VC allocation",title:"Fair Launch"},
{step:"Cross-chain expansion after $50M TVL milestone",title:"Scale Smart"}
],
tokenomics:"Governance token fair launched. No yield from token inflation. Protocol fees (0.5% mint/redeem) distributed to stakers. Emergency shutdown controlled by governance.",
monetization:"0.5% fee on mint/redeem, 10% of yield generated. At $100M TVL with 6% yield = $600K/year protocol revenue.",
risks:["Smart contract risk on yield sources","Collateral price crashes","Competition from established players"]
}},

{id:3,name:"Internet Computer (ICP)",category:"L1 Blockchain",launchDate:"2021-05",deathDate:"2021-05",amount:45000000000,
description:"Launched at $750, crashed to $3 within months. VCs who bought at cents dumped on retail immediately.",
valueProposition:"Dfinity's Internet Computer promised to replace traditional cloud computing. Run websites, apps, and enterprise systems entirely on-chain. The 'blockchain singularity' that would make AWS obsolete. Tech was genuinely innovative - canister smart contracts, reverse gas model, web-speed finality.",
causeOfDeath:"The tech wasn't the problem - tokenomics were. VCs got tokens at $0.03-0.63 and dumped at $400+. Retail bought the top. Price crashed 99.5% in months. The unlock schedule was a slow-motion massacre. Trust destroyed, community demoralized.",
tags:["insider-dump","vc-exit","tokenomics"],type:"collapse",
lessons:[
"Check unlock schedules before buying ANYTHING",
"Launch valuations represent peak delusion, not value",
"VC entry prices vs retail prices = guaranteed dump",
"Good tech doesn't save bad tokenomics",
"Fair launches exist for a reason"
],
keyPeople:[
{role:"Founder",name:"Dominic Williams"},
{role:"Investor",name:"Andreessen Horowitz"},
{role:"Investor",name:"Polychain Capital"},
{role:"Investor",name:"SV Angel"}
],
phoenix:{enabled:true,
score:{rebuild:4,market:5,fairLaunch:5},
theAlpha:[
"Decentralized compute is a real and growing need",
"AI boom creating massive GPU/compute demand",
"Enterprise adoption of blockchain compute was actually growing",
"Canister smart contracts were genuinely innovative",
"VC dumps killed trust, not the underlying technology"
],
marketToday:"Cloud computing is $500B+ and AWS/GCP dominate with 60%+ margins. AI compute demand exploding - GPU costs up 300% since ChatGPT. Decentralized alternatives gaining traction: Akash, Render, io.net. Gap for fair-launched compute network targeting AI workloads.",
protocols:["Akash","Render","io.net","Golem"],
concept:{
name:"COMPUTE FAIR",
tagline:"The cloud that can't dump on you",
description:"Decentralized GPU compute network. 100% fair launch - literally zero VC tokens. Node operators provide GPUs, earn fees. Users pay 40-60% less than AWS for AI inference and training. Community owns the infrastructure."
},
executionPlan:[
{step:"Launch node operator program - target 100 GPUs in first month",title:"Bootstrap Supply"},
{step:"Build simple API matching AWS/GCP interfaces for easy migration",title:"Dev Experience"},
{step:"Fair launch token on Bags - earned by node operators and early users",title:"Fair Launch"},
{step:"Focus on AI inference market - stable demand, predictable workloads",title:"Find PMF"},
{step:"Expand to training workloads after proving reliability",title:"Scale Up"}
],
tokenomics:"100% fair launch. No team tokens, no VC tokens. Earned through: providing compute (70%), using compute (20%), governance participation (10%). Revenue from compute fees distributed to stakers.",
monetization:"10% platform fee on compute transactions. At 1000 GPUs doing $100/day each = $3.65M/year protocol revenue.",
risks:["Cold start problem - need supply and demand simultaneously","Nvidia/cloud provider moats","Decentralized compute UX historically poor"]
}},

{id:4,name:"Celsius Network",category:"CeFi Lending",launchDate:"2017-06",deathDate:"2022-07",amount:12000000000,
description:"Promised 18% yields while gambling customer funds. CEO arrested after $8B frozen.",
valueProposition:"Celsius offered up to 18% APY on crypto deposits. Simple mobile app UX made earning yield accessible to anyone. 'Unbank yourself' messaging resonated with crypto natives tired of 0.01% savings rates. At peak, $25B+ in assets under management.",
causeOfDeath:"CEO Mashinsky publicly attacked banks while secretly gambling customer deposits on risky DeFi plays. When markets crashed, a $1.2B hole was revealed. Withdrawals frozen. Bankruptcy. Mashinsky arrested for fraud. Users lost billions.",
tags:["fraud","cex","yield-fraud"],type:"rug",
lessons:[
"Yields above market rate = hidden risk",
"'Unbank yourself' became 'lose everything yourself'",
"CeFi opacity enables fraud - you can't verify reserves",
"Charismatic CEOs are red flags, not features",
"If you don't control keys, you don't control crypto"
],
keyPeople:[
{role:"Founder",name:"Alex Mashinsky"},
{role:"Investor",name:"WestCap"},
{role:"Investor",name:"CDPQ"},
{role:"Investor",name:"Tether"}
],
phoenix:{enabled:true,
score:{rebuild:4,market:4,fairLaunch:5},
theAlpha:[
"Users genuinely want yield on idle crypto",
"Simple mobile UX attracted millions of non-DeFi users",
"Problem was opacity and fraud, not the service concept",
"Decentralized lending works - Aave has $10B+ TVL",
"Trust through transparency, not charisma"
],
marketToday:"CeFi lending is dead - BlockFi, Celsius, Voyager all bankrupt. DeFi lending thriving but complex for normies. Aave, Compound have billions but require wallet setup, gas management. Gap: Aave-level security with Celsius-level UX. Transparent, non-custodial, simple.",
protocols:["Aave","Compound","Morpho","Spark"],
concept:{
name:"GLASS VAULT",
tagline:"See everything. Trust nothing. Earn anyway.",
description:"Non-custodial lending aggregator with radical transparency. Your keys, always. Real-time dashboard showing exactly where funds are deployed. No black box strategies. Yield from battle-tested protocols only. Mobile app simplicity, DeFi security."
},
executionPlan:[
{step:"Build non-custodial vault contracts - users always control withdrawal",title:"Self-Custody First"},
{step:"Integrate with Aave, Compound, Morpho - only battle-tested protocols",title:"Proven Yield"},
{step:"Real-time transparency dashboard - every position visible on-chain",title:"Glass Box"},
{step:"Mobile app with one-tap deposit/withdraw - abstract gas complexity",title:"Normie UX"},
{step:"Fair launch governance on Bags - fee sharing to token holders",title:"Fair Launch"}
],
tokenomics:"Governance token controls protocol fee switch and strategy allocation. 0.1% management fee on TVL distributed to stakers. No yield from inflation - pure revenue share.",
monetization:"0.1% annual fee on TVL + 5% of yield generated. At $500M TVL earning 5% = $500K management + $1.25M performance = $1.75M/year.",
risks:["Smart contract risk on underlying protocols","Yield compression over time","Competition from protocol-native apps"]
}},

{id:5,name:"Olympus DAO",category:"DeFi 2.0",launchDate:"2021-03",deathDate:"2022-01",amount:4000000000,
description:"(3,3) game theory promised 7,000% APY. Everyone defected. 99% crash.",
valueProposition:"Olympus pioneered 'DeFi 2.0' with protocol-owned liquidity. The (3,3) meme convinced everyone that if we all stake together, we all win together. APY reached 7,000%+. At peak, $4B+ market cap.",
causeOfDeath:"(3,3) assumed everyone cooperates. But game theory predicts defection - and that's exactly what happened. Once a few large holders sold, the game theory flipped to (sell, sell). OHM crashed from $1,400 to under $15.",
tags:["ponzinomics","game-theory","defi-2.0"],type:"collapse",
lessons:[
"7,000% APY is mathematically impossible sustainably",
"Game theory with real money leads to defection",
"Protocol-owned liquidity concept was actually innovative",
"Rebasing tokens are confusing and easily manipulated",
"Memes are not monetary policy"
],
keyPeople:[
{role:"Pseudonymous Founder",name:"Zeus"}
],
phoenix:{enabled:true,
score:{rebuild:3,market:3,fairLaunch:4},
theAlpha:[
"Protocol-owned liquidity (POL) concept lives on in Velodrome/Aerodrome",
"Treasury management approach was genuinely innovative",
"Community coordination mechanics were powerful",
"Bonding mechanism for acquiring liquidity was novel",
"Problem was unsustainable APY, not the POL innovation"
],
marketToday:"POL concept thriving - Velodrome does $100M+ daily volume using OHM's innovations. Treasury DAOs are simpler now. Curve wars showed liquidity coordination matters. Gap: sustainable treasury protocol without insane APY promises.",
protocols:["Velodrome","Aerodrome","Balancer","Curve"],
concept:{
name:"TREASURY ONE",
tagline:"Own the liquidity. Share the yield. No (3,3) BS.",
description:"Community-owned treasury protocol. Bonding to acquire POL at discount. Real yield from LP fees and lending - no rebasing, no fake APY. Transparent weekly reports. Governance controls allocation. Target 15-25% real APY, not 7,000% fake."
},
executionPlan:[
{step:"Launch with initial treasury from fair mint - no VC, no team allocation",title:"Fair Treasury"},
{step:"Bond mechanism for POL acquisition - pay in tokens, get LP at discount",title:"Build Liquidity"},
{step:"Deploy treasury to Aave, Velodrome, Curve - diversified real yield",title:"Real Yield"},
{step:"Weekly transparent reports on all positions and returns",title:"Radical Transparency"},
{step:"Governance votes on strategy allocation - community decides",title:"Community Control"}
],
tokenomics:"Token = pro-rata share of treasury. No rebasing. Real yield distributed based on staking. Bonding creates slight dilution but grows treasury faster than dilution.",
monetization:"Treasury generates yield from DeFi. At $50M treasury earning 20% = $10M/year. Token holders get proportional share minus 10% to operational fund.",
risks:["Treasury management requires expertise","Yield sources can compress","Governance attacks on treasury"]
}},

// ============================================
// GRAVEYARD-ONLY (No Phoenix - Pure Cautionary Tales)  
// ============================================

{id:6,name:"FTX",category:"Exchange",launchDate:"2019-05",deathDate:"2022-11",amount:32000000000,
description:"SBF stole $8B in customer funds while preaching effective altruism. 25 years prison.",
valueProposition:"FTX became the #3 crypto exchange with superior UX, innovative products (prediction markets, tokenized stocks), and aggressive marketing (stadium naming, Super Bowl ads). SBF positioned as the 'adult in the room' - testifying to Congress, meeting with regulators.",
causeOfDeath:"It was all fraud. SBF secretly funneled customer deposits to Alameda Research for risky bets. When CoinDesk exposed Alameda's balance sheet, Binance triggered a bank run. $8B customer hole revealed. SBF arrested, convicted, sentenced to 25 years.",
tags:["fraud","customer-funds","exchange"],type:"rug",
lessons:[
"'Trust me bro' is not proof of reserves",
"Regulatory capture attempts are red flags",
"Charismatic founders with media access are dangerous",
"Commingled funds = theft waiting to happen",
"Only on-chain proof of reserves can be trusted"
],
keyPeople:[
{role:"Founder",name:"Sam Bankman-Fried"},
{role:"Co-founder",name:"Gary Wang"},
{role:"Alameda CEO",name:"Caroline Ellison"},
{role:"Investor",name:"Sequoia Capital"}
],
phoenix:{enabled:false}},

{id:7,name:"Three Arrows Capital",category:"Hedge Fund",launchDate:"2012-01",deathDate:"2022-07",amount:18000000000,
description:"Overleveraged hedge fund borrowed without collateral, then founders fled on yacht.",
valueProposition:"3AC was crypto's most prestigious hedge fund. Su Zhu and Kyle Davies built a $18B AUM empire on the thesis that crypto only goes up. They borrowed billions from every major lender - often with zero collateral based on reputation alone.",
causeOfDeath:"LUNA collapse destroyed their largest position. They ghosted creditors, fled Singapore, and were last seen on a yacht. Bankruptcy revealed they'd been insolvent for months, hiding losses. Founders sentenced in absentia.",
tags:["leverage","fraud","contagion"],type:"collapse",
lessons:[
"Leverage amplifies losses exponentially",
"'Supercycle' thesis = no risk management",
"Reputation-based lending is just vibes",
"When funds stop answering calls, they're already gone",
"Contagion spreads - 3AC took down BlockFi, Voyager, Genesis"
],
keyPeople:[
{role:"Founder",name:"Su Zhu"},
{role:"Founder",name:"Kyle Davies"},
{role:"Victim",name:"Genesis"},
{role:"Victim",name:"Voyager"}
],
phoenix:{enabled:false}},

{id:8,name:"Mt. Gox",category:"Exchange",launchDate:"2010-07",deathDate:"2014-02",amount:8500000000,
description:"Lost 850,000 BTC in the original crypto catastrophe. Creditors waited 10+ years.",
valueProposition:"Mt. Gox handled 70% of all Bitcoin transactions at its peak. Founded as a Magic: The Gathering trading site (the name means 'Magic: The Gathering Online eXchange'), it pivoted to Bitcoin and became the default way to buy BTC.",
causeOfDeath:"Years-long undetected hack drained 850,000 BTC (~$450M then, $50B+ at peak). CEO Mark Karpeles discovered the wallets were empty. Exchange collapsed. Creditors entered a decade-long bankruptcy process. Finally receiving partial repayment in 2024.",
tags:["hack","legendary","bitcoin"],type:"hack",
lessons:[
"Not your keys, not your coins (the OG lesson)",
"Hot wallet security is existentially important",
"Audit your reserves regularly",
"Japanese bankruptcy law is very, very slow",
"The space has come far since 2014"
],
keyPeople:[
{role:"CEO",name:"Mark Karpeles"},
{role:"Founder",name:"Jed McCaleb"}
],
phoenix:{enabled:false}},

{id:9,name:"Anchor Protocol",category:"DeFi",launchDate:"2021-03",deathDate:"2022-05",amount:17000000000,
description:"20% 'stable' yield attracted $17B. The yield was fake. Terra collapsed.",
valueProposition:"Anchor offered 20% APY on UST deposits. One-click deposit, instant yield. At peak, $17B in deposits - the largest DeFi protocol by TVL. The simplicity was killer: deposit stables, earn 20%, no complexity.",
causeOfDeath:"The 20% yield wasn't real - it was subsidized by Terra's reserves. Burn rate was $5M/day. When reserves depleted, Anchor couldn't pay. UST depegged, triggering the death spiral that destroyed Terra/LUNA.",
tags:["unsustainable-yield","terra","subsidized"],type:"collapse",
lessons:[
"If yield seems too good to be true, it is",
"Subsidized yield isn't yield - it's marketing spend",
"Check where yield actually comes from",
"Single protocol dependency is systemic risk",
"Simple UX hid complex (broken) mechanics"
],
keyPeople:[
{role:"Protocol Lead",name:"Terraform Labs"},
{role:"Enabler",name:"Do Kwon"}
],
phoenix:{enabled:false}},

{id:10,name:"BlockFi",category:"CeFi Lending",launchDate:"2017-08",deathDate:"2022-11",amount:10000000000,
description:"3AC exposure created hole, FTX rescue was paid with stolen funds. Double victim.",
valueProposition:"BlockFi pioneered crypto interest accounts. Deposit BTC/ETH, earn 5-9% APY. Raised $1B+, had regulatory licenses, seemed legitimate. When 3AC collapsed, BlockFi had major exposure.",
causeOfDeath:"3AC default left BlockFi with massive losses. FTX 'rescued' them with a credit facility - paid with stolen customer funds. When FTX collapsed months later, BlockFi went down too. Double-victimized by crypto's two biggest frauds.",
tags:["3ac-exposure","ftx-victim","contagion"],type:"collapse",
lessons:[
"Counterparty risk can come from 'rescuers' too",
"Being regulated doesn't mean being safe",
"CeFi yield arbitrage has hidden risks",
"Due diligence on partners matters as much as on investments",
"Contagion cascades are unpredictable"
],
keyPeople:[
{role:"CEO",name:"Zac Prince"},
{role:"Counterparty",name:"Three Arrows Capital"},
{role:"'Rescuer'",name:"FTX"}
],
phoenix:{enabled:false}},

{id:11,name:"Voyager Digital",category:"CeFi Lending",launchDate:"2018-01",deathDate:"2022-07",amount:7000000000,
description:"Lent $650M to 3AC with minimal collateral. Falsely implied FDIC insurance.",
valueProposition:"Voyager was a publicly traded crypto brokerage. Easy app, decent yields, stock ticker gave false legitimacy. They marketed 'FDIC insurance' - technically true for USD (up to $250K), wildly misleading for crypto holdings.",
causeOfDeath:"Voyager lent $650M to 3AC with almost no collateral - because Su Zhu was 'good for it.' 3AC defaulted on everything. 3.5 million Voyager customers lost access. The FDIC insurance claim was investigated for fraud.",
tags:["3ac-exposure","misleading","bankruptcy"],type:"collapse",
lessons:[
"FDIC doesn't cover crypto (and never will)",
"Public company status ≠ legitimate operations",
"Lending without collateral is just giving money away",
"Always read the fine print on 'insurance' claims",
"Counterparty selection is the whole game in lending"
],
keyPeople:[
{role:"CEO",name:"Stephen Ehrlich"},
{role:"Debtor",name:"Three Arrows Capital"}
],
phoenix:{enabled:false}},

{id:12,name:"OneCoin",category:"Ponzi",launchDate:"2014-01",deathDate:"2017-10",amount:4000000000,
description:"No blockchain existed. 'Crypto Queen' Ruja Ignatova vanished with $4B. FBI's most wanted.",
valueProposition:"OneCoin promised to be the 'Bitcoin Killer.' Ruja Ignatova filled stadiums, sold the dream. Millions of people in 175 countries bought in. One problem: there was no blockchain. No coins. Just a number in a database.",
causeOfDeath:"Ruja vanished in October 2017 - boarded a plane in Sofia, never seen again. FBI placed her on Most Wanted list with $250K reward. Her brother Konstantin pled guilty. $4B+ extracted from victims worldwide.",
tags:["ponzi","fbi-wanted","no-blockchain"],type:"rug",
lessons:[
"Verify the blockchain actually exists",
"Cult of personality is the biggest red flag",
"If you can't see it on a block explorer, it's not real",
"MLM + crypto = exponential scam",
"International operations make recovery impossible"
],
keyPeople:[
{role:"Founder",name:"Ruja Ignatova"},
{role:"Co-founder",name:"Konstantin Ignatov"}
],
phoenix:{enabled:false}},

{id:13,name:"Bitconnect",category:"Ponzi",launchDate:"2016-01",deathDate:"2018-01",amount:3500000000,
description:"'BITCONNEEEEECT!' - the meme that cost people everything. Classic Ponzi with crypto paint.",
valueProposition:"Bitconnect promised 1% daily returns through a 'trading bot.' Lend them your BTC, receive daily payments. The testimonials were wild. Carlos Matos screamed 'BITCONNEEECT!' at a conference, creating an immortal meme.",
causeOfDeath:"It was a textbook Ponzi - new deposits paid old investors. Texas and North Carolina issued cease and desist orders. Platform shut down overnight. BCC went from $400+ to under $1. Carlos Matos became a meme, victims became broke.",
tags:["ponzi","classic","meme"],type:"rug",
lessons:[
"1% daily = 3,678% annually (impossible)",
"Lending platforms with guaranteed returns are Ponzis",
"Meme energy doesn't equal legitimacy",
"Regulatory action can collapse schemes instantly",
"If the founder is screaming, you should be running"
],
keyPeople:[
{role:"Promoter",name:"Carlos Matos"},
{role:"Founder",name:"Satish Kumbhani"}
],
phoenix:{enabled:false}},

{id:14,name:"Bitfinex Hack",category:"Exchange",launchDate:"2012-01",deathDate:"2016-08",amount:4500000000,
description:"119,756 BTC stolen. Hackers turned out to be married couple doing rap videos.",
valueProposition:"Bitfinex was a major Bitcoin exchange. In 2016, hackers exploited a vulnerability in their multi-sig setup and drained 119,756 BTC - worth ~$72M at the time.",
causeOfDeath:"The hack exposed serious security flaws. Years later, DOJ arrested Ilya Lichtenstein and Heather Morgan - a married couple. Heather had been making cringe rap videos as 'Razzlekhan' while sitting on billions in stolen BTC. $3.6B recovered.",
tags:["hack","recovered","bizarre"],type:"hack",
lessons:[
"Even sophisticated security can be compromised",
"Stolen crypto can be traced and recovered (eventually)",
"Time doesn't make stolen crypto safe to spend",
"The strangest people end up in crypto crime",
"Hot wallet architecture is inherently risky"
],
keyPeople:[
{role:"Hacker",name:"Ilya Lichtenstein"},
{role:"Hacker",name:"Heather Morgan"}
],
phoenix:{enabled:false}}
];

// ============================================
// HALL OF SHAME (Individuals)
// ============================================

const hallOfShame = [
{rank:1,name:"Sam Bankman-Fried",project:"FTX / Alameda",year:"2022",
photoUrl:"images/sbf.jpg",
extracted:"$8B+ customer funds",peakMC:"$32B valuation",
status:"🔒 Serving 25 years in federal prison",
quote:"I think I was a good CEO. I think I was a substantially worse risk manager.",
viralMoment:"The leaked texts with a reporter: 'Yeah. Basically I'm trying to save the world.' Peak delusion from someone actively stealing billions.",
story:"SBF built FTX into the #3 exchange while secretly funneling customer deposits to Alameda Research. He testified to Congress about crypto regulation while running the largest fraud in the industry. Arrested in Bahamas, extradited, convicted on all 7 counts, sentenced to 25 years.",
videoId:"20BEJouWBgY"},

{rank:2,name:"Do Kwon",project:"Terra/LUNA",year:"2022",
photoUrl:"images/dokwon.jpg",
extracted:"$40B ecosystem destroyed",peakMC:"$60B ecosystem",
status:"🔒 Arrested in Montenegro, awaiting extradition",
quote:"I don't debate the poor.",
viralMoment:"Tweeted 'I don't debate the poor' to critics questioning UST stability. The algorithm then made everyone poor.",
story:"Built Terra ecosystem around algorithmic stablecoin UST. When questioned about death spiral risk, dismissed critics as poor. When UST depegged, his algorithm minted trillions of LUNA, destroying $40B in days. Fled to Serbia, arrested with fake passport in Montenegro.",
videoId:""},

{rank:3,name:"Alex Mashinsky",project:"Celsius",year:"2022",
photoUrl:"images/mashinsky.jpg",
extracted:"$8B customer funds frozen",peakMC:"$25B AUM",
status:"⚖️ Arrested, facing fraud charges",
quote:"Banks are not your friends. They're actually your enemies.",
viralMoment:"Wore 'Banks Are Not Your Friends' t-shirt in interviews, while his platform was literally stealing customer funds worse than any bank ever could.",
story:"Built Celsius to 'unbank' people with 18% yields. Secretly gambled deposits on risky DeFi. When hole discovered, froze withdrawals, tweeted 'funds are safe' (they weren't), and was eventually arrested for fraud. The anti-bank CEO became the worst banker.",
videoId:""},

{rank:4,name:"Su Zhu & Kyle Davies",project:"Three Arrows Capital",year:"2022",
photoUrl:"images/suzhu.jpg",
extracted:"$3.5B owed to creditors",peakMC:"$18B AUM",
status:"🔒 Su Zhu arrested Singapore, Kyle location unknown",
quote:"The supercycle is still intact.",
viralMoment:"Tweeted 'supercycle intact' as their fund was secretly imploding. Then ghosted everyone and fled on a yacht.",
story:"Built crypto's most prestigious hedge fund on infinite leverage and the thesis that crypto only goes up. Borrowed billions without collateral based on reputation. When LUNA collapsed, they went silent, ghosted creditors, and fled. Their collapse took down BlockFi, Voyager, and Genesis.",
videoId:""},

{rank:5,name:"Ruja Ignatova",project:"OneCoin",year:"2017",
photoUrl:"images/ruja.jpg",
extracted:"$4B+",peakMC:"N/A (no blockchain)",
status:"👻 FBI Most Wanted - $250K reward - vanished 2017",
quote:"In two years, nobody will talk about Bitcoin anymore.",
viralMoment:"Filled Wembley Arena with believers, promised OneCoin would replace Bitcoin. There was no blockchain. She vanished with billions.",
story:"The 'Crypto Queen' sold a vision to millions in 175 countries. She claimed OneCoin would surpass Bitcoin. Only problem: no blockchain existed. It was just a number in a database. She boarded a Ryanair flight in Sofia, Bulgaria in October 2017 and hasn't been seen since. $4B+ gone.",
videoId:"64GvMhLrx5A"}
];

// ============================================
// TRENCHES (Recent Rug Pulls & Stunts)
// ============================================

const trenchWarStories = [
{id:'hawk-tuah',name:"Hawk Tuah Token",perpetrator:"Haliey Welch",date:"2024",wtfFactor:9,emoji:"🦅💀",
extracted:"~$1.27M (insiders)",peakMC:"$490M",
shortDescription:"Viral meme girl's token hit $490M in 15 minutes. Insiders dumped. 93% crash. Lawsuit.",
fullStory:"Haliey Welch went viral for her 'Hawk Tuah' moment. Launched token with insider help. Hit $490M market cap in 15 minutes. Insiders who got tokens early dumped $1.27M. She received $125K+ in fees. Crashed 93% in hours. Class action lawsuit filed naming her as defendant.",
aftermath:"Class action lawsuit ongoing. Added as defendant. Career likely over.",
tags:["celebrity","memecoin"],photoUrl:"images/Hawk_Tuah_Token.jpg",blockchain:"Solana",
contractAddress:"HAWKThXRcNL9ZGZKqgUXLm4W8tnRZ7U6MVdEepSutj34",videoId:"qwQTX2vbgRk",videoType:"youtube"},

{id:'quant-kid',name:"Gen Z Quant",perpetrator:"13-year-old",date:"2024",wtfFactor:10,emoji:"👦😭",
extracted:"~$30K",peakMC:"$85M (revenge pump)",
shortDescription:"13-year-old livestream rugged $30K. Cried 'I'm just a kid!' Community revenge-pumped to $85M.",
fullStory:"A 13-year-old livestreamed his token launch. Extracted $30K and celebrated on stream. When community confronted him, he cried 'I'm just a kid!' In an act of pure chaos, the community revenge-pumped his dead token to $85M market cap just to spite him.",
aftermath:"Got doxxed. Launched two more tokens. Rugged those too. Some people don't learn.",
tags:["teen","livestream"],photoUrl:"images/quant.jpg",blockchain:"Solana",
contractAddress:"3an8rhdepsLCya22af7qDBKPbdomw8K4iCHXaA2Gpump",videoId:"jZUeyFKw7u4",videoType:"youtube"},

{id:'squid',name:"Squid Game Token",perpetrator:"Anonymous",date:"2021",wtfFactor:10,emoji:"🦑🎮",
extracted:"~$3.38M",peakMC:"$2,860/token",
shortDescription:"Pumped 45,000% using Netflix hype. Nobody could sell - honeypot contract. $0 in 5 minutes.",
fullStory:"Anonymous devs launched SQUID capitalizing on Netflix show hype. Token pumped 45,000% reaching $2,860 per token. Catch: the smart contract prevented anyone from selling except the devs. Classic honeypot. Devs drained $3.38M in 5 minutes while everyone watched helplessly.",
aftermath:"Became textbook example of honeypot scam. No one ever caught. Netflix not amused.",
tags:["honeypot","netflix"],photoUrl:"images/Squid_Game_Token.jpg",blockchain:"BSC",
contractAddress:"0x87230146E138d3F296a9a77e497A2A83012e9Bc5",videoId:"CpR2kMxy7O8",videoType:"youtube"},

{id:'faze',name:"FaZe Save The Kids",perpetrator:"FaZe Kay & members",date:"2021",wtfFactor:8,emoji:"🎮🤑",
extracted:"~$30K direct + hundreds of thousands from fans",peakMC:"~$2-3M",
shortDescription:"Gaming influencers scammed teen fans with 'charity' token. Anti-whale code secretly changed.",
fullStory:"FaZe Clan members (50M+ followers) promoted 'Save The Kids' charity token. The contract had 'anti-whale' code to prevent dumps - which devs secretly modified. FaZe Kay dumped on his teen fanbase. Coffeezilla investigation exposed the whole scheme.",
aftermath:"FaZe Kay fired from clan. Paid $400-500K in refunds. Some members suspended. Career damaged.",
tags:["influencer","charity-scam"],photoUrl:"images/FaZe_Save_The_Kids.png",blockchain:"BSC",
contractAddress:"0x7acf49997e9598843cb9051389fa755969e551bb",videoId:"6fxtayFVwxQ",videoType:"youtube"},

{id:'ice',name:"CxCoin Rug",perpetrator:"Ice Poseidon",date:"2022",wtfFactor:10,emoji:"🎥💩",
extracted:"$500K",peakMC:"Unknown",
shortDescription:"Raised $500K from fans. Admitted on camera to Coffeezilla: 'I just didn't care.' Zero consequences.",
fullStory:"Streamer Ice Poseidon raised $500K from his community for CxCoin. When Coffeezilla confronted him on camera about stealing from fans, he casually admitted 'I just didn't care about the people that I'm taking money from.' The clip went viral. He faced zero legal consequences.",
aftermath:"Still streaming. No charges filed. Proved you can admit to theft on camera and nothing happens.",
tags:["streamer","confession"],photoUrl:"images/ice_pos.jpg",blockchain:"Ethereum",videoId:"3NA8Ee3RF5E",videoType:"youtube"},

{id:'anubis',name:"AnubisDAO",perpetrator:"Beerus",date:"2021",wtfFactor:9,emoji:"🐺💨",
extracted:"$60M",peakMC:"$60M",
shortDescription:"$60M raised in 20 hours. Drained same day. 'I got phished' excuse. Fastest major rug ever.",
fullStory:"AnubisDAO launched as an OHM fork. Raised $60M in ETH in just 20 hours through a 'fair launch.' All funds were transferred to a single wallet and drained the same day. Dev 'Beerus' claimed he got phished. ZachXBT traced the funds - the 'phishing' story didn't add up.",
aftermath:"Funds never recovered. One of the fastest and largest rugs in DeFi history. 'Phishing' excuse widely mocked.",
tags:["ohm-fork","speedrun"],videoId:"97bHgDkf3pE",videoType:"youtube"}
];

const typeLabels = {rug:"RUG PULL",hack:"HACKED",collapse:"COLLAPSED"};
const typeColors = {rug:"#ff2d55",hack:"#ff9500",collapse:"#bf5af2"};
