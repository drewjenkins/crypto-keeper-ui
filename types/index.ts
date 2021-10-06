declare global {
  const DEVELOPMENT: boolean;
  const HOST: string;
  const SERVER: string;
  const TEST: string;
}

// prettier-ignore
export type Symbol = "TGBP" | "BTC" | "ETH" | "USDT" | "BNB" | "DOT" | "ADA" | "XRP" | "LTC" | "LINK" | "BCH" | "XLM" | "USDC" | "UNI" | "DOGE" | "WBTC" | "XEM" | "ATOM" | "AAVE" | "SOL" | "CRO" | "XMR" | "EOS" | "HT" | "BSV" | "TRX" | "THETA" | "MIOTA" | "LUNA" | "NEO" | "XTZ" | "FTT" | "VET" | "DAI" | "DASH" | "BUSD" | "MKR" | "AVAX" | "KSM" | "GRT" | "FIL" | "SNX" | "LEO" | "ALGO" | "EGLD" | "SUSHI" | "COMP" | "DCR" | "RVN" | "CAKE" | "ZEC" | "BTT" | "VGX" | "ETC" | "CEL" | "YFI" | "UMA" | "FTM" | "ZRX" | "ZIL" | "NEXO" | "REV" | "REN" | "RUNE" | "OKB" | "CHSB" | "WAVES" | "NEAR" | "RENBTC" | "HBAR" | "ICX" | "IOST" | "DGB" | "ONT" | "CELO" | "BNT" | "PAX" | "BTCB" | "BAT" | "NANO" | "MATIC" | "LRC" | "HUSD" | "OMG" | "UST" | "NPXS" | "STX" | "ZEN" | "XVS" | "HOT" | "1INCH" | "FLOW" | "QTUM" | "CRV" | "SC" | "BTG" | "DODO" | "QNT" | "TFUEL" | "HEDG" | "KCS" | "RSR" | "EWT" | "OCEAN" | "MANA" | "ENJ" | "TUSD" | "SRM" | "KNC" | "LSK" | "XVG" | "GLM" | "AMPL" | "NU" | "SNT" | "REP" | "BAND" | "SCRT" | "BAL" | "POLS" | "HNT" | "CVC" | "AR" | "CHZ" | "SWAP" | "ALPHA" | "INJ" | "IOTX" | "ZB" | "CKB" | "GNO" | "ONE" | "KAVA" | "SXP" | "OXT" | "ANT" | "UBT" | "VAI" | "NMR" | "BCD" | "FUN" | "SFI" | "RIF" | "TEL" | "FET" | "KIN" | "MAID" | "TRAC" | "VTHO" | "ANKR" | "ROSE" | "DENT" | "NOIA" | "STRAX" | "KMD" | "TOMO" | "UTK" | "POLY" | "ARDR" | "DNT" | "STORJ" | "BTS" | "ARK" | "BORA" | "STEEM" | "PAXG" | "STAKE" | "AGI" | "MONA" | "MFT" | "WAN" | "BTM" | "GT" | "WAXP" | "ELF" | "RDD" | "CVT" | "COTI" | "ABBC" | "GUSD" | "RLC" | "AVA" | "LOOM" | "MX" | "IRIS" | "ETN" | "HNS" | "REQ" | "JST" | "BADGER" | "XHV" | "REEF" | "UQC" | "NRG" | "PPT" | "PROM" | "MRPH" | "POWR" | "HIVE" | "YFII" | "SYS" | "BRG" | "CTC" | "CCXX" | "HEX" | "DFI" | "WBNB" | "INO" | "THR" | "ZKS" | "INB" | "vBNB" | "NXM" | "IZE" | "ZLW" | "BTMX" | "BEST" | "XDC" | "CIPHC" | "vXVS" | "STETH" | "BCHA" | "GNY" | "BOTX" | "HBTC" | "AMP" | "TTT" | "MIR" | "XWC" | "BAKE" | "DDX" | "vBTC" | "SFP" | "MWC" | "AKT" | "ORN" | "EAURIC" | "SOLO" | "LRG" | "XCM" | "RFOX" | "MATH" | "ICH" | "USDN" | "KEEP" | "SAND" | "TWT" | "EUM" | "DRS" | "SUSD" | "PRQ" | "HTR" | "XOR" | "SKL" | "PERP" | "LINA" | "LIT" | "GRN" | "RAY" | "NFTX" | "CAS" | "BLCT" | "NYE" | "FARM" | "HEGIC" | "HNC" | "MASS" | "GALA" | "MBN" | "BNANA" | "EDG" | "XNC" | "YUSRA" | "vUSDC" | "SAPP" | "JUL" | "TORN" | "MXX" | "BDX" | "RGT" | "AUTO" | "ORC" | "DIGG" | "FRAX" | "RPL" | "SWINGBY" | "BIFI" | "BURGER" | "XIN" | "JULD" | "BCN" | "CELR" | "LPT" | "ALBT" | "AKRO" | "ATT" | "BOND" | "DDIM" | "AION" | "NXS" | "SHR" | "CREAM" | "REV" | "WNXM" | "VLX" | "LTO" | "YOUC" | "PIVX" | "FRONT" | "SPARTA" | "HARD" | "NEST" | "HXRO" | "STMX" | "VITAE" | "WHALE" | "ERG" | "SRK" | "QC" | "QKC" | "ESD" | "LBC" | "UOS" | "PCX" | "ANY" | "AXEL" | "OGN" | "ADK" | "WOO" | "FRM" | "DIVI" | "BZRX" | "DATA" | "SPND" | "BASID" | "DX" | "DAO" | "GAS" | "ID" | "IQ" | "WRX" | "UNFI" | "ADX" | "SUN" | "vETH" | "HPT" | "SNL" | "MVL" | "WIN" | "BOA" | "REW" | "API3" | "WOZX" | "COVER" | "PHA" | "WTC" | "QQQ" | "ATRI" | "DIA" | "MTC" | "PAID" | "TROY" | "FIRO" | "DMCH" | "ELA" | "BIP" | "ARRR" | "EURS" | "KAI" | "TLOS" | "MLN" | "vBUSD" | "BTU" | "ORAI" | "DUSK" | "ORBS" | "CENNZ" | "TT" | "BONDLY" | "AXS" | "KLV" | "BTRS" | "CTK" | "SOLVE" | "FXS" | "TRB" | "POND" | "LON" | "USDX" | "WICC" | "KP3R" | "IGNIS" | "OM" | "MXC" | "CVP" | "MTL" | "AE" | "FLM" | "MAPS" | "ZAP" | "BOT" | "APY" | "NULS" | "AUDIO" | "MUSD" | "MCO" | "EGG" | "NIM" | "TRU" | "TMTG" | "SWTH" | "RAMP" | "BEAM" | "aEth" | "DUCK" | "ONE" | "GHST" | "LOKI" | "ZNN" | "CORE" | "EMC2" | "TITAN" | "ROOM" | "SURE" | "HC" | "WEST" | "DIP" | "OPIUM" | "OCTO" | "BEL" | "CTSI" | "FIDA" | "RING" | "CRE" | "CUSD" | "GLEEC" | "BAO" | "TSHP" | "UFT" | "KDA" | "XSN" | "COS" | "MTA" | "GRS" | "VSYS" | "KRT" | "DRGN" | "FSN" | "KEY" | "WXT" | "DF" | "RNDR" | "SKY" | "BLZ" | "PNK" | "MIN" | "CTXC" | "BNK" | "GXC" | "LAMB" | "RBC" | "DGD" | "APL" | "RCN" | "SUTER" | "UNISTAKE" | "NXT" | "STPT" | "DEXT" | "PNT" | "BHAO" | "SCC" | "DAG" | "MED" | "CND" | "TNC" | "NEBL" | "NSBT" | "LGO" | "VERI" | "FX" | "ARPA" | "FST" | "DVP" | "vUSDT" | "SERO" | "IDEX" | "VTC" | "SRN" | "XLT" | "TVK" | "MEME" | "REVV" | "VRSC" | "AST" | "USDK" | "ARDX" | "QSP" | "MPH" | "SOUL" | "NAS" | "COCOS" | "SPI" | "UPP" | "PIB" | "GRIN" | "EFX" | "WHITE" | "NMC" | "PMA" | "RBTC" | "BRY" | "ANW" | "KSP" | "ULT" | "BAC" | "ALEPH" | "MDT" | "EASY" | "LA" | "PEAK" | "BZ" | "DUCATO" | "KAN" | "RFR" | "GBYTE" | "VIDT" | "XRT" | "AERGO" | "PHB" | "EDR" | "QRL" | "NAV" | "FIO" | "LGCY" | "NKN" | "PAC" | "DAD" | "DREP" | "FXF" | "BPS" | "HEZ" | "DERO" | "SNTVT" | "ZCN" | "PRE" | "BFT" | "MET" | "CRD" | "NEX" | "RFUEL" | "XPR" | "ASTA" | "PERL" | "PROS" | "AOA" | "DEGO" | "BASIC" | "WING" | "RKN" | "STAX" | "HMR" | "AYA" | "CRPT" | "MOF" | "BOR" | "BMI" | "QASH" | "IHF" | "DEC" | "GEO" | "RDN" | "CCA" | "HELMET" | "XSR" | "ZEON" | "PAY" | "XDB" | "YLD" | "DNA" | "SBD" | "SPC" | "CHR" | "SALT" | "WOM" | "DEXE" | "MITX" | "ZEE" | "SENT" | "MLK" | "DG" | "FOR" | "GO" | "KEX" | "NVT" | "ELAMA" | "DOCK" | "BAR" | "LYXe" | "DKA" | "MDA" | "SUKU" | "DMT" | "PICKLE" | "ARMOR" | "PZM" | "DHT" | "VSP" | "CTCN" | "TXL" | "MITH" | "YF-DAI" | "FLG" | "MBL" | "GARD" | "HUM" | "AMO" | "vSXP" | "YOP" | "HAI" | "SFT" | "CRU" | "MARO" | "SOCKS" | "FIS" | "GAL" | "META" | "APPC" | "PRO" | "WABI" | "HAKKA" | "GOM2" | "GVT" | "VID" | "SHROOM" | "FCT" | "BFC" | "CUDOS" | "ETP" | "TOP" | "PTF" | "DAC" | "vLINK" | "DTR" | "CET" | "IDLE" | "TRUE" | "AWC" | "NWC" | "EMRX" | "BIKI" | "RLY" | "QTCON" | "WPR" | "UBQ" | "DSLA" | "ROOK" | "ZYN" | "QLC" | "OAX" | "PAI" | "PI" | "RUFF" | "PROPS" | "BLOCK" | "LOC" | "AMB" | "IQN" | "BHD" | "L2" | "S4F" | "CWS" | "LOL" | "VITE" | "vLTC" | "MOC" | "BWF" | "BRD" | "MIX" | "BTC2" | "KDAG" | "SNOW" | "ESS" | "ACH" | "KEBAB" | "FNT" | "NCASH" | "COMBO" | "GAME" | "USDJ" | "QBIT" | "ZANO" | "RAZOR" | "AME" | "GTO" | "PLTC" | "ARCH" | "MARK" | "VIA" | "POA" | "HGET" | "HUNT" | "POOLZ" | "TCT" | "OBSR" | "IPX" | "DAWN" | "CUT" | "BHP" | "NEW" | "LAYER" | "BF" | "PLC" | "YFL" | "DAPP" | "TRTT" | "OST" | "RINGX" | "CBC" | "ABYSS" | "FREE" | "CON" | "CLO" | "PPC" | "GDC" | "RARI" | "SWRV" | "ABT" | "FSW" | "CDT" | "mAMZN" | "PSG" | "CARD" | "JUV" | "BUX" | "mNFLX" | "GET" | "THUGS" | "VIDY" | "FCT" | "ROOBEE" | "DYP" | "VEST" | "JNT" | "YOYOW" | "TKS" | "MTLX" | "SAN" | "ZEFU" | "VEE" | "mTSLA" | "mIAU" | "XMY" | "XPX" | "vDOT" | "DYN" | "AOG" | "TAU" | "EMC" | "PXL" | "LCX" | "GXT" | "EGT" | "MHC" | "EVX" | "mSLV" | "DOS" | "PBR" | "DTA" | "FTC" | "RFI" | "LET" | "TONE" | "ANCT" | "NLG" | "SHA" | "XTP" | "HYDRO" | "TON" | "MUSE" | "mQQQ" | "TKN" | "mUSO" | "mAAPL" | "mVIXY" | "TEMCO" | "ZT" | "FOAM" | "mBABA" | "mTWTR" | "ACT" | "KCASH" | "mMSFT" | "VIB" | "EPIC" | "BIX" | "SIX" | "SLT" | "XIO" | "SCC" | "CXO" | "LIKE" | "UCA" | "XDN" | "FNX" | "TRADE" | "CVNT" | "LEVL" | "LYM" | "LDO" | "DLT" | "CMT" | "AQT" | "BURST" | "PART" | "VAL" | "VRA" | "GEN" | "STRONG" | "UTNP" | "APM" | "SMART" | "TEN" | "NET" | "FNB" | "THX" | "XMC" | "DEX" | "ATM" | "AUC" | "SYNC" | "TRV" | "HPB" | "SAFE" | "CNTR" | "MRX" | "BTX" | "FO" | "AITRA" | "CS" | "ZEL" | "PCL" | "KRL" | "HYN" | "DCN" | "UTT" | "NIX" | "APIX" | "DOUGH" | "DPT" | "LBTC" | "HOT" | "GEEQ" | "CBK" | "EGG" | "FUSE" | "XFT" | "GNX" | "DOKI" | "NIOX" | "ASR" | "EOSC" | "HTN" | "TNB" | "EUNO" | "LEAD" | "EM" | "ITC" | "LKK" | "SMARTCREDIT" | "XCP" | "TRIX" | "BMX" | "AEON" | "SCP" | "MOON" | "BIZZ" | "NDX" | "ILC" | "SEELE" | "SNGLS" | "HTDF" | "GRID" | "RIO" | "DVC" | "FLO" | "MTH" | "SMT" | "SNM" | "STA" | "VALOR" | "MARS" | "SATT" | "EL" | "OUSD" | "SEEN" | "PHR" | "$ANRX" | "FIC" | "FYZ" | "QCX" | "SOC" | "XST" | "42" | "BIRD" | "NOKU" | "VNXLU" | "BOLT" | "IDNA" | "MOBI" | "YVS" | "WGR" | "NORD" | "REPO" | "COV" | "FLETA" | "SNC" | "PLR" | "CRON" | "BIDR" | "PNT" | "DEP" | "SDT" | "SWFTC" | "GOC" | "COLX" | "POT" | "NPXSXEM" | "LCC" | "QBX" | "NSURE" | "ENQ" | "AGA" | "CAN" | "OG" | "MYST" | "BOND" | "WET" | "KTON" | "ATP" | "MDS" | "XCASH" | "DEPAY" | "MAN" | "DMD" | "HOLD" | "DMG" | "FAT" | "CWV" | "vDAI" | "EQUAD" | "OPEN" | "BAN" | "BLINK" | "BULL" | "TOSC" | "PLF" | "ANJ" | "CSC" | "MFG" | "UUU" | "BBOO" | "ODE" | "CV" | "BTSE" | "SSX" | "DGTX" | "MNE" | "CHI" | "BCDT" | "SKM" | "XMX" | "GSWAP" | "BITG" | "RAVEN" | "XPN" | "PLU" | "UIP" | "ASKO" | "PCM" | "HIT" | "VEO" | "JOB" | "YOU" | "TERN" | "PAR" | "TENT" | "RNO" | "SPHR" | "REM" | "DBC" | "TERC" | "VBIT" | "JRT" | "MAHA" | "AIDUS" | "OCN" | "EXM" | "XYO" | "MIR" | "KARMA" | "???"
// prettier-ignore
export type Label = "Bitcoin" | "Ethereum" | "Tether" | "Binance Coin" | "Polkadot" | "Cardano" | "XRP" | "Litecoin" | "Chainlink" | "Bitcoin Cash" | "Stellar" | "USD Coin" | "Uniswap" | "Dogecoin" | "Wrapped Bitcoin" | "NEM" | "Cosmos" | "Aave" | "Solana" | "Crypto.com Coin" | "Monero" | "EOS" | "Huobi Token" | "Bitcoin SV" | "TRON" | "THETA" | "IOTA" | "Terra" | "Neo" | "Tezos" | "FTX Token" | "VeChain" | "Dai" | "Dash" | "Binance USD" | "Maker" | "Avalanche" | "Kusama" | "The Graph" | "Filecoin" | "Synthetix" | "UNUS SED LEO" | "Algorand" | "Elrond" | "SushiSwap" | "Compound" | "Decred" | "Ravencoin" | "PancakeSwap" | "Zcash" | "BitTorrent" | "Voyager Token" | "Ethereum Classic" | "Celsius" | "yearn.finance" | "UMA" | "Fantom" | "0x" | "Zilliqa" | "Nexo" | "Revain" | "Ren" | "THORChain" | "OKB" | "SwissBorg" | "Waves" | "NEAR Protocol" | "renBTC" | "Hedera Hashgraph" | "ICON" | "IOST" | "DigiByte" | "Ontology" | "Celo" | "Bancor" | "Paxos Standard" | "Bitcoin BEP2" | "Basic Attention Token" | "Nano" | "Polygon" | "Loopring" | "HUSD" | "OMG Network" | "TerraUSD" | "Pundi X" | "Stacks" | "Horizen" | "Venus" | "Holo" | "1inch" | "Flow (Dapper Labs)" | "Qtum" | "Curve DAO Token" | "Siacoin" | "Bitcoin Gold" | "DODO" | "Quant" | "Theta Fuel" | "HedgeTrade" | "KuCoin Token" | "Reserve Rights" | "Energy Web Token" | "Ocean Protocol" | "Decentraland" | "Enjin Coin" | "TrueUSD" | "Serum" | "Kyber Network" | "Lisk" | "Verge" | "Golem" | "Ampleforth" | "NuCypher" | "Status" | "Augur" | "Band Protocol" | "Secret" | "Balancer" | "Polkastarter" | "Helium" | "Civic" | "Arweave" | "Chiliz" | "TrustSwap" | "Alpha Finance Lab" | "Injective Protocol" | "IoTeX" | "ZB Token" | "Nervos Network" | "Gnosis" | "Harmony" | "Kava.io" | "Swipe" | "Orchid" | "Aragon" | "Unibright" | "Vai" | "Numeraire" | "Bitcoin Diamond" | "FunFair" | "saffron.finance" | "RSK Infrastructure Framework" | "Telcoin" | "Fetch.ai" | "Kin" | "MaidSafeCoin" | "OriginTrail" | "VeThor Token" | "Ankr" | "Oasis Network" | "Dent" | "Syntropy" | "Stratis" | "Komodo" | "TomoChain" | "Utrust" | "Polymath" | "Ardor" | "district0x" | "Storj" | "BitShares" | "Ark" | "BORA" | "Steem" | "PAX Gold" | "xDai" | "SingularityNET" | "MonaCoin" | "Hifi Finance" | "Wanchain" | "Bytom" | "GateToken" | "WAX" | "aelf" | "ReddCoin" | "CyberVein" | "COTI" | "ABBC Coin" | "Gemini Dollar" | "iExec RLC" | "Travala.com" | "Loom Network" | "MX Token" | "IRISnet" | "Electroneum" | "Handshake" | "Request" | "JUST" | "Badger DAO" | "Haven Protocol" | "Reef" | "Uquid Coin" | "Energi" | "Populous" | "Prometeus" | "Morpheus.Network" | "Power Ledger" | "Hive" | "DFI.Money" | "Syscoin" | "Bridge Oracle" | "Creditcoin" | "Counos X" | "HEX" | "DeFiChain" | "Wrapped BNB" | "INO COIN" | "ThoreCoin" | "ZKSwap" | "Insight Chain" | "Venus BNB" | "NXM" | "IZE" | "Zelwin" | "BitMax Token" | "Bitpanda Ecosystem Token" | "XinFin Network" | "Cipher Core Token" | "Venus XVS" | "stETH (Lido)" | "Bitcoin Cash ABC" | "GNY" | "botXcoin" | "Huobi BTC" | "Amp" | "The Transfer Token" | "Mirror Protocol" | "WhiteCoin" | "BakeryToken" | "DerivaDAO" | "Venus BTC" | "SafePal" | "MimbleWimbleCoin" | "Akash Network" | "Orion Protocol" | "Eauric" | "Sologenic" | "Largo Coin" | "CoinMetro Token" | "RedFOX Labs" | "MATH" | "Idea Chain Coin" | "Neutrino USD" | "Keep Network" | "The Sandbox" | "Trust Wallet Token" | "Elitium" | "Doctors Coin" | "sUSD" | "PARSIQ" | "Hathor" | "Sora" | "SKALE Network" | "Perpetual Protocol" | "Linear" | "Litentry" | "GreenPower" | "Raydium" | "NFTX" | "Cashaa" | "Bloomzed Loyalty Club Ticket" | "NewYork Exchange" | "Harvest Finance" | "Hegic" | "Hellenic Coin" | "Massnet" | "Gala" | "Mobilian Coin" | "Chimpion" | "Edgeware" | "XeniosCoin" | "YUSRA" | "Venus USDC" | "Sapphire" | "JustLiquidity" | "Tornado Cash" | "Multiplier" | "Beldex" | "Rari Governance Token" | "Auto" | "Orbit Chain" | "DIGG" | "Frax" | "Rocket Pool" | "Swingby" | "Beefy.Finance" | "Burger Swap" | "Mixin" | "JulSwap" | "Bytecoin" | "Celer Network" | "Livepeer" | "AllianceBlock" | "Akropolis" | "Attila" | "BarnBridge" | "DuckDaoDime" | "Aion" | "Nexus" | "ShareToken" | "Cream Finance" | "RChain" | "Wrapped NXM" | "Velas" | "LTO Network" | "yOUcash" | "PIVX" | "Frontier" | "Spartan Protocol" | "HARD Protocol" | "NEST Protocol" | "Hxro" | "StormX" | "Vitae" | "WHALE" | "Ergo" | "SparkPoint" | "Qcash" | "QuarkChain" | "Empty Set Dollar" | "LBRY Credits" | "Ultra" | "ChainX" | "Anyswap" | "AXEL" | "Origin Protocol" | "Aidos Kuneen" | "Wootrade" | "Ferrum Network" | "Divi" | "bZx Protocol" | "Streamr" | "Spendcoin" | "Basid Coin" | "DxChain Token" | "DAO Maker" | "Gas" | "Everest" | "Everipedia" | "WazirX" | "Unifi Protocol DAO" | "AdEx Network" | "SUN" | "Venus ETH" | "Huobi Pool Token" | "Sport and Leisure" | "MVL" | "WINk" | "BOSAGORA" | "Rewardiqa" | "API3" | "EFFORCE" | "COVER Protocol" | "Phala.Network" | "Waltonchain" | "Poseidon Network" | "Atari Token" | "DIA" | "Metacoin" | "PAID Network" | "TROY" | "Firo" | "Darma Cash" | "Elastos" | "Minter Network" | "Pirate Chain" | "STASIS EURO" | "KardiaChain" | "Telos" | "Enzyme" | "Venus BUSD" | "BTU Protocol" | "Oraichain Token" | "Dusk Network" | "Orbs" | "Centrality" | "Thunder Token" | "Bondly" | "Axie Infinity" | "Klever" | "Bitball Treasure" | "CertiK" | "SOLVE" | "Frax Share" | "Tellor" | "Marlin" | "Tokenlon Network Token" | "USDX [Kava]" | "WaykiChain" | "Keep3rV1" | "Ignis" | "MANTRA DAO" | "MXC" | "PowerPool" | "Metal" | "Aeternity" | "Flamingo" | "MAPS" | "Zap" | "Bounce Token" | "APY.Finance" | "NULS" | "Audius" | "mStable USD" | "MCO" | "Goose Finance" | "Nimiq" | "TrueFi" | "The Midas Touch Gold" | "Switcheo" | "RAMP" | "Beam" | "ankrETH" | "Duck DAO (DLP Duck Token)" | "BigONE Token" | "Aavegotchi" | "Oxen" | "Zenon" | "cVault.finance" | "Einsteinium" | "TitanSwap" | "OptionRoom" | "inSure DeFi" | "HyperCash" | "Waves Enterprise" | "Etherisc DIP Token" | "Opium" | "OctoFi" | "Bella Protocol" | "Cartesi" | "Bonfida" | "Darwinia Network" | "Carry" | "Celo Dollar" | "Gleec" | "Bao Finance" | "12Ships" | "UniLend" | "Kadena" | "Stakenet" | "Contentos" | "Meta" | "Groestlcoin" | "v.systems" | "TerraKRW" | "Dragonchain" | "Fusion" | "Selfkey" | "Wirex Token" | "dForce" | "Render Token" | "Skycoin" | "Bluzelle" | "Kleros" | "MINDOL" | "Cortex" | "Bankera" | "GXChain" | "Lambda" | "Rubic" | "DigixDAO" | "Apollo Currency" | "Ripio Credit Network" | "suterusu" | "Unistake" | "Nxt" | "Standard Tokenization Protocol" | "DEXTools" | "pNetwork" | "Bithao" | "STEM CELL COIN" | "Constellation" | "MediBloc" | "Cindicator" | "TNC Coin" | "Neblio" | "Neutrino Token" | "LGO Token" | "Veritaseum" | "Function X" | "ARPA Chain" | "1irstcoin" | "Decentralized Vulnerability Platform" | "Venus USDT" | "Super Zero Protocol" | "IDEX" | "Vertcoin" | "SIRIN LABS Token" | "Nexalt" | "Terra Virtua Kolect" | "Meme" | "REVV" | "VerusCoin" | "AirSwap" | "USDK" | "ArdCoin" | "Quantstamp" | "88mph" | "Phantasma" | "Nebulas" | "Cocos-BCX" | "Shopping" | "Sentinel Protocol" | "PIBBLE" | "Grin" | "Effect.AI" | "Whiteheart" | "Namecoin" | "PumaPay" | "RSK Smart Bitcoin" | "Berry Data" | "Anchor Neural World" | "KLAYswap Protocol" | "Ultiledger" | "Basis Cash" | "Aleph.im" | "Measurable Data Token" | "EasyFi" | "LATOKEN" | "PEAKDEFI" | "BitZ Token" | "Ducato Protocol Token" | "BitKan" | "Refereum" | "Obyte" | "VIDT Datalink" | "Robonomics.network" | "Aergo" | "Phoenix Global" | "Endor Protocol" | "Quantum Resistant Ledger" | "Navcoin" | "FIO Protocol" | "LGCY Network" | "NKN" | "PAC Global" | "DAD" | "DREP" | "Finxflo" | "BitcoinPoS" | "Hermez Network" | "Dero" | "Sentivate" | "0Chain" | "Presearch" | "BnkToTheFuture" | "Metronome" | "CryptalDash" | "Nash Exchange" | "Rio DeFi" | "Proton" | "ASTA" | "Perlin" | "Prosper" | "Aurora" | "Dego Finance" | "BASIC" | "Wing" | "Rakon" | "StableXSwap" | "Homeros" | "Aryacoin" | "Crypterium" | "Molecular Future" | "BoringDAO" | "Bridge Mutual" | "QASH" | "Invictus Hyperion Fund" | "Decentr" | "GeoDB" | "Raiden Network Token" | "Counos Coin" | "Helmet.insure" | "Xensor" | "ZEON" | "TenX" | "DigitalBits" | "YIELD App" | "Metaverse Dualchain Network Architecture" | "Steem Dollars" | "SpaceChain" | "Chromia" | "SALT" | "WOM Protocol" | "DeXe" | "Morpheus Labs" | "ZeroSwap" | "Sentinel" | "MiL.k" | "Decentral Games" | "ForTube" | "GoChain" | "Kira Network" | "NerveNetwork" | "Elamachain" | "Dock" | "FC Barcelona Fan Token" | "LUKSO" | "dKargo" | "Moeda Loyalty Points" | "SUKU" | "DMarket" | "Pickle Finance" | "ARMOR" | "PRIZM" | "dHedge DAO" | "Vesper" | "CONTRACOIN" | "Tixl" | "Mithril" | "YFDAI.FINANCE" | "Folgory Coin" | "MovieBloc" | "Hashgard" | "Humanscape" | "AMO Coin" | "Venus SXP" | "Yield Optimization Platform & Protocol" | "Hacken Token" | "Safex Token" | "Crust" | "Maro" | "Unisocks" | "Stafi" | "Galatasaray Fan Token" | "Metadium" | "AppCoins" | "Propy" | "Wabi" | "Hakka.Finance" | "AnimalGo" | "Genesis Vision" | "VideoCoin" | "Shroom.Finance" | "Factom" | "Bifrost" | "CUDOS" | "Metaverse ETP" | "TOP" | "PowerTrade Fuel" | "Davinci Coin" | "Venus LINK" | "Dynamic Trading Rights" | "CoinEx Token" | "Idle" | "TrueChain" | "Atomic Wallet Coin" | "Newscrypto" | "Emirex Token" | "BIKI" | "Rally" | "Quiztok" | "WePower" | "Ubiq" | "DSLA Protocol" | "KeeperDAO" | "Zynecoin" | "QLC Chain" | "OAX" | "Project Pai" | "PCHAIN" | "Ruff" | "Props Token" | "Blocknet" | "LockTrip" | "Ambrosus" | "IQeon" | "BitcoinHD" | "Leverj Gluon" | "S4FE" | "Crowns" | "LOLTOKEN" | "VITE" | "Venus LTC" | "Moss Coin" | "Beowulf" | "Bread" | "MixMarvel" | "Bitcoin 2" | "King DAG" | "SnowSwap" | "Essentia" | "Alchemy Pay" | "Kebab Token" | "Falcon Project" | "Nucleus Vision" | "Furucombo" | "GameCredits" | "USDJ" | "Qubitica" | "Zano" | "Razor Network" | "AMEPAY" | "Gifto" | "PlatonCoin" | "Archer DAO Governance Token" | "Benchmark Protocol" | "Viacoin" | "POA" | "Hedget" | "HUNT" | "Poolz Finance" | "TokenClub" | "Observer" | "Tachyon Protocol" | "Dawn Protocol" | "CUTcoin" | "BHPCoin" | "Newton" | "UniLayer" | "BitForex Token" | "PLATINCOIN" | "YF Link" | "LiquidApps" | "Trittium" | "OST" | "RING X PLATFORM" | "Casino Betting Coin" | "Abyss" | "FREE Coin" | "CONUN" | "Callisto Network" | "Peercoin" | "Global Digital Content" | "Rarible" | "Swerve" | "Arcblock" | "Falconswap" | "Blox" | "Mirrored Amazon" | "Paris Saint-Germain Fan Token" | "Cardstack" | "Juventus Fan Token" | "BUX Token" | "Mirrored Netflix" | "GET Protocol" | "Thugs Finance" | "VIDY" | "FirmaChain" | "ROOBEE" | "DeFi Yield Protocol" | "VestChain" | "Jibrel Network" | "YOYOW" | "Tokes" | "Mettalex" | "Santiment Network Token" | "Zenfuse" | "BLOCKv" | "Mirrored Tesla" | "Mirrored iShares Gold Trust" | "Myriad" | "ProximaX" | "Venus DOT" | "Dynamic" | "smARTOFGIVING" | "Lamden" | "Emercoin" | "PIXEL" | "LCX" | "Gem Exchange And Trading" | "Egretia" | "#MetaHash" | "Everex" | "Mirrored iShares Silver Trust" | "DOS Network" | "PolkaBridge" | "DATA" | "Feathercoin" | "reflect.finance" | "LinkEye" | "TE-FOOD" | "Anchor" | "Gulden" | "Safe Haven" | "Tap" | "Hydro" | "Tokamak Network" | "Muse" | "Mirrored Invesco QQQ Trust" | "Monolith" | "Mirrored United States Oil Fund" | "Mirrored Apple" | "Mirrored ProShares VIX" | "TEMCO" | "ZBG Token" | "FOAM" | "Mirrored Alibaba" | "Mirrored Twitter" | "Achain" | "Kcash" | "Mirrored Microsoft" | "Viberate" | "Epic Cash" | "Bibox Token" | "SIX" | "Smartlands Network" | "Blockzero Labs" | "StakeCubeCoin" | "CargoX" | "LikeCoin" | "UCA Coin" | "DigitalNote" | "FinNexus" | "Unitrade" | "Content Value Network" | "Levolution" | "Lympo" | "Lido DAO Token" | "Agrello" | "CyberMiles" | "Alpha Quark Token" | "Burst" | "Particl" | "Validity" | "Verasity" | "DAOstack" | "Strong" | "Universa" | "apM Coin" | "SmartCash" | "Tokenomy" | "NEXT" | "FNB Protocol" | "ThoreNext" | "Monero Classic" | "DEX" | "Atletico De Madrid Fan Token" | "Auctus" | "SYNC Network" | "TrustVerse" | "High Performance Blockchain" | "Safe" | "Centaur" | "Metrix Coin" | "BitCore" | "FIBOS" | "Aitra" | "Credits" | "Zel" | "Peculium" | "Kryll" | "Hyperion" | "Dentacoin" | "United Traders Token" | "NIX" | "APIX" | "PieDAO DOUGH v2" | "Diamond Platform Token" | "Lightning Bitcoin" | "Hydro Protocol" | "Geeq" | "Cobak Token" | "Nestree" | "Fuse Network" | "Offshift" | "Genaro Network" | "Doki Doki Finance" | "Autonio" | "AS Roma Fan Token" | "EOS Force" | "Heart Number" | "Time New Bank" | "EUNO" | "Lead Wallet" | "Eminer" | "IoT Chain" | "Lykke" | "SmartCredit Token" | "Counterparty" | "TriumphX" | "BitMart Token" | "Aeon" | "ScPrime" | "Mooncoin" | "BIZZCOIN" | "Indexed Finance" | "ILCOIN" | "Seele-N" | "SingularDTV" | "Orient Walt" | "Grid+" | "Realio Network" | "DragonVein" | "FLO" | "Monetha" | "SmartMesh" | "SONM" | "STATERA" | "Valor Token" | "Marscoin" | "SaTT" | "ELYSIA" | "Origin Dollar" | "SEEN" | "Phore" | "AnRKey X" | "Filecash" | "Fyooz" | "QuickX Protocol" | "All Sports" | "Stealth" | "42-coin" | "Bird.Money" | "Noku" | "VNX Exchange" | "BOLT" | "Idena" | "Mobius" | "YVS.Finance" | "Wagerr" | "Nord Finance" | "REPO" | "Covesting" | "FLETA" | "SunContract" | "Pillar" | "Cryptocean" | "BIDR" | "Penta" | "DEAPcoin" | "Stake DAO" | "SwftCoin" | "GoCrypto Token" | "ColossusXT" | "PotCoin" | "Pundi X NEM" | "Litecoin Cash" | "qiibee" | "Nsure.Network" | "Enecuum" | "AGA Token" | "CanYaCoin" | "OG Fan Token" | "Mysterium" | "Bonded Finance" | "WeShow Token" | "Darwinia Commitment Token" | "Atlas Protocol" | "MediShares" | "X-CASH" | "DePay" | "Matrix AI Network" | "Diamond" | "HOLD" | "DMM: Governance" | "Fatcoin" | "CWV Chain" | "Venus DAI" | "QuadrantProtocol" | "Open Governance Token" | "Banano" | "BLink" | "BuySell" | "T.OS" | "PlayFuel" | "Aragon Court" | "CasinoCoin" | "Smart MFG" | "U Network" | "Panda Yield" | "ODEM" | "carVertical" | "BTSE" | "SOMESING" | "Digitex" | "Minereum" | "Chi Gastoken" | "Blockchain Certified Data Token" | "Skrumble Network" | "XMax" | "Gameswap" | "BitGreen" | "Raven Protocol" | "PANTHEON X" | "Pluton" | "UnlimitedIP" | "ASKO" | "Precium" | "HitChain" | "Amoveo" | "Jobchain" | "YOU COIN" | "Ternio" | "Parachute" | "TENT" | "Earneo" | "Sphere" | "Remme" | "DeepBrain Chain" | "TronEuropeRewardCoin" | "Valobit" | "Jarvis Network" | "MahaDAO" | "AIDUS TOKEN" | "Odyssey" | "EXMO Coin" | "XYO" | "MIR COIN" | "KARMA" | "Unknown";

