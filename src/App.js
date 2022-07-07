import WSPGallery from './components/WSPGallery';
import './index.css'

function App() {

  const galleryImages = [
    {
      img: 'https://cdn.pixabay.com/photo/2020/03/28/16/03/dog-4977599_960_720.jpg'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2016/02/07/20/38/computer-1185569_960_720.jpg'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2014/12/29/15/36/business-582912_960_720.jpg'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/02/26/04/02/woman-2099466_960_720.jpg'
    },
    {
      img: 'https://cdn.pixabay.com/photo/2016/12/07/22/33/laptop-1890547_960_720.jpg'
    }
  ]

  return (
    <div className="App">
      <br/>
      <div className='header'>
        <strong>Photographer's Showcase</strong>
      </div>
      <br/><br/>

      <WSPGallery
        galleryImages={galleryImages}
      />

      <br/><br/>
    </div>
  );
}

export default App;
