import { ImagesContainer } from 'src/containers'

const Images = () => {
  return (
    <div id="profile-images" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <ImagesContainer />
    </div>
  )
}

export default Images