export type CryptoName = {
  label: Label;
  symbol: Symbol;
  tradeable: boolean;
  iconUrl?: string;
};
export type UTCString = string;

export enum TransactionType {
  "purchase" = "purchase",
  "exchange-purchase" = "exchange-purchase",
  "exchange-sale" = "exchange-sale",
  "sale" = "sale",
  "exchange" = "exchange",
  "other" = "other",
  "hide" = "hide",
  "unknown" = "unknown",
  "moneyPurchase" = "moneyPurchase",
}

export type CryptoTransaction = {
  timestamp: number;
  type: TransactionType;
  rawType: TransactionKind;
  description?: string;
  amount: number;
  transactionAmount: number;
  transactionAmountUSD: number;
  currency: string;
  exchangeRate: number;
  pricePerUnit: number;
  costBasis: number;
  crypto: CryptoName;
  label: Label;
  coin: Symbol;
  symbol: Symbol;
  id: string;
};

export type TableField = {
  field: string;
  headerName: string;
  width?: number;
  sortComparator?: Function;
  hide?: boolean;
  renderCell?: Function;
};
export type TableColumns = Array<TableField>;

export type HistoricalData = {
  priceChange: number;
  priceChangePercent: number;
};
export type CryptoStatus = "active";

export type Crypto = {
  id: Symbol;
  label: Label;
  rank: number;
  price: number;
  market_cap: number;
  market_cap_rank: number;
  icon_url: string;
  tradeable: boolean;
  sparkline: Array<number>;
  history_1h: HistoricalData;
  history_1d: HistoricalData;
  history_7d: HistoricalData;
  history_30d: HistoricalData;
  history_365d: HistoricalData;
};

