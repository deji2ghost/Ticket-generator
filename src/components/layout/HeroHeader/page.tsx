
const HeroHeader = ({title, subTitle}: { title: string, subTitle: number}) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[18px] border-b-3 border-[#24A0B5]">{title}</h1>
      <p className="text-[13px]">step{subTitle}/3</p>
    </div>
  )
}

export default HeroHeader
