import './Numbers.scss'

function Numbers() {

const data = [
    {
        title: 'Years of Experience',
        value: '10+'
    },
    {
        title: 'Years of Experience',
        value: '10+'
    },
    {
        title: 'Years of Experience',
        value: '10+'
    },
    {
        title: 'Years of Experience',
        value: '10+'
    },
    
];

  return (
    <div className="app__wrapper ">
      <div className="px-20 py-12 h-[80vh]">
      <h1 className="h1-text">Numbers speak for themselves</h1>

<div className="app__number-div ">
  {data.map((item, index) => (
    <div 

    className='app__number-item '
    key={ index}
    >
      <h2 className='bold-text text-white'>{item.value}</h2>
      <p className='p-text text-[white] text-center font-normal'>{item.title}</p>


    </div>
  ))}
  </div>

      </div>
          </div>
  )
}

export default Numbers
