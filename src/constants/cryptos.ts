import { CryptoName } from "../../types/index";

export const unknown: CryptoName = {
  label: "Unknown",
  symbol: "???",
  tradeable: false,
};

const cryptos: Array<CryptoName> = [
  {
    label: "Bitcoin",
    symbol: "BTC",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg",
  },
  {
    label: "Ethereum",
    symbol: "ETH",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eth.svg",
  },
  {
    label: "Tether",
    symbol: "USDT",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/usdt.svg",
  },
  {
    label: "Binance Coin",
    symbol: "BNB",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/bnb.svg",
  },
  {
    label: "Polkadot",
    symbol: "DOT",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/DOTOLD.jpg",
  },
  {
    label: "Cardano",
    symbol: "ADA",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ada.svg",
  },
  {
    label: "XRP",
    symbol: "XRP",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/XRP.svg",
  },
  {
    label: "Litecoin",
    symbol: "LTC",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ltc.svg",
  },
  {
    label: "Chainlink",
    symbol: "LINK",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/link.svg",
  },
  {
    label: "Bitcoin Cash",
    symbol: "BCH",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/bch.svg",
  },
  {
    label: "Stellar",
    symbol: "XLM",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/xlm.svg",
  },
  {
    label: "USD Coin",
    symbol: "USDC",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/usdc.svg",
  },
  {
    label: "Uniswap",
    symbol: "UNI",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/UNISWAP.svg",
  },
  {
    label: "Dogecoin",
    symbol: "DOGE",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/doge.svg",
  },
  {
    label: "Wrapped Bitcoin",
    symbol: "WBTC",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/WBTC.png",
  },
  {
    label: "NEM",
    symbol: "XEM",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/xem.svg",
  },
  {
    label: "Cosmos",
    symbol: "ATOM",
    tradeable: true,
    iconUrl:
      "https://nomics-api.s3.us-east-2.amazonaws.com/static/images/currencies/atom.jpg",
  },
  {
    label: "Aave",
    symbol: "AAVE",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/AAVE.jpg",
  },
  {
    label: "Solana",
    symbol: "SOL",
    tradeable: false,
    iconUrl:
      "https://nomics-api.s3.us-east-2.amazonaws.com/static/images/currencies/SOL2.jpg",
  },
  {
    label: "Crypto.com Coin",
    symbol: "CRO",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/cro.jpg",
  },
  {
    label: "Monero",
    symbol: "XMR",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/xmr.svg",
  },
  {
    label: "EOS",
    symbol: "EOS",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/eos.svg",
  },
  {
    label: "Huobi Token",
    symbol: "HT",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ht.jpg",
  },
  {
    label: "Bitcoin SV",
    symbol: "BSV",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/BSV.png",
  },
  {
    label: "TRON",
    symbol: "TRX",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/TRX.svg",
  },
  {
    label: "THETA",
    symbol: "THETA",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/theta.png",
  },
  {
    label: "IOTA",
    symbol: "MIOTA",
    tradeable: false,
  },
  {
    label: "Terra",
    symbol: "LUNA",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/LUNA.jpg",
  },
  {
    label: "Neo",
    symbol: "NEO",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/neo.svg",
  },
  {
    label: "Tezos",
    symbol: "XTZ",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/xtz.svg",
  },
  {
    label: "FTX Token",
    symbol: "FTT",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/FTXTOKEN.png",
  },
  {
    label: "VeChain",
    symbol: "VET",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/vet.png",
  },
  {
    label: "Dai",
    symbol: "DAI",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/DAI.svg",
  },
  {
    label: "Dash",
    symbol: "DASH",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/dash.svg",
  },
  {
    label: "Binance USD",
    symbol: "BUSD",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/BUSD.png",
  },
  {
    label: "Maker",
    symbol: "MKR",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/MKR.svg",
  },
  {
    label: "Avalanche",
    symbol: "AVAX",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/AVAX.png",
  },
  {
    label: "Kusama",
    symbol: "KSM",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/KSM.jpg",
  },
  {
    label: "The Graph",
    symbol: "GRT",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/GRT.jpg",
  },
  {
    label: "Filecoin",
    symbol: "FIL",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/FIL.png",
  },
  {
    label: "Synthetix",
    symbol: "SNX",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/SNX.png",
  },
  {
    label: "UNUS SED LEO",
    symbol: "LEO",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/leotoken.png",
  },
  {
    label: "Algorand",
    symbol: "ALGO",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ALGO.png",
  },
  {
    label: "Elrond",
    symbol: "EGLD",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/EGLD.jpeg",
  },
  {
    label: "SushiSwap",
    symbol: "SUSHI",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/SUSHI.png",
  },
  {
    label: "Compound",
    symbol: "COMP",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/COMP.png",
  },
  {
    label: "Decred",
    symbol: "DCR",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/dcr.svg",
  },
  {
    label: "Ravencoin",
    symbol: "RVN",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/rvn.png",
  },
  {
    label: "PancakeSwap",
    symbol: "CAKE",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/CAKE.jpg",
  },
  {
    label: "Zcash",
    symbol: "ZEC",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/zec.svg",
  },
  {
    label: "BitTorrent",
    symbol: "BTT",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/bittorrent.png",
  },
  {
    label: "Voyager Token",
    symbol: "VGX",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ETHOS.png",
  },
  {
    label: "Ethereum Classic",
    symbol: "ETC",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/etc.svg",
  },
  {
    label: "Celsius",
    symbol: "CEL",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/cel.jpg",
  },
  {
    label: "yearn.finance",
    symbol: "YFI",
    tradeable: true,
    iconUrl:
      "https://nomics-api.s3.us-east-2.amazonaws.com/static/images/currencies/YFI.png",
  },
  {
    label: "UMA",
    symbol: "UMA",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/UMA.jpeg",
  },
  {
    label: "Fantom",
    symbol: "FTM",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ftm.png",
  },
  {
    label: "0x",
    symbol: "ZRX",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/zrx.svg",
  },
  {
    label: "Zilliqa",
    symbol: "ZIL",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/zil.svg",
  },
  {
    label: "Nexo",
    symbol: "NEXO",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/nexo.png",
  },
  {
    label: "Revain",
    symbol: "REV",
    tradeable: false,
  },
  {
    label: "Ren",
    symbol: "REN",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ren.jpg",
  },
  {
    label: "THORChain",
    symbol: "RUNE",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/RUNE.png",
  },
  {
    label: "OKB",
    symbol: "OKB",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/OKB.png",
  },
  {
    label: "SwissBorg",
    symbol: "CHSB",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/CHSB.png",
  },
  {
    label: "Waves",
    symbol: "WAVES",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/WAVES.png",
  },
  {
    label: "NEAR Protocol",
    symbol: "NEAR",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/NEAR.jpg",
  },
  {
    label: "renBTC",
    symbol: "RENBTC",
    tradeable: false,
  },
  {
    label: "Hedera Hashgraph",
    symbol: "HBAR",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/HBAR.jpg",
  },
  {
    label: "ICON",
    symbol: "ICX",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/icx.svg",
  },
  {
    label: "IOST",
    symbol: "IOST",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/iost.svg",
  },
  {
    label: "DigiByte",
    symbol: "DGB",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/dgb.svg",
  },
  {
    label: "Ontology",
    symbol: "ONT",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/ONT.png",
  },
  {
    label: "Celo",
    symbol: "CELO",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/CELO.svg",
  },
  {
    label: "Bancor",
    symbol: "BNT",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/bnt.svg",
  },
  {
    label: "Paxos Standard",
    symbol: "PAX",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/pax.png",
  },
  {
    label: "Bitcoin BEP2",
    symbol: "BTCB",
    tradeable: false,
  },
  {
    label: "Basic Attention Token",
    symbol: "BAT",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/bat.svg",
  },
  {
    label: "Nano",
    symbol: "NANO",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/nano.svg",
  },
  {
    label: "Polygon",
    symbol: "MATIC",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/matic.png",
  },
  {
    label: "Loopring",
    symbol: "LRC",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/LRC.jpg",
  },
  {
    label: "HUSD",
    symbol: "HUSD",
    tradeable: false,
  },
  {
    label: "OMG Network",
    symbol: "OMG",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/OMG.jpeg",
  },
  {
    label: "TerraUSD",
    symbol: "UST",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/UST2.png",
  },
  {
    label: "Pundi X",
    symbol: "NPXS",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/npxs.png",
  },
  {
    label: "Stacks",
    symbol: "STX",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/BLOCKSTACK.png",
  },
  {
    label: "Horizen",
    symbol: "ZEN",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/zen.png",
  },
  {
    label: "Venus",
    symbol: "XVS",
    tradeable: false,
    iconUrl: "",
  },
  {
    label: "Holo",
    symbol: "HOT",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/hot.png",
  },
  {
    label: "1inch",
    symbol: "1INCH",
    tradeable: false,
  },
  {
    label: "Flow (Dapper Labs)",
    symbol: "FLOW",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/FLOW2.jpg",
  },
  {
    label: "Qtum",
    symbol: "QTUM",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/qtum.svg",
  },
  {
    label: "Curve DAO Token",
    symbol: "CRV",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/CRV2.jpg",
  },
  {
    label: "Siacoin",
    symbol: "SC",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/sc.svg",
  },
  {
    label: "Bitcoin Gold",
    symbol: "BTG",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btg.svg",
  },
  {
    label: "DODO",
    symbol: "DODO",
    tradeable: false,
  },
  {
    label: "Quant",
    symbol: "QNT",
    tradeable: false,
  },
  {
    label: "Theta Fuel",
    symbol: "TFUEL",
    tradeable: false,
  },
  {
    label: "HedgeTrade",
    symbol: "HEDG",
    tradeable: false,
  },
  {
    label: "KuCoin Token",
    symbol: "KCS",
    tradeable: false,
  },
  {
    label: "Reserve Rights",
    symbol: "RSR",
    tradeable: false,
  },
  {
    label: "Energy Web Token",
    symbol: "EWT",
    tradeable: false,
  },
  {
    label: "Ocean Protocol",
    symbol: "OCEAN",
    tradeable: false,
  },
  {
    label: "Decentraland",
    symbol: "MANA",
    tradeable: true,
  },
  {
    label: "Enjin Coin",
    symbol: "ENJ",
    tradeable: true,
  },
  {
    label: "TrueUSD",
    symbol: "TUSD",
    tradeable: false,
  },
  {
    label: "Serum",
    symbol: "SRM",
    tradeable: false,
  },
  {
    label: "Kyber Network",
    symbol: "KNC",
    tradeable: true,
  },
  {
    label: "Lisk",
    symbol: "LSK",
    tradeable: false,
  },
  {
    label: "Verge",
    symbol: "XVG",
    tradeable: false,
  },
  {
    label: "Golem",
    symbol: "GLM",
    tradeable: false,
  },
  {
    label: "Ampleforth",
    symbol: "AMPL",
    tradeable: false,
  },
  {
    label: "NuCypher",
    symbol: "NU",
    tradeable: false,
  },
  {
    label: "Status",
    symbol: "SNT",
    tradeable: false,
  },
  {
    label: "Augur",
    symbol: "REP",
    tradeable: false,
  },
  {
    label: "Band Protocol",
    symbol: "BAND",
    tradeable: true,
  },
  {
    label: "Secret",
    symbol: "SCRT",
    tradeable: false,
  },
  {
    label: "Balancer",
    symbol: "BAL",
    tradeable: true,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/BAL.png",
  },
  {
    label: "Polkastarter",
    symbol: "POLS",
    tradeable: false,
  },
  {
    label: "Helium",
    symbol: "HNT",
    tradeable: false,
  },
  {
    label: "Civic",
    symbol: "CVC",
    tradeable: false,
  },
  {
    label: "Arweave",
    symbol: "AR",
    tradeable: false,
  },
  {
    label: "Chiliz",
    symbol: "CHZ",
    tradeable: false,
  },
  {
    label: "TrustSwap",
    symbol: "SWAP",
    tradeable: false,
  },
  {
    label: "Alpha Finance Lab",
    symbol: "ALPHA",
    tradeable: false,
  },
  {
    label: "Injective Protocol",
    symbol: "INJ",
    tradeable: false,
  },
  {
    label: "IoTeX",
    symbol: "IOTX",
    tradeable: false,
  },
  {
    label: "ZB Token",
    symbol: "ZB",
    tradeable: false,
  },
  {
    label: "Nervos Network",
    symbol: "CKB",
    tradeable: false,
  },
  {
    label: "Gnosis",
    symbol: "GNO",
    tradeable: false,
  },
  {
    label: "Harmony",
    symbol: "ONE",
    tradeable: false,
  },
  {
    label: "Kava.io",
    symbol: "KAVA",
    tradeable: false,
  },
  {
    label: "Swipe",
    symbol: "SXP",
    tradeable: false,
  },
  {
    label: "Orchid",
    symbol: "OXT",
    tradeable: false,
  },
  {
    label: "Aragon",
    symbol: "ANT",
    tradeable: false,
  },
  {
    label: "Unibright",
    symbol: "UBT",
    tradeable: false,
  },
  {
    label: "Vai",
    symbol: "VAI",
    tradeable: false,
  },
  {
    label: "Numeraire",
    symbol: "NMR",
    tradeable: false,
  },
  {
    label: "Bitcoin Diamond",
    symbol: "BCD",
    tradeable: false,
  },
  {
    label: "FunFair",
    symbol: "FUN",
    tradeable: false,
  },
  {
    label: "saffron.finance",
    symbol: "SFI",
    tradeable: false,
  },
  {
    label: "RSK Infrastructure Framework",
    symbol: "RIF",
    tradeable: false,
  },
  {
    label: "Telcoin",
    symbol: "TEL",
    tradeable: false,
  },
  {
    label: "Fetch.ai",
    symbol: "FET",
    tradeable: false,
  },
  {
    label: "Kin",
    symbol: "KIN",
    tradeable: false,
  },
  {
    label: "MaidSafeCoin",
    symbol: "MAID",
    tradeable: false,
  },
  {
    label: "OriginTrail",
    symbol: "TRAC",
    tradeable: false,
  },
  {
    label: "VeThor Token",
    symbol: "VTHO",
    tradeable: false,
  },
  {
    label: "Ankr",
    symbol: "ANKR",
    tradeable: false,
  },
  {
    label: "Oasis Network",
    symbol: "ROSE",
    tradeable: false,
  },
  {
    label: "Dent",
    symbol: "DENT",
    tradeable: false,
  },
  {
    label: "Syntropy",
    symbol: "NOIA",
    tradeable: false,
  },
  {
    label: "Stratis",
    symbol: "STRAX",
    tradeable: false,
  },
  {
    label: "Komodo",
    symbol: "KMD",
    tradeable: false,
  },
  {
    label: "TomoChain",
    symbol: "TOMO",
    tradeable: false,
  },
  {
    label: "Utrust",
    symbol: "UTK",
    tradeable: false,
  },
  {
    label: "Polymath",
    symbol: "POLY",
    tradeable: false,
  },
  {
    label: "Ardor",
    symbol: "ARDR",
    tradeable: false,
  },
  {
    label: "district0x",
    symbol: "DNT",
    tradeable: false,
  },
  {
    label: "Storj",
    symbol: "STORJ",
    tradeable: false,
  },
  {
    label: "BitShares",
    symbol: "BTS",
    tradeable: false,
  },
  {
    label: "Ark",
    symbol: "ARK",
    tradeable: false,
  },
  {
    label: "BORA",
    symbol: "BORA",
    tradeable: false,
  },
  {
    label: "Steem",
    symbol: "STEEM",
    tradeable: false,
  },
  {
    label: "PAX Gold",
    symbol: "PAXG",
    tradeable: true,
  },
  {
    label: "xDai",
    symbol: "STAKE",
    tradeable: false,
  },
  {
    label: "SingularityNET",
    symbol: "AGI",
    tradeable: false,
  },
  {
    label: "MonaCoin",
    symbol: "MONA",
    tradeable: false,
  },
  {
    label: "Hifi Finance",
    symbol: "MFT",
    tradeable: false,
  },
  {
    label: "Wanchain",
    symbol: "WAN",
    tradeable: false,
  },
  {
    label: "Bytom",
    symbol: "BTM",
    tradeable: false,
  },
  {
    label: "GateToken",
    symbol: "GT",
    tradeable: false,
  },
  {
    label: "WAX",
    symbol: "WAXP",
    tradeable: false,
  },
  {
    label: "aelf",
    symbol: "ELF",
    tradeable: false,
  },
  {
    label: "ReddCoin",
    symbol: "RDD",
    tradeable: false,
  },
  {
    label: "CyberVein",
    symbol: "CVT",
    tradeable: false,
  },
  {
    label: "COTI",
    symbol: "COTI",
    tradeable: false,
  },
  {
    label: "ABBC Coin",
    symbol: "ABBC",
    tradeable: false,
  },
  {
    label: "Gemini Dollar",
    symbol: "GUSD",
    tradeable: false,
  },
  {
    label: "iExec RLC",
    symbol: "RLC",
    tradeable: false,
  },
  {
    label: "Travala.com",
    symbol: "AVA",
    tradeable: false,
  },
  {
    label: "Loom Network",
    symbol: "LOOM",
    tradeable: false,
  },
  {
    label: "MX Token",
    symbol: "MX",
    tradeable: false,
  },
  {
    label: "IRISnet",
    symbol: "IRIS",
    tradeable: false,
  },
  {
    label: "Electroneum",
    symbol: "ETN",
    tradeable: false,
  },
  {
    label: "Handshake",
    symbol: "HNS",
    tradeable: false,
  },
  {
    label: "Request",
    symbol: "REQ",
    tradeable: false,
  },
  {
    label: "JUST",
    symbol: "JST",
    tradeable: false,
  },
  {
    label: "Badger DAO",
    symbol: "BADGER",
    tradeable: false,
  },
  {
    label: "Haven Protocol",
    symbol: "XHV",
    tradeable: false,
  },
  {
    label: "Reef",
    symbol: "REEF",
    tradeable: false,
  },
  {
    label: "Uquid Coin",
    symbol: "UQC",
    tradeable: false,
  },
  {
    label: "Energi",
    symbol: "NRG",
    tradeable: false,
  },
  {
    label: "Populous",
    symbol: "PPT",
    tradeable: false,
  },
  {
    label: "Prometeus",
    symbol: "PROM",
    tradeable: false,
  },
  {
    label: "Morpheus.Network",
    symbol: "MRPH",
    tradeable: false,
  },
  {
    label: "Power Ledger",
    symbol: "POWR",
    tradeable: false,
  },
  {
    label: "Hive",
    symbol: "HIVE",
    tradeable: false,
  },
  {
    label: "DFI.Money",
    symbol: "YFII",
    tradeable: false,
  },
  {
    label: "Syscoin",
    symbol: "SYS",
    tradeable: false,
  },
  {
    label: "Bridge Oracle",
    symbol: "BRG",
    tradeable: false,
  },
  {
    label: "Creditcoin",
    symbol: "CTC",
    tradeable: false,
  },
  {
    label: "Counos X",
    symbol: "CCXX",
    tradeable: false,
  },
  {
    label: "HEX",
    symbol: "HEX",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/HEX.jpeg",
  },
  {
    label: "DeFiChain",
    symbol: "DFI",
    tradeable: false,
  },
  {
    label: "Wrapped BNB",
    symbol: "WBNB",
    tradeable: false,
  },
  {
    label: "INO COIN",
    symbol: "INO",
    tradeable: false,
  },
  {
    label: "ThoreCoin",
    symbol: "THR",
    tradeable: false,
  },
  {
    label: "ZKSwap",
    symbol: "ZKS",
    tradeable: false,
  },
  {
    label: "Insight Chain",
    symbol: "INB",
    tradeable: false,
  },
  {
    label: "Venus BNB",
    symbol: "vBNB",
    tradeable: false,
  },
  {
    label: "NXM",
    symbol: "NXM",
    tradeable: false,
  },
  {
    label: "IZE",
    symbol: "IZE",
    tradeable: false,
  },
  {
    label: "Zelwin",
    symbol: "ZLW",
    tradeable: false,
  },
  {
    label: "BitMax Token",
    symbol: "BTMX",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/BTMX.jpg",
  },
  {
    label: "Bitpanda Ecosystem Token",
    symbol: "BEST",
    tradeable: false,
  },
  {
    label: "XinFin Network",
    symbol: "XDC",
    tradeable: false,
  },
  {
    label: "Cipher Core Token",
    symbol: "CIPHC",
    tradeable: false,
  },
  {
    label: "Venus XVS",
    symbol: "vXVS",
    tradeable: false,
  },
  {
    label: "stETH (Lido)",
    symbol: "STETH",
    tradeable: false,
  },
  {
    label: "Bitcoin Cash ABC",
    symbol: "BCHA",
    tradeable: false,
  },
  {
    label: "GNY",
    symbol: "GNY",
    tradeable: false,
  },
  {
    label: "botXcoin",
    symbol: "BOTX",
    tradeable: false,
  },
  {
    label: "Huobi BTC",
    symbol: "HBTC",
    tradeable: false,
  },
  {
    label: "Amp",
    symbol: "AMP",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/AMP2.jpg",
  },
  {
    label: "The Transfer Token",
    symbol: "TTT",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/TTT2.png",
  },
  {
    label: "Mirror Protocol",
    symbol: "MIR",
    tradeable: false,
  },
  {
    label: "WhiteCoin",
    symbol: "XWC",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/xwc.jpg",
  },
  {
    label: "BakeryToken",
    symbol: "BAKE",
    tradeable: false,
  },
  {
    label: "DerivaDAO",
    symbol: "DDX",
    tradeable: false,
  },
  {
    label: "Venus BTC",
    symbol: "vBTC",
    tradeable: false,
  },
  {
    label: "SafePal",
    symbol: "SFP",
    tradeable: false,
  },
  {
    label: "MimbleWimbleCoin",
    symbol: "MWC",
    tradeable: false,
  },
  {
    label: "Akash Network",
    symbol: "AKT",
    tradeable: false,
  },
  {
    label: "Orion Protocol",
    symbol: "ORN",
    tradeable: false,
  },
  {
    label: "Eauric",
    symbol: "EAURIC",
    tradeable: false,
  },
  {
    label: "Sologenic",
    symbol: "SOLO",
    tradeable: false,
  },
  {
    label: "Largo Coin",
    symbol: "LRG",
    tradeable: false,
  },
  {
    label: "CoinMetro Token",
    symbol: "XCM",
    tradeable: false,
  },
  {
    label: "RedFOX Labs",
    symbol: "RFOX",
    tradeable: false,
  },
  {
    label: "MATH",
    symbol: "MATH",
    tradeable: false,
  },
  {
    label: "Idea Chain Coin",
    symbol: "ICH",
    tradeable: false,
  },
  {
    label: "Neutrino USD",
    symbol: "USDN",
    tradeable: false,
  },
  {
    label: "Keep Network",
    symbol: "KEEP",
    tradeable: false,
  },
  {
    label: "The Sandbox",
    symbol: "SAND",
    tradeable: true,
  },
  {
    label: "Trust Wallet Token",
    symbol: "TWT",
    tradeable: false,
  },
  {
    label: "Elitium",
    symbol: "EUM",
    tradeable: false,
  },
  {
    label: "Doctors Coin",
    symbol: "DRS",
    tradeable: false,
  },
  {
    label: "sUSD",
    symbol: "SUSD",
    tradeable: false,
  },
  {
    label: "PARSIQ",
    symbol: "PRQ",
    tradeable: false,
  },
  {
    label: "Hathor",
    symbol: "HTR",
    tradeable: false,
  },
  {
    label: "Sora",
    symbol: "XOR",
    tradeable: false,
  },
  {
    label: "SKALE Network",
    symbol: "SKL",
    tradeable: true,
  },
  {
    label: "Perpetual Protocol",
    symbol: "PERP",
    tradeable: false,
  },
  {
    label: "Linear",
    symbol: "LINA",
    tradeable: false,
  },
  {
    label: "Litentry",
    symbol: "LIT",
    tradeable: false,
  },
  {
    label: "GreenPower",
    symbol: "GRN",
    tradeable: false,
  },
  {
    label: "Raydium",
    symbol: "RAY",
    tradeable: false,
  },
  {
    label: "NFTX",
    symbol: "NFTX",
    tradeable: false,
  },
  {
    label: "Cashaa",
    symbol: "CAS",
    tradeable: false,
  },
  {
    label: "Bloomzed Loyalty Club Ticket",
    symbol: "BLCT",
    tradeable: false,
  },
  {
    label: "NewYork Exchange",
    symbol: "NYE",
    tradeable: false,
  },
  {
    label: "Harvest Finance",
    symbol: "FARM",
    tradeable: false,
  },
  {
    label: "Hegic",
    symbol: "HEGIC",
    tradeable: false,
  },
  {
    label: "Hellenic Coin",
    symbol: "HNC",
    tradeable: false,
  },
  {
    label: "Massnet",
    symbol: "MASS",
    tradeable: false,
  },
  {
    label: "Gala",
    symbol: "GALA",
    tradeable: false,
  },
  {
    label: "Mobilian Coin",
    symbol: "MBN",
    tradeable: false,
  },
  {
    label: "Chimpion",
    symbol: "BNANA",
    tradeable: false,
  },
  {
    label: "Edgeware",
    symbol: "EDG",
    tradeable: false,
  },
  {
    label: "XeniosCoin",
    symbol: "XNC",
    tradeable: false,
  },
  {
    label: "YUSRA",
    symbol: "YUSRA",
    tradeable: false,
  },
  {
    label: "Venus USDC",
    symbol: "vUSDC",
    tradeable: false,
  },
  {
    label: "Sapphire",
    symbol: "SAPP",
    tradeable: false,
  },
  {
    label: "JustLiquidity",
    symbol: "JUL",
    tradeable: false,
  },
  {
    label: "Tornado Cash",
    symbol: "TORN",
    tradeable: false,
  },
  {
    label: "Multiplier",
    symbol: "MXX",
    tradeable: false,
  },
  {
    label: "Beldex",
    symbol: "BDX",
    tradeable: false,
  },
  {
    label: "Rari Governance Token",
    symbol: "RGT",
    tradeable: false,
  },
  {
    label: "Auto",
    symbol: "AUTO",
    tradeable: false,
  },
  {
    label: "Orbit Chain",
    symbol: "ORC",
    tradeable: false,
  },
  {
    label: "DIGG",
    symbol: "DIGG",
    tradeable: false,
  },
  {
    label: "Frax",
    symbol: "FRAX",
    tradeable: false,
  },
  {
    label: "Rocket Pool",
    symbol: "RPL",
    tradeable: false,
  },
  {
    label: "Swingby",
    symbol: "SWINGBY",
    tradeable: false,
  },
  {
    label: "Beefy.Finance",
    symbol: "BIFI",
    tradeable: false,
  },
  {
    label: "Burger Swap",
    symbol: "BURGER",
    tradeable: false,
  },
  {
    label: "Mixin",
    symbol: "XIN",
    tradeable: false,
  },
  {
    label: "JulSwap",
    symbol: "JULD",
    tradeable: false,
  },
  {
    label: "Bytecoin",
    symbol: "BCN",
    tradeable: false,
  },
  {
    label: "Celer Network",
    symbol: "CELR",
    tradeable: true,
  },
  {
    label: "Livepeer",
    symbol: "LPT",
    tradeable: false,
  },
  {
    label: "AllianceBlock",
    symbol: "ALBT",
    tradeable: false,
  },
  {
    label: "Akropolis",
    symbol: "AKRO",
    tradeable: false,
  },
  {
    label: "Attila",
    symbol: "ATT",
    tradeable: false,
  },
  {
    label: "BarnBridge",
    symbol: "BOND",
    tradeable: false,
  },
  {
    label: "DuckDaoDime",
    symbol: "DDIM",
    tradeable: false,
  },
  {
    label: "Aion",
    symbol: "AION",
    tradeable: false,
  },
  {
    label: "Nexus",
    symbol: "NXS",
    tradeable: false,
  },
  {
    label: "ShareToken",
    symbol: "SHR",
    tradeable: false,
  },
  {
    label: "Cream Finance",
    symbol: "CREAM",
    tradeable: false,
  },
  {
    label: "RChain",
    symbol: "REV",
    tradeable: false,
  },
  {
    label: "Wrapped NXM",
    symbol: "WNXM",
    tradeable: false,
  },
  {
    label: "Velas",
    symbol: "VLX",
    tradeable: false,
  },
  {
    label: "LTO Network",
    symbol: "LTO",
    tradeable: false,
  },
  {
    label: "yOUcash",
    symbol: "YOUC",
    tradeable: false,
  },
  {
    label: "PIVX",
    symbol: "PIVX",
    tradeable: false,
  },
  {
    label: "Frontier",
    symbol: "FRONT",
    tradeable: false,
  },
  {
    label: "Spartan Protocol",
    symbol: "SPARTA",
    tradeable: false,
  },
  {
    label: "HARD Protocol",
    symbol: "HARD",
    tradeable: false,
  },
  {
    label: "NEST Protocol",
    symbol: "NEST",
    tradeable: false,
  },
  {
    label: "Hxro",
    symbol: "HXRO",
    tradeable: false,
  },
  {
    label: "StormX",
    symbol: "STMX",
    tradeable: false,
  },
  {
    label: "Vitae",
    symbol: "VITAE",
    tradeable: false,
  },
  {
    label: "WHALE",
    symbol: "WHALE",
    tradeable: false,
  },
  {
    label: "Ergo",
    symbol: "ERG",
    tradeable: false,
  },
  {
    label: "SparkPoint",
    symbol: "SRK",
    tradeable: false,
  },
  {
    label: "Qcash",
    symbol: "QC",
    tradeable: false,
  },
  {
    label: "QuarkChain",
    symbol: "QKC",
    tradeable: false,
  },
  {
    label: "Empty Set Dollar",
    symbol: "ESD",
    tradeable: false,
  },
  {
    label: "LBRY Credits",
    symbol: "LBC",
    tradeable: false,
  },
  {
    label: "Ultra",
    symbol: "UOS",
    tradeable: false,
  },
  {
    label: "ChainX",
    symbol: "PCX",
    tradeable: false,
  },
  {
    label: "Anyswap",
    symbol: "ANY",
    tradeable: false,
  },
  {
    label: "AXEL",
    symbol: "AXEL",
    tradeable: false,
  },
  {
    label: "Origin Protocol",
    symbol: "OGN",
    tradeable: false,
  },
  {
    label: "Aidos Kuneen",
    symbol: "ADK",
    tradeable: false,
  },
  {
    label: "Wootrade",
    symbol: "WOO",
    tradeable: false,
  },
  {
    label: "Ferrum Network",
    symbol: "FRM",
    tradeable: false,
  },
  {
    label: "Divi",
    symbol: "DIVI",
    tradeable: false,
  },
  {
    label: "bZx Protocol",
    symbol: "BZRX",
    tradeable: false,
  },
  {
    label: "Streamr",
    symbol: "DATA",
    tradeable: false,
  },
  {
    label: "Spendcoin",
    symbol: "SPND",
    tradeable: false,
  },
  {
    label: "Basid Coin",
    symbol: "BASID",
    tradeable: false,
  },
  {
    label: "DxChain Token",
    symbol: "DX",
    tradeable: false,
  },
  {
    label: "DAO Maker",
    symbol: "DAO",
    tradeable: false,
  },
  {
    label: "Gas",
    symbol: "GAS",
    tradeable: false,
  },
  {
    label: "Everest",
    symbol: "ID",
    tradeable: false,
  },
  {
    label: "Everipedia",
    symbol: "IQ",
    tradeable: false,
  },
  {
    label: "WazirX",
    symbol: "WRX",
    tradeable: false,
  },
  {
    label: "Unifi Protocol DAO",
    symbol: "UNFI",
    tradeable: false,
  },
  {
    label: "AdEx Network",
    symbol: "ADX",
    tradeable: false,
  },
  {
    label: "SUN",
    symbol: "SUN",
    tradeable: false,
  },
  {
    label: "Venus ETH",
    symbol: "vETH",
    tradeable: false,
  },
  {
    label: "Huobi Pool Token",
    symbol: "HPT",
    tradeable: false,
  },
  {
    label: "Sport and Leisure",
    symbol: "SNL",
    tradeable: false,
  },
  {
    label: "MVL",
    symbol: "MVL",
    tradeable: false,
  },
  {
    label: "WINk",
    symbol: "WIN",
    tradeable: false,
  },
  {
    label: "BOSAGORA",
    symbol: "BOA",
    tradeable: false,
  },
  {
    label: "Rewardiqa",
    symbol: "REW",
    tradeable: false,
  },
  {
    label: "API3",
    symbol: "API3",
    tradeable: false,
  },
  {
    label: "EFFORCE",
    symbol: "WOZX",
    tradeable: false,
  },
  {
    label: "COVER Protocol",
    symbol: "COVER",
    tradeable: false,
  },
  {
    label: "Phala.Network",
    symbol: "PHA",
    tradeable: false,
  },
  {
    label: "Waltonchain",
    symbol: "WTC",
    tradeable: false,
  },
  {
    label: "Poseidon Network",
    symbol: "QQQ",
    tradeable: false,
  },
  {
    label: "Atari Token",
    symbol: "ATRI",
    tradeable: false,
  },
  {
    label: "DIA",
    symbol: "DIA",
    tradeable: false,
  },
  {
    label: "Metacoin",
    symbol: "MTC",
    tradeable: false,
  },
  {
    label: "PAID Network",
    symbol: "PAID",
    tradeable: false,
  },
  {
    label: "TROY",
    symbol: "TROY",
    tradeable: false,
  },
  {
    label: "Firo",
    symbol: "FIRO",
    tradeable: false,
  },
  {
    label: "Darma Cash",
    symbol: "DMCH",
    tradeable: false,
  },
  {
    label: "Elastos",
    symbol: "ELA",
    tradeable: false,
  },
  {
    label: "Minter Network",
    symbol: "BIP",
    tradeable: false,
  },
  {
    label: "Pirate Chain",
    symbol: "ARRR",
    tradeable: false,
  },
  {
    label: "STASIS EURO",
    symbol: "EURS",
    tradeable: false,
  },
  {
    label: "KardiaChain",
    symbol: "KAI",
    tradeable: false,
  },
  {
    label: "Telos",
    symbol: "TLOS",
    tradeable: false,
  },
  {
    label: "Enzyme",
    symbol: "MLN",
    tradeable: false,
  },
  {
    label: "Venus BUSD",
    symbol: "vBUSD",
    tradeable: false,
  },
  {
    label: "BTU Protocol",
    symbol: "BTU",
    tradeable: false,
  },
  {
    label: "Oraichain Token",
    symbol: "ORAI",
    tradeable: false,
  },
  {
    label: "Dusk Network",
    symbol: "DUSK",
    tradeable: false,
  },
  {
    label: "Orbs",
    symbol: "ORBS",
    tradeable: false,
  },
  {
    label: "Centrality",
    symbol: "CENNZ",
    tradeable: false,
  },
  {
    label: "Thunder Token",
    symbol: "TT",
    tradeable: false,
  },
  {
    label: "Bondly",
    symbol: "BONDLY",
    tradeable: false,
  },
  {
    label: "Axie Infinity",
    symbol: "AXS",
    tradeable: false,
  },
  {
    label: "Klever",
    symbol: "KLV",
    tradeable: false,
  },
  {
    label: "Bitball Treasure",
    symbol: "BTRS",
    tradeable: false,
  },
  {
    label: "CertiK",
    symbol: "CTK",
    tradeable: false,
  },
  {
    label: "SOLVE",
    symbol: "SOLVE",
    tradeable: false,
  },
  {
    label: "Frax Share",
    symbol: "FXS",
    tradeable: false,
  },
  {
    label: "Tellor",
    symbol: "TRB",
    tradeable: false,
  },
  {
    label: "Marlin",
    symbol: "POND",
    tradeable: false,
  },
  {
    label: "Tokenlon Network Token",
    symbol: "LON",
    tradeable: false,
  },
  {
    label: "USDX [Kava]",
    symbol: "USDX",
    tradeable: false,
  },
  {
    label: "WaykiChain",
    symbol: "WICC",
    tradeable: false,
  },
  {
    label: "Keep3rV1",
    symbol: "KP3R",
    tradeable: false,
  },
  {
    label: "Ignis",
    symbol: "IGNIS",
    tradeable: false,
  },
  {
    label: "MANTRA DAO",
    symbol: "OM",
    tradeable: false,
  },
  {
    label: "MXC",
    symbol: "MXC",
    tradeable: false,
  },
  {
    label: "PowerPool",
    symbol: "CVP",
    tradeable: false,
  },
  {
    label: "Metal",
    symbol: "MTL",
    tradeable: false,
  },
  {
    label: "Aeternity",
    symbol: "AE",
    tradeable: false,
  },
  {
    label: "Flamingo",
    symbol: "FLM",
    tradeable: false,
  },
  {
    label: "MAPS",
    symbol: "MAPS",
    tradeable: false,
  },
  {
    label: "Zap",
    symbol: "ZAP",
    tradeable: false,
  },
  {
    label: "Bounce Token",
    symbol: "BOT",
    tradeable: false,
  },
  {
    label: "APY.Finance",
    symbol: "APY",
    tradeable: false,
  },
  {
    label: "NULS",
    symbol: "NULS",
    tradeable: false,
  },
  {
    label: "Audius",
    symbol: "AUDIO",
    tradeable: false,
  },
  {
    label: "mStable USD",
    symbol: "MUSD",
    tradeable: false,
  },
  {
    label: "MCO",
    symbol: "MCO",
    tradeable: false,
  },
  {
    label: "Goose Finance",
    symbol: "EGG",
    tradeable: false,
  },
  {
    label: "Nimiq",
    symbol: "NIM",
    tradeable: false,
  },
  {
    label: "TrueFi",
    symbol: "TRU",
    tradeable: false,
  },
  {
    label: "The Midas Touch Gold",
    symbol: "TMTG",
    tradeable: false,
  },
  {
    label: "Switcheo",
    symbol: "SWTH",
    tradeable: false,
  },
  {
    label: "RAMP",
    symbol: "RAMP",
    tradeable: false,
  },
  {
    label: "Beam",
    symbol: "BEAM",
    tradeable: false,
  },
  {
    label: "ankrETH",
    symbol: "aEth",
    tradeable: false,
  },
  {
    label: "Duck DAO (DLP Duck Token)",
    symbol: "DUCK",
    tradeable: false,
  },
  {
    label: "BigONE Token",
    symbol: "ONE",
    tradeable: false,
  },
  {
    label: "Aavegotchi",
    symbol: "GHST",
    tradeable: false,
  },
  {
    label: "Oxen",
    symbol: "LOKI",
    tradeable: false,
  },
  {
    label: "Zenon",
    symbol: "ZNN",
    tradeable: false,
  },
  {
    label: "cVault.finance",
    symbol: "CORE",
    tradeable: false,
  },
  {
    label: "Einsteinium",
    symbol: "EMC2",
    tradeable: false,
  },
  {
    label: "TitanSwap",
    symbol: "TITAN",
    tradeable: false,
  },
  {
    label: "OptionRoom",
    symbol: "ROOM",
    tradeable: false,
  },
  {
    label: "inSure DeFi",
    symbol: "SURE",
    tradeable: false,
  },
  {
    label: "HyperCash",
    symbol: "HC",
    tradeable: false,
  },
  {
    label: "Waves Enterprise",
    symbol: "WEST",
    tradeable: false,
  },
  {
    label: "Etherisc DIP Token",
    symbol: "DIP",
    tradeable: false,
  },
  {
    label: "Opium",
    symbol: "OPIUM",
    tradeable: false,
  },
  {
    label: "OctoFi",
    symbol: "OCTO",
    tradeable: false,
  },
  {
    label: "Bella Protocol",
    symbol: "BEL",
    tradeable: false,
  },
  {
    label: "Cartesi",
    symbol: "CTSI",
    tradeable: false,
  },
  {
    label: "Bonfida",
    symbol: "FIDA",
    tradeable: false,
  },
  {
    label: "Darwinia Network",
    symbol: "RING",
    tradeable: false,
  },
  {
    label: "Carry",
    symbol: "CRE",
    tradeable: false,
  },
  {
    label: "Celo Dollar",
    symbol: "CUSD",
    tradeable: false,
  },
  {
    label: "Gleec",
    symbol: "GLEEC",
    tradeable: false,
  },
  {
    label: "Bao Finance",
    symbol: "BAO",
    tradeable: false,
  },
  {
    label: "12Ships",
    symbol: "TSHP",
    tradeable: false,
  },
  {
    label: "UniLend",
    symbol: "UFT",
    tradeable: false,
  },
  {
    label: "Kadena",
    symbol: "KDA",
    tradeable: false,
  },
  {
    label: "Stakenet",
    symbol: "XSN",
    tradeable: false,
  },
  {
    label: "Contentos",
    symbol: "COS",
    tradeable: false,
  },
  {
    label: "Meta",
    symbol: "MTA",
    tradeable: false,
  },
  {
    label: "Groestlcoin",
    symbol: "GRS",
    tradeable: false,
  },
  {
    label: "v.systems",
    symbol: "VSYS",
    tradeable: false,
  },
  {
    label: "TerraKRW",
    symbol: "KRT",
    tradeable: false,
  },
  {
    label: "Dragonchain",
    symbol: "DRGN",
    tradeable: false,
  },
  {
    label: "Fusion",
    symbol: "FSN",
    tradeable: false,
  },
  {
    label: "Selfkey",
    symbol: "KEY",
    tradeable: false,
  },
  {
    label: "Wirex Token",
    symbol: "WXT",
    tradeable: false,
  },
  {
    label: "dForce",
    symbol: "DF",
    tradeable: false,
  },
  {
    label: "Render Token",
    symbol: "RNDR",
    tradeable: false,
  },
  {
    label: "Skycoin",
    symbol: "SKY",
    tradeable: false,
  },
  {
    label: "Bluzelle",
    symbol: "BLZ",
    tradeable: false,
  },
  {
    label: "Kleros",
    symbol: "PNK",
    tradeable: false,
  },
  {
    label: "MINDOL",
    symbol: "MIN",
    tradeable: false,
  },
  {
    label: "Cortex",
    symbol: "CTXC",
    tradeable: false,
  },
  {
    label: "Bankera",
    symbol: "BNK",
    tradeable: false,
  },
  {
    label: "GXChain",
    symbol: "GXC",
    tradeable: false,
  },
  {
    label: "Lambda",
    symbol: "LAMB",
    tradeable: false,
  },
  {
    label: "Rubic",
    symbol: "RBC",
    tradeable: false,
  },
  {
    label: "DigixDAO",
    symbol: "DGD",
    tradeable: false,
  },
  {
    label: "Apollo Currency",
    symbol: "APL",
    tradeable: false,
  },
  {
    label: "Ripio Credit Network",
    symbol: "RCN",
    tradeable: false,
  },
  {
    label: "suterusu",
    symbol: "SUTER",
    tradeable: false,
  },
  {
    label: "Unistake",
    symbol: "UNISTAKE",
    tradeable: false,
  },
  {
    label: "Nxt",
    symbol: "NXT",
    tradeable: false,
  },
  {
    label: "Standard Tokenization Protocol",
    symbol: "STPT",
    tradeable: false,
  },
  {
    label: "DEXTools",
    symbol: "DEXT",
    tradeable: false,
  },
  {
    label: "pNetwork",
    symbol: "PNT",
    tradeable: false,
  },
  {
    label: "Bithao",
    symbol: "BHAO",
    tradeable: false,
  },
  {
    label: "STEM CELL COIN",
    symbol: "SCC",
    tradeable: false,
  },
  {
    label: "Constellation",
    symbol: "DAG",
    tradeable: false,
  },
  {
    label: "MediBloc",
    symbol: "MED",
    tradeable: false,
  },
  {
    label: "Cindicator",
    symbol: "CND",
    tradeable: false,
  },
  {
    label: "TNC Coin",
    symbol: "TNC",
    tradeable: false,
  },
  {
    label: "Neblio",
    symbol: "NEBL",
    tradeable: false,
  },
  {
    label: "Neutrino Token",
    symbol: "NSBT",
    tradeable: false,
  },
  {
    label: "LGO Token",
    symbol: "LGO",
    tradeable: false,
  },
  {
    label: "Veritaseum",
    symbol: "VERI",
    tradeable: false,
  },
  {
    label: "Function X",
    symbol: "FX",
    tradeable: false,
  },
  {
    label: "ARPA Chain",
    symbol: "ARPA",
    tradeable: false,
  },
  {
    label: "1irstcoin",
    symbol: "FST",
    tradeable: false,
  },
  {
    label: "Decentralized Vulnerability Platform",
    symbol: "DVP",
    tradeable: false,
  },
  {
    label: "Venus USDT",
    symbol: "vUSDT",
    tradeable: false,
  },
  {
    label: "Super Zero Protocol",
    symbol: "SERO",
    tradeable: false,
  },
  {
    label: "IDEX",
    symbol: "IDEX",
    tradeable: false,
  },
  {
    label: "Vertcoin",
    symbol: "VTC",
    tradeable: false,
  },
  {
    label: "SIRIN LABS Token",
    symbol: "SRN",
    tradeable: false,
  },
  {
    label: "Nexalt",
    symbol: "XLT",
    tradeable: false,
  },
  {
    label: "Terra Virtua Kolect",
    symbol: "TVK",
    tradeable: false,
  },
  {
    label: "Meme",
    symbol: "MEME",
    tradeable: false,
  },
  {
    label: "REVV",
    symbol: "REVV",
    tradeable: false,
  },
  {
    label: "VerusCoin",
    symbol: "VRSC",
    tradeable: false,
  },
  {
    label: "AirSwap",
    symbol: "AST",
    tradeable: false,
  },
  {
    label: "USDK",
    symbol: "USDK",
    tradeable: false,
  },
  {
    label: "ArdCoin",
    symbol: "ARDX",
    tradeable: false,
  },
  {
    label: "Quantstamp",
    symbol: "QSP",
    tradeable: false,
  },
  {
    label: "88mph",
    symbol: "MPH",
    tradeable: false,
  },
  {
    label: "Phantasma",
    symbol: "SOUL",
    tradeable: false,
  },
  {
    label: "Nebulas",
    symbol: "NAS",
    tradeable: false,
  },
  {
    label: "Cocos-BCX",
    symbol: "COCOS",
    tradeable: false,
  },
  {
    label: "Shopping",
    symbol: "SPI",
    tradeable: false,
  },
  {
    label: "Sentinel Protocol",
    symbol: "UPP",
    tradeable: false,
  },
  {
    label: "PIBBLE",
    symbol: "PIB",
    tradeable: false,
  },
  {
    label: "Grin",
    symbol: "GRIN",
    tradeable: false,
  },
  {
    label: "Effect.AI",
    symbol: "EFX",
    tradeable: false,
  },
  {
    label: "Whiteheart",
    symbol: "WHITE",
    tradeable: false,
  },
  {
    label: "Namecoin",
    symbol: "NMC",
    tradeable: false,
  },
  {
    label: "PumaPay",
    symbol: "PMA",
    tradeable: false,
  },
  {
    label: "RSK Smart Bitcoin",
    symbol: "RBTC",
    tradeable: false,
  },
  {
    label: "Berry Data",
    symbol: "BRY",
    tradeable: false,
  },
  {
    label: "Anchor Neural World",
    symbol: "ANW",
    tradeable: false,
  },
  {
    label: "KLAYswap Protocol",
    symbol: "KSP",
    tradeable: false,
  },
  {
    label: "Ultiledger",
    symbol: "ULT",
    tradeable: false,
  },
  {
    label: "Basis Cash",
    symbol: "BAC",
    tradeable: false,
  },
  {
    label: "Aleph.im",
    symbol: "ALEPH",
    tradeable: false,
  },
  {
    label: "Measurable Data Token",
    symbol: "MDT",
    tradeable: false,
  },
  {
    label: "EasyFi",
    symbol: "EASY",
    tradeable: false,
  },
  {
    label: "LATOKEN",
    symbol: "LA",
    tradeable: false,
  },
  {
    label: "PEAKDEFI",
    symbol: "PEAK",
    tradeable: false,
  },
  {
    label: "BitZ Token",
    symbol: "BZ",
    tradeable: false,
  },
  {
    label: "Ducato Protocol Token",
    symbol: "DUCATO",
    tradeable: false,
  },
  {
    label: "BitKan",
    symbol: "KAN",
    tradeable: false,
  },
  {
    label: "Refereum",
    symbol: "RFR",
    tradeable: false,
  },
  {
    label: "Obyte",
    symbol: "GBYTE",
    tradeable: false,
  },
  {
    label: "VIDT Datalink",
    symbol: "VIDT",
    tradeable: false,
  },
  {
    label: "Robonomics.network",
    symbol: "XRT",
    tradeable: false,
  },
  {
    label: "Aergo",
    symbol: "AERGO",
    tradeable: false,
  },
  {
    label: "Phoenix Global",
    symbol: "PHB",
    tradeable: false,
  },
  {
    label: "Endor Protocol",
    symbol: "EDR",
    tradeable: false,
  },
  {
    label: "Quantum Resistant Ledger",
    symbol: "QRL",
    tradeable: false,
  },
  {
    label: "Navcoin",
    symbol: "NAV",
    tradeable: false,
  },
  {
    label: "FIO Protocol",
    symbol: "FIO",
    tradeable: false,
  },
  {
    label: "LGCY Network",
    symbol: "LGCY",
    tradeable: false,
  },
  {
    label: "NKN",
    symbol: "NKN",
    tradeable: false,
  },
  {
    label: "PAC Global",
    symbol: "PAC",
    tradeable: false,
  },
  {
    label: "DAD",
    symbol: "DAD",
    tradeable: false,
  },
  {
    label: "DREP",
    symbol: "DREP",
    tradeable: false,
  },
  {
    label: "Finxflo",
    symbol: "FXF",
    tradeable: false,
  },
  {
    label: "BitcoinPoS",
    symbol: "BPS",
    tradeable: false,
  },
  {
    label: "Hermez Network",
    symbol: "HEZ",
    tradeable: false,
  },
  {
    label: "Dero",
    symbol: "DERO",
    tradeable: false,
  },
  {
    label: "Sentivate",
    symbol: "SNTVT",
    tradeable: false,
  },
  {
    label: "0Chain",
    symbol: "ZCN",
    tradeable: false,
  },
  {
    label: "Presearch",
    symbol: "PRE",
    tradeable: false,
  },
  {
    label: "BnkToTheFuture",
    symbol: "BFT",
    tradeable: false,
  },
  {
    label: "Metronome",
    symbol: "MET",
    tradeable: false,
  },
  {
    label: "CryptalDash",
    symbol: "CRD",
    tradeable: false,
  },
  {
    label: "Nash Exchange",
    symbol: "NEX",
    tradeable: false,
  },
  {
    label: "Rio DeFi",
    symbol: "RFUEL",
    tradeable: false,
  },
  {
    label: "Proton",
    symbol: "XPR",
    tradeable: false,
  },
  {
    label: "ASTA",
    symbol: "ASTA",
    tradeable: false,
  },
  {
    label: "Perlin",
    symbol: "PERL",
    tradeable: false,
  },
  {
    label: "Prosper",
    symbol: "PROS",
    tradeable: false,
  },
  {
    label: "Aurora",
    symbol: "AOA",
    tradeable: false,
  },
  {
    label: "Dego Finance",
    symbol: "DEGO",
    tradeable: false,
  },
  {
    label: "BASIC",
    symbol: "BASIC",
    tradeable: false,
  },
  {
    label: "Wing",
    symbol: "WING",
    tradeable: false,
  },
  {
    label: "Rakon",
    symbol: "RKN",
    tradeable: false,
  },
  {
    label: "StableXSwap",
    symbol: "STAX",
    tradeable: false,
  },
  {
    label: "Homeros",
    symbol: "HMR",
    tradeable: false,
  },
  {
    label: "Aryacoin",
    symbol: "AYA",
    tradeable: false,
  },
  {
    label: "Crypterium",
    symbol: "CRPT",
    tradeable: false,
  },
  {
    label: "Molecular Future",
    symbol: "MOF",
    tradeable: false,
  },
  {
    label: "BoringDAO",
    symbol: "BOR",
    tradeable: false,
  },
  {
    label: "Bridge Mutual",
    symbol: "BMI",
    tradeable: false,
  },
  {
    label: "QASH",
    symbol: "QASH",
    tradeable: false,
  },
  {
    label: "Invictus Hyperion Fund",
    symbol: "IHF",
    tradeable: false,
  },
  {
    label: "Decentr",
    symbol: "DEC",
    tradeable: false,
  },
  {
    label: "GeoDB",
    symbol: "GEO",
    tradeable: false,
  },
  {
    label: "Raiden Network Token",
    symbol: "RDN",
    tradeable: false,
  },
  {
    label: "Counos Coin",
    symbol: "CCA",
    tradeable: false,
  },
  {
    label: "Helmet.insure",
    symbol: "HELMET",
    tradeable: false,
  },
  {
    label: "Xensor",
    symbol: "XSR",
    tradeable: false,
  },
  {
    label: "ZEON",
    symbol: "ZEON",
    tradeable: false,
  },
  {
    label: "TenX",
    symbol: "PAY",
    tradeable: false,
  },
  {
    label: "DigitalBits",
    symbol: "XDB",
    tradeable: false,
  },
  {
    label: "YIELD App",
    symbol: "YLD",
    tradeable: false,
  },
  {
    label: "Metaverse Dualchain Network Architecture",
    symbol: "DNA",
    tradeable: false,
  },
  {
    label: "Steem Dollars",
    symbol: "SBD",
    tradeable: false,
  },
  {
    label: "SpaceChain",
    symbol: "SPC",
    tradeable: false,
  },
  {
    label: "Chromia",
    symbol: "CHR",
    tradeable: false,
  },
  {
    label: "SALT",
    symbol: "SALT",
    tradeable: false,
  },
  {
    label: "WOM Protocol",
    symbol: "WOM",
    tradeable: false,
  },
  {
    label: "DeXe",
    symbol: "DEXE",
    tradeable: false,
  },
  {
    label: "Morpheus Labs",
    symbol: "MITX",
    tradeable: false,
  },
  {
    label: "ZeroSwap",
    symbol: "ZEE",
    tradeable: false,
  },
  {
    label: "Sentinel",
    symbol: "SENT",
    tradeable: false,
  },
  {
    label: "MiL.k",
    symbol: "MLK",
    tradeable: false,
  },
  {
    label: "Decentral Games",
    symbol: "DG",
    tradeable: false,
  },
  {
    label: "ForTube",
    symbol: "FOR",
    tradeable: false,
  },
  {
    label: "GoChain",
    symbol: "GO",
    tradeable: false,
  },
  {
    label: "Kira Network",
    symbol: "KEX",
    tradeable: false,
  },
  {
    label: "NerveNetwork",
    symbol: "NVT",
    tradeable: false,
  },
  {
    label: "Elamachain",
    symbol: "ELAMA",
    tradeable: false,
  },
  {
    label: "Dock",
    symbol: "DOCK",
    tradeable: false,
  },
  {
    label: "FC Barcelona Fan Token",
    symbol: "BAR",
    tradeable: false,
  },
  {
    label: "LUKSO",
    symbol: "LYXe",
    tradeable: false,
  },
  {
    label: "dKargo",
    symbol: "DKA",
    tradeable: false,
  },
  {
    label: "Moeda Loyalty Points",
    symbol: "MDA",
    tradeable: false,
  },
  {
    label: "SUKU",
    symbol: "SUKU",
    tradeable: false,
  },
  {
    label: "DMarket",
    symbol: "DMT",
    tradeable: false,
  },
  {
    label: "Pickle Finance",
    symbol: "PICKLE",
    tradeable: false,
  },
  {
    label: "ARMOR",
    symbol: "ARMOR",
    tradeable: false,
  },
  {
    label: "PRIZM",
    symbol: "PZM",
    tradeable: false,
  },
  {
    label: "dHedge DAO",
    symbol: "DHT",
    tradeable: false,
  },
  {
    label: "Vesper",
    symbol: "VSP",
    tradeable: false,
  },
  {
    label: "CONTRACOIN",
    symbol: "CTCN",
    tradeable: false,
  },
  {
    label: "Tixl",
    symbol: "TXL",
    tradeable: false,
  },
  {
    label: "Mithril",
    symbol: "MITH",
    tradeable: false,
  },
  {
    label: "YFDAI.FINANCE",
    symbol: "YF-DAI",
    tradeable: false,
  },
  {
    label: "Folgory Coin",
    symbol: "FLG",
    tradeable: false,
  },
  {
    label: "MovieBloc",
    symbol: "MBL",
    tradeable: false,
  },
  {
    label: "Hashgard",
    symbol: "GARD",
    tradeable: false,
  },
  {
    label: "Humanscape",
    symbol: "HUM",
    tradeable: false,
  },
  {
    label: "AMO Coin",
    symbol: "AMO",
    tradeable: false,
  },
  {
    label: "Venus SXP",
    symbol: "vSXP",
    tradeable: false,
  },
  {
    label: "Yield Optimization Platform & Protocol",
    symbol: "YOP",
    tradeable: false,
  },
  {
    label: "Hacken Token",
    symbol: "HAI",
    tradeable: false,
  },
  {
    label: "Safex Token",
    symbol: "SFT",
    tradeable: false,
  },
  {
    label: "Crust",
    symbol: "CRU",
    tradeable: false,
  },
  {
    label: "Maro",
    symbol: "MARO",
    tradeable: false,
  },
  {
    label: "Unisocks",
    symbol: "SOCKS",
    tradeable: false,
  },
  {
    label: "Stafi",
    symbol: "FIS",
    tradeable: false,
  },
  {
    label: "Galatasaray Fan Token",
    symbol: "GAL",
    tradeable: false,
  },
  {
    label: "Metadium",
    symbol: "META",
    tradeable: false,
  },
  {
    label: "AppCoins",
    symbol: "APPC",
    tradeable: false,
  },
  {
    label: "Propy",
    symbol: "PRO",
    tradeable: false,
  },
  {
    label: "Wabi",
    symbol: "WABI",
    tradeable: false,
  },
  {
    label: "Hakka.Finance",
    symbol: "HAKKA",
    tradeable: false,
  },
  {
    label: "AnimalGo",
    symbol: "GOM2",
    tradeable: false,
  },
  {
    label: "Genesis Vision",
    symbol: "GVT",
    tradeable: false,
  },
  {
    label: "VideoCoin",
    symbol: "VID",
    tradeable: false,
  },
  {
    label: "Shroom.Finance",
    symbol: "SHROOM",
    tradeable: false,
  },
  {
    label: "Factom",
    symbol: "FCT",
    tradeable: false,
  },
  {
    label: "Bifrost",
    symbol: "BFC",
    tradeable: false,
  },
  {
    label: "CUDOS",
    symbol: "CUDOS",
    tradeable: false,
  },
  {
    label: "Metaverse ETP",
    symbol: "ETP",
    tradeable: false,
  },
  {
    label: "TOP",
    symbol: "TOP",
    tradeable: false,
  },
  {
    label: "PowerTrade Fuel",
    symbol: "PTF",
    tradeable: false,
  },
  {
    label: "Davinci Coin",
    symbol: "DAC",
    tradeable: false,
  },
  {
    label: "Venus LINK",
    symbol: "vLINK",
    tradeable: false,
  },
  {
    label: "Dynamic Trading Rights",
    symbol: "DTR",
    tradeable: false,
  },
  {
    label: "CoinEx Token",
    symbol: "CET",
    tradeable: false,
  },
  {
    label: "Idle",
    symbol: "IDLE",
    tradeable: false,
  },
  {
    label: "TrueChain",
    symbol: "TRUE",
    tradeable: false,
  },
  {
    label: "Atomic Wallet Coin",
    symbol: "AWC",
    tradeable: false,
  },
  {
    label: "Newscrypto",
    symbol: "NWC",
    tradeable: false,
  },
  {
    label: "Emirex Token",
    symbol: "EMRX",
    tradeable: false,
  },
  {
    label: "BIKI",
    symbol: "BIKI",
    tradeable: false,
  },
  {
    label: "Rally",
    symbol: "RLY",
    tradeable: false,
  },
  {
    label: "Quiztok",
    symbol: "QTCON",
    tradeable: false,
  },
  {
    label: "WePower",
    symbol: "WPR",
    tradeable: false,
  },
  {
    label: "Ubiq",
    symbol: "UBQ",
    tradeable: false,
  },
  {
    label: "DSLA Protocol",
    symbol: "DSLA",
    tradeable: false,
  },
  {
    label: "KeeperDAO",
    symbol: "ROOK",
    tradeable: false,
  },
  {
    label: "Zynecoin",
    symbol: "ZYN",
    tradeable: false,
  },
  {
    label: "QLC Chain",
    symbol: "QLC",
    tradeable: false,
  },
  {
    label: "OAX",
    symbol: "OAX",
    tradeable: false,
  },
  {
    label: "Project Pai",
    symbol: "PAI",
    tradeable: false,
  },
  {
    label: "PCHAIN",
    symbol: "PI",
    tradeable: false,
  },
  {
    label: "Ruff",
    symbol: "RUFF",
    tradeable: false,
  },
  {
    label: "Props Token",
    symbol: "PROPS",
    tradeable: false,
  },
  {
    label: "Blocknet",
    symbol: "BLOCK",
    tradeable: false,
  },
  {
    label: "LockTrip",
    symbol: "LOC",
    tradeable: false,
  },
  {
    label: "Ambrosus",
    symbol: "AMB",
    tradeable: false,
  },
  {
    label: "IQeon",
    symbol: "IQN",
    tradeable: false,
  },
  {
    label: "BitcoinHD",
    symbol: "BHD",
    tradeable: false,
  },
  {
    label: "Leverj Gluon",
    symbol: "L2",
    tradeable: false,
  },
  {
    label: "S4FE",
    symbol: "S4F",
    tradeable: false,
  },
  {
    label: "Crowns",
    symbol: "CWS",
    tradeable: false,
  },
  {
    label: "LOLTOKEN",
    symbol: "LOL",
    tradeable: false,
  },
  {
    label: "VITE",
    symbol: "VITE",
    tradeable: false,
  },
  {
    label: "Venus LTC",
    symbol: "vLTC",
    tradeable: false,
  },
  {
    label: "Moss Coin",
    symbol: "MOC",
    tradeable: false,
  },
  {
    label: "Beowulf",
    symbol: "BWF",
    tradeable: false,
  },
  {
    label: "Bread",
    symbol: "BRD",
    tradeable: false,
  },
  {
    label: "MixMarvel",
    symbol: "MIX",
    tradeable: false,
  },
  {
    label: "Bitcoin 2",
    symbol: "BTC2",
    tradeable: false,
  },
  {
    label: "King DAG",
    symbol: "KDAG",
    tradeable: false,
  },
  {
    label: "SnowSwap",
    symbol: "SNOW",
    tradeable: false,
  },
  {
    label: "Essentia",
    symbol: "ESS",
    tradeable: false,
  },
  {
    label: "Alchemy Pay",
    symbol: "ACH",
    tradeable: false,
  },
  {
    label: "Kebab Token",
    symbol: "KEBAB",
    tradeable: false,
  },
  {
    label: "Falcon Project",
    symbol: "FNT",
    tradeable: false,
  },
  {
    label: "Nucleus Vision",
    symbol: "NCASH",
    tradeable: false,
  },
  {
    label: "Furucombo",
    symbol: "COMBO",
    tradeable: false,
  },
  {
    label: "GameCredits",
    symbol: "GAME",
    tradeable: false,
  },
  {
    label: "USDJ",
    symbol: "USDJ",
    tradeable: false,
  },
  {
    label: "Qubitica",
    symbol: "QBIT",
    tradeable: false,
  },
  {
    label: "Zano",
    symbol: "ZANO",
    tradeable: false,
  },
  {
    label: "Razor Network",
    symbol: "RAZOR",
    tradeable: false,
  },
  {
    label: "AMEPAY",
    symbol: "AME",
    tradeable: false,
  },
  {
    label: "Gifto",
    symbol: "GTO",
    tradeable: false,
  },
  {
    label: "PlatonCoin",
    symbol: "PLTC",
    tradeable: false,
  },
  {
    label: "Archer DAO Governance Token",
    symbol: "ARCH",
    tradeable: false,
  },
  {
    label: "Benchmark Protocol",
    symbol: "MARK",
    tradeable: false,
  },
  {
    label: "Viacoin",
    symbol: "VIA",
    tradeable: false,
  },
  {
    label: "POA",
    symbol: "POA",
    tradeable: false,
  },
  {
    label: "Hedget",
    symbol: "HGET",
    tradeable: false,
  },
  {
    label: "HUNT",
    symbol: "HUNT",
    tradeable: false,
  },
  {
    label: "Poolz Finance",
    symbol: "POOLZ",
    tradeable: false,
  },
  {
    label: "TokenClub",
    symbol: "TCT",
    tradeable: false,
  },
  {
    label: "Observer",
    symbol: "OBSR",
    tradeable: false,
  },
  {
    label: "Tachyon Protocol",
    symbol: "IPX",
    tradeable: false,
  },
  {
    label: "Dawn Protocol",
    symbol: "DAWN",
    tradeable: false,
  },
  {
    label: "CUTcoin",
    symbol: "CUT",
    tradeable: false,
  },
  {
    label: "BHPCoin",
    symbol: "BHP",
    tradeable: false,
  },
  {
    label: "Newton",
    symbol: "NEW",
    tradeable: false,
  },
  {
    label: "UniLayer",
    symbol: "LAYER",
    tradeable: false,
  },
  {
    label: "BitForex Token",
    symbol: "BF",
    tradeable: false,
  },
  {
    label: "PLATINCOIN",
    symbol: "PLC",
    tradeable: false,
  },
  {
    label: "YF Link",
    symbol: "YFL",
    tradeable: false,
  },
  {
    label: "LiquidApps",
    symbol: "DAPP",
    tradeable: false,
  },
  {
    label: "Trittium",
    symbol: "TRTT",
    tradeable: false,
  },
  {
    label: "OST",
    symbol: "OST",
    tradeable: false,
  },
  {
    label: "RING X PLATFORM",
    symbol: "RINGX",
    tradeable: false,
  },
  {
    label: "Casino Betting Coin",
    symbol: "CBC",
    tradeable: false,
  },
  {
    label: "Abyss",
    symbol: "ABYSS",
    tradeable: false,
  },
  {
    label: "FREE Coin",
    symbol: "FREE",
    tradeable: false,
  },
  {
    label: "CONUN",
    symbol: "CON",
    tradeable: false,
  },
  {
    label: "Callisto Network",
    symbol: "CLO",
    tradeable: false,
  },
  {
    label: "Peercoin",
    symbol: "PPC",
    tradeable: false,
  },
  {
    label: "Global Digital Content",
    symbol: "GDC",
    tradeable: false,
  },
  {
    label: "Rarible",
    symbol: "RARI",
    tradeable: false,
  },
  {
    label: "Swerve",
    symbol: "SWRV",
    tradeable: false,
  },
  {
    label: "Arcblock",
    symbol: "ABT",
    tradeable: false,
  },
  {
    label: "Falconswap",
    symbol: "FSW",
    tradeable: false,
  },
  {
    label: "Blox",
    symbol: "CDT",
    tradeable: false,
  },
  {
    label: "Mirrored Amazon",
    symbol: "mAMZN",
    tradeable: false,
  },
  {
    label: "Paris Saint-Germain Fan Token",
    symbol: "PSG",
    tradeable: false,
  },
  {
    label: "Cardstack",
    symbol: "CARD",
    tradeable: false,
  },
  {
    label: "Juventus Fan Token",
    symbol: "JUV",
    tradeable: false,
  },
  {
    label: "BUX Token",
    symbol: "BUX",
    tradeable: false,
  },
  {
    label: "Mirrored Netflix",
    symbol: "mNFLX",
    tradeable: false,
  },
  {
    label: "GET Protocol",
    symbol: "GET",
    tradeable: false,
  },
  {
    label: "Thugs Finance",
    symbol: "THUGS",
    tradeable: false,
  },
  {
    label: "VIDY",
    symbol: "VIDY",
    tradeable: false,
  },
  {
    label: "FirmaChain",
    symbol: "FCT",
    tradeable: false,
  },
  {
    label: "ROOBEE",
    symbol: "ROOBEE",
    tradeable: false,
  },
  {
    label: "DeFi Yield Protocol",
    symbol: "DYP",
    tradeable: false,
  },
  {
    label: "VestChain",
    symbol: "VEST",
    tradeable: false,
  },
  {
    label: "Jibrel Network",
    symbol: "JNT",
    tradeable: false,
  },
  {
    label: "YOYOW",
    symbol: "YOYOW",
    tradeable: false,
  },
  {
    label: "Tokes",
    symbol: "TKS",
    tradeable: false,
  },
  {
    label: "Mettalex",
    symbol: "MTLX",
    tradeable: false,
  },
  {
    label: "Santiment Network Token",
    symbol: "SAN",
    tradeable: false,
  },
  {
    label: "Zenfuse",
    symbol: "ZEFU",
    tradeable: false,
  },
  {
    label: "BLOCKv",
    symbol: "VEE",
    tradeable: false,
  },
  {
    label: "Mirrored Tesla",
    symbol: "mTSLA",
    tradeable: false,
  },
  {
    label: "Mirrored iShares Gold Trust",
    symbol: "mIAU",
    tradeable: false,
  },
  {
    label: "Myriad",
    symbol: "XMY",
    tradeable: false,
  },
  {
    label: "ProximaX",
    symbol: "XPX",
    tradeable: false,
  },
  {
    label: "Venus DOT",
    symbol: "vDOT",
    tradeable: false,
  },
  {
    label: "Dynamic",
    symbol: "DYN",
    tradeable: false,
  },
  {
    label: "smARTOFGIVING",
    symbol: "AOG",
    tradeable: false,
  },
  {
    label: "Lamden",
    symbol: "TAU",
    tradeable: false,
  },
  {
    label: "Emercoin",
    symbol: "EMC",
    tradeable: false,
  },
  {
    label: "PIXEL",
    symbol: "PXL",
    tradeable: false,
  },
  {
    label: "LCX",
    symbol: "LCX",
    tradeable: false,
  },
  {
    label: "Gem Exchange And Trading",
    symbol: "GXT",
    tradeable: false,
  },
  {
    label: "Egretia",
    symbol: "EGT",
    tradeable: false,
  },
  {
    label: "#MetaHash",
    symbol: "MHC",
    tradeable: false,
  },
  {
    label: "Everex",
    symbol: "EVX",
    tradeable: false,
  },
  {
    label: "Mirrored iShares Silver Trust",
    symbol: "mSLV",
    tradeable: false,
  },
  {
    label: "DOS Network",
    symbol: "DOS",
    tradeable: false,
  },
  {
    label: "PolkaBridge",
    symbol: "PBR",
    tradeable: false,
  },
  {
    label: "DATA",
    symbol: "DTA",
    tradeable: false,
  },
  {
    label: "Feathercoin",
    symbol: "FTC",
    tradeable: false,
  },
  {
    label: "reflect.finance",
    symbol: "RFI",
    tradeable: false,
  },
  {
    label: "LinkEye",
    symbol: "LET",
    tradeable: false,
  },
  {
    label: "TE-FOOD",
    symbol: "TONE",
    tradeable: false,
  },
  {
    label: "Anchor",
    symbol: "ANCT",
    tradeable: false,
  },
  {
    label: "Gulden",
    symbol: "NLG",
    tradeable: false,
  },
  {
    label: "Safe Haven",
    symbol: "SHA",
    tradeable: false,
  },
  {
    label: "Tap",
    symbol: "XTP",
    tradeable: false,
  },
  {
    label: "Hydro",
    symbol: "HYDRO",
    tradeable: false,
  },
  {
    label: "Tokamak Network",
    symbol: "TON",
    tradeable: false,
  },
  {
    label: "Muse",
    symbol: "MUSE",
    tradeable: false,
  },
  {
    label: "Mirrored Invesco QQQ Trust",
    symbol: "mQQQ",
    tradeable: false,
  },
  {
    label: "Monolith",
    symbol: "TKN",
    tradeable: false,
  },
  {
    label: "Mirrored United States Oil Fund",
    symbol: "mUSO",
    tradeable: false,
  },
  {
    label: "Mirrored Apple",
    symbol: "mAAPL",
    tradeable: false,
  },
  {
    label: "Mirrored ProShares VIX",
    symbol: "mVIXY",
    tradeable: false,
  },
  {
    label: "TEMCO",
    symbol: "TEMCO",
    tradeable: false,
  },
  {
    label: "ZBG Token",
    symbol: "ZT",
    tradeable: false,
  },
  {
    label: "FOAM",
    symbol: "FOAM",
    tradeable: false,
  },
  {
    label: "Mirrored Alibaba",
    symbol: "mBABA",
    tradeable: false,
  },
  {
    label: "Mirrored Twitter",
    symbol: "mTWTR",
    tradeable: false,
  },
  {
    label: "Achain",
    symbol: "ACT",
    tradeable: false,
  },
  {
    label: "Kcash",
    symbol: "KCASH",
    tradeable: false,
  },
  {
    label: "Mirrored Microsoft",
    symbol: "mMSFT",
    tradeable: false,
  },
  {
    label: "Viberate",
    symbol: "VIB",
    tradeable: false,
  },
  {
    label: "Epic Cash",
    symbol: "EPIC",
    tradeable: false,
  },
  {
    label: "Bibox Token",
    symbol: "BIX",
    tradeable: false,
  },
  {
    label: "SIX",
    symbol: "SIX",
    tradeable: false,
  },
  {
    label: "Smartlands Network",
    symbol: "SLT",
    tradeable: false,
  },
  {
    label: "Blockzero Labs",
    symbol: "XIO",
    tradeable: false,
  },
  {
    label: "StakeCubeCoin",
    symbol: "SCC",
    tradeable: false,
  },
  {
    label: "CargoX",
    symbol: "CXO",
    tradeable: false,
  },
  {
    label: "LikeCoin",
    symbol: "LIKE",
    tradeable: false,
  },
  {
    label: "UCA Coin",
    symbol: "UCA",
    tradeable: false,
  },
  {
    label: "DigitalNote",
    symbol: "XDN",
    tradeable: false,
  },
  {
    label: "FinNexus",
    symbol: "FNX",
    tradeable: false,
  },
  {
    label: "Unitrade",
    symbol: "TRADE",
    tradeable: false,
  },
  {
    label: "Content Value Network",
    symbol: "CVNT",
    tradeable: false,
  },
  {
    label: "Levolution",
    symbol: "LEVL",
    tradeable: false,
  },
  {
    label: "Lympo",
    symbol: "LYM",
    tradeable: false,
  },
  {
    label: "Lido DAO Token",
    symbol: "LDO",
    tradeable: false,
  },
  {
    label: "Agrello",
    symbol: "DLT",
    tradeable: false,
  },
  {
    label: "CyberMiles",
    symbol: "CMT",
    tradeable: false,
  },
  {
    label: "Alpha Quark Token",
    symbol: "AQT",
    tradeable: false,
  },
  {
    label: "Burst",
    symbol: "BURST",
    tradeable: false,
  },
  {
    label: "Particl",
    symbol: "PART",
    tradeable: false,
  },
  {
    label: "Validity",
    symbol: "VAL",
    tradeable: false,
  },
  {
    label: "Verasity",
    symbol: "VRA",
    tradeable: false,
  },
  {
    label: "DAOstack",
    symbol: "GEN",
    tradeable: false,
  },
  {
    label: "Strong",
    symbol: "STRONG",
    tradeable: false,
  },
  {
    label: "Universa",
    symbol: "UTNP",
    tradeable: false,
  },
  {
    label: "apM Coin",
    symbol: "APM",
    tradeable: false,
  },
  {
    label: "SmartCash",
    symbol: "SMART",
    tradeable: false,
  },
  {
    label: "Tokenomy",
    symbol: "TEN",
    tradeable: false,
  },
  {
    label: "NEXT",
    symbol: "NET",
    tradeable: false,
  },
  {
    label: "FNB Protocol",
    symbol: "FNB",
    tradeable: false,
  },
  {
    label: "ThoreNext",
    symbol: "THX",
    tradeable: false,
  },
  {
    label: "Monero Classic",
    symbol: "XMC",
    tradeable: false,
  },
  {
    label: "DEX",
    symbol: "DEX",
    tradeable: false,
  },
  {
    label: "Atletico De Madrid Fan Token",
    symbol: "ATM",
    tradeable: false,
  },
  {
    label: "Auctus",
    symbol: "AUC",
    tradeable: false,
  },
  {
    label: "SYNC Network",
    symbol: "SYNC",
    tradeable: false,
  },
  {
    label: "TrustVerse",
    symbol: "TRV",
    tradeable: false,
  },
  {
    label: "High Performance Blockchain",
    symbol: "HPB",
    tradeable: false,
  },
  {
    label: "Safe",
    symbol: "SAFE",
    tradeable: false,
  },
  {
    label: "Centaur",
    symbol: "CNTR",
    tradeable: false,
  },
  {
    label: "Metrix Coin",
    symbol: "MRX",
    tradeable: false,
  },
  {
    label: "BitCore",
    symbol: "BTX",
    tradeable: false,
  },
  {
    label: "FIBOS",
    symbol: "FO",
    tradeable: false,
  },
  {
    label: "Aitra",
    symbol: "AITRA",
    tradeable: false,
  },
  {
    label: "Credits",
    symbol: "CS",
    tradeable: false,
  },
  {
    label: "Zel",
    symbol: "ZEL",
    tradeable: false,
  },
  {
    label: "Peculium",
    symbol: "PCL",
    tradeable: false,
  },
  {
    label: "Kryll",
    symbol: "KRL",
    tradeable: false,
  },
  {
    label: "Hyperion",
    symbol: "HYN",
    tradeable: false,
  },
  {
    label: "Dentacoin",
    symbol: "DCN",
    tradeable: false,
  },
  {
    label: "United Traders Token",
    symbol: "UTT",
    tradeable: false,
  },
  {
    label: "NIX",
    symbol: "NIX",
    tradeable: false,
  },
  {
    label: "APIX",
    symbol: "APIX",
    tradeable: false,
  },
  {
    label: "PieDAO DOUGH v2",
    symbol: "DOUGH",
    tradeable: false,
  },
  {
    label: "Diamond Platform Token",
    symbol: "DPT",
    tradeable: false,
  },
  {
    label: "Lightning Bitcoin",
    symbol: "LBTC",
    tradeable: false,
  },
  {
    label: "Hydro Protocol",
    symbol: "HOT",
    tradeable: false,
    iconUrl:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/hot.png",
  },
  {
    label: "Geeq",
    symbol: "GEEQ",
    tradeable: false,
  },
  {
    label: "Cobak Token",
    symbol: "CBK",
    tradeable: false,
  },
  {
    label: "Nestree",
    symbol: "EGG",
    tradeable: false,
  },
  {
    label: "Fuse Network",
    symbol: "FUSE",
    tradeable: false,
  },
  {
    label: "Offshift",
    symbol: "XFT",
    tradeable: false,
  },
  {
    label: "Genaro Network",
    symbol: "GNX",
    tradeable: false,
  },
  {
    label: "Doki Doki Finance",
    symbol: "DOKI",
    tradeable: false,
  },
  {
    label: "Autonio",
    symbol: "NIOX",
    tradeable: false,
  },
  {
    label: "AS Roma Fan Token",
    symbol: "ASR",
    tradeable: false,
  },
  {
    label: "EOS Force",
    symbol: "EOSC",
    tradeable: false,
  },
  {
    label: "Heart Number",
    symbol: "HTN",
    tradeable: false,
  },
  {
    label: "Time New Bank",
    symbol: "TNB",
    tradeable: false,
  },
  {
    label: "EUNO",
    symbol: "EUNO",
    tradeable: false,
  },
  {
    label: "Lead Wallet",
    symbol: "LEAD",
    tradeable: false,
  },
  {
    label: "Eminer",
    symbol: "EM",
    tradeable: false,
  },
  {
    label: "IoT Chain",
    symbol: "ITC",
    tradeable: false,
  },
  {
    label: "Lykke",
    symbol: "LKK",
    tradeable: false,
  },
  {
    label: "SmartCredit Token",
    symbol: "SMARTCREDIT",
    tradeable: false,
  },
  {
    label: "Counterparty",
    symbol: "XCP",
    tradeable: false,
  },
  {
    label: "TriumphX",
    symbol: "TRIX",
    tradeable: false,
  },
  {
    label: "BitMart Token",
    symbol: "BMX",
    tradeable: false,
  },
  {
    label: "Aeon",
    symbol: "AEON",
    tradeable: false,
  },
  {
    label: "ScPrime",
    symbol: "SCP",
    tradeable: false,
  },
  {
    label: "Mooncoin",
    symbol: "MOON",
    tradeable: false,
  },
  {
    label: "BIZZCOIN",
    symbol: "BIZZ",
    tradeable: false,
  },
  {
    label: "Indexed Finance",
    symbol: "NDX",
    tradeable: false,
  },
  {
    label: "ILCOIN",
    symbol: "ILC",
    tradeable: false,
  },
  {
    label: "Seele-N",
    symbol: "SEELE",
    tradeable: false,
  },
  {
    label: "SingularDTV",
    symbol: "SNGLS",
    tradeable: false,
  },
  {
    label: "Orient Walt",
    symbol: "HTDF",
    tradeable: false,
  },
  {
    label: "Grid+",
    symbol: "GRID",
    tradeable: false,
  },
  {
    label: "Realio Network",
    symbol: "RIO",
    tradeable: false,
  },
  {
    label: "DragonVein",
    symbol: "DVC",
    tradeable: false,
  },
  {
    label: "FLO",
    symbol: "FLO",
    tradeable: false,
  },
  {
    label: "Monetha",
    symbol: "MTH",
    tradeable: false,
  },
  {
    label: "SmartMesh",
    symbol: "SMT",
    tradeable: false,
  },
  {
    label: "SONM",
    symbol: "SNM",
    tradeable: false,
  },
  {
    label: "STATERA",
    symbol: "STA",
    tradeable: false,
  },
  {
    label: "Valor Token",
    symbol: "VALOR",
    tradeable: false,
  },
  {
    label: "Marscoin",
    symbol: "MARS",
    tradeable: false,
  },
  {
    label: "SaTT",
    symbol: "SATT",
    tradeable: false,
  },
  {
    label: "ELYSIA",
    symbol: "EL",
    tradeable: false,
  },
  {
    label: "Origin Dollar",
    symbol: "OUSD",
    tradeable: false,
  },
  {
    label: "SEEN",
    symbol: "SEEN",
    tradeable: false,
  },
  {
    label: "Phore",
    symbol: "PHR",
    tradeable: false,
  },
  {
    label: "AnRKey X",
    symbol: "$ANRX",
    tradeable: false,
  },
  {
    label: "Filecash",
    symbol: "FIC",
    tradeable: false,
  },
  {
    label: "Fyooz",
    symbol: "FYZ",
    tradeable: false,
  },
  {
    label: "QuickX Protocol",
    symbol: "QCX",
    tradeable: false,
  },
  {
    label: "All Sports",
    symbol: "SOC",
    tradeable: false,
  },
  {
    label: "Stealth",
    symbol: "XST",
    tradeable: false,
  },
  {
    label: "42-coin",
    symbol: "42",
    tradeable: false,
  },
  {
    label: "Bird.Money",
    symbol: "BIRD",
    tradeable: false,
  },
  {
    label: "Noku",
    symbol: "NOKU",
    tradeable: false,
  },
  {
    label: "VNX Exchange",
    symbol: "VNXLU",
    tradeable: false,
  },
  {
    label: "BOLT",
    symbol: "BOLT",
    tradeable: false,
  },
  {
    label: "Idena",
    symbol: "IDNA",
    tradeable: false,
  },
  {
    label: "Mobius",
    symbol: "MOBI",
    tradeable: false,
  },
  {
    label: "YVS.Finance",
    symbol: "YVS",
    tradeable: false,
  },
  {
    label: "Wagerr",
    symbol: "WGR",
    tradeable: false,
  },
  {
    label: "Nord Finance",
    symbol: "NORD",
    tradeable: false,
  },
  {
    label: "REPO",
    symbol: "REPO",
    tradeable: false,
  },
  {
    label: "Covesting",
    symbol: "COV",
    tradeable: false,
  },
  {
    label: "FLETA",
    symbol: "FLETA",
    tradeable: false,
  },
  {
    label: "SunContract",
    symbol: "SNC",
    tradeable: false,
  },
  {
    label: "Pillar",
    symbol: "PLR",
    tradeable: false,
  },
  {
    label: "Cryptocean",
    symbol: "CRON",
    tradeable: false,
  },
  {
    label: "BIDR",
    symbol: "BIDR",
    tradeable: false,
  },
  {
    label: "Penta",
    symbol: "PNT",
    tradeable: false,
  },
  {
    label: "DEAPcoin",
    symbol: "DEP",
    tradeable: false,
  },
  {
    label: "Stake DAO",
    symbol: "SDT",
    tradeable: false,
  },
  {
    label: "SwftCoin",
    symbol: "SWFTC",
    tradeable: false,
  },
  {
    label: "GoCrypto Token",
    symbol: "GOC",
    tradeable: false,
  },
  {
    label: "ColossusXT",
    symbol: "COLX",
    tradeable: false,
  },
  {
    label: "PotCoin",
    symbol: "POT",
    tradeable: false,
  },
  {
    label: "Pundi X NEM",
    symbol: "NPXSXEM",
    tradeable: false,
  },
  {
    label: "Litecoin Cash",
    symbol: "LCC",
    tradeable: false,
  },
  {
    label: "qiibee",
    symbol: "QBX",
    tradeable: false,
  },
  {
    label: "Nsure.Network",
    symbol: "NSURE",
    tradeable: false,
  },
  {
    label: "Enecuum",
    symbol: "ENQ",
    tradeable: false,
  },
  {
    label: "AGA Token",
    symbol: "AGA",
    tradeable: false,
  },
  {
    label: "CanYaCoin",
    symbol: "CAN",
    tradeable: false,
  },
  {
    label: "OG Fan Token",
    symbol: "OG",
    tradeable: false,
  },
  {
    label: "Mysterium",
    symbol: "MYST",
    tradeable: false,
  },
  {
    label: "Bonded Finance",
    symbol: "BOND",
    tradeable: false,
  },
  {
    label: "WeShow Token",
    symbol: "WET",
    tradeable: false,
  },
  {
    label: "Darwinia Commitment Token",
    symbol: "KTON",
    tradeable: false,
  },
  {
    label: "Atlas Protocol",
    symbol: "ATP",
    tradeable: false,
  },
  {
    label: "MediShares",
    symbol: "MDS",
    tradeable: false,
  },
  {
    label: "X-CASH",
    symbol: "XCASH",
    tradeable: false,
  },
  {
    label: "DePay",
    symbol: "DEPAY",
    tradeable: false,
  },
  {
    label: "Matrix AI Network",
    symbol: "MAN",
    tradeable: false,
  },
  {
    label: "Diamond",
    symbol: "DMD",
    tradeable: false,
  },
  {
    label: "HOLD",
    symbol: "HOLD",
    tradeable: false,
  },
  {
    label: "DMM: Governance",
    symbol: "DMG",
    tradeable: false,
  },
  {
    label: "Fatcoin",
    symbol: "FAT",
    tradeable: false,
  },
  {
    label: "CWV Chain",
    symbol: "CWV",
    tradeable: false,
  },
  {
    label: "Venus DAI",
    symbol: "vDAI",
    tradeable: false,
  },
  {
    label: "QuadrantProtocol",
    symbol: "EQUAD",
    tradeable: false,
  },
  {
    label: "Open Governance Token",
    symbol: "OPEN",
    tradeable: false,
  },
  {
    label: "Banano",
    symbol: "BAN",
    tradeable: false,
  },
  {
    label: "BLink",
    symbol: "BLINK",
    tradeable: false,
  },
  {
    label: "BuySell",
    symbol: "BULL",
    tradeable: false,
  },
  {
    label: "T.OS",
    symbol: "TOSC",
    tradeable: false,
  },
  {
    label: "PlayFuel",
    symbol: "PLF",
    tradeable: false,
  },
  {
    label: "Aragon Court",
    symbol: "ANJ",
    tradeable: false,
  },
  {
    label: "CasinoCoin",
    symbol: "CSC",
    tradeable: false,
  },
  {
    label: "Smart MFG",
    symbol: "MFG",
    tradeable: false,
  },
  {
    label: "U Network",
    symbol: "UUU",
    tradeable: false,
  },
  {
    label: "Panda Yield",
    symbol: "BBOO",
    tradeable: false,
  },
  {
    label: "ODEM",
    symbol: "ODE",
    tradeable: false,
  },
  {
    label: "carVertical",
    symbol: "CV",
    tradeable: false,
  },
  {
    label: "BTSE",
    symbol: "BTSE",
    tradeable: false,
  },
  {
    label: "SOMESING",
    symbol: "SSX",
    tradeable: false,
  },
  {
    label: "Digitex",
    symbol: "DGTX",
    tradeable: false,
  },
  {
    label: "Minereum",
    symbol: "MNE",
    tradeable: false,
  },
  {
    label: "Chi Gastoken",
    symbol: "CHI",
    tradeable: false,
  },
  {
    label: "Blockchain Certified Data Token",
    symbol: "BCDT",
    tradeable: false,
  },
  {
    label: "Skrumble Network",
    symbol: "SKM",
    tradeable: false,
  },
  {
    label: "XMax",
    symbol: "XMX",
    tradeable: false,
  },
  {
    label: "Gameswap",
    symbol: "GSWAP",
    tradeable: false,
  },
  {
    label: "BitGreen",
    symbol: "BITG",
    tradeable: false,
  },
  {
    label: "Raven Protocol",
    symbol: "RAVEN",
    tradeable: false,
  },
  {
    label: "PANTHEON X",
    symbol: "XPN",
    tradeable: false,
  },
  {
    label: "Pluton",
    symbol: "PLU",
    tradeable: false,
  },
  {
    label: "UnlimitedIP",
    symbol: "UIP",
    tradeable: false,
  },
  {
    label: "ASKO",
    symbol: "ASKO",
    tradeable: false,
  },
  {
    label: "Precium",
    symbol: "PCM",
    tradeable: false,
  },
  {
    label: "HitChain",
    symbol: "HIT",
    tradeable: false,
  },
  {
    label: "Amoveo",
    symbol: "VEO",
    tradeable: false,
  },
  {
    label: "Jobchain",
    symbol: "JOB",
    tradeable: false,
  },
  {
    label: "YOU COIN",
    symbol: "YOU",
    tradeable: false,
  },
  {
    label: "Ternio",
    symbol: "TERN",
    tradeable: false,
  },
  {
    label: "Parachute",
    symbol: "PAR",
    tradeable: false,
  },
  {
    label: "TENT",
    symbol: "TENT",
    tradeable: false,
  },
  {
    label: "Earneo",
    symbol: "RNO",
    tradeable: false,
  },
  {
    label: "Sphere",
    symbol: "SPHR",
    tradeable: false,
  },
  {
    label: "Remme",
    symbol: "REM",
    tradeable: false,
  },
  {
    label: "DeepBrain Chain",
    symbol: "DBC",
    tradeable: false,
  },
  {
    label: "TronEuropeRewardCoin",
    symbol: "TERC",
    tradeable: false,
  },
  {
    label: "Valobit",
    symbol: "VBIT",
    tradeable: false,
  },
  {
    label: "Jarvis Network",
    symbol: "JRT",
    tradeable: false,
  },
  {
    label: "MahaDAO",
    symbol: "MAHA",
    tradeable: false,
  },
  {
    label: "AIDUS TOKEN",
    symbol: "AIDUS",
    tradeable: false,
  },
  {
    label: "Odyssey",
    symbol: "OCN",
    tradeable: false,
  },
  {
    label: "EXMO Coin",
    symbol: "EXM",
    tradeable: false,
  },
  {
    label: "XYO",
    symbol: "XYO",
    tradeable: false,
  },
  {
    label: "MIR COIN",
    symbol: "MIR",
    tradeable: false,
  },
  {
    label: "KARMA",
    symbol: "KARMA",
    tradeable: false,
  },
  { ...unknown },
];

export default cryptos;
