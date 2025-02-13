
const HeroHeader = ({title, subTitle}: { title: string, subTitle: number}) => {
  return (
    <div className="flex items-center justify-between">
      <h1>{title}</h1>
      <p>step{subTitle}/3</p>
    </div>
  )
}

export default HeroHeader
