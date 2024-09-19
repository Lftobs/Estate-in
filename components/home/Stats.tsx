

type propsType = {
    text : string,
    count: string | number,
    extra?: string | null
}

const Stats = ({text, count, extra}: propsType) => {
  return (
    <>
    <div className={`p-4 pl-5 bg-hero-img-bg w-56 ring-1 ring-border-black rounded-lg max-2xl:min-w-[6rem] max-2xl:w-auto ${extra}`}>
        <h1 className='font-semibold text-xl'>{count}+</h1>
        <p className='mt-3  opacity-60 font-medium text-sm'>{text}</p>
    </div>
    </>
  )
}

export default Stats