export type Position = {
  id: string;
  symbol: Symbol;
  coin: Symbol;
  label: Label;
  quantity: number;
  price: number;
  rank: number;
  marketValue: number;
  costBasis: number;
  costPerShare: number;
  dayChange: number;
  dayChangePercent: number;
  weekChange: number;
  weekChangePercent: number;
  monthChange: number;
  monthChangePercent: number;
  yearChange: number;
  yearChangePercent: number;
  hourChange: number;
  hourChangePercent: number;
  gainLoss: number;
  gainLossPercent: number;
  portfolioPercentage: number;
  transactions: Array<CryptoTransaction>;
  icon_url?: string;
  sparkline: Array<number>;
};

export type Totals = {
  day: number;
  dayPercent: number;
  overall: number;
  overallPercent: number;
  portfolioValue: number;
  overallCostBasis: number;
  cashback?: number;
  cashbackQuantity?: number;
};

export type ExchangeRateTypes =
  | "CAD"
  | "HKD"
  | "ISK"
  | "PHP"
  | "DKK"
  | "HUF"
  | "CZK"
  | "GBP"
  | "RON"
  | "SEK"
  | "IDR"
  | "INR"
  | "BRL"
  | "RUB"
  | "HRK"
  | "JPY"
  | "THB"
  | "CHF"
  | "EUR"
  | "MYR"
  | "BGN"
  | "TRY"
  | "CNY"
  | "NOK"
  | "NZD"
  | "ZAR"
  | "USD"
  | "MXN"
  | "SGD"
  | "AUD"
  | "ILS"
  | "KRW"
  | "PLN";

