import Button from './_components/button'

export default async function Page() {
  return (
    <>
      <Button
        title="Press me"
        // onClickMe={async () => {
        //   'use server'
        //   // 以下的程式碼是執行在伺服器上.
        //   console.log('Button clicked')
        //   return '...'
        // }}
      />
    </>
  )
}
