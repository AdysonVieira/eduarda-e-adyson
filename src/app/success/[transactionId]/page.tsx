import React from 'react'

interface SuccessPageProps {
  params: {
    transactionId: string
  }
}

const SuccessPage = ({params: { transactionId }}: SuccessPageProps) => {
  return (
    <div>
      <h1>Pagamento confirmado</h1>
    </div>
  )
}

export default SuccessPage
