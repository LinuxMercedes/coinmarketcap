import * as querystring from 'querystring'
var fetch = require('node-fetch');

export async function ticker (opts?: { limit?: number, convert?: string }): Object {
  const query = querystring.stringify(opts)
  const res = await fetch(`https://api.coinmarketcap.com/v1/ticker/?${query}`)
  return res.json()
}

export async function tickerByAsset (asset: string, opts?: { convert?: string }): Object {
  const query = querystring.stringify(opts)
  const res = await fetch(`https://api.coinmarketcap.com/v1/ticker/${asset}/?${query}`)
  const [data] = await res.json()
  return data
}

export async function globalMarket (opts?: { convert?: string }): Object {
  const query = querystring.stringify(opts)
  const res = await fetch(`https://api.coinmarketcap.com/v1/global/?${query}`)
  return res.json()
}
