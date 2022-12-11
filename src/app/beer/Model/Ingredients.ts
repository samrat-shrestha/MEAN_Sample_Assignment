export interface Ingredients {
    malt: Malt[]
    hops: Hop[]
    yeast: string
}

export interface Malt {
    name: string
    amount: Amount
}

export interface Amount {
    value: number
    unit: string
}

export interface Hop {
    name: string
    amount: Amount
    add: string
    attribute: string
}