
const HeroHeader = ({title, subTitle}: { title: string, subTitle: number}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <h1 className="text-[18px]">{title}</h1>
      <p className="text-[13px]">step{subTitle}/3</p>
    </div>
  )
}

export default HeroHeader
