import { CheckoutCart } from "@/components/pricing-templates/checkout-cart"
import { Suspense } from "react"

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <CheckoutCart />
    </Suspense>
  )
}
