'use server'

// 這個函式會在表單送出時被呼叫(在伺服器上)
export async function addToCart(prevState, formData) {
  const itemID = formData.get('itemID')

  if (itemID === '1') {
    return 'Added to cart'
  } else {
    // Add a fake delay to make waiting noticeable.
    await new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })

    return "Couldn't add to cart: the item is sold out."
  }
}
