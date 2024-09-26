export const formartCurrency = (number: number) => {
  return number.toLocaleString("pt-BR",{ 
    style: "currency",
    currency: 'BRL'
  })
}