export enum TransactionKind {
  //--- Guessing -- Get more data //
  "dynamic_coin_swap_bonus_earn_deposit" = "dynamic_coin_swap_bonus_earn_deposit",
  "reimbursement" = "reimbursement",
  "referral_bonus" = "referral_bonus",
  "mco_stake_reward" = "mco_stake_reward",
  "crypto_earn_program_withdrawn" = "crypto_earn_program_withdrawn",
  "gift_card_reward" = "gift_card_reward",
  "crypto_wallet_swap_credited" = "crypto_wallet_swap_credited",
  "crypto_wallet_swap_debited" = "crypto_wallet_swap_debited",
  "crypto_payment" = "crypto_payment",
  //---
  "crypto_viban_exchange" = "crypto_viban_exchange",
  "airdrop_to_exchange_transfer" = "airdrop_to_exchange_transfer",
  "cro_airdrop_adjusted" = "cro_airdrop_adjusted",
  "referral_gift" = "referral_gift",
  "lockup_upgrade" = "lockup_upgrade",
  "recurring_buy_order" = "recurring_buy_order",
  "crypto_withdrawal" = "crypto_withdrawal",
  "supercharger_deposit" = "supercharger_deposit",
  "supercharger_withdrawal" = "supercharger_withdrawal",
  "crypto_transfer" = "crypto_transfer",
  "crypto_to_exchange_transfer" = "crypto_to_exchange_transfer",
  "exchange_to_crypto_transfer" = "exchange_to_crypto_transfer",
  "viban_purchase" = "viban_purchase",
  "crypto_purchase" = "crypto_purchase",
  "van_purchase" = "van_purchase",
  "crypto_to_van_sell_order" = "crypto_to_van_sell_order",
  "dust_conversion_credited" = "dust_conversion_credited",
  "dust_conversion_debited" = "dust_conversion_debited",
  "crypto_earn_program_created" = "crypto_earn_program_created",
  "crypto_exchange" = "crypto_exchange",
  "crypto_deposit" = "crypto_deposit",
  "lockup_lock" = "lockup_lock",
  "referral_card_cashback" = "referral_card_cashback",
  "crypto_earn_interest_paid" = "crypto_earn_interest_paid",
  "card_cashback_reverted" = "card_cashback_reverted",
  "card_top_up" = "card_top_up",
  "dynamic_coin_swap_credited" = "dynamic_coin_swap_credited",
  "dynamic_coin_swap_debited" = "dynamic_coin_swap_debited",
  "lockup_swap_credited" = "lockup_swap_credited",
  "lockup_swap_debited" = "lockup_swap_debited",
  "invest_deposit" = "invest_deposit",
  "invest_withdrawal" = "invest_withdrawal",
  "airdrop_locked" = "airdrop_locked",
  "lockup_unlock" = "lockup_unlock",
  "reimbursement_reverted" = "reimbursement_reverted",
  "transfer_cashback" = "transfer_cashback",
  "lockup_swap_rebate" = "lockup_swap_rebate",
  "dynamic_coin_swap_bonus_exchange_deposit" = "dynamic_coin_swap_bonus_exchange_deposit",
  "interest_swap_credited" = "interest_swap_credited",
  "interest_swap_debited" = "interest_swap_debited",
  "admin_wallet_credited" = "admin_wallet_credited",
  "crypto_credit_loan_credited" = "crypto_credit_loan_credited",
  "crypto_credit_program_created" = "crypto_credit_program_created",
  "pay_checkout_reward" = "pay_checkout_reward",
  "campaign_reward" = "campaign_reward",
  "staking_reward" = "staking_reward",
  "xfers_purchase" = "xfers_purchase",
  "crypto_earn_extra_interest_paid" = "crypto_earn_extra_interest_paid",
}

export const unknownTransactionKinds = [
  TransactionKind.dynamic_coin_swap_bonus_earn_deposit,
  TransactionKind.lockup_swap_credited,
  TransactionKind.lockup_swap_debited,
];

export type RawTransaction = {
  "Timestamp (UTC)": UTCString;
  "Transaction Description": string;
  Currency: Symbol;
  Amount: string;
  "To Currency"?: Symbol | null;
  "To Amount"?: string | null;
  "Native Currency": "USD";
  "Native Amount": string;
  "Native Amount (in USD)": string;
  "Transaction Kind": TransactionKind;
};

export type RawHistoricalData = {
  market_cap_change: string;
  market_cap_change_pct: string;
  price_change: string;
  price_change_pct: string;
  volume: string;
  volume_change: string;
  volume_change_pct: string;
};

export type RawCryptoDef = { _source: RawCrypto };
export type RawCrypto = {
  symbol: Symbol;
  label: Label;
  rank: number;
  price: number;
  market_cap: number;
  market_cap_rank: number;
  icon_url: string;
  tradeable: boolean;
  sparkline: string;
  history_1h: string;
  history_1d: string;
  history_7d: string;
  history_30d: string;
  history_365d: string;
};
